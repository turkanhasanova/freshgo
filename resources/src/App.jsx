import React, { useContext } from 'react'
import Header from './pages/Header';
import Hero from './pages/Hero';
import Cards from './pages/Cards';
import Cards2 from './pages/Cards2';
import Cards3 from './pages/Cards3';
import Footer from './pages/Footer';
import Reviews from './pages/Reviews';
import Dashboard from './admin/Dashboard';
import { BrowserRouter , Routes , Route }from 'react-router-dom'
import AddMovie from './admin/updates/AddMovie';
import EditMovie from './admin/updates/EditMovie';
import { ModeContext, ModeProvider } from './context/ModeContext';

const Main = () =>{
  const [mode] = useContext(ModeContext);
  return (
      <div className={mode}>
      <Header />
      <Routes>      
        <Route path='/' element={<Hero />}></Route>
        <Route path='/cards' element={<Cards />}></Route>
        <Route path='/cards2' element={<Cards2 />}></Route>
        <Route path='/cards3' element={<Cards3 />}></Route>
        <Route path='/footer' element={<Footer />}></Route>
        <Route path='/reviews' element={<Reviews />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/dashboard/add' element={<AddMovie />}></Route>
        <Route path='/dashboard/edit/:id' element={<EditMovie />}></Route>
      </Routes>   
      </div>   
  )
}


const App = () => {
  return (
      <BrowserRouter>   
      <ModeProvider>
      <Main />
      </ModeProvider>
      </BrowserRouter>

   
  )
}

export default App