
import Card from '../card/card';
import data from '../assets/data.json';
import "./hero2.scss";

export default function Popular(){
    return (
        <>   
    <div className="totalContainer">
        <section className="pp">
            <h1 pp__title>Popular Products</h1>
            <div className="pp__box">
                 {
                   data
                   .filter((n)=> n.category=="popular")
                   .map((p, i) => (
                    <div className="pp__box-card">
                     <Card key={i} 
                     id={p.id}  
                     title ={p.name} 
                     img={p.image}  
                     price={p.price}
                     /></div>
                    ))
                }
         </div>
        </section>
        </div>
        </>
        
    );
}