"use client";

import { useState } from "react";
import { Mail, MapPin, Clock, Send, CheckCircle2, ShieldCheck, FileUp } from "lucide-react";
import { COMPANY } from "@/lib/constants";

interface FormData {
  name: string;
  company: string;
  email: string;
  projectType: string;
  requirements: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    projectType: "Catch Basins & Drainage Inlets",
    requirements: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const errs: Partial<FormData> = {};

    if (!formData.name.trim()) {
      errs.name = "Full name is required.";
    }

    if (!formData.company.trim()) {
      errs.company = "Company name is required.";
    }

    if (!formData.email.trim()) {
      errs.email = "Work email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid work email address.";
    }

    if (!formData.requirements.trim()) {
      errs.requirements = "Please describe your project requirements.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      company: "",
      email: "",
      projectType: "Catch Basins & Drainage Inlets",
      requirements: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="w-full bg-white border-b border-[#DCE5F0] py-16 sm:py-24">
      <div className="section-container-wide">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#D4030C] mb-2">
            <span className="w-3 h-0.5 bg-[#D4030C]" />
            <span>REQUEST A QUOTE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#032356] uppercase tracking-tight">
            Contact <span className="text-[#D4030C]">Precast Engineers</span>
          </h2>
          <p className="text-sm sm:text-base text-[#334155] mt-2 leading-relaxed">
            Send us your project drawings, questions, or product requests. We will review your details and provide a fast, accurate quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14">
          {/* Left: Contact & Quote Form */}
          <div className="lg:col-span-7 bg-[#F4F8FD] border-2 border-[#DCE5F0] rounded-2xl p-6 sm:p-10 shadow-sm">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-[#FFF2F2] border-2 border-[#FCD2D4] text-[#D4030C] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-[#D4030C]" />
                </div>
                <h3 className="text-2xl font-black text-[#032356] uppercase">
                  Quote Request Received
                </h3>
                <p className="text-sm text-[#475569] max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Our team has received your project details and will follow up with pricing and schedule.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-lg bg-[#032356] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#06182E] transition-colors cursor-pointer"
                  >
                    Submit Another Project
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-[#032356] uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-[#D4030C]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Miller"
                      className="w-full px-4 py-3 bg-white border border-[#DCE5F0] rounded-lg text-sm text-[#032356] focus:outline-none focus:border-[#032356] focus:ring-1 focus:ring-[#032356] transition-all"
                    />
                    {errors.name && <p className="text-[11px] text-[#D4030C] font-semibold mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#032356] uppercase tracking-wider mb-1.5">
                      Company Name <span className="text-[#D4030C]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Precast Systems LLC"
                      className="w-full px-4 py-3 bg-white border border-[#DCE5F0] rounded-lg text-sm text-[#032356] focus:outline-none focus:border-[#032356] focus:ring-1 focus:ring-[#032356] transition-all"
                    />
                    {errors.company && <p className="text-[11px] text-[#D4030C] font-semibold mt-1">{errors.company}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-[#032356] uppercase tracking-wider mb-1.5">
                      Work Email <span className="text-[#D4030C]">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. jmiller@precastexample.com"
                      className="w-full px-4 py-3 bg-white border border-[#DCE5F0] rounded-lg text-sm text-[#032356] focus:outline-none focus:border-[#032356] focus:ring-1 focus:ring-[#032356] transition-all"
                    />
                    {errors.email && <p className="text-[11px] text-[#D4030C] font-semibold mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#032356] uppercase tracking-wider mb-1.5">
                      Precast Scope / Product Category
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-[#DCE5F0] rounded-lg text-sm text-[#032356] focus:outline-none focus:border-[#032356] focus:ring-1 focus:ring-[#032356] transition-all"
                    >
                      <option>Catch Basins &amp; Drainage Inlets</option>
                      <option>Maine DOT Leaching Galleys</option>
                      <option>Highway Bridge &amp; Civil Culverts</option>
                      <option>Monolithic Septic &amp; Grease Traps</option>
                      <option>Tekla LOD 400 3D Structural Detailing</option>
                      <option>PE / SE Stamped Structural Calculations</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#032356] uppercase tracking-wider mb-1.5">
                    Project Requirements &amp; Plan Sheets <span className="text-[#D4030C]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    placeholder="Provide details about required piece quantities, DOT standard numbers (e.g. Maine DOT, NH DOT), loading requirements (HS-20/HS-25), target delivery dates, or drawing link..."
                    className="w-full px-4 py-3 bg-white border border-[#DCE5F0] rounded-lg text-sm text-[#032356] focus:outline-none focus:border-[#032356] focus:ring-1 focus:ring-[#032356] transition-all resize-none"
                  />
                  {errors.requirements && <p className="text-[11px] text-[#D4030C] font-semibold mt-1">{errors.requirements}</p>}
                </div>

                <div className="p-3 bg-white border border-[#DCE5F0] rounded-lg flex items-center gap-3 text-xs text-[#64748B]">
                  <FileUp className="w-4 h-4 text-[#D4030C] shrink-0" />
                  <span>CAD / PDF drawings may also be emailed directly to <strong className="text-[#032356] font-mono">rfq@precastengineers.com</strong></span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-[#D4030C] hover:bg-[#B31217] text-white font-black text-sm uppercase tracking-wider shadow-lg shadow-red-600/30 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? "Sending..." : "Submit Quote Request"}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Technical Desk Accreditation & Direct Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-[#06182E] bg-gradient-to-br from-[#06182E] via-[#0B2545] to-[#032356] text-white rounded-2xl p-8 border-t-4 border-[#D4030C] shadow-xl space-y-6">
              <h3 className="text-xl font-black uppercase text-white tracking-tight">
                Precast Engineers Office
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Direct communication with structural precast engineers. We support precasters, precaster-fabricator partners, and civil contractors with rapid submittal reviews.
              </p>

              <div className="space-y-4 pt-2 border-t border-white/10 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#D4030C]" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-400 uppercase text-[10px]">Direct Quote Requests</div>
                    <a href="mailto:rfq@precastengineers.com" className="text-sm font-bold text-white hover:text-red-400 font-mono transition-colors">
                      rfq@precastengineers.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#D4030C]" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-400 uppercase text-[10px]">General Inquiries</div>
                    <a href={`mailto:${COMPANY.email}`} className="text-sm font-bold text-white hover:text-red-400 font-mono transition-colors">
                      {COMPANY.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-[#D4030C]" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-400 uppercase text-[10px]">Engineering Desk Hours</div>
                    <div className="text-slate-200">{COMPANY.hours}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#D4030C]" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-400 uppercase text-[10px]">Territory Coverage</div>
                    <div className="text-slate-200">Serving Precast Fabricators Nationwide Across Major U.S. Corridors</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality Compliance Standards Card */}
            <div className="bg-[#F4F8FD] border-2 border-[#DCE5F0] rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#032356] text-white flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#D4030C]" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-[#032356] uppercase">
                  PE-Stamped Submittal Compliance Standards
                </h4>
                <p className="text-xs text-[#475569] mt-1 leading-relaxed">
                  All structural calculation packages and piece tickets strictly comply with applicable state DOT, AASHTO, and ACI / PCI engineering standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
