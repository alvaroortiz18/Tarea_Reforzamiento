import { useState } from "react";

export const useCounter = () => {
    const [count, setCount] = useState<number>(10);

    const increaseBy = (value: number) => {
        // setCount(count + value); // forma básica
        // setCount((current) => current + value); // forma donde usa una función
        setCount(Math.max(count + value, 0)); // evitar que el contador sea negativo con validación
    };

    return { count, increaseBy };
};