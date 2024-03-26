function Header(){

    const phoneNumber = "0768545124";

    return(
        <header className="main-header">
            <h1 className="main-name">Pizza World Porterville</h1>
            <div className="contact">
                <b>Phone:</b> {phoneNumber}
            </div>
            {/*<nav className="main-nav">
                <a href="">Menu</a>
                <a href="">Specials</a>
                <a href="">Extra</a>
                <a href="">About</a>
            </nav>*/}
        </header>
    );

}

export default Header
