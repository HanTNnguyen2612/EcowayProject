"use client"

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react"
import { useRouter } from "next/navigation"
import { CheckCircle, XCircle } from 'lucide-react'
import { cn } from "@/utils/cn"

interface QRScanModalProps {
    isOpen: boolean
    onClose: () => void
    isSuccess: boolean
}

export function QRScanModal({ isOpen, onClose, isSuccess }: QRScanModalProps) {
    const router = useRouter()

    const handleProfileNavigation = () => {
        router.push("/profile")
        onClose()
    }

    return (
        <Modal backdrop="transparent"
            placement="center" isOpen={isOpen} onClose={onClose}
            classNames={{
                backdrop: "bg-gradient-to-t from-zinc-900/50 to-zinc-900/10 backdrop-opacity-20",
                base: "backdrop-blur-lg bg-transparent"
            }}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className={cn("flex justify-center font-semibold text-3xl gap-1 ",
                            isSuccess ? "text-green-500" : "text-red-500"
                        )}>
                            {isSuccess ? "Quét QR thành công" : "Quét QR thất bại"}
                        </ModalHeader>
                        <ModalBody>
                            <div className="flex flex-col items-center gap-4">
                                {isSuccess ? (
                                    <>
                                        <CheckCircle className="w-16 h-16 text-green-500" />
                                        <p className="text-green-500">Đã quét mã QR thành công!</p>
                                    </>
                                ) : (
                                    <>
                                        <XCircle className="w-16 h-16 text-red-500" />
                                        <p className="text-red-500">Quét mã QR không thành công. Vui lòng thử lại.</p>
                                    </>
                                )}
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant={isSuccess ? "light" : "shadow"} onPress={onClose}>
                                Đóng
                            </Button>
                            {isSuccess && <Button color="primary" onPress={handleProfileNavigation}>
                                Trang cá nhân
                            </Button>}
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}

