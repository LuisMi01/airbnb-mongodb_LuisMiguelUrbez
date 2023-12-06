import prisma from "@/app/libs/prismadb";

export default async function getListings() {
    try{
        const listingsAndReviews = await prisma..findMany({
            orderBy: {
                id: 'desc'
            }
        })
        return listingsAndReviews
    }catch (error: any) {
        throw new error (error)
    }
}