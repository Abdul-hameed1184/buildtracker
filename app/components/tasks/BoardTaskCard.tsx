"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Paperclip, MessageSquare, AlertCircle } from "lucide-react";
import { Task, TaskPriority, TaskStatus } from "@/app/constants/tasks";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/app/components/ui/Select";

interface BoardTaskCardProps {
    task: Task;
    onStatusChange?: (taskId: string, newStatus: TaskStatus) => void;
}

const priorityColors: Record<TaskPriority, { text: string; bg: string; border: string }> = {
    High: { text: "text-red-500", bg: "bg-red-50/50 dark:bg-red-950/20", border: "border-red-200 dark:border-red-900/50" },
    Medium: { text: "text-orange-500", bg: "bg-orange-50/50 dark:bg-orange-950/20", border: "border-orange-200 dark:border-orange-900/50" },
    Low: { text: "text-green-500", bg: "bg-green-50/50 dark:bg-green-950/20", border: "border-green-200 dark:border-green-900/50" },
};

export function BoardTaskCard({ task, onStatusChange }: BoardTaskCardProps) {
    const colors = priorityColors[task.priority];

    return (
        <Card className={`rounded-xl border-dashed border-2 ${colors.border} bg-card text-card-foreground shadow-none hover:shadow-md transition-all duration-200`}>
            <CardContent className="p-5 space-y-4">
                {/* Ticket ID */}
                <span className="text-sm font-bold text-primary">
                    {task.ticketNo}
                </span>

                {/* Title */}
                <h3 className="text-base font-bold text-foreground leading-tight">
                    {task.title}
                </h3>

                {/* Metadata */}
                <div className="space-y-1.5">
                    <p className="text-xs text-muted-foreground">
                        Assigned to: <span className="font-semibold text-foreground">{task.owner.name}</span>
                    </p>
                    <p className="text-xs text-red-500 dark:text-red-400 font-bold">
                        Due: {task.dueDate}
                    </p>
                </div>

                {/* Badges and Icons */}
                <div className="flex items-center gap-2">
                    <Badge className={`px-2.5 py-0.5 rounded-md text-xs font-bold border-2 ${colors.bg} ${colors.text} ${colors.border} shadow-none`}>
                        {task.priority}
                    </Badge>

                    <div className="flex items-center gap-2 ml-auto">
                        <div className="flex items-center gap-1 text-muted-foreground">
                            <Paperclip className="h-3.5 w-3.5" />
                            <span className="text-xs font-bold">{task.attachmentsCount}</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                            <MessageSquare className="h-3.5 w-3.5" />
                            <span className="text-xs font-bold">{task.commentsCount}</span>
                        </div>
                        {task.priority === "High" && (
                            <div className="text-red-400 bg-red-50 dark:bg-red-950/30 px-1 py-0.5 rounded-sm border border-red-100 dark:border-red-900/50">
                                <AlertCircle className="h-3.5 w-3.5" />
                            </div>
                        )}
                    </div>
                </div>

                {/* Status Selector */}
                <div className="pt-2">
                    <Select
                        value={task.status}
                        onValueChange={(value) => onStatusChange?.(task.id, value as TaskStatus)}
                    >
                        <SelectTrigger className="h-9 w-full text-xs font-semibold bg-muted/50 border-border hover:bg-muted transition-colors">
                            <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Pending">Pending</SelectItem>
                            <SelectItem value="In Progress">In Progress</SelectItem>
                            <SelectItem value="Completed">Completed</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </CardContent>
        </Card>
    );
}
