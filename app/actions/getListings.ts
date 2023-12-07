import prisma from "@/app/libs/prismadb";

export interface IListingParams {
    userId?: string
}

export default async function getListings(
   params: IListingParams
) {

    try{
        const {userId} = params

        let query:any = {}

        if(userId) {
            query.userId = userId
        }
        const listings = await prisma.listing.findMany({
            where: query,
            orderBy: {
                createdAt: 'desc'
            }
        })
        const safeListings = listings.map((listing) => ({
                ...listing,
            createdAt: new Date(listing.createdAt)
        }))
        return safeListings
        //soluciona el error al querer pasar un objeto de tipo date dentro de una clase que tiene predeterminado el 'use client'

    }catch (error: any) {
        throw error
    }
}