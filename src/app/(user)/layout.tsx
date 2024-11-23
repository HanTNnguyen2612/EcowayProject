"use client"
import React from 'react'
import { useRouter } from 'next-nprogress-bar'
import { usePathname } from 'next/navigation'
import { useCheckAuthQuery } from '@/store/queries/auth'
const Layout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const router = useRouter();
    const { data, isError, isFetching } = useCheckAuthQuery({}, { refetchOnMountOrArgChange: true });
    console.log('data', data)
    const handleAuthorization = () => {
        if (isError && !isFetching && !data) router.push(`/sign-in?redirect=${pathname}`)
    }
    React.useEffect(() => {
        const time = setTimeout(handleAuthorization, 100)
        return () => clearTimeout(time);
    }, [isError, isFetching])
    return (
        <div>{children}</div>
    )
}

export default Layout