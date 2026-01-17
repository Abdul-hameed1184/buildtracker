"use client";

import { X } from "lucide-react";
import { useEffect } from "react";
import Image from "next/image";
import { Images } from "@/public";

interface IconOption {
    id: string;
    name: string;
    icon: string;
    color?: string;
}

interface IconSelectionModalProps {
    open: boolean;
    onClose: () => void;
    onSelect: (icon: IconOption) => void;
    selectedIcon?: string;
}

const iconOptions: IconOption[] = [
    { id: "custom-link", name: "Custom Link", icon: "https://img.icons8.com/?size=100&id=n9d0Hm43JCPK&format=png&color=000000" },
    { id: "whatsapp", name: "Whatsapp", icon: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" },
    { id: "figma", name: "Figma", icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
    { id: "slack", name: "Slack", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" },
    { id: "google-drive", name: "Google Drive", icon: "https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg" },
    { id: "notion", name: "Notion", icon: "https://img.icons8.com/?size=100&id=nvtEH6DpqruC&format=png&color=000000" },
    { id: "dropbox", name: "Dropbox", icon: "https://cdn.simpleicons.org/dropbox/0061FF" },
    { id: "onedrive", name: "OneDrive", icon: "https://img.icons8.com/?size=100&id=13638&format=png&color=000000" },
    { id: "box", name: "Box", icon: "https://cdn.simpleicons.org/box/0061D5" },
    { id: "microsoft-teams", name: "Microsoft Teams", icon: "https://img.icons8.com/?size=100&id=zQ92KI7XjZgR&format=png&color=000000" },
    { id: "discord", name: "Discord", icon: "https://cdn.simpleicons.org/discord/5865F2" },
    { id: "zoom", name: "Zoom", icon: "https://cdn.simpleicons.org/zoom/2D8CFF" },
    { id: "google-meet", name: "Google Meet", icon: "https://cdn.simpleicons.org/googlemeet/00897B" },
    { id: "github", name: "GitHub", icon: "https://cdn.simpleicons.org/github/181717" },
    { id: "gitlab", name: "GitLab", icon: "https://cdn.simpleicons.org/gitlab/FC6D26" },
    { id: "bitbucket", name: "Bitbucket", icon: "https://cdn.simpleicons.org/bitbucket/0052CC" },
    { id: "trello", name: "Trello", icon: "https://cdn.simpleicons.org/trello/0052CC" },
    { id: "jira", name: "Jira", icon: "https://cdn.simpleicons.org/jira/0052CC" },
    { id: "google-calendar", name: "Google Calendar", icon: "https://cdn.simpleicons.org/googlecalendar/4285F4" },
    { id: "salesforce", name: "Salesforce", icon: "https://cdn.simpleicons.org/salesforce/00A1E0" },
];

export default function IconSelectionModal({
    open,
    onClose,
    onSelect,
    selectedIcon,
}: IconSelectionModalProps) {
    useEffect(() => {
        if (open) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [open]);

    if (!open) return null;

    const handleIconSelect = (icon: IconOption) => {
        onSelect(icon);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative z-10 w-full max-w-2xl rounded-2xl bg-card px-6 py-7 shadow-xl sm:px-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                    <div>
                        <h2 className="text-lg font-semibold text-foreground">
                            Choose an Icon
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            Choose an icon for your link to connect external services to your workspace
                        </p>
                    </div>

                    <button
                        onClick={onClose}
                        className="rounded-md p-1 text-muted-foreground transition hover:bg-muted hover:text-foreground"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Icon Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 max-h-[60vh] overflow-y-auto">
                    {iconOptions.map((icon) => (
                        <button
                            key={icon.id}
                            type="button"
                            onClick={() => handleIconSelect(icon)}
                            className={`flex flex-col items-center justify-center gap-2 rounded-xl border-2 p-4 transition-all hover:border-primary hover:bg-primary/5 ${selectedIcon === icon.id
                                ? "border-primary bg-primary/10"
                                : "border-border bg-card"
                                }`}
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-background">
                                
                                <img
                                    src={icon.icon}
                                    alt={icon.name}
                                    width={32}
                                    height={32}
                                    className="h-8 w-8"
                                />
                            </div>
                            <span className="text-xs font-medium text-foreground text-center">
                                {icon.name}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Footer */}
                <div className="mt-6 flex justify-end gap-3">
                    <button
                        type="button"
                        onClick={onClose}
                        className="rounded-lg border border-input px-6 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}
