'use client'
import Container from "@/app/components/Container";
import {TbBeach} from "react-icons/tb";
import {GiWindmill} from "react-icons/gi";
import {MdOutlineVilla} from "react-icons/md";
import CategoryBox from "../CategoryBox"

export const categories = [{
    label: 'Playa',
    icon: TbBeach,
    description: 'Esta casa esta cerca de la playa'
},
    {
        label: 'Molinos',
        icon: GiWindmill,
        description: 'Esta casa esta cerca o contiene molinos'
    },
    {
        label: 'Moderna',
        icon: MdOutlineVilla,
        description: 'Esta casa es de estilo moderno'
    }

]

const Categories= () => {
    return (
        <Container>
            <div className="pt4 flex flex-row items-center justify-between overflow-x-auto">
                {categories.map((item, index) => (
                    <CategoryBox key={item.label} label={item.label} description={item.description} icon={item.icon} />
                ))}
            </div>
        </Container>

    )
}

export default Categories