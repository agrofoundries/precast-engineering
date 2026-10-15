"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  ChevronUp,
  CheckCircle2,
  Play,
  Download,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";

const MANUFACTURING_LINKS = [
  { label: "Precast Concrete Box Culverts (ASTM C1577)", href: "/products#infrastructure" },
  { label: "Precast Road Catch Basins (ASTM C478)", href: "/#products" },
  { label: "Maine DOT High-Flow Leaching Galleys", href: "/#products" },
  { label: "AASHTO HS-20 & HS-25 Traffic Slabs", href: "/#products" },
  { label: "Monolithic Septic Tanks (ASTM C1227)", href: "/products#tanks" },
  { label: "Commercial Grease Interceptors", href: "/#products" },
  { label: "Highway Bridge Wingwalls & Headwalls", href: "/products#infrastructure" },
];

const ENGINEERING_LINKS = [
  { label: "Licensed PE & SE Calculations", href: "/#services" },
  { label: "Tekla LOD 400 Structural Detailing", href: "/#services" },
  { label: "Precast Connection & Embed Design", href: "/#services" },
  { label: "Lifting & Crane Rigging Engineering", href: "/#services" },
  { label: "Rebar & Prestressing Schedules", href: "/#services" },
  { label: "State DOT & Municipal Agency Submittals", href: "/#services" },
  { label: "Direct Contractor Takeoff & Estimating", href: "/#contact" },
];

const COMPANY_LINKS = [
  { label: "Home", href: "/#hero" },
  { label: "About Precast Engineers", href: "/about" },
  { label: "Products Catalog", href: "/products" },
  { label: "Plant Capabilities & Casting Beds", href: "/capabilities" },
  { label: "Seven Regional Technical Offices", href: "/#locations" },
  { label: "Civil Engineering Blog", href: "/#blog" },
  { label: "Request a Project Quote", href: "/#contact" },
];

const INDUSTRIES_PILLS = [
  "Highway & DOT Projects",
  "Stormwater Drainage",
  "Civil Infrastructure",
  "Commercial Sites",
  "Subsurface Infiltration",
  "Precast Fabrication Plants",
];

