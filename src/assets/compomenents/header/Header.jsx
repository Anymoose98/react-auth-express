import headerStyles from "./Header.module.scss"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className={headerStyles.bgheader} >
            <h1 className="text-center">REACT BLOG SPA</h1>
        </header>
    )
}

export default Header;