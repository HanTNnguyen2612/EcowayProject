"use client"
import React from 'react'
import { useRouter } from 'next-nprogress-bar'
import { usePathname } from 'next/navigation'
import { useCheckAuthQuery } from '@/store/queries/auth'
import LoadingOverlay from '@/components/Module/ScanAdminModule/LoadingOverlay'
import UserHeader from '@/components/layout/Header/UserHeader'
const Layout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const router = useRouter();
    const { data, isError, isFetching, isLoading } = useCheckAuthQuery({}, { refetchOnMountOrArgChange: true });
    const handleAuthorization = React.useCallback(() => {
        if (isError && !isFetching && !data) router.push(`/sign-in?redirect=${pathname}`)
    }, [isError, isFetching, data, pathname, router])
    React.useEffect(() => {
        const time = setTimeout(handleAuthorization, 100)
        return () => clearTimeout(time);
    }, [handleAuthorization])
    return (isLoading ?
        <div>
            <LoadingOverlay isLoading={isLoading} />
        </div> :
        <main>
            <UserHeader data={data?.user} />
            {children}
        </main>
    )
}

export default Layout