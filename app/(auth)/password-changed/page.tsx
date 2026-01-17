'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from "@/app/components/ui/button"
import { Check } from 'lucide-react'
import { Images } from '@/public'
import Image from 'next/image'

const PasswordChangedPage = () => {
    return (
        <div className="mx-auto w-full max-w-md text-center">
            {/* Success Icon */}
            <div className="mb-8 flex justify-center">
                <div className="relative flex h-24 w-24 items-center justify-center">
                  <Image src={Images.Success} alt=''/>
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
