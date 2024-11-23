import React from 'react'
import { IDetectedBarcode, Scanner } from '@yudiel/react-qr-scanner';
import { useRouter } from 'next-nprogress-bar';
import { Modal, ModalContent, ModalHeader} from '@nextui-org/react';
import { XCircle } from 'lucide-react';
const QRScan = () => {
    const [isWrongFormatQR, setWrongFormatQR] = React.useState(false);
    const router = useRouter();
    const handleResultScan = (data: IDetectedBarcode[]) => {
        const result = data?.[0]?.rawValue;
        if (result.includes(`eco-way.vercel.app/scan`)) {
            router.push(result);
        } else {
            setWrongFormatQR(true)
        }
    }
    const onClose = React.useCallback(() => {
        setWrongFormatQR(false);
    }, [])
    React.useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isWrongFormatQR) timer = setTimeout(onClose, 3000);
        return () => clearTimeout(timer);
    }, [isWrongFormatQR, onClose])


    return (
        <div>
            <Modal backdrop="blur"
                placement="center"
                classNames={{
                    backdrop: "bg-gradient-to-t from-zinc-900/50 to-zinc-900/10 backdrop-opacity-20",
                    base: "backdrop-blur-lg bg-transparent"
                }}
                isOpen={isWrongFormatQR} onClose={onClose}
            >
                <ModalContent>
                    {() => (
                        <>
                            <ModalHeader className="flex items-center gap-4 text-white">
                                <XCircle size={25} className="text-red-500" />
                                <p className="text-white text-xl">QR code không đúng định dạng!</p>
                            </ModalHeader>
                        </>
                    )}
                </ModalContent>
            </Modal>
            <Scanner allowMultiple scanDelay={100} onScan={handleResultScan} />
        </div>
    )
}

export default QRScan