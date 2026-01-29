"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Check } from "lucide-react";
import { Images } from "@/public";
import Link from "next/link";

type NotificationType = "comment" | "assign" | "upload" | "add";

interface NotificationItem {
    id: string;
    user: string;
    avatar: StaticImageData | string;
    action: string;
    target: string;
    targetLink?: string; // Optional link for the target
    context?: string; // e.g. "to Wiki", "to Quick Links"
    time: string;
    workspace: string;
    isRead: boolean;
    type: NotificationType;
    content?: string; // For comments
    assignedTo?: string; // For assignments
    fileCheck?: boolean; // If there's a file icon needed like in the 3rd item
}

const initialNotifications: NotificationItem[] = [
    {
        id: "1",
        user: "Abdullah Saliu",
        avatar: Images.user,
        action: "commented on",
        target: "Incorrect Integration Card Details",
        context: "Tasks",
        time: "13 hours ago",
        workspace: "Paystack",
        isRead: false,
        type: "comment",
        content: "@Brian Griffin when you you wanna go out buddy?"
    },
    {
        id: "2",
        user: "Muaz Balogun",
        avatar: Images.user,
        action: "assigned a task",
        target: "Incorrect Integration Card Details",
        context: "Tasks",
        time: "13 hours ago",
        workspace: "BuildTracker Dev",
        isRead: false,
        type: "assign",
        assignedTo: "Abdulhameed Alli-Shittu"
    },
    {
        id: "3",
        user: "Muaz Balogun",
        avatar: Images.user,
        action: "upload",
        target: "PRD Document.pdf",
        context: "to Wiki",
        time: "13 hours ago",
        workspace: "Paystack",
        isRead: false,
        type: "upload",
        fileCheck: true
    },
    {
        id: "4",
        user: "Muaz Balogun",
        avatar: Images.user,
        action: "add",
        target: "BuildTracker Website",
        context: "to Quick Links",
        time: "13 hours ago",
        workspace: "Paystack",
        isRead: false,
        type: "add",
        targetLink: "#"
    },
    {
        id: "5",
        user: "Muaz Balogun",
        avatar: Images.user,
        action: "add",
        target: "BuildTracker Website",
        context: "to Quick Links",
        time: "13 hours ago",
        workspace: "Paystack",
        isRead: true, // Example of a read notification, though image implies all unread or mix
        type: "add",
        targetLink: "#"
    }
];

