'use client'

import React from 'react'
import {
    X,
    Bold,
    Italic,
    AlignLeft,
    List,
    ListChecks,
    Link,
    RotateCcw,
    RotateCw,
    Upload,
    Clock,
    FileText,
    CheckCircle2,
    Trash2,
    Paperclip,
} from 'lucide-react'
import { Images } from "@/public"
import Image from "next/image"
import TiptapEditor from "@/app/components/ui/tiptap-editor"
import { Calendar } from "@/app/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/app/components/ui/popover"
import { Calendar as CalendarIcon } from "lucide-react"
import UploadFIle from '../../ui/UploadFIle'

interface CreateTaskModalProps {
    isOpen: boolean
    onClose: () => void
}

const CreateTaskModal = ({ isOpen, onClose }: CreateTaskModalProps) => {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
            <div className="flex h-[90vh] w-full max-w-4xl flex-col rounded-2xl bg-card shadow-xl">
                {/* Header */}
                <div className="flex items-center justify-between border-b p-6">
                    <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <ListChecks className="h-5 w-5" />
                        </div>
                        <h2 className="text-xl font-bold text-foreground">Create New Task</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="rounded-full p-2 text-muted-foreground hover:bg-muted"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Body */}
                <div className="flex-1 overflow-y-auto p-6">
                    <div className="flex flex-col gap-6">
                        {/* Task Title */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-foreground">Task Title</label>
                            <input
                                type="text"
                                placeholder="New Task"
                                className="rounded-xl border border-input bg-transparent px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            />
                        </div>

                        {/* Row: Priority & Assigned Member */}
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-foreground">Priority Level</label>
                                <div className="relative">
                                    <select className="w-full appearance-none rounded-xl border border-input bg-transparent px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
                                        <option>Medium</option>
                                        <option>High</option>
                                        <option>Low</option>
                                    </select>
                                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                                        <svg className="h-4 w-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                    <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2">
                                        <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                                    </div>
                                    {/* Padding adjust for left icon */}
                                    <style jsx>{`select { padding-left: 2.5rem; }`}</style>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-foreground">Assigned Member</label>
                                <div className="relative">
                                    <select className="w-full appearance-none rounded-xl border border-input bg-transparent px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
                                        <option>Unassigned</option>
                                        <option>John Doe</option>
                                        <option>Jane Smith</option>
                                    </select>
                                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                                        <svg className="h-4 w-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                    <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-foreground">Description</label>
                            <TiptapEditor
                                value=""
                                onChange={(val) => console.log(val)}
                                placeholder="Describe the task..."
                            />
                        </div>

                        {/* Timeline */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-foreground">Timeline</label>
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                {/* Start Date */}
                                <div className="flex items-center gap-3">
                                    <span className="w-12 text-xs font-medium text-muted-foreground">START:</span>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <button className="flex flex-1 items-center justify-between rounded-xl border border-input bg-transparent px-4 py-3 text-sm text-muted-foreground hover:bg-muted/50">
                                                <span>Select Date</span>
                                                <CalendarIcon className="h-4 w-4 opacity-50" />
                                            </button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                mode="single"
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </div>

                                {/* Due Date */}
                                <div className="flex items-center gap-3">
                                    <span className="w-12 text-xs font-medium text-muted-foreground">DUE:</span>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <button className="flex flex-1 items-center justify-between rounded-xl border border-input bg-transparent px-4 py-3 text-sm text-muted-foreground hover:bg-muted/50">
                                                <span>Select Date</span>
                                                <CalendarIcon className="h-4 w-4 opacity-50" />
                                            </button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                mode="single"
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </div>
                            </div>
                        </div>
<UploadFIle/>
  

                    </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-end gap-3 border-t p-6">
                    <button
                        onClick={onClose}
                        className="rounded-xl px-6 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
                    >
                        Cancel
                    </button>
                    <button className="rounded-xl bg-primary px-6 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-primary/90">
                        Create Task
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CreateTaskModal
