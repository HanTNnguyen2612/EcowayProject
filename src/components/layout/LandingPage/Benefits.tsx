import { Card, CardBody } from "@nextui-org/react";
import voucher from "@/public/images/voucher.svg"
import protect from "@/public/images/protect.svg"
import gift  from "@/public/images/gift.svg"
import Image from "next/image";
const benefits = [
    {
        image: voucher,
        title: "Voucher hấp dẫn",
        description: "Đổi điểm lấy voucher giảm giá từ các thương hiệu lớn",
    },
    {
        image: gift,
        title: "Quà tặng độc đáo",
        description: "Nhận quà tặng thân thiện với môi trường",
    },
    {
        image: protect,
        title: "Bảo vệ môi trường",
        description: "Góp phần giảm thiểu rác thải nhựa và ô nhiễm",
    },
];

export default function Benefits() {
    return (
        <div className="py-10 px-4">
            <h2 className="text-center mb-12 text-4xl font-semibold">
                Lợi ích khi tham gia
            </h2>
            <div className="flex flex-col gap-4 justify-center">
                {benefits.map((benefit, index) => (
                    <div 
                        key={index}
                        className="animate-fade-in-up"
                        style={{ animationDelay: `${index * 0.2}s` }}
                    >
                        <Card className="backdrop-blur-sm bg-white/30 hover:bg-white/50 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                            <CardBody>
                                <Image
                                    src={benefit.image}
                                    alt={benefit.title}
                                    width={300}
                                    height={200}
                                    className="mb-4 w-full rounded-lg animate-float"
                                    style={{ animationDelay: `${index * 0.5}s` }}
                                />
                                <h3  className="mb-2 text-2xl text-black font-medium">
                                    {benefit.title}
                                </h3>
                                <p className="text-black font-normal">{benefit.description}</p>
                            </CardBody>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}

