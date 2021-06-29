import PromoHeader from "./PromoHeader";
import ProductRange from "./ProductRange";
import "../styles/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <PromoHeader />
      <ProductRange />
    </div>
  );
};

export default LandingPage;
