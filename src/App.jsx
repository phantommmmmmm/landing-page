import  './Style/app.scss'
import  './Style/colour.scss'
import './Style/header.scss'
import './Style/home.scss'
import './Style/footer.scss'
import './Style/contact.scss'
import './Style/services.scss'

import {BrowserRouter as Rounter,Route,Routes} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Services from './components/Services'



function App() {
  

  return (
    <Rounter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
      </Routes> 
      <Footer /> 
    </Rounter>
  )
}

export default App
