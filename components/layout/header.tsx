"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  ArrowRight,
  Factory,
  Compass,
  Building2,
  ShieldCheck,
  MapPin,
  Download,
  Clock,
  Layers,
  Briefcase,
  FileText,
  CheckCircle2,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";

// ─── Top Utility Strip Marquee Items ──────────────────────────────────────────
const MARQUEE_ITEMS = [
  "Direct Precast Concrete Manufacturing Plant",
  "Licensed PE & SE Structural Calculations Available",
  "Climate-Controlled Plant Casting Beds",
  "In-House Tekla LOD 400 Structural Detailing Hub",
  "AASHTO Bridge & State DOT Submittals Approved",
  "High-Volume Box Culverts, Basins & Utility Vaults",
];

// ─── Clean 3-Category Product Matrix (Exact Match with astro-pro Standard) ───
const PRODUCT_CATEGORIES = [
  {
    category: "Bridges & Culverts",
    items: [
      { name: "Box Culverts (ASTM C1577)", href: "/products#infrastructure" },
      { name: "Precast Bridge Panels", href: "/products#infrastructure" },
      { name: "Wingwalls & Headwalls", href: "/products#infrastructure" },
      { name: "Soil Retaining Wall Panels", href: "/products#infrastructure" },
    ],
  },
  {
    category: "Drainage & Stormwater",
    items: [
      { name: "Road Catch Basins (ASTM C478)", href: "/products#utility" },
      { name: "Curb Inlets & Catchpits", href: "/products#utility" },
      { name: "Leaching Galleys & Infiltration", href: "/products#utility" },
      { name: "Heavy Trench Drains", href: "/products#utility" },
    ],
  },
  {
    category: "Tanks & Utilities",
    items: [
      { name: "Monolithic Septic Tanks (ASTM C1227)", href: "/products#tanks" },
      { name: "Underground Utility Vaults", href: "/products#utility" },
      { name: "Commercial Grease Interceptors", href: "/products#tanks" },
      { name: "Pump Stations & Wet Wells", href: "/products#tanks" },
    ],
  },
];

