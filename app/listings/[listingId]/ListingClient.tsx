'use client'

import {SafeListing, SafeUser} from "@/app/types/Safe";
import {categories} from "@/app/components/navbar/Categories";
import {useCallback, useEffect, useMemo, useState} from "react";
import Container from "@/app/components/Container";
import ListingHead from "@/app/components/listings/ListingHead";
import ListingInfo from "@/app/components/listings/ListingInfo";
import useLoginModal from "@/app/hooks/UseLoginModal";
import {useRouter} from "next/navigation";
import {differenceInCalendarDays, eachDayOfInterval} from "date-fns";
import {toast} from "react-hot-toast";
import axios from "axios";

interface ListingClientProps {
    listing: SafeListing & {user: SafeUser}
    currentUser?: SafeUser | null

}
const ListingClient: React.FC<ListingClientProps> = ({
    listing,
    currentUser
}) => {
    const loginModal = useLoginModal()
    const router = useRouter()
    const category = useMemo(() => {
        return categories.find((item) => item.label === listing.category)
    }, [listing.category])

    const [isLoading, setIsLoading] = useState(false)
    const [totalPrice, setTotalPrice] = useState(listing.price)
    const [dateRange, setDateRange] = useState(initialDateRange)


    const onCreateReservation =()=>{
        toast('La funcion de reservar esta deshabilitada (por el momento)')
    }

    useEffect(() => {
        if (dateRange.startDate && dateRange.endDate) {
            const dayCount = differenceInCalendarDays(
                dateRange.endDate,
                dateRange.startDate
            );

            if (dayCount && listing.price) {
                setTotalPrice(dayCount * listing.price);
            } else {
                setTotalPrice(listing.price);
            }
        }
    }, [dateRange, listing.price]);

    return (
        <Container>
            <div className="max-w-screen-leg mx-auto">
                <div className="flex flex-col gap-6">
                    <ListingHead
                        title={listing.title}
                        imageSrc={listing.imageSrc}
                        locationValue={listing.locationValue}
                        id={listing.id}
                        currentUser={currentUser}
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
                    <ListingInfo
                        user={listing.user}
                        category={category}
                        description={listing.description}
                        roomCount={listing.roomCount}
                        guests={listing.guests}
                        bathroomCount={listing.bathroomCount}
                        locationValue={listing.locationValue}
                    />
                </div>
                <div className=" order-first mb-10 md:order-last md:col-span-3">
                    <ListingReservation
                        price={listing.price}
                        totalPrice={totalPrice}
                        onChangeDate={(value) => setDateRange(value)}
                        dateRange={dateRange}
                        onSubmit={onCreateReservation}
                        disabled={isLoading}
                    />
                </div>
            </div>
        </Container>
    )
}

export default ListingClient