/**
 * Site footer component.
 * Renders the footer into <div id="footer-root"></div>.
 * Contact details live here in one place, so updating email/phone
 * only needs to happen in this file.
 */
(function () {
  const CONTACT_EMAIL = 'hello@indigosoftware.online';
  const CONTACT_PHONE_DISPLAY = '0340-2324446';
  const CONTACT_PHONE_TEL = '+923402324446';
  const YEAR = new Date().getFullYear();

  const FOOTER_HTML = `
    <footer class="site-footer">
      <div class="wrap footer-inner">
        <div class="footer-brand">
          <span class="brand-mark">I</span>
          <span class="brand-name">Indigo<em>Software</em></span>
          <p>Custom ERP &amp; CRM development, plus WordPress &amp; HTML websites.</p>
        </div>
        <nav class="footer-nav">
          <a href="/#services">Services</a>
          <a href="/#industries">Industries</a>
          <a href="/projects">Projects</a>
          <a href="/#faq">FAQ</a>
          <a href="/contact">Contact</a>
        </nav>
        <div class="footer-contact">
          <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>
          <a href="tel:${CONTACT_PHONE_TEL}">${CONTACT_PHONE_DISPLAY}</a>
        </div>
      </div>
      <div class="wrap footer-bottom">
        <p>© ${YEAR} Indigo Software · indigosoftware.online</p>
      </div>
    </footer>
  `;

  const mount = document.getElementById('footer-root');
  if (mount) mount.outerHTML = FOOTER_HTML;
})();
