'use client'
import axios from 'axios';
import {FcGoogle} from "react-icons/fc";
import {useCallback, useState} from "react";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import useRegisterModal  from "@/app/hooks/UseRegisterModal";
import Modal from "@/app/components/modals/Modal";
import Button from "../Button";
import Heading from "../Heading";
import Input from "../inputs/Input";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";
import {wait} from "next/dist/lib/wait";
import useLoginModal from "@/app/hooks/UseLoginModal";

const RegisterModal = () => {
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        axios
            .post("/api/register", data)
            .then(() => {
                toast.success("¡Éxito! Cuenta creada correctamente");
                registerModal.onClose();
            })
            .catch((error) => {
                toast.error("Algo no ha ido muy bien");
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const toggle = useCallback(() => {
        registerModal.onClose();
        loginModal.onOpen();
    }, [loginModal, registerModal]);


    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading title="Bienvenido a Airbnb" subtitle="Crear una cuenta" />
            <Input
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="name"
                label="Nombre"
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
                label="Registrate con Google"
                icon={FcGoogle}
                onClick={() => signIn("google")}
            />
            <div className=" mt-4 text-center font-light text-neutral-500">
                <div className=" flex flex-row items-center justify-center gap-2">
                    <div>¿Ya tiene una cuenta?</div>
                    <div onClick={toggle} className="cursor-pointer text-neutral-800 hover:underline" >
                        Iniciar sesión
                    </div>
                </div>
            </div>
        </div>
    );
    return (
        <div>
            <Modal
                disabled={isLoading}
                isOpen={registerModal.isOpen}
                title="Registrarse"
                actionLabel="Continuar"
                onClose={registerModal.onClose}
                onSubmit={handleSubmit(onSubmit)}
                body={bodyContent}
                footer={footerContent}
            />
        </div>
    );
};

export default RegisterModal;