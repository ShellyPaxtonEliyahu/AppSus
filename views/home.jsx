const { Link } = ReactRouterDOM

export function Home() {

    return <section className="home">
        <img className="background-home" src={"/assets/img/background-home.jpg"}/>
        
        <div className="page-link-icons">

            <Link to={``}>📂</Link>
            <Link to={``}>📂</Link>
            <Link to={``}>📂</Link>
        </div>
    </section>
}