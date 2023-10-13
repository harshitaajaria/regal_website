import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-light">
        <div className="container pb-13 pb-md-15">
          <div className="card image-wrapper bg-full bg-image bg-overlay bg-overlay-300 mb-14">
            <div className="card-body p-10 p-xl-12">
              <div className="row text-center">
                <div className="col-xl-11 col-xxl-9 mx-auto">
                  <h2 className="fs-16 text-uppercase text-white mb-3">Join Our Community</h2>
                  <h3 className="display-3 mb-8 px-lg-8 text-white">
                    We are <span className="underline-3 style-2 yellow">trusted</span> by our clients all around the globe. Join them now and grow your business.
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="row gy-6 gy-lg-0">
            <div className="col-md-4 col-lg-3">
              <div className="widget">
                <img className="mb-4" src="./assets/img/logox.png" srcSet="./assets/img/logox.png 2x" width="80" height="80" alt="" />
                <p>© 2022 Regal Outsource.<br className="d-none d-lg-block" />All rights reserved.</p>
                <nav className="nav social">
                  <Link href="https://m.facebook.com/RegalOutSource"><i className="uil uil-facebook-f"></i></Link>
                  <Link href="https://instagram.com/regaloutsource?igshid=YmMyMTA2M2Y="><i className="uil uil-instagram"></i></Link>
                  <Link href="https://plus.google.com/108033648564806572456"><i className="uil uil-google"></i></Link>
                  <Link href="https://www.linkedin.com/company/regal-outsource-india/mycompany/"><i className="uil uil-linkedin"></i></Link>
                </nav>
              </div>
            </div>

            <div className="col-md-4 col-lg-3">
              <div className="widget">
                <h4 className="widget-title mb-3">Get in Touch</h4>
                <address className="pe-xl-15 pe-xxl-17">
                  Regal Outsource (India) Private Limited F-39(B), I.T.Park, M.I.A. (Extn.), Madri Udaipur - 313003, Rajasthan, India
                </address>
                <a href="mailto:admin@regaloutsourceindia.com">admin@regaloutsourceindia.com</a><br />+91 882 991 8888, +91 294 298 0888
              </div>
            </div>

            <div className="col-md-4 col-lg-3">
              <div className="widget">
                <h4 className="widget-title mb-3">Learn More</h4>
                <ul className="list-unstyled text-reset mb-0">
                  <li><Link href="./about2.html">About Us</Link></li>
                  <li><Link href="./blog2.html">Blogs</Link></li>
                  <li><Link href="./projects.html">Portfolio</Link></li>
                  <li><Link href="./terms.html">Terms & Conditions</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-md-12 col-lg-3">
              <div className="widget">
                <h4 className="widget-title mb-3">Our Newsletter</h4>
                <p>Subscribe to our newsletter to get our news & deals delivered to you.</p>
                <div className="newsletter-wrapper">
                  <div id="mc_embed_signup2">
                    <form action="https://elemisfreebies.us20.list-manage.com/subscribe/post?u=aa4947f70a475ce162057838d&amp;id=b49ef47a9a" method="post" id="mc-embedded-subscribe-form2" name="mc-embedded-subscribe-form" className="validate " target="_blank" noValidate>
                      <div id="mc_embed_signup_scroll2">
                        <div className="mc-field-group input-group form-floating">
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
                        <div id="mce-responses2" className="clear">
                          <div className="response" id="mce-error-response2" style={{ display: "none" }}></div>
                          <div className="response" id="mce-success-response2" style={{ display: "none" }}></div>
                        </div>
                        <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                          <input type="text" name="b_ddc180777a163e0f9f66ee014_4b1bcfa0bc" tabIndex="-1" value="" />
                        </div>
                        <div className="clear"></div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
