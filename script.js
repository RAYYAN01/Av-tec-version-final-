const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu]");
const nav = document.querySelector("[data-nav]");
const reveals = document.querySelectorAll(".reveal");
const countUps = document.querySelectorAll("[data-count-up]");
const quoteForm = document.querySelector(".quote-form");
const formNote = document.querySelector("[data-form-note]");
const chatbot = document.querySelector("[data-chatbot]");
const chatToggle = document.querySelector("[data-chat-toggle]");
const chatClose = document.querySelector("[data-chat-close]");
const chatForm = document.querySelector("[data-chat-form]");
const chatBody = document.querySelector("[data-chat-body]");
const gallery = document.querySelector("[data-gallery]");
const galleryTrack = document.querySelector("[data-gallery-track]");
const galleryPrev = document.querySelector("[data-gallery-prev]");
const galleryNext = document.querySelector("[data-gallery-next]");
const boxGrids = document.querySelectorAll("[data-boxes]");
const backToTop = document.querySelector("[data-back-to-top]");

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 16);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const boxColors = [
  "rgb(125 211 252)",
  "rgb(249 168 212)",
  "rgb(134 239 172)",
  "rgb(253 224 71)",
  "rgb(252 165 165)",
  "rgb(216 180 254)",
  "rgb(147 197 253)",
  "rgb(165 180 252)",
  "rgb(196 181 253)",
];

boxGrids.forEach((grid) => {
  const fragment = document.createDocumentFragment();
  const totalCells = 24 * 18;

  for (let index = 0; index < totalCells; index += 1) {
    const cell = document.createElement("span");
    cell.className = "box-cell";
    cell.style.setProperty("--box-hover", boxColors[index % boxColors.length]);
    fragment.append(cell);
  }

  grid.append(fragment);
});

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
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
    const heroReveals = [];
    const otherReveals = [];
    
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const isHeroContent = entry.target.closest('.hero-content');
        if (isHeroContent) {
          heroReveals.push(entry.target);
        } else {
          otherReveals.push(entry.target);
        }
      }
    });
    
    // Animate hero content with staggered delays
    heroReveals.forEach((element, index) => {
      window.setTimeout(() => {
        element.classList.add("is-visible");
        observer.unobserve(element);
      }, index * 150);
    });
    
    // Animate other content immediately
    otherReveals.forEach((element) => {
      element.classList.add("is-visible");
      observer.unobserve(element);
    });
  },
  { threshold: 0.12 }
);

reveals.forEach((element) => observer.observe(element));

const animateCount = (element) => {
  const target = Number(element.dataset.target);
  const suffix = element.dataset.suffix || "";
  const duration = 1400;
  const startTime = performance.now();
  const startValue = 1;

  const tick = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(startValue + (target - startValue) * eased);

    element.textContent = `${value}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
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

countUps.forEach((element) => countObserver.observe(element));

quoteForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(quoteForm);
  const name = formData.get("name") || "there";
  const button = quoteForm.querySelector("button[type='submit']");
  const originalText = button.textContent;
  
  try {
    // Show loading state
    button.textContent = "Submitting...";
    button.disabled = true;
    
    // Submit to Formspree
    const response = await fetch(quoteForm.action, {
      method: "POST",
      body: formData,
      headers: {
        "Accept": "application/json"
      }
    });
    
    if (response.ok) {
      formNote.textContent = `Thanks, ${name}! Your inquiry has been sent to AV-TEC's team.`;
      quoteForm.reset();
    } else {
      throw new Error("Submission failed");
    }
  } catch (error) {
    // If Formspree isn't set up yet, fall back to local feedback
    formNote.textContent = `Thanks, ${name}! Your inquiry is ready (Formspree not configured yet).`;
    quoteForm.reset();
  } finally {
    // Restore button
    button.textContent = originalText;
    button.disabled = false;
  }
});

const addMessage = (message, type = "bot") => {
  const bubble = document.createElement("p");
  bubble.className = type;
  bubble.textContent = message;
  chatBody.append(bubble);
  chatBody.scrollTop = chatBody.scrollHeight;
};

const assistantReply = (message) => {
  const text = message.toLowerCase();

  if (text.includes("led") || text.includes("wall") || text.includes("screen")) {
    return "For LED walls, share the venue, viewing distance, indoor/outdoor location, and screen size. The team can suggest panel size, processor, rigging, and operator needs.";
  }

  if (text.includes("sound") || text.includes("speaker") || text.includes("mic") || text.includes("audio")) {
    return "For sound, share the event type, audience count, room size, and whether it is speech, music, or both. AV-TEC can plan PA, microphones, monitors, mixer, and engineer.";
  }

  if (text.includes("light") || text.includes("stage")) {
    return "For lighting or stage, share the program flow and venue photos if available. The team can plan wash lights, moving heads, ambience, truss, and control.";
  }

  if (text.includes("price") || text.includes("quote") || text.includes("book") || text.includes("rent")) {
    return "For a quote, send your name, phone number, event date, city, audience size, and equipment needs. The booking form is the fastest way to share it.";
  }

  return "Share the event date, city, audience size, venue type, and the services you need. AV-TEC can prepare a practical setup recommendation.";
};

chatToggle.addEventListener("click", () => {
  chatbot.classList.toggle("is-open");
});

chatClose.addEventListener("click", () => {
  chatbot.classList.remove("is-open");
});

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = chatForm.querySelector("input");
  const message = input.value.trim();

  if (!message) return;

  addMessage(message, "user");
  input.value = "";

  window.setTimeout(() => {
    addMessage(assistantReply(message));
  }, 360);
});

if (gallery && galleryTrack) {
  const slides = [...galleryTrack.querySelectorAll(".gallery-item")];
  let activeSlide = 0;
  let galleryTimer;

  const updateGallery = () => {
    const slide = slides[activeSlide];
    const offset = slide.offsetLeft - galleryTrack.offsetLeft;
    galleryTrack.style.transform = `translateX(${-offset}px)`;

    slides.forEach((item, index) => {
      item.classList.toggle("is-active", index === activeSlide);
    });

  };

  const goToSlide = (direction) => {
    activeSlide = (activeSlide + direction + slides.length) % slides.length;
    updateGallery();
  };

  const startGallery = () => {
    window.clearInterval(galleryTimer);
    galleryTimer = window.setInterval(() => goToSlide(1), 2400);
  };

  const stopGallery = () => {
    window.clearInterval(galleryTimer);
  };

  galleryPrev.addEventListener("click", () => {
    goToSlide(-1);
    startGallery();
  });

  galleryNext.addEventListener("click", () => {
    goToSlide(1);
    startGallery();
  });

  gallery.addEventListener("mouseenter", startGallery);
  gallery.addEventListener("focusin", startGallery);
  gallery.addEventListener("focusout", startGallery);
  window.addEventListener("resize", updateGallery, { passive: true });

  const galleryObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startGallery();
        } else {
          stopGallery();
        }
      });
    },
    { threshold: 0.35 }
  );

  updateGallery();
  galleryObserver.observe(gallery);
}
