import { useRef, useEffect } from 'react'

const useEffectOnce = (callback) => {
    const calledOnce = useRef(false)

    useEffect(() => {
        if (!calledOnce.current) {
            callback()
            calledOnce.current = true
        }
    }, [])
}

export default useEffectOnce