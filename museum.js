/**
 * THE DESIGN MUSEUM — museum.js
 * Sp Designs Portfolio
 * Interactive museum experience
 */

/* ================================================
   PROJECT DATA
   ================================================ */
/* ================================================
   FEATURED PROJECTS — shown in Exhibition Rooms
   12 total, 3 per gallery room
   ================================================ */
const PROJECTS = [
  // Gallery I — Logo Gallery (indices 0-2)
  {
    title: "Brand Mark I",
    category: "Logo Design",
    description:
      "A clean, versatile logo mark crafted to capture the essence of the brand — timeless, bold, and immediately recognisable. Delivered across all required formats and size variants.",
    tools: ["Adobe Illustrator", "Brand Strategy", "Typography"],
    bgClass: "branding-1",
    image: "img/l15.jpeg",
  },
  {
    title: "Brand Mark II",
    category: "Logo Design",
    description:
      "A distinctive logo identity with a strong typographic foundation. Designed for multi-platform use across digital and print, ensuring consistency at every touchpoint.",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Mockup Design"],
    bgClass: "branding-2",
    image: "img/l10.png",
  },
  {
    title: "Brand Mark III",
    category: "Logo Design",
    description:
      "A symbol-forward logo concept balancing visual simplicity with deeper meaning. The mark works independently and alongside the wordmark for maximum flexibility.",
    tools: ["Adobe Illustrator", "Vector Art", "Brand Guidelines"],
    bgClass: "branding-3",
    image: "img/l11.png",
  },
  // Gallery II — Branding Room (indices 3-5)
  {
    title: "Brand Identity I",
    category: "Brand Identity",
    description:
      "A full brand identity system — encompassing logo, colour palette, typography, stationery, and brand guidelines. Designed to communicate purpose and personality at every level.",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Brand Strategy"],
    bgClass: "branding-1",
    image: "img/b1.png",
  },
  {
    title: "Brand Identity II",
    category: "Brand Identity",
    description:
      "A premium brand identity built for a business with bold ambitions. The system balances structure with creativity — professional, memorable, and built to last.",
    tools: ["Adobe Illustrator", "Figma", "Brand Guidelines"],
    bgClass: "branding-2",
    image: "img/b2.png",
  },
  {
    title: "Brand Identity III",
    category: "Brand Identity",
    description:
      "An expressive branding project with strong visual personality. Colour, form, and typography work together to tell a compelling story that resonates with the target audience.",
    tools: ["Adobe Photoshop", "Adobe Illustrator", "Visual Strategy"],
    bgClass: "branding-3",
    image: "img/b3.png",
  },
  // Gallery III — Flyer Room (indices 6-8)
  {
    title: "Event Flyer I",
    category: "Flyer Design",
    description:
      "A high-impact event flyer designed to stop the scroll. Bold typography, vibrant composition, and clear hierarchy drive attention to the key message and call to action.",
    tools: ["Adobe Photoshop", "Canva Pro", "Typography"],
    bgClass: "poster-1",
    image: "img/fl1.png",
  },
  {
    title: "Event Flyer II",
    category: "Flyer Design",
    description:
      "A promotional flyer crafted for maximum visual impact across digital and print channels. The layout balances aesthetic appeal with functional clarity to drive engagement.",
    tools: ["Adobe Photoshop", "Adobe Illustrator", "Print Design"],
    bgClass: "poster-2",
    image: "img/fl2.png",
  },
  {
    title: "Event Flyer III",
    category: "Flyer Design",
    description:
      "A creative flyer design with a strong conceptual direction. The visual language communicates the mood and energy of the event before a single word is read.",
    tools: ["Canva Pro", "Adobe Photoshop", "Content Design"],
    bgClass: "poster-3",
    image: "img/fl3.png",
  },
  // Gallery IV — Publications Room (indices 9-11)
  {
    title: "Book Cover I",
    category: "Publication Design",
    description:
      "A book cover design that commands attention on the shelf. The composition, colour, and typography work together to communicate the tone and genre before the reader opens a single page.",
    tools: ["Adobe Photoshop", "Adobe Illustrator", "Publication Design"],
    bgClass: "creative-1",
    image: "img/c1.png",
  },
  {
    title: "Book Cover II",
    category: "Publication Design",
    description:
      "A refined cover design with strong conceptual underpinning. Every element — image, type, layout — was considered in relation to the story within, creating an irresistible first impression.",
    tools: ["Adobe Photoshop", "Typography", "Art Direction"],
    bgClass: "creative-2",
    image: "img/c2.png",
  },
  {
    title: "Book Cover III",
    category: "Publication Design",
    description:
      "An editorial cover that merges striking visual storytelling with purposeful design. The result is a cover that feels both artistic and commercially compelling.",
    tools: ["Adobe Photoshop", "Adobe Illustrator", "Editorial Design"],
    bgClass: "creative-3",
    image: "img/c3.png",
  },
];

