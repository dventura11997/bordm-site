import styles from './TwitterCards.module.css';

interface TweetCard {
  account: string;
  followers: string;
  text: string;
  href: string;
}

const cards: TweetCard[] = [
  {
    account: "AnimeTv",
    followers: "1M",
    href: "https://twitter.com/ToeiAnimation/status/1728609847195951417",
    text: "SPY x FAMILY CODE: White Movie x STREET FIGHTER 6 Collaboration Project! Yor VsChun-Li",
  },
  {
    account: "Zom100",
    followers: "81k+",
    href: "https://twitter.com/Zom100_EN/status/1728837907228831909",
    text: "Zom100: Bucket ListOf The Dead: One month until the grand season finale...",
  },
  {
    account: "Netflix Anime",
    followers: "50K+",
    href: "https://twitter.com/NetflixAnime/status/1729228603164958852",
    text: "Behind the scenes of #ONIMUSHA Episode 5: Yin Soul, showcasing the process from...",
  },
  {
    account: "Netflix Anime",
    followers: "30",
    href: "https://twitter.com/NetflixAnime/status/1729198402502640069",
    text: "Don't let your emotions overflow and turn you into a demon just yet, #Onmyoji arrives on Netflix...",
  },
  {
    account: "Crunchyroll",
    followers: "200K+",
    href: "https://twitter.com/Crunchyroll/status/1728873776983474345",
    text: "NEWS: A New Quest Begins in Shangri-La Frontier Anime's Latest Key Visual, Trailer",
  },
];

const VERIFIED_BADGE = "https://cdn.prod.website-files.com/650d3012c61d88c6395cfe59/650e9f0e244001d586d0a1bc_Twitter_Verified_Badge.svg";
const TREND_UP = "https://cdn.prod.website-files.com/650d3012c61d88c6395cfe59/651b9936b7a633cd6b5c723a_trend-up.svg";

export default function TwitterCards() {
  return (
    <div className={styles.wrapper}>
      {/* .heading-slider-v1 — hidden on desktop, shown on mobile */}
      <div className={styles.mobileHeading}>
        <span className={styles.mobileHeadingText}>*Yawns 🥱*</span>
      </div>

      {/* .header-global-slide-div > .grid-primary-slider-v2 */}
      <div className={styles.slideGrid}>
        {/* left padding column (5.5em) — clips overflow */}
        <div className={styles.padCol} />

        {/* center: .slider-container-02 */}
        <div className={styles.track}>
          {cards.map((card, i) => (
            <a
              key={i}
              href={card.href}
              target="_blank"
              rel="noreferrer"
              className={styles.card}
            >
              {/* top row: name+badge on left, count+trend on right */}
              <div className={styles.topRow}>
                <div className={styles.nameGroup}>
                  <span className={styles.accountName}>{card.account}</span>
                  <img
                    src={VERIFIED_BADGE}
                    alt="Verified Account"
                    className={styles.verifiedBadge}
                    loading="lazy"
                  />
                </div>
                <div className={styles.countGroup}>
                  <span className={styles.followers}>{card.followers}</span>
                  <img
                    src={TREND_UP}
                    alt="Trending"
                    className={styles.trendIcon}
                    loading="lazy"
                  />
                </div>
              </div>

              {/* tweet text */}
              <div className={styles.tweetText}>{card.text}</div>
            </a>
          ))}
        </div>

        {/* right padding column (5.5em) */}
        <div className={styles.padCol} />
      </div>
    </div>
  );
}
