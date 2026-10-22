import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Header() {
    const {theme, toggleTheme } = useTheme();
    
    return (
        <header className={`header theme-${theme}`}>
            <h1>SOCIAL NETWORK</h1>
            <p>for communicate</p>
            <nav>
                <Link to={"/"}>Главная</Link>
                <Link to={"/Profile"}>Профиль</Link>
                <Link to={"/Settings"}>Настройки</Link>
                <Link to={"/Info"}>О проекте</Link>
                <button onClick={toggleTheme}>
                    {theme === "light" ? "dark" : "light"}
                </button>
            </nav>
        </header>
    )
}

export default Header;