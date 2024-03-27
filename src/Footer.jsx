function Footer(){
    
   const date = new Date().getFullYear();

    return(
        <footer className="main-footer">
            <div>
                &copy; {date} pizzaworldporterville
            </div>
            <div>
                <img className="facebook-img" src="" alt="faceBook logo" />Pizza world
            </div>
        </footer>
    );

}

export default Footer
