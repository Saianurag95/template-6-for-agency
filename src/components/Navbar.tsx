import { useState, useEffect } from "react";
import { Menu, X, Zap, ArrowRight } from "lucide-react";
import { agency } from "../data/agency";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#portfolio" },
    { label: "Templates", href: "#templates" },
    { label: "Pricing", href: "#packages" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0A0F]/95 backdrop-blur-xl shadow-2xl shadow-black/40 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-9 h-9 bg-gradient-to-br from-orange-400 via-orange-500 to-rose-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/30 group-hover:shadow-orange-500/50 transition-shadow">
            <Zap size={17} className="text-white" fill="white" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white font-black text-lg tracking-tight">{agency.name}</span>
            <span className="text-orange-400/60 text-[9px] font-semibold uppercase tracking-[0.2em]">Hyderabad</span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="relative text-gray-400 hover:text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-white/5 transition-all"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="text-gray-400 hover:text-white text-sm font-medium px-4 py-2 transition-colors"
          >
            Contact
          </a>
          <a
            href={agency.bookingUrl}
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-400 hover:to-rose-400 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all hover:shadow-lg hover:shadow-orange-500/40 hover:-translate-y-0.5"
          >
            Start Project
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0A0A0F]/98 backdrop-blur-xl border-t border-white/5 px-6 py-6 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-gray-300 hover:text-white text-base font-medium px-4 py-3 rounded-xl hover:bg-white/5 transition-all"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <div className="pt-4 mt-2 border-t border-white/5">
            <a
              href={agency.bookingUrl}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-rose-500 text-white text-sm font-bold px-5 py-3.5 rounded-full"
              onClick={() => setOpen(false)}
            >
              Start Project
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
