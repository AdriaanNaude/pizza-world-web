import { Route, Routes } from 'react-router-dom'

import Header from './Header/Header.jsx'
import Footer from './Footer/Footer.jsx'
import { Menu } from './pages/Menu.jsx'
import { Special } from './pages/Special.jsx'
import { Extra } from './pages/Extra.jsx'
import { About } from './pages/About.jsx'

function App() {
    return(
        <>
            <Header/>
            <Routes>
                <Route path='/pizza-world-web/' element={<Menu />} />
                {/*<Route path='/pizza-world-web/special' element={<Special />} />*/}
                <Route path='/pizza-world-web/extra' element={<Extra />} />
                {/*<Route path='/pizza-world-web/about' element={<About />} />*/}
            </Routes>
            <Footer/>
        </>
    );
}

export default App
