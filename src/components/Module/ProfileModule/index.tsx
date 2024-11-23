'use client'

import { useGetProfileQuery } from "@/store/queries/auth"
import { Card } from "@nextui-org/react"
import { Badge } from "@nextui-org/react"
import moment from 'moment';
import 'moment/locale/vi';
import React from "react";
import TimeDisplay from "./TimeDisplay";
interface ScanHistoryItem {
    id_scan: string
    product: {
        _id: string
        name: string
        brand: string
        size_name: string
        plactis_name: string
        createdAt: string
        updatedAt: string
    }
    createdAt: string
    updatedAt: string
}

interface ProfileData {
    user_name: string
    user_email: string
    totalPoint: number
    user_role: string
    historyScan: ScanHistoryItem[]
}


export default function ProfilePage() {

    const { data }: { data: ProfileData } = useGetProfileQuery({}, {
        selectFromResult({ data }) {
            return {
                data
            }
        },
    });
    moment.locale('vi');

    const getDateKey = React.useCallback((dateString: string): number => {
        const date = new Date(dateString);
        return Number(date.toISOString().split('T')[0]);
    }, []);

    const profile: ScanHistoryItem[][] = React.useMemo(() => {
        const groupedByDate = data?.historyScan?.reduce<{ [key: string]: ScanHistoryItem[] }>((acc, item) => {
            const dateKey = getDateKey(item.updatedAt);
            if (!acc[dateKey]) {
                acc[dateKey] = [];
            }
            acc[dateKey].push(item);
            return acc;
        }, {});
        return Object?.values(groupedByDate ?? []);
    }, [data])

    return (
        <div className="min-h-screen bg-[#0B3B2D] relative overflow-hidden">
            {/* Background Leaves */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#1D4D3E] rounded-full blur-xl opacity-50 transform -translate-x-1/2 translate-y-1/4" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#1D4D3E] rounded-full blur-xl opacity-50 transform translate-x-1/3 translate-y-1/4" />
            </div>

            {/* Profile Section */}
            <div className="px-6 pt-8 pb-16 flex justify-between w-full items-center">
                <div className=" relative z-10">
                    <h1 className="text-2xl font-bold text-white mb-2">
                        {data?.user_name}
                    </h1>
                    <Badge
                        className="bg-pink-500 text-white font-semibold border-none"
                        size="lg"
                    >
                        {data?.user_role.toUpperCase()}
                    </Badge>
                </div>
                <div className=" rounded-full border-4 border-white size-16 flex justify-center items-center">
                    <p>{data?.totalPoint}</p>
                </div>
            </div>

            {/* Wave Divider */}
            <div className="absolute -left-4 -right-4 h-16 rounded-[100px_100px_0_0] bg-white transform -translate-y-10" style={{

            }} />

            {/* Scan History Section */}
            <div className="relative bg-white min-h-screen px-6 pt-12">
                <h2 className="text-xl font-bold mb-4 text-[#0B3B2D]">
                    Lịch sử scan
                </h2>
                <div className="flex flex-col justify-center gap-6">
                    {profile?.map((items: ScanHistoryItem[]) => (
                        <div key={items[0].updatedAt} className="mt-6 ">
                            <TimeDisplay updatedAt={items[0].updatedAt} />
                            {
                                items.map((item) => (<div className="space-y-4" key={item.id_scan} >
                                    <Card className="p-4 shadow-sm">
                                        <div
                                            className="bg-white rounded-lg p-4 mb-3 last:mb-0 border border-gray-100"
                                        >
                                            <span className="text-xs text-gray-500">
                                                {moment(item?.updatedAt).calendar()}
                                            </span>
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="font-semibold text-black  max-w-full break-words">
                                                    {item?.product?.name}
                                                </h4>
                                            </div>
                                            <div className="space-y-1 text-sm text-gray-600">
                                                <p>Thương hiệu: {item?.product?.brand}</p>
                                                <p>Kích thước: {item?.product?.size_name}</p>
                                                <p>Chất liệu: {item?.product?.plactis_name}</p>
                                            </div>
                                        </div>
                                    </Card>
                                </div>))
                            }
                        </div>
                    )
                    )}
                </div>
            </div >
        </div >
    )
}

