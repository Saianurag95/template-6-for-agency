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
