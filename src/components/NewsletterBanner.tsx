import { useState } from 'react';
import styles from './NewsletterBanner.module.css';

const REFRESH_ICON = "https://cdn.prod.website-files.com/650d3012c61d88c6395cfe59/654c9ef3d229a24e8aeb23cb_refresh.png";

type Status = 'idle' | 'success' | 'error';

export default function NewsletterBanner() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) {
      setStatus('error');
      return;
    }
    // Simulate submission — replace with real API call when ready
    setStatus('success');
    setEmail('');
  }

  return (
    <section id="subscribe" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.cardBanner}>

          {/* Subtitle */}
          <div className={styles.sub}>Fortnightly Anime News, Leaks &amp; More</div>

          {/* Heading */}
          <h1 className={styles.heading}>Subscribe Now</h1>

          {/* Form area */}
          <div className={styles.formWrap}>
            {status === 'idle' && (
              <form className={styles.form} onSubmit={handleSubmit} name="Subscription Form" aria-label="Subscription Form">
                <div className={styles.inputRow}>
                  <input
                    type="email"
                    placeholder="Enter Email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.input}
                    required
                  />
                  <button type="submit" className={styles.submitBtn} aria-label="Subscribe">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </form>
            )}

            {status === 'success' && (
              <div className={styles.successMsg} role="region" aria-label="Subscription Form success">
                <div className={styles.successText}>Thanks For Subscribing 🫰</div>
                <a href="/" className={styles.refreshBtn}>
                  <img src={REFRESH_ICON} alt="" className={styles.refreshIcon} loading="lazy" />
                </a>
              </div>
            )}

            {status === 'error' && (
              <div className={styles.errorMsg} role="region" aria-label="Subscription Form failure">
                <div className={styles.errorIcon}>!</div>
                <div className={styles.errorText}>Error, Please Try Again...</div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
