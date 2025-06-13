const styles = /* css */ `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .download-section {
    padding: 6rem 0 1rem;
    background: linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .section-header {
    text-align: center;
    margin-bottom: 4rem;
  }

  .section-title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    background: var(--gradient-title);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .section-description {
    font-size: 1.2rem;
    color: #cccccc;
    max-width: 600px;
    margin: 0 auto;
  }

  .requirements-card {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 2rem;
    margin-bottom: 3rem;
    backdrop-filter: blur(10px);
  }

  .requirements-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .requirements-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .requirements-subtitle {
    font-size: 1.2rem;
    font-weight: 600;
    color: #a9b650;
    margin-bottom: 1rem;
  }

  .requirements-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  .requirement-item {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: #cccccc;
  }

  .requirement-item i {
    color: #a9b650;
    font-size: 1.1rem;
  }

  .download-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .download-card {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
  }

  .download-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(169, 182, 80, 0.2);
    border-color: rgba(169, 182, 80, 0.3);
  }

  .download-image {
    height: 200px;
    overflow: hidden;
  }

  .download-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .download-content {
    padding: 2rem;
  }

  .download-title {
    font-size: 1.3rem;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 1rem;
  }

  .download-description {
    color: #cccccc;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  .download-buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
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

  .btn-outline {
    background: transparent;
    color: #a9b650;
    border: 1px solid rgba(169, 182, 80, 0.5);
  }

  .btn-outline:hover {
    background: rgba(169, 182, 80, 0.1);
    border-color: #a9b650;
  }

  .download-secondary {
    display: flex;
    gap: 0.5rem;
  }

  .download-checksum {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: #a9b650;
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.3s ease;
  }

  .download-checksum:hover {
    color: #ffffff;
  }

  .spins-image-container {
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  .spins-image-container:hover {
    transform: scale(1.05);
  }

  .spins-image {
    width: 100%;
    max-width: 600px;
    height: auto;
    border-radius: 16px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    .download-section {
      padding: 4rem 0;
    }

    .section-title {
      font-size: 2rem;
    }

    .requirements-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .download-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .download-content {
      padding: 1.5rem;
    }

    .download-secondary {
      flex-direction: column;
    }
  }
`

const template = /* html */ `
  <style>${styles}</style>
  <section class="download-section" id="download">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title" id="str-title-download">Download CuerdOS Cessna 1.2.1</h2>
        <p class="section-description" id="str-content-download-1">
          Choose your preferred edition and start your journey with CuerdOS today.
        </p>
      </div>

      <!-- System Requirements -->
      <div class="requirements-card">
        <h3 class="requirements-title" id="str-title-tabletitle">System Requirements</h3>
        <div class="requirements-grid">
          <div class="requirements-column">
            <h4 class="requirements-subtitle" id="str-tabletitle-minimum">Minimum</h4>
            <ul class="requirements-list">
              <li class="requirement-item">
                <span id="str-tablecontent-mincpu">x86_64 1.00 GHz CPU</span>
              </li>
              <li class="requirement-item">
                <span id="str-tablecontent-minram">1GB of RAM</span>
              </li>
              <li class="requirement-item">
                <span id="str-tablecontent-mindisk">8.5GB disk storage</span>
              </li>
            </ul>
          </div>
          <div class="requirements-column">
            <h4 class="requirements-subtitle" id="str-tabletitle-recommended">Recommended</h4>
            <ul class="requirements-list">
              <li class="requirement-item">
                <span id="str-tablecontent-reccpu">x86_64 2.00 GHz CPU dual-core</span>
              </li>
              <li class="requirement-item">
                <span id="str-tablecontent-recram">2GB of RAM</span>
              </li>
              <li class="requirement-item">
                <span id="str-tablecontent-recdisk">8.5GB SSD storage</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Download Cards -->
      <div class="download-grid" >
        <div class="download-card">
          <div class="download-image">
            <img src="Frontend/src/Images/cuerdos-standard.webp" alt="CuerdOS Standard">
          </div>
          <div class="download-content">
            <h3 class="download-title" id="str-title-downloadlink-1">CuerdOS Standard</h3>
            <p class="download-description" id="str-content-downloadlink-1">
              The flagship edition featuring the Sway window manager and modern Wayland experience.
            </p>
            <div class="download-buttons">
              <a href="https://sourceforge.net/projects/cuerdos/files/stable/standard/CuerdOS-1.2.1-Standard_amd64.iso/download" 
                 class="btn btn-primary download-primary">
                <span id="str-download-sourceforge">Download from Sourceforge</span>
              </a>
              <div class="download-secondary">
                <a href="https://archive.org/download/cuerd-os-1.2.1-standard-amd-64/CuerdOS-1.2.1-Standard_amd64.iso" 
                   class="btn btn-outline">Archive</a>
                <a href="https://archive.org/download/cuerd-os-1.2.1-standard-amd-64/cuerd-os-1.2.1-standard-amd-64_archive.torrent" 
                   class="btn btn-outline">Torrent</a>
              </div>
              <a href="checksums/standard-hash.txt" class="download-checksum">
                Checksums
              </a>
            </div>
          </div>
        </div>
        <div class="download-card">
          <div class="download-image">
            <img src="Frontend/src/Images/cuerdos-legacy.webp" alt="CuerdOS Legacy">
          </div>
          <div class="download-content">
            <h3 class="download-title" id="str-title-downloadlink-2">CuerdOS Legacy</h3>
            <p class="download-description" id="str-content-downloadlink-2">
              Traditional desktop experience with Xfce, perfect for users who prefer familiar interfaces.
            </p>
            <div class="download-buttons">
              <a href="https://sourceforge.net/projects/cuerdos/files/stable/legacy/CuerdOS-1.2.1-Legacy_amd64.iso/download" 
                 class="btn btn-primary download-primary legacy-btn">
                <span id="str-download-sourceforge-2">Download from Sourceforge</span>
              </a>
              <div class="download-secondary">
                <a href="https://archive.org/download/cuerd-os-1.2.1-legacy-amd-64/CuerdOS-1.2.1-Legacy_amd64.iso" 
                   class="btn btn-outline">Archive</a>
                <a href="https://archive.org/download/cuerd-os-1.2.1-legacy-amd-64/cuerd-os-1.2.1-legacy-amd-64_archive.torrent" 
                   class="btn btn-outline">Torrent</a>
              </div>
              <a href="checksums/legacy-hash.txt" class="download-checksum legacy-link">
                Checksums
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`

class DownloadComponent extends HTMLElement {
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

customElements.define("download-component", DownloadComponent)
