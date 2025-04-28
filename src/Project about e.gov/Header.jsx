import './Header.css'

export default function Header() {
    return(
        <header>
            <div className="nav-top">
                <div className="logo">
                    <h1><span>e</span>.gov</h1>
                </div>
                <div className="links">
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Services</a>
                    <a href="">Contact</a>
                </div>
            </div>
            <div className="content">
                <h1>WE SERVE THE PEOPLE</h1>
            </div>
        </header>
    )
}