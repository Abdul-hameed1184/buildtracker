"use client";

import { useRef, useState } from "react";
import { cn } from "@/libs/utils";

interface OtpInputProps {
    length?: number;
    onComplete?: (otp: string) => void;
}

export function OtpInput({ length = 4, onComplete }: OtpInputProps) {
    const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
    const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

    const handleChange = (value: string, index: number) => {
        if (!/^\d?$/.test(value)) return;

        const nextOtp = [...otp];
        nextOtp[index] = value;
        setOtp(nextOtp);

        if (value && index < length - 1) {
            inputsRef.current[index + 1]?.focus();
        }

        if (nextOtp.every(Boolean)) {
            onComplete?.(nextOtp.join(""));
        }
    };

    const handleKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement>,
        index: number
    ) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
    };

    return (
        <div className="mb-8 flex gap-4">
            {otp.map((value, index) => (
                <input
                    key={index}
                    ref={(el) => {
                        inputsRef.current[index] = el;
                    }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={value}
                    onChange={(e) => handleChange(e.target.value, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className={cn(
                        "h-16 w-16 rounded-xl border bg-white text-center text-2xl font-semibold shadow-sm outline-none transition",
                        "focus:border-primary focus:ring-2 focus:ring-primary/20",
                        index === length - 1 && "bg-gray-50"
                    )}
                />

            ))}
        </div>
    );
}
