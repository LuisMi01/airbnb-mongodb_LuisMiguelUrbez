'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'


const Logo = () => {
    const router = useRouter()
    return (
        <Image onClick={() => router.push('/')} alt="Logo" className="hidden ms:block cursor-pointer" src="/public/images/logo.png" width="100" height="100"/>
    )
}

export default Logo;