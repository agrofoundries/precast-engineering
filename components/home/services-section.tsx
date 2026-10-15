import Link from "next/link";
import {
  Compass,
  Link as LinkIcon,
  Layers,
  FileSpreadsheet,
  Box,
  Grid,
  Anchor,
  GitMerge,
  ArrowRight,
} from "lucide-react";

interface ServiceItem {
  title: string;
  description: string;
  icon: typeof Compass;
  href: string;
}

const SERVICES: ServiceItem[] = [
  {
    title: "Structural Engineering",
    description:
      "Comprehensive structural analysis and PE stamped calculations for precast and prestressed concrete systems under gravity, wind, and seismic loads.",
    icon: Compass,
    href: "/#contact",
  },
  {
    title: "Precast Connection Design",
    description:
      "Engineered connection details, embed plates, bearing pads, and field-welded connections meeting ACI and PCI standard practices.",
    icon: LinkIcon,
    href: "/#contact",
  },
  {
    title: "Prestressed Concrete Design",
    description:
      "Tensioning calculations, transfer stresses, long-term prestress losses, camber estimation, and deflection control for beams, slabs, and girders.",
    icon: Layers,
    href: "/#contact",
  },
  {
    title: "Shop Drawings and Detailing",
    description:
      "Accurate piece tickets, production drawings, embed layout sheets, and erection diagrams tailored to precast plant casting beds.",
    icon: FileSpreadsheet,
    href: "/#contact",
  },
  {
    title: "3D Modeling & Detailing",
    description:
      "Tekla Structures LOD 400 models facilitating multidisciplinary clash detection, hardware coordination, and automated bill of materials.",
    icon: Box,
    href: "/#contact",
  },
  {
    title: "Reinforcement Detailing",
    description:
      "Clear bar bending schedules, welded wire reinforcement layout, mesh placement, and congestion resolution for efficient plant fabrication.",
    icon: Grid,
    href: "/#contact",
  },
  {
    title: "Lifting and Erection Engineering",
    description:
      "Handling stresses, stripping calculations, crane rigging configurations, lifting loop sizing, and temporary erection bracing plans.",
    icon: Anchor,
    href: "/#contact",
  },
  {
    title: "Design Coordination",
    description:
      "Direct technical liaison between architects, general contractors, precasters, and MEP engineers to resolve structural conflicts early.",
    icon: GitMerge,
    href: "/#contact",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="w-full bg-[#032356] bg-gradient-to-br from-[#032356] via-[#081F3B] to-[#032356] text-white py-12 sm:py-16 border-b border-[#032356]">
      <div className="section-container-wide">
        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#D4030C] mb-2">
            <span className="w-3 h-0.5 bg-[#D4030C]" />
            <span>PRECAST STRUCTURAL DISCIPLINES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            Engineering &amp; <span className="text-[#D4030C]">Detailing Services</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
            Specialized engineering services focused specifically on precast and prestressed concrete infrastructure across the United States.
          </p>
        </div>

        {/* 8 Service Cards Grid with High-Contrast White Background Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all duration-300 group border-t-4 border-[#D4030C]"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#F4F8FD] border border-[#DCE5F0] flex items-center justify-center text-[#032356] group-hover:bg-[#032356] group-hover:text-white transition-colors mb-5">
                    <Icon className="w-6 h-6 text-[#D4030C] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-[#032356] group-hover:text-[#D4030C] transition-colors mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>
                </div>

                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#032356] group-hover:text-[#D4030C] transition-colors mt-auto pt-4 border-t border-slate-100"
                >
                  <span>Inquire About This Service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#D4030C]" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
