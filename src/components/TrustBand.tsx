import { stats } from "../data/agency";
import { Star } from "lucide-react";

const logos = [
  "Kakatiya Silks",
  "Vasavi Realty",
  "Irani Cafe HYD",
  "FitZone Studios",
  "Glow Skin Studio",
  "TechVista HYD",
  "Golkonda Exports",
  "Pearl City Dental",
  "Nizam Sweets",
  "HYD EdTech",
];

export default function TrustBand() {
  return (
    <section className="bg-[#0D0D14] border-y border-white/[0.06]">
      {/* Stats grid */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.06]">
          {stats.map((s, i) => (
            <div key={s.label} className={`text-center py-8 lg:py-0 ${i > 0 ? "pt-8 lg:pt-0" : ""}`}>
              <p className="text-4xl lg:text-5xl font-black text-white mb-2 tracking-tight">
                {s.value}
              </p>
              <p className="text-xs text-gray-500 uppercase tracking-[0.18em] font-semibold">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Brand scroll ticker */}
      <div className="border-t border-white/[0.06] py-5 overflow-hidden bg-[#0A0A0F]">
        <p className="text-center text-[10px] text-gray-600 uppercase tracking-[0.2em] font-semibold mb-5">
          Trusted by Hyderabad businesses
        </p>
        <div className="flex items-center gap-10 flex-wrap justify-center px-8">
          {logos.map((logo, i) => (
            <div key={logo} className="flex items-center gap-2 group">
              <Star size={9} className="text-orange-500/40 group-hover:text-orange-400 transition-colors" fill="currentColor" />
              <span className="text-gray-600 font-bold text-[13px] tracking-wide hover:text-gray-400 transition-colors whitespace-nowrap">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
