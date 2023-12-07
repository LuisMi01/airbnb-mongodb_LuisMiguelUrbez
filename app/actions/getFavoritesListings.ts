import prisma from '../libs/prismadb';
import getCurrentUser from "@/app/actions/GetCurrentUser";

export default async function getFavoritesListings() {
  try {
    const currentUser = await getCurrentUser();
    if(!currentUser){return []}

    const favorites = await prisma.listing.findMany({
        where: {
            id: {
                in: [...currentUser.favoriteIds || []]
            }
        }
        });


    const safeFavorites = favorites.map((favorite) => {
        return {
            ...favorite,
            createdAt: new Date(favorite.createdAt)
        }
    })

    return safeFavorites;


  }catch (error: any){
    throw new Error(error);
}
}



