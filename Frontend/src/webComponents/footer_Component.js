const styles = /* css */ `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .footer {
    background: linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding: 3rem 0 1rem;
    font-size: 1rem;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 3rem;
    margin-bottom: 2rem;
  }

  .footer-brand {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .footer-logo {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .footer-logo img {
    width: 40px;
    height: 40px;
    border-radius: 8px;
  }

  .footer-title {
    font-size: 1.5rem;
    font-weight: 700;
  }

  .cuerd {
    color: #a9b650;
  }

  .os {
    color: #ffffff;
  }

  .footer-description {
    color: #cccccc;
    line-height: 1.6;
    max-width: 400px;
  }

  .footer-heading {
    font-size: 1.1rem;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 1rem;
  }

  .footer-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .footer-list a {
    color: #cccccc;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .footer-list a:hover {
    color: #a9b650;
  }

  .social-links {
    display: flex;
    gap: 1rem;
  }

  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    color: #cccccc;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .social-link:hover {
    background: rgba(169, 182, 80, 0.1);
    border-color: rgba(169, 182, 80, 0.3);
    color: #a9b650;
    transform: translateY(-2px);
  }

  .footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 2rem;
    text-align: center;
  }

  .footer-bottom p {
    color: #cccccc;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  .footer-license {
    font-size: 0.8rem;
  }

  .footer-license a {
    color: #a9b650;
    text-decoration: none;
  }

  .footer-license a:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    .footer {
      padding: 2rem 0 1rem;
    }

    .footer-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
      text-align: center;
    }

    .footer-description {
      max-width: none;
    }

    .social-links {
      justify-content: center;
    }
  }
`

const template = /* html */ `
  <style>${styles}</style>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">
            <img src="Frontend/src/Images/cuerdos_logo.webp" alt="CuerdOS Logo">
            <span class="footer-title"><span class="cuerd">Cuerd</span><span class="os">OS</span></span>
          </div>
          <p class="footer-description" id="str-footer-description">
            Optimized to the last pixel. A modern GNU/Linux distribution focused on performance and user experience.
          </p>
        </div>

        <div class="footer-links">
          <h4 class="footer-heading" id="str-footer-resources">Resources</h4>
          <ul class="footer-list">
            <li><a href="https://cuerdoswiki.blogspot.com/" id="str-footer-wiki">Wiki</a></li>
            <li><a href="changelog.html" id="str-changelog-nav">Changelog</a></li>
            <li><a href="https://github.com/CuerdOS" id="str-footer-source">Source Code</a></li>
          </ul>
        </div>

        <div class="footer-social">
          <h4 class="footer-heading" id="str-footer-community">Community</h4>
          <div class="social-links">
            <a href="mailto:cuerdoslinux@proton.me" class="social-link">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"/><path d="M22 6l-10 7L2 6"/></svg>


            </a>
            <a href="https://t.me/+GibSWjFc89Q2ODU8" class="social-link">
              <svg
                width="21.120445"
                height="18.633747"
                viewBox="0 0 21.120445 18.633747"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                version="1.1"
                id="svg2"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:svg="http://www.w3.org/2000/svg"><defs
                  id="defs2" /><path
                  style="fill:none;stroke:#ffffff;stroke-width:1.99937;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
                  d="M 15.249334,6.1428859 6.846787,11.148353 0.99950402,9.1992593 20.120791,0.9996207 17.26436,17.634132 9.9442193,12.60828 Z"
                  id="path3" />
              </svg>
            </a>
            <a href="https://github.com/CuerdOS" class="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p id="str-credits">© <span class="current-year">year</span> CuerdOS Dev Team. Licensed under GNU GPL v3.</p>
        <p class="footer-license" id="str-subtitle-logolicense">
          The <a href="https://github.com/CuerdOS/logo">CuerdOS logo</a> is published under
          <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC-BY-SA-4.0</a>
        </p>
      </div>
    </div>
  </footer>
`

class FooterComponent extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: "open" })
  }

  connectedCallback() {
    this.render()
    this.setYear()
  }

  render() {
    this.shadow.innerHTML = template
  }

  setYear() {
    const yearElement = this.shadow.querySelector(".current-year")
    yearElement.textContent = new Date().getFullYear()
  }
}

customElements.define("footer-component", FooterComponent)
