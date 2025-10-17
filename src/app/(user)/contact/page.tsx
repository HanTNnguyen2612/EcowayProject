"use client";
import { useState } from "react";
import { Card, CardBody, Input, Button, Textarea } from "@nextui-org/react";
import { Mail, Phone, MapPin, Facebook, MessageCircle, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactPage() {
    const [feedbackForm, setFeedbackForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleInputChange = (field: string, value: string) => {
        setFeedbackForm(prev => ({
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
            
            // Here you would typically make an API call to submit the feedback
            console.log('Submitting feedback:', feedbackForm);
            
            setSubmitStatus('success');
            setFeedbackForm({
                name: "",
                email: "",
                subject: "",
                message: ""
            });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen py-8 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4 text-success">
                        Liên hệ với chúng tôi
                    </h1>
                    <p className="text-xl text-gray-600">
                        Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Contact Information */}
                    <div className="space-y-6">
                        <Card>
                            <CardBody className="p-6">
                                <h2 className="text-2xl font-semibold mb-6">Thông tin liên hệ</h2>
                                
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                                            <Phone className="w-6 h-6 text-success" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Hotline</h3>
                                            <p className="text-gray-600">0822646065</p>
                                            <p className="text-sm text-gray-500">8:00 - 22:00 (Hàng ngày)</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                                            <Mail className="w-6 h-6 text-success" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Email</h3>
                                            <p className="text-gray-600">khatbde180162@fpt.com.vn</p>
                                            <p className="text-sm text-gray-500">Phản hồi trong 24h</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                                            <MapPin className="w-6 h-6 text-success" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Địa chỉ</h3>
                                            <p className="text-gray-600">
                                            Khu đô thị FPT City, Ngũ Hành Sơn<br />
                                            TP. Đà Nẵng, Việt Nam
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                                            <Facebook className="w-6 h-6 text-success" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Fanpage</h3>
                                            <a 
                                                href="https://www.facebook.com/profile.php?id=61580542307222" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:underline"
                                            >
                                                facebook.com/ecoway
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>

                        {/* Google Form Integration */}
                        <Card className="bg-blue-50 border-blue-200">
                            <CardBody className="p-6">
                                <h3 className="text-lg font-semibold mb-3 text-blue-800">
                                    Form Google
                                </h3>
                                <p className="text-blue-700 mb-4">
                                    Bạn cũng có thể gửi phản hồi qua Google Form của chúng tôi
                                </p>
                                <Button 
                                    as="a"
                                    href="https://forms.google.com/ecoway-feedback"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    color="primary"
                                    className="w-full"
                                >
                                    Mở Google Form
                                </Button>
                            </CardBody>
                        </Card>
                    </div>

                    {/* Feedback Form */}
                    <div>
                        <Card>
                            <CardBody className="p-6">
                                <h2 className="text-2xl font-semibold mb-6">Form góp ý nhanh</h2>
                                
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <Input
                                        label="Họ và tên"
                                        placeholder="Nhập họ và tên của bạn"
                                        value={feedbackForm.name}
                                        onChange={(e) => handleInputChange('name', e.target.value)}
                                        isRequired
                                    />

                                    <Input
                                        label="Email"
                                        placeholder="Nhập email của bạn"
                                        type="email"
                                        value={feedbackForm.email}
                                        onChange={(e) => handleInputChange('email', e.target.value)}
                                        isRequired
                                    />

                                    <Input
                                        label="Chủ đề"
                                        placeholder="Nhập chủ đề phản hồi"
                                        value={feedbackForm.subject}
                                        onChange={(e) => handleInputChange('subject', e.target.value)}
                                        isRequired
                                    />

                                    <Textarea
                                        label="Nội dung"
                                        placeholder="Nhập nội dung góp ý của bạn"
                                        value={feedbackForm.message}
                                        onChange={(e) => handleInputChange('message', e.target.value)}
                                        minRows={4}
                                        isRequired
                                    />

                                    <Button
                                        type="submit"
                                        color="success"
                                        size="lg"
                                        className="w-full"
                                        isLoading={isSubmitting}
                                        isDisabled={!feedbackForm.name || !feedbackForm.email || !feedbackForm.subject || !feedbackForm.message}
                                    >
                                        {isSubmitting ? "Đang gửi..." : "Gửi góp ý"}
                                    </Button>
                                </form>

                                {/* Status Messages */}
                                {submitStatus === 'success' && (
                                    <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-600" />
                                        <div>
                                            <p className="text-green-800 font-semibold">Gửi thành công!</p>
                                            <p className="text-green-600 text-sm">
                                                Cảm ơn bạn đã góp ý. Chúng tôi sẽ phản hồi sớm nhất có thể.
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {submitStatus === 'error' && (
                                    <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                                        <AlertCircle className="w-5 h-5 text-red-600" />
                                        <div>
                                            <p className="text-red-800 font-semibold">Có lỗi xảy ra!</p>
                                            <p className="text-red-600 text-sm">
                                                Vui lòng thử lại sau hoặc liên hệ hotline để được hỗ trợ.
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </CardBody>
                        </Card>
                    </div>
                </div>

                {/* FAQ Section */}
                <Card className="mt-8">
                    <CardBody className="p-6">
                        <h2 className="text-2xl font-semibold mb-6 text-center">Câu hỏi thường gặp</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-semibold mb-2">Làm thế nào để tích điểm?</h3>
                                <p className="text-gray-600 text-sm">
                                    Bạn có thể tích điểm bằng cách quét mã QR tại các trạm ECOWAY hoặc báo cáo số lượng chai nhựa thu gom.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Điểm có hạn sử dụng không?</h3>
                                <p className="text-gray-600 text-sm">
                                    Điểm của bạn không có hạn sử dụng và có thể tích lũy để đổi quà tặng có giá trị cao.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Có những loại quà tặng nào?</h3>
                                <p className="text-gray-600 text-sm">
                                    Chúng tôi có voucher giảm giá, sản phẩm thân thiện môi trường và nhiều phần quà hấp dẫn khác.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Làm sao để tìm trạm ECOWAY?</h3>
                                <p className="text-gray-600 text-sm">
                                    Bạn có thể tìm trạm ECOWAY gần nhất thông qua ứng dụng hoặc liên hệ hotline để được hướng dẫn.
                                </p>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}
