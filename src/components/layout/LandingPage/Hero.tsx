import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Hero() {
    return (
        <div className="py-16 text-center">
            <h1 className="mb-4 text-xl font-bold">
                ECOWAY – Hồi sinh rác thải nhựa
            </h1>
            <p className="mb-8  max-w-[80%] mx-auto text-sm">
                Giải pháp ứng dụng trí tuệ nhân tạo nhằm nhận diện và phân loại vỏ chai mỹ phẩm, giúp thu gom và tái chế hiệu quả.
            </p>
            <div className="flex gap-4 justify-center">
                <Button as={Link} href="/sign-in" size="lg" color="success">
                    Đăng nhập
                </Button>
                <Button as={Link} href="/sign-up" size="lg">
                    Đăng kí
                </Button>
            </div>
        </div>
    );
}

