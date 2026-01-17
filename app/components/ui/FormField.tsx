import React from 'react'

const FormField = ({
    label,
    children,
}: {
    label: string;
    children: React.ReactNode;
}) => {
    return (
        <div className="space-y-1.5 flex flex-col">
            <label className="text-sm font-medium text-gray-700">{label}</label>
            {children}
        </div>
    );
}

export default FormField