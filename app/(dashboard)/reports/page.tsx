"use client";

import { BarChart3, TrendingUp, Calendar, Download, Filter } from "lucide-react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LineChart,
    Line,
} from "recharts";

const performanceData = [
    { name: "Jan", progress: 65, completed: 40 },
    { name: "Feb", progress: 59, completed: 45 },
    { name: "Mar", progress: 80, completed: 60 },
    { name: "Apr", progress: 81, completed: 65 },
    { name: "May", progress: 56, completed: 45 },
    { name: "Jun", progress: 55, completed: 48 },
];

export default function ReportsPage() {
    return (
        <div className="p-6 space-y-6 bg-muted min-h-full">
            {/* Header */}
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                    <h1 className="text-2xl font-semibold text-foreground">Project Reports</h1>
                    <p className="text-sm text-muted-foreground">
                        Analyze project performance and team productivity
                    </p>
                </div>
                <div className="flex flex-wrap gap-2">
                    <button className="flex items-center gap-2 rounded-lg border border-input bg-card px-4 py-2 text-sm font-medium hover:bg-muted/50">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        Last 30 Days
                    </button>
                    <button className="flex items-center gap-2 rounded-lg border border-input bg-card px-4 py-2 text-sm font-medium hover:bg-muted/50">
                        <Filter className="h-4 w-4 text-muted-foreground" />
                        Filter
                    </button>
                    <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                        <Download className="h-4 w-4" />
                        Export
                    </button>
                </div>
            </div>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <ReportCard
                    title="Total Tasks"
                    value="128"
                    change="+12.5%"
                    trend="up"
                />
                <ReportCard
                    title="Completion Rate"
                    value="64%"
                    change="+4.2%"
                    trend="up"
                />
                <ReportCard
                    title="Avg. Completion Time"
                    value="2.4 Days"
                    change="-1.2%"
                    trend="down"
                />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/* Task Completion Bar Chart */}
                <div className="rounded-2xl bg-card p-6 shadow-sm">
                    <div className="mb-6 flex items-center justify-between">
                        <div>
                            <h3 className="text-lg font-semibold text-foreground">Task Overview</h3>
                            <p className="text-sm text-muted-foreground">Tasks started vs completed</p>
                        </div>
                    </div>
                    <div className="h-80 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={performanceData}>
                                <CartesianGrid strokeDasharray="3 3" className="stroke-muted opacity-30" />
                                <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                                <YAxis fontSize={12} tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: 'hsl(var(--card))',
                                        borderRadius: '8px',
                                        border: '1px solid hsl(var(--border))',
                                        color: 'hsl(var(--foreground))'
                                    }}
                                />
                                <Bar dataKey="progress" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                                <Bar dataKey="completed" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Productivity Line Chart */}
                <div className="rounded-2xl bg-card p-6 shadow-sm">
                    <div className="mb-6 flex items-center justify-between">
                        <div>
                            <h3 className="text-lg font-semibold text-foreground">Productivity Trend</h3>
                            <p className="text-sm text-muted-foreground">Weekly productivity metrics</p>
                        </div>
                    </div>
                    <div className="h-80 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={performanceData}>
                                <CartesianGrid strokeDasharray="3 3" className="stroke-muted opacity-30" />
                                <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                                <YAxis fontSize={12} tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: 'hsl(var(--card))',
                                        borderRadius: '8px',
                                        border: '1px solid hsl(var(--border))',
                                        color: 'hsl(var(--foreground))'
                                    }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="progress"
                                    stroke="hsl(var(--primary))"
                                    strokeWidth={2}
                                    dot={{ fill: 'hsl(var(--primary))' }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="completed"
                                    stroke="hsl(var(--chart-2))"
                                    strokeWidth={2}
                                    dot={{ fill: 'hsl(var(--chart-2))' }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ReportCard({ title, value, change, trend }: { title: string; value: string; change: string; trend: 'up' | 'down' }) {
    const isUp = trend === 'up';
    return (
        <div className="rounded-2xl bg-card p-6 shadow-sm">
            <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-muted-foreground">{title}</p>
                <div className={`flex h-8 w-8 items-center justify-center rounded-full ${isUp ? 'bg-green-500/10 text-green-600 dark:text-green-400' : 'bg-destructive/10 text-destructive'}`}>
                    <TrendingUp className={`h-4 w-4 ${!isUp ? 'rotate-180' : ''}`} />
                </div>
            </div>
            <div className="mt-4 flex items-baseline gap-2">
                <h3 className="text-3xl font-bold text-foreground">{value}</h3>
                <span className={`text-sm font-medium ${isUp ? 'text-green-600 dark:text-green-400' : 'text-destructive'}`}>
                    {change}
                </span>
            </div>
        </div>
    );
}
