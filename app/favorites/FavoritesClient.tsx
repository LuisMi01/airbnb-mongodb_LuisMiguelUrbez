'use client'

import {SafeListing, SafeUser} from "@/app/types/Safe";
import Container from "@/app/components/Container";
import Heading from "@/app/components/Heading";
import ListingCard from "@/app/components/listings/ListingCard";

interface FavoritesClientProps {
    currentUser?: SafeUser | null;
    listings: SafeListing[];

}

const FavoritesClient: React.FC<FavoritesClientProps> = ({
    currentUser,
    listings
}) => {
    return (
        <Container>
            <Heading title={`Casas favoritas de ${currentUser?.name}`} subtitle={`Aqui se muestran las casas que has guardado en favoritos`}/>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
                {listings.map((listing) => (
                     <ListingCard
                            currentUser={currentUser}
                            data={listing}
                            key={listing.id}
                            />
                ))}

            </div>
        </Container>
    )
}

export default FavoritesClient