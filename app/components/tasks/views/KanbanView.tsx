"use client";

import { useState } from "react";
import {
  DndContext,
  closestCorners,
  DragEndEvent,
  DragStartEvent,
  DragOverlay,
  useDroppable,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { Card, CardContent, CardHeader } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Plus, Calendar, CheckCircle2, Loader2, Clock } from "lucide-react";



function cn(...classes: (string | undefined | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

// -------------------- Types --------------------
type ColumnId = "pending" | "inProgress" | "completed";

interface Ticket {
  id: string;
  ticket: string;
  title: string;
  description: string;
  date: string;
  priority: "High" | "Medium" | "Low";
}

// -------------------- Initial Data --------------------
const initialData: Record<ColumnId, Ticket[]> = {
  pending: [
    {
      id: "1",
      ticket: "Ticket #4",
      title: "Add Notification Icon and Profile Display to Menu Tab",
      description:
        "We need to introduce a new feature called Notifications, along with a new top navigation layout.",
      date: "12 Dec",
      priority: "High",
    },
  ],
  inProgress: [
    {
      id: "2",
      ticket: "Ticket #4",
      title: "Add Notification Icon and Profile Display to Menu Tab",
      description:
        "We need to introduce a new feature called Notifications, along with a new top navigation layout.",
      date: "12 Dec",
      priority: "Low",
    },
    {
      id: "3",
      ticket: "Ticket #4",
      title: "Add Notification Icon and Profile Display to Menu Tab",
      description:
        "We need to introduce a new feature called Notifications, along with a new top navigation layout.",
      date: "12 Dec",
      priority: "High",
    },
  ],
  completed: [
    {
      id: "4",
      ticket: "Ticket #4",
      title: "Add Notification Icon and Profile Display to Menu Tab",
      description:
        "We need to introduce a new feature called Notifications, along with a new top navigation layout.",
      date: "12 Dec",
      priority: "Medium",
    },
  ],
};

const priorityStyles: Record<Ticket["priority"], string> = {
  High: "bg-red-100 text-red-600",
  Medium: "bg-orange-100 text-orange-600",
  Low: "bg-green-100 text-green-600",
};

// -------------------- Sortable Card --------------------
function TicketCard({ ticket }: { ticket: Ticket }) {
  return (
    <Card className="rounded-2xl shadow-sm bg-card border">
      <CardHeader className="pb-2">
        <span className="text-xs text-primary font-medium">
          {ticket.ticket}
        </span>
        <h3 className="text-sm font-semibold leading-snug">{ticket.title}</h3>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-xs text-muted-foreground leading-relaxed">
          {ticket.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" />
            {ticket.date}
          </div>
          <Badge
            className={cn(
              "rounded-full px-2 py-0.5 text-xs",
              priorityStyles[ticket.priority]
            )}
          >
            {ticket.priority}
          </Badge>
        </div>

        <div className="flex items-center justify-between pt-2 border-t">
          <div className="h-7 w-7 rounded-full bg-muted" />
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <CheckCircle2 className="h-3.5 w-3.5" /> 3
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" /> 2
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function SortableTicket({ ticket }: { ticket: Ticket }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: ticket.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="cursor-grab active:cursor-grabbing"
    >
      <TicketCard ticket={ticket} />
    </div>
  );
}

// -------------------- Column --------------------
function KanbanColumn({
  title,
  icon: Icon,
  columnId,
  items,
}: {
  title: string;
  icon: any;
  columnId: ColumnId;
  items: Ticket[];
}) {
  const { setNodeRef } = useDroppable({ id: columnId });

  return (
    <div className="flex flex-col bg-background rounded-2xl p-4 w-full h-[calc(100vh-12rem)]">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 font-semibold">
          <Icon className="h-4 w-4 text-primary" />
          {title}
        </div>
        <Button size="icon" variant="ghost" className="h-8 w-8">
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      <div
        ref={setNodeRef}
        className="flex-1 overflow-y-auto overflow-x-hidden pr-2 scrollbar-thin scrollbar-thumb-muted-foreground/20 scrollbar-track-transparent hover:scrollbar-thumb-muted-foreground/40"
      >
        <SortableContext
          items={items.map((i) => i.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="flex flex-col gap-4">
            {items.map((item) => (
              <SortableTicket key={item.id} ticket={item} />
            ))}
          </div>
        </SortableContext>
      </div>
    </div>
  );
}

// -------------------- Board --------------------
export default function KanbanBoard() {
  const [columns, setColumns] = useState(initialData);
  const [activeId, setActiveId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  function findColumnByTicket(id: string): ColumnId | null {
    return (
      (Object.keys(columns) as ColumnId[]).find((col) =>
        columns[col].some((t) => t.id === id)
      ) ?? null
    );
  }

  function findTicketById(id: string): Ticket | undefined {
    for (const col of Object.keys(columns) as ColumnId[]) {
      const ticket = columns[col].find((t) => t.id === id);
      if (ticket) return ticket;
    }
    return undefined;
  }

  function handleDragStart(event: DragStartEvent) {
    setActiveId(event.active.id as string);
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    setActiveId(null);

    if (!over) return;

    const activeId = active.id as string;
    const overId = over.id as string;

    const sourceCol = findColumnByTicket(activeId);
    const targetCol = (Object.keys(columns) as ColumnId[]).includes(
      overId as ColumnId
    )
      ? (overId as ColumnId)
      : findColumnByTicket(overId);

    if (!sourceCol || !targetCol) return;

    if (sourceCol === targetCol) {
      const items = columns[sourceCol];
      const oldIndex = items.findIndex((i) => i.id === activeId);
      const newIndex = items.findIndex((i) => i.id === overId);

      setColumns({
        ...columns,
        [sourceCol]: arrayMove(items, oldIndex, newIndex),
      });
    } else {
      const sourceItems = [...columns[sourceCol]];
      const targetItems = [...columns[targetCol]];

      const index = sourceItems.findIndex((i) => i.id === activeId);
      const [moved] = sourceItems.splice(index, 1);

      setColumns({
        ...columns,
        [sourceCol]: sourceItems,
        [targetCol]: [moved, ...targetItems],
      });
    }
  }

  const activeTicket = activeId ? findTicketById(activeId) : null;

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <KanbanColumn
          title="Pending"
          icon={Loader2}
          columnId="pending"
          items={columns.pending}
        />
        <KanbanColumn
          title="In Progress"
          icon={Clock}
          columnId="inProgress"
          items={columns.inProgress}
        />
        <KanbanColumn
          title="Completed"
          icon={CheckCircle2}
          columnId="completed"
          items={columns.completed}
        />
      </div>
      <DragOverlay>
        {activeTicket ? (
          <div className="cursor-grabbing rotate-3">
            <TicketCard ticket={activeTicket} />
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}
