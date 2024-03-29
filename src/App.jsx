import { Route, Routes } from 'react-router-dom'

import Header from './Header/Header.jsx'
import Footer from './Footer/Footer.jsx'
import { Menu } from './pages/Menu.jsx'
import { Extra } from './pages/Extra.jsx'

function App() {
    return(
        <>
            <Header/>
            <Routes>
                <Route path='/pizza-world-web/' element={<Menu />} />
                <Route path='/pizza-world-web/extra' element={<Extra />} />
            </Routes>
            <Footer/>
        </>
    );
}

export default App
