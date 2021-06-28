import "../styles/PromoHeader.css";
/**
 * Make this component modular with state
 * <h1> {title} </h1>
 * <h3> {something} </h3>
 */

const PromoHeader = () => {
  return (
    <section>
      <div className="promo-header">
        <div>
          <h1>Promo Title</h1>
          <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
        </div>
      </div>
    </section>
  );
};

export default PromoHeader;
