function Footer(){
    
   const date = new Date().getFullYear();

    return(
        <footer className="main-footer">
            <p>
                &copy; {date} pizzaworldporterville
            </p>
        </footer>
    );

}

export default Footer
