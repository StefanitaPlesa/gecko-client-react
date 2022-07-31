import { useEffect, useRef } from "react"


const useEffectOnce = (callback) => {
    const countCalls = useRef(0);
    useEffect(() => {
        if (countCalls.current === 0) callback();
        countCalls.current = 1;
    }, [callback])
}

export { useEffectOnce };