/* ================================================
   FULL GALLERY — all 43 images for the Archive
   category: "branding" | "posters" | "publications" | "illustrations"
   ================================================ */
const GALLERY_ALL = [
  // Logos
  { src: "img/l1.png",    category: "branding",      label: "Logo Design" },
  { src: "img/l2.png",    category: "branding",      label: "Logo Design" },
  { src: "img/l3.png",    category: "branding",      label: "Logo Design" },
  { src: "img/l4.png",    category: "branding",      label: "Logo Design" },
  { src: "img/l5.png",    category: "branding",      label: "Logo Design" },
  { src: "img/l6.png",    category: "branding",      label: "Logo Design" },
  { src: "img/l7.png",    category: "branding",      label: "Logo Design" },
  { src: "img/l8.png",    category: "branding",      label: "Logo Design" },
  { src: "img/l9.png",    category: "branding",      label: "Logo Design" },
  { src: "img/l10.png",   category: "branding",      label: "Logo Design" },
  { src: "img/l11.png",   category: "branding",      label: "Logo Design" },
  { src: "img/l12.png",   category: "branding",      label: "Logo Design" },
  { src: "img/l13.png",   category: "branding",      label: "Logo Design" },
  { src: "img/l14.jpeg",  category: "branding",      label: "Logo Design" },
  { src: "img/l15.jpeg",  category: "branding",      label: "Logo Design" },
  // Branding
  { src: "img/b1.png",    category: "branding",      label: "Brand Identity" },
  { src: "img/b2.png",    category: "branding",      label: "Brand Identity" },
  { src: "img/b3.png",    category: "branding",      label: "Brand Identity" },
  { src: "img/b4.png",    category: "branding",      label: "Brand Identity" },
  { src: "img/b5.png",    category: "branding",      label: "Brand Identity" },
  // Flyers
  { src: "img/fl1.png",   category: "posters",       label: "Flyer Design" },
  { src: "img/fl2.png",   category: "posters",       label: "Flyer Design" },
  { src: "img/fl3.png",   category: "posters",       label: "Flyer Design" },
  { src: "img/fl4.png",   category: "posters",       label: "Flyer Design" },
  { src: "img/fl5.png",   category: "posters",       label: "Flyer Design" },
  { src: "img/fl6.png",   category: "posters",       label: "Flyer Design" },
  { src: "img/fl7.png",   category: "posters",       label: "Flyer Design" },
  { src: "img/fl8.png",   category: "posters",       label: "Flyer Design" },
  { src: "img/fl9.png",   category: "posters",       label: "Flyer Design" },
  { src: "img/fl10.png",  category: "posters",       label: "Flyer Design" },
  { src: "img/f11.png",   category: "posters",       label: "Flyer Design" },
  { src: "img/f12.png",   category: "posters",       label: "Flyer Design" },
  { src: "img/f13.png",   category: "posters",       label: "Flyer Design" },
  // Book Covers
  { src: "img/c1.png",    category: "publications",  label: "Book Cover" },
  { src: "img/c2.png",    category: "publications",  label: "Book Cover" },
  { src: "img/c3.png",    category: "publications",  label: "Book Cover" },
  { src: "img/c4.png",    category: "publications",  label: "Book Cover" },
  { src: "img/c5.png",    category: "publications",  label: "Book Cover" },
  { src: "img/c6.png",    category: "publications",  label: "Book Cover" },
  // Artwork
  { src: "img/a1.png",    category: "illustrations", label: "Artwork" },
  { src: "img/a2.png",    category: "illustrations", label: "Artwork" },
  { src: "img/a3.png",    category: "illustrations", label: "Artwork" },
  { src: "img/a4.png",    category: "illustrations", label: "Artwork" },
];

/* ================================================
   UTILITIES
   ================================================ */
function $(selector, ctx = document) {
  return ctx.querySelector(selector);
}
function $$(selector, ctx = document) {
  return [...ctx.querySelectorAll(selector)];
}

/* ================================================
   LOADING SCREEN
   ================================================ */
