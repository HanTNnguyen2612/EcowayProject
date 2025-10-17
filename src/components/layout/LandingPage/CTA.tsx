"use client";
import { Button } from "@nextui-org/react";

export default function CTA() {
    const scrollToLogin = () => {
        const loginSection = document.getElementById('login-section');
        if (loginSection) {
            loginSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="py-16 bg-success text-white text-center">
            <h2 className="mb-4 text-4xl font-semibold">
                Hãy cùng ECOWAY bảo vệ môi trường!
            </h2>
            <p className="mb-8 text-xl">
                Tham gia ngay để nhận ưu đãi đặc biệt và góp phần tạo nên một tương lai xanh.
            </p>
            <div className="flex justify-center content-center">
                <Button onClick={scrollToLogin} size="lg" className="ml-4">
                    Bắt đầu tích điểm xanh ♻️
                </Button>
            </div>
        </div>
    );
}

