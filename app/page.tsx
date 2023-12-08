'use client'
import ClientOnly from "@/app/components/ClientOnly";
import Container from "@/app/components/Container";
import EmptyState from "@/app/components/EmptyState";
import getCurrentUser from "@/app/actions/GetCurrentUser";
import React from 'react';
import ListingLoader from '@/app/ListingLoader';
import {IListingParams} from "@/app/actions/getListings";

interface HomeProps {
    searchParams: IListingParams
}

const Home = async ({searchParams}: HomeProps) => {
    const currentUser = await getCurrentUser();

    return (
        <ClientOnly>
            <div className="text-rose-500 text-2xl">Airbnb de Luis Miguel Urbez</div>
            <Container>
                <ListingLoader
                    searchParams={searchParams}
                    currentUser={currentUser}
                />
            </Container>
        </ClientOnly>
    )
}

export default Home;