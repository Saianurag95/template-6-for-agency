import { ArrowRight, Play, TrendingUp, Users, Eye, MapPin } from "lucide-react";
import { agency, stats } from "../data/agency";

const mockCards = [
  {
    label: "Instagram Reel",
    stat: "+84K views",
    badge: "Trending",
    image: "https://images.pexels.com/photos/3621234/pexels-photo-3621234.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "from-rose-600/80 to-orange-500/60",
  },
  {
    label: "Meta Campaign",
    stat: "210K reach",
    badge: "Live",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "from-blue-600/80 to-cyan-500/60",
  },
  {
    label: "Website Launch",
    stat: "3x more leads",
    badge: "Live",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "from-emerald-600/80 to-teal-500/60",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0A0A0F] flex items-center overflow-hidden">
      {/* Grid bg */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-600/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-rose-600/6 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-orange-500/4 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-16 w-full grid lg:grid-cols-[1fr_480px] gap-12 xl:gap-20 items-center">
        {/* Left */}
        <div>
          {/* Location badge */}
          <div className="inline-flex items-center gap-2 border border-orange-500/20 bg-orange-500/5 rounded-full px-4 py-1.5 mb-8">
            <MapPin size={12} className="text-orange-400" />
            <span className="text-orange-300/80 text-xs font-semibold tracking-wide">
              Social Media + Websites — Hyderabad, India
            </span>
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse ml-1" />
          </div>

          <h1 className="font-black text-white leading-[1.02] tracking-tight mb-7">
            <span className="block text-5xl lg:text-6xl xl:text-7xl">Content,</span>
            <span className="block text-5xl lg:text-6xl xl:text-7xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-rose-500">
                campaigns
              </span>
            </span>
            <span className="block text-5xl lg:text-6xl xl:text-7xl">and websites</span>
            <span className="block text-4xl lg:text-5xl xl:text-6xl text-white/30 mt-1">
              that make brands visible.
            </span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-[520px]">
            We help Hyderabad businesses grow online — social strategy, scroll-stopping content, and conversion-ready websites delivered in days, not months.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href={agency.bookingUrl}
              className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-400 hover:to-rose-400 text-white font-bold px-8 py-4 rounded-full transition-all hover:shadow-2xl hover:shadow-orange-500/40 hover:-translate-y-0.5 text-[15px]"
            >
              Plan My Campaign
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#templates"
              className="group inline-flex items-center gap-3 text-gray-400 hover:text-white font-medium py-4 transition-colors text-[15px]"
            >
              <div className="w-11 h-11 border border-white/15 hover:border-white/30 rounded-full flex items-center justify-center transition-colors group-hover:bg-white/5">
                <Play size={14} className="ml-0.5 text-white" />
              </div>
              View Creative Demos
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-x-10 gap-y-4 mt-12 pt-10 border-t border-white/[0.06]">
            {[
              { icon: TrendingUp, value: "120+", label: "Brands Served" },
              { icon: Eye, value: "3.2M", label: "Impressions" },
              { icon: Users, value: "98%", label: "Client Retention" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label}>
                <div className="flex items-baseline gap-2 mb-0.5">
                  <span className="text-2xl font-black text-white">{value}</span>
                  <Icon size={13} className="text-orange-400 mb-0.5" />
                </div>
                <p className="text-[11px] text-gray-500 uppercase tracking-[0.14em] font-semibold">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — mock cards */}
        <div className="hidden lg:block relative">
          {/* Outer glow ring */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-rose-500/5 rounded-3xl blur-2xl" />

          <div className="relative flex flex-col gap-3.5">
            {mockCards.map((card, i) => (
              <div
                key={card.label}
                className={`group relative rounded-2xl overflow-hidden border border-white/8 hover:border-white/15 transition-all duration-300 hover:-translate-y-0.5 ${
                  i === 0 ? "" : i === 1 ? "ml-6" : "ml-3"
                }`}
              >
                <div className={`relative ${i === 2 ? "h-28" : "h-44"} overflow-hidden`}>
                  <img
                    src={card.image}
                    alt={card.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${card.color}`} />

                  {/* Top row */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="bg-black/40 backdrop-blur-md text-white/90 text-xs font-bold px-2.5 py-1 rounded-full border border-white/10">
                      {card.label}
                    </span>
                    <span className="bg-emerald-500/20 backdrop-blur-md text-emerald-300 text-[10px] font-bold px-2.5 py-1 rounded-full border border-emerald-500/20">
                      {card.badge}
                    </span>
                  </div>

                  {/* Bottom */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-white text-sm font-bold">{card.stat}</span>
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse" />
                      <span className="text-white/60 text-[11px]">Active</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Floating metric card */}
          <div className="absolute -bottom-5 -left-8 bg-[#111118] border border-white/10 rounded-2xl px-5 py-4 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <TrendingUp size={16} className="text-white" />
              </div>
              <div>
                <p className="text-white text-sm font-black">48hr average</p>
                <p className="text-gray-500 text-xs">site turnaround</p>
              </div>
            </div>
          </div>

          {/* Floating location card */}
          <div className="absolute -top-4 -right-4 bg-[#111118] border border-white/10 rounded-xl px-4 py-2.5 shadow-xl">
            <div className="flex items-center gap-2">
              <MapPin size={12} className="text-orange-400" />
              <span className="text-gray-300 text-xs font-semibold">Hyderabad, India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A0A0F] to-transparent pointer-events-none" />
    </section>
  );
}
