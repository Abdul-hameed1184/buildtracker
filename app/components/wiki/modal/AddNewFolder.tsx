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

interface AddNewFolderModalProps {
    open: boolean;
    onClose: () => void;
}

export default function AddNewFolderModal({
    open,
    onClose,
}: AddNewFolderModalProps) {

    const [name, setName] = useState("");


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const formData = {
            name,
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
            <div className="relative z-10 w-full max-w-xl rounded-2xl bg-card px-6 py-7 shadow-xl sm:px-8">

                {/* Form */}
                <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
                    <p className="text-xl font-semibold">New Folder </p>
                    {/* Title */}
                    <FormField label="">
                       
                        <Input
                            type="text"
                            placeholder=""
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </FormField>

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
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
