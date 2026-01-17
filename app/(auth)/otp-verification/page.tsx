'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from "@/app/components/ui/button"
import Image from 'next/image'
import { Images } from '@/public'
import { OtpInput } from '@/app/components/ui/OtpInput'

const OtpVerificationPage = () => {
    return (
        <div className="mx-auto w-full max-w-md">
            {/* Header */}
            <div className="mb-8">
                <div className="mb-6 flex h-10 w-10 items-center justify-center">
                    <Image src={Images.logo} alt="" />
                </div>
                <h1 className="mb-2 text-3xl font-bold text-foreground">OTP Verification</h1>
                <p className="text-sm text-muted-foreground">
                    Enter the verification code we just sent on your email address.
                </p>
            </div>

            {/* OTP Inputs */}
            <OtpInput
                length={4}
                onComplete={(code) => console.log("OTP:", code)}
            />
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
