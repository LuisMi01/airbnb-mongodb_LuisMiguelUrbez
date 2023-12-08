import React, { useEffect, useState } from 'react';
import { IListingParams } from '@/app/actions/getListings';
import getListings from '@/app/actions/getListings';
import { SafeUser } from '@/app/types/Safe';
import { lazy, Suspense } from 'react';

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

interface ListingLoaderProps {
    searchParams: IListingParams;
    currentUser?: SafeUser | null;
}

const ListingCard = lazy(() => import('@/app/components/listings/ListingCard'));
const MemoizedListingCard = React.memo(ListingCard);

const ListingLoader: React.FC<ListingLoaderProps> = ({ searchParams, currentUser }) => {
    const [page, setPage] = useState(1);
    const [listings, setListings] = useState<Listing[]>([]);

    // Carga las casas para la página actual
    const loadListings = async () => {
        const newPageListings = await getListings(searchParams, page, 10);
        setListings((oldListings: Listing[]) => [...oldListings, ...newPageListings]);
    };

    // Carga las casas cuando el componente se monta y cuando la página cambia
    useEffect(() => {
        loadListings();
    }, [page]);

    if (!currentUser) {
        return <div>Loading...</div>;
    }

    return (
        <div className="pt-24 grid gril-cols-1 sm:grid-cols-2 ms:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
            {listings.map((listing) => (
                <Suspense key={"Cargando de forma concurrente"} fallback={<div>Loading...</div> }>
                    <MemoizedListingCard
                        currentUser={currentUser}
                        data={listing}
                    />
                </Suspense>
            ))}
            <button onClick={() => setPage(oldPage => oldPage + 1)}>
                Cargar más casas
            </button>
        </div>
    );
};

export default ListingLoader;