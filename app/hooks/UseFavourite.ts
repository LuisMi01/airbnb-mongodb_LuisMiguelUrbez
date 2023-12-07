import axios from "axios";
import {useRouter}   from "next/navigation";
import {useCallback, useMemo} from "react";
import {toast} from "react-hot-toast";

import {SafeUser} from "../types/Safe";
import useLoginModal   from "@/app/hooks/UseLoginModal";

interface IUseFavourite {
    listingId: string;
    currentUser: SafeUser | null;
}

const useFavourite = ({listingId, currentUser}: IUseFavourite) => {
    const router = useRouter();
    const loginModal = useLoginModal();

    const hasFavourite = useMemo(() => {
        const list = currentUser?.favouritesIds || [];

        return list.includes(listingId);
    }, [currentUser, listingId]);

    const toggleFavourite = useCallback(async (  ) => {
        if (!currentUser) {
            return loginModal.onOpen();
        }

        try {
            let request;
            if (hasFavourite) {
              request = () => axios.delete(`/api/favourites/${listingId}`);
                    toast.success("Eliminado de tus favoritos");
            } else {
               request = () => axios.post(`/api/favourites/${listingId}`);
                toast.success("Añadido a los favoritos");
            }

            await request();
            router.refresh()
        } catch (error: any) {
            toast.error("Algo no ha salido bien");
        }
    }, [currentUser, hasFavourite, listingId, loginModal, router]);

    return {
        hasFavourite,
        toggleFavourite
    };
}

export default useFavourite;


