import "./header.scss";
import Logo from "/images/Logo.png";
// import bg from '/images/Untitled design.png';
import bg from "/images/Hero.png";

function Header() {
  return (
    <>
      <header className="header" style={{ backgroundImage: `url(${bg})` }}>
        <div className="header__container">
          <div className="header__content">
            <h1>Discover Zen Through Fragrance</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              consectetur, ipsum eget ornare porttitor, ligula metus fermentum
              lacus, eget consequat ipsum est a nisi.
            </p>
            <button className="header__button">
              <div className="header__button-inside">Shop Now</div>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
