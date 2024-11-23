import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react"
import Image from "next/image"

interface PointsModalProps {
  qrURL: string,
  isOpen: boolean
  onClose: () => void
}

export default function PointsModal({ qrURL, isOpen, onClose }: PointsModalProps) {
  return (
    <Modal backdrop="transparent"
      placement="center"
      classNames={{
        backdrop: "bg-gradient-to-t from-zinc-900/50 to-zinc-900/10 backdrop-opacity-20",
        base: "backdrop-blur-lg bg-transparent"
      }} isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Quét để tích điểm</ModalHeader>
            <ModalBody>
              <Image src={qrURL} alt="QR Code" width={300} height={300} className="w-full max-w-[300px] mx-auto" />
            </ModalBody>
            <ModalFooter>
              <Button color="primary" className="font-semibold" onPress={onClose}>
                Quét tiếp
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

