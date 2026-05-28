import { ExternalLink, ArrowRight, Layers } from "lucide-react";
import { templateDemos, agency } from "../data/agency";

const fitStyles: Record<string, { badge: string; dot: string }> = {
  "Starter Package": { badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", dot: "bg-emerald-400" },
  "Business Package": { badge: "bg-orange-500/10 text-orange-400 border-orange-500/20", dot: "bg-orange-400" },
  "Premium Package": { badge: "bg-rose-500/10 text-rose-400 border-rose-500/20", dot: "bg-rose-400" },
};

export default function Templates() {
  return (
    <section id="templates" className="bg-[#0A0A0F] py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <Layers size={11} className="text-blue-400" />
            <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">Website Templates</span>
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.05] tracking-tight mb-5">
            Choose your style.{" "}
            <span className="text-white/25">We build it.</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Browse our template library. Pick the one that fits your business — we customise it with your brand, content and goals. Live in days.
          </p>
        </div>

        {/* Template grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {templateDemos.map((t) => {
            const fit = fitStyles[t.fit] ?? { badge: "bg-gray-700 text-gray-400 border-gray-600", dot: "bg-gray-400" };
            return (
              <div
                key={t.id}
                className="group flex flex-col bg-[#0D0D14] border border-white/[0.06] hover:border-orange-500/25 rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-orange-500/5"
              >
                {/* Preview */}
                <div className="relative h-48 overflow-hidden shrink-0">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D14]/95 via-[#0D0D14]/20 to-transparent" />

                  {/* ID badge */}
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg px-2.5 py-1">
                    <span className="text-white/50 text-[10px] font-mono font-bold tracking-wider">{t.id}</span>
                  </div>

                  {/* Hover reveal */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2">
                      <ExternalLink size={13} className="text-white" />
                      <span className="text-white text-xs font-bold">Preview Demo</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3 className="text-white font-bold text-[15px]">{t.name}</h3>
                    <div className={`flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full border whitespace-nowrap shrink-0 ${fit.badge}`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${fit.dot}`} />
                      {t.fit.replace(" Package", "")}
                    </div>
                  </div>
                  <p className="text-gray-600 text-[11px] font-semibold uppercase tracking-wider mb-3">{t.niche}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">{t.description}</p>

                  <a
                    href={`${agency.bookingUrl}?template=${t.id}`}
                    className="group/btn inline-flex items-center justify-center gap-2 bg-white/[0.04] hover:bg-gradient-to-r hover:from-orange-500 hover:to-rose-500 border border-white/10 hover:border-transparent text-gray-300 hover:text-white text-sm font-bold py-3 rounded-xl transition-all duration-300"
                  >
                    Choose This Style
                    <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600 text-sm">
            Don't see your niche?{" "}
            <a href={agency.bookingUrl} className="text-orange-400 hover:text-orange-300 font-semibold transition-colors">
              Tell us what you need →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
