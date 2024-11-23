import ScanModule from '@/components/Module/ScanModule'
import React from 'react'

const ScanPage = ({ params: { idScan } }: { params: { idScan: string } }) => {
    return (
        <ScanModule idScan={idScan}/>
    )
}

export default ScanPage