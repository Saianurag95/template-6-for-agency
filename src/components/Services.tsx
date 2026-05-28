import { Instagram, Video, Facebook, Linkedin, Youtube, Globe, CheckCircle2, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { platforms, services, agency } from "../data/agency";

const iconMap: Record<string, LucideIcon> = {
  Instagram,
  Video,
  Facebook,
  Linkedin,
  Youtube,
  Globe,
};

const platformGradients = [
  { card: "hover:border-rose-500/30", icon: "from-rose-500 to-orange-500", text: "text-rose-400" },
  { card: "hover:border-cyan-500/30", icon: "from-cyan-500 to-blue-500", text: "text-cyan-400" },
  { card: "hover:border-blue-500/30", icon: "from-blue-600 to-blue-400", text: "text-blue-400" },
  { card: "hover:border-sky-500/30", icon: "from-sky-500 to-cyan-400", text: "text-sky-400" },
  { card: "hover:border-red-500/30", icon: "from-red-600 to-rose-400", text: "text-red-400" },
  { card: "hover:border-emerald-500/30", icon: "from-emerald-500 to-teal-400", text: "text-emerald-400" },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#0A0A0F] py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-orange-400 text-xs font-bold uppercase tracking-wider">What We Do</span>
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.05] tracking-tight">
              Every platform.<br />
              Every format.<br />
              <span className="text-white/25">One agency.</span>
            </h2>
          </div>
          <div className="lg:max-w-sm">
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              From Instagram reels to full websites — we handle your entire digital presence so you can focus on running your business in Hyderabad.
            </p>
            <a
              href={agency.bookingUrl}
              className="group inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-bold text-sm transition-colors"
            >
              Start your project
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Platform cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-20">
          {platforms.map((p, i) => {
            const Icon = iconMap[p.icon];
            const style = platformGradients[i];
            return (
              <div
                key={p.name}
                className={`group relative bg-[#0D0D14] border border-white/[0.06] ${style.card} rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
              >
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute top-0 left-0 w-32 h-32 bg-gradient-to-br ${style.icon} opacity-5 rounded-full -translate-x-8 -translate-y-8 blur-xl`} />
                </div>

                <div className={`relative w-10 h-10 bg-gradient-to-br ${style.icon} rounded-xl flex items-center justify-center mb-5 shadow-lg`}>
                  <Icon size={18} className="text-white" />
                </div>
                <h3 className="text-white font-bold text-[15px] mb-2">{p.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.description}</p>
              </div>
            );
          })}
        </div>

        {/* Service deep-dive */}
        <div className="relative">
          <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="grid md:grid-cols-2 gap-4 pt-10">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="group bg-[#0D0D14] border border-white/[0.06] hover:border-orange-500/20 rounded-2xl p-8 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500/20 to-rose-500/10 border border-orange-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-orange-400 font-black text-xs tabular-nums">0{i + 1}</span>
                  </div>
                  <h3 className="text-white font-bold text-lg">{s.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{s.description}</p>
                <div className="grid grid-cols-2 gap-2.5">
                  {s.deliverables.map((d) => (
                    <div key={d} className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                      <span className="text-gray-300 text-xs font-medium">{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
