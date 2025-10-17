import { Card, CardBody } from "@nextui-org/react";
import { Cpu, Recycle, QrCode } from 'lucide-react';

const features = [
    {
        icon: <Cpu size={40} />,
        title: "Trí tuệ nhân tạo",
        description: "Nhận diện và phân loại vỏ chai mỹ phẩm chính xác",
    },
    {
        icon: <Recycle size={40} />,
        title: "Tái chế hiệu quả",
        description: "Thu gom và tái chế rác thải nhựa một cách hiệu quả",
    },
    {
        icon: <QrCode size={40} />,
        title: "Tích điểm dễ dàng",
        description: "Quét mã QR để tích điểm và nhận quà tặng hấp dẫn",
    },
];

export default function Features() {
    return (
        <div className="py-16">
            <h2 className="text-center mb-12 text-4xl font-semibold">
                Tính năng nổi bật
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="w-full sm:w-1/3 px-4 animate-fade-in-up"
                        style={{ animationDelay: `${index * 0.2}s` }}
                    >
                        <Card className="backdrop-blur-sm bg-white/50 hover:bg-white/70 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                            <CardBody className="items-center text-center">
                                <div className="mb-4 text-success animate-pulse">{feature.icon}</div>
                                <h3 className="mb-2 text-2xl text-black">
                                    {feature.title}
                                </h3>
                                <p className="text-black">{feature.description}</p>
                            </CardBody>
                        </Card>
                    </div>
                ))}
            </div>
        </div >
    );
}

