import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react"

interface ResultModalProps {
  isOpen: boolean
  onClose: () => void
  detectedLabel: string
  onCorrect: () => void
  onWrong: () => void
}

export default function ResultModal({ isOpen, onClose, detectedLabel, onCorrect, onWrong }: ResultModalProps) {
  return (
    <Modal backdrop="transparent"
      placement="center"
      classNames={{
        backdrop: "bg-gradient-to-t from-zinc-900/50 to-zinc-900/10 backdrop-opacity-20",
        base: "backdrop-blur-lg bg-transparent"
      }}
      isOpen={isOpen} onClose={onClose}
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-white">
              {detectedLabel
                ? `Sản phẩm của bạn là ${detectedLabel} phải không?`
                : "Không phát hiện sản phẩm nào, vui lòng quét lại?"}
            </ModalHeader>
            <ModalBody>
              {/* You can add more content here if needed */}
            </ModalBody>
            <ModalFooter>
              <Button color="danger" className="font-semibold" variant="light" onPress={onWrong}>
                Quét lại
              </Button>
              {detectedLabel && (
                <Button color="primary" className="font-semibold" onPress={onCorrect}>
                  Đúng
                </Button>
              )}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

