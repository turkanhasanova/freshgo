import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ModeContext } from '../context/ModeContext'

const Header = () => {
  const [mode , setMode ] = useContext(ModeContext);
    return (
        <div className='container'>
            <div className='header'>
            <nav className="navbar navbar-dark  fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src="https://newstar.bold-themes.com/movies/wp-content/uploads/sites/19/2018/01/logo-white.png"  /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
          <NavLink to="/"><a className="nav-link active" aria-current="page">Home</a></NavLink>  
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Cooming Soon</a>
          </li>
          <li className="nav-item">
          <NavLink to="/reviews"><a className="nav-link active" aria-current="page">Reviews</a></NavLink> 
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">News&Gossips</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Pages</a>
          </li>
          <li className="nav-item">
          <NavLink to="/dashboard"><a className="nav-link active" aria-current="page">Admin</a></NavLink> 
          </li>
          <li>
            <button className='btn btn-light' onClick={() =>{
              mode === 'light' ? setMode ('dark') : setMode('light');
              mode === 'light' ? localStorage.setItem('mode', 'dark') : localStorage.setItem('mode','light');
            }}>{mode ==='light' ? "Dark":"Light"}</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
            </div>
        </div>
    )
}

export default Header