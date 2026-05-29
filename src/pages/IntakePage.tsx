import { useState } from "react";
import { Zap, ArrowRight, ArrowLeft, CheckCircle2, AlertCircle, ChevronRight, MapPin } from "lucide-react";
import { templateDemos, packages } from "../data/agency";
import { submitIntakeWithRazorpay } from "../payments/razorpay";

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
    if (isLast) {
      const selectedPkg = packages.find((pkg) => pkg.name === data.selectedPackage);
      submitIntakeWithRazorpay({
        templateId: data.selectedTemplateId || "AG-SOCIAL-06",
        formData: data as unknown as Record<string, unknown>,
        packageName: selectedPkg?.name || data.selectedPackage || "Starter",
        packagePrice: selectedPkg?.price,
        customerName: data.clientName,
        customerEmail: data.clientEmail,
        customerPhone: data.clientPhone,
        businessName: data.businessName,
      }).catch(() => setSubmitted(true));
      return;
    }
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
            ← Back to homepage
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

          {/* STEP 1 — Business Info */}
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

          {/* STEP 2 — Website Goals */}
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

          {/* STEP 3 — Template Selection */}
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

          {/* STEP 4 — Brand */}
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
                  <option value="No logo — use text only">No logo — use text only</option>
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

          {/* STEP 5 — Content */}
          {step === 4 && (
            <div className="flex flex-col gap-5">
              <SectionTitle sub="The more detail you provide here, the less back-and-forth we need.">
                Content Submission
              </SectionTitle>
              <Field label="Content Readiness" required>
                <select className={selectCls} value={data.hasContent} onChange={(e) => set("hasContent", e.target.value)}>
                  <option value="">Select status...</option>
                  <option value="All content ready">All content is ready to send</option>
                  <option value="Partially ready — will follow up">Partially ready — will follow up</option>
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

          {/* STEP 6 — Media */}
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
                  <option value="No media — use stock photos">No media available — use stock photos</option>
                  <option value="Have some media, rest use stock">Have some media, rest use stock</option>
                </select>
              </Field>
              <Field label="Media Notes">
                <textarea rows={3} className={inputCls} placeholder="Describe what media you have — photos, videos, product images..." value={data.mediaNotes} onChange={(e) => set("mediaNotes", e.target.value)} />
              </Field>
            </div>
          )}

          {/* STEP 7 — Credentials */}
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
                  <option value="Not sure — advise me">Not sure — advise me</option>
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

          {/* STEP 8 — SEO */}
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

          {/* STEP 9 — Package */}
          {step === 8 && (
            <div className="flex flex-col gap-5">
              <SectionTitle sub="Select the package that fits your project scope and budget.">
                Package Selection
              </SectionTitle>
              <div className="bg-amber-500/8 border border-amber-500/15 rounded-xl px-4 py-3 flex items-center gap-2">
                <span className="text-amber-400 text-xs font-semibold">Demo pricing. Add ₹500 to ₹900 if we arrange domain and hosting. Payment is online-only.</span>
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
                        {"hostingPrice" in pkg && <p className="text-amber-200 text-xs font-semibold mt-1">{pkg.hostingPrice}</p>}
                        <p className="text-gray-500 text-xs">{pkg.delivery} · {pkg.pages}</p>
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

          {/* STEP 10 — Payment */}
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
                      { m: "100% online payment", d: "Collected through Razorpay after intake submission" },
                      { m: "₹500-₹900 add-on", d: "Added only if we arrange domain and hosting" },
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
                    {["Razorpay online payment"].map((m) => (
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
                  <option value="Ready to pay online through Razorpay">Ready to pay online through Razorpay</option>
                  <option value="I understand only Razorpay online payment is accepted">I understand only Razorpay online payment is accepted</option>
                  <option value="Already completed online payment">Already completed online payment</option>
                </select>
              </Field>
            </div>
          )}

          {/* STEP 11 — Review */}
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
                  { label: "Phone", value: data.clientPhone || "—" },
                  { label: "Business Type", value: data.businessType },
                  { label: "Location", value: data.businessLocation || "—" },
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
                ].filter(i => i.value && i.value !== "—").map((item) => (
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
              ← Back to site
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
            {isLast ? "Pay with Razorpay" : "Save & Continue"}
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
