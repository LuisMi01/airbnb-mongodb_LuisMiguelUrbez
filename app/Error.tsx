'use client'

import {useEffect} from "react";
import EmptyState from "@/app/components/EmptyState";

interface ErrorProps {
    error: Error
}

const ErrorState: React.FC<ErrorProps> = ({error}) => {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <EmptyState
            title="Error en la web"
            subtitle={error.message}
        />
    )
}