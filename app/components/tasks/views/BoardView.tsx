"use client";

import React, { useState } from "react";
import { INITIAL_TASKS, Task, TaskStatus } from "@/app/constants/tasks";
import { BoardTaskCard } from "../BoardTaskCard";
import { Plus, CheckCircle2, Target, Scan } from "lucide-react";

interface BoardColumnProps {
    status: TaskStatus;
    tasks: Task[];
    icon: React.ElementType;
    iconBg: string;
    onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
}

const BoardColumn = ({ status, tasks, icon: Icon, iconBg, onStatusChange }: BoardColumnProps) => {
    return (
        <div className="flex flex-col rounded-2xl bg-muted/30 p-4 border border-border min-h-[500px] transition-colors">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <div className={`p-2 rounded-lg ${iconBg} shadow-sm border border-border`}>
                        <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <h2 className="text-base font-bold text-foreground">
                        {status} <span className="text-muted-foreground font-medium ml-1">({tasks.length})</span>
                    </h2>
                </div>
                <button className="h-7 w-7 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary/5 transition-colors">
                    <Plus className="h-4 w-4" />
                </button>
            </div>

            {/* Task List */}
            <div className="space-y-4">
                {tasks.map((task) => (
                    <BoardTaskCard key={task.id} task={task} onStatusChange={onStatusChange} />
                ))}
            </div>
        </div>
    );
};

const BoardView = () => {
    const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);

    const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === taskId ? { ...task, status: newStatus } : task
            )
        );
    };

    const pendingTasks = tasks.filter((t) => t.status === "Pending");
    const inProgressTasks = tasks.filter((t) => t.status === "In Progress");
    const completedTasks = tasks.filter((t) => t.status === "Completed");

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-1 p-6 ">
            <BoardColumn
                status="Pending"
                tasks={pendingTasks}
                icon={Scan}
                iconBg="bg-blue-50 dark:bg-blue-950/20"
                onStatusChange={handleStatusChange}
            />
            <BoardColumn
                status="In Progress"
                tasks={inProgressTasks}
                icon={Target}
                iconBg="bg-orange-50 dark:bg-orange-950/20"
                onStatusChange={handleStatusChange}
            />
            <BoardColumn
                status="Completed"
                tasks={completedTasks}
                icon={CheckCircle2}
                iconBg="bg-accent dark:bg-accent/20"
                onStatusChange={handleStatusChange}
            />
        </div>
    );
};

export default BoardView;
