import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <header>
            <div className="logo">
                <img src="" alt="" />
                <h1><span>S</span>ports</h1>
            </div>
            <nav>
                <ul>
                    <li><Link to={'/home'}>Home</Link></li>
                    <li><Link to={'/home'}></Link></li>
                    <li><Link to={'/home'}>Home</Link></li>
                    <li><Link to={'/home'}>Home</Link></li>
                </ul>
            </nav>
        </header>
    )
}