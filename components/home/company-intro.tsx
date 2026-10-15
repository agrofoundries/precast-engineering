import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail, ShieldCheck, Cpu } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const CAPABILITY_POINTS = [
  "Underground Infrastructure: Monolithic watertight septic tanks, utility vaults, and grease interceptors.",
  "Stormwater Management: State DOT-approved catch basins, curb inlet boxes, and heavy box culverts.",
  "Heavy Civil & Site Solutions: Highway bridge wing walls, pipe headwalls, and precision steel gang molds.",
  "Engineered Quality: 6,000+ PSI mix designs, licensed PE stamps, and direct plant-to-jobsite flatbed delivery.",
];

export function CompanyIntro() {
  return (
    <section id="company-intro" className="w-full bg-white py-8 sm:py-10 border-b border-[#DCE5F0]">
      <div className="section-container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Manufacturing Plant Photo Stage */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#DCE5F0] shadow-xl aspect-[4/3] bg-slate-100">
              <Image
                src="/images/hero-precast.jpg"
                alt="High-capacity precast concrete casting yard with outdoor gantry and mobile crane logistics"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Plant Capacity Accreditation Bar */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="bg-[#F4F8FD] border border-[#DCE5F0] rounded-xl p-3.5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#032356] text-white flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#D4030C]" />
                </div>
                <div>
                  <div className="text-xs font-black text-[#032356] uppercase">PCI Certified Plant</div>
                  <div className="text-[11px] text-[#64748B]">Quality-Assured Casting</div>
                </div>
              </div>

              <div className="bg-[#F4F8FD] border border-[#DCE5F0] rounded-xl p-3.5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#032356] text-white flex items-center justify-center shrink-0">
                  <Cpu className="w-5 h-5 text-[#D4030C]" />
                </div>
                <div>
                  <div className="text-xs font-black text-[#032356] uppercase">High-Volume Beds</div>
                  <div className="text-[11px] text-[#64748B]">Rapid Production &amp; Delivery</div>
                </div>
              </div>
            </div>
          </div>

          {/* Manufacturing Focus Intro Content */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#D4030C] mb-3">
              <span className="w-4 h-0.5 bg-[#D4030C]" />
              <span>PRECAST CONCRETE MANUFACTURING &amp; SUPPLY</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#032356] tracking-tight leading-tight uppercase mb-4">
              Heavy Precast Manufacturing &amp; Concrete Plant Production
            </h2>

            <p className="text-sm sm:text-base text-[#334155] leading-relaxed mb-6 font-normal">
              We specialize in direct precast concrete manufacturing for highway contractors, underground utility installers, and civil infrastructure builders. Operating high-capacity casting beds with computer-controlled batching, our plant produces box culverts, bridge panels, road storm basins, and watertight utility tanks built to strict DOT standards.
            </p>

            {/* Checklist */}
            <div className="space-y-3.5 mb-8">
              {CAPABILITY_POINTS.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D4030C] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Action & Contact Strip */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4 sm:gap-6">
              <Link href="/#services" className="btn-navy px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                <span>View Engineering Services</span>
                <ArrowRight className="w-4 h-4 text-[#D4030C]" />
              </Link>

              <Link href="/#contact" className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg border-2 border-[#D4030C] bg-white text-[#D4030C] hover:bg-[#D4030C] hover:text-white transition-colors text-xs font-black uppercase tracking-wider">
                <Mail className="w-4 h-4" />
                <span>Get a Project Quote</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
