const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

const header = $("[data-header]");
const menuButton = $("[data-menu]");
const nav = $("[data-nav]");
const backToTop = $("[data-back-to-top]");
const quoteForm = $(".quote-form");
const formNote = $("[data-form-note]");
const chatbot = $("[data-chatbot]");
const chatToggle = $("[data-chat-toggle]");
const chatClose = $("[data-chat-close]");
const chatForm = $("[data-chat-form]");
const chatBody = $("[data-chat-body]");
const gallery = $("[data-gallery]");
const galleryTrack = $("[data-gallery-track]");
const galleryPrev = $("[data-gallery-prev]");
const galleryNext = $("[data-gallery-next]");

let ticking = false;
const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 16);
};
window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(() => { updateHeader(); ticking = false; });
    ticking = true;
  }
}, { passive: true });
updateHeader();

if (backToTop) {
  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  });
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
  { threshold: 0.12 }
);
$$(".reveal").forEach((el) => observer.observe(el));

const animateCount = (element) => {
  const target = Number(element.dataset.target);
  const suffix = element.dataset.suffix || "";
  const duration = 1400;
  const startTime = performance.now();
  const startValue = 1;

  const tick = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const value = Math.round(startValue + (target - startValue) * (1 - Math.pow(1 - progress, 3)));
    element.textContent = `${value}${suffix}`;
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};

const countObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        countObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.45 }
);
$$("[data-count-up]").forEach((el) => countObserver.observe(el));

if (quoteForm) {
  quoteForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(quoteForm);
    const name = formData.get("name") || "there";
    const button = quoteForm.querySelector("button[type='submit']");
    const originalText = button.textContent;

    try {
      button.textContent = "Submitting...";
      button.disabled = true;
      const response = await fetch(quoteForm.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      });
      if (response.ok) {
        formNote.textContent = `Thanks, ${name}! Your inquiry has been sent to AV-TEC's team.`;
        quoteForm.reset();
      } else throw new Error("Submission failed");
    } catch {
      formNote.textContent = `Thanks, ${name}! Your inquiry is ready (Formspree not configured yet).`;
      quoteForm.reset();
    } finally {
      button.textContent = originalText;
      button.disabled = false;
    }
  });
}

const addMessage = (message, type = "bot") => {
  const bubble = document.createElement("p");
  bubble.className = type;
  bubble.textContent = message;
  chatBody.append(bubble);
  chatBody.scrollTop = chatBody.scrollHeight;
};

const assistantReply = (message) => {
  const text = message.toLowerCase();
  if (text.includes("led") || text.includes("wall") || text.includes("screen"))
    return "For LED walls, share the venue, viewing distance, indoor/outdoor location, and screen size. The team can suggest panel size, processor, rigging, and operator needs.";
  if (text.includes("sound") || text.includes("speaker") || text.includes("mic") || text.includes("audio"))
    return "For sound, share the event type, audience count, room size, and whether it is speech, music, or both. AV-TEC can plan PA, microphones, monitors, mixer, and engineer.";
  if (text.includes("light") || text.includes("stage"))
    return "For lighting or stage, share the program flow and venue photos if available. The team can plan wash lights, moving heads, ambience, truss, and control.";
  if (text.includes("price") || text.includes("quote") || text.includes("book") || text.includes("rent"))
    return "For a quote, send your name, phone number, event date, city, audience size, and equipment needs. The booking form is the fastest way to share it.";
  return "Share the event date, city, audience size, venue type, and the services you need. AV-TEC can prepare a practical setup recommendation.";
};

chatToggle.addEventListener("click", () => chatbot.classList.toggle("is-open"));
chatClose.addEventListener("click", () => chatbot.classList.remove("is-open"));

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = chatForm.querySelector("input");
  const message = input.value.trim();
  if (!message) return;
  addMessage(message, "user");
  input.value = "";
  setTimeout(() => addMessage(assistantReply(message)), 360);
});

if (gallery && galleryTrack) {
  const slides = $$(".gallery-item", galleryTrack);
  let activeSlide = 0;
  let galleryTimer;

  const updateGallery = () => {
    const slide = slides[activeSlide];
    const offset = slide.offsetLeft - galleryTrack.offsetLeft;
    galleryTrack.style.transform = `translateX(${-offset}px)`;
    slides.forEach((item, index) => item.classList.toggle("is-active", index === activeSlide));
  };

  const goToSlide = (direction) => {
    activeSlide = (activeSlide + direction + slides.length) % slides.length;
    updateGallery();
  };

  const startGallery = () => { clearInterval(galleryTimer); galleryTimer = setInterval(() => goToSlide(1), 2400); };
  const stopGallery = () => clearInterval(galleryTimer);

  galleryPrev.addEventListener("click", () => { goToSlide(-1); startGallery(); });
  galleryNext.addEventListener("click", () => { goToSlide(1); startGallery(); });

  gallery.addEventListener("mouseenter", startGallery);
  gallery.addEventListener("focusin", startGallery);
  gallery.addEventListener("focusout", startGallery);
  window.addEventListener("resize", updateGallery, { passive: true });

  const galleryObserver = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting ? startGallery() : stopGallery()),
    { threshold: 0.35 }
  );

  updateGallery();
  galleryObserver.observe(gallery);
}
