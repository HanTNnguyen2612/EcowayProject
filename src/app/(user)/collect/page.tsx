"use client";
import { useState } from "react";
import { Card, CardBody, Input, Button, Textarea } from "@nextui-org/react";
import { Recycle, CheckCircle, AlertCircle } from "lucide-react";

export default function CollectPage() {
    const [formData, setFormData] = useState({
        plasticBottles: "",
        location: "",
        notes: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Here you would typically make an API call to submit the data
            console.log('Submitting data:', formData);
            
            setSubmitStatus('success');
            setFormData({
                plasticBottles: "",
                location: "",
                notes: ""
            });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const calculatePoints = (bottles: string) => {
        const num = parseInt(bottles) || 0;
        return num * 10; // 10 points per bottle
    };

    return (
        <div className="min-h-screen py-8 px-4">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="mb-4">
                        <Recycle className="w-16 h-16 text-success mx-auto" />
                    </div>
                    <h1 className="text-3xl font-bold mb-4 text-success">
                        Gửi điểm tái sinh
                    </h1>
                    <p className="text-lg text-gray-600">
                        Báo cáo số lượng chai nhựa bạn đã thu gom để nhận điểm thưởng
                    </p>
                </div>

                {/* Form */}
                <Card>
                    <CardBody className="p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Plastic Bottles Count */}
                            <div>
                                <Input
                                    label="Số lượng chai nhựa thu gom"
                                    placeholder="Nhập số lượng chai nhựa"
                                    type="number"
                                    min="1"
                                    value={formData.plasticBottles}
                                    onChange={(e) => handleInputChange('plasticBottles', e.target.value)}
                                    isRequired
                                    startContent={
                                        <Recycle className="w-4 h-4 text-gray-400" />
                                    }
                                />
                                {formData.plasticBottles && (
                                    <p className="text-sm text-success mt-2">
                                        Bạn sẽ nhận được: {calculatePoints(formData.plasticBottles)} điểm
                                    </p>
                                )}
                            </div>

                            {/* Location */}
                            <div>
                                <Input
                                    label="Địa điểm thu gom"
                                    placeholder="Nhập địa điểm thu gom"
                                    value={formData.location}
                                    onChange={(e) => handleInputChange('location', e.target.value)}
                                    isRequired
                                />
                            </div>

                            {/* Notes */}
                            <div>
                                <Textarea
                                    label="Ghi chú thêm"
                                    placeholder="Thêm thông tin về loại chai nhựa, tình trạng, v.v."
                                    value={formData.notes}
                                    onChange={(e) => handleInputChange('notes', e.target.value)}
                                    minRows={3}
                                />
                            </div>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                color="success"
                                size="lg"
                                className="w-full"
                                isLoading={isSubmitting}
                                isDisabled={!formData.plasticBottles || !formData.location}
                            >
                                {isSubmitting ? "Đang xử lý..." : "Gửi xác nhận"}
                            </Button>
                        </form>

                        {/* Status Messages */}
                        {submitStatus === 'success' && (
                            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600" />
                                <div>
                                    <p className="text-green-800 font-semibold">Gửi thành công!</p>
                                    <p className="text-green-600 text-sm">
                                        Điểm của bạn đã được cộng vào tài khoản. Cảm ơn bạn đã góp phần bảo vệ môi trường!
                                    </p>
                                </div>
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                                <AlertCircle className="w-5 h-5 text-red-600" />
                                <div>
                                    <p className="text-red-800 font-semibold">Có lỗi xảy ra!</p>
                                    <p className="text-red-600 text-sm">
                                        Vui lòng thử lại sau hoặc liên hệ hỗ trợ nếu vấn đề vẫn tiếp diễn.
                                    </p>
                                </div>
                            </div>
                        )}
                    </CardBody>
                </Card>

                {/* Information Card */}
                <Card className="mt-8 bg-blue-50 border-blue-200">
                    <CardBody className="p-6">
                        <h3 className="text-lg font-semibold mb-3 text-blue-800">
                            Thông tin về hệ thống điểm
                        </h3>
                        <ul className="space-y-2 text-blue-700">
                            <li>• Mỗi chai nhựa = 10 điểm</li>
                            <li>• Điểm sẽ được cộng vào tài khoản trong vòng 24h</li>
                            <li>• Điểm có thể đổi lấy voucher và quà tặng</li>
                            <li>• Hỗ trợ tất cả loại chai nhựa mỹ phẩm</li>
                        </ul>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}
