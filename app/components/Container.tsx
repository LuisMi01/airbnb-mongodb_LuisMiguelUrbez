'use client';
import React, {Children} from 'react';

interface ContainerProprs {
  children: React.ReactNode
}
const Container: React.FC<ContainerProprs> = ({children}) => {
    return (
        <div className="max-w-[250px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
            {children}
        </div>
    )
}

export default Container;