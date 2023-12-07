'use client'
import Container from "@/app/components/Container";
import {TbBeach, TbMountain, TbPool} from "react-icons/tb";
import {
    GiBarn,
    GiBoatFishing,
    GiCactus,
    GiCastle,
    GiCaveEntrance,
    GiForestCamp,
    GiIsland,
    GiWindmill
} from "react-icons/gi";
import {MdOutlineVilla} from "react-icons/md";
import CategoryBox from "../CategoryBox"
import {usePathname, useSearchParams} from "next/navigation";
import {FaSkiing} from "react-icons/fa";
import {BsSnow} from "react-icons/bs";
import {IoDiamond} from "react-icons/io5";

export const categories = [
    {
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
    },
    {
        label: 'Campo',
        icon: TbMountain,
        description: 'La casa esta en el campo'
    },
    {
        label: 'Piscinas',
        icon: TbPool,
        description: 'La casa tiene una o mas piscinas'
    },
    {
        label: 'Islas',
        icon: GiIsland,
        description: 'Se encuentra en una isla'
    },
    {
        label: 'Lago',
        icon: GiBoatFishing,
        description: 'La casa se encuentra cerca de un lago'
    },
    {
        label: 'Ski',
        icon: FaSkiing,
        description: 'Facilidad para practicar actividades de ski'
    },
    {
        label: 'Castillos',
        icon: GiCastle,
        description: 'La casa esta cerca de un castillo'
    },
    {
        label: 'Camping',
        icon: GiForestCamp,
        description: 'La casa tiene actividades de camping'
    },
    {
        label: 'Nieve',
        icon: BsSnow,
        description: 'La casa se encuentra en paisajes nevados'
    },
    {
        label: 'Cueva',
        icon: GiCaveEntrance,
        description: 'Hay una cueva cerca de la casa'
    },
    {
        label: 'Desierto',
        icon: GiCactus,
        description: 'ESta casa se encuentra en un desierto'
    },
    {
        label: 'Granero',
        icon: GiBarn,
        description: 'La casa tiene un granero'
    },
    {
        label: 'Lujo',
        icon: IoDiamond,
        description: 'Las casas mas lujosas'
    }


]

const Categories= () => {
    const params = useSearchParams();
    const category = params?.get("category");
    const pathname = usePathname()

    const isMainPage = pathname === "/";

    if(!isMainPage){
        return null;
    }
    return (
        <Container>
            <div className="pt-3 flex flex-row items-center justify-between overflow-x-auto">
                {categories.map((item, index) => (
                    <CategoryBox
                        key={index}
                        icon={item.icon}
                        label={item.label}
                        selected={category === item.label}
                    />
                ))}
            </div>
        </Container>
    )
}

export default Categories