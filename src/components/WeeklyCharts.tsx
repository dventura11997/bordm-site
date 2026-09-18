import styles from './WeeklyCharts.module.css';

const SECTION_ICON = "https://cdn.prod.website-files.com/650d3012c61d88c6395cfe59/6519f780cdf8f5f54c77e364_Frame%20228.svg";
const ARROW_UP   = "https://cdn.prod.website-files.com/650d3012c61d88c6395cfe59/651ff43edc3b882cea431d5f_Polygon%201.svg";
const ARROW_DOWN = "https://cdn.prod.website-files.com/650d3012c61d88c6395cfe59/651ff43e83b146d0fe36e3f4_Polygon%202.svg";

type ScoreType = 'green' | 'grey' | 'red';

interface ChartEntry {
  rank: number;
  title: string;
  thumb: string;
  arrowDir: 'up' | 'down';
  showArrow: boolean;
  eps: string;
  weeks: string;
  medal?: string;
  studio: string;
  creator: string;
  score: number;
  scoreType: ScoreType;
}

const entries: ChartEntry[] = [
  { rank: 1,  title: "Sousou No Frieren",       thumb: "https://media.kitsu.app/anime/46474/poster_image/small-2dc1165f5acd773939c7befb0949d258.jpeg",      arrowDir: 'up',   showArrow: true,  eps: "28",   weeks: "01", medal: "🥇", studio: "MAPPA",              creator: "Hajime Isayama",   score: 91, scoreType: 'green' },
  { rank: 2,  title: "Jujutsu Kaisen S2",        thumb: "https://media.kitsu.app/anime/45857/poster_image/small-27ea5f2f0c150e10bde498827d264139.jpeg",      arrowDir: 'up',   showArrow: true,  eps: "23",   weeks: "02", medal: "🥈", studio: "MAPPA",              creator: "Gege Akutami",     score: 89, scoreType: 'green' },
  { rank: 3,  title: "Tian Guan Cifu Er",        thumb: "https://media.kitsu.app/anime/45488/poster_image/small-8cc3805b97c01e19207e517357715340.jpeg",      arrowDir: 'down', showArrow: false, eps: "23",   weeks: "04", medal: "🥉", studio: "Bilibili",            creator: "Mo Xiang Tong...", score: 87, scoreType: 'green' },
  { rank: 4,  title: "The Apothecary Diaries",   thumb: "https://media.kitsu.app/anime/47083/poster_image/small-373235583ab666a9aa33840a27d069be.jpeg",      arrowDir: 'up',   showArrow: false, eps: "24",   weeks: "00",             studio: "Toho Animation",     creator: "-",                score: 87, scoreType: 'grey'  },
  { rank: 5,  title: "One Piece",                thumb: "https://media.kitsu.app/anime/poster_images/12/small.jpg",                                          arrowDir: 'down', showArrow: false, eps: "1079", weeks: "00",             studio: "Toei Animation",     creator: "Eiichiro Oda",     score: 87, scoreType: 'grey'  },
  { rank: 6,  title: "The Eminence In Shadows",  thumb: "https://media.kitsu.app/anime/47099/poster_image/small-00acf814a79a52f5b9333da6b9f87953.jpeg",      arrowDir: 'down', showArrow: true,  eps: "24",   weeks: "00",             studio: "NEXUS",              creator: "-",                score: 85, scoreType: 'red'   },
  { rank: 7,  title: "Dr Stone New Wrld P2",     thumb: "https://media.kitsu.app/anime/47246/poster_image/small-d5c70c7c476207100e43150c95396a52.jpeg",      arrowDir: 'up',   showArrow: false, eps: "-",    weeks: "00",             studio: "TMS",                creator: "Riichiro Inagaki", score: 84, scoreType: 'grey'  },
  { rank: 8,  title: "Holo No Graffiti",         thumb: "https://media.kitsu.app/anime/poster_images/43740/small.jpg",                                       arrowDir: 'down', showArrow: true,  eps: "-",    weeks: "00",             studio: "Wit Studio",         creator: "Tatsuya Endo",     score: 82, scoreType: 'red'   },
  { rank: 9,  title: "Spy Family S2",            thumb: "https://media.kitsu.app/anime/45619/poster_image/small-091e4e22c63906d12d7f46545d246367.jpeg",      arrowDir: 'up',   showArrow: false, eps: "12",   weeks: "00",             studio: "Holoive Production", creator: "-",                score: 82, scoreType: 'grey'  },
  { rank: 10, title: "Kimi No Koto",             thumb: "https://media.kitsu.app/anime/48348/poster_image/small-f099fbfb36b70b2241f4e2a710da8514.jpeg",      arrowDir: 'up',   showArrow: false, eps: "-",    weeks: "00",             studio: "Bibury",             creator: "Rikito Nakamura",  score: 80, scoreType: 'grey'  },
];

