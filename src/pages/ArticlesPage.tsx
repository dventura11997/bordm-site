import { useState } from 'react';
import { Link } from 'react-router-dom';
import { articleListings, slugGradient } from '../data/articleLoader';
import Footer from '../components/Footer';
import styles from './ArticlesPage.module.css';

const CDN  = 'https://cdn.prod.website-files.com/650d3012c61d88c6395cfe59/';
const CDN2 = 'https://cdn.prod.website-files.com/650e88099aad1a83c37df57d/';

const ARTICLES_ICON  = CDN  + '655c24f47a207e6da70e2ddd_Group%2078.png';
const STAR_ICON      = CDN  + '652659ab489f6cb49463fa84_star.svg';
const BORDMMM_ICON   = CDN2 + '65713f65feba2a48bf1bfe80_bordmmm.png';

const FILTERS = [
  { tag: 'News',     icon: CDN2 + '652627ae0286b7e39f7daf00_speakerphone.svg' },
  { tag: 'Opinion',  icon: CDN2 + '6539901e61cf6c3acb1b9308_mug.svg' },
  { tag: 'Theories', icon: CDN2 + '652627b6ec51531776fdf179_mood-crazy-happy.svg' },
];

const POPULAR_SERIES = [
  { slug: 'pluto',          name: 'Pluto',          studio: 'Studio M2',      icon: CDN2 + '653f8c01b85dced5a6444e62_Property%201%3Dpluto.png' },
  { slug: 'dragon-ball',    name: 'Dragon Ball',    studio: 'Toei Animation', icon: CDN2 + '652e53c95b4b5aa9863aef20_Property%201%3Ddragonball.png' },
  { slug: 'naruto',         name: 'Naruto',         studio: 'Studio Pierrot', icon: CDN2 + '652e53b87c5e0c176034f4fc_Property%201%3Dnoruto.png' },
  { slug: 'jujutsu-kaisen', name: 'Jujutsu Kaisen', studio: 'MAPPA',          icon: CDN2 + '652e5482526ff2911a28b566_Property%201%3Djujutsu-kaisen.png' },
  { slug: 'one-piece',      name: 'One Piece',      studio: 'Toei Animation', icon: CDN2 + '652e548e6f57cd6275f7f7e4_Property%201%3Done-piece.png' },
];

export default function ArticlesPage() {
  const [activeTag,    setActiveTag]    = useState<string | null>(null);
  const [activeSeries, setActiveSeries] = useState<string | null>(null);

  const displayed = articleListings.filter(a =>
    (!activeTag    || a.tag        === activeTag) &&
    (!activeSeries || a.seriesSlug === activeSeries)
  );

  function toggleTag(tag: string) {
    setActiveTag(prev => prev === tag ? null : tag);
  }

  function toggleSeries(slug: string) {
    setActiveSeries(prev => prev === slug ? null : slug);
  }

  return (
    <>
      <div className={styles.page}>
        <div className={styles.inner}>
          <div className={styles.layout}>

            {/* ── Left sidebar (filters) ── */}
            <aside className={styles.sidebar}>
              <nav className={styles.sidebarNav}>
                <Link to="/" className={styles.sidebarBack} aria-label="Home">
                  <svg viewBox="0 0 8 12" width="7" height="11" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 1L2 6l5 5" />
                  </svg>
                </Link>
                <div className={styles.sidebarBreadcrumb}>
                  <Link to="/" className={styles.sidebarLink}>Home</Link>
                  <span className={styles.sidebarSep}>/</span>
                  <Link to="/articles" className={`${styles.sidebarLink} ${styles.sidebarLinkActive}`}>Articles</Link>
                </div>
              </nav>

              <h2 className={styles.filtersHeading}>Filters</h2>
              <ul className={styles.filtersList}>
                {FILTERS.map(f => (
                  <li key={f.tag}>
                    <button
                      className={`${styles.filterItem} ${activeTag === f.tag ? styles.filterItemActive : ''}`}
                      onClick={() => toggleTag(f.tag)}
                    >
                      <img src={f.icon} alt="" className={styles.filterIcon} loading="lazy" />
                      {f.tag}
                    </button>
                  </li>
                ))}
              </ul>
            </aside>

            {/* ── Centre: articles panel ── */}
            <div className={styles.container}>
              <div className={styles.header}>
                <div className={styles.headerLeft}>
                  <img src={ARTICLES_ICON} alt="" className={styles.articlesIcon} loading="lazy" />
                  <h1 className={styles.heading}>Articles</h1>
                </div>
                <a href="/contact-us" className={styles.suggestionsLink}>
                  <span>Suggestions</span>
                  <svg viewBox="0 0 8 12" width="7" height="11" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 1l5 5-5 5" />
                  </svg>
                </a>
              </div>

              <div className={styles.list}>
                {displayed.length === 0 && (
                  <p className={styles.empty}>No articles found.</p>
                )}
                {displayed.map((article) => (
                  <Link key={article.slug} to={`/articles/${article.slug}`} className={styles.card}>
                    <div className={styles.cardBody}>
                      <div className={styles.cardTop}>
                        <div className={styles.seriesRow}>
                          <img src={article.seriesIcon} alt={article.seriesName} className={styles.seriesIcon} loading="lazy" />
                          <span className={styles.seriesName}>{article.seriesName}</span>
                          <div className={styles.dot} />
                          <span className={styles.readTime}>{article.readTime}</span>
                        </div>
                        <h3 className={styles.cardTitle}>{article.title}</h3>
                        <p className={styles.cardIntro}>{article.intro}</p>
                      </div>
                      <div className={styles.cardMeta}>
                        {article.showStar && (
                          <>
                            <img src={STAR_ICON} alt="Popular" className={styles.starIcon} loading="lazy" />
                            <div className={styles.dot} />
                          </>
                        )}
                        <span className={styles.date}>{article.date}</span>
                        <div className={styles.dot} />
                        <span className={styles.tag} style={{ backgroundColor: article.tagColor }}>
                          {article.tag}
                        </span>
                      </div>
                    </div>
                    <div className={styles.cardHero}>
                      <img
                        src={article.heroImage || BORDMMM_ICON}
                        alt={article.title}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).src = BORDMMM_ICON; }}
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* ── Right panel (popular series) ── */}
            <aside className={styles.rightPanel}>
              <div className={styles.popularBox}>
                <h2 className={styles.popularHeading}>Popular</h2>
                <ul className={styles.popularList}>
                  {POPULAR_SERIES.map(s => (
                    <li key={s.slug}>
                      <button
                        className={`${styles.popularItem} ${activeSeries === s.slug ? styles.popularItemActive : ''}`}
                        onClick={() => toggleSeries(s.slug)}
                      >
                        <img src={s.icon} alt={s.name} className={styles.popularIcon} loading="lazy" />
                        <div>
                          <div className={styles.popularName}>{s.name}</div>
                          <div className={styles.popularStudio}>{s.studio}</div>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
