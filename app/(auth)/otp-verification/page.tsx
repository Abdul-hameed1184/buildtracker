'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from "@/app/components/ui/button"

const OtpVerificationPage = () => {
    return (
        <div className="mx-auto w-full max-w-md">
            {/* Header */}
            <div className="mb-8">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <h1 className="mb-2 text-3xl font-bold text-foreground">OTP Verification</h1>
                <p className="text-sm text-muted-foreground">
                    Enter the verification code we just sent on your email address.
                </p>
            </div>

            {/* OTP Inputs */}
            <div className="mb-8 flex gap-4">
                {[5, 1, 0, null].map((digit, index) => (
                    <div
                        key={index}
                        className={`flex h-16 w-16 items-center justify-center rounded-xl border bg-white text-2xl font-semibold shadow-sm
              ${index === 3 ? 'bg-gray-50' : 'text-foreground'}
            `}
                    >
                        {digit}
                    </div>
                ))}
            </div>

            <Button className="w-full text-base" size="lg">
                Verify Code
            </Button>

            <div className="mt-6 text-sm font-medium text-muted-foreground">
                Didn&apos;t get code yet? <button className="text-primary hover:underline">Resend</button>
            </div>
        </div>
    )
}

export default OtpVerificationPage
