import { Link } from "react-router-dom";
import "./Home.css";
import dumbbells from './pngimg.com - dumbbell_PNG16378.png'
import { useTheme } from "./ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="header">
      <nav className="navbar">
          <div className="logo">
              <img width="70px" src="https://static.vecteezy.com/system/resources/previews/013/146/831/non_2x/body-builder-lifting-a-dumbbell-png.png" alt="Logo" className="logo-img"/>
              <h1 className="logo-text">BORCELLE</h1>
          </div>
          <ul className="nav-links">
              <li><Link to={'/shop'}>Shop</Link></li>
              <li><Link to={'/'}>Log out</Link></li>
              <li><Link to={'/ai-trainer'}>Contact with Trainer</Link></li>
              <li><a href="https://wa.me/77052652485">Contact</a></li>
              <li>
                <label className="switch">
                  <input onClick={toggleTheme} type="checkbox"/>
                  <span className="slider"></span>
                </label>
              </li>
              <li><img width={"30px"} src="https://img.icons8.com/ios11/512/FFFFFF/menu.png" alt="" /></li>
          </ul>
      </nav>
      <h1 className="header-title">
          <span>GYM</span> CENTRE
      </h1>
      <img className='dumbbells' src={dumbbells} alt="" />
      <Link className="shop-btn" to={'/shop'}>EXPLORE OUR SHOP</Link>
    </header>

  );
}
