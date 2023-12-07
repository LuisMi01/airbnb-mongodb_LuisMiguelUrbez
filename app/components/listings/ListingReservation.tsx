'use client'

import Calendar from "@/app/components/inputs/Calendar";
import {Range} from "react-date-range";
interface ListingReservationProps {
    price: number
    dateRange: Range
    totalPrice: number
    onChangeDate: (value: Range) => void
    disabled?: boolean
}
const ListingReservation: React.FC<ListingReservationProps> = ({
price,
dateRange,
totalPrice,
onChangeDate,
disabled

}) => {
    return (
        <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
            <div className="flex flex-row items-center gap-1 p-4">
                <div className="text-2xl font-semibold">
                    {price} €
                </div>
                <div className="text-neutral-500 font-light">
                    noche
                </div>

            </div>
            <hr/>
            <Calendar
                value={dateRange}
                onChange={(value) => onChangeDate(value.selection)}
            />
            <hr/>

            <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
                <div>
                    Total:
                </div>
                <div>
                    {totalPrice} €
                </div>
            </div>
        </div>
    )
}

export default ListingReservation