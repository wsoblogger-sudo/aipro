(function () {
  "use strict";

  const THEME_KEY = "aipg-theme";
  const html = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");

  function getTheme() {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === "light" || stored === "dark") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function setTheme(theme) {
    html.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
  }

  function toggleTheme() {
    const current = getTheme();
    const next = current === "dark" ? "light" : "dark";
    setTheme(next);
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }

  function animateCounter(element, start, end, duration) {
    const range = end - start;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(start + range * easeOutQuart(progress));

      element.textContent = formatNumber(value);

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
  }

  function formatNumber(num) {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
  }

  const observerOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-slide-up");

        if (entry.target.hasAttribute("data-counter")) {
          const target = parseInt(entry.target.getAttribute("data-counter"), 10);
          animateCounter(entry.target, 0, target, 2000);
        }

        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll(
    ".card, .feature-card, .software-card, .testimonial-card, [data-counter]"
  );
  animatedElements.forEach((el) => observer.observe(el));

  // Contact form is handled by Netlify Forms via normal POST submission.
  // We keep the form progressive-enhancement friendly (no JS required).

  const pricingToggles = document.querySelectorAll(".pricing-toggle");
  pricingToggles.forEach((toggle) => {
    toggle.addEventListener("change", (e) => {
      const isYearly = e.target.checked;
      const pricingSection = toggle.closest(".pricing-section")?.parentElement;
      if (!pricingSection) return;

      const prices = pricingSection.querySelectorAll(".price-amount");
      prices.forEach((price) => {
        const monthly = parseInt(price.getAttribute("data-monthly"), 10);
        const yearly = parseInt(price.getAttribute("data-yearly"), 10);
        price.textContent = String(isYearly ? yearly : monthly);
      });

      const periods = pricingSection.querySelectorAll(".pricing-period");
      periods.forEach((p) => {
        p.textContent = isYearly ? "/year" : "/month";
      });
    });
  });

  document.addEventListener("click", (e) => {
    const details = document.querySelectorAll(".nav-dropdown[open]");
    details.forEach((detail) => {
      if (!detail.contains(e.target)) {
        detail.removeAttribute("open");
      }
    });
  });

  const scrollIndicator = document.querySelector(".scroll-indicator");
  if (scrollIndicator) {
    scrollIndicator.addEventListener("click", () => {
      const nextSection = scrollIndicator.closest("section").nextElementSibling;
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // FAQ search
  const faqSearch = document.getElementById("faq-search");
  if (faqSearch) {
    faqSearch.addEventListener("input", (e) => {
      const query = (e.target.value || "").toLowerCase().trim();
      const items = document.querySelectorAll("[data-faq-item]");
      items.forEach((item) => {
        const text = item.getAttribute("data-faq-text") || "";
        item.style.display = !query || text.includes(query) ? "block" : "none";
      });
    });
  }
})();
