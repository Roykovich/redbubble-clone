import PromoHeader from "./PromoHeader";
import ProductRange from "./ProductRange";
import FeaturedProducts from "./FeaturedProducts";
import DesignsForUserProducts from "./DesignsForUserProducts";
import "../styles/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <PromoHeader />
      <ProductRange />
      <FeaturedProducts />
      <DesignsForUserProducts />
    </div>
  );
};

export default LandingPage;
