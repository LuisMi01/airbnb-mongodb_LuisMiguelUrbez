import prisma from "@/app/libs/prismadb";

export default async function getListings() {
    try{
        const listings = await prisma.listing.findMany({
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