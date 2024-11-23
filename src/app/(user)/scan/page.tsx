"use client"
import ScanAdminModule from '@/components/Module/ScanAdminModule';
import ScanUserModule from '@/components/Module/ScanUserModule';
import { useCheckAdminQuery } from '@/store/queries/auth';
import React from 'react'

const ScanPage = () => {
    const { data } = useCheckAdminQuery({}, { refetchOnMountOrArgChange: true });
    if (data?.isAdmin)
        return (
            <ScanAdminModule />
        )
    else return (
        <ScanUserModule />
    )
}

export default ScanPage