import { useState, useEffect } from 'react';
import styles from './TopBanner.module.css';

const NETFLIX = "https://cdn.prod.website-files.com/650d3012c61d88c6395cfe59/650d8997a1fac884ea0c48d1_netflix.svg";
const CRUNCHY = "https://cdn.prod.website-files.com/650d3012c61d88c6395cfe59/6546d572e198f9b4258bc5d7_crunchy.svg";
const TWITTER = "https://cdn.prod.website-files.com/650d3012c61d88c6395cfe59/65714b85442c73b57a346ad3_twitter.png";

interface Slide {
  text: string;
  logo: string;
  logoAlt: string;
  large?: boolean;
  cta?: string;
  href: string;
}

const slides: Slide[] = [
  {
    text: "Blue Samurai Called Best Animation Of 2023",
    logo: NETFLIX,
    logoAlt: "Netflix Logo",
    cta: "Watch Now",
    href: "https://www.netflix.com.au",
  },
  {
    text: "Attack On Titan Officially Ends 🥹",
    logo: CRUNCHY,
    logoAlt: "Crunchyroll",
    large: true,
    cta: "Watch Now",
    href: "https://www.crunchyroll.com.au",
  },
  {
    text: "One Piece Egghead Island airs Jan 07, 2024 🍿",
    logo: CRUNCHY,
    logoAlt: "Crunchyroll",
    large: true,
    href: "https://www.crunchyroll.com.au",
  },
  {
    text: "New Jujutsu Kaisen Eps Weekly  🔥",
    logo: CRUNCHY,
    logoAlt: "Crunchyroll",
    large: true,
    cta: "Watch Now",
    href: "https://www.crunchyroll.com/series/GRDV0019R/jujutsu-kaisen",
  },
  {
    text: "MHA Season 07 Out, April 07, 2024",
    logo: CRUNCHY,
    logoAlt: "Crunchyroll",
    large: true,
    cta: "Sign Up",
    href: "https://www.crunchyroll.com/series/GRDV0019R/jujutsu-kaisen",
  },
  {
    text: "MAPPA Animator Deletes Suicidal Tweet",
    logo: TWITTER,
    logoAlt: "Twitter",
    large: true,
    href: "#",
  },
];

export default function TopBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);
  const slide = slides[index];

  return (
    <div className={styles.banner}>
      <div className={styles.inner}>
        <button className={styles.arrow} onClick={prev} aria-label="Previous slide">‹</button>

        <div key={index} className={styles.content}>
          <span className={styles.text}>{slide.text}</span>
          <div className={styles.dot} />
          <a href={slide.href} target="_blank" rel="noreferrer" className={styles.ctaLink}>
            <img
              src={slide.logo}
              alt={slide.logoAlt}
              className={`${styles.streamLogo} ${slide.large ? styles.streamLogoLarge : ''}`}
              loading="lazy"
            />
            {slide.cta && <span className={styles.ctaText}>{slide.cta}</span>}
          </a>
        </div>

        <button className={styles.arrow} onClick={next} aria-label="Next slide">›</button>
      </div>
    </div>
  );
}
