import EmptyState   from "@/app/components/EmptyState";
import getCurrentUser from "@/app/actions/GetCurrentUser";
import ClientOnly    from "@/app/components/ClientOnly";
import {router} from "next/client";
import getFavoritesListings from "@/app/actions/getFavoritesListings";
import FavoritesClient from "@/app/favorites/FavoritesClient";

const ListingPage = async () => {

    const listings = await getFavoritesListings();
    const currentUser = await getCurrentUser();

    if (listings.length > 0) {
        return (
            <ClientOnly>
                <EmptyState
                title="No tienes casas guardadas en favoritos"
                subtitle="Añade casas a tus favoritos para tenerlas siempre a mano"
                />
                <button onClick={() => router.push('/')} className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-md mt-4">
                    Busca casas!
                </button>
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