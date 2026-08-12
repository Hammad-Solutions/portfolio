"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Info, X, Zap } from "lucide-react";

export interface FlowNode {
  id: string;
  label: string;
  sublabel: string;
  color: string;
  row: number;
  col: number;
  details?: string;
  tech?: string;
}

export interface ProjectArchitecture {
  title: string;
  nodes: FlowNode[];
  connections: [string, string][];
  legend: { label: string; color: string }[];
}

const PROJECT_ARCHITECTURES: Record<string, ProjectArchitecture> = {
  "ai-portfolio": {
    title: "RAG AI Inference & 3D Render Pipeline",
    nodes: [
      { id: "input", label: "User Input", sublabel: "Next.js UI & Web Speech", color: "#14B8A6", row: 0, col: 0, tech: "React 19 / Web Speech API", details: "Captures natural language or voice queries, sanitizes inputs, and sends prompt payload to server." },
      { id: "route", label: "Edge Route", sublabel: "Next.js Route Handler", color: "#10B981", row: 0, col: 1, tech: "Next.js App Router (Edge)", details: "Validates incoming payload and enforces token bucket rate limiting on /api/chat." },
      { id: "context", label: "RAG Engine", sublabel: "Context Assembly & Prompts", color: "#10B981", row: 0, col: 2, tech: "Vector / Metadata Search", details: "Injects live project metadata, career timeline, and skills matrix into the structured LLM system prompt." },
      { id: "llm", label: "AI Model", sublabel: "Groq Llama 3.1 70B", color: "#3B82F6", row: 1, col: 2, tech: "LPU Inference Engine", details: "Processes context & user query with low-latency (<500ms TTFT) streaming responses." },
      { id: "format", label: "Stream Parser", sublabel: "Chunk Parser & TTS Hook", color: "#3B82F6", row: 1, col: 1, tech: "ReadableStream / Synthesis", details: "Streams token chunks to frontend while synthesizing voice audio in parallel." },
      { id: "output", label: "Terminal Render", sublabel: "Interactive UI & Speech", color: "#14B8A6", row: 1, col: 0, tech: "Framer Motion / Audio", details: "Renders animated response terminal with glowing status indicators and voice output." },
    ],
    connections: [
      ["input", "route"],
      ["route", "context"],
      ["context", "llm"],
      ["llm", "format"],
      ["format", "output"],
    ],
    legend: [
      { label: "Frontend / Client", color: "#14B8A6" },
      { label: "Edge Middleware", color: "#10B981" },
      { label: "AI Pipeline", color: "#3B82F6" },
    ],
  },
  "saas-devboard": {
    title: "GitHub Webhook & Real-Time Kanban Pipeline",
    nodes: [
      { id: "github", label: "GitHub API", sublabel: "OAuth & Webhook Events", color: "#3B82F6", row: 0, col: 0, tech: "GitHub REST & Webhooks", details: "Dispatches issue/PR creation, branch merges, and commit status updates directly to the app." },
      { id: "auth", label: "Auth Layer", sublabel: "NextAuth.js v5 Beta", color: "#14B8A6", row: 0, col: 1, tech: "OAuth 2.0 / JWT", details: "Secures user sessions and authenticates API requests with fine-grained GitHub scopes." },
      { id: "handler", label: "Server Action", sublabel: "Webhook Ingestion", color: "#10B981", row: 0, col: 2, tech: "Idempotent Event Handler", details: "Verifies HMAC signature, deduplicates event IDs, and normalizes task payloads." },
      { id: "database", label: "Prisma & Postgres", sublabel: "Relational Persistence", color: "#A855F7", row: 1, col: 2, tech: "PostgreSQL Database", details: "Atomically stores updated cards, column states, and team analytics records." },
      { id: "analytics", label: "Analytics Engine", sublabel: "Velocity & Lead-Time", color: "#10B981", row: 1, col: 1, tech: "Recharts Visualization", details: "Computes PR cycle times, throughput metrics, and burndown velocity stats." },
      { id: "kanban", label: "Live Kanban UI", sublabel: "Drag & Drop Workspace", color: "#14B8A6", row: 1, col: 0, tech: "React 19 / Tailwind v4", details: "Renders optimistic updates with instant visual feedback and live task column movement." },
    ],
    connections: [
      ["github", "auth"],
      ["auth", "handler"],
      ["handler", "database"],
      ["database", "analytics"],
      ["analytics", "kanban"],
    ],
    legend: [
      { label: "Authentication & UI", color: "#14B8A6" },
      { label: "Event Processing", color: "#10B981" },
      { label: "GitHub / API", color: "#3B82F6" },
      { label: "Database Layer", color: "#A855F7" },
    ],
  },
  "styleway-studio": {
    title: "E-Commerce Reactive State & Lookbook Architecture",
    nodes: [
      { id: "storefront", label: "Storefront UI", sublabel: "3D Hotspots & Outfits", color: "#14B8A6", row: 0, col: 0, tech: "Next.js 16 / Framer Motion", details: "Interactive lookbook with clickable coordinates and mix-and-match outfit canvas." },
      { id: "swr", label: "SWR Data Layer", sublabel: "Reactive Cache & Optimistic", color: "#10B981", row: 0, col: 1, tech: "Stale-While-Revalidate", details: "Maintains instantaneous UI responsiveness with sub-100ms background revalidation." },
      { id: "supabase", label: "Supabase SSR", sublabel: "PostgreSQL & Auth", color: "#3B82F6", row: 0, col: 2, tech: "Supabase JS v2 & RLS", details: "Multi-tenant inventory control, role-based admin security, and real-time product sync." },
      { id: "admin", label: "Admin Control", sublabel: "Live CMS & Banner Studio", color: "#A855F7", row: 1, col: 2, tech: "Role: Primary / Sub-Admin", details: "Empowers real-time promo banner switches, stock toggles, and margin adjustments." },
      { id: "promos", label: "Promo Engine", sublabel: "10+ Brand Presets", color: "#10B981", row: 1, col: 1, tech: "Dynamic Modal Engine", details: "Renders luxury templates like Zara Editorial, Nike Velocity, and Flash Countdowns." },
      { id: "cart", label: "Cart & Checkout", sublabel: "Sliding Drawer & Vouchers", color: "#14B8A6", row: 1, col: 0, tech: "Context API + LocalStorage", details: "Manages outfit bundles, coupon codes, and frictionless client-side checkout flows." },
    ],
    connections: [
      ["storefront", "swr"],
      ["swr", "supabase"],
      ["supabase", "admin"],
      ["admin", "promos"],
      ["promos", "cart"],
    ],
    legend: [
      { label: "Storefront UX", color: "#14B8A6" },
      { label: "Data Cache & Logic", color: "#10B981" },
      { label: "Cloud Backend", color: "#3B82F6" },
      { label: "Admin & Marketing", color: "#A855F7" },
    ],
  },
  "bank-management": {
    title: "C++ Transactional Record & Serialization Pipeline",
    nodes: [
      { id: "cli", label: "CLI Interface", sublabel: "Input Parsing & Menus", color: "#3B82F6", row: 0, col: 0, tech: "C++17 Console IO", details: "Structured menu systems with strict character type checking and stream validation." },
      { id: "validator", label: "Input Validator", sublabel: "Sanitization & Rules", color: "#14B8A6", row: 0, col: 1, tech: "Exception / Error Guards", details: "Validates account boundaries, numeric ranges, and prevents buffer overflow anomalies." },
      { id: "ledger", label: "Account Engine", sublabel: "Balances & Operations", color: "#10B981", row: 0, col: 2, tech: "OOP Class Hierarchy", details: "Executes deposits, withdrawals, and interest calculations with ACID-style safety." },
      { id: "serialize", label: "Binary Serializer", sublabel: "Struct Binary Mapping", color: "#A855F7", row: 1, col: 2, tech: "fstream binary mode", details: "Packs memory structures directly into binary format for high-speed file storage." },
      { id: "buffer", label: "Atomic Buffer", sublabel: "Temp File Replacement", color: "#10B981", row: 1, col: 1, tech: "Rollback Mechanism", details: "Stages modified records to a temporary file before atomic renaming on commit." },
      { id: "disk", label: "Persistent Storage", sublabel: "Raw Binary File (.dat)", color: "#3B82F6", row: 1, col: 0, tech: "Filesystem I/O", details: "Ensures 100% data integrity with zero corruption guarantees across power interruptions." },
    ],
    connections: [
      ["cli", "validator"],
      ["validator", "ledger"],
      ["ledger", "serialize"],
      ["serialize", "buffer"],
      ["buffer", "disk"],
    ],
    legend: [
      { label: "Console UI & I/O", color: "#3B82F6" },
      { label: "Validation & Safety", color: "#14B8A6" },
      { label: "Business Logic", color: "#10B981" },
      { label: "Binary Storage", color: "#A855F7" },
    ],
  },
  "weather-app": {
    title: "Weather Service API & Client Rendering",
    nodes: [
      { id: "search", label: "Search Input", sublabel: "Debounced Location", color: "#14B8A6", row: 0, col: 0, tech: "React Hooks (useDebounce)", details: "Captures user query with responsive auto-completion and coordinate lookup." },
      { id: "fetcher", label: "Async Fetcher", sublabel: "HTTP REST Client", color: "#10B981", row: 0, col: 1, tech: "Fetch API with Retry", details: "Dispatches authenticated queries to OpenWeatherMap with timeout guards." },
      { id: "api", label: "OpenWeather API", sublabel: "Global Weather Data", color: "#3B82F6", row: 0, col: 2, tech: "REST Geocoding & Radar", details: "Returns real-time temperature, humidity, wind vector, and 5-day forecasts." },
      { id: "parser", label: "JSON Transform", sublabel: "Metric Normalizer", color: "#A855F7", row: 1, col: 2, tech: "TypeScript Interfaces", details: "Parses complex weather responses into lightweight, type-safe UI view models." },
      { id: "state", label: "Weather State", sublabel: "Component Context", color: "#10B981", row: 1, col: 1, tech: "React State & Effects", details: "Maintains current conditions, hourly projections, and error fallback states." },
      { id: "ui", label: "Forecast View", sublabel: "Dynamic Cards & Radar", color: "#14B8A6", row: 1, col: 0, tech: "Tailwind CSS + Lucide", details: "Renders animated meteorological gauges, temperature charts, and condition icons." },
    ],
    connections: [
      ["search", "fetcher"],
      ["fetcher", "api"],
      ["api", "parser"],
      ["parser", "state"],
      ["state", "ui"],
    ],
    legend: [
      { label: "Client Layer", color: "#14B8A6" },
      { label: "Data Pipeline", color: "#10B981" },
      { label: "External Service", color: "#3B82F6" },
      { label: "State & Mapping", color: "#A855F7" },
    ],
  },
};

