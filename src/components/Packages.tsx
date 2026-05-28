import { CheckCircle2, ArrowRight, Zap, Info } from "lucide-react";
import { packages } from "../data/agency";

export default function Packages() {
  return (
    <section id="packages" className="bg-[#0D0D14] py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-1.5 mb-6">
            <Zap size={11} className="text-orange-400" fill="currentColor" />
            <span className="text-orange-400 text-xs font-bold uppercase tracking-wider">Website Packages</span>
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight tracking-tight mb-4">
            Simple, transparent pricing.
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto text-base leading-relaxed">
            Pick a package that fits your goal. Built for Hyderabad businesses that want results without the wait.
          </p>
        </div>

        {/* Demo pricing notice */}
        <div className="flex items-center justify-center gap-2 mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-500/8 border border-amber-500/15 rounded-xl px-4 py-2.5">
            <Info size={13} className="text-amber-400 shrink-0" />
            <span className="text-amber-400/80 text-xs font-medium">Demo pricing for reference only — final price confirmed during intake</span>
          </div>
        </div>

        {/* Package cards */}
        <div className="grid md:grid-cols-3 gap-5 items-stretch">
          {packages.map((pkg) => {
            const isPopular = pkg.tag === "Most Popular";
            const isBest = pkg.tag === "Best Value";
            return (
              <div
                key={pkg.name}
                className={`relative rounded-2xl flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                  isPopular
                    ? "bg-gradient-to-b from-orange-500 to-rose-600 shadow-2xl shadow-orange-500/30 scale-[1.02]"
                    : "bg-[#0A0A0F] border border-white/[0.07] hover:border-white/15 hover:shadow-xl hover:shadow-black/50"
                }`}
              >
                {pkg.tag && (
                  <div
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 text-[11px] font-black px-4 py-1.5 rounded-full whitespace-nowrap ${
                      isPopular ? "bg-white text-orange-600 shadow-lg" : "bg-rose-500 text-white"
                    }`}
                  >
                    {pkg.tag}
                  </div>
                )}

                <div className={`p-8 flex flex-col flex-1 ${pkg.tag ? "pt-10" : ""}`}>
                  {/* Plan name */}
                  <div className="mb-6">
                    <p className={`text-xs font-black uppercase tracking-[0.2em] mb-3 ${isPopular ? "text-orange-100/70" : "text-gray-500"}`}>
                      {pkg.name}
                    </p>
                    <div className="flex items-baseline gap-1.5 mb-1">
                      <span className={`text-4xl xl:text-5xl font-black tracking-tight ${isPopular ? "text-white" : "text-white"}`}>
                        {pkg.price}
                      </span>
                    </div>
                    <div className={`flex items-center gap-3 mt-3 text-sm flex-wrap ${isPopular ? "text-orange-100/70" : "text-gray-500"}`}>
                      <span className="font-semibold">{pkg.pages}</span>
                      <span className="w-1 h-1 rounded-full bg-current opacity-50" />
                      <span>{pkg.revisions}</span>
                      <span className="w-1 h-1 rounded-full bg-current opacity-50" />
                      <span className={`font-bold ${isPopular ? "text-white" : "text-orange-400"}`}>{pkg.delivery}</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className={`h-px mb-6 ${isPopular ? "bg-white/15" : "bg-white/[0.06]"}`} />

                  {/* Features */}
                  <div className="flex flex-col gap-3 flex-1 mb-8">
                    {pkg.features.map((f) => (
                      <div key={f} className="flex items-start gap-2.5">
                        <CheckCircle2
                          size={14}
                          className={`shrink-0 mt-0.5 ${isPopular ? "text-orange-200" : "text-emerald-400"}`}
                        />
                        <span className={`text-sm leading-snug ${isPopular ? "text-orange-50" : "text-gray-300"}`}>{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href="/intake"
                    className={`group inline-flex items-center justify-center gap-2 font-bold py-3.5 rounded-xl text-sm transition-all duration-200 ${
                      isPopular
                        ? "bg-white text-orange-600 hover:bg-orange-50 shadow-lg"
                        : "bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-400 hover:to-rose-400 text-white hover:shadow-lg hover:shadow-orange-500/20"
                    }`}
                  >
                    {pkg.cta}
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
