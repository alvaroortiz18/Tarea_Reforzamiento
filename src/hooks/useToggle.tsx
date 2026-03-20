import { useState } from "react";

export const useToggle = (initialValue: boolean = false) => {
    const [value, setValue] = useState<boolean>(initialValue);

    const toggleValue = () => {
        setValue((currentValue) => !currentValue);
    };

    return { value, toggleValue };
};