const LATEST_INSIGHTS = [
  {
    title: "AASHTO HS-20 vs HS-25 Highway Live Load Surcharge Analysis",
    tag: "AASHTO",
    date: "OCT 2026",
    href: "/#blog",
  },
  {
    title: "ASTM C1577 Precast Box Culvert Design & Joint Sealing Protocols",
    tag: "CULVERTS",
    date: "SEP 2026",
    href: "/#blog",
  },
  {
    title: "Tekla LOD 400 Detailing: Eliminating Casting Bed Rebar Clashes",
    tag: "DETAILING",
    date: "SEP 2026",
    href: "/#blog",
  },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
      }, 2500);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="w-full bg-[#032356] text-white border-t-4 border-[#D4030C] relative" role="contentinfo">
      {/* ======================================================== */}
      {/* 1. TOP ON-SITE ENGINEERING & PLANT SPOTLIGHT BANNER     */}
      {/* Exact architectural feature from astro-second-eight     */}
      {/* ======================================================== */}
      <div className="w-full bg-[#021A40] border-b border-white/15 py-8 sm:py-10">
        <div className="section-container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left 7 Columns: Embedded Plant Tooling Video */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4030C]/50 shadow-2xl bg-black aspect-video group">
                <video
                  src="/videos/solid-round-slab-gang-mold.mp4"
                  poster="/images/manufacturing.jpg"
                  controls
                  playsInline
                  autoPlay
                  muted
                  loop
                  preload="metadata"
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/solid-round-slab-gang-mold.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute top-3 left-3 pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[11px] font-mono font-bold text-white border border-white/20">
                    <span className="w-2 h-2 rounded-full bg-[#D4030C] animate-pulse" />
                    PLANT VIDEO · PRECISION STEEL GANG MOLD FABRICATION
                  </span>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Technical Description & Direct Specs CTA */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4030C]/20 border border-[#D4030C]/40 text-red-200 text-xs font-mono font-bold uppercase tracking-wider">
                <Play className="w-3.5 h-3.5 fill-current text-[#D4030C]" />
                <span>PLANT FABRICATION &amp; CASTING</span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white uppercase tracking-tight leading-snug">
                Precision Plant Tooling &amp; High-Volume Casting
              </h3>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                Witness precision multi-cavity gang mold casting engineered for ASTM traffic slabs, culvert endwalls, and municipal utility chambers. Engineered for high compressive strength (5,000 to 10,000+ PSI), heavy wheel load distribution (AASHTO HS-20 / HS-25), and 100-year civil structural resilience.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs text-slate-300">
                <div className="bg-white/10 border border-white/15 rounded-xl p-3">
                  <div className="text-[10px] text-sky-300 uppercase font-bold">LOAD RATING</div>
                  <div className="font-bold text-white mt-0.5">AASHTO HS-20 &amp; HS-25</div>
                </div>
                <div className="bg-white/10 border border-white/15 rounded-xl p-3">
                  <div className="text-[10px] text-sky-300 uppercase font-bold">SPECIFICATIONS</div>
                  <div className="font-bold text-white mt-0.5">ASTM C1577 &bull; C478 &bull; C1227</div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#D4030C] hover:bg-[#B50209] text-white text-xs font-black uppercase tracking-wider transition-all shadow-md active:scale-95"
                >
                  <span>Explore Product Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/resources"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold uppercase tracking-wider transition-all active:scale-95"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>CAD Submittals (PDF)</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. MAIN FOOTER MULTI-COLUMN DIRECTORY                   */}
      {/* ======================================================== */}
      <div className="section-container-wide py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14">
          {/* Column 1: Brand & Contact Info (span 4) */}
          <div className="lg:col-span-4 space-y-6">
            {/* White Logo Emblem Card with Sub-Brand Specs */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-xl border-2 border-slate-200 w-fit max-w-sm hover:border-[#D4030C] transition-all">
              <Link href="/" className="flex items-center gap-4" aria-label="Precast Engineers Home">
                <div className="relative h-14 sm:h-16 w-36 sm:w-44 shrink-0">
                  <Image
                    src="/logo.png"
                    alt="Precast Engineers Logo"
                    fill
                    className="object-contain object-left"
                    sizes="180px"
                  />
                </div>
                <div className="flex flex-col border-l-2 border-slate-200 pl-3.5">
                  <span className="text-sm sm:text-base font-black uppercase tracking-tight text-[#032356] leading-tight font-mono">
                    PRECAST ENGINEERS
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D4030C] font-mono leading-tight mt-0.5">
                    2026 CIVIL SPEC
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 mt-1 uppercase">
                    Plant Dispatch &bull; Technical Center
                  </span>
                </div>
              </Link>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Precast Engineers delivers certified high-strength precast concrete systems and licensed structural calculations for civil infrastructure, municipal stormwater networks, and heavy commercial construction across the United States.
            </p>

            {/* Direct Contact Points with US Coordinates */}
            <div className="space-y-3 text-xs text-slate-200 pt-2 font-mono">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-[#D4030C]" />
                </div>
                <span>105 Maxess Road, Melville, NY 11747</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5 text-[#D4030C]" />
                </div>
                <a
                  href={`tel:${COMPANY.phone.replace(/[^0-9]/g, "")}`}
                  className="hover:text-red-400 transition-colors font-bold text-white text-sm"
                >
                  (800) PRECAST &bull; (631) 458-1111
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
                  <Mail className="w-3.5 h-3.5 text-[#D4030C]" />
                </div>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="hover:text-red-400 transition-colors"
                >
                  {COMPANY.email}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
                  <Clock className="w-3.5 h-3.5 text-[#D4030C]" />
                </div>
                <span>{COMPANY.hours}</span>
              </div>
            </div>

            {/* Follow Us */}
            <div className="pt-3">
              <span className="block text-[11px] font-bold tracking-wider uppercase text-slate-300 mb-2.5">
                FOLLOW US
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-slate-300 hover:bg-[#D4030C] hover:border-[#D4030C] hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74V10.13H5.06v8.37z" />
                  </svg>
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X / Twitter"
                  className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-slate-300 hover:bg-[#D4030C] hover:border-[#D4030C] hover:text-white transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-slate-300 hover:bg-[#D4030C] hover:border-[#D4030C] hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Middle: Manufacturing, Structural Engineering & Company (span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Column 1: Manufacturing Division */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4030C] mb-4">
                  MANUFACTURING
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  {MANUFACTURING_LINKS.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="hover:text-white hover:underline transition-colors block leading-relaxed"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: Structural Engineering Division */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                  STRUCTURAL ENGINEERING &amp; DETAILING
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  {ENGINEERING_LINKS.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="hover:text-white hover:underline transition-colors block leading-relaxed"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Company */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                  COMPANY
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  {COMPANY_LINKS.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="hover:text-white hover:underline transition-colors block leading-relaxed"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Industries Sub-section with Pill Badges */}
            <div className="border-t border-slate-700/60 pt-6 mt-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                CIVIL &amp; INFRASTRUCTURE MARKETS
              </h4>
              <div className="flex flex-wrap gap-2">
                {INDUSTRIES_PILLS.map((pill) => (
                  <Link
                    key={pill}
                    href="/applications"
                    className="px-3 py-1 rounded-full bg-white/10 hover:bg-[#D4030C] border border-white/20 hover:border-[#D4030C] text-[11px] font-medium text-slate-200 hover:text-white transition-all"
                  >
                    {pill}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: Stay Informed & Latest Insights (span 3) */}
          <div className="lg:col-span-3 space-y-6">
            {/* Stay Informed Newsletter */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2">
                STAY INFORMED
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Quarterly technical notes, DOT specification updates, and practical precast engineering insights. No marketing spam.
              </p>

              {subscribed ? (
                <div className="flex items-center gap-2 bg-emerald-900/60 border border-emerald-500 rounded-full px-4 py-2 text-xs font-semibold text-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Subscribed successfully!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="relative">
                  <div className="flex items-center bg-white rounded-full p-1 pl-4 shadow-md">
                    <input
                      type="email"
                      required
                      placeholder="work-email@contractor.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full text-xs text-[#032356] placeholder-slate-400 focus:outline-none bg-transparent pr-2 font-medium"
                    />
                    <button
                      type="submit"
                      aria-label="Subscribe"
                      className="w-8 h-8 rounded-full bg-[#D4030C] hover:bg-[#B50209] text-white flex items-center justify-center shrink-0 transition-colors shadow-sm cursor-pointer"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Latest Engineering Insights */}
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                LATEST INSIGHTS
              </h4>
              <div className="space-y-4">
                {LATEST_INSIGHTS.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <Link
                      href={item.href}
                      className="text-xs font-semibold text-slate-200 hover:text-white transition-colors line-clamp-2 leading-snug block"
                    >
                      {item.title}
                    </Link>
                    <div className="flex items-center gap-2 text-[10px] text-slate-400 font-mono">
                      <span className="bg-white/10 border border-white/20 px-1.5 py-0.5 rounded font-bold tracking-wider text-slate-200">
                        {item.tag}
                      </span>
                      <span>&bull;</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 3. BOTTOM COMPLIANCE & LEGAL BAR                         */}
      {/* ======================================================== */}
      <div className="border-t border-slate-700/60 bg-[#021A40] py-5 text-xs text-slate-400">
        <div className="section-container-wide flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© 2026 Precast Engineers. All rights reserved. Empowering Precasters nationwide.</p>

          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>/</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <span>/</span>
            <Link href="/resources" className="hover:text-white transition-colors">
              Standard Specifications
            </Link>
            <span>/</span>
            <Link href="/about" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Floating Button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#D4030C] hover:bg-[#B50209] text-white shadow-xl border border-white/20 flex items-center justify-center transition-all group cursor-pointer"
      >
        <ChevronUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </footer>
  );
}
