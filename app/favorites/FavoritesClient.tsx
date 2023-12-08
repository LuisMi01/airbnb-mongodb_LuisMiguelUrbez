'use client'

import {SafeListing, SafeUser} from "@/app/types/Safe";
import Container from "@/app/components/Container";
import Heading from "@/app/components/Heading";
import ListingCard from "@/app/components/listings/ListingCard";
import Link from 'next/link';

interface FavoritesClientProps {
    listings: SafeListing[],
    currentUser?: SafeUser | null,
}

const FavoritesClient: React.FC<FavoritesClientProps> = ({
                                                             listings,
                                                             currentUser
}) => {
    return (
        <Container>
            <Heading
                title={`Favoritos de ${currentUser?.name}`}
                subtitle="Aqui tienes una lista de tus casas favoritas."
            />
            <div className="mt-10 grid  grid-cols-1  sm:grid-cols-2   md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 ">
                {listings.map((listing: any) => (
                    <Link href={`/listings/${listing.id}`} key={listing.id}>
                        <ListingCard
                            currentUser={currentUser}
                            data={listing}
                        />
                    </Link>
                ))}
            </div>
        </Container>
    );
}

export default FavoritesClient;