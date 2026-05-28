# Template 6 Complete Code Snapshot

Template ID: `AG-SOCIAL-06`

Source repo: `C:\Users\reddy\Documents\New project\template-6-for-agency`

GitHub repo: `Saianurag95/template-6-for-agency`

This snapshot exists so an AI agent or team member can understand and customize Template 6 quickly without rediscovering the codebase.

For fast client customization, edit `src/data/agency.ts` first. Only edit components or intake behavior when layout, behavior, or field changes are required.

## Fast Edit Map

1. `src/data/agency.ts` - brand, platforms, services, portfolio, demos, packages, process, testimonials, stats.
2. `src/pages/IntakePage.tsx` - intake fields, template IDs, validation rules.
3. `tailwind.config.js` - typography system.
4. `src/components/*` - section-level visual structure.

## Included Files

- `package.json`
- `vercel.json`
- `tailwind.config.js`
- `src/App.tsx`
- `src/data/agency.ts`
- `src/pages/HomePage.tsx`
- `src/pages/IntakePage.tsx`
- `src/components/Navbar.tsx`
- `src/components/Hero.tsx`
- `src/components/TrustBand.tsx`
- `src/components/Services.tsx`
- `src/components/Portfolio.tsx`
- `src/components/Templates.tsx`
- `src/components/Packages.tsx`
- `src/components/Process.tsx`
- `src/components/Testimonials.tsx`
- `src/components/BookingCTA.tsx`
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`
- `src/index.css`
- `src/main.tsx`

## package.json

`$ext
{
  "name": "vite-react-typescript-starter",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "typecheck": "tsc --noEmit -p tsconfig.app.json"
  },
  "dependencies": {
    "@supabase/supabase-js": "^2.57.4",
    "lucide-react": "^0.344.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.1",
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.18",
    "eslint": "^9.9.1",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.11",
    "globals": "^15.9.0",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.5.3",
    "typescript-eslint": "^8.3.0",
    "vite": "^5.4.2"
  }
}
```

## vercel.json

`$ext
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## tailwind.config.js

`$ext
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
```

## src/App.tsx

`$ext
import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import IntakePage from "./pages/IntakePage";

export default function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  // Intercept <a> clicks for SPA navigation
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (!href || href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel") || href.startsWith("#")) return;
      e.preventDefault();
      window.history.pushState(null, "", href);
      setPath(href.split("?")[0]);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  if (path === "/intake") return <IntakePage />;
  return <HomePage />;
}
```

## src/data/agency.ts

