import EmptyState   from "@/app/components/EmptyState";
import getCurrentUser from "@/app/actions/GetCurrentUser";
import ClientOnly    from "@/app/components/ClientOnly";
import {router} from "next/client";
import getFavoritesListings from "@/app/actions/getFavoritesListings";

const ListingPage = async () => {

    const listings = await getFavoritesListings();
    const currentUser = await getCurrentUser();

    if (listings.length > 0) {
        return (
            <ClientOnly>
                <EmptyState
                title="No tienes casas guardadas en favoritos"
                subtitle="Añade casas a tus favoritos para tenerlas siempre a mano"
                //crear un boton que te lleve a buscar casas a la pantalla de inicio

                />
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <FavoritesClient
                currentUser={currentUser}
                listings={listings}
            />
        </ClientOnly>
    )

}

export default ListingPage;