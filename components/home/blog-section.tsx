import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, BookOpen, Clock } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  image: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: "dot-stormwater-catch-basins",
    title: "State DOT Stormwater Criteria: Specifying AASHTO HS-20 Traffic Rated Precast Catch Basins",
    category: "CIVIL INFRASTRUCTURE",
    readTime: "4 min read",
    date: "OCTOBER 2026",
    summary:
      "A technical review of monolithic sump design, mastic joint seals, and traffic-loading criteria required by state DOT highway departments for roadway drainage.",
    image: "/images/products/catch-basin-2ft.png",
  },
  {
    id: "subsurface-leaching-galleys",
    title: "Subsurface Stormwater Infiltration: Maine DOT Leaching Galleys vs Conventional Systems",
    category: "STORMWATER DESIGN",
    readTime: "5 min read",
    date: "SEPTEMBER 2026",
    summary:
      "How high-void precast leaching galleys maximize groundwater recharge rates while reducing the subsurface excavated footprint on commercial and municipal sites.",
    image: "/images/products/leaching-galley.png",
  },
  {
    id: "tekla-lod-400-detailing",
    title: "Tekla LOD 400 Detailing in Precast: Eliminating Costly Casting Bed Clashes Before the Pour",
    category: "STRUCTURAL DETAILING",
    readTime: "6 min read",
    date: "SEPTEMBER 2026",
    summary:
      "Automating rebar piece tickets, anchor placement verification, and crane pick analysis through constructible LOD 400 modeling for precast fabricators.",
    image: "/images/engineering-team.jpg",
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="w-full bg-[#F4F8FD] border-b border-[#DCE5F0] pt-8 pb-10 sm:pt-10 sm:pb-12">
      <div className="section-container-wide">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-black uppercase tracking-widest text-[#D4030C] mb-2 font-mono">
            <span className="w-3 h-0.5 bg-[#D4030C]" />
            <span>TECHNICAL ARTICLES &amp; GUIDES</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-[#032356] uppercase tracking-tight leading-[0.95] w-full">
            Engineering <span className="text-[#D4030C]">Blog &amp; Resources</span>
          </h2>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between mt-4 gap-4">
            <p className="text-sm sm:text-base lg:text-lg text-[#334155] max-w-2xl leading-relaxed">
              Helpful technical articles, DOT drainage guidelines, and structural detailing best practices from our licensed engineering team.
            </p>

            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#032356] hover:text-[#D4030C] transition-colors uppercase tracking-wider group shrink-0"
            >
              <span>Ask Our Engineers</span>
              <ArrowRight className="w-4 h-4 text-[#D4030C] transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 3 Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl border-2 border-[#DCE5F0] hover:border-[#032356] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Stage */}
              <div className="relative h-52 sm:h-56 w-full bg-[#F8FAFD] border-b border-[#EBF1F8] overflow-hidden flex items-center justify-center p-4">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded bg-[#032356] text-white text-[10px] font-black uppercase tracking-wider shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-[11px] font-mono text-[#64748B] mb-3">
                    <span className="flex items-center gap-1.5 font-bold">
                      <Calendar className="w-3.5 h-3.5 text-[#D4030C]" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-extrabold text-[#032356] group-hover:text-[#D4030C] transition-colors leading-snug mb-3">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6 font-normal">
                    {post.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#032356] group-hover:text-[#D4030C] transition-colors uppercase tracking-wider"
                  >
                    <span>Read Technical Brief</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D4030C] group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <BookOpen className="w-4 h-4 text-slate-300 group-hover:text-[#D4030C] transition-colors" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
