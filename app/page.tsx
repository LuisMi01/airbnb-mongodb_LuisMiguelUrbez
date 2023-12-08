import ClientOnly from "@/app/components/ClientOnly";
import Container from "@/app/components/Container";
import EmptyState from "@/app/components/EmptyState";
import getListings, {IListingParams} from "@/app/actions/getListings";
import getCurrentUser from "@/app/actions/GetCurrentUser";
import React, { lazy, Suspense } from 'react';


interface HomeProps {
    searchParams: IListingParams
}

const Home = async ({searchParams}: HomeProps) => {
    //usao promise.all para que se cargue de forma paralela los componentes de la pantalla principal
    const [listings, currentUser] = await Promise.all([
        getListings(searchParams),
        getCurrentUser()
    ]);

    //cargo de forma concurrente los objetos de las casas para que la pagina no se cuelgue y cargue de forma paralela y dinamica
    const ListingCard = lazy(() => import('@/app/components/listings/ListingCard'));
    const MemoizedListingCard = React.memo(ListingCard);

    if (listings.length === 0) {
        return (
            <ClientOnly>
                <EmptyState showReset/>
            </ClientOnly>
        )
    }
    return (
        <ClientOnly>
            <div className="text-rose-500 text-2xl">Airbnb de Luis Miguel Urbez</div>
            <Container>
                <div className="pt-24 grid gril-cols-1 sm:grid-cols-2 ms:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
                    {listings.map((listing) => (
                        <Suspense key={"Cargando de forma concurrente"} fallback={<div>Loading...</div> }>
                            <MemoizedListingCard
                                currentUser={currentUser}
                                key={listing.id}
                                data={listing}
                            />
                        </Suspense>
                    ))}
                </div>
            </Container>
        </ClientOnly>
    )
}

export default Home
