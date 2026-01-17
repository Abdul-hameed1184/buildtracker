"use client";

import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { cn } from "@/libs/utils";

interface AvatarStackProps {
    avatars: string[];
    size?: "sm" | "md";
    max?: number;
    className?: string;
}

export function AvatarStack({
    avatars,
    size = "sm",
    max = 5,
    className,
}: AvatarStackProps) {
    const visibleAvatars = avatars.slice(0, max);
    const remaining = avatars.length - max;

    const sizeClasses = {
        sm: "h-6 w-6",
        md: "h-8 w-8",
    };

    return (
        <div className={cn("flex -space-x-2", className)}>
            {visibleAvatars.map((src, index) => (
                <Avatar
                    key={index}
                    className={cn(
                        sizeClasses[size],
                        "border border-background"
                    )}
                >
                    <AvatarImage src={src} alt="Member avatar" className="object-cover" />
                    <AvatarFallback>U</AvatarFallback>
                </Avatar>
            ))}

            {remaining > 0 && (
                <div
                    className={cn(
                        sizeClasses[size],
                        "flex items-center justify-center rounded-full border border-background bg-muted text-xs font-medium text-muted-foreground"
                    )}
                >
                    +{remaining}
                </div>
            )}
        </div>
    );
}
