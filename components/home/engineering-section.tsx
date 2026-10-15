import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Cpu, Layers, FileCode2, CheckCircle2, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const ENGINEERING_FEATURES = [
  {
    code: "ENG-01",
    title: "LOD 400 Tekla Detailing",
    description: "Every rebar cage, embed plate, lifting insert, and architectural reveal is modeled in full 3D to eliminate field clashes with MEP and structural steel.",
  },
  {
    code: "ENG-02",
    title: "Licensed Professional Engineers (PE / SE)",
    description: "In-house structural engineering group providing stamped calculation packages for submittals across municipal and DOT jurisdictions.",
  },
  {
    code: "ENG-03",
    title: "Custom Connection & Embed Design",
    description: "Engineered bearing seats, weld plates, expansion joints, and slotted seismic connections designed for accelerated field erection.",
  },
  {
    code: "ENG-04",
    title: "Pre-Pour Value Engineering Review",
    description: "We optimize panel dimensions, pick weights, and casting line repetitions to minimize crane mobilization time and shipping costs.",
  },
];

export function EngineeringSection() {
  return (
    <section id="engineering-overview" className="w-full bg-white border-b border-[#DCE5F0] py-12 sm:py-16">
      <div className="section-container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Engineering Text & Technical Specs */}
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Virtual Design & Detailing"
              specCode="PE / LOD 400"
              title="In-House Precast Structural Engineering &amp; Detailing"
              description="Our specialized structural engineers turn complex architectural blueprints into constructible, high-performance precast systems. We detail every connection and verify tolerances before a single yard of concrete is cast."
            />

            <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {ENGINEERING_FEATURES.map((item) => (
                <div
                  key={item.code}
                  className="p-4 sm:p-5 bg-[#F8FAFC] border-2 border-[#DCE5F0] border-l-4 border-l-[#032356] hover:border-l-[#D4030C] rounded-xl transition-all shadow-xs hover:shadow-md"
                >
                  <div className="font-mono text-[10px] font-bold text-[#D4030C] mb-1">
                    [{item.code}]
                  </div>
                  <h3 className="text-sm font-bold text-[#032356] uppercase tracking-tight mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3 items-center">
              <Link href="/capabilities#engineering" className="btn-navy text-xs uppercase tracking-wider font-bold">
                Explore Structural &amp; PE Capabilities
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <div className="font-mono text-xs font-bold text-[#032356] bg-[#EEF3F8] border border-[#DCE5F0] px-3.5 py-2 rounded-lg flex items-center gap-2 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                LICENSED PE STAMPED CALCULATIONS
              </div>
            </div>
          </div>

          {/* Engineering Team Photograph with Light Clean Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden border-2 border-[#CBD5E1] shadow-xl aspect-[4/5] bg-[#EAEEF3]">
              <Image
                src="/images/engineering-team.jpg"
                alt="Precast structural engineers reviewing shop drawings"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />

              {/* Clean Light Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 border border-[#CBD5E1] rounded-lg shadow-md">
                <div className="text-[#D4030C] text-xs font-black uppercase mb-1">
                  Direct Contractor Coordination
                </div>
                <p className="text-[#475569] text-xs leading-relaxed font-medium">
                  Collaborative submittal reviews, responsive coordination, and 3D erection model integration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
