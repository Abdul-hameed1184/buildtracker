'use client'

import React, { useState } from 'react'
import {
    ArrowLeft,
    Calendar,
    User,
    AlignLeft,
    Paperclip,
    Edit,
    Trash2,
    FileText,
    CheckCircle2,
    Clock,
    MoreVertical
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const TaskDetailsPage = () => {
    const [activeTab, setActiveTab] = useState('comments')

    return (
        <div className="flex h-full flex-col gap-6 p-6">
            {/* Breadcrumb & Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/tasks" className="rounded-full p-2 hover:bg-gray-100">
                        <ArrowLeft className="h-5 w-5 text-muted-foreground" />
                    </Link>
                    <div className="flex items-center text-sm text-muted-foreground">
                        <span>Paystack&apos;s Workspace</span>
                        <span className="mx-2">/</span>
                        <span>Ticket 04</span>
                        <span className="mx-2">/</span>
                        <span className="text-foreground">Edit</span>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 rounded-lg border bg-card px-4 py-2 text-sm font-medium text-primary hover:bg-accent hover:text-accent-foreground">
                        <Edit className="h-4 w-4" />
                        Update Task
                    </button>
                    <button className="flex items-center gap-2 rounded-lg bg-destructive px-4 py-2 text-sm font-medium text-destructive-foreground hover:bg-destructive/90">
                        <Trash2 className="h-4 w-4" />
                        Delete
                    </button>
                </div>
            </div>

            {/* Main Content Card */}
            <div className="flex-1 overflow-auto rounded-3xl bg-card p-8 shadow-sm">
                <h1 className="text-2xl font-bold text-foreground">Add Notification Icon and Profile Display to Menu Tab</h1>

                {/* Meta Data Grid */}
                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {/* Status */}
                    <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                            <div className="h-2.5 w-2.5 rounded-full bg-green-600"></div>
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground">Status</p>
                            <div className="mt-1 inline-flex rounded-full border border-green-200 bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700">
                                Completed
                            </div>
                        </div>
                    </div>

                    {/* Due Date */}
                    <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground">Due Date</p>
                            <p className="mt-1 text-sm font-medium text-foreground">14 December 2008 at 11:59 PM</p>
                        </div>
                    </div>

                    {/* Assignee */}
                    <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                            <User className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground">Assignee</p>
                            <div className="mt-1 flex items-center gap-2">
                                <div className="h-5 w-5 rounded-full bg-muted-foreground/30"></div>
                                <p className="text-sm font-medium text-foreground">Abdullah Sulaimon</p>
                            </div>
                        </div>
                    </div>

                    {/* Priority */}
                    <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100">
                            <div className="h-2.5 w-2.5 rounded-full bg-orange-500"></div>
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground">Priority Level</p>
                            <div className="mt-1 inline-flex rounded-full border border-orange-200 bg-orange-50 px-2.5 py-0.5 text-xs font-medium text-orange-700">
                                Medium
                            </div>
                        </div>
                    </div>

                    {/* Created By */}
                    <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                            <User className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground">Created by</p>
                            <div className="mt-1 flex items-center gap-2">
                                <div className="h-5 w-5 rounded-full bg-muted-foreground/30"></div>
                                <p className="text-sm font-medium text-foreground">Muaz Balogun</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className="mt-8">
                    <div className="mb-4 flex items-center gap-2">
                        <AlignLeft className="h-5 w-5 text-muted-foreground" />
                        <span className="text-sm font-medium text-muted-foreground">Description</span>
                    </div>
                    <div className="rounded-xl border bg-muted/30 p-6 text-sm leading-relaxed text-foreground">
                        To hibernate your Windows PC quickly, use the shortcut Win + X, then press U, then H (for Shutdown Menu {'>'} Hibernate). Alternatively, you can create a dedicated desktop shortcut using the command shutdown /h or rundll32.exe powrprof.dll, SetSuspendState 0,1,0 for a one-click options.
                    </div>
                </div>

                {/* Attachments */}
                <div className="mt-8">
                    <div className="mb-4 flex items-center gap-2">
                        <Paperclip className="h-5 w-5 text-muted-foreground" />
                        <span className="text-sm font-medium text-muted-foreground">Attachments (2)</span>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        {/* File 1 */}
                        <div className="flex items-center gap-3 rounded-xl border bg-card p-3 hover:bg-muted/50">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-500">
                                <span className="text-xs font-bold text-red-600">PDF</span>
                            </div>
                            <div className="flex-1 overflow-hidden">
                                <p className="truncate text-sm font-medium text-foreground">Product Requirement Document.pdf</p>
                                <div className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
                                    <span>342 KB</span>
                                    <span>•</span>
                                    <button className="font-medium text-primary hover:underline">Download</button>
                                </div>
                            </div>
                        </div>
                        {/* File 2 */}
                        <div className="flex items-center gap-3 rounded-xl border bg-card p-3 hover:bg-muted/50">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-500">
                                <span className="text-xs font-bold text-red-600">PDF</span>
                            </div>
                            <div className="flex-1 overflow-hidden">
                                <p className="truncate text-sm font-medium text-foreground">Company Brand Asset.pdf</p>
                                <div className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
                                    <span>342 KB</span>
                                    <span>•</span>
                                    <button className="font-medium text-primary hover:underline">Download</button>
                                </div>
                            </div>
                        </div>
                        {/* File 3 */}
                        <div className="flex items-center gap-3 rounded-xl border bg-card p-3 hover:bg-muted/50">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-500">
                                <span className="text-xs font-bold text-red-600">PDF</span>
                            </div>
                            <div className="flex-1 overflow-hidden">
                                <p className="truncate text-sm font-medium text-foreground">Company Brand Asset.pdf</p>
                                <div className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
                                    <span>342 KB</span>
                                    <span>•</span>
                                    <button className="font-medium text-primary hover:underline">Download</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Tabs */}
                <div className="mt-12 border-b">
                    <div className="flex items-center gap-8">
                        <button
                            onClick={() => setActiveTab('comments')}
                            className={`border-b-2 pb-4 text-sm font-medium transition-colors ${activeTab === 'comments'
                                ? 'border-primary text-primary'
                                : 'border-transparent text-muted-foreground hover:text-foreground'
                                }`}
                        >
                            Comments <span className="ml-1 rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-600">8</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('blockers')}
                            className={`border-b-2 pb-4 text-sm font-medium transition-colors ${activeTab === 'blockers'
                                ? 'border-primary text-primary'
                                : 'border-transparent text-muted-foreground hover:text-foreground'
                                }`}
                        >
                            Blockers
                        </button>
                        <button
                            onClick={() => setActiveTab('subtasks')}
                            className={`border-b-2 pb-4 text-sm font-medium transition-colors ${activeTab === 'subtasks'
                                ? 'border-primary text-primary'
                                : 'border-transparent text-muted-foreground hover:text-foreground'
                                }`}
                        >
                            Sub Task <span className="ml-1 rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-600">8</span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TaskDetailsPage
