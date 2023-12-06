'use client'

import Image from "next/image";
import {Listing} from "@prisma/client";
import {SafeUser} from "@/app/types/Safe";
import {useRouter} from "next/navigation";
import useCountries from "@/app/hooks/UseCountries";
import {useCallback, useMemo} from "react";
import HeartButton from "@/app/components/HeartButton";
import Button from "@/app/components/Button";

interface ListingCardProps {
    data: Listing
    onAction?: (id: String) => void
    disabled?: boolean
    actionLabel?: string
    actionId?: string
    currentUser?: SafeUser | null
}
const ListingCard: React.FC<ListingCardProps> =({
    data,
    onAction,
    disabled,
    actionLabel,
    actionId ="",
    currentUser
}) => {
    const router = useRouter();
    const {getByValue} = useCountries()

    const location = getByValue(data.locationValue)

    const handleCancel = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation()

            if(disabled){
                return
            }

            onAction?.(actionId)
        }, [onAction, actionId, disabled]
    )

    const price = useMemo (() => {
        return data.price
    }, [data.price])




    return (
        <div onClick={() => router.push(`/listings/${data.id}`)} className="col-span-1 cursor-pointer group">
            <div className="flex flex-col gap-2 w-full">
                <div className="aspect-square w-full relative overflow-hidden rounded-xl">
                    <Image
                        alt="Listing"
                        src={data.imageSrc}
                        className={`object-cover h-full w-full group-hover:scale-110 transition` }
                        fill
                    />
                    <div className="absolute top-3 rigth-3">
                        <HeartButton
                            listingId={data.id}
                            currentUser={currentUser}
                        />
                    </div>
                </div>
                <div className="font-semibold text-lg">
                    {location?.region}, {location?.label}
                </div>
                <div className="font-light text-neutral-500">
                    {data.category}
                </div>
                <div className="flex flex-row items-center gap-1">
                    <div className="font-semibold">
                        {price} € / noche
                    </div>
                </div>
                {onAction && actionLabel && (
                    <Button
                    disabled={disabled}
                    small
                    label={actionLabel}
                    onClick={handleCancel}
                    />
                )}
            </div>
        </div>
    )
}

export default ListingCard;