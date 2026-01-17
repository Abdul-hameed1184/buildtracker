"use client";

import Image from "next/image";
import {
  RefreshCcw,
  Download,
  ChevronDown,
  ShieldCheck,
  AlertTriangle,
  TrendingUp,
  PieChart,
  Plus,
  Radiation,
  ListChecks,
  VectorSquare,
  History,
} from "lucide-react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
} from "recharts";
import { Images } from "@/public";

const performanceData = [
  { date: "Mon", created: 58, completed: 45 },
  { date: "Tue", created: 65, completed: 52 },
  { date: "Wed", created: 72, completed: 68 },
  { date: "Thu", created: 46, completed: 41 },
  { date: "Fri", created: 82, completed: 76 },
  { date: "Sat", created: 76, completed: 70 },
  { date: "Sun", created: 55, completed: 48 },
];

export default function DashboardSection() {
  return (
    <section className="bg-muted w-full rounded-2xl">
      {/* Outer container */}
      <div className="bg-muted rounded-2xl p-4 lg:p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-foreground">
              Dashboard
            </h1>
            <p className="text-sm text-muted-foreground max-w-xl">
              Facilitate clear task organization and efficient completion for
              your team.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button className="flex items-center gap-2 rounded-lg border border-primary text-primary px-3 py-1.5 text-sm bg-background">
              Last 7 days <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-sm bg-background">
              <RefreshCcw className="w-4 h-4" /> Reload
            </button>
            <button className="flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-3 py-1.5 text-sm">
              <Download className="w-4 h-4" /> Export
            </button>
          </div>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {/* Health Score */}
          <div className="rounded-2xl bg-primary text-primary-foreground p-4 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-sm">Health Score</span>
              <ShieldCheck className="w-5 h-5" />
            </div>
            <p className="text-5xl font-semibold">47%</p>
            <p className="text-sm opacity-80">Project performance</p>
          </div>

          {/* Completed */}
          <StatCard
            title="Completed"
            value="10"
            label="Task Done"
            icon={<ListChecks />}
          />

          {/* Active */}
          <StatCard
            title="Active"
            value="4"
            label="In Progress"
            icon={<Radiation />}
          />

          {/* Overdue */}
          <StatCard
            title="Overdue"
            value="2"
            label="Needs Attention"
            icon={<AlertTriangle />}
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          {/* Performance Trend */}
          <div className="xl:col-span-2 bg-background rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-primary" />
              <h3 className="font-medium">Performance Trend</h3>
            </div>
            <div className="h-64 -mx-2">
              <PerformanceLineChart />
            </div>
          </div>

          {/* Status Overview */}
          <div className="bg-background rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-4">
              <PieChart className="w-5 h-5 text-primary" />
              <h3 className="font-medium">Status Overview</h3>
            </div>
            <div className="h-56">
              <StatusDonutChart />
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          {/* Recent Task */}
          <div className="xl:col-span-2 bg-background rounded-2xl p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium flex gap-3 items-center "> <History className="w-5 h-5 text-primary" />Recent Task</h3>
              <button className="flex items-center gap-1 text-sm text-primary border border-primary rounded-full px-3 py-1">
                <Plus className="w-4 h-4" /> New Task
              </button>
            </div>

            <TaskRow
              name="Muaz Balogun"
              task="Incorrect Integration Card Details"
              status="Completed"
            />
            <TaskRow
              name="Waheeb Trump"
              task="Add Onboarding Video to Module Page"
              status="Pending"
            />
            <TaskRow
              name="Abdullah Dangote"
              task="Fix Modal Layout Break on Long File Names"
              status="In Progress"
            />
            <TaskRow
              name="Muaz Musk"
              task="Incorrect Integration Card Details"
              status="In Progress"
            />
          </div>

          {/* Priority Distribution */}
          <div className="bg-background rounded-2xl p-4 h-fit">
            <h3 className="font-medium mb-4 flex gap-3 items-center ">
              {" "}
              <VectorSquare className="w-5 h-5 text-primary" /> Priority
              Distribution
            </h3>

            <div className="flex h-6  overflow-hidden mb-6">
              <div className="bg-red-500 w-[20%] rounded-r-md" />
              <div className="bg-yellow-500 w-[30%] rounded-r-md" />
              <div className="bg-green-500 w-[50%] rounded-r-md" />
            </div>

            <div className="grid grid-cols-3 gap-3">
              <Priority
                label="High"
                value="30"
                percentage="(20%)"
                color="text-red-500"
              />
              <Priority
                label="Medium"
                value="45"
                percentage="(30%)"
                color="text-yellow-500"
              />
              <Priority
                label="Low"
                value="75"
                percentage="(50%)"
                color="text-green-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ title, value, label, icon }: { title: string; value: string; label: string; icon: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-background p-4 flex flex-col justify-between space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">{title}</span>
        <div className="w-9 h-9  rounded-full border border-muted-foreground  flex items-center justify-center">
          {icon}
        </div>
      </div>
      <p className="text-3xl font-semibold">{value}</p>
      <p className="text-sm text-primary">{label}</p>
    </div>
  );
}

