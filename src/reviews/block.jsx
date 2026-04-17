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
      <div className="block1">
        <div className="block1__info">
          {props.img && <img src={props.img} />}
          <p>{props.info}</p>
        </div>
        <div className="block1__auth">
          <div className="block1__auth-name">
            <div className="vector">
              <img src={vector}></img>
            </div>
            <p>{props.auth}</p>
          </div>
          <div className="block1__auth-stars">
            {stars.map((img, i) => (
              <img key={i} src={img} alt="star" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
