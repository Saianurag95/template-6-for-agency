import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    if (window.location.pathname === "/intake") return;

    const revealNodes = new Set<Element>();
    document.querySelectorAll("section").forEach((section) => revealNodes.add(section));
    document.querySelectorAll("section .grid > *, section [class*='space-y-'] > *").forEach((item) => {
      revealNodes.add(item);
    });

    const nodes = Array.from(revealNodes).filter((node) => !node.closest("[data-no-reveal]")) as HTMLElement[];
    nodes.forEach((node, index) => {
      node.dataset.scrollReveal = "true";
      node.style.transitionDelay = `${Math.min((index % 8) * 60, 420)}ms`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return null;
}
