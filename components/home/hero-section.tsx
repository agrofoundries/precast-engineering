"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Clock,
  CheckCircle2,
  Phone,
  FileText,
  Factory,
  Compass,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";

const TRUST_METRICS = [
  {
    icon: Factory,
    title: "Underground Infrastructure",
    subtitle: "Monolithic Septic & Utility Vaults",
  },
  {
    icon: Award,
    title: "Stormwater Systems",
    subtitle: "DOT Catch Basins, Inlets & Culverts",
  },
  {
    icon: ShieldCheck,
    title: "Heavy Civil & Bridges",
    subtitle: "Bridge Panels & Retaining Walls",
  },
  {
    icon: CheckCircle2,
    title: "Licensed PE Calculations",
    subtitle: "PE Stamped Calculations & Detailing",
  },
];

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Precast Engineers Flagship Hero"
      className="relative w-full bg-white overflow-hidden border-b border-[#DCE5F0] min-h-[calc(100vh-96px)] lg:h-[calc(100vh-96px)] lg:max-h-[calc(100vh-96px)] flex flex-col justify-between"
    >
      {/* 
        DAYLIGHT PRECAST BRIDGE & HEAVY CIVIL INFRASTRUCTURE BACKGROUND
      */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bridge.jpg"
          alt="Precast concrete highway bridge viaduct and civil infrastructure"
          fill
          priority
          className="object-cover object-center lg:object-right brightness-[1.02] contrast-[1.03]"
        />
        {/* Crisp White Daylight Wash Gradient: guarantees 100% crystal-clear text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-50% to-white/20 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent lg:hidden z-10 pointer-events-none" />
      </div>

      {/* Main Hero Content - Vertically centered */}
      <div className="relative z-20 section-container-wide flex-1 flex flex-col justify-center py-4 sm:py-6 lg:py-8">
        <div className="max-w-2xl xl:max-w-3xl">
          {/* Eyebrow Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F3FF] border border-[#DCE5F0] mb-3 sm:mb-4 shadow-xs animate-fade-down">
            <span className="w-2 h-2 rounded-full bg-[#D4030C] animate-pulse" />
            <span className="text-[11px] font-bold tracking-wider text-[#032356] uppercase font-mono">
              Precast Concrete
            </span>
            <span className="hidden sm:inline-block text-slate-300">|</span>
            <span className="hidden sm:inline-block text-[11px] font-extrabold text-[#D4030C] bg-white px-2 py-0.5 rounded border border-red-200 uppercase">
              Plant Manufacturing &amp; Structural Engineering
            </span>
          </div>

          {/* High-Impact Headline in Bold USA Navy & USA Red */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.08] uppercase mb-2.5 sm:mb-3 text-[#032356] animate-fade-up">
            Precast{" "}
            <span className="text-[#D4030C]">
              Manufacturing
            </span>
            <br />
            <span className="text-[#032356]">
              &amp; Structural Engineering
            </span>
          </h1>

          {/* Accent Line */}
          <div className="flex items-center gap-2 mb-3 animate-fade-up [animation-delay:150ms]">
            <span className="w-7 h-1 bg-[#D4030C] rounded-full" />
            <span className="text-xs sm:text-[13px] font-extrabold tracking-wide text-[#032356] uppercase">
              Engineered Infrastructure · Built Smarter, Faster &amp; Stronger
            </span>
          </div>

          {/* Clear Supporting Description in Simple English */}
          <p className="text-xs sm:text-sm lg:text-base text-[#1E293B] leading-relaxed font-medium max-w-2xl mb-4 sm:mb-6 animate-fade-up [animation-delay:220ms]">
            We engineer and manufacture certified precast concrete solutions for roads, bridges, and underground utilities. From licensed PE calculations and precision shop detailing to high-capacity plant casting—we help you build infrastructure designed to endure for generations.
          </p>

          {/* Action CTAs in Simple Words */}
          <div className="flex flex-wrap items-center gap-3 animate-fade-up [animation-delay:300ms]">
            {/* Primary Button */}
            <Link
              href="/#products"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#D4030C] hover:bg-[#B50209] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-red-600/25 transition-all duration-200 transform hover:-translate-y-0.5 group cursor-pointer active:scale-95"
            >
              <Factory className="w-4 h-4" />
              <span>Browse Products</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Secondary Button */}
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#032356] hover:bg-[#02173B] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-md transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer active:scale-95"
            >
              <Compass className="w-4 h-4 text-[#D4030C]" />
              <span>Engineering Services</span>
              <ArrowRight className="w-4 h-4 text-[#D4030C]" />
            </Link>

            {/* Direct Quote Link */}
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#032356] hover:text-[#D4030C] px-2 py-1.5 rounded-md transition-colors"
            >
              <div className="w-6 h-6 rounded-full bg-[#FFF2F2] border border-red-200 flex items-center justify-center text-[#D4030C]">
                <Clock className="w-3 h-3" />
              </div>
              <span>
                Need a quote? <strong className="text-[#032356] font-mono">Send Project Details</strong>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* 
        Bottom Trust Strip:
        Clean white surface neatly docked at the bottom inside the 100vh viewport
      */}
      <div className="relative z-20 bg-white/95 backdrop-blur-md border-t border-[#DCE5F0] shadow-xs">
        <div className="section-container-wide py-3 sm:py-3.5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
            {TRUST_METRICS.map((metric, idx) => {
              const Icon = metric.icon;
              return (
                <div
                  key={idx}
                  className={`flex items-center gap-3 ${
                    idx > 0 ? "pt-2 sm:pt-0 sm:pl-4" : ""
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-[#E8F3FF] border border-[#DCE5F0] flex items-center justify-center shrink-0 text-[#032356]">
                    <Icon className="w-4 h-4 text-[#D4030C]" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#032356] leading-tight">
                      {metric.title}
                    </h3>
                    <p className="text-[10.5px] text-[#64748B] leading-tight mt-0.5 font-medium">
                      {metric.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
