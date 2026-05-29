type PaymentInput = {
  templateId: string;
  formData: Record<string, unknown>;
  packageName: string;
  packagePrice?: string;
  customerName?: string;
  customerEmail?: string;
  customerPhone?: string;
  businessName?: string;
};

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => { open: () => void };
  }
}

const STORAGE_KEY = "agency_template_payment_confirmation";
const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_test_REPLACE_WITH_YOUR_KEY_ID";
function domainHostingAddonFor(packageName: string) {
  const text = packageName.toLowerCase();
  if (text.includes("premium")) return 900;
  if (text.includes("business")) return 700;
  return 500;
}

function loadRazorpay() {
  return new Promise<boolean>((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

function parseBaseAmount(price?: string, packageName?: string) {
  const text = `${price || ""} ${packageName || ""}`.toLowerCase();
  const amounts = text.match(/\d[\d,]*/g)?.map((value) => Number(value.replace(/,/g, ""))) || [];
  const packageAmount = amounts.find((value) => value >= 6000);
  if (packageAmount) return packageAmount;
  if (text.includes("12")) return 12000;
  if (text.includes("8")) return 8000;
  return 6000;
}

function needsDomainHosting(formData: Record<string, unknown>) {
  const text = JSON.stringify(formData).toLowerCase();
  return [
    "need a new domain",
    "need to purchase a domain",
    "i need a domain",
    "need hosting",
    "include in the package pricing",
    "hosting arranged",
    "domain registered",
  ].some((phrase) => text.includes(phrase));
}

function confirmationUrl() {
  const base = import.meta.env.BASE_URL === "/" ? "" : import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}/#payment-confirmation`;
}

export function getPaymentConfirmation() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : null;
}

export async function submitIntakeWithRazorpay(input: PaymentInput) {
  const domainHostingAddon = needsDomainHosting(input.formData) ? domainHostingAddonFor(input.packageName) : 0;
  const amount = parseBaseAmount(input.packagePrice, input.packageName) + domainHostingAddon;
  const submission = {
    ...input,
    id: `WEB-${Date.now()}`,
    templateId: input.templateId,
    status: "pending_payment",
    amount,
    domainHostingAddon,
    currency: "INR",
    submittedAt: new Date().toISOString(),
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(submission));

  const loaded = await loadRazorpay();
  if (!loaded || !window.Razorpay) {
    alert("Razorpay could not load. Please check your internet connection and try again.");
    return;
  }

  if (RAZORPAY_KEY_ID.includes("REPLACE_WITH_YOUR_KEY_ID")) {
    alert("Add your Razorpay Key ID as VITE_RAZORPAY_KEY_ID before collecting real payments.");
    return;
  }

  const checkout = new window.Razorpay({
    key: RAZORPAY_KEY_ID,
    amount: amount * 100,
    currency: "INR",
    name: input.businessName || "Website Project",
    description: `${input.packageName} website package`,
    prefill: {
      name: input.customerName,
      email: input.customerEmail,
      contact: input.customerPhone,
    },
    notes: {
      template_id: input.templateId,
      package: input.packageName,
      submission_id: submission.id,
      domain_hosting_addon: domainHostingAddon,
    },
    handler: (response: { razorpay_payment_id: string }) => {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          ...submission,
          status: "paid",
          paidAt: new Date().toISOString(),
          razorpayPaymentId: response.razorpay_payment_id,
        })
      );
      window.location.href = confirmationUrl();
    },
  });

  checkout.open();
}
