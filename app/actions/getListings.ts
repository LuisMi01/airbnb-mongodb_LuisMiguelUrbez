import prisma from "@/app/libs/prismadb";

export interface IListingParams {
    userId?: string
    guests?: number
    roomCount?: number
    bathroomCount?: number
    startDate?: string
    endDate?: string
    locationValue?: string
    category?: string

}

export default async function getListings(
   params: IListingParams

) {


    try{
        const {
            userId,
            roomCount,
            bathroomCount,
            startDate,
            endDate,
            locationValue,
            category, guests
        } = params

        let query:any = {}

        if(userId) {
            query.userId = userId
        }
        if(category){
            query.category = category
        }

        if(roomCount){
            query.roomCount = {
                gte: +roomCount  //el + es necesario para convertir el string a number
            }
        }

        if(guests){
            query.guests = {
                gte: +guests
            }
        }

        if(bathroomCount){
            query.bathroomCount = {
                gte: +bathroomCount
            }
        }

        if (locationValue){
            query.locationValue = locationValue
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