"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { Info, Recycle, MessageCircle } from "lucide-react";

export default function Navigation() {
    return (
        <div className="py-8 px-4 bg-gradient-to-r from-success/10 to-blue-500/10">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-center mb-8 text-3xl font-semibold text-gray-800">
                    Khám phá thêm về ECOWAY
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* About Page Link */}
                    <Link href="/about" className="group">
                        <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-center">
                            <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-success/30 transition-colors">
                                <Info className="w-8 h-8 text-success" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">
                                Về chúng tôi
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Tìm hiểu câu chuyện ECOWAY và ý nghĩa môi trường của chúng tôi
                            </p>
                        </div>
                    </Link>

                    {/* Collect Page Link */}
                    <Link href="/collect" className="group">
                        <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-center">
                            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/30 transition-colors">
                                <Recycle className="w-8 h-8 text-blue-500" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">
                                Gửi điểm tái sinh
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Báo cáo số lượng chai nhựa thu gom để nhận điểm thưởng
                            </p>
                        </div>
                    </Link>

                    {/* Contact Page Link */}
                    <Link href="/contact" className="group">
                        <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-center">
                            <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/30 transition-colors">
                                <MessageCircle className="w-8 h-8 text-purple-500" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">
                                Liên hệ
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Gửi góp ý, câu hỏi hoặc liên hệ với đội ngũ hỗ trợ
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
