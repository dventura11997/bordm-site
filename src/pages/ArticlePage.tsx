import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { getArticleBySlug, slugGradient } from '../data/articleLoader';
import Footer from '../components/Footer';
import styles from './ArticlePage.module.css';

const CDN = "https://cdn.prod.website-files.com/650d3012c61d88c6395cfe59/";
const STAR          = CDN + "652659ab489f6cb49463fa84_star.svg";
const SHARE_ICON    = CDN + "652e6c5271885f5ba4b0a9c5_share.png";
const FACEBOOK_ICON = CDN + "652e6ba42bc517d18ae94d77_brand-facebook.png";
const WHATSAPP_ICON = CDN + "652e6ba511e33ba3f1c6961a_brand-whatsapp.png";
const REFRESH_ICON  = CDN + "654c9ef3d229a24e8aeb23cb_refresh.png";

type FormStatus = 'idle' | 'success' | 'error';

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : null;
  const navigate = useNavigate();
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (!article?.body.includes('twitter-tweet')) return;
    const existing = document.querySelector('script[src*="platform.twitter.com/widgets.js"]');
    if (existing) {
      // @ts-expect-error twitter global
      window.twttr?.widgets?.load();
      return;
    }
    const s = document.createElement('script');
    s.src = 'https://platform.twitter.com/widgets.js';
    s.async = true;
    s.charset = 'utf-8';
    document.body.appendChild(s);
  }, [article]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) { setFormStatus('error'); return; }
    setFormStatus('success');
    setEmail('');
  }

  if (!article) {
    return (
      <>
        <div className={styles.page}>
          <div className={styles.inner}>
            <p className={styles.notFound}>Article not found.</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const shareUrl   = encodeURIComponent(window.location.href);
  const shareTitle = encodeURIComponent(article.title);

  return (
    <>
      <div className={styles.page}>
        <div className={styles.inner}>
          <div className={styles.content}>

            {/* Breadcrumbs */}
            <nav className={styles.breadcrumbs}>
              <button className={styles.backArrow} onClick={() => navigate(-1)} aria-label="Go back">
                <svg viewBox="0 0 8 12" width="7" height="11" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 1L2 6l5 5" />
                </svg>
              </button>
              <div className={styles.breadcrumbLinks}>
                <Link to="/" className={styles.breadcrumbLink}>Home</Link>
                <span className={styles.breadcrumbSep}>/</span>
                <Link to="/articles" className={styles.breadcrumbLink}>Articles</Link>
                <span className={styles.breadcrumbSep}>/</span>
                <a href={`/trending-topics/${article.seriesSlug}`} className={`${styles.breadcrumbLink} ${styles.breadcrumbLower}`}>
                  {article.seriesName}
                </a>
              </div>
            </nav>

            {/* Title */}
            <h1 className={styles.title}>{article.title}</h1>

            {/* Intro */}
            <p className={styles.intro}>{article.intro}</p>

            {/* Meta: series icon + name + star + read time + date */}
            <div className={styles.meta}>
              <img src={article.seriesIcon} alt={article.seriesName} className={styles.seriesIconImg} loading="lazy" />
              <div className={styles.metaRight}>
                <a href={`/trending-topics/${article.seriesSlug}`} className={styles.seriesLink}>
                  <h5 className={styles.seriesName}>{article.seriesName}</h5>
                </a>
                <div className={styles.metaRow}>
                  {article.showStar && <img src={STAR} alt="Popular" className={styles.metaIcon} loading="lazy" />}
                  {article.showStar && <div className={styles.dot} />}
                  <span className={styles.metaText}>{article.readTime}</span>
                  <div className={styles.dot} />
                  <span className={styles.metaText}>{article.date}</span>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className={styles.divider} />

            {/* Share row */}
            <div className={styles.shareRow}>
              <div className={styles.shareLabel}>
                <img src={SHARE_ICON} alt="" className={styles.shareIcon} loading="lazy" />
                <span className={styles.shareLabelText}>Socials Share</span>
              </div>
              <div className={styles.shareBtns}>
                <a
                  href={`https://twitter.com/share?url=${shareUrl}&title=${shareTitle}`}
                  target="_blank" rel="noreferrer"
                  className={styles.shareBtn}
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="white"/>
                  </svg>
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&title=${shareTitle}`}
                  target="_blank" rel="noreferrer"
                  className={`${styles.shareBtn} ${styles.shareBtnFb}`}
                >
                  <img src={FACEBOOK_ICON} alt="Facebook" className={styles.socialIcon} loading="lazy" />
                </a>
                <a
                  href={`https://wa.me/?text=${shareUrl}`}
                  target="_blank" rel="noreferrer"
                  className={`${styles.shareBtn} ${styles.shareBtnWa}`}
                >
                  <img src={WHATSAPP_ICON} alt="WhatsApp" className={styles.socialIcon} loading="lazy" />
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className={styles.divider} />

            {/* Hero image or gradient fallback */}
            {article.heroImage ? (
              <img
                src={article.heroImage}
                alt={article.title}
                className={styles.heroImage}
                loading="lazy"
                sizes="(max-width: 991px) 100vw, 760px"
              />
            ) : (
              <div
                className={styles.heroImage}
                style={{ background: slugGradient(article.slug) }}
                aria-hidden="true"
              />
            )}

            {/* Article body — react-markdown handles both markdown and raw HTML (via rehype-raw) */}
            <div className={styles.richtext}>
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>{article.body}</ReactMarkdown>
            </div>

            {/* Mini newsletter CTA */}
            <div className={styles.miniNewsletter}>
              <p className={styles.miniSub}>Receive Regular Anime Updates</p>
              <p className={styles.miniTitle}>Subscribe To Bordmmm's Newsletter</p>
              <div className={styles.miniForm}>
                {formStatus === 'idle' && (
                  <form onSubmit={handleSubmit} aria-label="Subscription Form">
                    <div className={styles.miniInputRow}>
                      <input
                        type="email"
                        placeholder="Enter Email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className={styles.miniInput}
                        required
                      />
                      <button type="submit" className={styles.miniSubmit} aria-label="Subscribe">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                          <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                  </form>
                )}
                {formStatus === 'success' && (
                  <div className={styles.miniSuccess}>
                    <span>Thanks For Subscribing 🫰</span>
                    <a href="/" className={styles.miniRefresh}>
                      <img src={REFRESH_ICON} alt="" className={styles.refreshIcon} loading="lazy" />
                    </a>
                  </div>
                )}
                {formStatus === 'error' && (
                  <div className={styles.miniError}>
                    <div className={styles.errorIcon}>!</div>
                    <span>Error, Please Try Again...</span>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className={styles.footerBorder}>
        <Footer />
      </div>
    </>
  );
}
