import React from 'react'
import Image from 'next/image'
import bg from "@/public/images/bg.png"
import dynamic from 'next/dynamic'
const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="bg-cover bg-center bg-repeat-y" style={{ backgroundImage: `url(${bg.src})` }}>
            <div
                className='absolute inset-0 z-[-1] bg-cover bg-center bg-repeat-y'
                style={{ backgroundImage: `url(${bg.src})` }}
            >
            </div>
            {children}
        </main>
    )
}

export default MainLayout