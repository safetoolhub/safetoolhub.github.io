// ─── SafeToolHub i18n + Theme + Blog System ─────────────────────────────────
// Common translations shared across all pages.
// Post-specific translations are defined inline in each post HTML file.

const translations = {
  en: {
    // Navigation
    "nav-tools": "Our Tools",
    "nav-about": "About",
    "nav-blog": "Blog",

    // Hero
    "hero-badge": "Free Software · Real Privacy",
    "hero-title-1": "Tools that respect your freedom",
    "hero-title-2": "Private, free and for everyone",
    "hero-subtitle": "Open-source software that runs 100% on your device. No cloud, no tracking, no telemetry. <strong>Built for people. Free as in freedom.</strong>",
    "hero-btn": "Discover Our Tools",

    // Tools Section
    "tools-title": "Available Applications",
    "tools-desc": "Discover our suite of open-source software designed with privacy and transparency as the main pillars.",
    "tools-i-title": "SafeTool Pix",
    "tools-i-desc": "The ultimate privacy-first photo and video management studio. Clean duplicates, organize them in folders, and find visually similar media. Free and open-source.",
    "tools-i-f1": "Exact & Perceptual Hash Duplicate Detection",
    "tools-i-f2": "HEIC/JPG and Live Photo Cleanup",
    "tools-i-f3": "Smart Date Organization & Renaming",
    "tools-i-f4": "Available for Linux, Windows, and macOS",
    "tools-i-btn": "Download SafeTool Pix",
    "tools-i-all-releases": "All releases on GitHub \u2192",
    "tools-p-badge": "v0.3.0-BETA",
    "tools-p-title": "SafeTool PDF",
    "tools-p-desc": "A powerful suite of PDF tools that runs 100% on your device. Optimize, merge, clean, and unlock your PDFs — with zero uploads and zero telemetry.",
    "tools-p-f1": "Optimize: intelligently reduce file size",
    "tools-p-f2": "Merge: combine multiple PDFs into one",
    "tools-p-f3": "Number: add sequential page numbers",
    "tools-p-f4": "Remove metadata: author, dates, XMP data",
    "tools-p-f5": "Permissions & passwords: unlock and restore",
    "tools-p-f6": "Split: by pages, ranges, bookmarks or size",
    "tools-p-btn": "Download SafeTool PDF",
    "tools-p-coming": "Coming Soon",
    "tools-p-all-releases": "All releases on GitHub \u2192",
    "tools-d-badge": "v0..0-BETA",
    "tools-d-title": "SafeTool Downloader",
    "tools-d-desc": "A privacy-respecting file downloader. Download from any website 100% locally with zero tracking or telemetry.",
    "tools-d-f1": "Download files from any website",
    "tools-d-f2": "Queue and manage multiple downloads",
    "tools-d-f3": "100% local processing, zero tracking",
    "tools-d-f4": "Available for Linux, Windows, and macOS",
    "tools-d-btn": "Download SafeTool Downloader",
    "tools-d-all-releases": "All releases on GitHub \u2192",

    // Modal
    "modal-title": "Download Options",
    "modal-win": "Windows",
    "modal-mac": "macOS",
    "modal-lin": "Linux",
    "modal-win-warn-title": "⚠️ Windows SmartScreen Warning",
    "modal-win-warn-1": "Since this is an indie open-source app, Windows might warn you when running the installer. This is normal.",
    "modal-win-warn-2": "To install it, you can either:",
    "modal-win-opt-1": "<strong>Option 1:</strong> Right-click the downloaded file > Properties > Check 'Unblock' > OK.",
    "modal-win-opt-2": "<strong>Option 2:</strong> When the blue SmartScreen appears, click 'More info' and then 'Run anyway'.",
    "modal-mac-warn-title": "⚠️ macOS Unverified App Warning",
    "modal-mac-warn-1": "Since this is an indie open-source app, macOS might not let you open it normally.",
    "modal-mac-warn-2": "To open it for the first time:",
    "modal-mac-warn": "Go to Applications, right-click (or Control-click) the app icon and select 'Open'.",
    "modal-mac-intro": "You can force the app to open by authorizing it directly from your Mac's settings.",
    "modal-mac-step1": "<strong>1.</strong> Try to double-click the blocked file so the system registers the attempt, then close the warning window.",
    "modal-mac-step2": "<strong>2.</strong> Click the Apple menu in the top-left corner and select <em>System Settings</em> (or <em>System Preferences</em> on older versions).",
    "modal-mac-step3": "<strong>3.</strong> Go to <em>Privacy &amp; Security</em> and scroll down to the <em>Security</em> section.",
    "modal-mac-step4": "<strong>4.</strong> You'll see a message indicating the file was blocked; click <em>Open Anyway</em> and enter your Mac password to confirm.",
    "modal-dl-btn": "Download for",
    "modal-show-where": "Show where",


    // Blog Section
    "blog-title": "Our Blog",
    "blog-desc": "Insights, updates, and deep dives into privacy, freedom, and local-first software.",
    "blog-read-more": "Read Article",

    // About Section
    "about-title-1": "Why",
    "about-title-2": "SafeToolHub?",
    "about-p1": "In an era where every application demands constant internet connectivity and uploads your personal data to \u2018the cloud\u2019 for analytics or AI training, we decided to take a different path.",
    "about-p2": "SafeToolHub is dedicated to building robust, beautiful, and completely offline applications. Our tools are free and open-source under the GPLv3 license. Your freedom and privacy are non-negotiable.",
    "about-btn": "Visit our GitHub",
    "about-img-text": "100% Offline Architecture",

    // Donate Section
    "donate-title": "Support SafeToolHub",
    "donate-desc": "We build our tools to be free, open-source, and completely private because we believe that\u2019s how software should be. If you find value in our work, consider supporting our development so we can keep creating tools that respect your freedom.",
    "donate-btn-gh": "GitHub Sponsors",
    "donate-coming-soon": "Coming soon",
    "donate-or": "or",

    // Footer
    "footer-main-desc": "Free and open-source software for everyone.",
    "footer-tools-title": "Tools",
    "footer-links-title": "Links",
    "footer-links-org": "GitHub Organization",
    "footer-links-safetoolpix": "SafeTool Pix Repo",
    "footer-links-safetoolpdf": "SafeTool PDF Repo",
    "footer-links-safetooldownloader": "SafeTool Downloader Repo",
    "footer-links-paypal": "Donate",
    "footer-rights": "SafeToolHub \u2014 Free and open-source software (GPLv3).",
    "footer-license": "Licensed under the <a href='https://www.gnu.org/licenses/gpl-3.0.html' target='_blank'>GNU General Public License v3 (GPLv3)</a>. You are free to use, study, modify, and share this software. Derivative works must include proper attribution and be licensed under GPLv3. Source code available on <a href='https://github.com/safetoolhub' target='_blank'>GitHub</a>.",

    // Shared post elements
    "post-back": "Back to Blog",

    // Blog listing page
    "blog-listing-title": "Blog",
    "blog-listing-desc": "Insights, updates, and deep dives into privacy, freedom, and open-source software.",
  },

  es: {
    // Navegación
    "nav-tools": "Herramientas",
    "nav-about": "Acerca de",
    "nav-blog": "Blog",

    // Hero
    "hero-badge": "Software Libre · Privacidad Real",
    "hero-title-1": "Herramientas que respetan tu libertad",
    "hero-title-2": "Privadas, libres y para todos",
    "hero-subtitle": "Software de c\u00f3digo abierto que funciona al 100% en tu dispositivo. Sin nube, sin rastreo, sin telemetr\u00eda. <strong>Creado para las personas. Libre como en libertad.</strong>",
    "hero-btn": "Descubrir Herramientas",

    // Herramientas
    "tools-title": "Aplicaciones Disponibles",
    "tools-desc": "Descubre nuestra suite de software de c\u00f3digo abierto dise\u00f1ada con la privacidad y la transparencia como pilares principales.",
    "tools-i-title": "SafeTool Pix",
    "tools-i-desc": "El estudio definitivo para gestionar fotos y v\u00eddeos sin comprometer la privacidad. Limpia duplicados, org\u00e1nizalos en carpetas y encuentra similitudes visuales. Libre y de c\u00f3digo abierto.",
    "tools-i-f1": "Detecci\u00f3n de duplicados exactos y por hash perceptual",
    "tools-i-f2": "Limpieza de HEIC/JPG y Live Photos",
    "tools-i-f3": "Organizaci\u00f3n inteligente por fechas y renombrado",
    "tools-i-f4": "Disponible para Linux, Windows y macOS",
    "tools-i-btn": "Descargar SafeTool Pix",
    "tools-i-all-releases": "Todas las versiones en GitHub \u2192",
    "tools-p-badge": "v0.3.0-BETA",
    "tools-p-title": "SafeTool PDF",
    "tools-p-desc": "Una suite de herramientas PDF potente que funciona al 100% en tu dispositivo. Optimiza, combina, limpia y desbloquea tus PDFs — sin subir nada y sin telemetría.",
    "tools-p-f1": "Optimizar: reducción inteligente del tamaño",
    "tools-p-f2": "Combinar: une varios PDFs en uno",
    "tools-p-f3": "Numerar: añade números de página correlativos",
    "tools-p-f4": "Eliminar metadatos: autor, fechas, datos XMP",
    "tools-p-f5": "Permisos y contraseñas: desbloquear y restaurar",
    "tools-p-f6": "Dividir: por páginas, rangos, marcadores o tamaño",
    "tools-p-btn": "Descargar SafeTool PDF",
    "tools-p-coming": "Próximamente",
    "tools-p-all-releases": "Todas las versiones en GitHub \u2192",
    "tools-d-badge": "v0.1.0-BETA",
    "tools-d-title": "SafeTool Downloader",
    "tools-d-desc": "Un descargador de archivos que respeta tu privacidad. Descarga desde cualquier web de forma 100% local sin rastreo ni telemetría.",
    "tools-d-f1": "Descarga archivos de cualquier web",
    "tools-d-f2": "Añade a la cola y gestiona múltiples descargas",
    "tools-d-f3": "Procesamiento 100% local, sin rastreo",
    "tools-d-f4": "Disponible para Linux, Windows y macOS",
    "tools-d-btn": "Descargar SafeTool Downloader",
    "tools-d-all-releases": "Todas las versiones en GitHub \u2192",

    // Modal
    "modal-title": "Opciones de Descarga",
    "modal-win": "Windows",
    "modal-mac": "macOS",
    "modal-lin": "Linux",
    "modal-win-warn-title": "⚠️ Aviso de Windows SmartScreen",
    "modal-win-warn-1": "Al ser una aplicación indie de código abierto (no conocida), Windows podría mostrar una alerta al ejecutar el instalador.",
    "modal-win-warn-2": "Para instalarla, debes hacer una de estas dos opciones:",
    "modal-win-opt-1": "<strong>Opción 1:</strong> Clic derecho en el archivo descargado > Propiedades > Marcar 'Desbloquear' > Aceptar.",
    "modal-win-opt-2": "<strong>Opción 2:</strong> En la alerta azul de Windows SmartScreen, clic en 'Más información' y luego en el botón 'Ejecutar de todas formas'.",
    "modal-mac-warn-title": "⚠️ App no verificada por macOS",
    "modal-mac-warn-1": "Al ser una aplicación indie de código abierto (no conocida para Apple), macOS podría no dejarte abrir la aplicación de la forma normal.",
    "modal-mac-warn-2": "Para abrirla la primera vez:",
    "modal-mac-warn": "Ve a la carpeta Aplicaciones, haz clic derecho (o Control-clic) en el icono de la app y selecciona 'Abrir'.",
    "modal-mac-intro": "Puedes forzar la apertura autorizándola directamente desde la configuración de tu Mac.",
    "modal-mac-step1": "<strong>1.</strong> Intenta hacer doble clic en el archivo bloqueado para que el sistema registre el intento y luego cierra la ventana de advertencia.",
    "modal-mac-step2": "<strong>2.</strong> Ve al menú Apple en la esquina superior izquierda y selecciona <em>Ajustes del Sistema</em> (o <em>Preferencias del Sistema</em> en versiones antiguas).",
    "modal-mac-step3": "<strong>3.</strong> Entra en el apartado <em>Privacidad y seguridad</em> y desplázate hacia abajo hasta llegar a la sección de &laquo;Seguridad&raquo;.",
    "modal-mac-step4": "<strong>4.</strong> Verás un texto indicando que se bloqueó el archivo; haz clic en el botón <em>Abrir de todos modos</em> e introduce la contraseña de tu Mac para confirmar.",
    "modal-dl-btn": "Descargar para",
    "modal-show-where": "Ver dónde",

    // Blog
    "blog-title": "Nuestro Blog",
    "blog-desc": "Reflexiones, novedades y an\u00e1lisis sobre privacidad, libertad y software local.",
    "blog-read-more": "Leer Art\u00edculo",

    // Acerca de
    "about-title-1": "\u00bfPor qu\u00e9",
    "about-title-2": "SafeToolHub?",
    "about-p1": "En una era en la que cada aplicaci\u00f3n exige conexi\u00f3n constante a Internet y sube tus datos personales a \u2018la nube\u2019 para anal\u00edticas o para entrenar IA, decidimos tomar otro camino.",
    "about-p2": "SafeToolHub se dedica a construir aplicaciones robustas, bonitas y completamente offline. Nuestras herramientas son libres y de c\u00f3digo abierto bajo la licencia GPLv3. Tu libertad y tu privacidad no son negociables.",
    "about-btn": "Visitar en GitHub",
    "about-img-text": "Arquitectura 100% Offline",

    // Donar
    "donate-title": "Apoya a SafeToolHub",
    "donate-desc": "Desarrollamos nuestras herramientas para que sean libres, de c\u00f3digo abierto y completamente privadas porque creemos que as\u00ed debe ser el software. Si encuentras valor en nuestro trabajo, considera apoyar nuestro desarrollo para que podamos seguir creando herramientas que respeten tu libertad.",
    "donate-btn-gh": "GitHub Sponsors",
    "donate-coming-soon": "Pr\u00f3ximamente",
    "donate-or": "o",

    // Pie de p\u00e1gina
    "footer-main-desc": "Software libre y de c\u00f3digo abierto para todos.",
    "footer-tools-title": "Herramientas",
    "footer-links-title": "Enlaces",
    "footer-links-org": "Organizaci\u00f3n en GitHub",
    "footer-links-safetoolpix": "Repo de SafeTool Pix",
    "footer-links-safetoolpdf": "Repo de SafeTool PDF",
    "footer-links-safetooldownloader": "Repo de SafeTool Downloader",
    "footer-links-paypal": "Donar",
    "footer-rights": "SafeToolHub \u2014 Software libre y de c\u00f3digo abierto (GPLv3).",
    "footer-license": "Licenciado bajo la <a href='https://www.gnu.org/licenses/gpl-3.0.html' target='_blank'>Licencia P\u00fablica General v3 de GNU (GPLv3)</a>. Eres libre de usar, estudiar, modificar y compartir este software. Las obras derivadas deben incluir atribuci\u00f3n adecuada y estar licenciadas bajo GPLv3. C\u00f3digo fuente disponible en <a href='https://github.com/safetoolhub' target='_blank'>GitHub</a>.",

    // Elementos compartidos de posts
    "post-back": "Volver al Blog",

    // P\u00e1gina de listado del blog
    "blog-listing-title": "Blog",
    "blog-listing-desc": "Reflexiones, novedades y an\u00e1lisis sobre privacidad, libertad y software de c\u00f3digo abierto.",
  }
};


