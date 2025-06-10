//import { Link } from "react-router-dom"

/*
<nav className="header__nav">
            <Link to="/" className="header-nav__link">Главная</Link>
            <Link to="/about" className="header-nav__link">О задании</Link>
        </nav>
*/

function header() {
  return (
    <header className="header">
        <span className="header__title">ТЗ Artix | Нарайкин В.В.</span>
        
    </header>
  )
}

export default header