import './header.scss';
import Logo from '/images/Logo.png';
// import bg from '/images/Untitled design.png';
import bg from '/images/Hero.png';

function Header() {



  return (
  <>
    
      <header style={{ backgroundImage: `url(${bg})`}}>
        <section className="info">
          <h1>Discover Zen Through Fragrance</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur, ipsum eget ornare porttitor, ligula metus fermentum lacus, eget consequat ipsum est a nisi.</p>
          <button className="showBtn"><div className="shpBtn-inside">Shop Now</div></button>
        </section>
      </header>
    </>
  );
}

export default Header