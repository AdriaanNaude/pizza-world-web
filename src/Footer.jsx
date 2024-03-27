import logo from './facebook-logo.jpeg';
function Footer(){
    
   const date = new Date().getFullYear();

    return(
        <footer className="main-footer">
            <div className="footerinfo-one">
                &copy; {date} pizzaworldporterville
            </div>
            <div className="footerinfo-two">
                <img className="facebook-img" src={logo} alt="faceBook logo" /> <a href="https://www.facebook.com/PizzaWorldPorterville?mibextid=ZbWKwL">Pizza World</a>
            </div>
        </footer>
    );

}

export default Footer
