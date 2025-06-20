const styles = /* css */ `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .spins-content {
    padding: 4rem 0;
    background: linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  .spins-section {
    text-align: center;
    margin-top: 3rem;
  }

  .spins-title {
    font-size: 1.8rem;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 1rem;
  }

  .spins-description {
    color: #cccccc;
    margin-bottom: 2rem;
    font-size:1.4rem;
  }
  .spins-grid {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-bottom: 4rem;
  }

  .spin-item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 2rem;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
  }

  .spin-item:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(169, 182, 80, 0.2);
    border-color: rgba(169, 182, 80, 0.3);
  }

  .spin-item.reverse {
    direction: rtl;
  }

  .spin-item.reverse > * {
    direction: ltr;
  }

  .spin-content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .spin-header {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .spin-icon {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(169, 182, 80, 0.1);
    border: 2px solid rgba(169, 182, 80, 0.2);
    border-radius: 50%;
  }

  .spin-icon img {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }

  .spin-name {
    font-size: 1.8rem;
    font-weight: 700;
    color: #ffffff;
  }

  .spin-description {
    color: #cccccc;
    line-height: 1.6;
    font-size: 1rem;
  }

  .spin-downloads {
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

  .spin-secondary {
    display: flex;
    gap: 0.5rem;
  }

  .spin-checksum {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: #a9b650;
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.3s ease;
  }

  .spin-checksum:hover {
    color: #ffffff;
  }

  .spin-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .spin-image-container {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    border: 2px solid rgba(169, 182, 80, 0.2);
    max-width: 100%;
  }

  .spin-image-container img {
    width: 100%;
    height: auto;
    display: block;
  }

  .spin-image-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(169, 182, 80, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  .credits-section {
    text-align: center;
    margin-top: 3rem;
  }

  .credits-card {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 2rem;
    backdrop-filter: blur(10px);
    max-width: 600px;
    margin: 0 auto;
  }

  .credits-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 1rem;
  }

  .credits-description {
    color: #cccccc;
    line-height: 1.6;
    font-size: 1.2rem;
  }

  .element {
    color: #a9b650;
    text-decoration: none;
    font-weight: 500;
  }

  .element:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    .spins-content {
      padding: 3rem 0;
    }

    .spin-item {
      grid-template-columns: 1fr;
      gap: 2rem;
      padding: 1.5rem;
    }

    .spin-item.reverse {
      direction: ltr;
    }

    .spin-name {
      font-size: 1.5rem;
    }

    .spin-secondary {
      flex-direction: column;
    }

    .credits-card {
      padding: 1.5rem;
    }
  }
`

