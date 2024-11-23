import { Card, CardBody } from "@nextui-org/react";

const steps = [
    {
        number: "1",
        title: "Quét sản phẩm",
        description: "Đưa vỏ chai mỹ phẩm đến trạm quét ECOWAY",
    },
    {
        number: "2",
        title: "Nhận diện AI",
        description: "Hệ thống AI nhận diện và phân loại vỏ chai",
    },
    {
        number: "3",
        title: "Tích điểm",
        description: "Quét mã QR để tích điểm vào tài khoản của bạn",
    },
    {
        number: "4",
        title: "Nhận thưởng",
        description: "Đổi điểm lấy voucher và quà tặng hấp dẫn",
    },
];

export default function HowItWorks() {
    return (
        <div className="py-10 px-4 bg-gray-50">
            <h2 className="text-center mb-12 text-black text-4xl font-semibold">
                Cách thức hoạt động
            </h2>
            <div className="flex flex-col gap-4 justify-center content-center">
                {steps.map((step, index) => (
                    <div key={index} >
                        <Card className="h-full">
                            <CardBody className="items-center text-center">
                                <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center mb-4">
                                    <h3 className="text-white">
                                        {step.number}
                                    </h3>
                                </div>
                                <h3 className="mb-2 text-black font-medium">
                                    {step.title}
                                </h3>
                                <p className="text-black font-normal">{step.description}</p>
                            </CardBody>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}

