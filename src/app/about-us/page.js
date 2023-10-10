
import Link from "next/link";
import Image from "next/image";
import bg26 from "/public/bg26.png";
import logox from "/public/logox.png";

export default function Page() {
  return (
    <div>
      <div className="content-wrapper">
        <header className="wrapper bg-soft-primary">
          <nav className="navbar navbar-expand-lg center-logo transparent position-absolute navbar-dark">
            <div className="container justify-content-between align-items-center">
              <div className="d-flex flex-row w-100 justify-content-between align-items-center d-lg-none">
                <div className="navbar-brand">
                  <Link href="./index.html">
                    <Image
                      className="logo-dark"
                      src="/assets/img/logox.png"
                      width={80}
                      height={80}
                      alt=""
                    />
                    <Image
                      className="logo-light"
                      src="/assets/img/logox.png"
                      width={80}
                      height={80}
                      alt=""
                    />
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
                </div>
              </div>
              <div className="navbar-collapse-wrapper d-flex flex-row align-items-center w-100">
                <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
                  <div className="offcanvas-header mx-lg-auto order-0 order-lg-1 d-lg-flex px-lg-8">
                    <Link href="./index.html" className="transition-none d-none d-lg-flex">
                      <Image
                        className="logo-dark"
                        src="/assets/img/logox.png"
                        width={80}
                        height={80}
                        alt=""
                      />
                      <Image
                        className="logo-light"
                        src="/assets/img/logox.png"
                        width={80}
                        height={80}
                        alt=""
                      />
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
                      <Link className="nav-link" href="/about2.html">
                        About
                      </Link>
                      <Link className="nav-link" href="/services.html">
                        Services
                      </Link>
                      <Link className="nav-link" href="/projects.html">
                        Portfolio
                      </Link>
                    </ul>
                  </div>
                  <div className="w-100 order-3 order-lg-2 d-lg-flex offcanvas-body">
                    <ul className="navbar-nav me-lg-auto">
                      <Link className="nav-link" href="/blog2.html">
                        Blog
                      </Link>
                      <Link className="nav-link" href="/contact2.html">
                        Contact
                      </Link>
                      <Link className="nav-link" href="/career2.html">
                        Careers
                      </Link>
                    </ul>
                  </div>
                  <div className="offcanvas-body d-lg-none order-4 mt-auto">
                    <div className="offcanvas-footer">
                      <div>
                        <Link href="mailto:admin@regaloutsourceindia.com" className="admin@regaloutsourceindia.com">
                          admin@regaloutsourceindia.com
                        </Link>
                        <br />
                        +91 882 991 8888,<br />
                        <br />
                        +91 294 298 0888<br />
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <section className="wrapper image-wrapper bg-image bg-overlay bg-overlay-300" data-image-src="/assets/img/photos/bg26.png">
          <div className="container pt-17 pb-19 pt-md-18 pb-md-17 text-center">
            <div className="row">
              <div className="col-lg-8 col-xl-7 col-xxl-6 mx-auto" data-cues="slideInDown" data-group="page-title">
                <h1 className="display-1 text-white fs-60 mb-4 px-md-15 px-lg-0">About Us</h1>
                <p className="lead fs-24 text-white lh-sm mb-7 mx-md-13 mx-lg-10">A company turning ideas into beautiful things.</p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="divider text-light mx-n2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60">
                <path fill="currentColor" d="M0,0V60H1440V0A5771,5771,0,0,1,0,0Z" />
              </svg>
            </div>
          </div>
        </section>
        <section className="wrapper bg-light">
          <div className="container pb-14 pb-md-16">
            <div className="row text-center mb-12 mb-md-15">
              <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mt-n18 mt-md-n22">
                <figure>
                  <Image
                    src="/assets/img/illustrations/i8.png"
                    srcSet="/assets/img/illustrations/i8@2x.png 2x"
                    alt=""
                  />
                </figure>
              </div>
            </div>
            <div className="row gx-lg-8 gx-xl-12 gy-6 mb-10 align-items-center">
              <div className="col-lg-6 order-lg-2">
                <ul className="progress-list">
                  <li>
                    <p>Speed Delivery</p>
                    <div className="progressbar line red" data-value="95"></div>
                  </li>
                  <li>
                    <p>Management</p>
                    <div className="progressbar line orange" data-value="85"></div>
                  </li>
                  <li>
                    <p>Experience & Expertise</p>
                    <div className="progressbar line yellow" data-value="95"></div>
                  </li>
                  <li>
                    <p>Cost</p>
                    <div className="progressbar line green" data-value="30"></div>
                  </li>
                  <li>
                    <p>Latest Technology</p>
                    <div className="progressbar line blue" data-value="95"></div>
                  </li>
                  <li>
                    <p>Secure Infrastructure</p>
                    <div className="progressbar line purple" data-value="99"></div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <h2>Key Features</h2>
                <p>
                  Business Process Outsourcing (BPO) services at Regal Outsource are aimed at making your business more efficient and effective. Our domain expertise, well-trained team, and the latest technological support will closely work with your teams at all levels, ensuring superior delivery of services. Our quality service, meticulous execution, and smooth implementation for all your projects will certainly add value and provide you with a strategic advantage over the competition.
                </p>
              </div>
            </div>
            <div className="row gx-lg-8 gx-xl-12 gy-6 gy-md-0 text-center">
              <div className="col-md-4 col-lg-4">
                <Image
                  src="/assets/img/icons/lineal/Speed Delivery.svg"
                  className="svg-inject icon-svg icon-svg-md text-orange mb-3"
                  alt=""
                />
                <h4>Speed Delivery</h4>
                <p className="mb-2">
                  In today’s fast-paced world, what really matters is the speed of response and turnaround time. Our dedicated experts with their global expertise and understanding offer the benefits of quick turnaround leading to sizeable business gains for you.
                </p>
              </div>
              <div className="col-md-4 col-lg-4">
                <Image
                  src="/assets/img/icons/lineal/Management.svg"
                  className="svg-inject icon-svg icon-svg-md text-orange mb-3"
                  alt=""
                />
                <h4>Management</h4>
                <p className="mb-2">
                  The work at Regal happens with an amalgamation of expert US-based Project Managers along with our unmatched management strategies and policies, dedicated and focused professional teams; you can realize considerable benefits in less than 30 days.
                </p>
              </div>
              <div className="col-md-4 col-lg-4">
                <Image
                  src="/assets/img/icons/lineal/Experience & Expertise.svg"
                  className="svg-inject icon-svg icon-svg-md text-orange mb-3"
                  alt=""
                />
                <h4>Experience & Expertise</h4>
                <p className="mb-2">
                  Our baby steps are growing into big leaps every day with testimonials that are more than satisfactory from our clientele, including the older and the newer ones. Our clients continue to benefit from our consistency of operational procedures that are in line with global best practices, helping them increase their bottom lines.
                </p>
              </div>
            </div>
            <div className="row gx-lg-8 gx-xl-12 gy-6 gy-md-0 text-center mt-10">
              <div className="col-md-4 col-lg-4">
                <Image
                  src="/assets/img/icons/lineal/cost.svg"
                  className="svg-inject icon-svg icon-svg-md text-blue mb-3"
                  alt=""
                />
                <h4>Cost</h4>
                <p className="mb-2">
                  Being engaged in a Global Delivery Model; we offer highly cost-effective solutions. Our approach aims to reduce cost, maintenance, and administration. Our teams offer a superior cost advantage to our esteemed clients.
                </p>
              </div>
              <div className="col-md-4 col-lg-4">
                <Image
                  src="/assets/img/icons/lineal/Latest Technology.svg"
                  className="svg-inject icon-svg icon-svg-md text-green mb-3"
                  alt=""
                />
                <h4>Latest Technology</h4>
                <p className="mb-2">
                  A highly proficient team delivering tailored solutions as per international standards and global requirements, effective use of technology coupled with strong technical expertise.
                </p>
              </div>
              <div className="col-md-4 col-lg-4">
                <Image
                  src="/assets/img/icons/lineal/Secure Infrastructure.svg"
                  className="svg-inject icon-svg icon-svg-md text-yellow mb-3"
                  alt=""
                />
                <h4>Secure Infrastructure</h4>
                <p className="mb-2">
                  Our infrastructure is designed for 100+ full-time employees & 24x7 operations. Considering the security & sensitivity, we ensure that NO unauthorized access to facilities and equipment, strategically installed CCTV cameras, biometric authentication ensures superior and consistent security protocol.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="wrapper bg-gray">
          <div className="container py-14 py-md-16">
            <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-16 align-items-center">
              <div className="col-lg-7">
                <figure>
                  <Image
                    className="w-auto"
                    src="/assets/img/illustrations/i3.png"
                    srcSet="/assets/img/illustrations/i3@2x.png 2x"
                    alt=""
                  />
                </figure>
              </div>
              <div className="col-lg-5">
                <h2 className="fs-15 text-uppercase text-line text-primary mb-3">WHY CHOOSE US?</h2>
                <h3 className="display-5 mb-7 pe-xxl-5">A few reasons why our valued customers choose us.</h3>
                <div className="d-flex flex-row mb-4">
                  <div>
                    <Image
                      src="/assets/img/icons/lineal/loyalty.svg"
                      className="svg-inject icon-svg icon-svg-sm text-blue me-4"
                      alt=""
                    />
                  </div>
                  <div>
                    <h4 className="mb-1">Our Commitment</h4>
                    <p className="mb-1">At Regal Outsource, our commitment to client satisfaction surpasses all standards of excellence and transparency.</p>
                    <p>Our clients in the past have actively chosen us for the expertise and professionalism of our people and outsourcing experience. At Regal, we make all efforts to become reliable advisors to our clients.</p>
                  </div>
                </div>
                <div className="d-flex flex-row mb-4">
                  <div>
                    <Image
                      src="/assets/img/icons/lineal/award-2.svg"
                      className="svg-inject icon-svg icon-svg-sm text-green me-4"
                      alt=""
                    />
                  </div>
                  <div>
                    <h4 className="mb-1">Top-Notch Support</h4>
                    <p className="mb-1">Regal Outsource provides end-to-end solutions for any business by adopting the latest technology along with market trends by accepting rigorous challenging tasks in the Domain, Software design, Programming, Implementations, and Post Installation Support.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="wrapper bg-light">
          <div className="container py-14 py-md-16">
            <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
              <div className="col-lg-7">
                <figure>
                  <Image
                    className="w-auto"
                    src="/assets/img/illustrations/i5.png"
                    srcSet="/assets/img/illustrations/i5@2x.png 2x"
                    alt=""
                  />
                </figure>
              </div>
              <div className="col-lg-5">
                <h2 className="fs-15 text-uppercase text-line text-primary text-center mb-3">Get In Touch</h2>
                <h3 className="display-5 mb-7">Got any questions? Don't hesitate to get in touch.</h3>
                <div className="d-flex flex-row">
                  <div>
                    <div className="icon text-primary fs-28 me-4 mt-n1">
                      <i className="uil uil-location-pin-alt"></i>
                    </div>
                  </div>
                  <div>
                    <h5 className="mb-1">Address</h5>
                    <address>Regal Outsource (India) Private Limited F-39(B), I.T.Park, M.I.A. (Extn.), Madri Udaipur - 313003, Rajasthan, India</address>
                  </div>
                </div>
                <div className="d-flex flex-row">
                  <div>
                    <div className="icon text-primary fs-28 me-4 mt-n1">
                      <i className="uil uil-phone-volume"></i>
                    </div>
                  </div>
                  <div>
                    <h5 className="mb-1">Phone</h5>
                    <p>+91 882 991 8888, +91 294 298 0888</p>
                  </div>
                </div>
                <div className="d-flex flex-row">
                  <div>
                    <div className="icon text-primary fs-28 me-4 mt-n1">
                      <i className="uil uil-envelope"></i>
                    </div>
                  </div>
                  <div>
                    <h5 className="mb-1">E-mail</h5>
                    <p className="mb-0">
                      <Link href="mailto:admin@regaloutsourceindia.com" className="admin@regaloutsourceindia.com">
                        admin@regaloutsourceindia.com
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
