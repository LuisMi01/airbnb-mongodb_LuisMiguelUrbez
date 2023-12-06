'use client'

import Image from 'next/image'

interface AvatarProps {
    src: string | null | undefined;
}
const Avatar: React.FC<AvatarProps> = ({
    src
                                       }) => {
    return (
        <Image className="rounded-full" alt="Avatar" src={src || "/images/placeholder.jpg"} width="20" height="20" />
    )
}

export default Avatar;