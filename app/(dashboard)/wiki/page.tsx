"use client";

import { useState } from "react";
import {
  FolderPlus,
  Upload,
  LayoutGrid,
  List,
  MoreVertical,
  ListChecks,
  CirclePlus,
  ChevronDown,
  FilePlus,
  ArrowUpDown
} from "lucide-react";
import { cn } from "@/libs/utils"

import { FolderCard } from "@/app/components/wiki/FolderCard"
import { DocumentCard } from "@/app/components/wiki/DocumentCard"
import { Images } from "@/public";
import AddNewDocumentModal from "@/app/components/wiki/modal/AddNewDocumentModal";
import AddNewFolderModal from "@/app/components/wiki/modal/AddNewFolder";

type Folder = {
  id: number;
  name: string;
  items: number;
};

type Doc = {
  id: number;
  title: string;
  type: string;
  time: string;
};

const folders: Folder[] = [
  { id: 1, name: "Product Brief", items: 3 },
  { id: 2, name: "Brand File", items: 3 },
  { id: 3, name: "MVP Document", items: 3 },
  { id: 4, name: "Company Docs", items: 3 },
  { id: 5, name: "Development Docs", items: 3 },
  { id: 6, name: "Registration", items: 3 },
];

const documents: Doc[] = [
  { id: 1, title: "UI/UX Review", type: "XSL", time: "35 min ago" },
  { id: 2, title: "Brand Report", type: "PNG", time: "35 min ago" },
  { id: 3, title: "Latest PRD", type: "JPEG", time: "35 min ago" },
  { id: 4, title: "Company Docs", type: "DOC", time: "35 min ago" },
];

