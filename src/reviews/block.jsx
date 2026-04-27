import "./block.scss";
import star from "/star-filled.png";
import emptystar from "/star-empty.png";
import vector from "/Vector.png";

export default function Block(props) {
  const stars = Array.from({ length: 5 }, (_, i) =>
    i < props.stars ? star : emptystar,
  );

  return (
    <>
      <div className="review-card">
        <div className="review-card__body">
          {props.img && <img src={props.img} />}
          <p>{props.info}</p>
        </div>
        <div className="review-card__author">
          <div className="review-card__author-name">
            <div className="review-card__author-avatar">
              <img src={vector}></img>
            </div>
            <p>{props.auth}</p>
          </div>
          <div className="review-card__stars">
            {stars.map((img, i) => (
              <img key={i} src={img} alt="star" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