function initLoadingScreen() {
  const screen = $("#loading-screen");
  const bar = $("#loading-bar");
  const sub = $("#loading-sub");
  const doors = $(".loading-doors");

  const messages = [
    "Curating masterpieces...",
    "Illuminating galleries...",
    "Hanging exhibitions...",
    "Polishing the frames...",
    "Opening the doors...",
  ];

  let progress = 0;
  const duration = 2800;
  const step = 100 / (duration / 50);

  const interval = setInterval(() => {
    progress = Math.min(progress + step + Math.random() * 1.5, 100);
    bar.style.width = progress + "%";

    const msgIdx = Math.floor((progress / 100) * messages.length);
    if (sub && messages[msgIdx]) sub.textContent = messages[msgIdx];

    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        doors.classList.add("doors-open");
        setTimeout(() => {
          screen.classList.add("hidden");
          document.body.style.overflow = "";
          initRevealObserver();
          initSkillBars();
        }, 1200);
      }, 300);
    }
  }, 50);

  document.body.style.overflow = "hidden";
}

/* ================================================
   CUSTOM CURSOR
   ================================================ */
function initCursor() {
  const cursor = $("#cursor");
  const dot = $("#cursor-dot");
  const spotlight = $("#spotlight");

  if (!cursor || !dot || !spotlight) return;

  let cx = -100, cy = -100;
  let dx = -100, dy = -100;

  function moveCursor(e) {
    cx = e.clientX;
    cy = e.clientY;
  }
  document.addEventListener("mousemove", moveCursor, { passive: true });

  function animateCursor() {
    dx += (cx - dx) * 0.12;
    dy += (cy - dy) * 0.12;

    cursor.style.left = cx + "px";
    cursor.style.top = cy + "px";
    dot.style.left = dx + "px";
    dot.style.top = dy + "px";
    spotlight.style.left = cx + "px";
    spotlight.style.top = cy + "px";

    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Hover effects
  const hoverEls = $$("a, button, .project-frame, .filter-btn, .masonry-art, .testimonial-card");
  hoverEls.forEach((el) => {
    el.addEventListener("mouseenter", () => cursor.classList.add("hover"));
    el.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
  });
}

/* ================================================
   PARTICLE CANVAS
   ================================================ */
function initParticles() {
  const canvas = $("#particle-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let W, H, particles;

  function resize() {
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function createParticles() {
    const count = Math.min(Math.floor((W * H) / 10000), 120);
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      size: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.5 + 0.1,
      gold: Math.random() > 0.7,
    }));
  }

  function drawParticles() {
    ctx.clearRect(0, 0, W, H);

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.gold
        ? `rgba(201, 168, 76, ${p.opacity})`
        : `rgba(240, 237, 232, ${p.opacity * 0.4})`;
      ctx.fill();
    });

    // Connect nearby particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          const alpha = (1 - dist / 100) * 0.08;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(201, 168, 76, ${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(drawParticles);
  }

  window.addEventListener("resize", () => {
    resize();
    createParticles();
  });

  resize();
  createParticles();
  drawParticles();
}

/* ================================================
   NAVBAR
   ================================================ */
function initNavbar() {
  const navbar = $("#navbar");
  const links = $$(".nav-link");

  // Scroll detection
  const scrollHandler = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 60);
  };
  window.addEventListener("scroll", scrollHandler, { passive: true });
  scrollHandler();

  // Active link on scroll
  const sections = $$("section[id]");
  const activateLink = () => {
    const scrollPos = window.scrollY + window.innerHeight / 3;
    sections.forEach((section) => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      if (scrollPos >= top && scrollPos < bottom) {
        const id = section.id;
        links.forEach((link) => {
          const href = link.getAttribute("href").slice(1);
          link.classList.toggle("active", href === id);
        });
      }
    });
  };
  window.addEventListener("scroll", activateLink, { passive: true });

  // Smooth scroll for nav links
  $$("a[href^='#']").forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href.length > 1) {
        e.preventDefault();
        const target = $(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          closeMobileMenu();
        }
      }
    });
  });
}

/* ================================================
   MOBILE MENU
   ================================================ */
