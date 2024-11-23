'use client'

import UserHeader from './UserHeader'
import AuthHeader from './AuthHeader'
import { useCheckAuthQuery } from '@/store/queries/auth'

export default function Header() {
    const { data, isSuccess } = useCheckAuthQuery({}, { refetchOnMountOrArgChange: true });
    return (
        <div className='fixed top-0 left-0 right-0'>
            {
                isSuccess ? (
                    <UserHeader data={data?.user} />
                ) : (
                    <AuthHeader />
                )
            }
        </div>
    )
}

