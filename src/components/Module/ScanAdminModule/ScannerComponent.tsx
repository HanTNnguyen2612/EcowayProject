"use client"

import { useCreateScanMutation } from '@/store/queries/scanManagement'
import { cn } from '@/utils/cn'
import { useRef, useEffect } from 'react'

interface ScannerComponentProps {
  onScanComplete: (label: string, img: string) => void
  setIsLoading: (isLoading: boolean) => void,
  capturedImage: string | null,
  setCapturedImage: (capturedImage: string) => void
}

export default function ScannerComponent({ capturedImage, setCapturedImage, onScanComplete, setIsLoading }: ScannerComponentProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [createScan] = useCreateScanMutation();
  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
        if (videoRef.current) {
          videoRef.current.srcObject = stream
        }
      } catch (err) {
        console.error("Error accessing camera: ", err)
        alert("Unable to access the camera. Please make sure you've granted the necessary permissions.")
      }
    }

    startCamera()
  }, [])

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d')
      if (context) {
        canvasRef.current.width = videoRef.current.videoWidth
        canvasRef.current.height = videoRef.current.videoHeight
        context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height)

        canvasRef.current.toBlob(async (blob) => {
          if (blob) {
            setIsLoading(true)
            const reader = new FileReader();

            reader.onloadend = async () => {
              const base64String: string = String(reader?.result);
              try {
                const data = await createScan(base64String).unwrap();
                setCapturedImage(data?.image_url)
                onScanComplete(data?.label, data?.qr_url);
              } catch (err) {
                console.log('err', err)
              } finally {
                setIsLoading(false);
              }
            };

            reader.readAsDataURL(blob);
          }
        }, 'image/jpeg')
      }
    }
  }

  return (
    <div className="relative w-full max-w-[300px] mx-auto mb-4">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className={cn("w-full border-2 border-[#093106] rounded-md transition-transform duration-300 ease-in-out",
          capturedImage ? "hidden" : "block"
        )}
      />
      <canvas ref={canvasRef} className="hidden" />
      {capturedImage && (
        <img
          src={capturedImage}
          alt="Processed Image"
          className="w-full border-2 border-[#093106] rounded-md animate-zoomIn"
        />
      )}
      <button
        onClick={captureImage}
        className="mt-4 bg-[#89A34C] font-semibold text-[#093106] py-3 px-6 border-2 border-[#093106] rounded-lg text-base cursor-pointer transition-all duration-300 ease-in-out animate-pulseButton hover:bg-[#4e6826a8] hover:translate-y-[-2px]"
      >
        Chụp Ảnh
      </button>
    </div>
  )
}

