import PromoHeader from "./PromoHeader";
import ProductRange from "./ProductRange";
import FeaturedCarousel from "./FeaturedCarousel";
import DesignsForUserCarousel from "./DesignsForUserCarousel";
import "../styles/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <PromoHeader />
      <ProductRange />
      <FeaturedCarousel />
      <DesignsForUserCarousel />
    </div>
  );
};

export default LandingPage;
