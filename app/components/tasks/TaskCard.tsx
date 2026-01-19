"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Calendar, CheckCircle2, Clock } from "lucide-react";
import { Task, TaskPriority } from "@/app/constants/tasks";

function cn(...classes: (string | undefined | false)[]): string {
    return classes.filter(Boolean).join(" ");
}

const priorityStyles: Record<TaskPriority, string> = {
    High: "bg-red-100 dark:bg-red-950/30 text-red-600 dark:text-red-400 border-red-200 dark:border-red-900/50",
    Medium: "bg-orange-100 dark:bg-orange-950/30 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-900/50",
    Low: "bg-green-100 dark:bg-green-950/30 text-green-600 dark:text-green-400 border-green-200 dark:border-green-900/50",
};

interface TaskCardProps {
    task: Task;
}

export function TaskCard({ task }: TaskCardProps) {
    return (
        <Card className="rounded-2xl shadow-sm bg-muted text-card-foreground border-border hover:shadow-md transition-all duration-200 py-3 overflow-hidden">
            <CardHeader className="pb-2 pt-4 px-4">
                <span className="text-xs text-primary font-bold">
                    {task.ticketNo}
                </span>
                <h3 className="text-sm font-bold leading-tight mt-1">{task.title}</h3>
            </CardHeader>
            <CardContent className="space-y-3 px-4 pb-4 pt-0">
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {task.description}
                </p>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {task.dueDate}
                    </div>
                    <Badge
                        className={cn(
                            "rounded-full px-2.5 py-0.5 text-xs font-semibold border shadow-none",
                            priorityStyles[task.priority]
                        )}
                    >
                        {task.priority}
                    </Badge>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                        <div className="relative h-7 w-7 rounded-full overflow-hidden border border-border">
                            <Image
                                src={task.owner.avatar}
                                alt={task.owner.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <span className="text-xs text-foreground font-semibold">{task.owner.name}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                            <CheckCircle2 className="h-4 w-4" />
                            <span className="font-bold">{task.attachmentsCount}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span className="font-bold">{task.commentsCount}</span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
