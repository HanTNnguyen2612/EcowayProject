interface LoadingOverlayProps {
    isLoading: boolean
  }
  
  export default function LoadingOverlay({ isLoading }: LoadingOverlayProps) {
    if (!isLoading) return null
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50 animate-fadeIn">
        <div className="w-12 h-12 border-4 border-t-4 border-[#4CAF50] rounded-full animate-spin"></div>
      </div>
    )
  }
  
  