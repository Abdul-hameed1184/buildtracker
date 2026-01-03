'use client'

import React from 'react'
import {
    X,
    Bold,
    Italic,
    AlignLeft,
    List,
    Link,
    RotateCcw,
    RotateCw,
    Upload,
    Calendar,
    Clock,
    FileText,
    CheckCircle2,
    Trash2,
    Paperclip
} from 'lucide-react'
import { Images } from "@/public"
import Image from "next/image"
import { Textarea } from "@/app/components/ui/textarea"

interface CreateTaskModalProps {
    isOpen: boolean
    onClose: () => void
}

const CreateTaskModal = ({ isOpen, onClose }: CreateTaskModalProps) => {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
            <div className="flex h-[90vh] w-full max-w-4xl flex-col rounded-2xl bg-white shadow-xl">
                {/* Header */}
                <div className="flex items-center justify-between border-b p-6">
                    <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-bold text-foreground">Create New Task</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="rounded-full p-2 text-muted-foreground hover:bg-gray-100"
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
                        <div className="grid grid-cols-2 gap-6">
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
                            <div className="overflow-hidden rounded-xl border border-input">
                                {/* Toolbar */}
                                <div className="flex items-center gap-1 border-b bg-gray-50 p-2">
                                    <button className="rounded p-1.5 text-muted-foreground hover:bg-gray-200 hover:text-foreground"><Bold className="h-4 w-4" /></button>
                                    <button className="rounded p-1.5 text-muted-foreground hover:bg-gray-200 hover:text-foreground"><Italic className="h-4 w-4" /></button>
                                    <div className="mx-1 h-4 w-px bg-gray-300"></div>
                                    <button className="rounded p-1.5 text-muted-foreground hover:bg-gray-200 hover:text-foreground"><AlignLeft className="h-4 w-4" /></button>
                                    <button className="rounded p-1.5 text-muted-foreground hover:bg-gray-200 hover:text-foreground"><List className="h-4 w-4" /></button>
                                    <div className="mx-1 h-4 w-px bg-gray-300"></div>
                                    <button className="rounded p-1.5 text-muted-foreground hover:bg-gray-200 hover:text-foreground"><Link className="h-4 w-4" /></button>
                                    <div className="mx-1 h-4 w-px bg-gray-300"></div>
                                    <button className="rounded p-1.5 text-muted-foreground hover:bg-gray-200 hover:text-foreground"><RotateCcw className="h-4 w-4" /></button>
                                    <button className="rounded p-1.5 text-muted-foreground hover:bg-gray-200 hover:text-foreground"><RotateCw className="h-4 w-4" /></button>
                                </div>
                                {/* Text Area */}
                                <Textarea
                                    className="w-full resize-none border-none bg-transparent p-4 text-sm focus-visible:ring-0"
                                    rows={4}
                                    placeholder="Type your description here..."
                                />
                            </div>
                        </div>

                        {/* Timeline */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-foreground">Timeline</label>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="flex items-center gap-3 rounded-xl border border-input p-3">
                                    <span className="text-xs font-medium text-muted-foreground">START:</span>
                                    <div className="flex-1 text-sm text-muted-foreground">Select Start Date & Time</div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <CheckCircle2 className="h-4 w-4" />
                                        <Calendar className="h-4 w-4" />
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 rounded-xl border border-input p-3">
                                    <span className="text-xs font-medium text-muted-foreground">DUE:</span>
                                    <div className="flex-1 text-sm text-muted-foreground">Select Due Date & Time</div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <CheckCircle2 className="h-4 w-4" />
                                        <Calendar className="h-4 w-4" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Attachment */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-foreground">Attachment</label>
                            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-gray-50 py-8">
                                <div className="mb-3 rounded-lg border bg-white p-2 shadow-sm">
                                    <Upload className="h-5 w-5 text-foreground" />
                                </div>
                                <div className="text-center">
                                    <p className="text-sm font-medium text-primary">Click to upload <span className="text-muted-foreground">or drag and drop</span></p>
                                    <p className="mt-1 text-xs text-muted-foreground">Drag and drop files here, or click to browse</p>
                                </div>
                            </div>
                        </div>

                        {/* File List */}
                        <div className="flex flex-col gap-3">
                            {/* File 1 */}
                            <div className="flex items-center justify-between rounded-xl border bg-card p-3">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-500">
                                        <span className="text-xs font-bold">PDF</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-foreground">Assigned Member.pdf</p>
                                        <p className="text-xs text-muted-foreground">200 KB - 70% Uploaded</p>
                                    </div>
                                </div>
                                <div className="animate-spin text-primary">
                                    <svg className="h-5 w-5" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                </div>
                            </div>

                            {/* File 2 */}
                            <div className="flex items-center justify-between rounded-xl border bg-card p-3">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-500">
                                        <span className="text-xs font-bold">PDF</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-foreground">Product Requirement Document.pdf</p>
                                        <p className="text-xs text-muted-foreground">342 KB - 100% Uploaded</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    {/* Avatars */}
                                    <div className="flex -space-x-2">
                                        <div className="flex h-6 w-6 items-center justify-center rounded-full border border-white bg-green-500 text-[10px] font-bold text-white">M</div>
                                        <div className="flex h-6 w-6 items-center justify-center rounded-full border border-white bg-red-500 text-[10px] font-bold text-white">A</div>
                                    </div>
                                    <button className="ml-2 text-muted-foreground hover:text-foreground">
                                        <X className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-end gap-3 border-t p-6">
                    <button
                        onClick={onClose}
                        className="rounded-xl px-6 py-2.5 text-sm font-medium text-foreground hover:bg-gray-100"
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
