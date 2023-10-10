import Link from 'next/link';

const Header = () => {
  return (
    <div>
    <header className="wrapper bg-soft-primary">
      <nav className="navbar navbar-expand-lg center-logo transparent position-absolute navbar-dark">
        <div className="container justify-content-between align-items-center">
          <div className="d-flex flex-row w-100 justify-content-between align-items-center d-lg-none">
            <div className="navbar-brand">
              <Link href="/">
                <Link>
                  <img
                    className="logo-dark"
                    src="./assets/img/logox.png"
                    srcSet="./assets/img/logox.png 2x"
                    width="80"
                    height="80"
                    alt=""
                  />
                  <img
                    className="logo-light"
                    src="./assets/img/logox.png"
                    srcSet="./assets/img/logox.png 2x"
                    width="80"
                    height="80"
                    alt=""
                  />
                </Link>
              </Link>
            </div>
            <div className="navbar-other ms-auto">
              <ul className="navbar-nav flex-row align-items-center">
                <li className="nav-item d-lg-none">
                  <button className="hamburger offcanvas-nav-btn">
                    <span></span>
                  </button>
                </li>
              </ul>
              {/* /.navbar-nav */}
            </div>
            {/* /.navbar-other */}
          </div>
          {/* /.d-flex */}
          <div className="navbar-collapse-wrapper d-flex flex-row align-items-center w-100">
            <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
              <div className="offcanvas-header mx-lg-auto order-0 order-lg-1 d-lg-flex px-lg-8">
                <Link href="/">
                  <Link className="transition-none d-none d-lg-flex">
                    <img
                      className="logo-dark"
                      src="./assets/img/logox.png"
                      srcSet="./assets/img/logox.png 2x"
                      width="80"
                      height="80"
                      alt=""
                    />
                    <img
                      className="logo-light"
                      src="./assets/img/logox.png"
                      srcSet="./assets/img/logox.png 2x"
                      width="80"
                      height="80"
                      alt=""
                    />
                  </Link>
                </Link>
                <h3 className="text-white fs-30 mb-0 d-lg-none">Regal Outsource</h3>
                <button
                  type="button"
                  className="btn-close btn-close-white d-lg-none"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="w-100 order-1 order-lg-0 d-lg-flex offcanvas-body">
                <ul className="navbar-nav ms-lg-auto">
                  <li className="nav-item">
                    <Link href="/about2">
                      <Link className="nav-link">About</Link>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/services">
                      <Link className="nav-link">Services</Link>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/projects">
                      <Link className="nav-link">Portfolio</Link>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-100 order-3 order-lg-2 d-lg-flex offcanvas-body">
                <ul className="navbar-nav me-lg-auto">
                  <li className="nav-item">
                    <Link href="/blog2">
                      <Link className="nav-link">Blog</Link>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/contact2">
                      <Link className="nav-link">Contact</Link>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/career2">
                      <Link className="nav-link">Careers</Link>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="offcanvas-body d-lg-none order-4 mt-auto">
                <div className="offcanvas-footer">
                  <div>
                    <Link href="mailto:admin@regaloutsourceindia.com" className="admin@regaloutsourceindia.com">
                      admin@regaloutsourceindia.com
                    </Link>
                    <br />+91 882 991 8888,<br />
                    <br />+91 294 298 0888
                    <nav className="nav social social-white mt-4">
                      <Link href="https://m.facebook.com/RegalOutSource">
                        <i className="uil uil-facebook-f"></i>
                      </Link>
                      <Link href="https://instagram.com/regaloutsource?igshid=YmMyMTA2M2Y=">
                        <i className="uil uil-instagram"></i>
                      </Link>
                      <Link href="https://plus.google.com/108033648564806572456">
                        <i className="uli uil-google"></i>
                      </Link>
                      <Link href="https://www.linkedin.com/company/regal-outsource-india/mycompany/">
                        <i className="uli uil-linkedin"></i>
                      </Link>
                    </nav>
                    {/* /.social */}
                  </div>
                </div>
              </div>
            </div>
            {/* /.navbar-collapse */}
          </div>
          {/* /.navbar-collapse-wrapper */}
        </div>
        {/* /.container */}
      </nav>
      {/* /.navbar */}
    </header>

    <section className="wrapper image-wrapper bg-image bg-overlay bg-overlay-300" data-image-src="./assets/img/photos/bg26.png">
    <div className="container pt-17 pb-19 pt-md-18 pb-md-17 text-center">
      <div className="row">
        <div className="col-lg-8 col-xl-7 col-xxl-6 mx-auto" data-cues="slideInDown" data-group="page-title">
          <h1 className="display-1 text-white fs-60 mb-4 px-md-15 px-lg-0">Join Our Team</h1>
          <p className="lead fs-24 text-white lh-sm mb-7 mx-md-13 mx-lg-10">Join our team to help shape the future of development.</p>
          <Link href="#" className="btn btn-lg btn-primary rounded-pill">Explore Positions</Link>
        </div>
      </div>
    </div>
  </section>

  <section className="wrapper bg-light">
      <div className="container pb-15 pb-md-17 mt-15">
        <div className="row gx-md-5 gy-5 mt-n18 mt-md-n19">
          <div className="col-md-6 col-xl-3">
            <div className="card lift">
              <div className="card-body">
                <img src="./assets/img/icons/solid/target.svg" className="svg-inject icon-svg icon-svg-sm solid-mono text-primary mb-3" alt="" />
                <h4>Career Growth</h4>
                <p className="mb-0">Nulla vitae elit libero, Link pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="card lift">
              <div className="card-body">
                <img src="./assets/img/icons/solid/videocall.svg" className="svg-inject icon-svg icon-svg-sm solid-mono text-primary mb-3" alt="" />
                <h4>Work From Anywhere</h4>
                <p className="mb-0">Nulla vitae elit libero, Link pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="card lift">
              <div className="card-body">
                <img src="./assets/img/icons/solid/wallet.svg" className="svg-inject icon-svg icon-svg-sm solid-mono text-primary mb-3" alt="" />
                <h4>Smart Salary</h4>
                <p className="mb-0">Nulla vitae elit libero, Link pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="card lift">
              <div className="card-body">
                <img src="./assets/img/icons/solid/alarm.svg" className="svg-inject icon-svg icon-svg-sm solid-mono text-primary mb-3" alt="" />
                <h4>Flexible Hours</h4>
                <p className="mb-0">Nulla vitae elit libero, Link pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row gy-10 gy-sm-13 gx-md-8 gx-xl-12 align-items-center mt-12">
          <div className="col-lg-6">
            <div className="row gx-md-5 gy-5">
              <div className="col-12">
                <figure className="rounded mx-md-5"><img src="./assets/img/photos/g8.jpg" srcSet="./assets/img/photos/g8@2x.jpg 2x" alt="" /></figure>
              </div>
              <div className="col-md-6">
                <figure className="rounded"><img src="./assets/img/photos/g9.jpg" srcSet="./assets/img/photos/g9@2x.jpg 2x" alt="" /></figure>
              </div>
              <div className="col-md-6">
                <figure className="rounded"><img src="./assets/img/photos/g10.jpg" srcSet="./assets/img/photos/g10@2x.jpg 2x" alt="" /></figure>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <h2 className="fs-16 text-uppercase text-muted mb-3 mt-md-n5">What Makes Us Different?</h2>
            <h3 className="display-3 mb-5">We bring solutions to make life easier for our customers.</h3>
            <p className="mb-6">Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vitae elit libero, Link pharetra augue. Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed.</p>

            <div className="row gy-8">
              <div className="col-md-6">
                <div className="d-flex flex-row">
                  <div>
                    <img src="./assets/img/icons/solid/share.svg" className="svg-inject icon-svg icon-svg-xs solid-mono text-primary me-4" alt="" />
                  </div>
                  <div>
                    <h4 className="mb-1">Our Mission</h4>
                    <p className="mb-0">Curabitur blandit lacus porttitor ridiculus mus.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="d-flex flex-row">
                  <div>
                    <img src="./assets/img/icons/solid/partnership.svg" className="svg-inject icon-svg icon-svg-xs solid-mono text-primary me-4" alt="" />
                  </div>
                  <div>
                    <h4 className="mb-1">Our Values</h4>
                    <p className="mb-0">Curabitur blandit lacus porttitor ridiculus mus.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-14 my-md-17" />

        <div className="row text-center">
          <div className="col-xl-10 mx-auto">
            <h2 className="fs-15 text-uppercase text-muted mb-3">Job Positions</h2>
            <h3 className="display-4 mb-10 px-xxl-15">We’re always searching for amazing people to join our team. Take Link look at our current openings.</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-10 mx-auto">
            <form className="filter-form mb-10">
              <div className="row">
                <div className="col-md-4 mb-3">
                  <div className="form-select-wrapper">
                    <select className="form-select" aria-label="">
                      <option selected>Position</option>
                      <option value="position1">Business</option>
                      <option value="position2">Design</option>
                      <option value="position3">Development</option>
                      <option value="position4">Engineering</option>
                      <option value="position5">Finance</option>
                      <option value="position6">Marketing</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="form-select-wrapper">
                    <select className="form-select" aria-label="">
                      <option selected>Type</option>
                      <option value="type1">Full-time</option>
                      <option value="type3">Part-time</option>
                      <option value="type4">Remote</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="form-select-wrapper">
                    <select className="form-select" aria-label="">
                      <option selected>Location</option>
                      <option value="location1">Chicago, US</option>
                      <option value="location3">Michigan, US</option>
                      <option value="location2">New York, US</option>
                      <option value="location4">Los Angeles, US</option>
                      <option value="location5">Moscow, Russia</option>
                      <option value="location6">Sydney, Australia</option>
                      <option value="location7">Birmingham, UK</option>
                      <option value="location8">Manchester, UK</option>
                      <option value="location9">Beijing, China</option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
            <div className="job-list mb-10">
              <h3 className="mb-4">Design</h3>
              <Link href="#" className="card mb-4 lift">
                <div className="card-body p-5">
                  <span className="row justify-content-between align-items-center">
                    <span className="col-md-5 mb-2 mb-md-0 d-flex align-items-center text-body">
                      <span className="avatar bg-red text-white w-9 h-9 fs-17 me-3">GD</span> Senior Graphic Designer
                    </span>
                    <span className="col-5 col-md-3 text-body d-flex align-items-center">
                      <i className="uil uil-clock me-1"></i> Full time
                    </span>
                    <span className="col-7 col-md-4 col-lg-3 text-body d-flex align-items-center">
                      <i className="uil uil-location-arrow me-1"></i> San Francisco, US
                    </span>
                    <span className="d-none d-lg-block col-1 text-center text-body">
                      <i className="uil uil-angle-right-b"></i>
                    </span>
                  </span>
                </div>
              </Link>
              <Link href="#" className="card mb-4 lift">
                <div className="card-body p-5">
                  <span className="row justify-content-between align-items-center">
                    <span className="col-md-5 mb-2 mb-md-0 d-flex align-items-center text-body">
                      <span className="avatar bg-green text-white w-9 h-9 fs-17 me-3">UX</span> UI/UX Designer
                    </span>
                    <span className="col-5 col-md-3 text-body d-flex align-items-center">
                      <i className="uil uil-clock me-1"></i> Remote
                    </span>
                    <span className="col-7 col-md-4 col-lg-3 text-body d-flex align-items-center">
                      <i className="uil uil-location-arrow me-1"></i> Anywhere
                    </span>
                    <span className="d-none d-lg-block col-1 text-center text-body">
                      <i className="uil uil-angle-right-b"></i>
                    </span>
                  </span>
                </div>
              </Link>
              <Link href="#" className="card mb-4 lift">
                <div className="card-body p-5">
                  <span className="row justify-content-between align-items-center">
                    <span className="col-md-5 mb-2 mb-md-0 d-flex align-items-center text-body">
                      <span className="avatar bg-yellow text-white w-9 h-9 fs-17 me-3">AN</span> Multimedia Artist &amp; Animator
                    </span>
                    <span className="col-5 col-md-3 text-body d-flex align-items-center">
                      <i className="uil uil-clock me-1"></i> Full time
                    </span>
                    <span className="col-7 col-md-4 col-lg-3 text-body d-flex align-items-center">
                      <i className="uil uil-location-arrow me-1"></i> Birmingham, UK
                    </span>
                    <span className="d-none d-lg-block col-1 text-center text-body">
                      <i className="uil uil-angle-right-b"></i>
                    </span>
                  </span>
                </div>
              </Link>
            </div>
            <div className="job-list">
              <h3 className="mb-4">Development</h3>
              <Link href="#" className="card mb-4 lift">
                <div className="card-body p-5">
                  <span className="row justify-content-between align-items-center">
                    <span className="col-md-5 mb-2 mb-md-0 d-flex align-items-center text-body">
                      <span className="avatar bg-purple text-white w-9 h-9 fs-17 me-3">FE</span> Front End Developer
                    </span>
                    <span className="col-5 col-md-3 text-body d-flex align-items-center">
                      <i className="uil uil-clock me-1"></i> Part time
                    </span>
                    <span className="col-7 col-md-4 col-lg-3 text-body d-flex align-items-center">
                      <i className="uil uil-location-arrow me-1"></i> Sydney, AU
                    </span>
                    <span className="d-none d-lg-block col-1 text-center text-body">
                      <i className="uil uil-angle-right-b"></i>
                    </span>
                  </span>
                </div>
              </Link>
              <Link href="#" className="card mb-4 lift">
                <div className="card-body p-5">
                  <span className="row justify-content-between align-items-center">
                    <span className="col-md-5 mb-2 mb-md-0 d-flex align-items-center text-body">
                      <span className="avatar bg-orange text-white w-9 h-9 fs-17 me-3">MD</span> Mobile Developer
                    </span>
                    <span className="col-5 col-md-3 text-body d-flex align-items-center">
                      <i className="uil uil-clock me-1"></i> Full-time
                    </span>
                    <span className="col-7 col-md-4 col-lg-3 text-body d-flex align-items-center">
                      <i className="uil uil-location-arrow me-1"></i> San Francisco, US
                    </span>
                    <span className="d-none d-lg-block col-1 text-center text-body">
                      <i className="uil uil-angle-right-b"></i>
                    </span>
                  </span>
                </div>
              </Link>
              <Link href="#" className="card mb-4 lift">
                <div className="card-body p-5">
                  <span className="row justify-content-between align-items-center">
                    <span className="col-md-5 mb-2 mb-md-0 d-flex align-items-center text-body">
                      <span className="avatar bg-pink text-white w-9 h-9 fs-17 me-3">NT</span> .NET Developer
                    </span>
                    <span className="col-5 col-md-3 text-body d-flex align-items-center">
                      <i className="uil uil-clock me-1"></i> Full time
                    </span>
                    <span className="col-7 col-md-4 col-lg-3 text-body d-flex align-items-center">
                      <i className="uil uil-location-arrow me-1"></i> Manchester, UK
                    </span>
                    <span className="d-none d-lg-block col-1 text-center text-body">
                      <i className="uil uil-angle-right-b"></i>
                    </span>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="wrapper bg-soft-primary">
      <div className="container py-14 py-md-16">
        <div className="row">
          <div className="col-lg-10 col-xl-9 col-xxl-8 mx-auto text-center">
            <h2 className="fs-15 text-uppercase text-muted mb-3">Can't find the right position?</h2>
            <h3 className="display-4 mb-7 px-lg-5 px-xl-0 px-xxl-5">We are Link community with 5000+ team members. Join and build the future with us.</h3>
            <Link href="/contact2.html">
              <Link className="btn btn-lg btn-primary rounded-pill">Contact Us</Link>
            </Link>
          </div>
        </div>
      </div>
    </section>
    

    <footer className="bg-dark text-inverse">
      <div className="container py-13 py-md-15">
        <div className="row gy-6 gy-lg-0">
          <div className="col-md-4 col-lg-3">
            <div className="widget">
              <img
                className="mb-4"
                src="./assets/img/logox.png"
                srcSet="./assets/img/logox.png 2x"
                width="80"
                height="80"
                alt=""
              />
              <p className="mb-4">
                © 2022 Regal Outsource. <br className="d-none d-lg-block" />
                All rights reserved.
              </p>
              <nav className="nav social social-white">
                <Link href="https://m.facebook.com/RegalOutSource">
                  <i className="uil uil-facebook-f"></i>
                </Link>
                <Link href="https://instagram.com/regaloutsource?igshid=YmMyMTA2M2Y=">
                  <i className="uil uil-instagram"></i>
                </Link>
                <Link href="https://plus.google.com/108033648564806572456">
                  <i className="uli uil-google"></i>
                </Link>
                <Link href="https://www.linkedin.com/company/regal-outsource-india/mycompany/">
                  <i className="uli uil-linkedin"></i>
                </Link>
              </nav>
              {/* /.social */}
            </div>
            {/* /.widget */}
          </div>
          {/* /column */}
          <div className="col-md-4 col-lg-3">
            <div className="widget">
              <h4 className="widget-title text-white mb-3">Get in Touch</h4>
              <address className="pe-xl-15 pe-xxl-17">
                Regal Outsource (India) Private Limited F-39(B), I.T.Park, M.I.A.
                (Extn.),Madri Udaipur - 313003, Rajasthan, India
              </address>
              <Link href="mailto:admin@regaloutsourceindia.com">
                admin@regaloutsourceindia.com
              </Link>
              <br /> +91 882 991 8888, +91 294 298 0888
            </div>
            {/* /.widget */}
          </div>
          {/* /column */}
          <div className="col-md-4 col-lg-3">
            <div className="widget">
              <h4 className="widget-title text-white mb-3">Learn More</h4>
              <ul className="list-unstyled mb-0">
                <li>
                  <Link href="./about2.html">About Us</Link>
                </li>
                <li>
                  <Link href="./blog2.html">Blogs</Link>
                </li>
                <li>
                  <Link href="./projects.html">Portfolio</Link>
                </li>
                <li>
                  <Link href="./terms.html">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
            {/* /.widget */}
          </div>
          {/* /column */}
          <div className="col-md-12 col-lg-3">
            <div className="widget">
              <h4 className="widget-title text-white mb-3">Our Newsletter</h4>
              <p className="mb-5">
                Subscribe to our newsletter to get our news & deals delivered to
                you.
              </p>
              <div className="newsletter-wrapper">
                {/* Begin Mailchimp Signup Form */}
                <div id="mc_embed_signup2">
                  <form
                    action="YOUR_MAILCHIMP_FORM_URL_HERE"
                    method="post"
                    id="mc-embedded-subscribe-form2"
                    name="mc-embedded-subscribe-form"
                    className="validate dark-fields"
                    target="_blank"
                    noValidate
                  >
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
                        <label for="mce-EMAIL2">Email Address</label>
                        <input
                          type="submit"
                          value="Join"
                          name="subscribe"
                          id="mc-embedded-subscribe2"
                          className="btn btn-primary"
                        />
                      </div>
                      <div id="mce-responses2" className="clear">
                        <div
                          className="response"
                          id="mce-error-response2"
                          style={{ display: "none" }}
                        ></div>
                        <div
                          className="response"
                          id="mce-success-response2"
                          style={{ display: "none" }}
                        ></div>
                      </div>
                      {/* The following hidden input is used by Mailchimp to prevent automated signups */}
                      <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                        <input
                          type="text"
                          name="b_ddc180777a163e0f9f66ee014_4b1bcfa0bc"
                          tabIndex="-1"
                          value=""
                        />
                      </div>
                      <div className="clear"></div>
                    </div>
                  </form>
                </div>
                {/*End mc_embed_signup*/}
              </div>
              {/* /.newsletter-wrapper */}
            </div>
            {/* /.widget */}
          </div>
          {/* /column */}
        </div>
        {/*/.row */}
      </div>
      {/* /.container */}
    </footer>

    <div className="progress-wrap">
      <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path d="M50,1 A49,49 0 0,1 50,99 A49,49 0 0,1 50,1" />
      </svg>
    </div>
  </div>

  );
};

export default Header;




