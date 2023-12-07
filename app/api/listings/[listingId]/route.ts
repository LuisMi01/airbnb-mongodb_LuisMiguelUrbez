import {NextResponse} from "next/server";
import getCurrentUser from "@/app/actions/GetCurrentUser";
import prisma from "@/app/libs/prismadb";


interface IParams {
    listingId?: string
}

export async function DELETE(
    request: Request,
    {params}: { params: IParams }
){
    const currentUser = await getCurrentUser()

    if (!currentUser) {
        return NextResponse.redirect('/login')
    }

    const {listingId} = params

    if(!listingId) {
       throw new Error('ID no valido')
    }

    const listing = await prisma.listing.deleteMany({
        where: {
            id: listingId,
            userId: currentUser.id
        }
    })

    return NextResponse.json(listing)

}