export default function ProjectWikiPage() {
  const [activeTab, setActiveTab] = useState<"docs" | "templates">("docs");
  const [showFolders, setShowFolders] = useState(true);
  const [showDocuments, setShowDocuments] = useState(true);
  const [gridView, setGridView] = useState(true);

  const [open, setOpen] = useState(false);
  const [openFolder, setOpenFolder] = useState(false);

  return (
    <div className="p-6 space-y-8 bg-muted min-h-screen">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Project Wiki</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Manage workspace documents and browse template marketplace
        </p>
      </div>

      {/* Tabs */}
      <div className="inline-flex rounded-lg bg-background p-1 border shadow-sm">
        <button
          onClick={() => setActiveTab("docs")}
          className={cn(
            "px-4 py-2 text-sm font-medium rounded-md transition-all",
            activeTab === "docs"
              ? "bg-primary/10 text-primary shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {/* Icon could be added here if needed */}
          My Documents
        </button>
        <button
          onClick={() => setActiveTab("templates")}
          className={cn(
            "px-4 py-2 text-sm font-medium rounded-md flex items-center gap-2 transition-all",
            activeTab === "templates"
              ? "bg-primary/10 text-primary shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          <ListChecks size={16} />
          Template Marketplace
        </button>
      </div>

      {/* Template section (EMPTY by requirement) */}
      {activeTab === "templates" && (
        <div className="rounded-xl border bg-card p-10 text-center text-sm text-muted-foreground">
          No templates available yet.
        </div>
      )}

      {activeTab === "docs" && (
        <div className="space-y-8">
          {/* Folders Section */}
          <div className="space-y-4">
            {/* Folders Header */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setShowFolders(!showFolders)}
                className="flex items-center gap-2 text-xl font-semibold text-foreground group"
              >
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-muted-foreground transition-transform duration-200",
                    !showFolders && "-rotate-90"
                  )}
                />
                Folders <span className="text-primary text-base font-normal ml-1">{folders.length}</span>
              </button>

              <div className="flex items-center gap-2">
                {/* Action Icons */}
                <div className="flex items-center gap-1">
                  <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                    <FolderPlus className="h-4 w-4 text-muted-foreground" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                    <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
                  </button>
                </div>

                {/* View Toggle */}
                <div className="flex items-center gap-1 bg-background/50 p-1 rounded-lg border">
                  <button
                    onClick={() => setGridView(false)}
                    className={cn(
                      "p-1.5 rounded-md transition-colors",
                      !gridView ? "bg-white shadow-sm text-primary" : "text-muted-foreground hover:bg-muted"
                    )}
                  >
                    <List className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setGridView(true)}
                    className={cn(
                      "p-1.5 rounded-md transition-colors",
                      gridView ? "bg-white shadow-sm text-primary" : "text-muted-foreground hover:bg-muted"
                    )}
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Folders List/Grid */}
            {showFolders && (
              <div
                className={cn(
                  "gap-4",
                  gridView ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" : "flex flex-col"
                )}
              >
                {/* Create Folder - Adapts to view */}
                <div
                  className={cn(
                    "flex items-center justify-center rounded-xl border border-dashed border-border bg-card text-sm text-muted-foreground hover:bg-muted hover:border-primary transition-colors cursor-pointer group ",
                    gridView ? "gap-3 p-6" : "h-[82px] w-full gap-2 p-4"
                  )}
                  onClick={() => setOpenFolder(true)}
                >
                  <CirclePlus className="h-5 w-5 group-hover:text-primary transition-colors" />

                  <span className="font-medium">Create New Folder</span>
                </div>

                {folders.map((folder) => (
                  <FolderCard
                    key={folder.id}
                    title={folder.name}
                    items={folder.items}
                    avatars={[
                      "/images/avatar.jpg",
                      "/images/avatar.jpg",
                    ]}
                    view={gridView ? "grid" : "list"}
                  />
                ))}
              </div>
            )}
          </div>


          {/* Documents Section */}
          <div className="space-y-4">
            {/* Documents Header */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setShowDocuments(!showDocuments)}
                className="flex items-center gap-2 text-xl font-semibold text-foreground group"
              >
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-muted-foreground transition-transform duration-200",
                    !showDocuments && "-rotate-90"
                  )}
                />
                Documents{" "}
                <span className="text-primary text-base font-normal ml-1">{documents.length}</span>
              </button>


              <div className="flex items-center gap-2">
                {/* Action Icons */}
                <div className="flex items-center gap-1">
                  <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                    <FilePlus className="h-4 w-4 text-muted-foreground" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                    <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
                  </button>
                </div>

                {/* View Toggle */}
                <div className="flex items-center gap-1 bg-background/50 p-1 rounded-lg border">
                  <button
                    onClick={() => setGridView(false)}
                    className={cn(
                      "p-1.5 rounded-md transition-colors",
                      !gridView ? "bg-card shadow-sm text-primary" : "text-muted-foreground hover:bg-muted"
                    )}
                  >
                    <List className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setGridView(true)}
                    className={cn(
                      "p-1.5 rounded-md transition-colors",
                      gridView ? "bg-card shadow-sm text-primary" : "text-muted-foreground hover:bg-muted"
                    )}
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {showDocuments && (
              <div
                className={cn(
                  "gap-4",
                  gridView ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" : "flex flex-col"
                )}
              >
                {/* Upload Document */}
                <div
                  className={cn(
                    "flex items-center justify-center bg-card border border-dashed border-border text-sm text-muted-foreground hover:bg-muted hover:border-primary/50 transition-colors cursor-pointer group",
                    gridView ? "gap-3 rounded-[24px] min-h-[260px]" : "h-[82px] w-full gap-2 p-4 rounded-xl"
                  )}
                  onClick={() => setOpen(true)}
                >
                  <CirclePlus className="h-5 w-5 group-hover:text-primary transition-colors" />
                  <span className="font-medium">Upload New Document</span>
                </div>

                {documents.map((doc) => (
                  <DocumentCard
                    key={doc.id}
                    cover={Images.banner}
                    title={doc.title}
                    time={doc.time}
                    fileType={doc.type}
                    avatar="/images/avatar.jpg"
                    view={gridView ? "grid" : "list"}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
      <AddNewDocumentModal open={open} onClose={() => setOpen(false)} />
      <AddNewFolderModal open={openFolder} onClose={() => setOpenFolder(false)} />
    </div>
  );
}
