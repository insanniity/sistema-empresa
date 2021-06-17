import {NavLink, Link } from 'react-router-dom';

const Header = () => {
    return(
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">Sistema</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                Empresas
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink to="/companies" className="dropdown-item" activeClassName="">Ver</NavLink>
                                <NavLink to="/companies/adicionar" className="dropdown-item" activeClassName="">Adicionar</NavLink>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                Colaboradores
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink to="/collaborators" className="dropdown-item" activeClassName="">Ver</NavLink>
                                <NavLink to="/collaborators/adicionar" className="dropdown-item" activeClassName="">Adicionar</NavLink>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;