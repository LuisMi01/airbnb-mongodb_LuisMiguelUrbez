'use client'

import Modal from "./Modal";
import useRegisterModal from "@/app/hooks/UseRegisterModal";

const RentModal = () => {
    const rentModal = useRegisterModal();
    return (
       <Modal
        title="Añade una casa"
        isOpen={rentModal.isOpen}
        onClose={rentModal.onClose}
        onSubmit={rentModal.onClose}
        actionLabel={"Añadir"}

       />
    )
}

export default RentModal
