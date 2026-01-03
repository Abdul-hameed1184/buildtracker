import Image, { StaticImageData } from "next/image";
import { MoreVertical, Clock } from "lucide-react";
import { Images } from "@/public";
import { cn } from "@/libs/utils";

type DocumentCardProps = {
  cover: string | StaticImageData;
  title: string;
  time: string;
  fileType: string;
  avatar: string;
  view?: "grid" | "list";
};

export function DocumentCard({
  cover,
  title,
  time,
  fileType,
  avatar,
  view = "grid",
}: DocumentCardProps) {
  if (view === "list") {
    return (
      <div className="relative h-[82px] w-full rounded-xl overflow-hidden bg-card shadow-sm border flex items-center">
        {/* Cover Image - Left side */}
        <div className="relative h-full w-[120px] flex-shrink-0">
          <Image src={cover} alt={title} fill className="object-cover" />
        </div>

        {/* Content - Right side */}
        <div className="flex-1 flex items-center justify-between px-4 py-3">
          <div className="flex flex-col gap-1">
            <h3 className="text-base font-semibold text-foreground">{title}</h3>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span>{time}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Image
              src={Images.user}
              alt="Owner"
              width={32}
              height={32}
              className="rounded-full"
            />
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <span className="h-3 w-3 rounded-full bg-primary" />
              {fileType}
            </div>
            <button className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-muted transition-colors">
              <MoreVertical className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Grid view
  return (
    <div className="relative h-[260px] w-full rounded-[24px] overflow-hidden bg-card shadow-sm">
      {/* Cover Image - Full height */}
      <div className="absolute inset-0">
        <Image src={cover} alt={title} fill className="object-cover " />
      </div>

      {/* Overlay Sheet */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="relative w-full">
          {/* Background Image for Sheet */}
          <div className="absolute inset-0 z-0">
            <Image
              src={Images.documentCover}
              alt=""
              fill
              className="object-cover w-full"
            />
          </div>

          <div className="relative z-10 px-4 pt-4 pb-3">
            {/* Floating menu */}
            <button className="absolute right-0 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-card shadow">
              <MoreVertical className="h-4 w-4 text-muted-foreground" />
            </button>

            {/* Time */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{time}</span>
            </div>

            {/* Title */}
            <h3 className="mt-2 text-lg text-black">
              {title}
            </h3>

            {/* Divider */}
            <div className="my-3 h-px bg-border" />

            {/* Footer */}
            <div className="flex items-center justify-between">
              <Image
                src={Images.user}
                alt="Owner"
                width={32}
                height={32}
                className="rounded-full"
              />

              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <span className="h-3 w-3 rounded-full bg-primary" />
                {fileType}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
