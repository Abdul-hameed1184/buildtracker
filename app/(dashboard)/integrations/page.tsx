import { Plus } from "lucide-react";
import Image from "next/image";
import IntegrationCard from "@/app/components/integration/IntegrationCard"

export default function IntegrationsPage() {
  return (
    <div className="p-6 space-y-6 bg-muted">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Integrations</h1>
          <p className="text-sm text-muted-foreground">
            Link your important resources and materials to BuildTracker
          </p>
        </div>
        <button className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow">
          <Plus className="h-4 w-4" />
          Add Custom Link
        </button>
      </div>

      {/* Content Wrapper */}
      <div className="rounded-3xl bg-background p-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <IntegrationCard key={i} />
            
          ))}
        </div>
      </div>
    </div>
  );
}


