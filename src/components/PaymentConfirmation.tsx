import { CheckCircle2, CreditCard, FileText } from "lucide-react";
import { getPaymentConfirmation } from "../payments/razorpay";

function formatValue(value: unknown): string {
  if (value === null || value === undefined || value === "") return "-";
  if (Array.isArray(value)) return value.join(", ");
  if (typeof value === "boolean") return value ? "Yes" : "No";
  if (typeof value === "object") return JSON.stringify(value);
  return String(value);
}

export default function PaymentConfirmation() {
  const details = getPaymentConfirmation();

  if (!details) {
    return (
      <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <FileText className="w-12 h-12 mx-auto mb-4 text-blue-300" />
          <h1 className="text-3xl font-bold mb-3">No payment details found</h1>
          <p className="text-slate-400 mb-6">Please submit the intake form first, then complete payment.</p>
          <a href="./intake" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 font-semibold">
            Go to Intake
          </a>
        </div>
      </main>
    );
  }

  const formData = details.formData || {};
  const entries = Object.entries(formData).filter(([, value]) => formatValue(value) !== "-");

  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-8">
          <CheckCircle2 className="w-12 h-12 text-emerald-300 mb-4" />
          <h1 className="text-4xl font-bold mb-3">Payment Confirmed</h1>
          <p className="text-slate-300">Your website intake and payment details have been saved for project reference.</p>
        </div>

        <section className="grid md:grid-cols-3 gap-4 mb-8">
          {[
            ["Submission ID", details.id],
            ["Payment ID", details.razorpayPaymentId],
            ["Amount Paid", `Rs ${details.amount}`],
            ["Package", details.packageName],
            ["Business", details.businessName],
            ["Template", details.templateId],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-widest text-slate-500 mb-2">{label}</p>
              <p className="font-semibold break-words">{formatValue(value)}</p>
            </div>
          ))}
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
          <div className="flex items-center gap-3 border-b border-white/10 p-5">
            <CreditCard className="w-5 h-5 text-blue-300" />
            <h2 className="font-bold text-xl">Submitted Project Details</h2>
          </div>
          <div className="divide-y divide-white/10">
            {entries.map(([key, value]) => (
              <div key={key} className="grid md:grid-cols-[240px_1fr] gap-3 p-4">
                <span className="text-slate-500 capitalize">{key.replace(/([A-Z])/g, " $1")}</span>
                <span className="text-slate-200 break-words">{formatValue(value)}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
