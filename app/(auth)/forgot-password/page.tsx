'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Images } from '@/public'
import Image from 'next/image'

const Page = () => {
    return (
        <div className="mx-auto w-full max-w-2xl">
            {/* Header */}
            <div className="mb-8">
                <div className="mb-6 flex h-10 w-10 items-center justify-center">
                    <Image src={Images.logo} alt="" />
                </div>
                <h1 className="mb-2 text-3xl font-bold text-foreground">Forgot Password ?</h1>
                <p className="text-sm text-muted-foreground">
                    Don't worry! It occurs. Please enter the email address connected with your account.
                </p>
            </div>

            {/* Form */}
            <form className="mb-6 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-foreground">Your email</label>
                    <Input
                        type="email"
                        placeholder="aoson@theasbuild.com"
                    />
                </div>
                
                <Button className="mt-2 w-full text-base" size="lg">
                    Send Code
                </Button>
            </form>

            <div className="mt-6 text-left text-sm font-medium text-muted-foreground">
                Remembered Password? <Link href="/login" className="text-primary hover:underline">Sign in</Link>
            </div>
        </div>
    )
}

export default Page
