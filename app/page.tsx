'use client'

import ClientOnly from "@/app/components/ClientOnly";
import Container from "@/app/components/Container";
import EmptyState from "@/app/components/EmptyState";
import getListings, {IListingParams} from "@/app/actions/getListings";
import getCurrentUser from "@/app/actions/GetCurrentUser";
import React, { lazy, Suspense, useState, useEffect } from 'react';

interface HomeProps {
    searchParams: IListingParams
}

interface Listing {
    createdAt: Date;
    id: string;
    title: string;
    description: string;
    imageSrc: string;
    category: string;
    roomCount: number;
    bathroomCount: number;
    guests: number;
    locationValue: string;
    userId: string;
    price: number;
}

const Home = async ({searchParams}: HomeProps) => {
    const [page, setPage] = useState(1);
    const [listings, setListings] = useState<Listing[]>([]);

    // Carga las casas para la página actual
    const loadListings = async () => {
        const newPageListings = await getListings(searchParams, page, 10);
        setListings((oldListings: Listing[]) => [...oldListings, ...newPageListings]);    };

    // Carga las casas cuando el componente se monta y cuando la página cambia
    useEffect(() => {
        loadListings();
    }, [page]);

    const currentUser = await getCurrentUser();

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
                                data={listing}
                            />
                        </Suspense>
                    ))}
                </div>
                <button onClick={() => setPage(oldPage => oldPage + 1)}>
                    Cargar más casas
                </button>
            </Container>
        </ClientOnly>
    )
}

export default Home