// ─── i18n Engine ─────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  // 1. Determine language
  let currentLang = localStorage.getItem("safetoolhub_lang");
  if (!currentLang) {
    const browserLang = navigator.language || navigator.userLanguage;
    currentLang = browserLang.startsWith("es") ? "es" : "en";
  }

  // 2. Merge post-specific translations if present
  if (window.POST_TRANSLATIONS) {
    for (const lang of Object.keys(window.POST_TRANSLATIONS)) {
      if (translations[lang]) {
        Object.assign(translations[lang], window.POST_TRANSLATIONS[lang]);
      }
    }
  }

  function applyLanguage(lang) {
    document.documentElement.lang = lang;
    const dict = translations[lang] || translations.en;

    // Update data-i18n elements
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const isHtml = el.hasAttribute("data-i18n-html");

      if (dict[key]) {
        if (isHtml) el.innerHTML = dict[key];
        else el.textContent = dict[key];
      }
    });

    // Update active state in language switch
    document.querySelectorAll(".lang-switch a").forEach(el => {
      el.classList.remove("active");
      if (el.getAttribute("data-switch-lang") === lang) {
        el.classList.add("active");
      }
    });

    // Show/hide data-lang content blocks
    document.querySelectorAll("[data-lang]").forEach(el => {
      el.classList.toggle("lang-active", el.getAttribute("data-lang") === lang);
    });

    // Render blog cards if containers exist
    renderBlogCards(lang);
  }

  // 3. Apply initially
  applyLanguage(currentLang);

  // 4. Bind language switchers
  document.querySelectorAll(".lang-switch a").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const newLang = e.target.getAttribute("data-switch-lang");
      localStorage.setItem("safetoolhub_lang", newLang);
      currentLang = newLang;
      applyLanguage(newLang);
    });
  });

  // 5. Bind theme toggle
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    updateThemeIcon();
    themeToggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "light";
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("sth-theme", next);
      updateThemeIcon();
    });
  }
});

