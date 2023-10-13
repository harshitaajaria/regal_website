import React from 'react'
import Link from './next/link';


const Header = () => {
  return (
    <div>   <header classname="wrapper bg-soft-primary">
    <nav classname="navbar navbar-expand-lg center-logo transparent position-absolute navbar-dark">
      <div classname="container justify-content-between align-items-center">
        <div classname="d-flex flex-row w-100 justify-content-between align-items-center d-lg-none">
          <div classname="navbar-brand"><Link href="./index.html">
              <img classname="logo-dark" src="./assets/img/logox.png" srcset="./assets/img/logox.png 2x" width="80" height="80" alt="" />
              <img classname="logo-light" src="./assets/img/logox.png" srcset="./assets/img/logox.png 2x" width="80" height="80" alt="" />
            </Link></div>
          <div classname="navbar-other ms-auto">
            <ul classname="navbar-nav flex-row align-items-center">
              <li classname="nav-item d-lg-none">
                <button classname="hamburger offcanvas-nav-btn"><span></span></button>
              </li>
            </ul>
            
          </div>
          
        </div>
      
        <div classname="navbar-collapse-wrapper d-flex flex-row align-items-center w-100">
          <div classname="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
            <div classname="offcanvas-header mx-lg-auto order-0 order-lg-1 d-lg-flex px-lg-8">
              <Link href="./index.html" classname="transition-none d-none d-lg-flex"><img classname="logo-dark" src="./assets/img/logox.png" srcset="./assets/img/logox.png 2x" width="80" height="80" alt="" />
                <img classname="logo-light" src="./assets/img/logox.png" srcset="./assets/img/logox.png 2x" width="80" height="80" alt="" /></Link>
              <h3 classname="text-white fs-30 mb-0 d-lg-none">Regal Outsource</h3>
              <button type="button" classname="btn-close btn-close-white d-lg-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div classname="w-100 order-1 order-lg-0 d-lg-flex offcanvas-body">
              <ul classname="navbar-nav ms-lg-auto">
                <Link classname="nav-link " href="./about2.html" >About</Link>
                <Link classname="nav-link " href="./services.html">Services</Link>
                 <Link classname="nav-link " href="./projects.html">Portfolio</Link></ul>
            </div>
            <div classname="w-100 order-3 order-lg-2 d-lg-flex offcanvas-body">
              <ul classname="navbar-nav me-lg-auto">
                <Link classname="nav-link " href="./blog2.html" >Blog</Link>
                  <Link classname="nav-link " href="./contact2.html">Contact</Link>
                  <Link classname="nav-link " href="./career2.html">Careers</Link>
                  </ul>
                
            </div>
            <div classname="offcanvas-body d-lg-none order-4 mt-auto">
              <div classname="offcanvas-footer">
                <div>
                  <Link href="mailto:admin@regaloutsourceindia.com" classname="admin@regaloutsourceindia.com">admin@regaloutsourceindia.com</Link>
                  <br />+91 882 991 8888,<br />
                  <br />+91 294 298 0888<br />
                  <nav classname="nav social social-white mt-4">
                      <Link href="https://m.facebook.com/RegalOutSource"><i classname="uil uil-facebook-f"></i></Link>
                      <Link href="https://instagram.com/regaloutsource?igshid=YmMyMTA2M2Y="><i classname="uil uil-instagram"></i></Link>
                      <Link href="https://plus.google.com/108033648564806572456"><i classname="uli uil-google"></i></Link>
                      <Link href="https://www.linkedin.com/company/regal-outsource-india/mycompany/"><i classname="uli uil-linkedin"></i></Link> 
                  </nav>
                
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    
    </nav>
    
  </header>
  </div>
  )
}

export default Header