`$ext
// Replace all {{placeholder}} values with your agency's actual content

export const agency = {
  name: "VisualPulse",
  tagline: "Content, campaigns and websites that make brands visible.",
  location: "Hyderabad, India",
  offer: "Social Media + Websites",
  email: "hello@visualpulse.agency",
  phone: "+91 98490 00000",
  whatsappNumber: "919849000000",
  instagramUrl: "https://instagram.com/visualpulse",
  bookingUrl: "/intake",
  templateId: "agency-social-media-01",
};

export const stats = [
  { value: "120+", label: "Brands Launched" },
  { value: "3.2M", label: "Content Impressions" },
  { value: "98%", label: "Client Retention" },
  { value: "48hr", label: "Avg. Turnaround" },
];

export const platforms = [
  {
    name: "Instagram",
    description: "Feed design, reels strategy, story templates and growth campaigns.",
    icon: "Instagram",
  },
  {
    name: "TikTok",
    description: "Short-form content production, trending formats and paid amplification.",
    icon: "Video",
  },
  {
    name: "Facebook",
    description: "Page management, ad campaigns and community growth strategies.",
    icon: "Facebook",
  },
  {
    name: "LinkedIn",
    description: "B2B content, thought leadership posts and lead gen campaigns.",
    icon: "Linkedin",
  },
  {
    name: "YouTube",
    description: "Long-form scripts, thumbnails, SEO-optimised descriptions and shorts.",
    icon: "Youtube",
  },
  {
    name: "Websites",
    description: "Conversion-ready websites built fast, designed to perform and rank.",
    icon: "Globe",
  },
];

export const services = [
  {
    title: "Social Media Management",
    description: "Full-service monthly management across your chosen platforms. Strategy, content, scheduling and reporting.",
    deliverables: ["Content Calendar", "Monthly Strategy Call", "Analytics Report", "Community Management"],
  },
  {
    title: "Content Production",
    description: "High-quality visuals, reels, carousels and copy crafted to stop the scroll and drive action.",
    deliverables: ["Custom Graphics", "Reel Scripts & Editing", "Caption Copywriting", "Brand Style Guide"],
  },
  {
    title: "Paid Campaigns",
    description: "Performance-first ad campaigns on Meta, Instagram and Google that generate real leads and sales.",
    deliverables: ["Ad Creative", "Audience Targeting", "A/B Testing", "ROI Reporting"],
  },
  {
    title: "Website Design & Build",
    description: "Fast, beautiful websites built using proven templates, customised to your brand and live in days.",
    deliverables: ["Mobile-First Design", "SEO Foundation", "Lead Capture Forms", "Speed Optimisation"],
  },
];

export const portfolioItems = [
  {
    client: "Kakatiya Silks",
    niche: "Fashion & Textiles",
    result: "4.2x increase in Instagram reach over 60 days",
    type: "Social + Website",
    image: "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    client: "Irani Cafe HYD",
    niche: "Food & Beverage",
    result: "Website live in 1 day. 300+ monthly walk-ins from Google.",
    type: "Website + SEO",
    image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    client: "FitZone Studios",
    niche: "Health & Fitness",
    result: "Grew Instagram from 0 to 12,000 followers in 90 days.",
    type: "Instagram + Content",
    image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    client: "Vasavi Realty",
    niche: "Real Estate",
    result: "40 qualified leads/month from Meta ad campaigns.",
    type: "Paid Ads + Website",
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    client: "Glow Skin Studio",
    niche: "Beauty & Aesthetics",
    result: "Rebranded Instagram â€” 18% monthly follower growth.",
    type: "Social + Content",
    image: "https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    client: "TechVista HYD",
    niche: "Technology",
    result: "LinkedIn content strategy â€” 3x B2B inbound enquiries.",
    type: "LinkedIn + Website",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export const templateDemos = [
  {
    id: "AG-MOD-01",
    name: "Modern Business",
    niche: "Corporate / B2B",
    description: "Clean, professional layout for service businesses, agencies and consultants.",
    fit: "Business Package",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "AG-LOCAL-02",
    name: "Local Brand",
    niche: "Restaurants / Retail",
    description: "Warm, location-driven design for local shops, cafes and service providers.",
    fit: "Starter Package",
    image: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "AG-LEAD-03",
    name: "Lead Capture Pro",
    niche: "Real Estate / Finance",
    description: "Conversion-optimised layout built to generate qualified enquiries consistently.",
    fit: "Business Package",
    image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "AG-SEO-04",
    name: "SEO Foundation",
    niche: "Services / Healthcare",
    description: "Content-rich multi-page structure with built-in SEO signals and local targeting.",
    fit: "Premium Package",
    image: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "AG-CREATIVE-05",
    name: "Creative Studio",
    niche: "Design / Photography",
    description: "Bold, portfolio-forward layout for creative professionals and studios.",
    fit: "Business Package",
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "AG-SOCIAL-06",
    name: "Social Commerce",
    niche: "eCommerce / Fashion",
    description: "Product-forward design bridging social proof and online store performance.",
    fit: "Premium Package",
    image: "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export const packages = [
  {
    name: "Starter",
    price: "â‚¹6,000",
    delivery: "1 business day",
    pages: "3 Pages",
    revisions: "2 Revisions",
    tag: null,
    features: [
      "Home, About, Contact",
      "Mobile responsive design",
      "Contact form",
      "Basic SEO setup",
      "WhatsApp button",
      "Fast delivery",
    ],
    cta: "Get Starter Site",
  },
  {
    name: "Business",
    price: "â‚¹8,000",
    delivery: "2 business days",
    pages: "5 Pages",
    revisions: "3 Revisions",
    tag: "Most Popular",
    features: [
      "5 custom pages",
      "Mobile + tablet responsive",
      "Lead capture form",
      "Google Maps embed",
      "On-page SEO",
      "Social media links",
      "WhatsApp & call button",
    ],
    cta: "Get Business Site",
  },
  {
    name: "Premium Growth",
    price: "â‚¹12,000",
    delivery: "3 business days",
    pages: "8+ Pages",
    revisions: "5 Revisions",
    tag: "Best Value",
    features: [
      "8+ pages fully designed",
      "Advanced SEO structure",
      "Blog / news section",
      "Portfolio or gallery",
      "Multi-step contact form",
      "Speed & Core Web Vitals",
      "Analytics setup",
      "Priority support",
    ],
    cta: "Get Premium Site",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Submit Your Details",
    description: "Complete our structured intake form with your business info, goals, brand and content. Takes 10â€“15 minutes.",
  },
  {
    step: "02",
    title: "We Build Your Draft",
    description: "Our team customises your chosen template with your brand, content and structure. No guessing.",
  },
  {
    step: "03",
    title: "You Review & Request",
    description: "You receive a live preview link. Submit your revision notes and we apply changes same day.",
  },
  {
    step: "04",
    title: "Go Live",
    description: "We handle final QA, domain connection and launch. Your site is live and ready to drive results.",
  },
];

export const testimonials = [
  {
    name: "Priya Reddy",
    role: "Owner, Glow Skin Studio",
    quote: "I had a professional website and active Instagram within one week. The team understood my brand without lengthy calls.",
    avatar: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    name: "Kiran Kumar",
    role: "Director, TechVista HYD",
    quote: "We went from zero digital presence to consistent inbound leads. The LinkedIn strategy and new site made a real difference.",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    name: "Meera Joshi",
    role: "Founder, Irani Cafe HYD",
    quote: "Website was live in 24 hours. It looks better than places that spent 10x more. Highly recommended.",
    avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
];
```

## src/pages/HomePage.tsx

`$ext
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustBand from "../components/TrustBand";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Templates from "../components/Templates";
import Packages from "../components/Packages";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import BookingCTA from "../components/BookingCTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBand />
      <Services />
      <Portfolio />
      <Templates />
      <Packages />
      <Process />
      <Testimonials />
      <BookingCTA />
      <Contact />
      <Footer />
    </>
  );
}
```

## src/pages/IntakePage.tsx

