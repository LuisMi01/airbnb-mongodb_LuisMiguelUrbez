import prisma from "@/app/libs/prismadb";
import {toast} from "react-hot-toast";

interface IParams {
    listingId?: string;
}

export default async function getListingById(
    params: IParams
) {
    try {
        const { listingId } = params;

        const listing = await prisma.listing.findUnique({
            where: {
                id: listingId,
            },
        });

        if (!listing) {
            return null;
        }

        //busacmos el usuario para comprobar si existe el y la casa q creo
        let user = await prisma.user.findUnique({
            where: {
                id: listing.userId,
            },
        });

        //si el usuario no existe (ya que estoy usando un csv con usuarios random no creados a mano)
        //creo un usuario "default" para que la casa sea visible y puedas usarla
        if (!user) {
            user = {
                id: 'Usuario no definido ',
                name: 'Usuario no definido por no registrarse en la app',
                email: null,
                emailVerified: null,
                image: null,
                hashedPassword: null,
                favoriteIds: [],
                createdAt: new Date(),
                updatedAt: new Date(),
            };
        }

        return {
            ...listing,
            createdAt: new Date(listing.createdAt),
            user: {
                ...user,
                createdAt: new Date(user.createdAt),
                updatedAt: new Date(user.updatedAt),
                emailVerified: user.emailVerified?.toString() || null,
            }
        };
    } catch (error: any) {
        throw error
    }
}