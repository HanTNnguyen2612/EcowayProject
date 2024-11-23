"use client"
import ScanAdminModule from '@/components/Module/ScanAdminModule';
import { useCheckAdminQuery } from '@/store/queries/auth';
import React from 'react'

const ScanPage = () => {
    const { data, isError, isFetching } = useCheckAdminQuery({}, { refetchOnMountOrArgChange: true });
    if (data?.isAdmin)
        return (
            <ScanAdminModule />
        )
    else return (
        <div className='text-white'>Chỉ Quản lí mới được try cập vào trang này</div>
    )
}

export default ScanPage