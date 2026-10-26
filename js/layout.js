/* ==========================================================
   SANGAM 2027 – shared header & footer
   Edit the markup here once; every page picks it up.

   Each page loads this file at the top of <body>:
     <script src="../js/layout.js" data-root="../" data-page="about"></script>
   and calls SiteLayout.footer() where the footer belongs.
     data-root : path back to the site root ("" on the home page, "../" elsewhere)
     data-page : the page's folder name, used to highlight the menu
   ========================================================== */
(function () {
  const me = document.currentScript;
  const root = me.dataset.root || "";
  const page = me.dataset.page || "home";

  const url = (p) => (p ? root + p : root || "./");
  const FORM = "https://forms.gle/mXyWNmWkprkiNCEAA";

  // which top-level menu item is highlighted for each page
  const section = {
    home: "home",
    about: "about", gallery: "about",
    tracks: "tracks", submission: "tracks",
    leadership: "committee", "core-committee": "committee", "organising-committee": "committee",
  }[page] || page;
  const act = (key) => (section === key ? ' class="active"' : "");

  const header = `
  <!-- ===== TOP BAR ===== -->
  <div class="topbar">
    <div class="container topbar-inner">
      <div class="topbar-left">
        <span><i class="ico ico-cal"></i>06 – 07 February 2027</span>
        <span class="hide-sm"><i class="ico ico-pin"></i>NIT Durgapur, West Bengal, India</span>
      </div>
      <div class="topbar-right">
        <a href="${url("assets/docs/SANGAM-Brochure-2027.pdf")}" target="_blank" rel="noopener"><i class="ico ico-doc"></i>Brochure</a>
        <a href="${url("venue/")}" class="hide-sm"><i class="ico ico-route"></i>How to Reach</a>
      </div>
    </div>
  </div>

  <!-- ===== HEADER / NAV ===== -->
  <header class="header" id="header">
    <div class="container header-inner">
      <a href="${url("")}" class="brand">
        <img src="${url("assets/logos/nit-durgapur.png")}" alt="NIT Durgapur logo">
        <div class="brand-text">
          <span class="brand-hi">राष्ट्रीय प्रौद्योगिकी संस्थान दुर्गापुर</span>
          <span class="brand-en">National Institute of Technology Durgapur</span>
          <span class="brand-sub">An Institute of National Importance under the Ministry of Education, Government of India</span>
        </div>
      </a>

      <nav class="nav" id="nav">
        <ul>
          <li><a href="${url("")}"${act("home")}>Home</a></li>
          <li class="has-drop">
            <a href="${url("about/")}"${act("about")}>About <span class="caret"></span></a>
            <ul class="drop">
              <li><a href="${url("about/")}">The Conference</a></li>
              <li><a href="${url("about/#nitdgp")}">About NIT Durgapur</a></li>
              <li><a href="${url("about/#dms")}">About DMS</a></li>
              <li><a href="${url("gallery/")}">Gallery</a></li>
            </ul>
          </li>
          <li class="has-drop">
            <a href="${url("tracks/")}"${act("tracks")}>Call for Papers <span class="caret"></span></a>
            <ul class="drop">
              <li><a href="${url("tracks/")}">Conference Tracks</a></li>
              <li><a href="${url("submission/")}">Submission Guidelines</a></li>
              <li><a href="${FORM}" target="_blank" rel="noopener">Submit Paper ↗</a></li>
            </ul>
          </li>
          <li><a href="${url("dates/")}"${act("dates")}>Dates</a></li>
          <li><a href="${url("registration/")}"${act("registration")}>Registration</a></li>
          <li class="has-drop">
            <a href="${url("leadership/")}"${act("committee")}>Committee <span class="caret"></span></a>
            <ul class="drop">
              <li><a href="${url("leadership/")}">Conference Leadership</a></li>
              <li><a href="${url("core-committee/")}">Core Committee</a></li>
              <li><a href="${url("organising-committee/")}">Organising Committee</a></li>
            </ul>
          </li>
          <li><a href="${url("partners/")}"${act("partners")}>Partners</a></li>
          <li><a href="${url("venue/")}"${act("venue")}>Venue</a></li>
          <li><a href="${url("contact/")}"${act("contact")}>Contact</a></li>
        </ul>
        <a href="${FORM}" target="_blank" rel="noopener" class="btn btn-gold nav-cta">Submit Paper</a>
      </nav>

      <button class="burger" id="burger" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>`;

  const footer = `
  <!-- ===== FOOTER ===== -->
  <footer class="footer">
    <div class="container footer-grid">
      <div>
        <div class="f-brand">
          <img src="${url("assets/logos/nit-durgapur-hd.png")}" alt="NIT Durgapur logo">
          <div>
            <strong>SANGAM 2027</strong>
            <span>PAN NIT Conference on Management &amp; Social Sciences</span>
          </div>
        </div>
        <p>Institutions • Markets • Governance • Sustainability : Evolving Policies for Viksit Bharat 2047</p>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li><a href="${url("about/")}">About</a></li>
          <li><a href="${url("tracks/")}">Tracks</a></li>
          <li><a href="${url("submission/")}">Submission Guidelines</a></li>
          <li><a href="${url("dates/")}">Important Dates</a></li>
          <li><a href="${url("registration/")}">Registration Fees</a></li>
        </ul>
      </div>
      <div>
        <h4>Conference</h4>
        <ul>
          <li><a href="${url("leadership/")}">Conference Leadership</a></li>
          <li><a href="${url("core-committee/")}">Core Committee</a></li>
          <li><a href="${url("organising-committee/")}">Organising Committee</a></li>
          <li><a href="${url("partners/")}">Academic Partners</a></li>
          <li><a href="${url("gallery/")}">Gallery</a></li>
          <li><a href="${url("venue/")}">How to Reach</a></li>
          <li><a href="${url("contact/")}">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4>Venue</h4>
        <p>Department of Management Studies<br>National Institute of Technology Durgapur<br>Mahatma Gandhi Avenue, Durgapur, West Bengal, India</p>
        <p class="f-date">06 – 07 February 2027</p>
        <p class="f-mail"><a href="mailto:sangam2027@nitdgp.ac.in">sangam2027@nitdgp.ac.in</a></p>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <span>Developed by <a href="https://github.com/SumitMaitra" target="_blank" rel="noopener" class="dev-credit">Sumit Maitra</a></span>
        <span>© 2027 Department of Management Studies, National Institute of Technology Durgapur. All rights reserved.</span>
      </div>
    </div>
  </footer>

  <button class="to-top" id="toTop" aria-label="Back to top">↑</button>
  <div class="toast" id="toast">Copied!</div>`;

  // header goes where this script tag sits; footer where SiteLayout.footer() is called
  me.insertAdjacentHTML("beforebegin", header);
  window.SiteLayout = {
    footer() {
      document.currentScript.insertAdjacentHTML("beforebegin", footer);
    },
  };
})();