function TaskRow({ name, task, status }: { name: string; task: string; status: string }) {
  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20'
      case 'Pending':
        return 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-500/10 dark:text-rose-400 dark:border-rose-500/20'
      case 'In Progress':
        return 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20'
      default:
        return 'bg-muted text-muted-foreground border-border'
    }
  }

  return (
    <div className="flex items-center justify-between py-3  last:border-none">
      <div className="flex items-center gap-3">
        <div className="relative h-8 w-8 md:h-12 md:w-12 rounded-full overflow-hidden border border-border flex-shrink-0">
          <Image
            src={Images.user}
            alt="User avatar"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-medium">{name}</p>
          <p className="text-xs text-muted-foreground">Working on: {task}</p>
        </div>
      </div>
      <span className={`text-xs rounded-md border px-2.5 py-1 font-medium ${getStatusStyles(status)}`}>
        {status}
      </span>
    </div>
  );
}

function PerformanceLineChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={performanceData}>
        <defs>
          <linearGradient id="colorCreated" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
          </linearGradient>
          {/* <linearGradient id="colorCompleted" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
          </linearGradient> */}
        </defs>
        <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
        <XAxis dataKey="date" className="text-slate-600 dark:text-slate-400" />
        <YAxis className="text-slate-600 dark:text-slate-400" />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--card))",
            border: "1px solid hsl(var(--border))",
            borderRadius: "8px",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            color: "hsl(var(--foreground))"
          }}
        />
        <Area
          type="monotone"
          dataKey="created"
          stroke="#3b82f6"
          fillOpacity={1}
          fill="url(#colorCreated)"
          strokeWidth={2}
        />

      </AreaChart>
    </ResponsiveContainer>
  );
}

const statusData = [
  { name: "Completed", value: 3, color: "#3b82f6" },
  { name: "In Progress", value: 2, color: "#f59e0b" },
  { name: "Pending", value: 1, color: "#10b981" },
];

function StatusDonutChart() {
  const renderLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, name, value }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 1.8;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="#64748b"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        fontSize={12}
        fontWeight={500}
      >
        {name}
      </text>
    );
  };

  return (
    <div className="relative">
      <ResponsiveContainer width="100%" height={200}>
        <RechartsPieChart>
          <Pie
            data={statusData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderLabel}
            innerRadius={40}
            outerRadius={70}
            paddingAngle={2}
            dataKey="value"
          >
            {statusData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  );
}

function Priority({ label, value, percentage, color }: { label: string; value: string; percentage: string; color: string }) {
  return (
    <div className="rounded-xl border border-border p-3 text-right flex flex-col gap-15 ">
      <div className="flex items-center justify-left gap-1 mb-2">
        <div className={`w-2 h-2 rounded-full ${color.replace('text-', 'bg-')}`} />
        <span className="text-sm font-medium">{label}</span>
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-1">{percentage}</p>
        <p className="text-4xl font-semibold">{value}</p>
      </div>
    </div>
  );
}