export default function NotificationsPage() {
    const [activeTab, setActiveTab] = useState("all");
    const [notifications, setNotifications] = useState<NotificationItem[]>(initialNotifications);

    const unreadCount = notifications.filter(n => !n.isRead).length;
    const workspaceUnreadCount = notifications.filter(n => !n.isRead && n.workspace === "Paystack").length; // Assuming filtering logic

    const handleMarkAllRead = () => {
        setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
    };

    const handleNotificationClick = (id: string) => {
        setNotifications(prev => prev.map(n => n.id === id ? { ...n, isRead: true } : n));
    };

    return (
        <div className="p-4 md:p-8 space-y-8 bg-muted min-h-full">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-2">
                <div>
                    <h1 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">Notification</h1>
                    <p className="text-sm md:text-lg text-muted-foreground mt-1">
                        Stay on top of your workspace updates...
                    </p>
                </div>
                <button
                    onClick={handleMarkAllRead}
                    className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-semibold transition-all active:scale-95 shadow-lg shadow-blue-600/20"
                >
                    <Check className="w-4 h-4" />
                    Mark all as read
                </button>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap items-center gap-4 px-1">
                <div className="flex items-center gap-2 bg-white p-1.5 rounded-full border border-border/60">
                    <button
                        onClick={() => setActiveTab("all")}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all text-sm font-medium ${activeTab === "all"
                                ? "bg-blue-50 text-blue-600 shadow-sm"
                                : "text-muted-foreground hover:bg-muted"
                            }`}
                    >
                        All
                        {unreadCount > 0 && (
                            <span className={`inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-bold ${activeTab === "all" ? "bg-blue-100" : "bg-muted-foreground/10"}`}>
                                {unreadCount}
                            </span>
                        )}
                    </button>
                    <button
                        onClick={() => setActiveTab("workspace")}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all text-sm font-medium ${activeTab === "workspace"
                                ? "bg-blue-50 text-blue-600 shadow-sm"
                                : "text-muted-foreground hover:bg-muted"
                            }`}
                    >
                        Paystack&apos;s Workspace
                        {workspaceUnreadCount > 0 && (
                            <span className={`inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-bold ${activeTab === "workspace" ? "bg-blue-100" : "bg-muted-foreground/10"}`}>
                                {workspaceUnreadCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>

            {/* Notifications List */}
            <div className="bg-card rounded-[2rem] border border-border shadow-sm divide-y divide-border overflow-hidden">
                {notifications.map((notification) => (
                    <div
                        key={notification.id}
                        className={`p-6 hover:bg-muted/40 transition-colors duration-200 cursor-pointer group ${!notification.isRead ? 'bg-blue-50/10' : ''}`}
                        onClick={() => handleNotificationClick(notification.id)}
                    >
                        <div className="flex items-start gap-4">
                            {/* Unread Indicator */}
                            <div className="pt-3">
                                <div className={`w-2 h-2 rounded-full ${!notification.isRead ? 'bg-blue-600' : 'bg-transparent'}`} />
                            </div>

                            {/* Avatar */}
                            <div className="flex-shrink-0">
                                <div className="w-10 h-10 relative rounded-full overflow-hidden border border-border">
                                    <Image
                                        src={notification.avatar}
                                        alt={notification.user}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 space-y-1">
                                <div className="text-[15px] leading-relaxed">
                                    <span className="font-bold text-foreground">{notification.user}</span>
                                    <span className="text-foreground/80 px-1">{notification.action}</span>
                                    <span className="font-bold text-foreground">{notification.target}</span>
                                    {notification.context && <span className="text-foreground/80 pl-1">{notification.context}</span>}
                                </div>

                                <div className="text-xs text-muted-foreground flex items-center gap-1.5 font-medium">
                                    <span>{notification.context?.includes("Tasks") || notification.action === "commented on" ? "Tasks" : (notification.context?.includes("Quick Links") ? "Quick Links" : "Wiki")}</span>
                                    <span>•</span>
                                    <span>{notification.time}</span>
                                    <span>•</span>
                                    <span>{notification.workspace}</span>
                                </div>

                                {/* Extra content for specific types */}
                                {notification.type === "comment" && notification.content && (
                                    <p className="mt-2 text-sm text-foreground/70">
                                        {notification.content}
                                    </p>
                                )}

                                {notification.type === "assign" && notification.assignedTo && (
                                    <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                                        <UsersIcon className="w-4 h-4" />
                                        <span>Assigned to: <span className="font-medium text-foreground">{notification.assignedTo}</span></span>
                                    </div>
                                )}

                                {notification.type === "upload" && notification.fileCheck && (
                                    <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                                        <FileTextIcon className="w-4 h-4" />
                                        <span>PRD Document.pdf</span>
                                    </div>
                                )}

                                {notification.targetLink && (
                                    <div className="mt-2">
                                        <Link href={notification.targetLink} className="text-sm font-medium text-blue-600 hover:underline">
                                            {notification.target}
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}

                {notifications.length === 0 && (
                    <div className="text-center py-20 px-4">
                        <div className="h-16 w-16 bg-muted rounded-full mx-auto flex items-center justify-center mb-4 text-muted-foreground">
                            <span className="text-2xl">📭</span>
                        </div>
                        <p className="text-lg font-bold text-foreground">No updates</p>
                        <p className="text-sm text-muted-foreground mt-1">You&apos;re all caught up!</p>
                    </div>
                )}
            </div>
        </div>
    );
}

// Simple icons for specific notification types content
function UsersIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    )
}

function FileTextIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" x2="8" y1="13" y2="13" />
            <line x1="16" x2="8" y1="17" y2="17" />
            <line x1="10" x2="8" y1="9" y2="9" />
        </svg>
    )
}
