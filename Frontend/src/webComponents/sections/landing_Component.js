const styles = /* css */ `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .landing {
    min-height: 100vh;
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
    position: relative;
    overflow: hidden;
    padding-top: 70px;
  }

  .landing::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 50%, rgba(169, 182, 80, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    width: 100%;
  }

  .landing-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  .landing-text {
    z-index: 2;
  }

  .landing-title {
    font-size: 4rem;
    font-weight: 900;
    margin-bottom: 1rem;
    line-height: 1.1;
  }

  .gradient-text {
    background: linear-gradient(135deg, #a9b650 0%, #ffffff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .cuerd {
    color: #a9b650;
  }

  .os {
    color: #ffffff;
  }

  .landing-subtitle {
    font-size: 1.5rem;
    color: #a9b650;
    margin-bottom: 1.5rem;
    font-weight: 500;
  }

  .landing-description {
    font-size: 1.2rem;
    color: #cccccc;
    margin-bottom: 2.5rem;
    line-height: 1.6;
    max-width: 500px;
  }

  .landing-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    font-family: inherit;
  }

  .btn-primary {
    background: linear-gradient(135deg, #a9b650 0%, #8fa142 100%);
    color: #ffffff;
    box-shadow: 0 4px 15px rgba(169, 182, 80, 0.3);
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(169, 182, 80, 0.4);
  }

  .btn-secondary {
    background: transparent;
    color: #ffffff;
    border: 2px solid rgba(255, 255, 255, 0.2);
  }

  .btn-secondary:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
  }

  .landing-image {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 400px;
  }

  .landing-image-container {
    width: 100%;
    max-width: 800px;
    height: auto;
    position: relative;
  }

  .computer-svg {
    width: 100%;
    height: auto;
    max-width: 100%;
    filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3));
    transition: transform 0.3s ease;
  }

  @media (min-width: 1200px) {
    .landing-image-container {
      max-width: 900px;
    }
  }

  @media (min-width: 1400px) {
    .landing-image-container {
      max-width: 1000px;
    }
  }

  @media (min-width: 1600px) {
    .landing-image-container {
      max-width: 1100px;
    }
  }

  @media (max-width: 768px) {
    .landing-content {
      grid-template-columns: 1fr;
      gap: 2rem;
      text-align: center;
    }

    .landing-title {
      font-size: 2.5rem;
    }

    .landing-subtitle {
      font-size: 1.2rem;
    }

    .landing-description {
      font-size: 1rem;
      max-width: none;
    }

    .landing-buttons {
      justify-content: center;
    }

    .btn {
      padding: 0.8rem 1.5rem;
      font-size: 0.9rem;
    }
  }
`

