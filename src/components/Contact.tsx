import { useState } from "react";
import { Send, MapPin, Mail, Phone, ArrowRight } from "lucide-react";
import { agency } from "../data/agency";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", business: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-[#0A0A0F] py-28 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[420px_1fr] gap-16 xl:gap-24 items-start">

          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-orange-400 text-xs font-bold uppercase tracking-wider">Get in Touch</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-5">
              Quick question?{" "}
              <span className="text-white/25">Drop us a message.</span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-10">
              For full project details use our{" "}
              <a href="/intake" className="text-orange-400 hover:text-orange-300 font-semibold transition-colors">
                intake form
              </a>
              . This form is for quick enquiries only.
            </p>

            <div className="flex flex-col gap-4 mb-10">
              {[
                { icon: MapPin, label: "Location", value: agency.location },
                { icon: Mail, label: "Email", value: agency.email },
                { icon: Phone, label: "Phone / WhatsApp", value: agency.phone },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4 p-4 bg-[#0D0D14] border border-white/[0.06] rounded-xl">
                  <div className="w-10 h-10 bg-orange-500/10 border border-orange-500/15 rounded-xl flex items-center justify-center shrink-0">
                    <Icon size={15} className="text-orange-400" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-[10px] font-semibold uppercase tracking-wider mb-0.5">{label}</p>
                    <p className="text-white font-semibold text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={agency.bookingUrl}
              className="group inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-bold text-sm transition-colors"
            >
              Ready to start? Use the intake form
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right */}
          <div className="bg-[#0D0D14] border border-white/[0.06] rounded-2xl p-8">
            {submitted ? (
              <div className="text-center py-14">
                <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Send size={24} className="text-emerald-400" />
                </div>
                <h3 className="text-white font-black text-xl mb-2">Message sent!</h3>
                <p className="text-gray-400 text-sm">We'll be in touch within 24 hours.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", business: "", message: "" }); }}
                  className="mt-6 text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-2 block">Your Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Priya Reddy"
                      className="w-full bg-[#0A0A0F] border border-white/8 hover:border-white/15 rounded-xl px-4 py-3.5 text-white placeholder-gray-700 text-sm focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-2 block">Email Address</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="priya@business.com"
                      className="w-full bg-[#0A0A0F] border border-white/8 hover:border-white/15 rounded-xl px-4 py-3.5 text-white placeholder-gray-700 text-sm focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-2 block">Business Name</label>
                  <input
                    type="text"
                    value={form.business}
                    onChange={(e) => setForm({ ...form, business: e.target.value })}
                    placeholder="Your Business Name"
                    className="w-full bg-[#0A0A0F] border border-white/8 hover:border-white/15 rounded-xl px-4 py-3.5 text-white placeholder-gray-700 text-sm focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-2 block">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us what you need..."
                    className="w-full bg-[#0A0A0F] border border-white/8 hover:border-white/15 rounded-xl px-4 py-3.5 text-white placeholder-gray-700 text-sm focus:outline-none focus:border-orange-500 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-400 hover:to-rose-400 text-white font-bold py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-orange-500/25 text-sm"
                >
                  <Send size={14} />
                  Send Message
                </button>
                <p className="text-gray-600 text-xs text-center">
                  For a full project →{" "}
                  <a href="/intake" className="text-orange-400 hover:text-orange-300 font-semibold">use the intake form</a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
