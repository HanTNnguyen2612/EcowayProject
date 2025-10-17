import { Card, CardBody } from "@nextui-org/react";

const steps = [
    {
        number: "1",
        title: "Thu gom",
        description: "Thu gom rác thải nhựa từ các nguồn khác nhau",
    },
    {
        number: "2",
        title: "Tái chế",
        description: "Xử lý và tái chế rác thải nhựa thành nguyên liệu mới",
    },
    {
        number: "3",
        title: "Hồi sinh",
        description: "Tạo ra sản phẩm mới từ nguyên liệu tái chế",
    },
];

export default function HowItWorks() {
    return (
        <div className="py-10 px-4 w-full bg-gray-300">
            <h2 className="text-center mb-12 text-black text-4xl font-semibold">
                Hành trình tái sinh
            </h2>
            <div className="flex flex-col gap-4 justify-center content-center">
                {steps.map((step, index) => (
                    <div 
                        key={index}
                        className="animate-fade-in-up"
                        style={{ animationDelay: `${index * 0.3}s` }}
                    >
                        <Card className="h-full hover:scale-105 transition-all duration-300 hover:shadow-lg">
                            <CardBody className="items-center text-center">
                                <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center mb-4 animate-glow">
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

