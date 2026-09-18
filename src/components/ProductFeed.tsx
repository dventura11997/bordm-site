import styles from './ProductFeed.module.css';

const BUY_ICON = "https://cdn.prod.website-files.com/650d3012c61d88c6395cfe59/655002b019795897b2b3520c_Group%2062.png";

interface Product {
  href: string;
  storeIcon: string;
  store: string;
  reviews: string;
  name: string;
  images: [string, string, string];
  price: string;
}

const products: Product[] = [
  {
    href: "https://amzn.to/3t00luf",
    storeIcon: "https://cdn.prod.website-files.com/650e88099aad1a83c37df57d/656f20cfa0b7b2a3c81341c0_Rectangle%20125.png",
    store: "Amazon",
    reviews: "(5,432) Product Reviews",
    name: "Nintendo Switch",
    images: [
      "https://cdn.prod.website-files.com/650e88099aad1a83c37df57d/656f20d772ebac076f911b93_17.jpg",
      "https://cdn.prod.website-files.com/650e88099aad1a83c37df57d/656f20dd352bb3d0c01c8108_16.jpg",
      "https://cdn.prod.website-files.com/650e88099aad1a83c37df57d/656f20e348f1328731e38364_18.jpg",
    ],
    price: "$298.00 (USD)",
  },
  {
    href: "https://amzn.to/46Cpb13",
    storeIcon: "https://cdn.prod.website-files.com/650e88099aad1a83c37df57d/6555931460302ac505842ad9_Rectangle%20125.png",
    store: "Amazon",
    reviews: "(10,398) Product Reviews",
    name: "Sony WH-1000XM5 Headphones",
    images: [
      "https://cdn.prod.website-files.com/650e88099aad1a83c37df57d/656d2d76f95e2fb8c182af2e_13.jpg",
      "https://cdn.prod.website-files.com/650e88099aad1a83c37df57d/656d2d796598f7bad53fae8f_14.jpg",
      "https://cdn.prod.website-files.com/650e88099aad1a83c37df57d/656d2d7b4c3117db5e364b60_15.jpg",
    ],
    price: "$328.00 (USD)",
  },
  {
    href: "https://amzn.to/46zT5ms",
    storeIcon: "https://cdn.prod.website-files.com/650e88099aad1a83c37df57d/6555931460302ac505842ad9_Rectangle%20125.png",
    store: "Amazon",
    reviews: "(7,480 Reviews)",
    name: "Nintendo Switch: Pokémon Violet",
    images: [
      "https://cdn.prod.website-files.com/650e88099aad1a83c37df57d/656a6d1b5904047f5ca4ea69_9.jpg",
      "https://cdn.prod.website-files.com/650e88099aad1a83c37df57d/656a6d20f479515826f2bfa3_8.jpg",
      "https://cdn.prod.website-files.com/650e88099aad1a83c37df57d/656a6d255904047f5ca4ef30_7.jpg",
    ],
    price: "$59.98 (USD)",
  },
  {
    href: "https://theoodie.com/products/gengar-pokemon-oodie",
    storeIcon: "https://cdn.prod.website-files.com/650e88099aad1a83c37df57d/65694239051ab3cc42730f62_Group%2098.png",
    store: "Oodie",
    reviews: "(09) Product Reviews",
    name: "Pokemon: Gengar Pokemon Oodie",
    images: [
      "https://cdn.prod.website-files.com/650e88099aad1a83c37df57d/656941bc63931ea93efe565c_10.jpg",
      "https://cdn.prod.website-files.com/650e88099aad1a83c37df57d/656941c149c26cdb95f628d6_11.jpg",
      "https://cdn.prod.website-files.com/650e88099aad1a83c37df57d/656941c6866875695eda8c55_12.jpg",
    ],
    price: "$99.00 (AUD)",
  },
  {
    href: "https://www.amazon.com.au/OLAIKE-Silicone-Shockproof-Portable-Suitable/dp/B0B6ZBNGF3/ref=sr_1_43?crid=2JTJ7A6D9559Q&keywords=switch+case&qid=1699701940&sprefix=switch+case%2Caps%2C276&sr=8-43",
    storeIcon: "https://cdn.prod.website-files.com/650e88099aad1a83c37df57d/6555931460302ac505842ad9_Rectangle%20125.png",
    store: "Amazon",
    reviews: "(17) Product Reviews",
    name: "OLAIKE 16-Slot Switch Game Case",
    images: [
      "https://cdn.prod.website-files.com/650e88099aad1a83c37df57d/6555a7bb0759d0364d100c38_Frame%20251.webp",
      "https://cdn.prod.website-files.com/650e88099aad1a83c37df57d/6555a7beb7c1be8b11cbcc8f_Frame%20252.webp",
      "https://cdn.prod.website-files.com/650e88099aad1a83c37df57d/6555a7bfd68a7f239716dee6_Frame%20253.webp",
    ],
    price: "$17.99 (AUD)",
  },
];

export default function ProductFeed() {
  return (
    <div className={styles.wrapper}>
      {/* .heading-slider-v2 — mobile only */}
      <div className={styles.mobileHeading}>
        <span className={styles.mobileHeadingText}>*Product Feed 😲*</span>
      </div>

      {/* .header-global-slide-div > .grid-primary-slider-v2 */}
      <div className={styles.slideGrid}>
        <div className={styles.padCol} />

        {/* .slider-container-02 */}
        <div className={styles.track}>
          {products.map((product, i) => (
            <a
              key={i}
              href={product.href}
              target="_blank"
              rel="noreferrer"
              className={styles.card}
            >
              {/* .div-product-display > .container-product */}
              <div className={styles.productDisplay}>
                <div className={styles.containerProduct}>

                  {/* top row: store icon + name | stock badge */}
                  <div className={styles.topRow}>
                    <div className={styles.storeGroup}>
                      <img src={product.storeIcon} alt={product.store} className={styles.storeIcon} loading="lazy" />
                      <span className={styles.storeName}>{product.store}</span>
                    </div>
                    <div className={styles.stockBadge}>
                      <span className={styles.stockText}>In Stock</span>
                    </div>
                  </div>

                  {/* middle: reviews + product name */}
                  <div className={styles.middle}>
                    <div className={styles.reviewRow}>
                      <span className={styles.reviewCount}>{product.reviews}</span>
                      <span className={styles.stars}>⭐️⭐️⭐️⭐️⭐️</span>
                    </div>
                    <div className={styles.productName}>{product.name}</div>
                  </div>

                  {/* .images-product-small — 3 product images */}
                  <div className={styles.imagesRow}>
                    {product.images.map((src, j) => (
                      <div key={j} className={styles.imgWrap}>
                        <img src={src} alt="" className={styles.productImg} loading="lazy" />
                      </div>
                    ))}
                  </div>

                </div>

                {/* .product-by-button */}
                <div className={styles.buyButton}>
                  <div className={styles.buyLeft}>
                    <img src={BUY_ICON} alt="" className={styles.buyIcon} loading="lazy" />
                    <span className={styles.buyText}>Buy Now</span>
                  </div>
                  <span className={styles.price}>{product.price}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className={styles.padCol} />
      </div>
    </div>
  );
}