export default function WeeklyCharts() {

  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* .layout-left-right — header */}
        <div className={styles.header}>
          <div className={styles.titleRow}>
            <img src={SECTION_ICON} alt="Popular videos - icon" className={styles.sectionIcon} loading="lazy" />
            <h2 className={styles.title}>Weekly Charts</h2>
          </div>
          <a href="https://myanimelist.net/topanime.php?type=airing" target="_blank" rel="noreferrer" className={styles.more}>
            <span className={styles.moreText}>Via Top Anime</span>
            <span className={styles.moreArrow}>→</span>
          </a>
        </div>

        {/* .grid-charts > .charts-container > .grid-charts-01 */}
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.headRow}>
                <th className={styles.thRank}>
                  {/* matches the heading div: "    #       Anime Ranking" */}
                  <span className={styles.headRankHash}>#</span>
                  <span className={styles.headRankLabel}>Anime Ranking</span>
                </th>
                <th className={`${styles.thWks} ${styles.mobileHide}`}>Wks In Top10</th>
                <th className={`${styles.thStudio} ${styles.mobileHide}`}>Studio</th>
                <th className={`${styles.thCreator} ${styles.mobileHide}`}>Creator</th>
                <th className={styles.thScore}>Score</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry) => (
                <tr key={entry.rank} className={styles.row}>

                  {/* rank + arrow + thumbnail + title + EPs */}
                  <td className={styles.tdRank}>
                    <div className={styles.rankCell}>
                      {/* .div-ranking: rank number + arrow */}
                      <div className={styles.rankGroup}>
                        <h3 className={styles.rankNum}>{entry.rank}</h3>
                        <img
                          src={entry.arrowDir === 'up' ? ARROW_UP : ARROW_DOWN}
                          alt={entry.arrowDir === 'up' ? 'Up' : 'Down'}
                          className={`${styles.arrow} ${!entry.showArrow ? styles.arrowHidden : ''}`}
                          loading="lazy"
                        />
                      </div>

                      {/* .image-50px-square.ranking-N — thumbnail */}
                      <div
                        className={styles.thumb}
                        style={{
                          backgroundImage: `url("${entry.thumb}")`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center top',
                        }}
                      />

                      {/* .content-card.spacing-none */}
                      <div className={styles.cardContent}>
                        <div className={styles.animeName}>{entry.title}</div>
                        <div className={styles.epsRow}>
                          <span className={styles.epsLabel}>EPs</span>
                          <span className={styles.epsNum}>{entry.eps}</span>
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Wks In Top10 */}
                  <td className={`${styles.tdWks} ${styles.mobileHide}`}>
                    <div className={styles.wksCell}>
                      <span className={styles.wksNum}>{entry.weeks}</span>
                      {entry.medal && <span className={styles.medal}>{entry.medal}</span>}
                    </div>
                  </td>

                  {/* Studio */}
                  <td className={`${styles.tdStudio} ${styles.mobileHide}`}>{entry.studio}</td>

                  {/* Creator */}
                  <td className={`${styles.tdCreator} ${styles.mobileHide}`}>{entry.creator}</td>

                  {/* Score */}
                  <td className={styles.tdScore}>
                    <div className={`${styles.scoreBadge} ${styles[`score_${entry.scoreType}`]}`}>
                      <span className={`${styles.scoreText} ${entry.scoreType !== 'green' ? styles.scoreTextWhite : ''}`}>
                        {entry.score}%
                      </span>
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
