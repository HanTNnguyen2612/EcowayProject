"use client"
import React from 'react'

const UsedMobileModule = () => {
    const [screenWidth, setScreenWidth] = React.useState<number>(typeof window !== "undefined" ? innerWidth : 0);

    const getScreenWidth = React.useCallback(() => {
        setScreenWidth(innerWidth)
    }, [])
    React.useEffect(() => {
        window.addEventListener("resize", getScreenWidth)
        return () => window.removeEventListener("click", getScreenWidth);
    }, [screenWidth, getScreenWidth])


    const isMobile = React.useMemo(() => {
        return screenWidth < 500
    }, [screenWidth])
    return <>
        {isMobile || <div className='fixed inset-0 bg-[#0e2714] z-[99] flex justify-center items-center '>
            <div className='text-white font-semibold text-2xl'>Vui lòng! Sử dụng điện thoại để có trải nghiệm tốt hơn</div>
        </div>}
    </>;
}

export default UsedMobileModule