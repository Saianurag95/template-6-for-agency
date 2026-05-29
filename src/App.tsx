import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import IntakePage from "./pages/IntakePage";
import PaymentConfirmation from "./components/PaymentConfirmation";
import ScrollReveal from "./components/ScrollReveal";

export default function App() {
  const getPath = () => window.location.hash === "#payment-confirmation" ? "/payment-confirmation" : window.location.pathname;
  const [path, setPath] = useState(getPath());

  useEffect(() => {
    const onPop = () => setPath(getPath());
    window.addEventListener("popstate", onPop);
    window.addEventListener("hashchange", onPop);
    return () => {
      window.removeEventListener("popstate", onPop);
      window.removeEventListener("hashchange", onPop);
    };
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
  if (path === "/payment-confirmation") return <PaymentConfirmation />;
  return (
    <>
      <ScrollReveal />
      <HomePage />
    </>
  );
}
