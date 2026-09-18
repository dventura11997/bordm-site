import styles from './LatestArticles.module.css';
import { articleListings, slugGradient } from '../data/articleLoader';

const SECTION_ICON = "https://cdn.prod.website-files.com/650d3012c61d88c6395cfe59/6519f780cdf8f5f54c77e322_Frame%20227.svg";

const articles = articleListings.slice(0, 8);

export default function LatestArticles() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* .layout-left-right — header */}
        <div className={styles.header}>
          <div className={styles.titleRow}>
            <img src={SECTION_ICON} alt="All Articles - Icon" className={styles.sectionIcon} loading="lazy" />
            <h2 className={styles.title}>Latest</h2>
          </div>
          <a href="/articles" className={styles.more}>
            <span className={styles.moreText}>View All</span>
            <span className={styles.moreArrow}>→</span>
          </a>
        </div>

        {/* .latest-cms-list */}
        <div className={styles.list}>
          {articles.map((article, i) => (
            <a key={i} href={`/articles/${article.slug}`} className={styles.card}>
              {/* .div-thumbnail-medium.minimum-height-v2 */}
              <div
                className={styles.thumb}
                style={article.heroImage
                  ? { backgroundImage: `url("${article.heroImage}")` }
                  : { background: slugGradient(article.slug) }}
              />

              {/* .layout-horizontal-parent.div-start-aligned > .content-card */}
              <div className={styles.cardContent}>
                {/* .layout-horizontal-child: series icon + name + dot + read time */}
                <div className={styles.metaRow}>
                  <img src={article.seriesIcon} alt="" className={styles.seriesIcon} loading="lazy" />
                  <span className={styles.seriesName}>{article.seriesName}</span>
                  <span className={styles.dot} />
                  <span className={styles.readTime}>{article.readTime}</span>
                </div>

                {/* .text-01-primary-16px */}
                <div className={styles.cardTitle}>{article.title}</div>

                {/* .layout-horizontal-child: date (star + dot are w-condition-invisible) */}
                <div className={styles.footRow}>
                  <span className={styles.date}>{article.date}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
