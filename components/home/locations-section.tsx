"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Building2,
  Phone,
  Clock,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

interface LocationItem {
  id: string;
  region: string;
  country: string;
  role: string;
  address: string;
  phone: string;
  phoneRaw: string;
  timezone: string;
  image: string;
  mapQuery: string;
  capabilities: string[];
}

const LOCATIONS: LocationItem[] = [
  {
    id: "northeast",
    region: "Northeast",
    country: "United States",
    role: "HEADQUARTERS",
    address: "105 Maxess Road, Melville, NY 11747, United States",
    phone: "(631) 458-1111",
    phoneRaw: "6314581111",
    timezone: "ET · UTC−5",
    image: "/images/northeast-office.jpg",
    mapQuery: "105 Maxess Road, Melville, NY 11747",
    capabilities: [
      "Executive management",
      "Global sales",
      "Project planning",
      "Financial operations",
    ],
  },
  {
    id: "south",
    region: "South",
    country: "United States",
    role: "REGIONAL OFFICE",
    address: "3340 Peachtree Road NE, Atlanta, GA 30326, United States",
    phone: "(404) 596-8800",
    phoneRaw: "4045968800",
    timezone: "ET · UTC−5",
    image: "/images/default_geocode-2x.svg",
    mapQuery: "3340 Peachtree Road NE, Atlanta, GA 30326",
    capabilities: [
      "Civil drainage",
      "DOT submittals",
      "Project planning",
      "Quote desk",
    ],
  },
  {
    id: "midwest",
    region: "Midwest",
    country: "United States",
    role: "ENGINEERING CENTER",
    address: "111 S Wacker Drive, Chicago, IL 60606, United States",
    phone: "(312) 870-6500",
    phoneRaw: "3128706500",
    timezone: "CT · UTC−6",
    image: "/images/default_geocode-2x.svg",
    mapQuery: "111 S Wacker Drive, Chicago, IL 60606",
    capabilities: [
      "Tekla 3D Structural Modeling",
      "Structural detailing",
      "Connection design",
      "Rebar schedules",
    ],
  },
  {
    id: "westcoast",
    region: "West Coast",
    country: "Canada",
    role: "ENGINEERING CENTER",
    address: "1055 W Georgia St, Vancouver, BC V6E 3P3, Canada",
    phone: "(604) 687-3200",
    phoneRaw: "6046873200",
    timezone: "PT · UTC−8",
    image: "/images/default_geocode-2x.svg",
    mapQuery: "1055 W Georgia St, Vancouver, BC V6E 3P3",
    capabilities: [
      "Seismic analysis",
      "Precast bridges",
      "Standards & approvals",
      "Shop drawings",
    ],
  },
  {
    id: "canada-east",
    region: "Canada — East",
    country: "Canada",
    role: "REGIONAL OFFICE",
    address: "100 King St W, Toronto, ON M5X 1A9, Canada",
    phone: "(416) 865-4000",
    phoneRaw: "4168654000",
    timezone: "ET · UTC−5",
    image: "/images/default_geocode-2x.svg",
    mapQuery: "100 King St W, Toronto, ON M5X 1A9",
    capabilities: [
      "Municipal drainage",
      "Precast infiltration",
      "Takeoff desk",
      "Client liaison",
    ],
  },
  {
    id: "canada-west",
    region: "Canada — West",
    country: "Canada",
    role: "REGIONAL OFFICE",
    address: "400 3 Ave SW, Calgary, AB T2P 4H2, Canada",
    phone: "(403) 266-5100",
    phoneRaw: "4032665100",
    timezone: "MT · UTC−7",
    image: "/images/default_geocode-2x.svg",
    mapQuery: "400 3 Ave SW, Calgary, AB T2P 4H2",
    capabilities: [
      "Cold climate detailing",
      "Foundations",
      "Rigging plans",
      "Piece tickets",
    ],
  },
  {
    id: "caribbean",
    region: "Caribbean / Latin America",
    country: "Bahamas",
    role: "SUPPORT HUB",
    address: "Bay Street Financial Center, Nassau, Bahamas",
    phone: "(242) 322-8000",
    phoneRaw: "2423228000",
    timezone: "ET · UTC−5",
    image: "/images/default_geocode-2x.svg",
    mapQuery: "Bay Street, Nassau, Bahamas",
    capabilities: [
      "Coastal infrastructure",
      "Marine precast",
      "Stormwater drainage",
      "Technical support",
    ],
  },
];

