"use client";
import { Card, CardBody } from "@nextui-org/react";
import { Heart, Leaf, Users, Target } from "lucide-react";
import { useEffect } from "react";

export default function AboutPage() {
    useEffect(() => {
        const video = document.querySelector('video') as HTMLVideoElement;
        const fallback = document.getElementById('video-fallback');
        
        if (video && fallback) {
            // Debug logging
            console.log('Video element found:', video);
            console.log('Video src:', video.src);
            
            video.addEventListener('error', (e) => {
                console.error('Video error:', e);
                video.style.display = 'none';
                fallback.style.display = 'flex';
            });
            
            video.addEventListener('loadeddata', () => {
                console.log('Video loaded successfully');
                fallback.style.display = 'none';
                video.style.display = 'block';
            });
            
            video.addEventListener('canplay', () => {
                console.log('Video can play');
            });
            
            // Force load the video
            video.load();
        }
    }, []);
    return (
        <div className="min-h-screen py-8 px-4">
            {/* Hero Section */}
            <div className="text-center mb-16 bg-gradient-to-br from-success/10 via-blue-500/5 to-purple-500/10 rounded-2xl p-12">
                <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-success to-blue-600 bg-clip-text text-transparent">
                    Câu chuyện ECOWAY
                </h1>
                <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                    Hành trình của chúng tôi bắt đầu từ một ước mơ đơn giản: 
                    <span className="font-semibold text-success"> Tạo ra một tương lai xanh hơn cho thế hệ mai sau.</span>
                </p>
            </div>

            {/* Story Section */}
            <div className="max-w-4xl mx-auto mb-16">
                <Card className="mb-8">
                    <CardBody className="p-8">
                        <h2 className="text-3xl font-semibold mb-6 text-center">
                            Sứ mệnh của chúng tôi
                        </h2>
                        <div className="space-y-6 text-lg">
                            <div className="bg-gradient-to-r from-success/5 to-blue-500/5 p-6 rounded-lg border-l-4 border-success">
                                <p className="text-gray-700 leading-relaxed">
                                    <span className="font-semibold text-success">ECOWAY</span> được sinh ra từ niềm tin rằng mỗi hành động nhỏ đều có thể tạo nên sự thay đổi lớn. 
                                    Chúng tôi tin rằng việc tái chế rác thải nhựa không chỉ là trách nhiệm mà còn là cơ hội 
                                    để tạo ra giá trị mới cho cộng đồng.
                                </p>
                            </div>
                            <div className="bg-gradient-to-r from-blue-500/5 to-purple-500/5 p-6 rounded-lg border-l-4 border-blue-500">
                                <p className="text-gray-700 leading-relaxed">
                                    Với <span className="font-semibold text-blue-600">công nghệ trí tuệ nhân tạo tiên tiến</span>, chúng tôi đã phát triển một hệ thống 
                                    nhận diện và phân loại rác thải nhựa thông minh, giúp quá trình tái chế trở nên 
                                    hiệu quả và dễ dàng hơn bao giờ hết.
                                </p>
                            </div>
                            <div className="bg-gradient-to-r from-purple-500/5 to-success/5 p-6 rounded-lg border-l-4 border-purple-500">
                                <p className="text-gray-700 leading-relaxed">
                                    Mỗi chai nhựa được tái chế qua ECOWAY không chỉ <span className="font-semibold text-purple-600">giảm thiểu ô nhiễm môi trường</span> 
                                    mà còn mang lại lợi ích kinh tế cho người tham gia, tạo nên một vòng tròn 
                                    phát triển bền vững.
                                </p>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>

            {/* Environmental Impact */}
            <div className="max-w-6xl mx-auto mb-16">
                <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-success to-blue-600 bg-clip-text text-transparent">
                    Ý nghĩa môi trường
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="text-center hover:scale-105 transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-success/5 to-green-500/5">
                        <CardBody className="p-6">
                            <div className="mb-4 flex justify-center">
                                <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center">
                                    <Leaf className="w-8 h-8 text-success" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Giảm ô nhiễm</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Mỗi chai nhựa tái chế giúp giảm <span className="font-semibold text-success">80% lượng khí thải CO2</span>
                            </p>
                        </CardBody>
                    </Card>

                    <Card className="text-center hover:scale-105 transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-red-500/5 to-pink-500/5">
                        <CardBody className="p-6">
                            <div className="mb-4 flex justify-center">
                                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
                                    <Heart className="w-8 h-8 text-red-500" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Bảo vệ đại dương</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Ngăn chặn rác thải nhựa xâm nhập vào <span className="font-semibold text-red-500">đại dương</span>
                            </p>
                        </CardBody>
                    </Card>

                    <Card className="text-center hover:scale-105 transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-blue-500/5 to-cyan-500/5">
                        <CardBody className="p-6">
                            <div className="mb-4 flex justify-center">
                                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center">
                                    <Users className="w-8 h-8 text-blue-500" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Cộng đồng xanh</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Xây dựng ý thức bảo vệ môi trường trong <span className="font-semibold text-blue-500">cộng đồng</span>
                            </p>
                        </CardBody>
                    </Card>

                    <Card className="text-center hover:scale-105 transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-purple-500/5 to-indigo-500/5">
                        <CardBody className="p-6">
                            <div className="mb-4 flex justify-center">
                                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center">
                                    <Target className="w-8 h-8 text-purple-500" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Kinh tế tuần hoàn</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Tạo ra chu trình tái sử dụng tài nguyên <span className="font-semibold text-purple-500">hiệu quả</span>
                            </p>
                        </CardBody>
                    </Card>
                </div>
            </div>

            {/* Video Section */}
            <div className="max-w-4xl mx-auto mb-16">
                <Card>
                    <CardBody className="p-8">
                        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Video hướng dẫn
                        </h2>
                        <div className="bg-white rounded-xl p-8 text-center shadow-lg">
                            <div className="mb-6">
                                <div className="w-20 h-20 bg-gradient-to-r from-success to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M8 5v10l8-5-8-5z"/>
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-gray-800">
                                Video hướng dẫn quét mã
                            </h3>
                            <p className="text-gray-600 mb-6 text-lg">
                                Xem video hướng dẫn cách sử dụng hệ thống quét mã ECOWAY
                            </p>
                            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl h-80 overflow-hidden">
                                <video 
                                    className="w-full h-full rounded-xl object-cover cursor-pointer"
                                    controls
                                    preload="metadata"
                                    style={{ pointerEvents: 'auto' }}
                                    crossOrigin="anonymous"
                                    playsInline
                                >
                                    <source src="/videos/kha.mp4" type="video/mp4" />
                                    <source src="/videos/kha.webm" type="video/webm" />
                                    Your browser does not support the video tag.
                                </video>
                                
                                {/* Fallback if video doesn't load */}
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-xl" style={{ display: 'none' }} id="video-fallback">
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M8 5v10l8-5-8-5z"/>
                                            </svg>
                                        </div>
                                        <p className="text-gray-500 font-medium">
                                            Video không tìm thấy. Vui lòng đặt file kha.mp4 vào thư mục /public/videos/
                                        </p>
                                        <p className="text-gray-400 text-sm mt-2">
                                            Hoặc kiểm tra console để xem lỗi chi tiết
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>

            {/* Call to Action */}
            <div className="text-center">
                <Card className="bg-gradient-to-r from-success via-green-500 to-blue-500 text-white shadow-2xl">
                    <CardBody className="p-12">
                        <h2 className="text-4xl font-bold mb-6">
                            Hãy cùng chúng tôi tạo nên sự thay đổi!
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Mỗi hành động nhỏ đều có ý nghĩa lớn trong việc bảo vệ môi trường
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a 
                                href="/scan" 
                                className="bg-white text-success px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
                            >
                                Bắt đầu ngay
                            </a>
                            <a 
                                href="/contact" 
                                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-success hover:scale-105 transition-all duration-300"
                            >
                                Liên hệ chúng tôi
                            </a>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}
