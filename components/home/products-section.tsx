"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  X,
  SlidersHorizontal,
  Heart,
  ChevronDown,
  Download,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

// ─── DATA INTERFACES ──────────────────────────────────────────────────────────

export interface ProductSizeOption {
  name: string;
  sku: string;
  dimensions: string;
  capacity?: string;
  standard: string;
  loadRating: string;
  image?: string;
  drawingPdf?: string;
}

export interface ECommerceProduct {
  id: string;
  skuPrefix: string;
  name: string;
  category: "drainage" | "tanks" | "heavy" | "tooling";
  categoryLabel: string;
  badge: string;
  defaultLoad: string;
  defaultImage: string;
  description: string;
  standardsBadge: string;
  sizes: ProductSizeOption[];
}

// ─── UNIFIED E-COMMERCE PRODUCTS CATALOG ─────────────────────────────────────

export const ECOMMERCE_PRODUCTS: ECommerceProduct[] = [
  // 1. CATCH BASIN SYSTEM
  {
    id: "catch-basins",
    skuPrefix: "PE-CB",
    name: "Precast Catch Basin System",
    category: "drainage",
    categoryLabel: "Catch Basins",
    badge: "ROAD & DRAINAGE",
    defaultLoad: "AASHTO HS-20",
    defaultImage: "/images/products/catch-basin-system.png",
    description:
      "Heavy-duty monolithic precast stormwater catch basins with reinforced structural walls, pre-cast knockouts, and AASHTO HS-20 traffic certification.",
    standardsBadge: "ASTM C478 Municipal Standard",
    sizes: [
      {
        name: '18" Diameter Round',
        sku: "PE-CB-18",
        dimensions: '18" ID × 36" Depth',
        standard: "ASTM C478 / AASHTO HS-20",
        loadRating: "AASHTO HS-20",
        image: "/images/products/catch-basin-2ft.png",
      },
      {
        name: '24" Diameter Round',
        sku: "PE-CB-24",
        dimensions: '24" ID × 48" Depth',
        standard: "ASTM C478 / State DOT",
        loadRating: "AASHTO HS-20",
        image: "/images/products/catch-basin-2ft.png",
      },
      {
        name: '30" × 48" Hexagon Standard',
        sku: "PE-CB-3048",
        dimensions: '30" × 48" × 48" Depth',
        standard: "Municipal Standard",
        loadRating: "AASHTO HS-20",
        image: "/images/products/b-01b.webp",
      },
      {
        name: '36" Diameter Round',
        sku: "PE-CB-36",
        dimensions: '36" ID × 48" Depth',
        standard: "ASTM C478 Heavy Duty",
        loadRating: "AASHTO HS-20",
        image: "/images/products/catch-basin-system.png",
      },
      {
        name: '48" (4 FT) Square Monolithic',
        sku: "PE-CB-48",
        dimensions: '48" × 48" × 60" Depth',
        standard: "ASTM C478 / AASHTO HS-25",
        loadRating: "AASHTO HS-25",
        image: "/images/products/cb-6-catch-basin.webp",
      },
      {
        name: '60" (5 FT) Heavy Highway Basin',
        sku: "PE-CB-60",
        dimensions: '60" × 60" × 72" Depth',
        standard: "State DOT Highway Standard",
        loadRating: "AASHTO HS-25",
        image: "/images/products/b-01d.webp",
      },
    ],
  },

  // 2. MONOLITHIC SEPTIC TANKS
  {
    id: "septic-tanks",
    skuPrefix: "PE-ST",
    name: "Precast Septic Tank (Monolithic)",
    category: "tanks",
    categoryLabel: "Septic Tanks",
    badge: "WATERTIGHT PRECAST",
    defaultLoad: "ASTM C1227 Watertight",
    defaultImage: "/images/products/septic-tank-2000g.png",
    description:
      "Seamless single-pour precast wastewater septic tanks with cast-in PVC sanitary tees, inspection risers, and heavy traffic-bearing top lids.",
    standardsBadge: "ASTM C1227 / NPCA Certified",
    sizes: [
      {
        name: "1,000 Gal · 4\" Wall Monolithic",
        sku: "PE-ST-1000",
        dimensions: "8.5' L × 5.0' W × 5.0' H",
        capacity: "1,000 Gallons (3,785 L)",
        standard: "ASTM C1227 Watertight Tested",
        loadRating: "H-20 Traffic Rated",
        image: "/images/products/septic-tank-1000g.png",
      },
      {
        name: "1,500 Gal · Dual Chamber Settling",
        sku: "PE-ST-1500",
        dimensions: "10.0' L × 5.5' W × 5.5' H",
        capacity: "1,500 Gallons (5,678 L)",
        standard: "ASTM C1227 / Dual Chamber",
        loadRating: "AASHTO HS-20",
        image: "/images/products/septic-tank-1500g.png",
      },
      {
        name: "2,000 Gal · Commercial Monolith",
        sku: "PE-ST-2000",
        dimensions: "8.0' Ø × 8.0' Height Round",
        capacity: "2,000 Gallons (7,571 L)",
        standard: "ASTM C1227 Heavy Commercial",
        loadRating: "AASHTO HS-20",
        image: "/images/products/septic-tank-2000g.png",
      },
      {
        name: "2,500 Gal · High Capacity Municipal",
        sku: "PE-ST-2500",
        dimensions: "12.0' L × 6.0' W × 6.0' H",
        capacity: "2,500 Gallons (9,463 L)",
        standard: "ASTM C1227 Municipal Spec",
        loadRating: "AASHTO HS-25",
        image: "/images/products/septic-tank-2500g.png",
      },
    ],
  },

  // 3. LEACHING GALLEYS & INFILTRATION
  {
    id: "leaching-galleys",
    skuPrefix: "PE-LG",
    name: "Precast Leaching Galley (High-Flow)",
    category: "drainage",
    categoryLabel: "Leaching Galleys",
    badge: "DOT INFILTRATION",
    defaultLoad: "AASHTO H-20",
    defaultImage: "/images/products/leaching-galley.png",
    description:
      "Perforated underground stormwater recharge chambers engineered for heavy axle loads beneath commercial parking lots and highway rights-of-way.",
    standardsBadge: "Maine DOT & AASHTO Standard",
    sizes: [
      {
        name: "4' Width × 8' Length × 2' Height",
        sku: "PE-LG-2FT",
        dimensions: "4' W × 8' L × 2' H (Modular)",
        standard: "Maine DOT Infiltration Spec",
        loadRating: "AASHTO H-20 Parking Load",
        image: "/images/products/leaching-galley.png",
      },
      {
        name: "4' Width × 8' Length × 4' Height (LC-6)",
        sku: "PE-LG-LC6",
        dimensions: "4' W × 8' L × 4' H (LC-6 Extended)",
        standard: "AASHTO HS-20 Highway Rated",
        loadRating: "AASHTO HS-20",
        image: "/images/products/leaching-galley-lc6.png",
      },
      {
        name: "4' Width × 8' Length × 6' Deep Chamber",
        sku: "PE-LG-6FT",
        dimensions: "4' W × 8' L × 6' H Deep Soakaway",
        standard: "High-Volume Storm Recharge",
        loadRating: "AASHTO HS-20",
        image: "/images/products/leaching-galley-lc6.png",
      },
    ],
  },

  // 4. STORM DRAIN INLET BOXES
  {
    id: "storm-inlets",
    skuPrefix: "PE-INLET",
    name: "Storm Drain Curb Inlet Box",
    category: "drainage",
    categoryLabel: "Storm Inlets",
    badge: "ROAD CURB INLET",
    defaultLoad: "AASHTO HS-20",
    defaultImage: "/images/products/storm-drain-inlet-1.webp",
    description:
      "Precision curb inlet boxes and catchpits with cast-in multi-directional pipe knockouts, designed for fast road intersection stormwater capture.",
    standardsBadge: "ASTM C478 Highway Standard",
    sizes: [
      {
        name: "600×900mm Opening · 1.2m Depth (Case 1)",
        sku: "PE-INL-C1",
        dimensions: "600 × 900 mm Throat · 1.2m Depth",
        standard: "ASTM C478 / DOT Traffic Ready",
        loadRating: "AASHTO HS-20",
        image: "/images/products/storm-drain-inlet-1.webp",
      },
      {
        name: "600×900mm Multi-Knockout (Case 2)",
        sku: "PE-INL-C2",
        dimensions: "600 × 900 mm Throat · 1.2m Depth",
        standard: "AASHTO HS-20 Multi-Port",
        loadRating: "AASHTO HS-20",
        image: "/images/products/storm-drain-inlet-2.webp",
      },
      {
        name: "B-01D Heavy Curb Throat Basin",
        sku: "PE-INL-B01D",
        dimensions: "3' × 3' Footprint × 5' Depth",
        standard: "State DOT Curb Throat",
        loadRating: "AASHTO HS-20",
        image: "/images/products/b-01d.webp",
      },
      {
        name: "B-01E Extended Sump Cleanout Basin",
        sku: "PE-INL-B01E",
        dimensions: "3' × 3' Footprint × 7' Depth",
        standard: "ASTM C478 36\" Sump Trap",
        loadRating: "AASHTO HS-20",
        image: "/images/products/b-01e.webp",
      },
    ],
  },

  // 5. COMMERCIAL GREASE INTERCEPTORS
  {
    id: "grease-traps",
    skuPrefix: "PE-GT",
    name: "Commercial Grease Interceptor",
    category: "tanks",
    categoryLabel: "Grease Traps",
    badge: "COMMERCIAL FOOD SERVICE",
    defaultLoad: "PDI-G101 Certified",
    defaultImage: "/images/products/grease-trap-1500g.png",
    description:
      "Municipal-approved fats, oil, and grease (FOG) precast separation interceptors with dual compartments, gas-tight seals, and cast-iron covers.",
    standardsBadge: "PDI-G101 & IAPMO Listed",
    sizes: [
      {
        name: "1,000 Gal · Restaurant FOG Interceptor",
        sku: "PE-GT-1000",
        dimensions: "8.0' L × 4.5' W × 5.0' H",
        capacity: "1,000 Gallons (3,785 L)",
        standard: "PDI-G101 / IAPMO Listed",
        loadRating: "H-20 Traffic Rated",
        image: "/images/products/grease-trap-1000g.png",
      },
      {
        name: "1,500 Gal · High Capacity Commercial",
        sku: "PE-GT-1500",
        dimensions: "10.0' L × 5.5' W × 5.5' H",
        capacity: "1,500 Gallons (5,678 L)",
        standard: "ASTM C1227 / PDI-G101",
        loadRating: "AASHTO HS-20",
        image: "/images/products/grease-trap-1500g.png",
      },
      {
        name: "2,000 Gal · Food Processing Facility",
        sku: "PE-GT-2000",
        dimensions: "12.0' L × 6.0' W × 6.0' H",
        capacity: "2,000 Gallons (7,571 L)",
        standard: "Heavy Duty FOG Spec",
        loadRating: "AASHTO HS-25",
        image: "/images/products/grease-trap-2000g.png",
      },
    ],
  },

  // 6. HEAVY BOX CULVERTS & BRIDGES
  {
    id: "box-culverts",
    skuPrefix: "PE-BC",
    name: "Precast Concrete Box Culvert System",
    category: "heavy",
    categoryLabel: "Box Culverts",
    badge: "HEAVY INFRASTRUCTURE",
    defaultLoad: "AASHTO HS-25",
    defaultImage: "/images/infrastructure.jpg",
    description:
      "ASTM C1577 reinforced precast box culvert segments for highway stream crossings, storm conveyance tunnels, and rapid bridge replacements.",
    standardsBadge: "ASTM C1577 / AASHTO HS-25",
    sizes: [
      {
        name: "6' × 3' Stream Crossing Culvert",
        sku: "PE-BC-0603",
        dimensions: "6 ft Span × 3 ft Rise",
        standard: "ASTM C1577 / AASHTO HS-25",
        loadRating: "AASHTO HS-25",
        image: "/images/infrastructure.jpg",
      },
      {
        name: "8' × 6' Highway Drainage Box",
        sku: "PE-BC-0806",
        dimensions: "8 ft Span × 6 ft Rise",
        standard: "ASTM C1577 Tongue & Groove",
        loadRating: "AASHTO HS-25",
        image: "/images/infrastructure.jpg",
      },
      {
        name: "10' × 8' Major Hydraulic Tunnel",
        sku: "PE-BC-1008",
        dimensions: "10 ft Span × 8 ft Rise",
        standard: "DOT Approved Civil Standard",
        loadRating: "AASHTO HS-25",
        image: "/images/infrastructure.jpg",
      },
      {
        name: "12' × 10' Regional Drainage Culvert",
        sku: "PE-BC-1210",
        dimensions: "12 ft Span × 10 ft Rise",
        standard: "ASTM C1577 High Strength",
        loadRating: "AASHTO HS-25",
        image: "/images/infrastructure.jpg",
      },
      {
        name: "16' × 12' Modular Bridge Span",
        sku: "PE-BC-1612",
        dimensions: "16 ft Span × 12 ft Rise",
        standard: "AASHTO LRFD Bridge Design",
        loadRating: "AASHTO HS-25",
        image: "/images/infrastructure.jpg",
      },
    ],
  },

  // 7. HIGHWAY HEADWALLS & ENDWALLS
  {
    id: "headwalls-endwalls",
    skuPrefix: "PE-HW",
    name: "Highway Flared Headwall & Endwall System",
    category: "heavy",
    categoryLabel: "Headwalls",
    badge: "DOT HIGHWAY STANDARD",
    defaultLoad: "AASHTO HS-20",
    defaultImage: "/images/products/headwall-dot.png",
    description:
      "Engineered precast outfall headwalls, multi-pipe flared endwalls, and corner wingwall assemblies engineered to protect road embankments.",
    standardsBadge: "State DOT & AASHTO HS-20",
    sizes: [
      {
        name: "Single-Pipe Flared Headwall (Up to 36\")",
        sku: "PE-HW-SGL",
        dimensions: "8' W × 4' H × 3' Footprint",
        standard: "DOT Highway Standard",
        loadRating: "AASHTO HS-20",
        image: "/images/products/headwall-dot.png",
      },
      {
        name: "Triple-Opening Culvert End Wall",
        sku: "PE-HW-TPL",
        dimensions: "14' W × 5' H × 3' Base",
        standard: "Maine DOT Stamped Spec",
        loadRating: "AASHTO HS-20",
        image: "/images/products/endwall-dot-triple.png",
      },
      {
        name: "90° Corner L-Retaining End Wall",
        sku: "PE-HW-CRN",
        dimensions: "8' × 6' Corner Footprint",
        standard: "Heavy Soil Surcharge Rated",
        loadRating: "AASHTO HS-20",
        image: "/images/products/endwall-dot-corner.png",
      },
      {
        name: "Precast Bridge Wing Wall (30°/45°)",
        sku: "PE-WW-FLR",
        dimensions: "Modular Flared Height Panel",
        standard: "DOT Bridge Specification",
        loadRating: "AASHTO HS-25",
        image: "/images/products/wingwall-dot.png",
      },
      {
        name: "NH DOT Standard 12\"–24\" Headwall",
        sku: "PE-HW-NH24",
        dimensions: "6' W × 4' H Pre-Cored Opening",
        standard: "NH DOT Approved",
        loadRating: "AASHTO HS-20",
        image: "/images/products/headwall-nh-24.png",
      },
    ],
  },

  // 8. MANHOLES & PUMP STATIONS
  {
    id: "manholes-pumpstations",
    skuPrefix: "PE-MH",
    name: "Precast Manhole & Utility Pump Chamber",
    category: "drainage",
    categoryLabel: "Manholes",
    badge: "MUNICIPAL UTILITY",
    defaultLoad: "AASHTO HS-20",
    defaultImage: "/images/products/manhole-1050mm.webp",
    description:
      "Circular and monolithic utility chambers with preformed flexible pipe boots, tongue-and-groove joint gaskets, and integrated aluminum rungs.",
    standardsBadge: "ASTM C478 / ACI 318",
    sizes: [
      {
        name: '1050mm (42") Circular Manhole Base',
        sku: "PE-MH-1050",
        dimensions: '42" ID × Depths to 16 ft',
        standard: "ASTM C478 Gasketed Joint",
        loadRating: "AASHTO HS-20",
        image: "/images/products/manhole-1050mm.webp",
      },
      {
        name: '1200mm (48") Standard Precast Manhole',
        sku: "PE-MH-1200",
        dimensions: '48" ID × Modular Stack Riser',
        standard: "ASTM C478 Municipal Standard",
        loadRating: "AASHTO HS-20",
        image: "/images/products/precast-reinforced-manhole.webp",
      },
      {
        name: "Wet Well Lift Station Chamber Monolith",
        sku: "PE-MH-PUMP",
        dimensions: "6' to 10' ID Monolithic Basin",
        standard: "Buoyancy & Hydrostatic Tested",
        loadRating: "AASHTO HS-25",
        image: "/images/products/catchbasin-manhole-1050.webp",
      },
    ],
  },

  // 9. PRECISION STEEL GANG MOLDS & PLANT TOOLING
  {
    id: "gang-molds",
    skuPrefix: "PE-MOLD",
    name: "Precision Multi-Cavity Steel Gang Mold Bed",
    category: "tooling",
    categoryLabel: "Gang Molds",
    badge: "PLANT TOOLING",
    defaultLoad: "Industrial Fabricated",
    defaultImage: "/images/manufacturing.jpg",
    description:
      "Heavy CNC-machined steel casting gang mold beds engineered for high-volume multi-cavity precast production of slabs, covers, and risers.",
    standardsBadge: "CNC Laser Cut / Heavy Steel",
    sizes: [
      {
        name: "Solid Round Slab Multi-Cavity Gang Mold",
        sku: "PE-MLD-RND",
        dimensions: "Multi-Cavity High Volume Bed",
        standard: "Heavy Structural Steel Fab",
        loadRating: "5,000–10,000 PSI Casting",
        image: "/images/manufacturing.jpg",
      },
      {
        name: "Adjustable Box Culvert Formwork Bed",
        sku: "PE-MLD-BOX",
        dimensions: "6' to 16' Modular Span Forms",
        standard: "Hydraulic Core Strip System",
        loadRating: "Heavy Commercial Casting",
        image: "/images/hero-precast.jpg",
      },
    ],
  },
];

