
import Card from '../card/card';
import data from '../assets/data.json';
import "./hero2.scss";

export default function Popular(){
    return (
        <section className="popular-products">
        
            <h1 className="popular-products__title">Popular Products</h1>
            <div className="popular-products__grid">
                 {
                   data
                   .filter((n)=> n.category=="popular")
                   .map((p, i) => (
                    <div className="popular-products__card-wrapper" key={i}>
                     <Card  
                     id={p.id}  
                     title ={p.name} 
                     img={p.image}  
                     price={p.price}
                     /></div>
                    ))
                }
         </div>
        </section>
        
    );
}