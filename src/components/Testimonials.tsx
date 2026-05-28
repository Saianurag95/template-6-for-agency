import { Quote, Star } from "lucide-react";
import { testimonials } from "../data/agency";

export default function Testimonials() {
  return (
    <section className="bg-[#0D0D14] py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-1.5 mb-6">
            <Star size={11} className="text-yellow-400" fill="currentColor" />
            <span className="text-yellow-400 text-xs font-bold uppercase tracking-wider">Client Stories</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight">
            Words from the people we build for.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`relative rounded-2xl p-8 border flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                i === 1
                  ? "bg-gradient-to-b from-orange-500 to-rose-600 border-transparent shadow-2xl shadow-orange-500/25 scale-[1.02]"
                  : "bg-[#0A0A0F] border-white/[0.06] hover:border-white/15"
              }`}
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    size={13}
                    className={i === 1 ? "text-orange-200" : "text-orange-400"}
                    fill="currentColor"
                  />
                ))}
              </div>

              <Quote
                size={28}
                className={`mb-4 ${i === 1 ? "text-white/20" : "text-orange-500/15"}`}
                fill="currentColor"
              />

              <p className={`text-[15px] leading-relaxed flex-1 mb-8 ${i === 1 ? "text-orange-50" : "text-gray-300"}`}>
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className={`w-11 h-11 rounded-full object-cover border-2 ${i === 1 ? "border-white/20" : "border-white/10"}`}
                />
                <div>
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className={`text-xs ${i === 1 ? "text-orange-100/60" : "text-gray-500"}`}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
