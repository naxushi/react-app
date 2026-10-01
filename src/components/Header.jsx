import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <h1>SOCIAL NETWORK</h1>
            <p>for communicate</p>
            <nav>
                <Link to={"/Home"}>Главная</Link>
                <Link to={"/Profile"}>Профиль</Link>
                <Link to={"/Settings"}>Настройки</Link>
                <Link to={"/Info"}>О проекте</Link>
            </nav>
        </header>
    )
}

export default Header;