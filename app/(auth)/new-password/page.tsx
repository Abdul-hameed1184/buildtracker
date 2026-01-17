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
                <h1 className="mb-2 text-3xl font-bold text-foreground">Welcome Back</h1>
                <p className="text-sm text-muted-foreground">
                    Your new password must be unique from those previously use.
                </p>
            </div>

            {/* Form */}
            <form className="mb-6 flex flex-col gap-4">
                
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-foreground">Enter New Password</label>
                    <Input
                        type="password"
                        placeholder="••••••••••••"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-foreground">Confirm Password</label>
                    <Input
                        type="password"
                        placeholder="••••••••••••"
                    />
                </div>
                <Button className="mt-2 w-full text-base" size="lg">
                    Reset Password
                </Button>
            </form>
        </div>
    )
}

export default Page