function initMobileMenu() {
  const toggle = $("#menu-toggle");
  const menu = $("#mobile-menu");
  const close = $("#mobile-close");

  function openMenu() {
    menu.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeMenu() {
    menu.classList.remove("open");
    document.body.style.overflow = "";
  }

  window.closeMobileMenu = closeMenu;
  toggle?.addEventListener("click", openMenu);
  close?.addEventListener("click", closeMenu);
  menu?.addEventListener("click", (e) => {
    if (e.target === menu) closeMenu();
  });
}
function closeMobileMenu() {
  const menu = $("#mobile-menu");
  menu?.classList.remove("open");
  document.body.style.overflow = "";
}

/* ================================================
   THEME TOGGLE
   ================================================ */
function initTheme() {
  const btn = $("#theme-toggle");
  const body = document.body;

  const saved = localStorage.getItem("museum-theme") || "dark";
  body.className = saved + "-mode";

  btn?.addEventListener("click", () => {
    const isDark = body.classList.contains("dark-mode");
    const next = isDark ? "light" : "dark";
    body.className = next + "-mode";
    localStorage.setItem("museum-theme", next);
  });
}

/* ================================================
   SCROLL REVEAL
   ================================================ */
function initRevealObserver() {
  const options = {
    threshold: 0.1,
    rootMargin: "0px 0px -40px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  $$(".reveal").forEach((el) => observer.observe(el));
}

/* ================================================
   SKILL BARS
   ================================================ */
function initSkillBars() {
  const bars = $$(".skill-bar-fill");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const width = bar.getAttribute("data-width") || 80;
          setTimeout(() => {
            bar.style.width = width + "%";
          }, 200);
          observer.unobserve(bar);
        }
      });
    },
    { threshold: 0.3 }
  );

  bars.forEach((bar) => observer.observe(bar));
}

/* ================================================
   ARCHIVE FILTERS + DYNAMIC MASONRY BUILD
   ================================================ */
function buildMasonryGrid() {
  const grid = $("#masonry-grid");
  if (!grid) return;

  grid.innerHTML = "";

  const heights = ["mh-tall", "mh-mid", "mh-short"];

  GALLERY_ALL.forEach((item, i) => {
    const h = heights[i % heights.length];
    const div = document.createElement("div");
    div.className = "masonry-item";
    div.setAttribute("data-category", item.category);
    div.innerHTML = `
      <div class="masonry-inner ${h}">
        <div class="masonry-art" style="background:#111;">
          <img
            src="${item.src}"
            alt="${item.label}"
            loading="lazy"
            style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;"
            onerror="this.style.display='none';"
          />
          <div class="m-label">${item.label}</div>
        </div>
      </div>`;
    grid.appendChild(div);
  });
}

function initArchiveFilters() {
  buildMasonryGrid();

  const btns = $$(".filter-btn");

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");
      const items = $$(".masonry-item");

      items.forEach((item) => {
        const cat = item.getAttribute("data-category");
        if (filter === "all" || cat === filter) {
          item.classList.remove("hidden");
          item.style.display = "";
        } else {
          item.classList.add("hidden");
          setTimeout(() => {
            if (item.classList.contains("hidden")) {
              item.style.display = "none";
            }
          }, 400);
        }
      });
    });
  });
}

/* ================================================
   LIGHTBOX
   ================================================ */
function initLightbox() {
  const lightbox = $("#lightbox");
  const overlay = $("#lightbox-overlay");
  const closeBtn = $("#lightbox-close");
  const artwork = $("#lightbox-artwork");
  const category = $("#lightbox-category");
  const titleEl = $("#lightbox-title");
  const descEl = $("#lightbox-desc");
  const toolsEl = $("#lightbox-tools");

  function openLightbox(projectIndex) {
    const p = PROJECTS[projectIndex];
    if (!p) return;

    // Set content
    category.textContent = p.category;
    titleEl.textContent = p.title;
    descEl.textContent = p.description;

    // Render artwork preview — real image if provided, else CSS placeholder
    if (p.image) {
      artwork.innerHTML = `
        <img
          src="${p.image}"
          alt="${p.title}"
          style="width:100%;height:340px;object-fit:cover;display:block;"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
        />
        <div class="project-artwork ${p.bgClass}" style="display:none;width:100%;height:340px;align-items:center;justify-content:center;">
          <div style="text-align:center;">
            <div style="font-family:'Playfair Display',serif;font-size:1.5rem;font-style:italic;color:var(--gold);margin-bottom:8px;">${p.title}</div>
            <div style="font-size:0.65rem;letter-spacing:0.25em;color:var(--text-muted);text-transform:uppercase;">${p.category}</div>
          </div>
        </div>`;
    } else {
      artwork.innerHTML = `
        <div class="project-artwork ${p.bgClass}" style="width:100%;height:340px;display:flex;align-items:center;justify-content:center;">
          <div style="text-align:center;">
            <div style="font-family:'Playfair Display',serif;font-size:1.5rem;font-style:italic;color:var(--gold);margin-bottom:8px;">${p.title}</div>
            <div style="font-size:0.65rem;letter-spacing:0.25em;color:var(--text-muted);text-transform:uppercase;">${p.category}</div>
          </div>
        </div>`;
    }

    // Render tools
    toolsEl.innerHTML = p.tools
      .map((t) => `<span class="tool-tag">${t}</span>`)
      .join("");

    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
  }

  // Attach to project frames
  $$(".project-frame").forEach((frame) => {
    frame.addEventListener("click", () => {
      const idx = parseInt(frame.getAttribute("data-project"), 10);
      openLightbox(idx);
    });
  });

  overlay?.addEventListener("click", closeLightbox);
  closeBtn?.addEventListener("click", closeLightbox);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
}

