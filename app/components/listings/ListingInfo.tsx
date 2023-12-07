'use client'

import Avatar from "@/app/components/Avatar";
import {SafeUser} from "@/app/types/Safe";
import {IconType} from "react-icons";
import React from "react";
import useCountries from "@/app/hooks/UseCountries";
import ListingCategory from "@/app/components/listings/ListingCategory";
import dynamic from "next/dynamic";

interface ListingInfoProps {
    user: SafeUser
    category: {icon: IconType, label: string, description: string} | undefined
    description: string
    roomCount: number
    guests: number
    bathroomCount: number
    locationValue: string
}

const Map = dynamic(() => import("@/app/components/Map"), {
    ssr: false
})

const ListingInfo: React.FC<ListingInfoProps> = ({
    user,
    category,
    description,
    roomCount,
    guests,
    bathroomCount,
    locationValue
}) =>{

    const {getByValue} = useCountries()

    const coordinates = getByValue(locationValue)?.latlng
    return (
        <div className="col-span-4 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <div className="text-xl font-semibold flex flex-row items-center gap-2">
                    <div>
                        Hosted by {user?.name}
                    </div>
                    <Avatar
                        src={user?.image}
                    />
                </div>
                <div className="flex flex-row items-center gap-4 font-light text-neutral-500">
                    {guests} anfitriones
                </div>
                <div className="flex flex-row items-center gap-4 font-light text-neutral-500">
                    {roomCount} habitacoines
                </div>
                <div className="flex flex-row items-center gap-4 font-light text-neutral-500">
                    {bathroomCount} baños
                </div>
            </div>
            <hr/>
            {category && (
                <ListingCategory
                    icon={category.icon}
                    label={category.label}
                    description={category.description}
                />
            )}
            <hr/>
            <div className="text-lg font-light text-neutral-500">
                {description}
            </div>
            <hr/>
            <Map center={coordinates} />
        </div>
    )
}

export default ListingInfo