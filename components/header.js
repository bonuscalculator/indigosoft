/**
 * Site header component.
 * Renders the sticky nav bar into <div id="header-root"></div>.
 * Keeping this separate from footer.js/script.js means the header
 * markup can be reused on other pages by just including this file.
 */
(function () {
  const HEADER_HTML = `
    <header class="site-header" id="siteHeader">
      <div class="wrap header-inner">
        <!-- Logo with image -->
        <a href="/" class="brand">
          <!-- Option 1: Using an image file (recommended) -->
          <img src="logo.png" alt="Indigo Software" class="brand-logo" />
          <!-- Option 2: Using inline SVG (uncomment below and comment out above) -->
          <!--
          <svg class="brand-logo" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:34px;height:34px;">
            <rect width="100" height="100" rx="22" fill="#3730A9"/>
            <text x="50" y="68" font-size="58" font-family="Georgia,serif" fill="#FFB648" text-anchor="middle" font-weight="700">I</text>
          </svg>
          -->
          <span class="brand-name">Indigo<em>Software</em></span>
        </a>
        
        <nav class="main-nav" id="mainNav">
          <a href="/#services">Services</a>
          <a href="/#industries">Industries</a>
          <a href="/projects">Projects</a>
          <a href="/#stack">Tech Stack</a>
          <a href="/#work">Work</a>
          <a href="/#faq">FAQ</a>
          <a href="/contact" class="nav-cta">Get a Demo</a>
        </nav>
        <button class="nav-toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  `;

  const mount = document.getElementById('header-root');
  if (mount) mount.outerHTML = HEADER_HTML;
})();