/* ================================================
   PARALLAX
   ================================================ */
function initParallax() {
  const hero = $(".hero-content");

  window.addEventListener(
    "scroll",
    () => {
      const scrollY = window.scrollY;
      if (hero && scrollY < window.innerHeight) {
        hero.style.transform = `translateY(${scrollY * 0.25}px)`;
        hero.style.opacity = 1 - scrollY / (window.innerHeight * 0.8);
      }
    },
    { passive: true }
  );
}

/* ================================================
   CONTACT FORM
   ================================================ */
function initContactForm() {
  const form = $("#contact-form");
  const success = $("#form-success");

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = $("#visitor-name").value.trim();
    const email = $("#visitor-email").value.trim();
    const message = $("#visitor-message").value.trim();

    if (!name || !email || !message) {
      // Simple shake animation on required fields
      [$("#visitor-name"), $("#visitor-email"), $("#visitor-message")].forEach(
        (input) => {
          if (!input.value.trim()) {
            input.style.borderColor = "#e84040";
            input.style.animation = "shake 0.3s ease";
            setTimeout(() => {
              input.style.animation = "";
              input.style.borderColor = "";
            }, 500);
          }
        }
      );
      return;
    }

    // Simulate send
    const btn = form.querySelector(".submit-btn");
    btn.textContent = "Sending...";
    btn.disabled = true;

    setTimeout(() => {
      form.reset();
      btn.innerHTML = "<span>Send Message</span><span class='btn-arrow'>→</span>";
      btn.disabled = false;
      success.style.display = "block";
      setTimeout(() => (success.style.display = "none"), 5000);
    }, 1200);
  });
}

/* ================================================
   HERO ANIMATION SEQUENCE
   ================================================ */
function initHeroEntrance() {
  const reveals = $$(".hero-content .reveal");
  reveals.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add("visible");
    }, 3600 + i * 150);
  });
}

/* ================================================
   ADD SHAKE KEYFRAME
   ================================================ */
function addShakeAnimation() {
  const style = document.createElement("style");
  style.textContent = `
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-6px); }
      75% { transform: translateX(6px); }
    }
  `;
  document.head.appendChild(style);
}

/* ================================================
   AUTO-INJECT PROJECT IMAGES ONTO CARDS
   ================================================ */
function applyProjectImages() {
  $$(".project-frame").forEach((frame) => {
    const idx = parseInt(frame.getAttribute("data-project"), 10);
    const p = PROJECTS[idx];
    if (!p || !p.image) return;

    const artwork = frame.querySelector(".project-artwork");
    if (!artwork) return;

    // Overlay the real image on top of the CSS placeholder
    const img = document.createElement("img");
    img.src = p.image;
    img.alt = p.title;
    img.style.cssText =
      "position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;";

    // Fallback: hide img if it fails to load (placeholder stays visible)
    img.onerror = () => img.remove();

    artwork.style.position = "relative";
    artwork.appendChild(img);
  });
}

/* ================================================
   MASONRY ITEM CLICK (archive)
   ================================================ */
function initMasonryClick() {
  $$(".masonry-art").forEach((art, i) => {
    art.addEventListener("click", () => {
      // Map archive items to project data by index, looping
      const projectIdx = i % PROJECTS.length;
      const lightbox = $("#lightbox");
      if (lightbox) {
        document.dispatchEvent(
          new CustomEvent("open-lightbox", { detail: projectIdx })
        );
      }
    });
  });

  document.addEventListener("open-lightbox", (e) => {
    const idx = e.detail;
    const frame = $(`.project-frame[data-project="${idx}"]`);
    if (frame) frame.click();
  });
}

/* ================================================
   INIT ALL
   ================================================ */
document.addEventListener("DOMContentLoaded", () => {
  addShakeAnimation();
  initTheme();
  initLoadingScreen();
  initCursor();
  initParticles();
  initNavbar();
  initMobileMenu();
  initArchiveFilters();
  initLightbox();
  applyProjectImages();
  initMasonryClick();
  initParallax();
  initContactForm();
  initHeroEntrance();
});
