"use client"
import LabelInputForm from './LabelInputForm'

export default function Home() {

    return (
        <div className="min-h-screen bg-cover bg-center bg-no-repeat flex justify-center p-8 items-center">
            <div className="bg-[#89A34C] z-30 rounded-lg shadow-md w-full max-w-md p-8 text-center animate-fadeIn">
                <h1 className="text-[#093106] text-2xl font-bold mb-4 animate-slideDown">EcoWay</h1>
                <p className="text-[#093106] font-bold mb-6 animate-fadeIn">Nhập nhãn sản phẩm để tìm kiếm và kiếm điểm!</p>
                <div className='w-full animate-zoomIn'>
                    <LabelInputForm />
                </div>
            </div>
        </div>
    )
}

