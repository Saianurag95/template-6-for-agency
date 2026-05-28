import { Zap, Instagram, Linkedin, Youtube, MapPin, ArrowRight } from "lucide-react";
import { agency } from "../data/agency";

export default function Footer() {
  return (
    <footer className="bg-[#0D0D14] border-t border-white/[0.06]">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="inline-flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-gradient-to-br from-orange-400 to-rose-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20">
                <Zap size={17} className="text-white" fill="white" />
              </div>
              <span className="text-white font-black text-lg">{agency.name}</span>
            </a>
            <div className="flex items-center gap-1.5 mb-4">
              <MapPin size={11} className="text-orange-400" />
              <span className="text-gray-500 text-xs font-semibold">{agency.location}</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Social media, content and conversion-ready websites for businesses that want to grow online.
            </p>
            <div className="flex items-center gap-2">
              {[
                { icon: Instagram, href: agency.instagramUrl, label: "Instagram" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Youtube, href: "#", label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 bg-white/[0.04] hover:bg-orange-500/10 border border-white/[0.07] hover:border-orange-500/25 rounded-xl flex items-center justify-center transition-all"
                >
                  <Icon size={14} className="text-gray-500 hover:text-orange-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-white font-bold text-sm mb-5">Services</p>
            <ul className="flex flex-col gap-3">
              {["Social Media Management", "Content Production", "Paid Campaigns", "Website Design"].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-gray-600 hover:text-gray-300 text-sm transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-white font-bold text-sm mb-5">Company</p>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Our Work", href: "#portfolio" },
                { label: "Pricing", href: "#packages" },
                { label: "Templates", href: "#templates" },
                { label: "How It Works", href: "#process" },
                { label: "Client Intake", href: "/intake" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-gray-600 hover:text-gray-300 text-sm transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA column */}
          <div>
            <p className="text-white font-bold text-sm mb-5">Start a Project</p>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Ready to grow your business online? Start with our intake form.
            </p>
            <a
              href={agency.bookingUrl}
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-rose-500 text-white text-sm font-bold px-5 py-3 rounded-full hover:from-orange-400 hover:to-rose-400 transition-all hover:shadow-lg hover:shadow-orange-500/25"
            >
              Get Started
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </a>

            <div className="mt-6 pt-6 border-t border-white/[0.06]">
              <p className="text-gray-600 text-[11px] mb-1">Contact us</p>
              <a href={`mailto:${agency.email}`} className="text-gray-500 hover:text-gray-300 text-xs transition-colors block mb-1">
                {agency.email}
              </a>
              <a href={`tel:${agency.phone}`} className="text-gray-500 hover:text-gray-300 text-xs transition-colors">
                {agency.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.04] py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-700 text-xs">
            © {new Date().getFullYear()} {agency.name} · {agency.location}. All rights reserved.
          </p>
          <p className="text-gray-800 text-[10px] font-mono">
            template: agency-social-media-01
          </p>
        </div>
      </div>
    </footer>
  );
}
