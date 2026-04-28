import "./features.scss";
import delivery from "/delivery.png";
import lock from "/lock.png";
import returns from "/consumable.png";

export default function Features() {
  return (
    <>
      <div className="features">
        <div className="features__item">
          <img src={delivery}></img>
          <h1>Free Shipping*</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            consectetur, ipsum eget ornare porttitor,
          </p>
        </div>
        <div className="features__item">
          <img src={lock}></img>
          <h1>Secure Payment</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            consectetur, ipsum eget ornare porttitor,
          </p>
        </div>
        <div className="features__item">
          <img src={returns}></img>
          <h1>Easy Returns and Exchanges</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            consectetur, ipsum eget ornare porttitor,
          </p>
        </div>
      </div>
    </>
  );
}
