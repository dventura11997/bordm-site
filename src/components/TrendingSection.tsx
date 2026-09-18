import styles from './TrendingSection.module.css';

const SECTION_ICON = "https://cdn.prod.website-files.com/650d3012c61d88c6395cfe59/655c24f47a207e6da70e2ddd_Group%2078.png";
const STAR = "https://cdn.prod.website-files.com/650d3012c61d88c6395cfe59/652659ab489f6cb49463fa84_star.svg";

interface TrendingArticle {
  href: string;
  thumb: string;
  seriesIcon: string;
  series: string;
  readTime: string;
  title: string;
  date: string;
  showStar: boolean;
}

const articles: TrendingArticle[] = [
  {
    href: "/articles/when-is-solo-leveling-releasing-on-crunchyroll",
    thumb: "https://cdn.prod.website-files.com/650e88099aad1a83c37df57d/6576a5802dfb1e7af16ed47d_6d2a5-16739045595947-1920.webp",
    seriesIcon: "https://cdn.prod.website-files.com/650e88099aad1a83c37df57d/6576a08e7df9aae1525383ee_Property%201%3Dsolo-leveling.png",
    series: "Solo Leveling",
    readTime: "2m Read",
    title: "When Is Solo Leveling Releasing On...",
    date: "Dec 11, 2023",
    showStar: true,
  },
  {
    href: "/articles/dragon-ball-sparking-zero-trailer-unleashes-a-wave-of-nostalgia",
    thumb: "https://cdn.prod.website-files.com/650e88099aad1a83c37df57d/65738f53ba67d3db245445f9_New-Dragon-Ball-Z-Budokai-Tenkaichi-featured.webp",
    seriesIcon: "https://cdn.prod.website-files.com/650e88099aad1a83c37df57d/652e53c95b4b5aa9863aef20_Property%201%3Ddragonball.png",
    series: "Dragon Ball",
    readTime: "4.5m Read",
    title: "Dragon Ball Sparking Zero Trailer...",
    date: "Dec 9, 2023",
    showStar: true,
  },
  {
    href: "/articles/forget-gojo-satoru-yuta-okkotsu-is-the-strongest-sorcerer-in-jujutsu-kaisen",
    thumb: "https://cdn.prod.website-files.com/650e88099aad1a83c37df57d/656e95e2addfe0321d2931ce_jujutsu-kaisen_yuta-fight-geto.webp",
    seriesIcon: "https://cdn.prod.website-files.com/650e88099aad1a83c37df57d/652e5482526ff2911a28b566_Property%201%3Djujutsu-kaisen.png",
    series: "JJK",
    readTime: "5m Read",
    title: "Yuta Okkotsu Is The Strongest Sorcerer In JJK...",
    date: "Dec 5, 2023",
    showStar: true,
  },
  {
    href: "/articles/unveiling-the-mysteries-of-the-shimane-illuminati-saga-everything-we-know-about-blue-exorcist-season-03",
    thumb: "https://cdn.prod.website-files.com/650e88099aad1a83c37df57d/656cff86dabb71952a1506a9_looking-great-v0-8p4ybrau54yb1.webp",
    seriesIcon: "https://cdn.prod.website-files.com/650e88099aad1a83c37df57d/656cfec79b90eacc399d7feb_Property%201%3Dblue-exorcist.png",
    series: "Blue Exorcist",
    readTime: "4m Read",
    title: "Unveiling the Mysteries of the Shimane...",
    date: "Dec 4, 2023",
    showStar: true,
  },
];

export default function TrendingSection() {
  return (
    <section className={styles.section}>

      {/* header inside max-width inner container */}
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.titleRow}>
            <img src={SECTION_ICON} alt="" className={styles.sectionIcon} loading="lazy" />
            <h2 className={styles.title}>Trending</h2>
          </div>
          <a href="/articles" className={styles.more}>
            <span className={styles.moreText}>More Articles</span>
            <span className={styles.moreArrow}>→</span>
          </a>
        </div>
      </div>

      {/* horizontal scroll track — same 3-col grid as ProductFeed */}
      <div className={styles.slideGrid}>
        <div className={styles.padCol} />

        <div className={styles.track}>
          {articles.map((article, i) => (
            <a key={i} href={article.href} className={styles.card}>

              {/* thumbnail on top */}
              <div
                className={styles.thumb}
                style={{ backgroundImage: `url("${article.thumb}")` }}
              />

              {/* content below */}
              <div className={styles.body}>
                <div className={styles.meta}>
                  <img src={article.seriesIcon} alt={article.series} className={styles.seriesIcon} loading="lazy" />
                  <span className={styles.seriesName}>{article.series}</span>
                  <div className={styles.dot} />
                  <span className={styles.readTime}>{article.readTime}</span>
                </div>

                <div className={styles.cardTitle}>{article.title}</div>

                <div className={styles.bottom}>
                  {article.showStar && (
                    <>
                      <img src={STAR} alt="Popular Article" className={styles.starIcon} loading="lazy" />
                      <div className={styles.dot} />
                    </>
                  )}
                  <span className={styles.date}>{article.date}</span>
                </div>
              </div>

            </a>
          ))}
        </div>

        <div className={styles.padCol} />
      </div>

    </section>
  );
}
