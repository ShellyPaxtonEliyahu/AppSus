const { Link, NavLink } = ReactRouterDOM

export function AppHeader() {

    return <header className="app-header">
        <Link to="/">
            <img className="logo-img" src="../assets/img/icons/horse-logo.png" />
            <h3>AppSus!</h3>
        </Link>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/mail">Mail</NavLink>
            <NavLink to="/note">Note</NavLink>
        </nav>
    </header>
}
