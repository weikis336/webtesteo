const styles = /* css */ `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .features {
    padding: 6rem 0;
    background: linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%);
  }

  .container {
    max-width: 90%;
    margin: 0 auto;
    padding: 0 20px;
  }

  .features-content {
    text-align: center;
    margin-bottom: 4rem;
  }

  .features-description h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: #ffffff;
  }

  .features-description h1 span {
    background: linear-gradient(135deg, #a9b650 0%, #ffffff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .description {
    font-size: 1.2rem;
    color: #cccccc;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }

  .landing-features-container {
    margin-top: 4rem;
  }

  .card-box {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }

  .card-ubuntu,
  .card-performance,
  .card-style,
  .card-repo {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 2rem;
    text-align: center;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
  }

  .card-ubuntu:hover,
  .card-performance:hover,
  .card-style:hover,
  .card-repo:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(169, 182, 80, 0.2);
    border-color: rgba(169, 182, 80, 0.3);
  }

  .card-img {
    width: 80px;
    height: 80px;
    margin: 0 auto 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(169, 182, 80, 0.1);
    border-radius: 50%;
    border: 2px solid rgba(169, 182, 80, 0.2);
  }

  .card-img img {
    width: 50px;
    height: 50px;
    object-fit: contain;
  }

  .card-img i {
    font-size: 2rem;
    color: #a9b650;
  }

  .card-title {
    margin-bottom: 1rem;
  }

  .card-title p {
    font-size: 1.3rem;
    font-weight: 600;
    color: #ffffff;
  }

  .card-description p {
    color: #cccccc;
    line-height: 1.6;
    font-size: 1rem;
  }

  .scroll-down {
    text-align: center;
    margin-top: 4rem;
  }

  .scroll-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: #a9b650;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
  }

  .scroll-link:hover {
    transform: translateY(2px);
  }

  .scroll-link svg {
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-5px);
    }
    60% {
      transform: translateY(-3px);
    }
  }

  @media (max-width: 768px) {
    .features {
      padding: 4rem 0;
    }

    .features-description h1 {
      font-size: 2rem;
    }

    .description {
      font-size: 1rem;
    }

    .card-box {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .card-ubuntu,
    .card-performance,
    .card-style,
    .card-repo {
      padding: 1.5rem;
    }
  }
`

const template = /* html */ `
  <style>${styles}</style>
  <section class="features" id="about">
    <div class="container">
      <div class="features-content">
        <div class="features-description">
          <h1>
            <span>Why Choose CuerdOS?</span>
          </h1>
          <p class="description" id="str-content-about-2">
            Built with performance and user experience in mind, 
            CuerdOS delivers a modern Linux experience.
          </p>
        </div>
        <div class="landing-features-container">
          <div class="card-box">
            <div class="card-ubuntu">
              <div class="card-img">
                <img src="Frontend/src/Images/debian.webp" alt="Ubuntu">
              </div>
              <div class="card-title">
                <p id="str-title-feature-1">Debian Based</p>
              </div>
              <div class="card-description">
                <p id="str-content-feature-1">Built on the rock-solid foundation of Debian, providing exceptional stability and security.</p>
              </div>
            </div>
            <div class="card-performance">
              <div class="card-img">
                <img src="Frontend/src/Images/vanguardia.webp" alt="Perform">
              </div>
              <div class="card-title">
                <p id="str-title-feature-2">Optimized Performance</p>
              </div>
              <div class="card-description">
                <p id="str-content-feature-2">Custom kernel optimizations and system tweaks for maximum performance on any hardware.</p>
              </div>
            </div>
            <div class="card-style">
              <div class="card-img">
                <img src="Frontend/src/Images/sway.webp" alt="Sway">
              </div>
              <div class="card-title">
                <p id="str-title-feature-3">Modern Desktop</p>
              </div>
              <div class="card-description">
                <p id="str-content-feature-3">Features Sway window manager with beautiful, efficient workflows and Wayland support.</p>
              </div>
            </div>
            <div class="card-repo">
              <div class="card-img">
                <img src="Frontend/src/Images/dpkg.webp" alt="Repos">
              </div>
              <div class="card-title">
                <p id="str-title-feature-4">Own Repositories</p>
              </div>
              <div class="card-description">
                <p id="str-content-feature-4">Access to exclusive packages and software not available in standard Debian repositories.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="scroll-down">
        <a href="#technical" class="scroll-link">
          <span>Scroll Down</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
               viewBox="0 0 24 24" fill="none" stroke="currentColor" 
               stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
`

class FeaturesComponent extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: "open" })
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.shadow.innerHTML = template
  }
}

customElements.define("features-component", FeaturesComponent)
