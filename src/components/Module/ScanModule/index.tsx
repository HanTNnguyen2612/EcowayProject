"use client"
import { useScanUserByIDQuery } from '@/store/queries/scanManagement'
import React from 'react'
import { QRScanModal } from './QRScanModal';

const ScanModule = ({ idScan }: { idScan: string }) => {
    const { data, isLoading, isSuccess } = useScanUserByIDQuery(idScan);
    React.useEffect(() => {
        if (!isLoading) setIsModalOpen(true)
    }, [isLoading])
    const [isModalOpen, setIsModalOpen] = React.useState(false)

    return (
        <QRScanModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} isSuccess={isSuccess} />
    )
}

export default ScanModule