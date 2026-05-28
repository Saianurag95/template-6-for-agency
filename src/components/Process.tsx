import { ArrowRight, CheckCircle2 } from "lucide-react";
import { processSteps, agency } from "../data/agency";

export default function Process() {
  return (
    <section id="process" className="bg-[#0A0A0F] py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_560px] gap-16 xl:gap-24 items-center">

          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-teal-400 text-xs font-bold uppercase tracking-wider">How It Works</span>
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
              From intake to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-500">
                live site
              </span>
              {" "}— in days.
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-md">
              We've removed all the back-and-forth that makes web projects drag on. Our structured intake process means we build right the first time — every time.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={agency.bookingUrl}
                className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-400 hover:to-rose-400 text-white font-bold px-7 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-orange-500/30 text-[15px]"
              >
                Start Project Intake
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#packages"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white font-medium px-6 py-4 border border-white/10 hover:border-white/20 rounded-full transition-all text-[15px]"
              >
                View Pricing
              </a>
            </div>
          </div>

          {/* Right — Timeline */}
          <div className="relative">
            {/* Vertical connector */}
            <div className="absolute left-[19px] top-12 bottom-12 w-px bg-gradient-to-b from-orange-500/50 via-orange-500/20 to-transparent" />

            <div className="flex flex-col gap-5">
              {processSteps.map((step, i) => (
                <div key={step.step} className="pl-14 relative group">
                  {/* Step circle */}
                  <div className={`absolute left-0 top-1 w-10 h-10 rounded-full border-2 flex items-center justify-center font-black text-xs transition-all duration-300 ${
                    i === 0
                      ? "bg-gradient-to-br from-orange-500 to-rose-500 border-transparent text-white shadow-lg shadow-orange-500/30"
                      : i < 2
                      ? "bg-[#0D0D14] border-orange-500/40 text-gray-500 group-hover:border-orange-500/70"
                      : "bg-[#0D0D14] border-white/10 text-gray-600 group-hover:border-white/20"
                  }`}>
                    {i === 0 ? <CheckCircle2 size={16} className="text-white" /> : step.step}
                  </div>

                  <div className={`bg-[#0D0D14] border rounded-2xl p-6 transition-all duration-300 ${
                    i === 0
                      ? "border-orange-500/20 shadow-lg shadow-orange-500/5"
                      : "border-white/[0.06] group-hover:border-white/12"
                  }`}>
                    <h3 className="text-white font-bold text-base mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
