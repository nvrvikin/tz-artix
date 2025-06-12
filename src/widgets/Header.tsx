import { Link } from "react-router-dom"

function header() {
  return (
    <header className="header">
        <span className="header__title">ТЗ Artix | Нарайкин В.В.</span>
        <nav className="header__nav">
            <Link to="/" className="header-nav__link">Главная</Link>
            <Link to="/about" className="header-nav__link">О задании</Link>
        </nav>
    </header>
  )
}

export default header