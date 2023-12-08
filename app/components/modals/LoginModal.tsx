'use client'

import {signIn} from 'next-auth/react';
import {FcGoogle} from "react-icons/fc";
import {useCallback, useState} from "react";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import useRegisterModal  from "@/app/hooks/UseRegisterModal";
import Modal from "@/app/components/modals/Modal";
import Button from "../Button";
import Heading from "../Heading";
import Input from "../inputs/Input";
import {toast} from "react-hot-toast";
import useLoginModal from "@/app/hooks/UseLoginModal";
import {useRouter} from "next/navigation";
import RegisterModal from "@/app/components/modals/RegisterModal";

const LoginModal = () => {
    const router = useRouter();
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();

    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        signIn("credentials", {
            ...data,
            redirect: false,
        }).then((callback) => {
            setIsLoading(false);
            if (callback?.ok) {
                toast.success("Sesion iniciada correctamente");
                router.refresh();
                loginModal.onClose();
            }

            if (callback?.error) {
                toast.error(callback.error);
            }
        });
    };

    const toggle = useCallback(() => {
        loginModal.onClose();
        registerModal.onOpen();
    }, [loginModal, registerModal]);



    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading title="Bienvenido de nuevo" subtitle="Inicie sesion con las credenciales de su cuenta" />
            <Input
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="password"
                label="Contraseña"
                type="password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    );

    const footerContent = (
        <div className="mt-3 flex flex-col gap-4">
            <hr />
            <Button
                outline
                label="Inicia sesion con google"
                icon={FcGoogle}
                onClick={() => signIn("google")}
            />
            <div className=" mt-4 text-center font-light text-neutral-500">
                <div className=" flex flex-row items-center justify-center gap-2">
                    <div>¿Primera vez usando Airbnb?</div>
                        <div onClick={toggle} className="cursor-pointer text-neutral-800 hover:underline" >
                            Crear una cuenta
                        </div>
                </div>
            </div>
        </div>
    );
    return (
        <div>
            <Modal
                disabled={isLoading}
                isOpen={loginModal.isOpen}
                title="Iniciar sesion"
                actionLabel="Continuar"
                onClose={loginModal.onClose}
                onSubmit={handleSubmit(onSubmit)}
                body={bodyContent}
                footer={footerContent}
            />
        </div>
    );
};

export default LoginModal;