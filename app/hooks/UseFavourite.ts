import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";
import { SafeUser } from "@/app/types/Safe";
import useLoginModal from "./UseLoginModal";

interface IUseFavorite {
    listingId: string;
    currentUser?: SafeUser | null
}

const useFavorite = (
    {
        listingId,
        currentUser
    }: IUseFavorite) => {

    const router = useRouter();
    const loginModal = useLoginModal();

    const hasFavorited = useMemo(() => {
        const list = currentUser?.favoriteIds || [];

        return list.includes(listingId);
    }, [currentUser, listingId]);

    const toggleFavorite = useCallback(async (e: React.MouseEvent<HTMLDivElement>) => {
            e.stopPropagation();

            if (!currentUser) {
                return loginModal.onOpen();
            }

            try {
                let request;

                if (hasFavorited) {
                    request = () => axios.delete(`/api/favorites/${listingId}`);
                    toast.success('Eliminado de favoritos');
                } else {
                    request = () => axios.post(`/api/favorites/${listingId}`);
                    toast.success('Añadido a favoritos');
                }

                await request();
                router.refresh();

            } catch (error) {
                toast.error('Algo ha ido mal');
            }
        },
        [
            currentUser,
            hasFavorited,
            listingId,
            loginModal,
            router
        ]);

    return {
        hasFavorited,
        toggleFavorite
    }
}

export default useFavorite;