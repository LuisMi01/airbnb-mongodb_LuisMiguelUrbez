'use client'

import Image from 'next/image'
const Avatar = () => {
    return (
        <Image className="rounded-full" alt="Avatar" src="/images/placeholder.jpg" width="20" height="20" />
    )
}

export default Avatar;