const template = /* html */ `
  <style>${styles}</style>
  <section class="landing">
    <div class="container">
      <div class="landing-content">
        <div class="landing-text">
          <h1 class="landing-title">
            <span class="gradient-text"><span class="cuerd">Cuerd</span><span class="os">OS</span></span>
          </h1>
          <p class="landing-subtitle" id="str-slogan">Optimized to the last pixel</p>
          <p class="landing-description" id="str-content-about-1">
            A GNU/Linux distribution focused on stability, efficiency and performance on computers of any range,
            without losing any functionality.
          </p>
          <div class="landing-buttons">
            <button class="btn btn-primary" onclick="scrollToSection('download')">
              <i data-lucide="download"></i>
              <span id="str-download-now">Download Now</span>
            </button>
            <button class="btn btn-secondary" onclick="scrollToSection('about')">
              <span id="str-learn-more">Learn More</span>
            </button>
          </div>
        </div>

        <div class="landing-image">
          <div class="landing-image-container">
            <svg id="scalable-svg" viewBox="0 0 800 600" class="computer-svg" style="width: 100%; height: auto;">
              <!-- Computer Base -->
              <rect x="50" y="400" width="700" height="150" rx="20" fill="#2a2a2a" stroke="#444" stroke-width="2"/>
              
              <!-- Computer Screen Frame -->
              <rect x="100" y="80" width="600" height="380" rx="15" fill="#1a1a1a" stroke="#444" stroke-width="3"/>
              
              <!-- Screen Bezel -->
              <rect x="120" y="100" width="560" height="340" rx="10" fill="#000"/>
              
              <!-- Screen Content -->
              <foreignObject x="125" y="105" width="550" height="330">
                <img src="Frontend/src/Images/cuerdos-standard.webp" alt="CuerdOS Desktop" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;"/>
              </foreignObject>
              
              <!-- Screen Reflection -->
              <rect x="125" y="105" width="550" height="330" rx="8" fill="url(#screenGradient)" opacity="0.1"/>
              
              <!-- Keyboard -->
              <rect x="150" y="480" width="500" height="60" rx="8" fill="#333" stroke="#555" stroke-width="1"/>
              
              <!-- Keyboard Keys -->
              <g fill="#444" stroke="#666" stroke-width="0.5">
                <rect x="160" y="490" width="30" height="8" rx="2"/>
                <rect x="195" y="490" width="30" height="8" rx="2"/>
                <rect x="230" y="490" width="30" height="8" rx="2"/>
                <rect x="265" y="490" width="30" height="8" rx="2"/>
                <rect x="300" y="490" width="30" height="8" rx="2"/>
                <rect x="335" y="490" width="30" height="8" rx="2"/>
                <rect x="370" y="490" width="30" height="8" rx="2"/>
                <rect x="405" y="490" width="30" height="8" rx="2"/>
                <rect x="440" y="490" width="30" height="8" rx="2"/>
                <rect x="475" y="490" width="30" height="8" rx="2"/>
                <rect x="510" y="490" width="30" height="8" rx="2"/>
                <rect x="545" y="490" width="30" height="8" rx="2"/>
                <rect x="580" y="490" width="60" height="8" rx="2"/>
              </g>
              
              <!-- Trackpad -->
              <rect x="350" y="555" width="100" height="60" rx="8" fill="#222" stroke="#444" stroke-width="1"/>
              
              <!-- Power Button -->
              <circle cx="400" cy="470" r="4" fill="#a9b650" opacity="0.8"/>
              
              <!-- Gradients -->
              <defs>
                <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:white;stop-opacity:0.3"/>
                  <stop offset="100%" style="stop-color:white;stop-opacity:0"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
`

class LandingComponent extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: "open" })
    this.scaleSVG = this.scaleSVG.bind(this)
  }

  connectedCallback() {
    this.render()
    this.initializeButtons()
    this.setupResponsiveSVG()
    window.addEventListener("resize", () => this.setupResponsiveSVG())
  }

  render() {
    this.shadow.innerHTML = template
  }

  initializeButtons() {
    // Make scrollToSection globally available
    if (!window.scrollToSection) {
      window.scrollToSection = (sectionId) => {
        // First try to find the element by ID
        let target = document.getElementById(sectionId)

        // If not found, try to find it by querySelector
        if (!target) {
          target = document.querySelector(`#${sectionId}`)
        }

        if (target) {
          const offsetTop = target.offsetTop - 80
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          })
        } else {
          // Fallback: scroll to approximate positions
          const sectionMap = {
            about: 0.15,
            technical: 0.4,
            download: 0.6,
            spins: 0.8,
          }

          if (sectionMap[sectionId]) {
            const scrollPosition = document.documentElement.scrollHeight * sectionMap[sectionId]
            window.scrollTo({
              top: scrollPosition,
              behavior: "smooth",
            })
          }
        }
      }
    }
  }

  setupResponsiveSVG() {
    const svg = this.shadow.getElementById("scalable-svg")
    const container = this.shadow.querySelector(".landing-image-container")

    if (!svg || !container) return

    const updateSVGSize = () => {
      const containerWidth = container.clientWidth
      const viewportWidth = window.innerWidth

      // Base aspect ratio
      const aspectRatio = 800 / 600

      // Calculate responsive height
      let newHeight = containerWidth / aspectRatio

      // Scale factor based on viewport width
      let scaleFactor = 1

      if (viewportWidth >= 1600) {
        scaleFactor = 1.3
      } else if (viewportWidth >= 1400) {
        scaleFactor = 1.2
      } else if (viewportWidth >= 1200) {
        scaleFactor = 1.1
      } else if (viewportWidth <= 768) {
        scaleFactor = 0.9
      }

      newHeight *= scaleFactor

      // Set the new dimensions
      svg.style.width = `${containerWidth}px`
      svg.style.height = `${newHeight}px`
      svg.style.maxWidth = "100%"

      // Update container height to match
      container.style.height = `${newHeight}px`
    }

    // Initial setup
    updateSVGSize()

    // Update on resize with debouncing
    let resizeTimeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(updateSVGSize, 100)
    }

    window.addEventListener("resize", handleResize)
  }
}

customElements.define("landing-component", LandingComponent)
