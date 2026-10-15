import { Factory, Compass, ArrowRight, ShieldCheck, CheckCircle2, Award, Clock } from "lucide-react";
import Link from "next/link";

export interface MetricItem {
  value: string;
  label: string;
  description: string;
}

interface DivisionHeaderProps {
  id: string;
  divisionNumber: "01" | "02";
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  primaryLink: { label: string; href: string };
  secondaryLink?: { label: string; href: string };
  theme: "manufacturing" | "engineering";
  metrics?: MetricItem[];
}

const DEFAULT_MFG_METRICS: MetricItem[] = [
  {
    value: "ASTM / ACI",
    label: "TESTED CONCRETE MIXES",
    description: "Quality mix designs verified per ASTM & state DOT standards",
  },
  {
    value: "RIGGED",
    label: "OVERHEAD CRANE HANDLING",
    description: "Equipped bridge cranes for controlled element demolding",
  },
  {
    value: "AUTOMATED",
    label: "PLANETARY BATCHING",
    description: "Computerized batch plant with moisture probe controls",
  },
  {
    value: "PRECISION",
    label: "STEEL CASTING FORMS",
    description: "Laser-aligned steel beds for tight dimensional tolerances",
  },
];

const DEFAULT_ENG_METRICS: MetricItem[] = [
  {
    value: "LICENSED PE",
    label: "PE & SE STAMPED CALCS",
    description: "Structural calculations for municipal & state DOT submittals",
  },
  {
    value: "LOD 400",
    label: "TEKLA 3D DETAILING",
    description: "Clash-free embeds, rebar cages & piece tickets",
  },
  {
    value: "TAKEOFFS",
    label: "DIRECT ESTIMATING DESK",
    description: "Detailed drawing review and preliminary bill of materials",
  },
  {
    value: "MNL-120",
    label: "PCI SPEC DETAILING",
    description: "AASHTO highway bridge & ACI standard connections",
  },
];

export function DivisionHeader({
  id,
  divisionNumber,
  title,
  subtitle,
  badge,
  description,
  primaryLink,
  secondaryLink,
  theme,
  metrics,
}: DivisionHeaderProps) {
  const isMfg = theme === "manufacturing";
  const activeMetrics = metrics || (isMfg ? DEFAULT_MFG_METRICS : DEFAULT_ENG_METRICS);

  return (
    <div
      id={id}
      className={`w-full py-10 sm:py-14 border-y border-[#DCE5F0] relative overflow-hidden ${
        isMfg
          ? "bg-gradient-to-r from-[#FFF5F5] via-[#FFF9F9] to-white"
          : "bg-gradient-to-r from-[#F0F6FF] via-[#F6F9FF] to-white"
      }`}
    >
      <div className="section-container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (7 cols): Division Pill, Title, Subtitle, Description, and CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Division Pill */}
            <div className="flex flex-wrap items-center gap-2.5 mb-3.5">
              <span
                className={`px-3 py-1 rounded text-[11px] font-black uppercase tracking-wider font-mono shadow-xs ${
                  isMfg ? "bg-[#D4030C] text-white" : "bg-[#032356] text-white"
                }`}
              >
                DIVISION {divisionNumber}
              </span>
              <span className="text-xs font-black uppercase tracking-widest text-[#64748B] font-mono">
                {badge}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#032356] tracking-tight uppercase leading-[1.1] mb-2.5">
              {title}
            </h2>

            {/* Subtitle Accent Line */}
            <div className="flex items-center gap-2.5 mb-4">
              <span className={`w-8 h-1 rounded-full ${isMfg ? "bg-[#D4030C]" : "bg-[#032356]"}`} />
              <span className="text-xs sm:text-sm font-extrabold text-[#D4030C] uppercase tracking-wide">
                {subtitle}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#334155] leading-relaxed font-normal mb-6 max-w-2xl">
              {description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={primaryLink.href}
                className={`inline-flex items-center gap-2 px-5 sm:px-6 py-3.5 rounded-lg text-xs font-black uppercase tracking-wider shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 ${
                  isMfg
                    ? "bg-[#D4030C] hover:bg-[#B50209] text-white shadow-red-600/25"
                    : "bg-[#032356] hover:bg-[#02173B] text-white shadow-blue-900/25"
                }`}
              >
                {isMfg ? <Factory className="w-4 h-4" /> : <Compass className="w-4 h-4" />}
                <span>{primaryLink.label}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {secondaryLink && (
                <Link
                  href={secondaryLink.href}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg border-2 border-[#DCE5F0] bg-white hover:bg-slate-50 text-[#032356] text-xs font-black uppercase tracking-wider transition-colors shadow-xs active:scale-95"
                >
                  <span>{secondaryLink.label}</span>
                </Link>
              )}
            </div>
          </div>

          {/* Right Column (5 cols): 4 High-Impact Metric Cards that completely fill the width */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-3.5">
              {activeMetrics.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border-2 border-[#DCE5F0] hover:border-[#032356] rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-md hover-lift transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div
                      className={`text-lg sm:text-xl font-black font-mono tracking-tight leading-tight mb-1.5 ${
                        isMfg ? "text-[#D4030C]" : "text-[#032356]"
                      }`}
                    >
                      {item.value}
                    </div>
                    <div className="text-[11px] font-black text-[#032356] uppercase tracking-wide leading-snug">
                      {item.label}
                    </div>
                  </div>
                  <p className="text-[11px] text-[#64748B] leading-tight font-medium mt-2 pt-2 border-t border-slate-100">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
