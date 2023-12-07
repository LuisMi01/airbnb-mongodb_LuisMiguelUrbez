'use client'


import {SafeUser} from "@/app/types/Safe";
import {IconType} from "react-icons";
import React from "react";

interface ListingInfoProps {
    user: SafeUser
    category: {icon: IconType, label: string, description: string} | undefined
    description: string
    roomCount: number
    guests: number
    bathroomCount: number
    locationValue: string
}
const ListingInfo: React.FC<ListingInfoProps> = ({
    user,
    category,
    description,
    roomCount,
    guests,
    bathroomCount,
    locationValue
}) =>{
    return (
        <div>

        </div>
    )
}

export default ListingInfo