// ─── MAIN PRODUCTS SECTION COMPONENT ─────────────────────────────────────────

export function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedLoad, setSelectedLoad] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProducts = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return ECOMMERCE_PRODUCTS.filter((product) => {
      // 1. Category Filter
      const matchesCategory =
        selectedCategory === "all" ||
        product.category === selectedCategory ||
        product.id === selectedCategory;

      // 2. Load Rating Filter
      const matchesLoad =
        selectedLoad === "all" ||
        product.defaultLoad.toLowerCase().includes(selectedLoad.toLowerCase()) ||
        product.sizes.some(
          (s) =>
            s.loadRating.toLowerCase().includes(selectedLoad.toLowerCase()) ||
            s.standard.toLowerCase().includes(selectedLoad.toLowerCase())
        );

      // 3. Search Query
      const matchesSearch =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q) ||
        product.skuPrefix.toLowerCase().includes(q) ||
        product.standardsBadge.toLowerCase().includes(q) ||
        product.sizes.some(
          (s) =>
            s.name.toLowerCase().includes(q) ||
            s.sku.toLowerCase().includes(q) ||
            s.dimensions.toLowerCase().includes(q) ||
            s.standard.toLowerCase().includes(q)
        );

      return matchesCategory && matchesLoad && matchesSearch;
    });
  }, [selectedCategory, selectedLoad, searchQuery]);

  const totalSizesCount = useMemo(() => {
    return filteredProducts.reduce((acc, p) => acc + p.sizes.length, 0);
  }, [filteredProducts]);

  const hasActiveFilters =
    selectedCategory !== "all" || selectedLoad !== "all" || searchQuery.trim() !== "";

  const handleResetFilters = () => {
    setSelectedCategory("all");
    setSelectedLoad("all");
    setSearchQuery("");
  };

  return (
    <section
      id="products"
      className="w-full bg-[#EEF6FF] border-y-2 border-[#93C5FD] py-12 sm:py-16 lg:py-20 relative overflow-hidden"
    >
      {/* ── TOP SECTION HEADER (EXACT ASTRO BENCHMARK LAYOUT) ──────────── */}
      <div className="section-container-wide">
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-12 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#032356] text-white text-xs sm:text-[13px] font-mono font-black uppercase tracking-wider mb-4 shadow-sm border border-[#D4030C]/40">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D4030C] animate-pulse" />
            <span>US PRECAST PRODUCTION · {ECOMMERCE_PRODUCTS.length} CERTIFIED PRODUCT CATEGORIES</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] font-black text-[#032356] uppercase leading-[1.08] tracking-wide">
            ENGINEERED PRECAST <span className="text-[#D4030C]">PRODUCTS</span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-slate-800 mt-4 font-medium leading-relaxed max-w-3xl mx-auto">
            Review submittal specifications, load ratings, and engineering drawings across our full catalog of certified precast civil infrastructure systems.
          </p>

          {/* 3 Civil Technical Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-5 font-mono text-[11px] sm:text-xs font-bold text-[#032356]">
            <span className="inline-flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border-2 border-[#93C5FD] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#D4030C]" />
              5,000+ PSI COMPRESSIVE STRENGTH
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border-2 border-[#93C5FD] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#D4030C]" />
              AASHTO HS-20 &amp; HS-25 TRAFFIC RATED
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border-2 border-[#93C5FD] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#D4030C]" />
              STATE DOT &amp; ASTM COMPLIANT
            </span>
          </div>

          {/* Direct CTA */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#032356] hover:bg-[#021A40] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all active:scale-95"
            >
              <SlidersHorizontal className="w-4 h-4 text-[#D4030C]" />
              <span>Request Direct Multi-Item Precast Takeoff</span>
              <ArrowRight className="w-4 h-4 text-[#D4030C]" />
            </Link>
          </div>
        </div>

        {/* ── E-COMMERCE FILTER & SEARCH CONTROL BAR ──────────────────────── */}
        <div className="bg-white rounded-2xl border-2 border-[#93C5FD] p-5 sm:p-6 mb-8 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            {/* 1. Category Selector */}
            <div>
              <label className="block text-xs font-mono font-black text-[#032356] uppercase tracking-wider mb-2">
                Product Category
              </label>
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-4 pr-10 py-3 rounded-xl bg-white border-2 border-[#93C5FD] hover:border-[#D4030C] focus:border-[#032356] text-xs font-black text-[#032356] cursor-pointer appearance-none transition-colors shadow-2xs"
                >
                  <option value="all">All Categories ({ECOMMERCE_PRODUCTS.length} Systems)</option>
                  <option value="drainage">Stormwater &amp; Drainage (3)</option>
                  <option value="tanks">Tanks &amp; Interceptors (2)</option>
                  <option value="heavy">Heavy Civil &amp; Bridges (2)</option>
                  <option value="tooling">Plant Tooling &amp; Gang Molds (1)</option>
                  <option disabled>──────────</option>
                  {ECOMMERCE_PRODUCTS.map((prod) => (
                    <option key={prod.id} value={prod.id}>
                      {prod.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-[#032356] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* 2. Load & DOT Specification Filter */}
            <div>
              <label className="block text-xs font-mono font-black text-[#032356] uppercase tracking-wider mb-2">
                Load &amp; DOT Specification
              </label>
              <div className="relative">
                <select
                  value={selectedLoad}
                  onChange={(e) => setSelectedLoad(e.target.value)}
                  className="w-full pl-4 pr-10 py-3 rounded-xl bg-white border-2 border-[#93C5FD] hover:border-[#D4030C] focus:border-[#032356] text-xs font-black text-[#032356] cursor-pointer appearance-none transition-colors shadow-2xs"
                >
                  <option value="all">All Standards &amp; Ratings</option>
                  <option value="HS-20">AASHTO HS-20 Traffic Rated</option>
                  <option value="HS-25">AASHTO HS-25 Heavy Highway</option>
                  <option value="ASTM C1227">ASTM C1227 Watertight Tested</option>
                  <option value="ASTM C478">ASTM C478 Municipal Catch Basins</option>
                  <option value="ASTM C1577">ASTM C1577 Box Culverts</option>
                  <option value="PDI-G101">PDI-G101 Commercial Grease</option>
                  <option value="Maine DOT">Maine DOT Approved</option>
                </select>
                <ChevronDown className="w-4 h-4 text-[#032356] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* 3. Search Model or Size */}
            <div>
              <label className="block text-xs font-mono font-black text-[#032356] uppercase tracking-wider mb-2">
                Search Model or Size
              </label>
              <div className="relative flex items-center">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                <input
                  type="text"
                  placeholder="e.g. 2000 gal, 48x48, Box Culvert, HS-20..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-9 py-3 rounded-xl bg-white border-2 border-[#93C5FD] hover:border-[#D4030C] focus:border-[#032356] text-xs font-bold text-[#032356] placeholder-slate-400 focus:outline-none transition-colors shadow-2xs"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 text-slate-400 hover:text-[#D4030C] cursor-pointer"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* 4. Active Status & Quick Counter Badge */}
            <div>
              <div className="w-full py-3 px-4 rounded-xl bg-[#F0F7FF] border-2 border-[#93C5FD] flex items-center justify-between text-xs font-mono font-bold text-[#032356]">
                <span>
                  Showing {filteredProducts.length} / {ECOMMERCE_PRODUCTS.length} Categories
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#032356] text-white">
                  {totalSizesCount} Sizes
                </span>
              </div>
            </div>
          </div>

          {/* Active Filter Chips & Reset Button */}
          {hasActiveFilters && (
            <div className="mt-4 pt-4 border-t border-[#E1EDF8] flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-bold text-[#032356]">Active Filters:</span>
                {selectedCategory !== "all" && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#032356] text-white font-mono text-[11px]">
                    Category: {selectedCategory}
                    <button
                      type="button"
                      onClick={() => setSelectedCategory("all")}
                      className="hover:text-red-300 ml-1"
                    >
                      ×
                    </button>
                  </span>
                )}
                {selectedLoad !== "all" && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#D4030C] text-white font-mono text-[11px]">
                    Load: {selectedLoad}
                    <button
                      type="button"
                      onClick={() => setSelectedLoad("all")}
                      className="hover:text-red-100 ml-1"
                    >
                      ×
                    </button>
                  </span>
                )}
                {searchQuery && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-200 text-[#032356] font-mono text-[11px]">
                    Query: &ldquo;{searchQuery}&rdquo;
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="hover:text-[#D4030C] ml-1"
                    >
                      ×
                    </button>
                  </span>
                )}
              </div>

              <button
                type="button"
                onClick={handleResetFilters}
                className="text-xs font-black text-[#D4030C] hover:underline uppercase tracking-wider cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>

        {/* ── UNIFIED E-COMMERCE PRODUCTS GRID ───────────────────────────── */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {filteredProducts.map((product) => (
              <ECommerceProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border-2 border-dashed border-[#93C5FD] p-12 text-center max-w-lg mx-auto shadow-sm">
            <p className="text-base font-black text-[#032356] uppercase tracking-wide mb-2">
              No matching civil products found
            </p>
            <p className="text-xs text-slate-600 mb-5 leading-relaxed">
              We couldn&apos;t find any systems matching your current criteria. Try clearing search filters or choosing &ldquo;All Standards &amp; Ratings&rdquo;.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="px-5 py-2.5 rounded-xl bg-[#032356] hover:bg-[#021A40] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

// ─── DEDICATED E-COMMERCE PRODUCT CARD WITH SIZE SELECTOR ─────────────────────

function ECommerceProductCard({ product }: { product: ECommerceProduct }) {
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [isSaved, setIsSaved] = useState(false);

  const currentSize = product.sizes[selectedSizeIndex] || product.sizes[0];
  const activeImage = currentSize.image || product.defaultImage;

  return (
    <div className="bg-white rounded-2xl border-2 border-[#93C5FD] hover:border-[#D4030C] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
      <div>
        {/* 1. Image Stage with Visual Badges */}
        <div className="relative aspect-[4/3] w-full bg-gradient-to-b from-[#EBF5FF] via-[#E1EFFF] to-[#CBE4FC] border-b-2 border-[#93C5FD] flex items-center justify-center p-4 overflow-hidden">
          <Image
            src={activeImage}
            alt={product.name}
            width={400}
            height={300}
            className="max-h-full w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
          />

          {/* Top-Right Load Rating Badge */}
          <div className="absolute top-2.5 right-2.5 z-10">
            <span className="px-2.5 py-1 rounded-md text-[10px] sm:text-[10.5px] font-black uppercase tracking-wider bg-[#032356] text-white shadow-sm font-mono border border-white/20">
              {currentSize.loadRating || product.defaultLoad}
            </span>
          </div>

          {/* Bottom-Left Category Tag */}
          <div className="absolute bottom-2.5 left-2.5 z-10">
            <span className="px-2.5 py-1 rounded-md text-[10px] sm:text-[10.5px] font-black uppercase tracking-wider bg-white text-[#032356] border-2 border-[#93C5FD] font-mono shadow-2xs">
              {product.categoryLabel}
            </span>
          </div>

          {/* Top-Left Favorite Button */}
          <button
            type="button"
            onClick={() => setIsSaved(!isSaved)}
            className="absolute top-2.5 left-2.5 z-10 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-[#032356] hover:text-[#D4030C] shadow-sm flex items-center justify-center transition-all cursor-pointer"
            aria-label="Save product"
          >
            <Heart
              className={`w-4 h-4 ${isSaved ? "fill-[#D4030C] text-[#D4030C]" : ""}`}
            />
          </button>
        </div>

        {/* 2. Content Body */}
        <div className="p-4 sm:p-5">
          {/* Dynamic SKU */}
          <div className="font-mono text-xs font-black text-[#D4030C] tracking-wider mb-1.5 uppercase">
            SKU: {currentSize.sku}
          </div>

          {/* Product Title */}
          <h3 className="text-base font-black text-[#032356] uppercase tracking-wide group-hover:text-[#D4030C] transition-colors leading-[1.3] line-clamp-2 mb-2">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-[13px] text-slate-800 line-clamp-2 leading-relaxed mb-3.5 font-medium">
            {product.description}
          </p>

          {/* 3. Interactive Size / Dimension Dropdown */}
          <div className="mb-3.5">
            <label className="block text-[11px] font-mono font-black text-[#032356] uppercase tracking-wider mb-1">
              Select Size / Dimension:
            </label>
            <div className="relative">
              <select
                value={selectedSizeIndex}
                onChange={(e) => setSelectedSizeIndex(Number(e.target.value))}
                className="w-full pl-3.5 pr-8 py-2.5 rounded-xl bg-white border-2 border-[#93C5FD] hover:border-[#D4030C] focus:border-[#032356] text-xs font-black font-mono text-[#032356] cursor-pointer appearance-none transition-colors shadow-2xs"
              >
                {product.sizes.map((size, idx) => (
                  <option key={size.sku} value={idx}>
                    {size.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-[#032356] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* 4. Live Technical Specs Summary Box */}
          <div className="bg-[#F8FAFD] rounded-xl p-3 border border-[#E1EDF8] space-y-1.5 text-xs font-mono text-slate-900 leading-normal">
            <div className="flex items-center justify-between gap-2">
              <span className="text-slate-600 font-sans text-xs font-bold shrink-0">Specs:</span>
              <span className="font-black text-[#032356] truncate text-right">
                {currentSize.dimensions}
              </span>
            </div>
            <div className="flex items-center justify-between gap-2">
              <span className="text-slate-600 font-sans text-xs font-bold shrink-0">Standard:</span>
              <span className="font-black text-[#D4030C] truncate text-right">
                {currentSize.standard}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Bottom Action Buttons: CAD Drawing & Request RFQ */}
      <div className="p-4 sm:p-5 pt-0 space-y-2.5">
        <Link
          href="/resources"
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#032356] hover:bg-[#021A40] text-white text-xs font-black uppercase tracking-wider transition-all duration-200 active:scale-95 shadow-md cursor-pointer"
          title={`Download ${product.name} CAD Submittal Drawings`}
        >
          <Download className="w-3.5 h-3.5 text-[#D4030C]" />
          <span>Download CAD Drawing</span>
        </Link>

        <Link
          href="/#contact"
          className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#D4030C] hover:bg-[#B50209] text-white text-xs font-black uppercase tracking-wider transition-all duration-200 active:scale-95 shadow-md cursor-pointer"
        >
          <span>Request Contractor Quote</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
