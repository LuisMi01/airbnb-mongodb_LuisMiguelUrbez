import {IconType} from "react-icons";
import {useRouter, useSearchParams} from "next/navigation";
import {useCallback} from "react";
import qs from "query-string"

interface CategoryBoxProps{
    icon: IconType
    label: string
    description?: string
    selected?: boolean
}

const CategoryBox: React.FC<CategoryBoxProps>= ({
    icon: Icon,
    label,
    selected,
    description
                                                })=>{
    const router = useRouter()
    const params = useSearchParams();

    const handleClick = useCallback(()=>{
        let currentQuery= {}

        if(params){
            currentQuery = qs.parse(params.toString()); //parse para que no sean objetos, sino da error
        }

        const updatedQuery: any = {
            ...currentQuery,
            category: label
        }

        if(params?.get("category") === label){
            delete updatedQuery.category;
        }

        const url = qs.stringifyUrl({
            url: '/',
            query: updatedQuery
        }, {skipNull: true});

        //este te va a pasar ya la url editada dependiendo del icono q elijo
        //si pulsas otra vez el icono elimina esa parte de la url
        router.push(url)

    }, [label, params, router]);
    return(
        <div onClick={handleClick} className={`flex flex-row gap-2 items-center justify-content p-3 border-b-2 hover:text-neutral-500 transition cursor-pointer 
        ${selected ? "border-b-neutral-700" : "border-transaparent"}
        ${selected ? "text-neutral-700" : "text-neutral-500"}}`}>
            <Icon size={26} />
            <div className="font-medium text-sm">
                {label}
            </div>
        </div>
    )
}
//con esto ya consigo forzar la url para que esta ya sepa a que categoria me estoy refiriendo
export default CategoryBox