// ─── Company Pages for Mobile Navigation ──────────────────────────────────────
const COMPANY_PAGES = [
  {
    title: "About Precast Engineers",
    href: "/about",
    desc: "National precast engineering heritage & technical expertise",
    icon: Building2,
  },
  {
    title: "Plant & Casting Facilities",
    href: "/capabilities",
    desc: "Climate-controlled casting yards & automated batching",
    icon: Factory,
  },
  {
    title: "Structural Engineering & Detailing",
    href: "/#engineering",
    desc: "Licensed PE stamped calculations & Tekla LOD 400",
    icon: Compass,
  },
  {
    title: "Quality Control & Testing Lab",
    href: "/#quality",
    desc: "In-house cylinder breaks & ASTM C1577 testing",
    icon: ShieldCheck,
  },
  {
    title: "Seven Regional Offices",
    href: "/#locations",
    desc: "Strategic nodes serving contractors nationwide",
    icon: MapPin,
  },
  {
    title: "Featured Civil Projects",
    href: "/projects",
    desc: "Heavy DOT highway corridors & municipal case studies",
    icon: Briefcase,
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<"company" | "products" | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = (menu: "company" | "products") => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/98 backdrop-blur-md shadow-md border-b border-[#CBD5E1]"
          : "bg-white border-b border-[#DCE5F0] shadow-xs"
      }`}
    >
      {/* ======================================================== */}
      {/* 1. PROFESSIONAL INDUSTRIAL TOP UTILITY STRIP             */}
      {/* ======================================================== */}
      <div className="bg-[#032356] text-white text-xs border-b border-white/10 hidden md:block">
        <div className="section-container-wide flex items-center justify-between h-9 px-4 sm:px-6 lg:px-8">
          {/* Left Plant Coordinates & Direct Phone */}
          <div className="flex items-center gap-6 text-[11.5px] font-medium text-slate-200">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#D4030C]" />
              <span>Plant Dispatch &amp; Engineering Center</span>
            </div>
            <span className="h-3 w-px bg-white/20" />
            <a
              href={`tel:${COMPANY.phone.replace(/[^0-9]/g, "")}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors font-mono font-bold"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4030C]" />
              <span>(800) PRECAST</span>
            </a>
            <span className="h-3 w-px bg-white/20 hidden lg:inline" />
            <a
              href={`mailto:${COMPANY.email}`}
              className="hidden lg:flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#D4030C]" />
              <span>{COMPANY.email}</span>
            </a>
          </div>

          {/* Right Standards & Hours */}
          <div className="flex items-center gap-5 text-[11px] font-medium text-slate-300">
            <span className="hidden xl:inline text-sky-200 font-mono">
              AASHTO HS-20 &amp; HS-25 &bull; ASTM C1577 &bull; State DOT Certified
            </span>
            <span className="h-3 w-px bg-white/20 hidden xl:inline" />
            <div className="flex items-center gap-1.5 text-slate-200">
              <Clock className="w-3 h-3 text-[#D4030C]" />
              <span>Mon&ndash;Fri 7:00 AM &ndash; 5:00 PM CST</span>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. MAIN NAVIGATION BAR (CLEAN, NEAT, PROFESSIONAL)       */}
      {/* ======================================================== */}
      <div className="section-container-wide px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-200 ${
            scrolled ? "h-16 lg:h-18" : "h-18 lg:h-20"
          } gap-6`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center shrink-0 group focus:outline-none py-1"
            aria-label="Precast Engineers Homepage"
          >
            <div className="relative h-12 sm:h-13 lg:h-14 w-48 sm:w-56 lg:w-60 shrink-0 transition-transform duration-200 group-hover:scale-102">
              <Image
                src="/logo.png"
                alt="Precast Engineers - Empowering Precasters"
                fill
                priority
                className="object-contain object-left"
                sizes="(max-width: 640px) 190px, 240px"
              />
            </div>
          </Link>

          {/* Desktop Nav Items (Clean 15px Industrial Typography) */}
          <nav
            className="hidden lg:flex items-center gap-6 xl:gap-8 h-full"
            aria-label="Primary navigation"
          >
            {/* 1. Home */}
            <Link
              href="/"
              className="text-[14.5px] xl:text-[15.5px] font-bold text-[#032356] hover:text-[#D4030C] transition-colors whitespace-nowrap tracking-tight"
            >
              Home
            </Link>

            {/* 2. Company Dropdown (Trigger) */}
            <div
              className="h-full flex items-center"
              onMouseEnter={() => handleMouseEnter("company")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setActiveMenu(activeMenu === "company" ? null : "company")}
                className={`flex items-center gap-1 text-[14.5px] xl:text-[15.5px] font-bold transition-colors whitespace-nowrap tracking-tight cursor-pointer ${
                  activeMenu === "company"
                    ? "text-[#D4030C]"
                    : "text-[#032356] hover:text-[#D4030C]"
                }`}
              >
                <span>Company</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeMenu === "company"
                      ? "rotate-180 text-[#D4030C]"
                      : "text-slate-400 group-hover:text-[#D4030C]"
                  }`}
                />
              </button>
            </div>

            {/* 3. Products Mega Menu (Trigger) */}
            <div
              className="h-full flex items-center"
              onMouseEnter={() => handleMouseEnter("products")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setActiveMenu(activeMenu === "products" ? null : "products")}
                className={`flex items-center gap-1 text-[14.5px] xl:text-[15.5px] font-bold transition-colors whitespace-nowrap tracking-tight cursor-pointer ${
                  activeMenu === "products"
                    ? "text-[#D4030C]"
                    : "text-[#032356] hover:text-[#D4030C]"
                }`}
              >
                <span>Products</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeMenu === "products"
                      ? "rotate-180 text-[#D4030C]"
                      : "text-slate-400 group-hover:text-[#D4030C]"
                  }`}
                />
              </button>
            </div>

            {/* 4. Structural Engineering */}
            <Link
              href="/#services"
              className="text-[14.5px] xl:text-[15.5px] font-bold text-[#032356] hover:text-[#D4030C] transition-colors whitespace-nowrap tracking-tight"
            >
              Engineering
            </Link>

            {/* 5. Projects */}
            <Link
              href="/projects"
              className="text-[14.5px] xl:text-[15.5px] font-bold text-[#032356] hover:text-[#D4030C] transition-colors whitespace-nowrap tracking-tight"
            >
              Projects
            </Link>

            {/* 6. Technical Blog */}
            <Link
              href="/#blog"
              className="text-[14.5px] xl:text-[15.5px] font-bold text-[#032356] hover:text-[#D4030C] transition-colors whitespace-nowrap tracking-tight"
            >
              Blogs
            </Link>

            {/* 7. Contact */}
            <Link
              href="/#contact"
              className="text-[14.5px] xl:text-[15.5px] font-bold text-[#032356] hover:text-[#D4030C] transition-colors whitespace-nowrap tracking-tight"
            >
              Contact
            </Link>
          </nav>

          {/* Right Action CTAs (Neat, Crisp Industrial Buttons) */}
          <div className="flex items-center gap-3">
            {/* Secondary: Technical Specifications PDF */}
            <Link
              href="/resources"
              className="hidden sm:inline-flex items-center justify-center rounded-lg font-bold tracking-tight transition-all duration-200 border border-[#032356] text-[#032356] hover:bg-[#032356] hover:text-white h-9.5 px-3.5 text-xs gap-1.5 whitespace-nowrap shadow-2xs active:scale-95"
            >
              <Download className="w-3.5 h-3.5 text-[#D4030C]" />
              <span>Specs (PDF)</span>
            </Link>

            {/* Primary: Request a Quote */}
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-lg font-bold tracking-tight transition-all duration-200 bg-[#D4030C] hover:bg-[#B50209] text-white h-9.5 px-4 sm:px-5 text-xs gap-1.5 whitespace-nowrap shadow-sm active:scale-95"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#032356] hover:bg-[#F2F7FF] border border-[#DCE5F0] rounded-lg cursor-pointer ml-1"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 3. FULL-WIDTH PRODUCTS MEGA MENU (100% VIEWPORT WIDTH)   */}
      {/* Exact architectural pattern from astro-second-eight      */}
      {/* ======================================================== */}
      {activeMenu === "products" && (
        <div
          className="hidden lg:block absolute top-full left-0 right-0 w-full bg-white border-t border-b-2 border-[#CBD5E1] shadow-2xl z-50 animate-in fade-in slide-in-from-top-1 duration-150"
          onMouseEnter={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
          }}
          onMouseLeave={handleMouseLeave}
        >
          <div className="section-container-wide py-7 px-4 sm:px-6 lg:px-8">
            {/* Top Specification Header */}
            <div className="flex items-center justify-between pb-3 mb-5 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#D4030C] animate-pulse" />
                <span className="text-xs font-bold text-[#032356] uppercase tracking-wider font-mono">
                  Precast Engineers 2026 Product Catalog
                </span>
                <span className="text-[11px] text-slate-500 font-mono">
                  &bull; 5,000+ PSI &bull; AASHTO HS-20 / HS-25 Traffic Rated &bull; State DOT Certified
                </span>
              </div>
              <Link
                href="/products"
                onClick={() => setActiveMenu(null)}
                className="text-xs font-bold text-[#D4030C] hover:text-[#B50209] flex items-center gap-1.5 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Explore Full Civil Catalog &amp; CAD Specs</span>
              </Link>
            </div>

            {/* 4 Clean Columns: 3 Categories + 1 Spotlight Card */}
            <div className="grid grid-cols-12 gap-6 items-stretch">
              {PRODUCT_CATEGORIES.map((col, idx) => (
                <div
                  key={idx}
                  className="col-span-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4 flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="pb-2 border-b border-slate-200">
                      <h4 className="text-xs font-black tracking-wider text-[#032356] uppercase font-mono">
                        {col.category}
                      </h4>
                    </div>

                    <ul className="space-y-1">
                      {col.items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <Link
                            href={item.href}
                            onClick={() => setActiveMenu(null)}
                            className="group/item flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-white hover:shadow-2xs transition-all text-[#032356] hover:text-[#D4030C]"
                          >
                            <span className="text-[13px] font-semibold leading-snug">
                              {item.name}
                            </span>
                            <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-[#D4030C] shrink-0" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2.5 border-t border-slate-200 mt-2 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>Stock &amp; Custom Sizes</span>
                    <Link
                      href="/products"
                      onClick={() => setActiveMenu(null)}
                      className="text-[#D4030C] font-bold hover:underline"
                    >
                      View Specs &rarr;
                    </Link>
                  </div>
                </div>
              ))}

              {/* Clean Plant Spotlight Card in Authoritative USA Navy */}
              <div className="col-span-3 bg-[#032356] text-white rounded-xl p-4 flex flex-col justify-between shadow-lg">
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-200">
                      Plant Tooling &amp; Casting
                    </span>
                    <span className="text-[10px] font-mono text-slate-300">
                      USA Operations
                    </span>
                  </div>

                  <div className="relative rounded-lg overflow-hidden aspect-[16/9] mb-3 bg-slate-900 border border-white/10">
                    <video
                      src="/videos/solid-round-slab-gang-mold.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <h5 className="text-xs font-bold uppercase tracking-tight text-white mb-1">
                    Automated Casting Beds &amp; Tooling
                  </h5>
                  <p className="text-[11px] text-slate-300 leading-relaxed font-normal">
                    Precision multi-cavity gang molds and heated beds engineered for rapid, high-volume civil infrastructure.
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2 mt-2">
                  <a
                    href="tel:8007732278"
                    className="text-xs font-mono font-bold text-sky-300 hover:text-white transition-colors"
                  >
                    (800) PRECAST
                  </a>
                  <Link
                    href="/products"
                    onClick={() => setActiveMenu(null)}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded bg-[#D4030C] hover:bg-[#B50209] text-white text-[11px] font-bold uppercase tracking-wider transition-all"
                  >
                    <span>View All</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 4. FULL-WIDTH COMPANY MEGA MENU (100% VIEWPORT WIDTH)    */}
      {/* Exact architectural pattern from astro-second-eight      */}
      {/* ======================================================== */}
      {activeMenu === "company" && (
        <div
          className="hidden lg:block absolute top-full left-0 right-0 w-full bg-white border-t border-b-2 border-[#CBD5E1] shadow-2xl z-50 animate-in fade-in slide-in-from-top-1 duration-150"
          onMouseEnter={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
          }}
          onMouseLeave={handleMouseLeave}
        >
          <div className="section-container-wide py-7 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between pb-3 mb-5 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#D4030C] animate-pulse" />
                <span className="text-xs font-bold text-[#032356] uppercase tracking-wider font-mono">
                  Company &amp; Facilities Overview
                </span>
                <span className="text-[11px] text-slate-500 font-mono">
                  &bull; Precast Concrete Manufacturing &bull; Licensed Structural PE
                </span>
              </div>
              <span className="text-xs font-mono text-slate-500">
                Precast Engineers
              </span>
            </div>

            <div className="grid grid-cols-12 gap-6 items-stretch">
              {/* Col 1: Who We Are */}
              <div className="col-span-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-[#032356]">
                    <Building2 className="w-4 h-4 text-[#D4030C]" />
                    <h4 className="text-xs font-black uppercase tracking-wider font-mono">Who We Are</h4>
                  </div>
                  <h3 className="text-sm font-bold text-[#032356] uppercase tracking-tight mb-1.5">
                    Precast Engineers
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal mb-3">
                    Bridging architectural design and high-volume plant production with practical engineering solutions for civil infrastructure.
                  </p>
                </div>
                <div className="space-y-1 pt-2 border-t border-slate-200 text-xs">
                  <Link
                    href="/about"
                    onClick={() => setActiveMenu(null)}
                    className="block font-bold text-[#032356] hover:text-[#D4030C] py-0.5"
                  >
                    &rarr; Full Company Story
                  </Link>
                  <Link
                    href="/#story"
                    onClick={() => setActiveMenu(null)}
                    className="block font-bold text-[#032356] hover:text-[#D4030C] py-0.5"
                  >
                    &rarr; The Precast Story
                  </Link>
                </div>
              </div>

              {/* Col 2: Facilities */}
              <div className="col-span-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-[#032356]">
                    <Factory className="w-4 h-4 text-[#D4030C]" />
                    <h4 className="text-xs font-black uppercase tracking-wider font-mono">Plant Facilities</h4>
                  </div>
                  <h3 className="text-sm font-bold text-[#032356] uppercase tracking-tight mb-1.5">
                    Enclosed Casting Yards
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal mb-3">
                    Computerized twin-shaft planetary batching, heated casting beds up to 600 feet, and heavy overhead bridge cranes.
                  </p>
                </div>
                <div className="space-y-1 pt-2 border-t border-slate-200 text-xs">
                  <Link
                    href="/capabilities"
                    onClick={() => setActiveMenu(null)}
                    className="block font-bold text-[#032356] hover:text-[#D4030C] py-0.5"
                  >
                    &rarr; Production Capabilities
                  </Link>
                  <Link
                    href="/#locations"
                    onClick={() => setActiveMenu(null)}
                    className="block font-bold text-[#032356] hover:text-[#D4030C] py-0.5"
                  >
                    &rarr; Seven Regional Offices
                  </Link>
                </div>
              </div>

              {/* Col 3: Engineering */}
              <div className="col-span-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-[#032356]">
                    <Compass className="w-4 h-4 text-[#D4030C]" />
                    <h4 className="text-xs font-black uppercase tracking-wider font-mono">Engineering &amp; Detailing</h4>
                  </div>
                  <h3 className="text-sm font-bold text-[#032356] uppercase tracking-tight mb-1.5">
                    Licensed PE Stamped
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal mb-3">
                    Licensed PE/SE calculations, Tekla LOD 400 fabrication modeling, and in-house laboratory break testing.
                  </p>
                </div>
                <div className="space-y-1 pt-2 border-t border-slate-200 text-xs">
                  <Link
                    href="/#services"
                    onClick={() => setActiveMenu(null)}
                    className="block font-bold text-[#032356] hover:text-[#D4030C] py-0.5"
                  >
                    &rarr; 8 Engineering Disciplines
                  </Link>
                  <Link
                    href="/projects"
                    onClick={() => setActiveMenu(null)}
                    className="block font-bold text-[#032356] hover:text-[#D4030C] py-0.5"
                  >
                    &rarr; Featured Projects Portfolio
                  </Link>
                </div>
              </div>

              {/* Col 4: Estimating Desk in USA Navy */}
              <div className="col-span-3 bg-[#032356] text-white rounded-xl p-4 flex flex-col justify-between shadow-lg">
                <div>
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-200 mb-2">
                    Direct Estimating Desk
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-tight mb-1.5 text-white">
                    Need Plans Stamped or Quoted?
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal mb-3">
                    Send your project plans and takeoffs directly to our precast engineering desk for fast turnaround.
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-white/10">
                  <a
                    href="tel:8007732278"
                    className="flex items-center gap-1.5 text-xs font-mono font-bold text-sky-300 hover:text-white transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#D4030C]" />
                    <span>(800) PRECAST</span>
                  </a>
                  <Link
                    href="/#contact"
                    onClick={() => setActiveMenu(null)}
                    className="inline-flex items-center justify-center w-full px-4 py-2 rounded bg-[#D4030C] hover:bg-[#B50209] text-white text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    <span>Request a Quote &rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 5. MOBILE DRAWER WITH ALL PAGES & ACCORDIONS             */}
      {/* ======================================================== */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#DCE5F0] shadow-xl px-4 py-4 space-y-3 max-h-[85vh] overflow-y-auto animate-in fade-in duration-200">
          {/* Home */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-bold text-[#032356] hover:text-[#D4030C] border-b border-slate-100"
          >
            Home
          </Link>

          {/* Company Mobile Submenu */}
          <div className="border-b border-slate-100 pb-2">
            <span className="text-[11px] font-black tracking-wider text-[#D4030C] uppercase font-mono block mb-1">
              Company
            </span>
            <div className="space-y-1 pl-2">
              {COMPANY_PAGES.map((page, idx) => (
                <Link
                  key={idx}
                  href={page.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 text-xs font-semibold text-[#032356] hover:text-[#D4030C]"
                >
                  {page.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Products Mobile Submenu */}
          <div className="border-b border-slate-100 pb-2">
            <span className="text-[11px] font-black tracking-wider text-[#D4030C] uppercase font-mono block mb-1">
              Products
            </span>
            <div className="space-y-1 pl-2">
              <Link
                href="/products"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-xs font-bold text-[#D4030C]"
              >
                ★ View All Products
              </Link>
              {PRODUCT_CATEGORIES.flatMap((c) => c.items).map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 text-xs font-semibold text-[#032356] hover:text-[#D4030C]"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Engineering */}
          <Link
            href="/#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-bold text-[#032356] hover:text-[#D4030C] border-b border-slate-100"
          >
            Engineering
          </Link>

          {/* Projects */}
          <Link
            href="/projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-bold text-[#032356] hover:text-[#D4030C] border-b border-slate-100"
          >
            Projects
          </Link>

          {/* Blogs */}
          <Link
            href="/#blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-bold text-[#032356] hover:text-[#D4030C] border-b border-slate-100"
          >
            Blogs
          </Link>

          {/* Contact Us */}
          <Link
            href="/#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-bold text-[#032356] hover:text-[#D4030C] border-b border-slate-100"
          >
            Contact Us
          </Link>

          {/* CTA */}
          <div className="pt-2">
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-red w-full text-center text-xs py-3 rounded-full flex items-center justify-center gap-2"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