function updateThemeIcon() {
  const themeToggle = document.getElementById("theme-toggle");
  if (!themeToggle) return;
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  themeToggle.textContent = isDark ? "\u2600\ufe0f" : "\ud83c\udf19";
  themeToggle.title = isDark ? "Switch to light mode" : "Switch to dark mode";
}

// ─── Blog Card Rendering ─────────────────────────────────────────────────────
// Renders blog cards from the BLOG_POSTS manifest (loaded from posts/posts.js)

function renderBlogCards(lang) {
  if (typeof BLOG_POSTS === "undefined") return;
  const dict = translations[lang] || translations.en;

  // Render into all containers with class "blog-cards-container"
  document.querySelectorAll(".blog-cards-container").forEach(container => {
    const maxPosts = parseInt(container.getAttribute("data-max-posts")) || BLOG_POSTS.length;
    const postsToShow = BLOG_POSTS.slice(0, maxPosts);

    // Determine the base path for post links
    const basePath = container.getAttribute("data-posts-path") || "posts/";

    container.innerHTML = postsToShow.map(post => `
      <article class="blog-card" onclick="window.location.href='${basePath}${post.slug}.html';">
        <div class="blog-meta">
          <span>${post.date_display[lang] || post.date_display.en}</span> &bull;
          <span>${post.tag[lang] || post.tag.en}</span>
        </div>
        <h3>${post.title[lang] || post.title.en}</h3>
        <p>${post.description[lang] || post.description.en}</p>
        <span class="read-more">${dict["blog-read-more"] || "Read Article"} &rarr;</span>
      </article>
    `).join("");
  });
}

