import ClientOnly from "@/app/components/ClientOnly";
import Container from "@/app/components/Container";
import EmptyState from "@/app/components/EmptyState";
import getListings from "@/app/actions/getListings";
import getCurrentUser from "@/app/actions/GetCurrentUser";

export default async function Home() {
    const listings = await getListings()
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
                <div>
                </div>
            </Container>
        </ClientOnly>
    )
}
