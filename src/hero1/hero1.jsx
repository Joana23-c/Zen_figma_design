import { useRef } from "react";

import "./hero1.scss";
import Card from "../card/card";
import data from "../assets/data.json";
import left from "/arrow-left.svg";
import right from "/arrow-right.svg";

export default function Hero() {
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
      <section className="toppProducts">
        <div className="toppProducts__infos">
          <h1> New Arrivals</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            consectetur.
          </p>
        </div>
        <div className="toppProducts__goLeft"></div>

        <div className="toppProducts__scrollbar" ref={scrollContainer}>
          <div className="toppProducts__scrollbar-box">
            {data
              .filter((n) => n.category == "new")
              .map((p, i) => (
                <div className="pp__box-card" key={i}>
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
        <div className="toppProducts__goLeft-cont" onClick={handleScrollLeft}>
          <img src={left} />
        </div>
        <div className="toppProducts__goRight" onClick={handleScrollRight}>
          <img src={right} />
        </div>
      </section>
    </>
  );
}
