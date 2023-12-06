import ClientOnly from "@/app/components/ClientOnly";
import Container from "@/app/components/Container";
import EmptyState from "@/app/components/EmptyState";
import getListings from "@/app/actions/getListings";

export default async function Home() {
    const listings = await getListings()

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
                <div
                    className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
                    {listings.map((listing: any) => {
                        return(
                            <div>
                                {listing.name}
                            </div>
                        )
                    })
                    }
                </div>
            </Container>
        </ClientOnly>
    )
}
