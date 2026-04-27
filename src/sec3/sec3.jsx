
import Img from '/images/Img.png';
import "./sec3.scss";

export default function Section (){
    return (
        <>
        <section className="about-section">
            <div className="about-section__image" >
                <img src={Img}></img>
            </div>
            <div className="about-section__info">
                <div className="about-section__info-center">
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