export default function ArchitectureDiagram({ projectId = "ai-portfolio" }: { projectId?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const arrowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const nodeRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [selectedNode, setSelectedNode] = useState<FlowNode | null>(null);

  // Fallback to ai-portfolio if projectId is not in dictionary
  const architecture = PROJECT_ARCHITECTURES[projectId] || PROJECT_ARCHITECTURES["ai-portfolio"];
  const { nodes, connections, legend, title } = architecture;

  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    // Animate nodes in sequence
    nodeRefs.current.forEach((node, i) => {
      if (node) {
        tl.fromTo(
          node,
          { opacity: 0, scale: 0.85, y: 10 },
          { opacity: 1, scale: 1, y: 0, duration: 0.3 },
          i * 0.08
        );
      }
    });

    // Animate arrows in sequence after nodes
    arrowRefs.current.forEach((arrow, i) => {
      if (arrow) {
        tl.fromTo(
          arrow,
          { opacity: 0, scaleX: 0 },
          { opacity: 1, scaleX: 1, duration: 0.25, transformOrigin: "left center" },
          0.25 + i * 0.08
        );
      }
    });

    // Pulse animation on the data flow arrows
    arrowRefs.current.forEach((arrow) => {
      if (arrow) {
        gsap.to(arrow.querySelector(".flow-dot"), {
          x: "100%",
          duration: 1.6,
          repeat: -1,
          ease: "none",
          delay: 0.5,
        });
      }
    });

    return () => {
      tl.kill();
    };
  }, [projectId]);

  // Position helpers
  const getNodePosition = (node: FlowNode) => {
    const colPercent = node.col * 33.33;
    const rowPercent = node.row * 50;
    return { left: `${colPercent}%`, top: `${rowPercent}%` };
  };

  const getNodeIndex = (id: string) => nodes.findIndex((n) => n.id === id);

  return (
    <div ref={containerRef} className="w-full py-2">
      {/* Section header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse shadow-[0_0_8px_#10B981]" />
          <span className="text-[10px] font-mono text-[#EDEDED] uppercase tracking-wider font-bold">
            {title}
          </span>
        </div>
        <span className="text-[9px] font-mono text-[#64748B] hidden sm:inline">
          Click any node to inspect details
        </span>
      </div>

      {/* Flow diagram container */}
      <div className="relative w-full" style={{ aspectRatio: "3 / 1.15", minHeight: "170px" }}>
        {/* Nodes */}
        {nodes.map((node, i) => {
          const pos = getNodePosition(node);
          const isInspected = selectedNode?.id === node.id;
          return (
            <button
              key={node.id}
              ref={(el) => { nodeRefs.current[i] = el; }}
              onClick={() => setSelectedNode(isInspected ? null : node)}
              className={`absolute flex flex-col items-center justify-center text-center p-2 rounded-xl border transition-all duration-200 cursor-pointer ${
                isInspected ? "ring-2 ring-white/50 scale-105" : "hover:scale-105"
              }`}
              style={{
                left: pos.left,
                top: pos.top,
                width: "30%",
                height: "44%",
                borderColor: isInspected ? node.color : `${node.color}45`,
                backgroundColor: isInspected ? `${node.color}25` : `${node.color}0a`,
                boxShadow: isInspected ? `0 0 20px ${node.color}40` : `0 0 15px ${node.color}10`,
              }}
            >
              <span
                className="text-[10px] sm:text-xs font-bold font-mono tracking-wide leading-tight"
                style={{ color: node.color }}
              >
                {node.label}
              </span>
              <span className="text-[8px] sm:text-[9px] font-mono text-[#94A3B8] mt-0.5 leading-tight truncate w-full px-1">
                {node.sublabel}
              </span>
            </button>
          );
        })}

        {/* Connection arrows */}
        {connections.map(([fromId, toId], i) => {
          const fromNode = nodes[getNodeIndex(fromId)];
          const toNode = nodes[getNodeIndex(toId)];
          if (!fromNode || !toNode) return null;

          const isHorizontal = fromNode.row === toNode.row;
          const isDownward = !isHorizontal && toNode.row > fromNode.row;
          const isUpward = !isHorizontal && toNode.row < fromNode.row;

          let arrowStyle: React.CSSProperties = {};
          let arrowClass = "";

          if (isHorizontal) {
            const startCol = Math.min(fromNode.col, toNode.col);
            const left = `${startCol * 33.33 + 30}%`;
            const top = `${fromNode.row * 50 + 22}%`;
            arrowStyle = {
              left,
              top,
              width: "3.33%",
              height: "2px",
              background: `linear-gradient(90deg, ${fromNode.color}80, ${toNode.color}80)`,
            };
            arrowClass = "absolute";
          } else if (isDownward) {
            const left = `${fromNode.col * 33.33 + 15}%`;
            const top = `${fromNode.row * 50 + 44}%`;
            arrowStyle = {
              left,
              top,
              width: "2px",
              height: "6%",
              background: `linear-gradient(180deg, ${fromNode.color}80, ${toNode.color}80)`,
            };
            arrowClass = "absolute";
          } else if (isUpward) {
            const left = `${fromNode.col * 33.33 + 15}%`;
            const top = `${toNode.row * 50 + 44}%`;
            arrowStyle = {
              left,
              top,
              width: "2px",
              height: "6%",
              background: `linear-gradient(0deg, ${fromNode.color}80, ${toNode.color}80)`,
            };
            arrowClass = "absolute";
          }

          return (
            <div
              key={`${fromId}-${toId}`}
              ref={(el) => { arrowRefs.current[i] = el; }}
              className={`${arrowClass} rounded-full overflow-hidden pointer-events-none`}
              style={arrowStyle}
            >
              <div
                className="flow-dot absolute rounded-full"
                style={{
                  width: isHorizontal ? "6px" : "4px",
                  height: isHorizontal ? "4px" : "6px",
                  backgroundColor: toNode.color,
                  boxShadow: `0 0 8px ${toNode.color}`,
                  top: isHorizontal ? "-1px" : "0",
                  left: isHorizontal ? "0" : "-1px",
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Selected Node Details Drawer */}
      {selectedNode && (
        <div className="mt-3 p-3.5 rounded-xl bg-[#070707] border border-[#262626] flex items-start justify-between gap-3 animate-in fade-in slide-in-from-top-1 duration-200">
          <div className="flex gap-2.5 items-start">
            <div
              className="p-1.5 rounded-lg shrink-0 mt-0.5"
              style={{ backgroundColor: `${selectedNode.color}15`, color: selectedNode.color }}
            >
              <Zap size={14} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-white">{selectedNode.label}</span>
                {selectedNode.tech && (
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-[#CBD5E1]">
                    {selectedNode.tech}
                  </span>
                )}
              </div>
              <p className="text-xs text-[#94A3B8] mt-1 leading-relaxed">{selectedNode.details}</p>
            </div>
          </div>
          <button
            onClick={() => setSelectedNode(null)}
            className="text-zinc-500 hover:text-white p-1 hover:bg-white/5 rounded-md transition-colors"
            aria-label="Close details"
          >
            <X size={14} />
          </button>
        </div>
      )}

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mt-3 pt-3 border-t border-[#262626]/50">
        {legend.map((item) => (
          <div key={item.label} className="flex items-center gap-1.5">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: item.color, boxShadow: `0 0 6px ${item.color}60` }}
            />
            <span className="text-[9px] font-mono text-[#737373] uppercase tracking-wider">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
