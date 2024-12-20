import { useEffect, useState } from 'react';
function useDebounce(value, timeout) {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        let timeoutNumber = setTimeout(() => {
            setDebouncedValue(value);
        }, timeout);

        return () => {
            clearTimeout(timeoutNumber);
        }
    }, (value))
    return debouncedValue;
}