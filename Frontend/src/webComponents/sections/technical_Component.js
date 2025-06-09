const styles = /* css */ `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .technical-section {
    padding: 6rem 0;
    background: linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%);
  }

  .container {
    max-width: 95%;
    margin: 0 auto;
    padding: 0 20px;
  }

  .technical-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  .technical-content {
    z-index: 2;
  }

  .technical-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, #a9b650 0%, #ffffff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .technical-description {
    font-size: 1.2rem;
    color: #cccccc;
    margin-bottom: 2.5rem;
    line-height: 1.6;
  }

  .technical-features {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .technical-feature {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    transition: all 0.3s ease;
  }

  .technical-feature:hover {
    background: rgba(169, 182, 80, 0.1);
    border-color: rgba(169, 182, 80, 0.3);
    transform: translateX(8px);
  }

  .check-icon {
    color: #a9b650;
    font-size: 1.2rem;
    flex-shrink: 0;
  }

  .technical-feature span {
    color: #ffffff;
    font-weight: 500;
  }

  .technical-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .technical-image-container {
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border: 2px solid rgba(169, 182, 80, 0.2);
  }

  .technical-img {
    width: 100%;
    height: auto;
    display: block;
  }

  .technical-image-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(169, 182, 80, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    .technical-section {
      padding: 4rem 0;
    }

    .technical-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .technical-title {
      font-size: 2rem;
    }

    .technical-description {
      font-size: 1rem;
    }

    .technical-feature {
      padding: 0.8rem;
    }

    .technical-feature:hover {
      transform: translateX(4px);
    }
  }
`

const template = /* html */ `
  <style>${styles}</style>
  <section class="technical-section" id="technical">
    <div class="container">
      <div class="technical-content">
        <div class="technical-title">
          <h2 class="technical-title" id="str-title-otherfeatures">Technical Excellence</h2>
          <p class="technical-description" id="str-technical-desc">
            CuerdOS isn't just another Linux distribution. It's a carefully crafted system with performance
            optimizations and modern features.
          </p>
        </div>
        <div class="technical-grid">
          <div class="technical-features">
            <div class="technical-feature">
              <i data-lucide="check" class="check-icon"></i>
              <span id="str-content-otherfeatures-1">Bauh Store preconfigured for easy software installation</span>
            </div>
            <div class="technical-feature">
              <i data-lucide="check" class="check-icon"></i>
              <span id="str-content-otherfeatures-2">ZRam optimization for better memory management</span>
            </div>
            <div class="technical-feature">
              <i data-lucide="check" class="check-icon"></i>
              <span id="str-content-otherfeatures-3">Nala and Apt-fast for faster package management</span>
            </div>
            <div class="technical-feature">
              <i data-lucide="check" class="check-icon"></i>
              <span id="str-content-otherfeatures-4">Custom kernel with BORE scheduler and Ananicy daemon</span>
            </div>
            <div class="technical-feature">
              <i data-lucide="check" class="check-icon"></i>
              <span id="str-content-otherfeatures-5">TLP power management for optimal battery life</span>
            </div>
            <div class="technical-feature">
              <i data-lucide="check" class="check-icon"></i>
              <span id="str-content-otherfeatures-6">Pipewire audio server with low latency</span>
            </div>
            <div class="technical-feature">
              <i data-lucide="check" class="check-icon"></i>
              <span id="str-content-otherfeatures-7">Waydroid support for Android apps</span>
            </div>
            <div class="technical-feature">
              <i data-lucide="check" class="check-icon"></i>
              <span id="str-content-otherfeatures-8">Optimized boot speed and system responsiveness</span>
            </div>
          </div>
          <div class="technical-image">
            <div class="technical-image-container">
              <img src="Frontend/src/Images/cuerdos-standard.webp" alt="CuerdOS Standard" class="technical-img">
            </div>
          </div>
        </div>


      </div>
    </div>
  </section>
`

class TechnicalComponent extends HTMLElement {
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

customElements.define("technical-component", TechnicalComponent)