const template = /* html */ `
  <style>${styles}</style>
  <section class="spins-content">
      <div class="spins-section" id="spins">
        <h3 class="spins-title" id="str-spins-title">Other Spins Available</h3>
        <p class="spins-description" id="str-spins-description">
          Explore alternative desktop environments created by our Team
        </p>
      </div>
    <div class="container">
      <div class="spins-grid">
        <!-- Budgie -->
        <div class="spin-item">
          <div class="spin-content">
            <div class="spin-header">
              <div class="spin-icon budgie-icon">
                <img src="Frontend/src/Images/spins/budgie-logo.webp" alt="Budgie Logo">
              </div>
              <h2 class="spin-name">CuerdOS Budgie</h2>
            </div>
            <p class="spin-description" id="str-content-downloadlink-8">
              Edition with Budgie desktop environment, with an original and more familiar customization.
            </p>
            <div class="spin-downloads">
              <a href="https://sourceforge.net/projects/cuerdos/files/community_spins/cuerdos-budgie/CuerdOS-1.2.1-Budgie_RE_amd64.iso/download" 
                 class="btn btn-primary spin-primary budgie-btn">
                <span id="str-download-sourceforge">Download from Sourceforge</span>
              </a>
              <div class="spin-secondary">
                <a href="https://archive.org/download/cuerdos-1.2.1-budgie-re-amd64/CuerdOS-1.2.1-Budgie_RE_amd64.iso" 
                   class="btn btn-outline">Archive</a>
                <a href="https://archive.org/download/cuerdos-1.2.1-budgie-re-amd64/cuerdos-1.2.1-budgie-re-amd64_archive.torrent" 
                   class="btn btn-outline">Torrent</a>
              </div>
              <a href="checksums/budgie-re-hash.txt" class="spin-checksum">
                Checksums
              </a>
            </div>
          </div>
          <div class="spin-image">
            <div class="spin-image-container budgie-bg">
              <img src="Frontend/src/Images/spins/cuerdos-budgie-re.webp" alt="CuerdOS Budgie">
            </div>
          </div>
        </div>

        <!-- CinnamiX -->
        <div class="spin-item reverse">
          <div class="spin-content">
            <div class="spin-header">
              <div class="spin-icon cinnamon-icon">
                <img src="Frontend/src/Images/spins/cinnamon-logo.webp" alt="Cinnamon Logo">
              </div>
              <h2 class="spin-name">CuerdOS CinnamiX</h2>
            </div>
            <p class="spin-description" id="str-content-downloadlink-4">
              With the Cinnamon desktop environment, an edition that aims to be easy to use and user-friendly for all types of users.
            </p>
            <div class="spin-downloads">
              <a href="https://sourceforge.net/projects/cuerdos/files/community_spins/cuerdos-cinnamix/CuerdOS-1.2.1-CinnamiX_amd64.iso/download" 
                 class="btn btn-primary spin-primary cinnamon-btn">
                <span id="str-download-sourceforge">Download from Sourceforge</span>
              </a>
              <div class="spin-secondary">
                <a href="https://archive.org/download/cuerdos-1.2.1-cinnamix-amd64/CuerdOS-1.2.1-CinnamiX_amd64.iso" 
                   class="btn btn-outline">Archive</a>
                <a href="https://archive.org/download/cuerdos-1.2.1-cinnamix-amd64/cuerdos-1.2.1-cinnamix-amd64_archive.torrent" 
                   class="btn btn-outline">Torrent</a>
              </div>
              <a href="checksums/cinnamix-hash.txt" class="spin-checksum">
                Checksums
              </a>
            </div>
          </div>
          <div class="spin-image">
            <div class="spin-image-container cinnamon-bg">
              <img src="Frontend/src/Images/spins/cuerdos-cinnamix.webp" alt="CuerdOS CinnamiX">
            </div>
          </div>
        </div>

        <!-- LXQt -->
        <div class="spin-item">
          <div class="spin-content">
            <div class="spin-header">
              <div class="spin-icon lxqt-icon">
                <img src="Frontend/src/Images/spins/lxqt-logo.webp" alt="LXQt Logo">
              </div>
              <h2 class="spin-name">CuerdOS LXQt</h2>
            </div>
            <p class="spin-description" id="str-content-downloadlink-6">
              Edition with LXQt desktop environment, with an original and more familiar customization.
            </p>
            <div class="spin-downloads">
              <a href="https://sourceforge.net/projects/cuerdos/files/community_spins/cuerdos-lxqt/CuerdOS-1.2.1-LXQt_amd64.iso/download" 
                 class="btn btn-primary spin-primary lxqt-btn">
                <span id="str-download-sourceforge">Download from Sourceforge</span>
              </a>
              <div class="spin-secondary">
                <a href="https://archive.org/download/cuerdos-1.2.1-lxqt-amd64/CuerdOS-1.2.1-LXQt_amd64.iso" 
                   class="btn btn-outline">Archive</a>
                <a href="https://archive.org/download/cuerdos-1.2.1-lxqt-amd64/cuerdos-1.2.1-lxqt-amd64_archive.torrent" 
                   class="btn btn-outline">Torrent</a>
              </div>
              <a href="checksums/lxqt-hash.txt" class="spin-checksum">
                Checksums
              </a>
            </div>
          </div>
          <div class="spin-image">
            <div class="spin-image-container lxqt-bg">
              <img src="Frontend/src/Images/spins/cuerdos-lxqt.webp" alt="CuerdOS LXQt">
            </div>
          </div>
        </div>

        <!-- Mate -->
        <div class="spin-item reverse">
          <div class="spin-content">
            <div class="spin-header">
              <div class="spin-icon mate-icon">
                <img src="Frontend/src/Images/spins/mate-logo.webp" alt="Mate Logo">
              </div>
              <h2 class="spin-name">CuerdOS MATE</h2>
            </div>
            <p class="spin-description" id="str-content-downloadlink-7">
              Edition with the Mate desktop environment, with a customization inspired by the ElementaryOS Pantheon desktop.
            </p>
            <div class="spin-downloads">
              <a href="https://sourceforge.net/projects/cuerdos/files/community_spins/cuerdos-mate/CuerdOS-1.2.1-MATE_amd64.iso/download" 
                 class="btn btn-primary spin-primary mate-btn">
                <span id="str-download-sourceforge">Download from Sourceforge</span>
              </a>
              <div class="spin-secondary">
                <a href="https://archive.org/download/cuerdos-1.2.1-mate-amd64/CuerdOS-1.2.1-MATE_amd64.iso" 
                   class="btn btn-outline">Archive</a>
                <a href="https://archive.org/download/cuerdos-1.2.1-mate-amd64/cuerdos-1.2.1-mate-amd64_archive.torrent" 
                   class="btn btn-outline">Torrent</a>
              </div>
              <a href="checksums/mate-hash.txt" class="spin-checksum">
                Checksums
              </a>
            </div>
          </div>
          <div class="spin-image">
            <div class="spin-image-container mate-bg">
              <img src="Frontend/src/Images/spins/cuerdos-mate.webp" alt="CuerdOS MATE">
            </div>
          </div>
        </div>

        <!-- Shell -->
        <div class="spin-item">
          <div class="spin-content">
            <div class="spin-header">
              <div class="spin-icon shell-icon">
                <img src="Frontend/src/Images/spins/shell-logo.webp" alt="Shell Logo">
              </div>
              <h2 class="spin-name">CuerdOS Shell</h2>
            </div>
            <p class="spin-description" id="str-content-downloadlink-5">
              The green plane distribution together with a modified Gnome Shell, to bring it back to its classic and familiar distribution.
            </p>
            <div class="spin-downloads">
              <a href="https://sourceforge.net/projects/cuerdos/files/community_spins/cuerdos-shell/CuerdOS_1.2.1-Shell.iso/download" 
                 class="btn btn-primary spin-primary shell-btn">
                <span id="str-download-sourceforge">Download from Sourceforge</span>
              </a>
              <div class="spin-secondary">
                <a href="https://archive.org/download/cuerd-os-1.2-1-shell-amd-64/CuerdOS_1.2.1-Shell.iso" 
                   class="btn btn-outline">Archive</a>
                <a href="https://archive.org/download/cuerd-os-1.2-1-shell-amd-64/cuerd-os-1.2-1-shell-amd-64_archive.torrent" 
                   class="btn btn-outline">Torrent</a>
              </div>
              <a href="checksums/shell-hash.txt" class="spin-checksum">
                Checksums
              </a>
            </div>
          </div>
          <div class="spin-image">
            <div class="spin-image-container shell-bg">
              <img src="Frontend/src/Images/spins/cuerdos-shell.webp" alt="CuerdOS Shell">
            </div>
          </div>
        </div>

        <!-- X3 -->
        <div class="spin-item reverse">
          <div class="spin-content">
            <div class="spin-header">
              <div class="spin-icon x3-icon">
                <img src="Frontend/src/Images/spins/x3-logo.webp" alt="X3 Logo">
              </div>
              <h2 class="spin-name">CuerdOS X3</h2>
            </div>
            <p class="spin-description" id="str-content-downloadlink-9">
              An experimental image of CuerdOS that mounts the Xfce desktop and the I3 window manager, providing an experience with the comfort of a desktop environment and the fluidity of a tiling window manager.
            </p>
            <div class="spin-downloads">
              <a href="https://sourceforge.net/projects/cuerdos/files/community_spins/cuerdos-x3/CuerdOS-1.2-X3_amd64.iso/download" 
                 class="btn btn-primary spin-primary x3-btn">
                <span id="str-download-sourceforge">Download from Sourceforge</span>
              </a>
              <div class="spin-secondary">
                <a href="https://archive.org/download/cuerd-os-1.2-x-3-amd-64/CuerdOS-1.2-X3_amd64.iso" 
                   class="btn btn-outline">Archive</a>
                <a href="https://archive.org/download/cuerd-os-1.2-x-3-amd-64/cuerd-os-1.2-x-3-amd-64_archive.torrent" 
                   class="btn btn-outline">Torrent</a>
              </div>
              <a href="checksums/x3-hash.md5" class="spin-checksum">
                Checksums
              </a>
            </div>
          </div>
          <div class="spin-image">
            <div class="spin-image-container x3-bg">
              <img src="Frontend/src/Images/spins/x3.webp" alt="CuerdOS X3">
            </div>
          </div>
        </div>
      </div>

      <!-- Credits -->
      <div class="credits-section">
        <div class="credits-card">
          <h3 class="credits-title">Spins</h3>
          <p class="credits-description" id="str-desc-autor">
            These editions were created and are mainly maintained by the CuerdOS Team
          </p>
        </div>
      </div>
    </div>
  </section>
`

class SpinsGridComponent extends HTMLElement {
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

customElements.define("spins-grid-component", SpinsGridComponent)
