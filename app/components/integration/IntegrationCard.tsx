'use client'

import React, { useState } from 'react'
import Image from "next/image"
import { Images } from "@/public";
import { Switch } from "@/app/components/ui/switch"

const IntegrationCard = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="rounded-2xl border bg-card shadow-sm">
      {/* Card Body */}
      <div className="p-4">
        <div className="flex items-start gap-3">
          <div className="flex h-14 w-14 p-1 items-center justify-center rounded-xl border bg-card">
            <Image
              src={Images.logo}
              alt="Buildtracker"
            />
          </div>
          <div>
            <p className="font-medium text-foreground">Buildtracker Website</p>
            <span className="mt-1 inline-flex rounded-full border border-green-200 bg-green-50 px-2 py-0.5 text-xs text-green-700">
              Communication
            </span>
          </div>
        </div>

        <p className="mt-4 line-clamp-3 text-sm text-muted-foreground">
          Manage your team members, their assignments and Manage workspace documents, materials...
        </p>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 border-t px-4 py-4">
        <div className="flex items-center gap-3 flex-1">
          <button className="rounded-lg border px-3 py-2 text-sm font-medium text-foreground">
            Details
          </button>
          <button className="rounded-lg border border-red-200 px-3 py-2 text-sm font-medium text-red-600">
            Remove
          </button>
        </div>
        <Switch
          checked={isActive}
          onCheckedChange={setIsActive}
        />
      </div>
    </div >
  )
}

export default IntegrationCard