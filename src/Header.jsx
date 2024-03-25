function Header(){

    const phoneNumber = 798093820918;

    return(
        <header className="main-header">
            <h1 className="main-name">Pizza World Porterville</h1>
            <div className="contact">
                <ul>
                    <li>Phone: {phoneNumber}</li>
                    <li>Email: {}</li>
                </ul>
            </div>
            <nav className="main-nav">
                <a href="">Menu</a>
                <a href="">Specials</a>
                <a href="">Extra</a>
                <a href="">About</a>
            </nav>
        </header>
    );

}

export default Header
