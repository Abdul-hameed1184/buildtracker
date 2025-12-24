import { MoreVertical, Plus, Users, Shield, CheckCircle, UserPlus } from "lucide-react";
import Image from "next/image";
import {Images} from "@/public"

export default function TeamManagementPage() {
  return (
    <div className="p-6 space-y-6 bg-muted">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Team Management</h1>
          <p className="text-sm text-muted-foreground">
            Manage your team members and their assignments
          </p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow">
          <Plus className="h-4 w-4" />
          Invite Member
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Members" value="3" subtitle="Complete Team" icon={<Users />} />
        <StatCard title="Admin" value="1" subtitle="Admin Access" icon={<Shield />} />
        <StatCard title="Available" value="3" subtitle="Ready to work" icon={<CheckCircle />} />
        <StatCard title="Pending Invite" value="0" subtitle="Pending Invitation" icon={<UserPlus />} />
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <MemberCard
          name="Muaz Balogun"
          role="CEO/CTO"
          access="Owner"
          email="muazbalogun97@gmail.com"
          phone="+234555890457"
          avatar="https://i.pravatar.cc/150?img=32"
          accessVariant="owner"
        />
        <MemberCard
          name="Abdullah Saliu"
          role="Product Designer"
          access="Member"
          email="aosoliu10@gmail.com"
          phone="+234555890457"
          avatar="https://i.pravatar.cc/150?img=12"
        />
        <MemberCard
          name="Abdulhameed Alli‑Shittu"
          role="Software Engineer (Frontend)"
          access="Member"
          email="aosoliu10@gmail.com"
          phone="+234555890457"
          avatar="https://i.pravatar.cc/150?img=24"
        />
        <MemberCard
          name="Abdulhameed Alli‑Shittu"
          role="Software Engineer (Backend)"
          access="Member"
          email="aosoliu10@gmail.com"
          phone="+234555890457"
          avatar="https://i.pravatar.cc/150?img=15"
        />
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  subtitle,
  icon,
}: {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-card p-5 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-background">
          {icon}
        </div>
      </div>
      <div className=" text-3xl font-semibold">{value}</div>
      <p className=" text-sm text-primary">{subtitle}</p>
    </div>
  );
}

function MemberCard({
  name,
  role,
  access,
  email,
  phone,
  avatar,
  accessVariant = "member",
}: {
  name: string;
  role: string;
  access: string;
  email: string;
  phone: string;
  avatar: string;
  accessVariant?: "member" | "owner";
}) {
  return (
    <div className="rounded-2xl bg-card shadow-sm">
      <div className="p-4">
        <div className="flex items-start justify-between">
            <div
      className="relative overflow-hidden rounded-xl h-20 w-20 "
    >
      <Image
        src={Images.user}
        alt="profile.pic"
        fill
        className="object-cover"
      />
    </div>
          
          <MoreVertical className="h-4 w-4 text-muted-foreground" />
        </div>
          <div className="pt-4">
              <p className="font-medium text-foreground">{name}</p>
              <span className="inline-flex rounded-lg border border-green-600 bg-green-50 px-2 py-1.5 text-xs text-green-700">
                Available
              </span>
            </div>

        <div className="mt-4 space-y-2 text-sm text-muted-foreground">
          <p>{email}</p>
          <p>{phone}</p>
        </div>
      </div>

      <div className="border-t p-4 text-sm space-y-3">
        <p className="text-muted-foreground">POSITION</p>
        <p className="font-medium text-foreground">{role}</p>
        <p className=" text-muted-foreground">ACCESS TYPE</p>
        <span
          className={
            accessVariant === "owner"
              ? "inline-flex rounded-lg bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 border border-red-500"
              : "inline-flex rounded-lg bg-orange-50 px-3 py-1.5 text-xs font-medium text-orange-600"
          }
        >
          {access}
        </span>
      </div>
    </div>
  );
}
