import { portfolioItems } from "../data/agency";
import { ArrowUpRight, TrendingUp } from "lucide-react";

const tagStyles: Record<string, string> = {
  "Social + Website": "bg-orange-500/10 text-orange-400 border-orange-500/20",
  "Website + SEO": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "Instagram + Content": "bg-rose-500/10 text-rose-400 border-rose-500/20",
  "Paid Ads + Website": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Social + Content": "bg-pink-500/10 text-pink-400 border-pink-500/20",
  "LinkedIn + Website": "bg-sky-500/10 text-sky-400 border-sky-500/20",
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#0D0D14] py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-6">
              <TrendingUp size={11} className="text-emerald-400" />
              <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">Real Results</span>
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.05] tracking-tight">
              Campaigns that{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-500">
                moved the needle
              </span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-xs text-sm leading-relaxed md:text-right">
            A selection of recent work across social media, content production and web design for Hyderabad brands.
          </p>
        </div>

        {/* Asymmetric portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolioItems.map((item) => (
            <div
              key={item.client}
              className="group relative bg-[#0A0A0F] rounded-2xl overflow-hidden border border-white/[0.06] hover:border-white/15 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/50"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.client}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/30 to-transparent" />

                {/* Niche chip */}
                <div className="absolute top-3 left-3">
                  <span className="bg-black/50 backdrop-blur-md text-white/70 text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/10">
                    {item.niche}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <p className="text-white font-bold text-[15px] leading-tight">{item.client}</p>
                  <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 group-hover:bg-orange-500/10 group-hover:border-orange-500/20 flex items-center justify-center transition-all shrink-0">
                    <ArrowUpRight size={13} className="text-gray-600 group-hover:text-orange-400 transition-colors" />
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.result}</p>
                <span className={`inline-flex text-xs font-bold px-3 py-1.5 rounded-full border ${tagStyles[item.type] ?? "bg-gray-700 text-gray-400 border-gray-600"}`}>
                  {item.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
