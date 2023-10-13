import React from 'react'

const Header = () => {
  return (
    <div>   <header class="wrapper bg-soft-primary">
    <nav class="navbar navbar-expand-lg center-logo transparent position-absolute navbar-dark">
      <div class="container justify-content-between align-items-center">
        <div class="d-flex flex-row w-100 justify-content-between align-items-center d-lg-none">
          <div class="navbar-brand"><a href="./index.html">
              <img class="logo-dark" src="./assets/img/logox.png" srcset="./assets/img/logox.png 2x" width="80" height="80" alt="" />
              <img class="logo-light" src="./assets/img/logox.png" srcset="./assets/img/logox.png 2x" width="80" height="80" alt="" />
            </a></div>
          <div class="navbar-other ms-auto">
            <ul class="navbar-nav flex-row align-items-center">
              <li class="nav-item d-lg-none">
                <button class="hamburger offcanvas-nav-btn"><span></span></button>
              </li>
            </ul>
           
          </div>
         
        </div>
      
        <div class="navbar-collapse-wrapper d-flex flex-row align-items-center w-100">
          <div class="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
            <div class="offcanvas-header mx-lg-auto order-0 order-lg-1 d-lg-flex px-lg-8">
              <a href="./index.html" class="transition-none d-none d-lg-flex"><img class="logo-dark" src="./assets/img/logox.png" srcset="./assets/img/logox.png 2x" width="80" height="80" alt="" />
                <img class="logo-light" src="./assets/img/logox.png" srcset="./assets/img/logox.png 2x" width="80" height="80" alt="" /></a>
              <h3 class="text-white fs-30 mb-0 d-lg-none">Regal Outsource</h3>
              <button type="button" class="btn-close btn-close-white d-lg-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="w-100 order-1 order-lg-0 d-lg-flex offcanvas-body">
              <ul class="navbar-nav ms-lg-auto">
                <a class="nav-link " href="./about2.html" >About</a>
                <a class="nav-link " href="./services.html">Services</a>
                 <a class="nav-link " href="./projects.html">Portfolio</a>
                 </ul>
            </div>
            <div class="w-100 order-3 order-lg-2 d-lg-flex offcanvas-body">
              <ul class="navbar-nav me-lg-auto">
                <a class="nav-link " href="./blog2.html" >Blog</a>
                  <a class="nav-link " href="./contact2.html">Contact</a>
                  <a class="nav-link " href="./career2.html">Careers</a>
                  </ul>
            </div>
            <div class="offcanvas-body d-lg-none order-4 mt-auto">
              <div class="offcanvas-footer">
                <div>
                  <a href="mailto:admin@regaloutsourceindia.com" class="admin@regaloutsourceindia.com">admin@regaloutsourceindia.com</a>
                  <br />+91 882 991 8888,<br />
                  <br />+91 294 298 0888<br />
                  <nav class="nav social social-white mt-4">
                      <a href="https://m.facebook.com/RegalOutSource"><i class="uil uil-facebook-f"></i></a>
                      <a href="https://instagram.com/regaloutsource?igshid=YmMyMTA2M2Y="><i class="uil uil-instagram"></i></a>
                      <a href="https://plus.google.com/108033648564806572456"><i class="uli uil-google"></i></a>
                      <a href="https://www.linkedin.com/company/regal-outsource-india/mycompany/"><i class="uli uil-linkedin"></i></a> 
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