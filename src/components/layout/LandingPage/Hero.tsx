"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useCheckAuthQuery } from "@/store/queries/auth";
import { useEffect, useState } from "react";
import webStorageClient from "@/utils/webStorageClient";

export default function Hero() {
    const [hasToken, setHasToken] = useState(false);
    
    // Check for token on mount
    useEffect(() => {
        const token = webStorageClient.getToken();
        setHasToken(!!token);
    }, []);

    const { data, isLoading, isSuccess } = useCheckAuthQuery(
        {},
        { 
            refetchOnMountOrArgChange: true,
            skip: !hasToken // Skip the query if no token is present
        }
    );

    // Listen for token changes
    useEffect(() => {
        const handleTokenChange = () => {
            const token = webStorageClient.getToken();
            setHasToken(!!token);
        };

        // Listen for storage changes (token updates)
        window.addEventListener('storage', handleTokenChange);
        
        // Also listen for custom events (for same-tab updates)
        window.addEventListener('tokenUpdated', handleTokenChange);

        return () => {
            window.removeEventListener('storage', handleTokenChange);
            window.removeEventListener('tokenUpdated', handleTokenChange);
        };
    }, []);

    // Check if user is authenticated
    const isAuthenticated = isSuccess && data?.user;

    return (
        <div className="py-16 text-center">
            <h1 className="mb-4 text-xl font-bold">
                ECOWAY – Hồi sinh rác thải nhựa
            </h1>
            <p className="mb-8  max-w-[80%] mx-auto text-sm">
                Giải pháp ứng dụng trí tuệ nhân tạo nhằm nhận diện và phân loại vỏ chai mỹ phẩm, giúp thu gom và tái chế hiệu quả.
            </p>
            {!isAuthenticated && (
                <div className="flex gap-4 justify-center">
                    <Button as={Link} href="/sign-in" size="lg" color="success">
                        Đăng nhập
                    </Button>
                    <Button as={Link} href="/sign-up" size="lg">
                        Đăng kí
                    </Button>
                </div>
            )}
        </div>
    );
}

