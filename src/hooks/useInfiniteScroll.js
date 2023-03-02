import { useCallback, useEffect } from 'react'

const useInfiniteScroll = (bodyRef, bottomRef, callback) => {
    const handleScroll = useCallback(() => {
        const containerHeight = bodyRef?.current?.getBoundingClientRect().height
        const { top: bottomLineTop } = bottomRef?.current?.getBoundingClientRect()
        if (bottomLineTop <= containerHeight) {
            callback()
        }

    }, [bodyRef, bottomRef, callback])

    useEffect(() => {
        const bodyRefCurrent = bodyRef?.current
        bodyRefCurrent?.addEventListener('scroll', handleScroll, true)

        return () => {
            bodyRefCurrent.removeEventListener('scroll', handleScroll, true)
        }
    }, [bodyRef, handleScroll])
}

export default useInfiniteScroll