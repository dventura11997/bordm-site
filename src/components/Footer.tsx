import styles from './Footer.module.css';

const CDN = "https://cdn.prod.website-files.com/650d3012c61d88c6395cfe59/";
const LOGO_ICON  = CDN + "650d4b255935d8f435ebb143_bordm%3Alogo.svg";
const LOGO_TEXT  = CDN + "65445c04e3a831fe3d6345ae_bordm.svg";
const INSTAGRAM  = CDN + "652e6ba581ddb13871332eb3_brand-instagram.png";

const DISCLAIMER = `The information provided in the bordmmm newsletter is intended solely for the purpose of providing readers with news, updates, and insights related to anime and related topics. It is not intended as professional advice or as a substitute for any specific legal, financial, or professional guidance related to anime or any other subject matter.

While we strive to provide accurate and up-to-date information about anime and related news, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the content contained in this newsletter or on our website.

Any reliance you place on such information is at your own discretion and risk. The views and opinions expressed in articles, reviews, or any other content within this Anime News newsletter are those of the individual authors and do not necessarily reflect the official stance or views of our organisation.

We do not endorse or promote any specific anime series, studios, or products unless explicitly stated. We are committed to protecting your privacy and will take reasonable measures to ensure the security of your personal information if you subscribe to this newsletter or interact with our website. However, we cannot guarantee the absolute security of your data and are not responsible for any unauthorised access or data breaches that may occur.

This Anime News newsletter may contain links to third-party websites, streaming platforms, or resources related to anime. We do not control or endorse the content, products, services, or policies of these external websites and platforms. You should review their terms of use and privacy policies before accessing or using them. By subscribing to and reading this Anime News newsletter, you acknowledge and agree to the terms of this disclaimer. If you do not agree with these terms, please refrain from subscribing to or accessing our newsletter. We reserve the right to amend, modify, or update this disclaimer at any time without prior notice. We encourage you to check this disclaimer periodically for any changes.

If you have any questions or concerns about this disclaimer or the content of our Anime News newsletter, please don't hesitate to contact us at hello@bordmmm.com

Thank you for being a valued reader of bordmmm's newsletter.`;

export default function Footer() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.footer}>

          {/* logo */}
          <a href="#" className={styles.brand}>
            <img src={LOGO_ICON} loading="lazy" alt="Bordmmm - Logo" className={styles.logoIcon} />
            <img src={LOGO_TEXT} loading="lazy" alt="bordmmm logo" className={styles.logoText} />
          </a>

          {/* disclaimer */}
          <div className={styles.disclaimer}>
            {DISCLAIMER.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* policy links */}
          <div className={styles.policyRow}>
            <a href="https://www.bordmmm.com/policies/privacy-policy" className={styles.policyLink}>Privacy Policy</a>
            <span className={styles.policySep}>/</span>
            <a href="https://www.bordmmm.com/policies/terms-and-conditions" className={styles.policyLink}>Terms &amp; Conditions</a>
            <span className={styles.policySep}>/</span>
            <a href="/articles" className={styles.policyLink}>© 2026 Bordmmm</a>
          </div>

          {/* divider */}
          <div className={styles.divider} />

          {/* social icons — hidden until accounts are ready: TikTok, Facebook, Twitter */}
          <div className={styles.socials}>
            {/* <div className={styles.iconWrap}>
              <a href="https://www.tiktok.com/@bordmmm_?lang=en" target="_blank" rel="noreferrer" className={styles.iconBtn}>
                <img loading="lazy" src={TIKTOK} alt="" className={styles.socialIcon} />
              </a>
            </div> */}
            <div className={styles.iconWrap}>
              <a href="https://www.instagram.com/bordmmm/" target="_blank" rel="noreferrer" className={styles.iconBtn}>
                <img loading="lazy" src={INSTAGRAM} alt="Share/see Instagram Icon" className={styles.socialIcon} />
              </a>
            </div>
            {/* <div className={styles.iconWrap}>
              <a href="https://www.facebook.com/profile.php?id=61553004675844" target="_blank" rel="noreferrer" className={styles.iconBtn}>
                <img loading="lazy" src={FACEBOOK} alt="Share/see Facebook - icon" className={styles.socialIcon} />
              </a>
            </div>
            <div className={styles.iconWrap}>
              <a href="https://twitter.com/bordmmm" target="_blank" rel="noreferrer" className={styles.iconBtn}>
                <img loading="lazy" src={TWITTER} alt="Share/see Twitter - Icon" className={styles.socialIcon} />
              </a>
            </div> */}
          </div>

          {/* bottom row */}
          <div className={styles.bottom}>
            <span className={styles.copy}>©Bordmmm</span>
            <span className={styles.lang}>English (AUS)</span>
            <a href="https://blankcanvasdevs.com.au" className={styles.devLink}>Developed by Blank Canvas Devs</a>
          </div>

        </div>
      </div>
    </section>
  );
}
