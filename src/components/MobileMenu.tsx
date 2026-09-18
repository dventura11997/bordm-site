import { useState, useEffect } from 'react';
import styles from './MobileMenu.module.css';

interface Props {
  open: boolean;
  onClose: () => void;
}

const navLinks = [
  { label: 'Home',       href: '/' },
  { label: 'Articles',   href: '/articles' },
  { label: 'Quizzes',    href: '/quizzes' },
  { label: 'Contact Us', href: '/contact' },
];

export default function MobileMenu({ open, onClose }: Props) {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (open) {
      setClosing(false);
      setVisible(true);
    } else if (visible) {
      setClosing(true);
      const t = setTimeout(() => { setVisible(false); setClosing(false); }, 200);
      return () => clearTimeout(t);
    }
  }, [open]);

  if (!visible) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={`${styles.panel} ${closing ? styles.panelClosing : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.section}>
          <div className={styles.sectionLabel}>Menu</div>
          <hr className={styles.divider} />
          <nav className={styles.nav}>
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className={styles.navLink} onClick={onClose}>
                {link.label}
              </a>
            ))}
          </nav>
          <hr className={styles.divider} />
        </div>

        <div className={styles.section}>
          <div className={styles.sectionLabel}>Find Us@</div>
          <div className={styles.socials}>
            {/* Hidden until accounts are ready: TikTok, Facebook, Twitter */}
            {/* <a href="#" className={styles.socialBtn} aria-label="TikTok"><TikTokIcon /></a> */}
            <a href="https://www.instagram.com/bordmmm/" target="_blank" rel="noreferrer" className={styles.socialBtn} aria-label="Instagram"><InstagramIcon /></a>
            {/* <a href="#" className={styles.socialBtn} aria-label="Facebook"><FacebookIcon /></a> */}
            {/* <a href="#" className={styles.socialBtn} aria-label="Twitter"><TwitterIcon /></a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

