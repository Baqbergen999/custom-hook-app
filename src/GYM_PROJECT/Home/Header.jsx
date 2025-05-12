import { Link } from "react-router-dom";
import "./Home.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="navbar">
          <div className="logo">
              <img width="70px" src="https://static.vecteezy.com/system/resources/previews/013/146/831/non_2x/body-builder-lifting-a-dumbbell-png.png" alt="Logo" className="logo-img"/>
              <h1 className="logo-text">BORCELLE</h1>
          </div>
          <ul className="nav-links">
              <li><Link to={'/shop'}>Shop</Link></li>
              <li><a href="#about">About</a></li>
              <li><Link to={'/ai-trainer'}>Advices of AI Trainer</Link></li>
              <li><a href="https://wa.me/77052652485">Contact</a></li>
              <li><img width={"30px"} src="https://img.icons8.com/ios11/512/FFFFFF/menu.png" alt="" /></li>
          </ul>
      </nav>
      <h1 className="header-title">
          <span>GYM</span> CENTRE
      </h1>
      <img className='dumbbells' src="https://pngimg.com/d/dumbbell_PNG16378.png" alt="" />
      <Link className="shop-btn" to={'/shop'}>EXPLORE OUR SHOP</Link>
    </header>

  );
}