`$ext
import { useState } from "react";
import { Zap, ArrowRight, ArrowLeft, CheckCircle2, AlertCircle, ChevronRight, MapPin } from "lucide-react";
import { templateDemos, packages } from "../data/agency";

const STEPS = [
  "Business Info",
  "Website Goals",
  "Template",
  "Brand",
  "Content",
  "Media",
  "Credentials",
  "SEO",
  "Package",
  "Payment",
  "Review",
];

type FormData = {
  businessName: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  businessType: string;
  businessLocation: string;
  websiteGoal: string;
  targetAudience: string;
  existingWebsite: string;
  expectedFeatures: string[];
  selectedTemplateId: string;
  selectedTemplateName: string;
  templateNotes: string;
  brandColors: string;
  brandFonts: string;
  logoReady: string;
  brandStyle: string;
  aboutText: string;
  servicesText: string;
  contactDetails: string;
  hasContent: string;
  mediaConfirmation: string;
  mediaNotes: string;
  domainStatus: string;
  domainName: string;
  hostingNotes: string;
  primaryKeywords: string;
  location: string;
  competitors: string;
  selectedPackage: string;
  paymentConfirmed: string;
};

const INITIAL: FormData = {
  businessName: "", clientName: "", clientEmail: "", clientPhone: "", businessType: "", businessLocation: "",
  websiteGoal: "", targetAudience: "", existingWebsite: "", expectedFeatures: [],
  selectedTemplateId: "", selectedTemplateName: "", templateNotes: "",
  brandColors: "", brandFonts: "", logoReady: "", brandStyle: "",
  aboutText: "", servicesText: "", contactDetails: "", hasContent: "",
  mediaConfirmation: "", mediaNotes: "",
  domainStatus: "", domainName: "", hostingNotes: "",
  primaryKeywords: "", location: "", competitors: "",
  selectedPackage: "",
  paymentConfirmed: "",
};

const FEATURES = [
  "Contact Form", "WhatsApp Button", "Google Maps", "Gallery / Portfolio",
  "Blog / News", "Testimonials", "FAQ Section", "Booking / Appointment",
  "Online Shop", "Live Chat",
];

function getMissingFields(step: number, data: FormData): string[] {
  const missing: string[] = [];
  if (step === 0) {
    if (!data.businessName) missing.push("Business Name");
    if (!data.clientName) missing.push("Your Name");
    if (!data.clientEmail) missing.push("Email Address");
    if (!data.businessType) missing.push("Business Type");
  }
  if (step === 1) {
    if (!data.websiteGoal) missing.push("Website Goal");
    if (!data.targetAudience) missing.push("Target Audience");
  }
  if (step === 2) {
    if (!data.selectedTemplateId) missing.push("Template Selection");
  }
  if (step === 3) {
    if (!data.brandColors) missing.push("Brand Colors");
    if (!data.logoReady) missing.push("Logo Status");
  }
  if (step === 4) {
    if (!data.hasContent) missing.push("Content Readiness");
  }
  if (step === 5) {
    if (!data.mediaConfirmation) missing.push("Media Upload Confirmation");
  }
  if (step === 6) {
    if (!data.domainStatus) missing.push("Domain Status");
  }
  if (step === 7) {
    if (!data.primaryKeywords) missing.push("Primary Keywords");
    if (!data.location) missing.push("Target Location");
  }
  if (step === 8) {
    if (!data.selectedPackage) missing.push("Package Selection");
  }
  if (step === 9) {
    if (!data.paymentConfirmed) missing.push("Payment Confirmation");
  }
  return missing;
}

const inputCls = "w-full bg-[#0A0A0F] border border-white/8 hover:border-white/15 rounded-xl px-4 py-3.5 text-white placeholder-gray-700 text-sm focus:outline-none focus:border-orange-500 transition-colors";
const selectCls = "w-full bg-[#0A0A0F] border border-white/8 hover:border-white/15 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-orange-500 transition-colors appearance-none";

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-6 pb-5 border-b border-white/[0.06]">
      <h2 className="text-xl font-black text-white mb-1">{children}</h2>
      {sub && <p className="text-gray-500 text-sm">{sub}</p>}
    </div>
  );
}

function Field({ label, children, required }: { label: string; children: React.ReactNode; required?: boolean }) {
  return (
    <div>
      <label className="text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-2 block">
        {label}
        {required && <span className="text-orange-400 ml-1">*</span>}
      </label>
      {children}
    </div>
  );
}

export default function IntakePage() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(INITIAL);
  const [attempted, setAttempted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const missing = getMissingFields(step, data);
  const isLast = step === STEPS.length - 1;

  const set = (key: keyof FormData, value: string | string[]) =>
    setData((d) => ({ ...d, [key]: value }));

  const toggleFeature = (f: string) => {
    const arr = data.expectedFeatures.includes(f)
      ? data.expectedFeatures.filter((x) => x !== f)
      : [...data.expectedFeatures, f];
    set("expectedFeatures", arr);
  };

  const handleNext = () => {
    if (isLast) { setSubmitted(true); return; }
    if (missing.length > 0) { setAttempted(true); return; }
    setAttempted(false);
    setStep((s) => s + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setAttempted(false);
    setStep((s) => Math.max(0, s - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center px-6 py-16">
        <div className="max-w-lg w-full text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-emerald-500/10">
            <CheckCircle2 size={36} className="text-emerald-400" />
          </div>
          <h2 className="text-3xl font-black text-white mb-3">Intake Submitted!</h2>
          <p className="text-gray-400 text-base leading-relaxed mb-2">
            Thank you, <strong className="text-white">{data.clientName}</strong>. We've received all your project details for{" "}
            <strong className="text-white">{data.businessName}</strong>.
          </p>
          <p className="text-gray-500 text-sm mb-8">
            We'll contact you at <span className="text-gray-300">{data.clientEmail}</span> within 24 hours to confirm details and begin your project.
          </p>

          <div className="bg-[#0D0D14] border border-white/[0.06] rounded-2xl p-6 text-left mb-8">
            <p className="text-gray-600 text-[10px] font-bold uppercase tracking-wider mb-4">Project Summary</p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Business", value: data.businessName },
                { label: "Template", value: `${data.selectedTemplateName} (${data.selectedTemplateId})` },
                { label: "Package", value: data.selectedPackage },
                { label: "Website Goal", value: data.websiteGoal },
                { label: "Media Status", value: data.mediaConfirmation },
                { label: "Payment", value: data.paymentConfirmed },
              ].map((item) => item.value ? (
                <div key={item.label}>
                  <p className="text-gray-600 text-xs mb-0.5">{item.label}</p>
                  <p className="text-white text-sm font-semibold">{item.value}</p>
                </div>
              ) : null)}
            </div>
          </div>

          <a href="/" className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold transition-colors text-sm">
            â† Back to homepage
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0F] py-10 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <a href="/" className="inline-flex items-center gap-2.5 mb-8">
            <div className="w-9 h-9 bg-gradient-to-br from-orange-400 to-rose-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20">
              <Zap size={17} className="text-white" fill="white" />
            </div>
            <div>
              <span className="text-white font-black text-lg leading-none block">VisualPulse</span>
              <span className="text-gray-600 text-[10px]">Client Intake Form</span>
            </div>
          </a>

          <div className="flex items-center justify-between mb-2">
            <div>
              <h1 className="text-2xl font-black text-white">Project Intake</h1>
              <div className="flex items-center gap-1.5 mt-1">
                <MapPin size={11} className="text-orange-400" />
                <span className="text-gray-500 text-xs">Hyderabad, India</span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-gray-500 text-sm font-mono">{step + 1} / {STEPS.length}</span>
              <p className="text-gray-700 text-xs">{STEPS[step]}</p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full h-1.5 bg-[#1a1a24] rounded-full overflow-hidden mt-4 mb-5">
            <div
              className="h-full bg-gradient-to-r from-orange-500 to-rose-500 rounded-full transition-all duration-500"
              style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
            />
          </div>

          {/* Step pills */}
          <div className="flex flex-wrap gap-1.5">
            {STEPS.map((s, i) => (
              <button
                key={s}
                onClick={() => i < step && setStep(i)}
                className={`text-[10px] font-bold px-3 py-1.5 rounded-full transition-all flex items-center gap-1 ${
                  i === step
                    ? "bg-orange-500 text-white"
                    : i < step
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 cursor-pointer hover:bg-emerald-500/15"
                    : "bg-white/[0.04] text-gray-700 cursor-default"
                }`}
              >
                {i < step && <CheckCircle2 size={9} />}
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-[#0D0D14] border border-white/[0.06] rounded-2xl p-7 mb-5">

          {/* STEP 1 â€” Business Info */}
          {step === 0 && (
            <div className="flex flex-col gap-5">
              <SectionTitle sub="Tell us about your business so we can tailor everything to your brand.">
                Business Information
              </SectionTitle>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Business Name" required>
                  <input className={inputCls} placeholder="e.g. Irani Cafe HYD" value={data.businessName} onChange={(e) => set("businessName", e.target.value)} />
                </Field>
                <Field label="Your Name" required>
                  <input className={inputCls} placeholder="e.g. Priya Reddy" value={data.clientName} onChange={(e) => set("clientName", e.target.value)} />
                </Field>
                <Field label="Email Address" required>
                  <input type="email" className={inputCls} placeholder="priya@business.com" value={data.clientEmail} onChange={(e) => set("clientEmail", e.target.value)} />
                </Field>
                <Field label="Phone / WhatsApp">
                  <input className={inputCls} placeholder="+91 98490 00000" value={data.clientPhone} onChange={(e) => set("clientPhone", e.target.value)} />
                </Field>
                <Field label="Business Type" required>
                  <select className={selectCls} value={data.businessType} onChange={(e) => set("businessType", e.target.value)}>
                    <option value="">Select type...</option>
                    {["Restaurant / Cafe", "Retail Shop", "Healthcare / Clinic", "Real Estate", "Education", "Fashion / Textiles", "Fitness / Wellness", "Technology", "Professional Services", "Other"].map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Business Location">
                  <input className={inputCls} placeholder="e.g. Banjara Hills, Hyderabad" value={data.businessLocation} onChange={(e) => set("businessLocation", e.target.value)} />
                </Field>
              </div>
            </div>
          )}

          {/* STEP 2 â€” Website Goals */}
          {step === 1 && (
            <div className="flex flex-col gap-5">
              <SectionTitle sub="Understanding your goals helps us build a site that actually delivers results.">
                Website Requirements
              </SectionTitle>
              <Field label="Primary Website Goal" required>
                <select className={selectCls} value={data.websiteGoal} onChange={(e) => set("websiteGoal", e.target.value)}>
                  <option value="">Select goal...</option>
                  {["Generate Leads", "Showcase Portfolio", "Sell Products Online", "Build Brand Awareness", "Provide Information", "Accept Bookings / Appointments", "Other"].map((g) => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
              </Field>
              <Field label="Target Audience" required>
                <input className={inputCls} placeholder="Who are your ideal customers? e.g. young professionals in Hyderabad" value={data.targetAudience} onChange={(e) => set("targetAudience", e.target.value)} />
              </Field>
              <Field label="Existing Website (if any)">
                <input className={inputCls} placeholder="https://..." value={data.existingWebsite} onChange={(e) => set("existingWebsite", e.target.value)} />
              </Field>
              <Field label="Required Features (select all that apply)">
                <div className="flex flex-wrap gap-2 mt-1">
                  {FEATURES.map((f) => (
                    <button
                      key={f}
                      type="button"
                      onClick={() => toggleFeature(f)}
                      className={`text-xs font-bold px-3 py-2 rounded-full border transition-all ${
                        data.expectedFeatures.includes(f)
                          ? "bg-orange-500 border-orange-500 text-white"
                          : "bg-white/[0.04] border-white/10 text-gray-400 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </Field>
            </div>
          )}

          {/* STEP 3 â€” Template Selection */}
          {step === 2 && (
            <div className="flex flex-col gap-5">
              <SectionTitle sub="Choose the template that best fits your business style and category.">
                Template Selection
              </SectionTitle>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {templateDemos.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => { set("selectedTemplateId", t.id); set("selectedTemplateName", t.name); }}
                    className={`text-left rounded-xl border overflow-hidden transition-all duration-200 ${
                      data.selectedTemplateId === t.id
                        ? "border-orange-500 ring-2 ring-orange-500/20 shadow-lg shadow-orange-500/10"
                        : "border-white/[0.07] hover:border-white/20 bg-[#0A0A0F]"
                    }`}
                  >
                    <div className="relative h-28 overflow-hidden">
                      <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      {data.selectedTemplateId === t.id && (
                        <div className="absolute top-2 right-2 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                          <CheckCircle2 size={13} className="text-white" />
                        </div>
                      )}
                      <div className="absolute bottom-2 left-2">
                        <span className="text-white/50 text-[10px] font-mono font-bold">{t.id}</span>
                      </div>
                    </div>
                    <div className="p-3 bg-[#0A0A0F]">
                      <p className="text-white font-bold text-sm">{t.name}</p>
                      <p className="text-gray-600 text-xs">{t.niche}</p>
                    </div>
                  </button>
                ))}
              </div>

              {data.selectedTemplateId && (
                <div className="bg-orange-500/8 border border-orange-500/20 rounded-xl p-4 flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-orange-400 shrink-0" />
                  <div>
                    <p className="text-orange-300 text-sm font-bold">{data.selectedTemplateName}</p>
                    <p className="text-orange-400/50 text-[11px] font-mono">{data.selectedTemplateId}</p>
                  </div>
                </div>
              )}

              <Field label="Template Notes (optional)">
                <textarea rows={3} className={inputCls} placeholder="Any specific customisation requests for this template..." value={data.templateNotes} onChange={(e) => set("templateNotes", e.target.value)} />
              </Field>
            </div>
          )}

          {/* STEP 4 â€” Brand */}
          {step === 3 && (
            <div className="flex flex-col gap-5">
              <SectionTitle sub="We use your brand assets to make the site feel authentically yours.">
                Brand Information
              </SectionTitle>
              <Field label="Brand Colors" required>
                <input className={inputCls} placeholder="e.g. #FF5733 (orange), #1A1A2E (dark navy), or describe them" value={data.brandColors} onChange={(e) => set("brandColors", e.target.value)} />
              </Field>
              <Field label="Preferred Fonts (optional)">
                <input className={inputCls} placeholder="e.g. Inter, Montserrat, or 'clean / modern'" value={data.brandFonts} onChange={(e) => set("brandFonts", e.target.value)} />
              </Field>
              <Field label="Logo Status" required>
                <select className={selectCls} value={data.logoReady} onChange={(e) => set("logoReady", e.target.value)}>
                  <option value="">Select status...</option>
                  <option value="Ready to upload">Ready to upload</option>
                  <option value="Will provide after intake">Will provide after intake</option>
                  <option value="Need logo designed (add-on)">Need logo designed (add-on)</option>
                  <option value="No logo â€” use text only">No logo â€” use text only</option>
                </select>
              </Field>
              <Field label="Brand Style Preference">
                <div className="flex flex-wrap gap-2 mt-1">
                  {["Minimal & Clean", "Bold & Energetic", "Elegant & Luxurious", "Friendly & Approachable", "Professional & Corporate", "Creative & Artistic"].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => set("brandStyle", s)}
                      className={`text-xs font-bold px-3 py-2 rounded-full border transition-all ${
                        data.brandStyle === s
                          ? "bg-orange-500 border-orange-500 text-white"
                          : "bg-white/[0.04] border-white/10 text-gray-400 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </Field>
            </div>
          )}

          {/* STEP 5 â€” Content */}
          {step === 4 && (
            <div className="flex flex-col gap-5">
              <SectionTitle sub="The more detail you provide here, the less back-and-forth we need.">
                Content Submission
              </SectionTitle>
              <Field label="Content Readiness" required>
                <select className={selectCls} value={data.hasContent} onChange={(e) => set("hasContent", e.target.value)}>
                  <option value="">Select status...</option>
                  <option value="All content ready">All content is ready to send</option>
                  <option value="Partially ready â€” will follow up">Partially ready â€” will follow up</option>
                  <option value="Need help writing content (add-on)">Need help writing content (add-on)</option>
                  <option value="Use template placeholder copy for now">Use template copy for now</option>
                </select>
              </Field>
              <Field label="About Your Business">
                <textarea rows={4} className={inputCls} placeholder="Who you are, what you do, why customers choose you..." value={data.aboutText} onChange={(e) => set("aboutText", e.target.value)} />
              </Field>
              <Field label="Services / Products List">
                <textarea rows={4} className={inputCls} placeholder="List your main services or products with short descriptions..." value={data.servicesText} onChange={(e) => set("servicesText", e.target.value)} />
              </Field>
              <Field label="Contact Details for Website">
                <textarea rows={3} className={inputCls} placeholder="Phone, WhatsApp, email, address, opening hours..." value={data.contactDetails} onChange={(e) => set("contactDetails", e.target.value)} />
              </Field>
            </div>
          )}

          {/* STEP 6 â€” Media */}
          {step === 5 && (
            <div className="flex flex-col gap-5">
              <SectionTitle sub="We'll send a Google Drive link after intake for file uploads.">
                Media Uploads
              </SectionTitle>
              <div className="bg-blue-500/8 border border-blue-500/15 rounded-xl p-4">
                <p className="text-blue-400 text-sm font-semibold mb-1">How media upload works</p>
                <p className="text-gray-500 text-xs leading-relaxed">
                  After you submit this form, we'll send you a Google Drive link or WhatsApp message for uploading photos, logos, videos and any other assets.
                </p>
              </div>
              <Field label="Media Upload Confirmation" required>
                <select className={selectCls} value={data.mediaConfirmation} onChange={(e) => set("mediaConfirmation", e.target.value)}>
                  <option value="">Select status...</option>
                  <option value="Will upload via Google Drive">Will upload via Google Drive link</option>
                  <option value="Will send via WhatsApp">Will send via WhatsApp</option>
                  <option value="No media â€” use stock photos">No media available â€” use stock photos</option>
                  <option value="Have some media, rest use stock">Have some media, rest use stock</option>
                </select>
              </Field>
              <Field label="Media Notes">
                <textarea rows={3} className={inputCls} placeholder="Describe what media you have â€” photos, videos, product images..." value={data.mediaNotes} onChange={(e) => set("mediaNotes", e.target.value)} />
              </Field>
            </div>
          )}

          {/* STEP 7 â€” Credentials */}
          {step === 6 && (
            <div className="flex flex-col gap-5">
              <SectionTitle sub="Domain and hosting details so we can plan your go-live.">
                Domain & Credentials
              </SectionTitle>
              <Field label="Domain Status" required>
                <select className={selectCls} value={data.domainStatus} onChange={(e) => set("domainStatus", e.target.value)}>
                  <option value="">Select status...</option>
                  <option value="I already have a domain">I already have a domain</option>
                  <option value="Need to purchase a domain (add-on)">Need to purchase a domain (add-on)</option>
                  <option value="Use a subdomain for now">Use a subdomain for now</option>
                  <option value="Not sure â€” advise me">Not sure â€” advise me</option>
                </select>
              </Field>
              <Field label="Domain Name (if owned)">
                <input className={inputCls} placeholder="yourbusiness.com" value={data.domainName} onChange={(e) => set("domainName", e.target.value)} />
              </Field>
              <Field label="Hosting / Access Notes">
                <textarea rows={3} className={inputCls} placeholder="Any notes about existing hosting, cPanel access, registrar details..." value={data.hostingNotes} onChange={(e) => set("hostingNotes", e.target.value)} />
              </Field>
            </div>
          )}

          {/* STEP 8 â€” SEO */}
          {step === 7 && (
            <div className="flex flex-col gap-5">
              <SectionTitle sub="We use this to set up your on-page SEO signals during the build.">
                SEO Information
              </SectionTitle>
              <Field label="Primary Keywords" required>
                <input className={inputCls} placeholder="e.g. best cafe Hyderabad, coffee shop Banjara Hills" value={data.primaryKeywords} onChange={(e) => set("primaryKeywords", e.target.value)} />
              </Field>
              <Field label="Target Location" required>
                <input className={inputCls} placeholder="e.g. Hyderabad, Banjara Hills, Telangana" value={data.location} onChange={(e) => set("location", e.target.value)} />
              </Field>
              <Field label="Main Competitors (optional)">
                <textarea rows={3} className={inputCls} placeholder="List competitor websites or businesses you want to outrank..." value={data.competitors} onChange={(e) => set("competitors", e.target.value)} />
              </Field>
            </div>
          )}

          {/* STEP 9 â€” Package */}
          {step === 8 && (
            <div className="flex flex-col gap-5">
              <SectionTitle sub="Select the package that fits your project scope and budget.">
                Package Selection
              </SectionTitle>
              <div className="bg-amber-500/8 border border-amber-500/15 rounded-xl px-4 py-3 flex items-center gap-2">
                <span className="text-amber-400 text-xs font-semibold">Demo pricing for reference â€” final price confirmed before build starts.</span>
              </div>
              <div className="flex flex-col gap-3">
                {packages.map((pkg) => (
                  <button
                    key={pkg.name}
                    type="button"
                    onClick={() => set("selectedPackage", pkg.name)}
                    className={`text-left rounded-xl border p-5 transition-all ${
                      data.selectedPackage === pkg.name
                        ? "border-orange-500 bg-orange-500/5 ring-2 ring-orange-500/15 shadow-lg shadow-orange-500/10"
                        : "border-white/[0.07] bg-[#0A0A0F] hover:border-white/15"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                          data.selectedPackage === pkg.name ? "border-orange-500 bg-orange-500" : "border-gray-700"
                        }`}>
                          {data.selectedPackage === pkg.name && <div className="w-2 h-2 bg-white rounded-full" />}
                        </div>
                        <div>
                          <p className="text-white font-bold text-[15px]">{pkg.name}</p>
                          {pkg.tag && <span className="text-xs text-orange-400 font-semibold">{pkg.tag}</span>}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-black text-xl tracking-tight">{pkg.price}</p>
                        <p className="text-gray-500 text-xs">{pkg.delivery} Â· {pkg.pages}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1.5 pt-3 border-t border-white/[0.04]">
                      {pkg.features.slice(0, 4).map((f) => (
                        <span key={f} className="text-gray-500 text-xs flex items-center gap-1">
                          <ChevronRight size={10} className="text-orange-400" /> {f}
                        </span>
                      ))}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 10 â€” Payment */}
          {step === 9 && (
            <div className="flex flex-col gap-5">
              <SectionTitle sub="Review payment structure and confirm your intent to proceed.">
                Payment & Milestones
              </SectionTitle>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-[#0A0A0F] border border-white/[0.06] rounded-xl p-5">
                  <p className="text-white font-bold text-sm mb-4">Payment Structure</p>
                  <div className="flex flex-col gap-3">
                    {[
                      { m: "50% advance", d: "Before build starts â€” confirms your slot" },
                      { m: "50% on delivery", d: "Before domain goes live / files handed over" },
                    ].map((item) => (
                      <div key={item.m} className="flex items-start gap-2.5">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 shrink-0" />
                        <div>
                          <p className="text-white text-sm font-semibold">{item.m}</p>
                          <p className="text-gray-600 text-xs">{item.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#0A0A0F] border border-white/[0.06] rounded-xl p-5">
                  <p className="text-white font-bold text-sm mb-4">Payment Methods</p>
                  <div className="flex flex-col gap-2">
                    {["UPI / GPay", "PhonePe", "Bank Transfer (NEFT / IMPS)", "Cash (in-person, Hyderabad)"].map((m) => (
                      <div key={m} className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                        <span className="text-gray-400 text-xs">{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Field label="Payment Confirmation" required>
                <select className={selectCls} value={data.paymentConfirmed} onChange={(e) => set("paymentConfirmed", e.target.value)}>
                  <option value="">Select...</option>
                  <option value="Ready to pay 50% advance now">Ready to pay 50% advance now</option>
                  <option value="Need payment details first">Need payment account details first</option>
                  <option value="Already paid">Already made payment</option>
                  <option value="Discuss on call first">Discuss payment on a call first</option>
                </select>
              </Field>
            </div>
          )}

          {/* STEP 11 â€” Review */}
          {step === 10 && (
            <div className="flex flex-col gap-5">
              <SectionTitle sub="Review all your submitted details before final submission.">
                Final Review
              </SectionTitle>

              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { label: "Business Name", value: data.businessName },
                  { label: "Client Name", value: data.clientName },
                  { label: "Email", value: data.clientEmail },
                  { label: "Phone", value: data.clientPhone || "â€”" },
                  { label: "Business Type", value: data.businessType },
                  { label: "Location", value: data.businessLocation || "â€”" },
                  { label: "Website Goal", value: data.websiteGoal },
                  { label: "Target Audience", value: data.targetAudience },
                  { label: "Template", value: data.selectedTemplateName },
                  { label: "Template ID", value: data.selectedTemplateId },
                  { label: "Package", value: data.selectedPackage },
                  { label: "Brand Colors", value: data.brandColors },
                  { label: "Logo Status", value: data.logoReady },
                  { label: "Content Status", value: data.hasContent },
                  { label: "Media Status", value: data.mediaConfirmation },
                  { label: "Domain Status", value: data.domainStatus },
                  { label: "Keywords", value: data.primaryKeywords },
                  { label: "SEO Location", value: data.location },
                  { label: "Payment", value: data.paymentConfirmed },
                ].filter(i => i.value && i.value !== "â€”").map((item) => (
                  <div key={item.label} className="bg-[#0A0A0F] border border-white/[0.06] rounded-xl p-4">
                    <p className="text-gray-600 text-[10px] uppercase tracking-wider font-semibold mb-1">{item.label}</p>
                    <p className="text-white text-sm font-medium break-words">{item.value}</p>
                  </div>
                ))}
              </div>

              {data.expectedFeatures.length > 0 && (
                <div className="bg-[#0A0A0F] border border-white/[0.06] rounded-xl p-4">
                  <p className="text-gray-600 text-[10px] uppercase tracking-wider font-semibold mb-3">Requested Features</p>
                  <div className="flex flex-wrap gap-2">
                    {data.expectedFeatures.map((f) => (
                      <span key={f} className="bg-orange-500/10 text-orange-400 border border-orange-500/20 text-xs font-bold px-3 py-1.5 rounded-full">{f}</span>
                    ))}
                  </div>
                </div>
              )}

              {data.templateNotes && (
                <div className="bg-[#0A0A0F] border border-white/[0.06] rounded-xl p-4">
                  <p className="text-gray-600 text-[10px] uppercase tracking-wider font-semibold mb-1">Template Notes</p>
                  <p className="text-gray-300 text-sm">{data.templateNotes}</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Validation warning */}
        {attempted && missing.length > 0 && (
          <div className="mb-5">
            <div className="bg-red-500/8 border border-red-500/20 rounded-xl p-4 flex items-start gap-3">
              <AlertCircle size={17} className="text-red-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-red-400 text-sm font-bold mb-1.5">Complete required fields to continue:</p>
                <ul className="space-y-0.5">
                  {missing.map((m) => (
                    <li key={m} className="text-red-400/70 text-sm flex items-center gap-1.5">
                      <span className="w-1 h-1 bg-red-400/40 rounded-full" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between pb-10">
          {step > 0 ? (
            <button
              onClick={handleBack}
              className="inline-flex items-center gap-2 text-gray-500 hover:text-white font-semibold text-sm transition-colors px-4 py-2.5 rounded-xl hover:bg-white/5"
            >
              <ArrowLeft size={15} />
              Back
            </button>
          ) : (
            <a href="/" className="text-gray-600 hover:text-gray-400 text-sm transition-colors px-4 py-2.5">
              â† Back to site
            </a>
          )}

          <button
            onClick={handleNext}
            className={`group inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-full text-sm transition-all ${
              missing.length === 0
                ? "bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-400 hover:to-rose-400 text-white hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-0.5"
                : "bg-white/[0.05] text-gray-600 cursor-not-allowed"
            }`}
          >
            {isLast ? "Submit Intake" : "Save & Continue"}
            {isLast
              ? <CheckCircle2 size={15} className="shrink-0" />
              : <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform shrink-0" />
            }
          </button>
        </div>
      </div>
    </div>
  );
}
```

## src/components/Navbar.tsx

`$ext
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
```

## src/components/Hero.tsx

`$ext
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
              Social Media + Websites â€” Hyderabad, India
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
            We help Hyderabad businesses grow online â€” social strategy, scroll-stopping content, and conversion-ready websites delivered in days, not months.
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

        {/* Right â€” mock cards */}
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
```

## src/components/TrustBand.tsx

`$ext
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
```

## src/components/Services.tsx

`$ext
import { Instagram, Video, Facebook, Linkedin, Youtube, Globe, CheckCircle2, ArrowRight } from "lucide-react";
import { platforms, services, agency } from "../data/agency";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Instagram,
  Video,
  Facebook,
  Linkedin,
  Youtube,
  Globe,
};

const platformGradients = [
  { card: "hover:border-rose-500/30", icon: "from-rose-500 to-orange-500", text: "text-rose-400" },
  { card: "hover:border-cyan-500/30", icon: "from-cyan-500 to-blue-500", text: "text-cyan-400" },
  { card: "hover:border-blue-500/30", icon: "from-blue-600 to-blue-400", text: "text-blue-400" },
  { card: "hover:border-sky-500/30", icon: "from-sky-500 to-cyan-400", text: "text-sky-400" },
  { card: "hover:border-red-500/30", icon: "from-red-600 to-rose-400", text: "text-red-400" },
  { card: "hover:border-emerald-500/30", icon: "from-emerald-500 to-teal-400", text: "text-emerald-400" },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#0A0A0F] py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-orange-400 text-xs font-bold uppercase tracking-wider">What We Do</span>
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.05] tracking-tight">
              Every platform.<br />
              Every format.<br />
              <span className="text-white/25">One agency.</span>
            </h2>
          </div>
          <div className="lg:max-w-sm">
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              From Instagram reels to full websites â€” we handle your entire digital presence so you can focus on running your business in Hyderabad.
            </p>
            <a
              href={agency.bookingUrl}
              className="group inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-bold text-sm transition-colors"
            >
              Start your project
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Platform cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-20">
          {platforms.map((p, i) => {
            const Icon = iconMap[p.icon];
            const style = platformGradients[i];
            return (
              <div
                key={p.name}
                className={`group relative bg-[#0D0D14] border border-white/[0.06] ${style.card} rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
              >
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute top-0 left-0 w-32 h-32 bg-gradient-to-br ${style.icon} opacity-5 rounded-full -translate-x-8 -translate-y-8 blur-xl`} />
                </div>

                <div className={`relative w-10 h-10 bg-gradient-to-br ${style.icon} rounded-xl flex items-center justify-center mb-5 shadow-lg`}>
                  <Icon size={18} className="text-white" />
                </div>
                <h3 className="text-white font-bold text-[15px] mb-2">{p.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.description}</p>
              </div>
            );
          })}
        </div>

        {/* Service deep-dive */}
        <div className="relative">
          <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="grid md:grid-cols-2 gap-4 pt-10">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="group bg-[#0D0D14] border border-white/[0.06] hover:border-orange-500/20 rounded-2xl p-8 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500/20 to-rose-500/10 border border-orange-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-orange-400 font-black text-xs tabular-nums">0{i + 1}</span>
                  </div>
                  <h3 className="text-white font-bold text-lg">{s.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{s.description}</p>
                <div className="grid grid-cols-2 gap-2.5">
                  {s.deliverables.map((d) => (
                    <div key={d} className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                      <span className="text-gray-300 text-xs font-medium">{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

## src/components/Portfolio.tsx

`$ext
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
          {portfolioItems.map((item, i) => (
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
```

## src/components/Templates.tsx

`$ext
import { ExternalLink, ArrowRight, Layers } from "lucide-react";
import { templateDemos, agency } from "../data/agency";

const fitStyles: Record<string, { badge: string; dot: string }> = {
  "Starter Package": { badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", dot: "bg-emerald-400" },
  "Business Package": { badge: "bg-orange-500/10 text-orange-400 border-orange-500/20", dot: "bg-orange-400" },
  "Premium Package": { badge: "bg-rose-500/10 text-rose-400 border-rose-500/20", dot: "bg-rose-400" },
};

export default function Templates() {
  return (
    <section id="templates" className="bg-[#0A0A0F] py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <Layers size={11} className="text-blue-400" />
            <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">Website Templates</span>
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.05] tracking-tight mb-5">
            Choose your style.{" "}
            <span className="text-white/25">We build it.</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Browse our template library. Pick the one that fits your business â€” we customise it with your brand, content and goals. Live in days.
          </p>
        </div>

        {/* Template grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {templateDemos.map((t) => {
            const fit = fitStyles[t.fit] ?? { badge: "bg-gray-700 text-gray-400 border-gray-600", dot: "bg-gray-400" };
            return (
              <div
                key={t.id}
                className="group flex flex-col bg-[#0D0D14] border border-white/[0.06] hover:border-orange-500/25 rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-orange-500/5"
              >
                {/* Preview */}
                <div className="relative h-48 overflow-hidden shrink-0">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D14]/95 via-[#0D0D14]/20 to-transparent" />

                  {/* ID badge */}
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg px-2.5 py-1">
                    <span className="text-white/50 text-[10px] font-mono font-bold tracking-wider">{t.id}</span>
                  </div>

                  {/* Hover reveal */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2">
                      <ExternalLink size={13} className="text-white" />
                      <span className="text-white text-xs font-bold">Preview Demo</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3 className="text-white font-bold text-[15px]">{t.name}</h3>
                    <div className={`flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full border whitespace-nowrap shrink-0 ${fit.badge}`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${fit.dot}`} />
                      {t.fit.replace(" Package", "")}
                    </div>
                  </div>
                  <p className="text-gray-600 text-[11px] font-semibold uppercase tracking-wider mb-3">{t.niche}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">{t.description}</p>

                  <a
                    href={`${agency.bookingUrl}?template=${t.id}`}
                    className="group/btn inline-flex items-center justify-center gap-2 bg-white/[0.04] hover:bg-gradient-to-r hover:from-orange-500 hover:to-rose-500 border border-white/10 hover:border-transparent text-gray-300 hover:text-white text-sm font-bold py-3 rounded-xl transition-all duration-300"
                  >
                    Choose This Style
                    <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600 text-sm">
            Don't see your niche?{" "}
            <a href={agency.bookingUrl} className="text-orange-400 hover:text-orange-300 font-semibold transition-colors">
              Tell us what you need â†’
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
```

## src/components/Packages.tsx

`$ext
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
            <span className="text-amber-400/80 text-xs font-medium">Demo pricing for reference only â€” final price confirmed during intake</span>
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
```

## src/components/Process.tsx

`$ext
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
              {" "}â€” in days.
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-md">
              We've removed all the back-and-forth that makes web projects drag on. Our structured intake process means we build right the first time â€” every time.
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

          {/* Right â€” Timeline */}
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
```

## src/components/Testimonials.tsx

`$ext
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
```

## src/components/BookingCTA.tsx

`$ext
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
              <span className="text-white/70 text-xs font-semibold">Hyderabad, India â€” Taking new clients</span>
              <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full animate-pulse ml-1" />
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
              Let's build your<br />digital presence.
            </h2>

            <p className="text-orange-100/80 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
              Fill out our intake form, choose your template and package â€” and we'll have your site live within days.
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
              No commitment required Â· Response within 2 hours Â· Hyderabad based team
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

## src/components/Contact.tsx

`$ext
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
                  For a full project â†’{" "}
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
```

## src/components/Footer.tsx

`$ext
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
            Â© {new Date().getFullYear()} {agency.name} Â· {agency.location}. All rights reserved.
          </p>
          <p className="text-gray-800 text-[10px] font-mono">
            template: agency-social-media-01
          </p>
        </div>
      </div>
    </footer>
  );
}
```

## src/index.css

`$ext
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
    -webkit-text-size-adjust: 100%;
  }

  body {
    background-color: #0A0A0F;
    color: #ffffff;
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  * {
    box-sizing: border-box;
  }

  ::selection {
    background: rgba(249, 115, 22, 0.3);
    color: #ffffff;
  }

  :focus-visible {
    outline: 2px solid rgba(249, 115, 22, 0.6);
    outline-offset: 2px;
  }
}

@layer utilities {
  /* Hide scrollbar utility */
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }

  /* Gradient text utility */
  .text-gradient-orange {
    @apply text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-500;
  }
}
```

## src/main.tsx

`$ext
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```
