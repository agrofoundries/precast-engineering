import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Download, ShieldCheck, Ruler, Layers } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const DETAILED_PRODUCTS = [
  {
    id: "infrastructure",
    title: "Heavy Precast Concrete Box Culverts & Bridges",
    subtitle: "Highway Stream Crossings, Tunnels & Soil Retaining Walls",
    image: "/images/infrastructure.jpg",
    description: "Massive rectangular concrete tunnel sections and retaining wall panels placed beneath roads and highways. They let creeks and heavy rainwater pass safely beneath traffic without washing out the road, carrying loaded semi-truck traffic immediately.",
    features: [
      "Standard ASTM C1577 box culvert sizes spanning from 6'×3' up to 16'×12'",
      "Fast 1 to 2 day road installation sequence that reduces traffic detour closures",
      "Watertight rubber gasket joints that prevent dirt washouts and road sinkholes",
      "DOT-approved bridge wingwalls, flared headwalls, and slope retaining panels",
    ],
    specs: [
      { label: "Box Sizes", value: "Span 6' to 16' · Rise 3' to 12'" },
      { label: "Traffic Rating", value: "AASHTO HS-20 & HS-25 Highway" },
      { label: "Design Lifespan", value: "100-Year Civil Spec" },
      { label: "Compliance", value: "AASHTO & State DOT Specifications" },
    ],
  },
  {
    id: "utility",
    title: "Street Storm Drains, Catch Basins & Manholes",
    subtitle: "Underground Rainwater Drainage & City Utility Chambers",
    image: "/images/products/catch-basin-2ft.png",
    description: "Heavy underground concrete drain boxes and circular manholes that collect rainwater from streets, parking lots, and highways, filtering sand and dirt before water flows into city sewer pipes.",
    features: [
      "Monolithic leak-proof bases with pre-cast pipe knockouts for rapid connection",
      "Watertight rubber gaskets (ASTM C443) preventing road subsidence and leaks",
      "Deep sediment sumps that catch dirt and protect downstream waterways",
      "Heavy cast iron bicycle-safe grates and solid traffic manhole covers",
    ],
    specs: [
      { label: "Standard Sizes", value: "24\"×24\" to 48\"×48\" & 42\"/48\" Round" },
      { label: "Traffic Rating", value: "AASHTO HS-20 Heavy Traffic" },
      { label: "Joint Sealing", value: "ASTM C443 Watertight Mastic" },
      { label: "Standard Code", value: "ASTM C478 Municipal Standard" },
    ],
  },
  {
    id: "tanks",
    title: "Underground Septic Tanks & Commercial Grease Traps",
    subtitle: "Watertight Wastewater Storage & Restaurant Grease Interceptors",
    image: "/images/products/septic-tank-1500g.png",
    description: "One-piece seamless concrete tanks that safely treat household sewage or trap commercial kitchen grease so oils and fats never clog municipal sewer lines.",
    features: [
      "Monolithic poured watertight concrete engineered to protect groundwater and surrounding soils per ASTM C1227",
      "Internal baffle dividing walls that separate solids, oils, and clean wastewater",
      "Dual inspection risers and heavy-duty covers for quick maintenance access",
      "Commercial grease interceptors compliant with UPC and IAPMO plumbing codes",
    ],
    specs: [
      { label: "Capacities", value: "1,000 to 2,500 Gallons" },
      { label: "Design Code", value: "ASTM C1227 / NPCA Certified" },
      { label: "Traffic Options", value: "Non-Traffic & HS-20 Traffic Rated" },
      { label: "Material", value: "5,000 PSI High-Density Concrete" },
    ],
  },
  {
    id: "wall-panels",
    title: "Precast Concrete Wall Panels & Buildings",
    subtitle: "Insulated Architectural Wall Systems & Warehouses",
    image: "/images/wall-panels.jpg",
    description: "High-performance insulated concrete wall panels with built-in insulation (up to R-32) and up to 4-hour fire resistance, erected quickly by crane for warehouses, data centers, and industrial facilities.",
    features: [
      "Solid or insulated sandwich construction from 6\" to 14\" thickness",
      "Factory-installed electrical conduit and window opening blockouts",
      "Non-conductive composite thermal ties preventing thermal energy loss",
      "Smooth steel form, sandblasted, or thin-brick architectural surface finishes",
    ],
    specs: [
      { label: "Max Panel Height", value: "Up to 48 ft." },
      { label: "Compressive Strength", value: "6,000 – 8,500 PSI" },
      { label: "Thermal Value", value: "R-14 to R-32+" },
      { label: "Fire Rating", value: "Up to 4 Hours" },
    ],
  },
];

export default function ProductsPage() {
  return (
    <div className="w-full bg-white">
      {/* Header banner */}
      <div className="bg-[#F4F4F6] border-b border-gray-200 py-16 md:py-20">
        <div className="section-container-wide">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
              Precast Concrete Product Line
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mt-2 mb-4">
              Precision-Engineered Precast Components
            </h1>
            <p className="text-base text-gray-600 leading-relaxed">
              Manufactured in climate-controlled PCI-certified facilities to meet the most exacting structural, hydraulic, and civil specifications across major United States corridors.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/quote" className="btn-primary">
                Request Product Pricing
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link href="/resources" className="btn-secondary">
                Download Technical Data Sheets
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Product List */}
      <div className="section-container-wide py-16 md:py-24 space-y-24">
        {DETAILED_PRODUCTS.map((product, idx) => (
          <div
            key={product.id}
            id={product.id}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
              idx % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className={`lg:col-span-6 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] border border-gray-200">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Details */}
            <div className={`lg:col-span-6 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
                {product.subtitle}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1 mb-4">
                {product.title}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Specs Table */}
              <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-xl bg-[#F8F9FA] border border-gray-200">
                {product.specs.map((spec, i) => (
                  <div key={i}>
                    <div className="text-[11px] text-gray-500 font-semibold">{spec.label}</div>
                    <div className="text-xs font-bold text-gray-900">{spec.value}</div>
                  </div>
                ))}
              </div>

              {/* Bullet Features */}
              <ul className="space-y-2.5 mb-8">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <Link
                  href={`/quote?product=${product.id}`}
                  className="btn-primary text-xs"
                >
                  Configure & Request Quote
                </Link>
                <Link
                  href="/resources"
                  className="btn-secondary text-xs inline-flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  CAD / Specs
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
