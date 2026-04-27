import { useRef } from "react";

import "./hero1.scss";
import Card from "../card/card";
import data from "../assets/data.json";
import left from "/arrow-left.svg";
import right from "/arrow-right.svg";

export default function Hero(props) {
  const scrollContainer = useRef(null);

  const handleScrollLeft = () => {
    scrollContainer.current?.scrollBy({
      left: -200,
      behavior: "smooth",
    });
    // console.log("go left");
  };

  const handleScrollRight = () => {
    scrollContainer.current?.scrollBy({
      left: 200,
      behavior: "smooth",
    });
    // console.log("go right");
  };

  return (
    <>
      <section className="top-products">
        <div className="top-products__info">
          <h1> {props.title}</h1>
          <p>
            {props.info}
          </p>
        </div>
        <div className="toppProducts__prev"></div>

        <div className="top-products__scrollbar" ref={scrollContainer}>
          <div className="top-products__scrollbar-box">
            {data
              .filter((n) => n.category == props.category)
              .map((p, i) => (
                <div className="top-products__box-card" key={i}>
                  <Card
                    id={p.id}
                    title={p.name}
                    img={p.image}
                    price={p.price}
                  />
                </div>
              ))}
          </div>
        </div>
        <div className="top-products__prev-btn" onClick={handleScrollLeft}>
          <img src={left} />
        </div>
        <div className="top-products__next-btn" onClick={handleScrollRight}>
          <img src={right} />
        </div>
      </section>
    </>
  );
}
