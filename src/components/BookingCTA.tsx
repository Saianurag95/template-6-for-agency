import { ArrowRight, MessageCircle, MapPin } from "lucide-react";
import { agency } from "../data/agency";

export default function BookingCTA() {
  return (
    <section className="bg-[#0A0A0F] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-orange-500 to-rose-600" />

          {/* Noise overlay */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`,
              backgroundSize: "48px 48px",
            }}
          />

          {/* Glow spots */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-rose-900/30 rounded-full blur-2xl" />

          <div className="relative px-10 py-16 md:px-16 md:py-20 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
              <MapPin size={12} className="text-white/70" />
              <span className="text-white/70 text-xs font-semibold">Hyderabad, India — Taking new clients</span>
              <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full animate-pulse ml-1" />
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
              Let's build your<br />digital presence.
            </h2>

            <p className="text-orange-100/80 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
              Fill out our intake form, choose your template and package — and we'll have your site live within days.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={agency.bookingUrl}
                className="group inline-flex items-center gap-2.5 bg-white text-orange-600 font-black px-8 py-4 rounded-full hover:bg-orange-50 transition-all hover:shadow-2xl text-[15px]"
              >
                Start Project Intake
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={`https://wa.me/${agency.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full border border-white/20 hover:border-white/30 transition-all text-[15px]"
              >
                <MessageCircle size={17} />
                WhatsApp Us
              </a>
            </div>

            {/* Sub note */}
            <p className="text-white/40 text-xs mt-10">
              No commitment required · Response within 2 hours · Hyderabad based team
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
