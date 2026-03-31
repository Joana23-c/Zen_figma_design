
import Img from '/images/Img.png';
import "./sec3.scss";

export default function Section (){
    return (
        <>
        <section className="container">
            <div className="container__image" >
                <img src={Img}></img>
            </div>
            <div className="container__info">
                <div className="container__info-center">
                <h1>
                    We Believe in Everything Natural
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur, ipsum eget ornare porttitor, ligula metus fermentum lacus, eget consequat ipsum est a nisi.
                </p>
                <button>Learn More</button>
            </div>
            </div>
        </section>
        </>
    )
}