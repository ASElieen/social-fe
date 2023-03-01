import { useEffect, useState } from 'react'

/**
 * 
 * @param {DOM} ref 
 * @param {boolean} initialState 
 */
const useDetectOutsideClick = (ref, initialState) => {
    const [isActive, setIsActive] = useState(initialState)
    useEffect(() => {
        const onClick = (e) => {
            // 点击下拉窗口内部 不关闭下拉窗口
            // 点击外部则关闭
            if (ref.current != null && !ref.current.contains(e.target)) {
                setIsActive(!isActive)
            }
        }

        if (isActive) {
            window.addEventListener('mousedown', onClick)
        }

        return () => {
            window.removeEventListener('mousedown', onClick)
        }
    }, [isActive, ref])

    return [isActive, setIsActive]
}

export default useDetectOutsideClick