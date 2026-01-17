import { Images } from "@/public";
import Image from "next/image";

export default function LoginPage() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-[#cfdafc] via-[#9fb6f9] to-[#7f9cf5] flex items-center justify-center px-4">

            {/* Card */}
            <div className="w-full max-w-[560px] bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] px-10 py-12">

                {/* Logo */}
                <div className="flex justify-center mb-6">
                    <div className="w-10 h-10 flex items-center justify-center">
                       <Image src={Images.logo} alt="logo"/>
                    </div>
                </div>

                {/* Heading */}
                <h1 className="text-center text-3xl font-semibold text-gray-900">
                    Welcome to BuildTracker
                </h1>

                {/* Subtext */}
                <p className="text-center text-sm text-gray-500 mt-3 leading-relaxed">
                    Muaz Balogun has invited you to join the{" "}
                    <span className="font-medium text-gray-700">
                        Think Forward Workspace
                    </span>{" "}
                    in BuildTracker. Please Login to begin collaboration with your team.
                </p>

                {/* Email Field */}
                <div className="mt-8">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your email
                    </label>
                    <input
                        type="email"
                        placeholder="Enter your work email"
                        className="w-full h-12 rounded-lg border border-gray-300 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>

                {/* Divider */}
                <div className="flex items-center my-8">
                    <div className="flex-1 h-px bg-gray-200" />
                    <span className="px-4 text-sm text-gray-400">
                        or continue with
                    </span>
                    <div className="flex-1 h-px bg-gray-200" />
                </div>

                {/* Google Button */}
                <button className="w-full h-12 border border-gray-300 rounded-lg flex items-center justify-center gap-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
                    <Image
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt="Google"
                        width={20}
                        height={20}
                    />
                    Login with Google
                </button>

                {/* Facebook Button */}
                <button className="w-full h-12 border border-gray-300 rounded-lg flex items-center justify-center gap-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition mt-4">
                    <Image
                        src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                        alt="Facebook"
                        width={20}
                        height={20}
                    />
                    Login with Facebook
                </button>
            </div>
        </div>
    );
}
