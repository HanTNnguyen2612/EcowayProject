import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function CTA() {
    return (
        <div className="py-16 bg-success text-white text-center">
            <h2 className="mb-4 text-4xl font-semibold">
                Hãy cùng ECOWAY bảo vệ môi trường!
            </h2>
            <p className="mb-8 text-xl">
                Tham gia ngay để nhận ưu đãi đặc biệt và góp phần tạo nên một tương lai xanh.
            </p>
            <div className="flex justify-center content-center">
                <Button as={Link} href="/scan" size="lg" className="ml-4">
                    Trạm quét
                </Button>
            </div>
        </div>
    );
}

