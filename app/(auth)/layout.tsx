import React from 'react'
import Image from "next/image"
import { Images } from "@/public"

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 p-6">
            <div className="flex w-full max-w-[1200px] overflow-hidden rounded-[32px] bg-white shadow-xl">
                {/* Left Side - Hero/Branding */}
                <div className="relative hidden w-1/2 flex-col justify-between overflow-hidden bg-white p-12 lg:flex">
                    {/* Gradient Background */}
                    <div
                        className="absolute inset-0 bg-blue-500"
                        style={{
                            background: `
                    radial-gradient(circle at top left, #a5bbf5 0%, #4372e9 100%),
                    linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 100%)
                `
                        }}
                    >
                        {/* Blur Effect Overlay */}
                        <div className="absolute inset-0 backdrop-blur-3xl"></div>
                    </div>


                    {/* Content */}
                    <div className="relative z-10">
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-white">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="text-xl font-bold text-foreground">BuildTracker</span>
                        </div>
                    </div>

                    <div className="relative z-10 mt-auto">
                        <p className="mb-4 text-sm font-medium text-foreground/80">Management made Simple.</p>
                        <h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl">
                            Facilitate clear task organization and efficient completion for teams.
                        </h1>
                    </div>
                </div>

                {/* Right Side - Form Content */}
                <div className="flex w-full flex-col justify-center bg-white p-12 lg:w-1/2">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AuthLayout
