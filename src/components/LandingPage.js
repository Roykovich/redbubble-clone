import PromoHeader from "./PromoHeader";
import ProductRange from "./ProductRange";
import FeaturedProducts from "./FeaturedProducts";
import DesignsForUserProducts from "./DesignsForUserProducts";
import FeaturedArtists from "./FeaturedArtists";

import "../styles/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <PromoHeader />
      <ProductRange />
      <FeaturedProducts />
      <DesignsForUserProducts />
      <FeaturedArtists />
    </div>
  );
};

export default LandingPage;
