import React from 'react'
import Image from 'next/image'
import { Images } from "@/public"

const QuickLinkCard = ({
  title,
  logo = "buildtracker",
}: {
  title: string;
  logo?: "buildtracker" | "scaleforge";
}) => {
  return (
    <div className="rounded-2xl border bg-card shadow-sm">
      <div className='p-4 '>

        {/* Top */}
        <div className="flex items-center gap-3">
          <div className="flex h-14 w-14 p-1 items-center justify-center rounded-xl border bg-card">
            {logo === "scaleforge" ? (
              <Image
                src={Images.link}
                alt="Scaleforge"
                className="rounded"
              />
            ) : (
              <Image
                src={Images.slack}
                alt="Buildtracker"
              />
            )}
          </div>
          <div>
            <p className="font-medium text-foreground">{title}</p>
            <span className="mt-1 inline-flex rounded-full border border-green-200 bg-green-50 px-2 py-0.5 text-xs text-green-700">
              Communication
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="mt-4 line-clamp-3 text-sm text-muted-foreground">
          Manage your team members, their assignments and Manage workspace documents, materials...
        </p>
      </div>

      <hr className='broder-t border-border' />

      {/* Actions */}
      <div className=" flex items-center gap-3 p-4">
        <button className="flex-1 rounded-lg border border-primary px-3 py-2 text-sm font-medium text-primary">
          Details
        </button>
        <button className="flex-1 rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground">
          Open Link
        </button>
      </div>
    </div>
  )
}

export default QuickLinkCard