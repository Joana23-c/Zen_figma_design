// import img1 from '../images/img1.png';
import './card.scss';

export default function Card (props){
    return(
        <>
        <div className="card" onClick={() => console.log(`U klikua div ${props.id}`)}>
            <div className="card__image" >
                <img src= {props.img} />
                <div className="heart">
                    <div className="heartback">
                        <i className="fa-regular fa-heart"></i>
                    </div>
                </div>
            </div>
        
        <div className="card__content">
            <p className="card__name">{props.title}</p>
            <h3 className="card__cost">$<span className="card__nr">{props.price}</span></h3>
        </div>
    </div>
    </>
    );
}