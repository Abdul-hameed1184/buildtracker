import Image from "next/image";
import { MoreVertical } from "lucide-react";

import { Images } from "@/public"

type FolderCardProps = {
  title: string;
  items: number;
  avatars: string[];
};

export function FolderCard({ title, items, avatars, view = "grid" }: FolderCardProps & { view?: "grid" | "list" }) {
  if (view === "list") {
    return (
      <div className="flex w-full items-center justify-between rounded-xl border bg-card p-4 hover:bg-muted/50 transition-colors">
        <div className="flex items-center gap-4">
          {/* Smaller Folder Icon/Image */}
          <div className="relative h-12 w-12 shrink-0">
            <Image
              src={Images.folder}
              alt=""
              fill
              className="object-contain"
            />
          </div>

          <div className="flex flex-col">
            <h3 className="text-foreground">{title}</h3>
            <span className="text-xs text-muted-foreground">{items} items</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          {/* Avatars */}
          <div className="flex -space-x-2">
            {avatars.slice(0, 3).map((avatar, index) => (
              <div
                key={index}
                className="relative h-8 w-8 rounded-full border-2 border-background"
              >
                <Image
                  src={avatar}
                  alt="User"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
            ))}
          </div>

          <button className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-muted">
            <MoreVertical className="h-4 w-4 text-muted-foreground" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-[200px] w-full group cursor-pointer transition-transform hover:-translate-y-1">
      {/* Back folder image */}
      <div className="absolute inset-0">
        <Image
          src={Images.folder}
          alt=""
          fill
          className="object-fill"
          priority
        />
      </div>



      {/* Content overlay */}
      <div className="relative z-10 h-full px-15 pt-8 pb-5 flex flex-col ">
        {/* Menu */}
        <button className="absolute right-12 top-7 flex h-8 w-8 items-center justify-center rounded-full border bg-card/50 hover:bg-card/80 transition-colors shadow-sm">
          <MoreVertical className="h-4 w-4 text-muted-foreground" />
        </button>

        {/* Title */}``
        <h3 className="mt-8 text-lg text-black line-clamp-2 leading-tight">
          {title}
        </h3>

        {/* Spacer to push footer down */}
        <div className="flex-1" />

        <div className="h-px w-full bg-border/50 mb-4" />

        {/* Footer */}
        <div className="flex items-center justify-between">
          {/* Avatars */}
          <div className="flex -space-x-2">
            {avatars.slice(0, 3).map((avatar, index) => (
              <div
                key={index}
                className="relative h-8 w-8 rounded-full border-2 border-background shadow-sm"
              >
                <Image
                  src={Images.user}
                  alt="User"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Items count */}
          <span className="text-sm font-medium text-muted-foreground/80">
            {items} items
          </span>
        </div>
      </div>
    </div>
  );
}