// \u2500\u2500\u2500 GitHub Release Auto-Fetch \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
// Fetches the latest SafeTool Pix release from GitHub API,
// updates the version badge and sets direct download links per platform.

document.addEventListener("DOMContentLoaded", () => {
  const APPS = [
    { id: 'safetoolpix', repo: 'safetoolhub/safetool-pix' },
    { id: 'safetoolpdf', repo: 'safetoolhub/safetool-pdf' },
    { id: 'safetooldownloader', repo: 'safetoolhub/safetool-downloader' }
  ];

  // Detect user OS and highlight the recommended download button
  function highlightUserOS() {
    const ua = (navigator.userAgent || '').toLowerCase();
    let btnId = null;
    if (/win/.test(ua)) btnId = 'dl-win';
    else if (/mac|iphone|ipad/.test(ua)) btnId = 'dl-mac';
    else if (/linux/.test(ua)) {
      btnId = /fedora|rhel|centos|suse/i.test(ua) ? 'dl-rpm' : 'dl-deb';
    }
    if (btnId) {
      const btn = document.getElementById(btnId);
      if (btn) btn.classList.add('dl-recommended');
    }
  }

  // Fetch latest release and update UI for all apps
  function fetchReleases() {
    APPS.forEach(app => {
      const API_URL = `https://api.github.com/repos/${app.repo}/releases/latest`;
      fetch(API_URL)
        .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
        .then(release => {
          // Update version badge if it exists
          const badge = document.getElementById(`${app.id}-version`);
          if (badge && release.tag_name) {
            const version = release.tag_name.replace(/^v/, '');
            badge.textContent = `v${version}`;
          }

          // Map assets to download buttons by file extension (only for Pix as it's the main reference for now)
          // For other apps, the buttons are in the modal which is handled by downloads.js 
          // but we can also update the hidden links for the modal to use
          const assets = release.assets || [];
          const mapping = {
            'win': a => /\.exe$/i.test(a.name),
            'deb': a => /\.deb$/i.test(a.name),
            'rpm': a => /\.rpm$/i.test(a.name),
            'mac': a => /\.dmg$/i.test(a.name),
            'appimage': a => /\.AppImage$/i.test(a.name),
            'flatpak': a => /\.flatpak$/i.test(a.name),
          };

          const card = document.querySelector(`.tool-card[data-app-id="${app.repo.split('/')[1]}"]`);
          if (card) {
            for (const [key, matcher] of Object.entries(mapping)) {
              const asset = assets.find(matcher);
              // Find the specific button in the card (using either the common IDs or app-specific ones)
              const btn = card.querySelector(`[id$="-dl-${key}"], [id="dl-${key}"]`);
              if (btn && asset) {
                btn.href = asset.browser_download_url;
              }
            }
          }
        })
        .catch(() => { /* keep fallback links */ });
    });
  }

  highlightUserOS();
  fetchReleases();
});
