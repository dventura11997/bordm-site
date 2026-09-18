import { useState } from 'react';
import MobileMenu from './MobileMenu';
import styles from './Header.module.css';

const HAMBURGER = "https://cdn.prod.website-files.com/650d3012c61d88c6395cfe59/650d887aefb0f0ece89c365d_hamburger.svg";
const LOGO_ICON = "https://cdn.prod.website-files.com/650d3012c61d88c6395cfe59/650d4b255935d8f435ebb143_bordm%3Alogo.svg";
const LOGO_TEXT = "https://cdn.prod.website-files.com/650d3012c61d88c6395cfe59/65445c04e3a831fe3d6345ae_bordm.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          {/* Left: hamburger + logo */}
          <div className={styles.left}>
            <button
              className={`${styles.menuBtn} ${menuOpen ? styles.menuBtnOpen : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="menu"
            >
              <img
                src={HAMBURGER}
                alt="Hamburger Menu - Icon"
                className={styles.hamburgerImg}
                loading="lazy"
              />
            </button>

            <a href="/" className={styles.brand}>
              <img
                src={LOGO_ICON}
                alt="Bordmmm - Logo"
                className={styles.logoImg}
                loading="lazy"
              />
              <img
                src={LOGO_TEXT}
                alt="bordmmm logo"
                className={styles.logoTextImg}
                loading="lazy"
              />
            </a>
          </div>

          {/* Center: search */}
          <div className={styles.center}>
            <div className={styles.searchWrap}>
              <input
                type="text"
                placeholder="Search..."
                className={styles.searchInput}
              />
            </div>
          </div>

          {/* Right: icon buttons + subscribe */}
          <div className={styles.right}>
            <button className={styles.iconBtn} aria-label="Notifications">
              <BellIcon />
            </button>
            <button className={styles.iconBtn} aria-label="Share">
              <SendIcon />
            </button>
            <a href="#" className={styles.subscribeBtn}>Subscribe</a>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

function BellIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M15 17H9a3 3 0 0 0 6 0z" strokeLinecap="round" />
      <path d="M5.268 15A9.02 9.02 0 0 1 3 9a9 9 0 0 1 18 0 9.02 9.02 0 0 1-2.268 6H5.268z" strokeLinecap="round" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
