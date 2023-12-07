import ClientOnly from "@/app/components/ClientOnly";
import Container from "@/app/components/Container";
import EmptyState from "@/app/components/EmptyState";
import getListings, {IListingParams} from "@/app/actions/getListings";
import getCurrentUser from "@/app/actions/GetCurrentUser";
import ListingCard from "@/app/components/listings/ListingCard";

interface HomeProps {
    searchParams: IListingParams
}

const Home = async ({searchParams}: HomeProps) => {
    const listings = await getListings(searchParams)
    const currentUser = await getCurrentUser();

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
                    {listings.map((listing) => {
                        return(
                            <ListingCard
                                currentUser={currentUser}
                                key={listing.id}
                                data={listing}
                            />
                        )
                    })}
                </div>
            </Container>
        </ClientOnly>
    )
}

export default Home