export function LocationsSection() {
  const [activeId, setActiveId] = useState<string>("northeast");

  const activeLoc =
    LOCATIONS.find((loc) => loc.id === activeId) || LOCATIONS[0];

  return (
    <section
      id="locations"
      className="relative w-full min-h-screen lg:h-screen lg:max-h-screen bg-[#032356] text-white py-5 sm:py-6 lg:py-6 flex flex-col justify-center border-b border-[#032356] overflow-hidden"
    >
      <div className="section-container-wide w-full flex flex-col justify-center max-w-7xl">
        {/* Header with Red Accent and Clean Text */}
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-1.5 sm:gap-2 text-center mb-4 lg:mb-5">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-7 bg-[#D4030C]" aria-hidden="true" />
            <p className="text-[11px] font-black uppercase tracking-widest text-[#D4030C]">
              STRATEGIC FOOTPRINT
            </p>
            <span className="h-0.5 w-7 bg-[#D4030C]" aria-hidden="true" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white uppercase">
            Seven offices, <span className="text-[#D4030C]">one delivery standard</span>
          </h2>

          <p className="max-w-2xl text-xs sm:text-sm leading-relaxed text-slate-300 font-medium">
            Regional manufacturing nodes, engineering design hubs, and strategic dispatch centers supporting civil infrastructure across North America.
          </p>
        </div>

        {/* Main Card Container in Rich #032356 Navy Blue */}
        <div className="bg-[#02173B] rounded-3xl border border-[#0B3A82]/50 shadow-2xl p-4 sm:p-5 lg:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
            {/* Left Column: 7 Office Buttons (Compact, fits all 7 within 100vh) */}
            <div className="lg:col-span-5 flex flex-col gap-2 justify-between">
              {LOCATIONS.map((loc) => {
                const isSelected = loc.id === activeId;

                return (
                  <button
                    key={loc.id}
                    type="button"
                    onClick={() => setActiveId(loc.id)}
                    className={`group relative flex w-full items-center justify-between gap-3 rounded-xl border px-3.5 py-2.5 text-left transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "border-[#D4030C] bg-[#052C69] shadow-md shadow-red-950/30"
                        : "border-[#0B3A82]/40 bg-[#032356] hover:border-[#0A4BB3] hover:bg-[#073070]"
                    }`}
                  >
                    {/* Active Left Indicator Pill */}
                    {isSelected && (
                      <span
                        className="absolute inset-y-2 left-0 w-1 rounded-r-full bg-[#D4030C]"
                        aria-hidden="true"
                      />
                    )}

                    {/* Left Icon + Title + Badge */}
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                          isSelected
                            ? "bg-[#D4030C] text-white shadow-xs"
                            : "bg-[#0B3A82] text-slate-200"
                        }`}
                      >
                        <MapPin className="w-3.5 h-3.5" />
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-xs sm:text-[13px] font-bold tracking-tight truncate ${
                              isSelected ? "text-white" : "text-slate-200"
                            }`}
                          >
                            {loc.region}
                          </span>

                          <span
                            className={`px-1.5 py-0.5 rounded text-[9px] font-black uppercase tracking-wider shrink-0 ${
                              isSelected
                                ? "bg-[#D4030C] text-white"
                                : "bg-[#0B3A82] text-slate-200"
                            }`}
                          >
                            {loc.role}
                          </span>
                        </div>

                        <div className="text-[11px] text-slate-300 font-medium leading-tight">
                          {loc.country}
                        </div>
                      </div>
                    </div>

                    {/* Right Diagonal Arrow */}
                    <ArrowUpRight
                      className={`w-4 h-4 shrink-0 transition-transform ${
                        isSelected
                          ? "text-[#D4030C] translate-x-0.5 -translate-y-0.5"
                          : "text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Column: Active Office Detail & Dual Media Cards */}
            <div className="lg:col-span-7 bg-[#04204D] rounded-2xl border border-[#0B3A82]/50 p-5 sm:p-6 flex flex-col justify-between">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
                {/* Details Column */}
                <div className="md:col-span-6 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#D4030C]">
                      {activeLoc.role}
                    </span>

                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight mt-0.5">
                      {activeLoc.region}
                    </h3>

                    <p className="text-xs font-semibold text-slate-300">
                      {activeLoc.country}
                    </p>
                  </div>

                  {/* Contact Info Rows with Red Accent Icons */}
                  <div className="space-y-2.5 text-xs">
                    <div className="flex items-start gap-2.5 text-slate-200">
                      <div className="w-5 h-5 rounded bg-[#D4030C] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Building2 className="w-3 h-3" />
                      </div>
                      <span className="leading-snug font-medium">
                        {activeLoc.address}
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5 text-slate-200">
                      <div className="w-5 h-5 rounded bg-[#D4030C] text-white flex items-center justify-center shrink-0">
                        <Phone className="w-3 h-3" />
                      </div>
                      <a
                        href={`tel:${activeLoc.phoneRaw}`}
                        className="font-bold text-white hover:text-[#D4030C] transition-colors"
                      >
                        {activeLoc.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-2.5 text-slate-200">
                      <div className="w-5 h-5 rounded bg-[#D4030C] text-white flex items-center justify-center shrink-0">
                        <Clock className="w-3 h-3" />
                      </div>
                      <span className="font-mono text-[11px] text-slate-300">
                        {activeLoc.timezone}
                      </span>
                    </div>
                  </div>

                  {/* Capabilities On Site */}
                  <div className="pt-2 border-t border-[#0B3A82]/50">
                    <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-300 mb-2">
                      Capabilities on site
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {activeLoc.capabilities.map((cap, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-[#032356] border border-[#0B3A82]/60 text-slate-200 hover:border-[#D4030C] transition-colors"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Media Cards Column (Image + Map) */}
                <div className="md:col-span-6 flex flex-col gap-3">
                  {/* Office Graphic / Photo Card */}
                  <div className="relative h-28 sm:h-32 w-full rounded-xl overflow-hidden border border-[#0B3A82]/60 bg-[#032356] shadow-xs">
                    <Image
                      src={activeLoc.image}
                      alt={`${activeLoc.region} office at ${activeLoc.address}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 300px"
                      className="object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#02173B]/95 to-transparent p-2">
                      <div className="flex items-center gap-1.5 text-white text-[10px] font-bold">
                        <Building2 className="w-3 h-3 text-[#D4030C]" />
                        <span>{activeLoc.region} office</span>
                      </div>
                    </div>
                  </div>

                  {/* Embedded Google Map Preview */}
                  <div className="relative h-28 sm:h-32 w-full rounded-xl overflow-hidden border border-[#0B3A82]/60 bg-[#032356] shadow-xs">
                    <iframe
                      src={`https://www.google.com/maps?q=${encodeURIComponent(
                        activeLoc.mapQuery
                      )}&z=14&output=embed`}
                      title={`Map showing ${activeLoc.region} office`}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0 h-full w-full border-0"
                    />
                    <div className="absolute top-2 left-2 bg-[#032356]/90 backdrop-blur-xs px-2 py-0.5 rounded text-[10px] font-bold text-white border border-[#0B3A82] shadow-xs flex items-center gap-1">
                      <span>Maps</span>
                      <ExternalLink className="w-2.5 h-2.5 text-[#D4030C]" />
                    </div>
                  </div>

                  {/* Open Google Map Link */}
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      activeLoc.mapQuery
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-wider text-white hover:text-[#D4030C] transition-colors self-start"
                  >
                    <span>OPEN GOOGLE MAP</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#D4030C]" />
                  </a>
                </div>
              </div>

              {/* Bottom Metrics Bar */}
              <div className="grid grid-cols-3 gap-2 pt-3 mt-3 border-t border-[#0B3A82]/50 text-center">
                <div>
                  <div className="text-base sm:text-lg font-black text-white leading-tight">
                    Direct
                  </div>
                  <div className="text-[9px] uppercase font-bold text-slate-400">
                    Project Support
                  </div>
                </div>
                <div className="border-x border-slate-800">
                  <div className="text-base sm:text-lg font-black text-[#D4030C] leading-tight">
                    Licensed PE
                  </div>
                  <div className="text-[9px] uppercase font-bold text-slate-400">
                    Design &amp; Review
                  </div>
                </div>
                <div>
                  <div className="text-base sm:text-lg font-black text-white leading-tight">
                    North America
                  </div>
                  <div className="text-[9px] uppercase font-bold text-slate-400">
                    Plant &amp; Site Dispatch
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
