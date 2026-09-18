import TwitterCards from '../components/TwitterCards';
import NewsletterBanner from '../components/NewsletterBanner';
import TrendingSection from '../components/TrendingSection';
import ProductFeed from '../components/ProductFeed';
import WeeklyCharts from '../components/WeeklyCharts';
import LatestArticles from '../components/LatestArticles';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <TwitterCards />
      <NewsletterBanner />
      <TrendingSection />
      <ProductFeed />
      <WeeklyCharts />
      <LatestArticles />
      <Footer />
    </>
  );
}
