import React from 'react'
import Link from "./next/Link";

const Footer = () => {
  return (
    <div> <footer classname="bg-light">
    <div classname="container pb-13 pb-md-15">
      <div classname="card image-wrapper bg-full bg-image bg-overlay bg-overlay-300 mb-14" data-image-src="./assets/img/photos/bg26.png">
        <div classname="card-body p-10 p-xl-12">
          <div classname="row text-center">
            <div classname="col-xl-11 col-xxl-9 mx-auto">
              <h2 classname="fs-16 text-uppercase text-white mb-3">Join Our Community</h2>
              <h3 classname="display-3 mb-8 px-lg-8 text-white">We are <span classname="underline-3 style-2 yellow">trusted</span> by our clients all around the globe. Join them now and grow your business.</h3>
            </div>
          
          </div>
        
        </div>
        
      </div>
      
      <div classname="row gy-6 gy-lg-0">
        <div classname="col-md-4 col-lg-3">
          <div classname="widget">
            <img classname="mb-4" src="./assets/img/logox.png" srcset="./assets/img/logox.png 2x" width="80" height="80" alt="" />
            <p classname="mb-4">© 2022 Regal Outsource. <br classname="d-none d-lg-block" />All rights reserved.</p>
            <nav classname="nav social ">
              <Link href="https://m.facebook.com/RegalOutSource"><i classname="uil uil-facebook-f"></i></Link>
              <Link href="https://instagram.com/regaloutsource?igshid=YmMyMTA2M2Y="><i classname="uil uil-instagram"></i></Link>
              <Link href="https://plus.google.com/108033648564806572456"><i classname="uli uil-google"></i></Link>
              <Link href="https://www.linkedin.com/company/regal-outsource-india/mycompany/"><i classname="uli uil-linkedin"></i></Link>
            </nav>
          
          </div>
    
        </div>
      
        <div classname="col-md-4 col-lg-3">
          <div classname="widget">
            <h4 classname="widget-title  mb-3">Get in Touch</h4>
            <address classname="pe-xl-15 pe-xxl-17">Regal Outsource (India) Private Limited F-39(B), I.T.Park, M.I.A. (Extn.),Madri Udaipur - 313003, Rajasthan, India</address>
            <a href="mailto:admin@regaloutsourceindia.com" classname="admin@regaloutsourceindia.com">admin@regaloutsourceindia.com</a><br /> +91 882 991 8888, +91 294 298 0888
          </div>
          
        </div>
        
        <div classname="col-md-4 col-lg-3">
          <div classname="widget">
            <h4 classname="widget-title  mb-3">Learn More</h4>
            <ul classname="list-unstyled text-reset mb-0">
              <li><Link href="./about2.html">About Us</Link></li>
              <li><Link href="./blog2.html">Blogs</Link></li>
              <li><Link href="./projects.html">Portfolio</Link></li>
              <li><Link href="./terms.html">Terms & Conditions</Link></li>
            </ul>
          </div>
        
        </div>
  
        <div classname="col-md-12 col-lg-3">
          <div classname="widget">
            <h4 classname="widget-title  mb-3">Our Newsletter</h4>
            <p classname="mb-5">Subscribe to our newsletter to get our news & deals delivered to you.</p>
            <div classname="newsletter-wrapper">
              
              <div id="mc_embed_signup2">
                <form action="https://elemisfreebies.us20.list-manage.com/subscribe/post?u=aa4947f70a475ce162057838d&amp;id=b49ef47a9a" method="post" id="mc-embedded-subscribe-form2" name="mc-embedded-subscribe-form" classname="validate " target="_blank" novalidate>
                  <div id="mc_embed_signup_scroll2">
                    <div classname="mc-field-group input-group form-floating">
                    <input
          type="email"
          value=""
          name="EMAIL"
          className="required email form-control"
          placeholder="Email Address"
          id="mce-EMAIL2"
        />
        <label htmlFor="mce-EMAIL2">Email Address</label>
        <input
          type="submit"
          value="Join"
          name="subscribe"
          id="mc-embedded-subscribe2"
          className="btn btn-primary"
        />

                    </div>
                    <div id="mce-responses2" classname="clear">
                      <div classname="response" id="mce-error-response2" style="display:none"></div>
                      <div classname="response" id="mce-success-response2" style="display:none"></div>
                    </div> 
                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_ddc180777a163e0f9f66ee014_4b1bcfa0bc" tabindex="-1" value="" /></div>
                    <div classname="clear"></div>
                  </div>
                </form>
              </div>
             
            </div>
            
          </div>
          
        </div>
      
      </div>
      
    </div>
    
  </footer></div>
  )
}

export default Footer