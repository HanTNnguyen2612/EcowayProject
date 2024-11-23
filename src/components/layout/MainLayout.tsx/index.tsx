import React from 'react'
import Image from 'next/image'
import bg from "@/public/images/bg.png"
import dynamic from 'next/dynamic'
const UsedMobileModule = dynamic(() => import('@/components/Module/UsedMobileModule'), { ssr: false })
const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="">
            <div className='absolute inset-0 z-[-1]'>
                <Image src={bg} alt="background" className='w-full h-full' />
            </div>
            <UsedMobileModule />
            {children}
        </main>
    )
}

export default MainLayout