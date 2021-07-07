import PromoHeader from "./PromoHeader";
import ProductRange from "./ProductRange";
import FeaturedCarousel from "./FeaturedCarousel";
import "../styles/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <PromoHeader />
      <ProductRange />
      <FeaturedCarousel />
    </div>
  );
};

export default LandingPage;
