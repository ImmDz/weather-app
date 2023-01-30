import { FC, ChangeEvent } from "react";

interface InputProps {
    value: string;
    onChange: (value: string, e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

export const Input: FC<InputProps> = ({ value, onChange, placeholder }) => {
    return (
        <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value, e)}
            placeholder={placeholder}
        />
    )
}