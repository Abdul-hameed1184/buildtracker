"use client";

import { X, UserPlus } from "lucide-react";
import { useEffect, useState } from "react";
import { CountrySelect } from "../../ui/CountrySelect";
import FormField from "../../ui/FormField";
import { Input } from "../../ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../ui/Select";
import { Switch } from "../../ui/switch";
import UploadFIle from "../../ui/UploadFIle";

interface AddNewDocumentModalProps {
    open: boolean;
    onClose: () => void;
}

export default function AddNewDocumentModal({
    open,
    onClose,
}: AddNewDocumentModalProps) {

    const [title, setTitle] = useState("");
    const [isPublic, setIsPublic] = useState(false);
    const [file, setFile] = useState<File | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const formData = {
            title,
            isPublic,
            file,
        };

        console.log("Form submitted with data:", formData);

        // You can add your API call here
        // Example: await inviteMember(formData);

        // Close modal after submission
        onClose();
    };
    useEffect(() => {
        if (open) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [open]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 h-screen">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative z-10 w-full max-w-3xl rounded-2xl bg-card px-6 py-7 shadow-xl sm:px-8">
                {/* Header */}
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                            <UserPlus className="h-5 w-5 text-primary" />
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-foreground">
                                Add New Document
                            </h2>
                            <p className="text-sm text-muted-foreground">
                                Upload a new document to your workspace wiki
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={onClose}
                        className="rounded-md p-1 text-muted-foreground transition hover:bg-muted hover:text-foreground"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Form */}
                <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
                    {/* Title */}
                    <FormField label="Document Title">
                       
                        <Input
                            type="text"
                            placeholder="Document Name"

                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </FormField>
                    <div className="flex justify-between align-middle items-center ">
                        <p className="text-sm text-muted-foreground">Public</p>
                        <Switch
                            checked={isPublic}
                            onCheckedChange={setIsPublic}
                        />
                    </div>
                    <UploadFIle/>

                    {/* Actions */}
                    <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end sm:gap-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-lg border border-input px-6 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 shadow-sm"
                        >
                            Add Document
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
