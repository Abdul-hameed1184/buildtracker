'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from "@/app/components/ui/button"
import { Check } from 'lucide-react'

const PasswordChangedPage = () => {
    return (
        <div className="mx-auto w-full max-w-md text-center">
            {/* Success Icon */}
            <div className="mb-8 flex justify-center">
                <div className="relative flex h-24 w-24 items-center justify-center">
                    {/* Custom SVG for the scalloped circle shape */}
                    <svg className="absolute inset-0 h-full w-full text-green-500" viewBox="0 0 100 100" fill="currentColor">
                        <path d="M50 0C54.5 0 58.5 2.5 60.5 6.5C64.5 4.5 69 5 72 8C75 11 75.5 15.5 73.5 19.5C77.5 21.5 80 25.5 80 30C80 34.5 77.5 38.5 73.5 40.5C75.5 44.5 75 49 72 52C69 55 64.5 55.5 60.5 53.5C58.5 57.5 54.5 60 50 60C45.5 60 41.5 57.5 39.5 53.5C35.5 55.5 31 55 28 52C25 49 24.5 44.5 26.5 40.5C22.5 38.5 20 34.5 20 30C20 25.5 22.5 21.5 26.5 19.5C24.5 15.5 25 11 28 8C31 5 35.5 4.5 39.5 6.5C41.5 2.5 45.5 0 50 0Z" transform="scale(1.25) translate(-10, -10)" />
                    </svg>
                    <Check className="relative z-10 h-10 w-10 font-bold text-white" strokeWidth={4} />
                </div>
            </div>

            <h1 className="mb-3 text-3xl font-bold text-foreground">Password Changed!</h1>
            <p className="mb-8 text-sm text-muted-foreground">
                Your password has been changed successfully. Try signing in with your new password!
            </p>

            <Link href="/login" className="w-full">
                <Button className="w-full text-base" size="lg">
                    Back to Login
                </Button>
            </Link>
        </div>
    )
}

export default PasswordChangedPage
