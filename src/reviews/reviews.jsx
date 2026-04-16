import {useRef} from 'react';
import "./reviews.scss";
import Block from "./block";
// import star from "/star-filled.png";
// import vector from "/Vector.png";
import left from "/arrow-left.svg";
import right from "/arrow-right.svg";
export default function Reviews() {

   const insideblock = useRef(null);
  const handleScrollLeft = () => {
    insideblock.current?.scrollBy({
      left: -340,
      behavior: "smooth",
    });
    // console.log("go left");
  };

  const handleScrollRight = () => {
    insideblock.current?.scrollBy({
      left: 340,
      behavior: "smooth",
    });
    // console.log("go right");
  };
  return (
    <>
      <div className="revBody">
        <h1 className="revBody__title">What Our Customers Are Saying</h1>

        <div className="revBody__block" ref={insideblock} >
          <div className="insideblock" >
            <div className="blockCont1">
              <Block
                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur, ipsum eget ornare porttitor, ligula metus fermentum lacus, eget consequat ipsum est a nisi. Donec varius dictum eros a facilisis. Fusce at pulvinar ligula. Donec accumsan orci nisl, a sodales ante ultrices vel. Aliquam erat volutpat. Phasellus elit sem, vestibulum ut bibendum accumsan, facilisis sed mi. Suspendisse ut pellentesque risus."
                auth="Ellie Baldwin"
                stars={5}
              />
            </div>
            <div className="blockCont2">
              <Block
                img="/images/Background(8).png"
                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur, ipsum eget ornare porttitor, ligula metus fermentum lacus, eget consequat ipsum est a nisi. Donec varius dictum eros a facilisis. Fusce at pulvinar ligula. Donec accumsan orci nisl, a sodales ante ultrices vel. Aliquam erat volutpat."
                auth="Jannat Moody"
                stars={5}
              />
            </div>
            <div className="blockCont3">
              <Block
                img="/images/Background(2).png"
                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur, ipsum eget ornare porttitor, ligula metus fermentum lacus, eget consequat ipsum est a nisi. Donec varius dictum eros a facilisis. Fusce at pulvinar ligula. Donec accumsan orci nisl, a sodales ante ultrices vel. Aliquam erat volutpat. Phasellus elit sem, vestibulum ut bibendum accumsan, facilisis sed mi. Suspendisse ut pellentesque risus."
                auth="Sam Caldwell"
                stars={4}
              />
            </div>
            <div className="blockCont4">
              <Block
                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur, ipsum eget ornare porttitor, ligula metus fermentum lacus, eget consequat ipsum est a nisi. Donec varius dictum eros a facilisis. Fusce at pulvinar ligula. Donec accumsan orci nisl, a sodales ante ultrices vel. Aliquam erat volutpat. Phasellus elit sem, vestibulum ut bibendum accumsan, facilisis sed mi. Suspendisse ut pellentesque risus."
                auth="Ellie Baldwin"
                stars={5}
              />
            </div>

            <div className="blockCont5">
              <Block
                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur, ipsum eget ornare porttitor, ligula metus fermentum lacus, eget consequat ipsum est a nisi."
                auth="Darcy Lee"
                stars={5}
              />
            </div>
            <div className="blockCont6">
              <Block
                img="/images/ImagePlaceholder(1).png"
                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur, ipsum eget ornare porttitor, ligula metus fermentum lacus, eget consequat ipsum est a nisi. Donec varius dictum eros a facilisis. Fusce at pulvinar ligula. Donec accumsan orci nisl, a sodales ante ultrices vel. Aliquam erat volutpat."
                auth="Jannat Moody"
                stars={5}
              />
            </div>
          </div>

        </div>
          <div className="goLeft" onClick={handleScrollLeft}>
            <img src={left} />
          </div>
          <div className="goRight" onClick={handleScrollRight}>
            <img src={right} />
          </div>
      </div>
    </>
  );
}
