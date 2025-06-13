const styles = /* css */ `
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  .navbar {
      position: sticky;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      background: rgba(26, 26, 26, 0.95);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      transition: all 0.3s ease;
  }

  .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 70px;
  }

  .nav-brand {
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
      color: inherit;
  }

  .nav-logo {
      width: 40px;
      height: 40px;
      border-radius: 8px;
  }

  .nav-title {
      font-size: 1.5rem;
      font-weight: 700;
  }

  .cuerd {
      color: #a9b650;
  }

  .os {
      color: #ffffff;
  }

  .nav-menu {
      display: flex;
      align-items: center;
      gap: 2rem;
  }

  .nav-link {
      color: #ffffff;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
      background: none;
      border: none;
      cursor: pointer;
      font-size: 1rem;
      font-family: inherit;
  }

  .nav-link:hover {
      color: #a9b650;
  }

  .nav-dropdown {
      position: relative;
  }

  .dropdown-toggle {
      display: flex;
      align-items: center;
      gap: 0.5rem;
  }

  .dropdown-content {
      position: absolute;
      top: 100%;
      left: 0;
      background: rgba(26, 26, 26, 0.95);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      padding: 0.5rem 0;
      min-width: 200px;
      opacity: 0;
      visibility: hidden;
      transform: translateY(-10px);
      transition: all 0.3s ease;
  }

  .dropdown-item {
      display: block;
      padding: 0.75rem 1rem;
      color: #ffffff;
      text-decoration: none;
      transition: background-color 0.3s ease;
  }

  .dropdown-item:hover {
      background-color: rgba(169, 182, 80, 0.1);
      color: #a9b650;
  }

  .nav-actions {
      display: flex;
      align-items: center;
      gap: 1rem;
  }

  .nav-icon {
      color: #ffffff;
      text-decoration: none;
      padding: 0.5rem;
      border-radius: 6px;
      transition: all 0.3s ease;
  }

  .nav-icon:hover {
      background-color: rgba(169, 182, 80, 0.1);
      color: #a9b650;
  }

  .nav-toggle {
      display: none;
      background: none;
      border: none;
      color: #ffffff;
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 6px;
      transition: all 0.3s ease;
  }

  .nav-toggle:hover {
      background-color: rgba(169, 182, 80, 0.1);
      color: #a9b650;
  }

  @media (max-width: 768px) {
      .nav-menu {
          position: fixed;
          top: 70px;
          left: 0;
          right: 0;
          background: rgba(26, 26, 26, 0.98);
          backdrop-filter: blur(20px);
          flex-direction: column;
          padding: 2rem;
          gap: 1.5rem;
          transform: translateY(-100%);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
      }

      .nav-menu.active {
          transform: translateY(0);
          opacity: 1;
          visibility: visible;
      }

      .nav-toggle {
          display: block;
      }

      .dropdown-content {
          position: static;
          opacity: 1;
          visibility: visible;
          transform: none;
          background: rgba(255, 255, 255, 0.05);
          margin-top: 0.5rem;
      }
  }
`

const template = /* html */ `
  <style>${styles}</style>
  <nav class="navbar">
    <div class="nav-container">
      <a href="#" class="nav-brand">
        <img src="Frontend/src/Images/cuerdos_logo.webp" alt="CuerdOS Logo" class="nav-logo">
        <span class="nav-title"><span class="cuerd">Cuerd</span><span class="os">OS</span></span>
      </a>

      <div class="nav-menu" id="navMenu">
        <a href="#about" class="nav-link" id="str-menu-about">About</a>
        <div class="nav-dropdown">
          <button class="nav-link dropdown-toggle" id="downloadDropdown">
            <span id="str-menu-download">Download</span>
          </button>
          <div class="dropdown-content" id="downloadDropdownContent">
            <a href="#download" class="dropdown-item" id="str-download-option1">Official Images</a>
            <a href="#spins" class="dropdown-item" id="str-download-option2">Other Spins</a>
          </div>
        </div>
        <a href="https://cuerdoswiki.blogspot.com/" class="nav-link" id="str-menu-wiki">Wiki</a>
        <a href="changelog.html" class="nav-link" id="str-changelog-nav">Changelog</a>
      </div>

      <div class="nav-actions">
        <a href="https://github.com/CuerdOS" class="nav-icon">
          <i data-lucide="github"></i>
        </a>
        <button class="nav-toggle" id="navToggle">
        </button>
      </div>
    </div>
  </nav>
`

class NavbarComponent extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: "open" })
  }

  connectedCallback() {
    this.render()
    this.initializeNavigation()
  }

  render() {
    this.shadow.innerHTML = template
  }

  initializeNavigation() {
    const dropdown = this.shadow.querySelector(".nav-dropdown")
    const dropdownContent = this.shadow.querySelector(".dropdown-content")

    // Dropdown functionality
    if (dropdown && dropdownContent) {
      dropdown.addEventListener("mouseenter", () => {
        dropdownContent.style.opacity = "1"
        dropdownContent.style.visibility = "visible"
        dropdownContent.style.transform = "translateY(0)"
      })

      dropdown.addEventListener("mouseleave", () => {
        dropdownContent.style.opacity = "0"
        dropdownContent.style.visibility = "hidden"
        dropdownContent.style.transform = "translateY(-10px)"
      })
    }

    // Sections scrols for anchor links
    this.shadow.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault()
        const targetId = anchor.getAttribute("href").substring(1)
        this.scrollToSection(targetId)
      })
    })

    // Navbar scroll effect
    let lastScrollY = window.scrollY
    const navbar = this.shadow.querySelector(".navbar")

    window.addEventListener("scroll", () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > 100) {
        navbar.style.background = "rgba(26, 26, 26, 0.98)"
        navbar.style.backdropFilter = "blur(20px)"
      } else {
        navbar.style.background = "rgba(26, 26, 26, 0.95)"
        navbar.style.backdropFilter = "blur(10px)"
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        navbar.style.transform = "translateY(-100%)"
      } else {
        navbar.style.transform = "translateY(0)"
      }

      lastScrollY = currentScrollY
    })
    
  }

  scrollToSection(sectionId) {
    let target = document.getElementById(sectionId)
    if (!target) {
      target = document.querySelector(`#${sectionId}`)
    }
    if (!target) {
      const allComponents = document.querySelectorAll("*")
      for (const component of allComponents) {
        if (component.shadowRoot) {
          const shadowTarget = component.shadowRoot.querySelector(`#${sectionId}`)
          if (shadowTarget) {
            target = shadowTarget
            break
          }
        }
      }
    }

    if (target) {
      const offsetTop = target.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    } else {
      // Fallback: scroll to approximate positions based on section names
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

customElements.define("navbar-component", NavbarComponent)


