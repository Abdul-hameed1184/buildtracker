import { Upload, X } from 'lucide-react'
import React from 'react'

const UploadFIle = () => {
    return (
    <><div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-foreground">Attachment</label>
            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-muted/30 py-8">
                <div className="mb-3 rounded-lg border bg-card p-2 shadow-sm">
                    <Upload className="h-5 w-5 text-foreground" />
                </div>
                <div className="text-center">
                    <p className="text-sm font-medium text-primary">Click to upload <span className="text-muted-foreground">or drag and drop</span></p>
                    <p className="mt-1 text-xs text-muted-foreground">Drag and drop files here, or click to browse</p>
                </div>
            </div>
        </div><div className="flex flex-col gap-3">
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

                        <button className="ml-2 text-muted-foreground hover:text-foreground">
                            <X className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div></>
    )
}

export default UploadFIle