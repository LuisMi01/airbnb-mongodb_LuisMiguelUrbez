'use client';

import Button from "@/app/components/Button";
import {useRouter} from "next/navigation";
import Heading from "@/app/components/Heading";

interface EmptyStateProps {
    title?: string;
    subtitle?: string;
    showReset?: boolean;
}
const EmptyState: React.FC<EmptyStateProps> = ({
    title = 'No hay casas disponibles',
    subtitle = 'Prueba a cambiar algunos de tus filtros',
    showReset
                                               }) => {
    const router = useRouter();
    return (
        <div className="h-[60vh] flex flex-col gap-2 justify-center items-center">
            <Heading
                center
                title={title}
                subtitle={subtitle}
            />
            <div className="w-48 mt-4">
                {showReset && (
                    <Button outline label="Eliminar todos los filtros" onClick={() => router.push('/')}/>
                )}
            </div>
        </div>
    )
}

export default EmptyState;