import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function AboutPrecastEngineers() {
  return (
    <section id="about" className="bg-white border-b border-[#DCE5F0] py-16">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Professional Introduction */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="badge-tag mb-3">Company Overview</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#032356] tracking-tight">
                About Precast Engineers
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#334155] leading-relaxed">
              Precast Engineers focuses on engineering, technical knowledge, and practical solutions for the precast concrete industry. We aim to help precast professionals access useful information, improve project coordination, and support better engineering outcomes.
            </p>

            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Serving precast concrete manufacturers, structural designers, general contractors, and detailing teams throughout the United States, our engineering platform bridges the gap between architectural intent and efficient factory fabrication.
            </p>

            {/* Core Values / Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
              <div className="p-4 bg-[#F2F7FF] border border-[#DCE5F0] rounded-lg space-y-1">
                <div className="flex items-center gap-2 text-[#032356] font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#D4030C]" />
                  <span>Technical Relevance</span>
                </div>
                <p className="text-[#64748B] text-[11px]">
                  Practical structural designs tailored to actual plant casting and crane handling requirements.
                </p>
              </div>

              <div className="p-4 bg-[#F2F7FF] border border-[#DCE5F0] rounded-lg space-y-1">
                <div className="flex items-center gap-2 text-[#032356] font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#D4030C]" />
                  <span>Empowering Precasters</span>
                </div>
                <p className="text-[#64748B] text-[11px]">
                  Providing reliable engineering calculations, tools, and detailing support to strengthen precasters nationwide.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/#contact"
                className="btn-navy text-xs inline-flex items-center gap-2 px-5 py-2.5 rounded"
              >
                <span>Connect with Our Team</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right: Engineering Team Photograph */}
          <div className="lg:col-span-5">
            <div className="rounded-lg overflow-hidden border border-[#DCE5F0] shadow-sm bg-[#F2F7FF]">
              <Image
                src="/images/engineering-team.jpg"
                alt="Precast Engineers technical team reviewing precast concrete structural drawings"
                width={700}
                height={520}
                className="w-full h-[340px] sm:h-[400px] object-cover"
              />
              <div className="p-3 bg-white border-t border-[#DCE5F0] text-xs text-[#64748B]">
                <p className="font-semibold text-[#032356]">
                  Precast Engineering &amp; Detailing Practice
                </p>
                <p className="text-[11px]">
                  Focusing on precision calculations, 3D structural models, and shop drawings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
