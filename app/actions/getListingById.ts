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

        // Try to get the user
        let user = await prisma.user.findUnique({
            where: {
                id: listing.userId,
            },
        });

        // If the user doesn't exist, create a dummy user
        if (!user) {
            user = {
                id: 'unknown',
                name: null,
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