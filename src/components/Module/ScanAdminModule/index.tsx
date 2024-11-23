"use client"

import { useState } from 'react'
import ScannerComponent from './ScannerComponent'
import ResultModal from './ResultModal'
import PointsModal from './PointsModal'
import LoadingOverlay from './LoadingOverlay'

export default function Home() {
    const [showResultModal, setShowResultModal] = useState(false)
    const [showPointsModal, setShowPointsModal] = useState(false)
    const [detectedLabel, setDetectedLabel] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [qrURL, setQrURL] = useState('');
    const [capturedImage, setCapturedImage] = useState<string | null>(null)

    const handleScanComplete = (label: string, img_qr: string) => {
        setDetectedLabel(label)
        setShowResultModal(true)
        setQrURL(img_qr)
    }

    const handleCorrectAnswer = () => {
        setShowResultModal(false)
        setShowPointsModal(true)
    }

    const handleWrongAnswer = () => {
        setShowResultModal(false)
        setCapturedImage(null);
    }

    const handleScanAgain = () => {
        setDetectedLabel('');
        setIsLoading(false);
        setQrURL('');
        setShowPointsModal(false);
        setCapturedImage(null);
    }

    return (
        <div className="min-h-screen bg-cover bg-center bg-no-repeat flex justify-center p-8 items-center">
            <div className="bg-[#89A34C] z-30 rounded-lg shadow-md w-full max-w-md p-8 text-center animate-fadeIn">
                <h1 className="text-[#093106] text-2xl font-bold mb-4 animate-slideDown">EcoWay</h1>
                <p className="text-[#093106] font-bold mb-6 animate-fadeIn">Đặt mỹ phẩm của bạn vào chế độ xem của camera để quét và kiếm điểm!</p>
                <ScannerComponent setCapturedImage={setCapturedImage} capturedImage={capturedImage} onScanComplete={handleScanComplete} setIsLoading={setIsLoading} />
                <ResultModal
                    isOpen={showResultModal}
                    onClose={() => setShowResultModal(false)}
                    detectedLabel={detectedLabel}
                    onCorrect={handleCorrectAnswer}
                    onWrong={handleWrongAnswer}
                />
                <PointsModal
                    qrURL={qrURL}
                    isOpen={showPointsModal}
                    onClose={handleScanAgain}
                />
                <LoadingOverlay isLoading={isLoading} />
            </div>
        </div>
    )
}

