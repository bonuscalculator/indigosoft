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
        <a href="/" class="brand">
          <span class="brand-mark">I</span>
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
