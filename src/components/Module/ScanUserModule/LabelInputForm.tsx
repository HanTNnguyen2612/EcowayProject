"use client";
import React, { useState } from "react";
import { Button, Input, Textarea } from "@nextui-org/react";
import {
  useCreateQRMutation,
  useCreateScanMutation,
} from "@/store/queries/scanManagement";
import { useRouter } from "next-nprogress-bar";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import { CheckCircle, XCircle } from "lucide-react";

const LabelInputForm = () => {
  const [label, setLabel] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [qrResult, setQrResult] = useState<any>(null);
  const [file, setFile] = useState<File | null>(null);

  // const [createQR, { isLoading }] = useCreateQRMutation();
  const [createScan, { isLoading }] = useCreateScanMutation();
  const router = useRouter();

  const toBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file); // Tự động thêm prefix data:image/png;base64,...
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    try {
      if (file) {
        const base64String = await toBase64(file);
        // Submit the label to backend to create QR code
        const result = await createScan(base64String).unwrap();

        if (result) {
          setQrResult(result);
          setShowSuccessModal(true);
          setLabel(""); // Clear the form
        }
      }
    } catch (error: any) {
      setErrorMessage(
        error?.data?.message || "Có lỗi xảy ra khi tạo QR code cho sản phẩm"
      );
      setShowErrorModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSuccessClose = () => {
    setShowSuccessModal(false);
    // Optionally redirect to results or stay on the same page
  };

  const handleErrorClose = () => {
    setShowErrorModal(false);
    setErrorMessage("");
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="w-full"
          />
        </div>
        <Button
          type="submit"
          color="success"
          size="lg"
          className="w-full font-semibold"
          isLoading={isSubmitting || isLoading}
        >
          {isSubmitting || isLoading ? "Đang tạo QR code..." : "Tạo QR Code"}
        </Button>
      </form>

      {/* Success Modal */}
      <Modal
        isOpen={showSuccessModal}
        onClose={handleSuccessClose}
        placement="center"
        backdrop="blur"
      >
        <ModalContent>
          <ModalHeader className="flex items-center gap-4 text-green-600">
            <CheckCircle size={25} />
            <p className="text-green-600 text-xl">
              QR Code đã được tạo thành công!
            </p>
          </ModalHeader>
          <ModalBody>
            <div className="space-y-3">
              <p className="text-gray-700">
                QR code đã được tạo cho sản phẩm:{" "}
                <strong>{qrResult?.product_label}</strong>
              </p>
              {qrResult?.qr_url && (
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">QR Code:</p>
                  <img
                    src={qrResult.qr_url}
                    alt="Generated QR Code"
                    className="mx-auto border rounded-lg max-w-[200px]"
                  />
                </div>
              )}
              {qrResult?.id_qr && (
                <p className="text-xs text-gray-500">ID: {qrResult.id_qr}</p>
              )}
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onPress={handleSuccessClose}>
              Đóng
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Error Modal */}
      <Modal
        isOpen={showErrorModal}
        onClose={handleErrorClose}
        placement="center"
        backdrop="blur"
      >
        <ModalContent>
          <ModalHeader className="flex items-center gap-4 text-red-600">
            <XCircle size={25} />
            <p className="text-red-600 text-xl">Lỗi tìm kiếm!</p>
          </ModalHeader>
          <ModalBody>
            <p className="text-gray-700">{errorMessage}</p>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onPress={handleErrorClose}>
              Thử lại
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default LabelInputForm;
