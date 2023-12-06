'use client'

import {AiOutlineMenu} from "react-icons/ai";
import Avatar from "../Avatar";
import {useCallback, useState} from "react";
import MenuItem from "@/app/components/navbar/MenuItem";
import useRegisterModal from "@/app/hooks/UseRegisterModal";
import useLoginModal from "@/app/hooks/UseLoginModal";
import {User} from "next-auth";
import {signOut} from "next-auth/react";
import registerModal from "@/app/components/modals/RegisterModal";

interface UserMenuProps {
    currentUser?: User | null;
}

const UserMenu: React.FC<UserMenuProps> = ({
                                                currentUser
                                           }) => {
    const RegisterModal = useRegisterModal();
    const LoginModal = useLoginModal();
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);
    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div onClick={() => {}} className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
                    Home
                </div>
                <div onClick={toggleOpen} className="p-4 md:py-5 md:px-7 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
                    <AiOutlineMenu/>
                    <div className="hidden md:block">
                        <Avatar src={currentUser?.image}/>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="absolute rounded-xl md:w-3/4 w-[40vw] bg-white shadow-md border overflow-hidden text-sm top-12 rigth-0">
                    <div className="flex flex-col cursor-pointer">
                        {currentUser ? (
                            <>
                                <MenuItem onClick={() => {}} label="Mis favoritos"/>
                                <MenuItem onClick={() => {}} label="Home"/>
                                <hr />

                                <MenuItem onClick={() => signOut()} label="Cerrar sesion"/>
                            </>
                            ):(
                                <>
                                    <MenuItem onClick={RegisterModal.onOpen} label="Registrarse"/>
                                    <MenuItem onClick={LoginModal.onOpen} label="Iniciar Sesion"/>
                                </>
                            )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default UserMenu;