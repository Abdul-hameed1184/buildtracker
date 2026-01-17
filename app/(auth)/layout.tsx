import React from 'react'
import Image from "next/image"
import { Images } from "@/public"

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex h-screen items-center justify-center bg-muted/40 p-4 md:p-9">
            <div className="flex w-full h-full gap-6 overflow-hidden">
                {/* Left Side - Hero/Branding */}
                <div className="relative hidden w-1/2 flex-col justify-between overflow-hidden rounded-3xl p-8 lg:flex ">
                    {/* Gradient Background */}
                    <div
                        className="absolute inset-0 bg-blue-500"
                        style={{
                            background: `
                    radial-gradient(circle at top left, #a5bbf5 0%, #4372e9 100%),
                    linear-gradient(135deg, rgba(255, 255, 255, 0) 0%, rgba(255,255,255,0) 100%)
                `
                        }}
                    >
                        {/* Blur Effect Overlay */}
                        <div className="absolute inset-0 backdrop-blur-3xl"></div>
                    </div>


                    {/* Content */}
                    <div className="relative z-10">
                        <div className="flex items-center gap-2">
                            <div className="flex h-12 w-12 items-center justify-center rounded  text-primary">
                                <Image
                                    src={Images.logo} alt={''}                                />
                            </div>
                            <span className="text-3xl font-semibold text-foreground">BuildTracker</span>
                        </div>
                    </div>

                    <div className="relative z-10 mt-auto">
                        <p className="mb-4 text-xl font-medium text-foreground/80">Management made Simple.</p>
                        <h1 className="text-4xl font-semibold leading-tight text-foreground md:text-5xl">
                            Facilitate clear task organization and efficient completion for teams.
                        </h1>
                    </div>
                </div>

                {/* Right Side - Form Content */}
                <div className="flex w-full flex-col justify-center rounded-3xl bg-card p-8 shadow-sm lg:w-1/2 lg:p-12">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AuthLayout
