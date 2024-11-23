
import React from 'react'
import { Toaster } from 'sonner'
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='relative w-full h-screen flex justify-center items-center'>
            <Toaster closeButton richColors position="top-right" />
            <div className=' text-default-foreground absolute inset-0 z-0 flex justify-center items-center'>
                {children}
            </div>
        </div>
    )
}

export default AuthLayout