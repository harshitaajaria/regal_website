import Link from "next/link"
import Image from "next/image";
import bg26 from "/public/bg26.png";
import logox from "/public/logox.png";
export default function Page() {
  return (
    <div >
     <div className="content-wrapper">
    <header className="wrapper bg-soft-primary">
      <nav className="navbar navbar-expand-lg center-logo transparent position-absolute navbar-dark">
        <div className="container justify-content-between align-items-center">
          <div className="d-flex flex-row w-100 justify-content-between align-items-center d-lg-none">
            <div className="navbar-brand"><a href="./index.html">
                <img className="logo-dark" src="./assets/img/logox.png" srcset="./assets/img/logox.png 2x" width="80" height="80" alt="" />
                <img className="logo-light" src="./assets/img/logox.png" srcset="./assets/img/logox.png 2x" width="80" height="80" alt="" />
              </a></div>
            <div className="navbar-other ms-auto">
              <ul className="navbar-nav flex-row align-items-center">
                <li className="nav-item d-lg-none">
                  <button className="hamburger offcanvas-nav-btn"><span></span></button>
                </li>
              </ul>
              <!-- /.navbar-nav -->
            </div>
            <!-- /.navbar-other -->
          </div>
          <!-- /.d-flex -->
          <div className="navbar-collapse-wrapper d-flex flex-row align-items-center w-100">
            <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
              <div className="offcanvas-header mx-lg-auto order-0 order-lg-1 d-lg-flex px-lg-8">
                <a href="./index.html" className="transition-none d-none d-lg-flex"><img className="logo-dark" src="./assets/img/logox.png" srcset="./assets/img/logox.png 2x" width="80" height="80" alt="" />
                  <img className="logo-light" src="./assets/img/logox.png" srcset="./assets/img/logox.png 2x" width="80" height="80" alt="" /></a>
                <h3 className="text-white fs-30 mb-0 d-lg-none">Regal Outsource</h3>
                <button type="button" className="btn-close btn-close-white d-lg-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="w-100 order-1 order-lg-0 d-lg-flex offcanvas-body">
                <ul className="navbar-nav ms-lg-auto">
                  <a className="nav-link " href="./about2.html" >About</a>
                  <a className="nav-link " href="./services.html">Services</a>
                   <a className="nav-link " href="./projects.html">Portfolio</a>
              </div>
              <div className="w-100 order-3 order-lg-2 d-lg-flex offcanvas-body">
                <ul className="navbar-nav me-lg-auto">
                  <a className="nav-link " href="./blog2.html" >Blog</a>
                    <a className="nav-link " href="./contact2.html">Contact</a>
                    <a className="nav-link " href="./career2.html">Careers</a>
                    </ul>
              </div>
              <div className="offcanvas-body d-lg-none order-4 mt-auto">
                <div className="offcanvas-footer">
                  <div>
                    <a href="mailto:admin@regaloutsourceindia.com" className="admin@regaloutsourceindia.com">admin@regaloutsourceindia.com</a>
                    <br />+91 882 991 8888,<br />
                    <br />+91 294 298 0888<br />
                    <nav className="nav social social-white mt-4">
                      <a href="https://m.facebook.com/RegalOutSource"><i className="uil uil-facebook-f"></i></a>
                        <a href="https://instagram.com/regaloutsource?igshid=YmMyMTA2M2Y="><i className="uil uil-instagram"></i></a>
                        <a href="https://plus.google.com/108033648564806572456"><i className="uli uil-google"></i></a>
                        <a href="https://www.linkedin.com/company/regal-outsource-india/mycompany/"><i className="uli uil-linkedin"></i></a> 
                    </nav>
                    <!-- /.social -->
                  </div>
                </div>
              </div>
            </div>
            <!-- /.navbar-collapse -->
          </div>
          <!-- /.navbar-collapse-wrapper -->
        </div>
        <!-- /.container -->
      </nav>
      <!-- /.navbar -->
    </header>
    <!-- /header -->
    <section className="wrapper image-wrapper bg-image bg-overlay bg-overlay-300" data-image-src="./assets/img/photos/bg26.png">
      <div className="container pt-17 pb-19 pt-md-18 pb-md-17 text-center">
        <div className="row">
          <div className="col-lg-8 col-xl-7 col-xxl-6 mx-auto" data-cues="slideInDown" data-group="page-title">
            <h1 className="display-1 text-white fs-60 mb-4 px-md-15 px-lg-0">About Us</h1>
            <p className="lead fs-24 text-white lh-sm mb-7 mx-md-13 mx-lg-10">A company turning ideas into beautiful things.</p>
          </div>
          <!-- /column -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
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
            <figure><img className="w-auto mt-16" src="./assets/img/illustrations/i8.png" srcset="./assets/img/illustrations/i8@2x.png 2x" alt="" /></figure>
          </div>
          <!-- /column -->
        </div>
        <!-- /.row -->
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
            <!-- /.progress-list -->
          </div>
          <!--/column -->
          <div className="col-lg-6">
            <h2>Key Features</h2>
            <p>Business Process Outsourcing (BPO) services at Regal Outsource are aimed at making your business more efficient and effective. Our domain expertise, well-trained team and the latest technological support will closely work with your teams at all levels ensuring a superior delivery of services. Our quality service, meticulous execution and smooth implementation for all your projects will certainly add value and provide you strategic advantage over competition.</p>
          </div>
          <!--/column -->
        </div>
        <!--/.row -->
        <div className="row gx-lg-8 gx-xl-12 gy-6 gy-md-0 text-center">
          <!--/column -->
          <div className="col-md-4 col-lg-4">
            <img src="./assets/img/icons/lineal/Speed Delivery.svg" className="svg-inject icon-svg icon-svg-md text-orange mb-3" alt="" />
            <h4>Speed Delivery</h4>
            <p className="mb-2">In today’s fast-faced world, what really matters is the speed of response and turnaround time. Our dedicated experts with their global expertise and understanding offer the benefits of a quick turnaround leading to sizeable business gains for you.</p>
          </div>
          <!--/column -->
          <div className="col-md-4 col-lg-4">
            <img src="./assets/img/icons/lineal/Management.svg" className="svg-inject icon-svg icon-svg-md text-orange mb-3" alt="" />
            <h4>Management</h4>
            <p className="mb-2">The work at Regal happens with an amalgamation of expert US-based Project Managers along with our unmatched management strategies and policies, dedicated and focused professional teams; you can realize considerable benefits in less than 30 days.</p>
          </div>
          <!--/column -->
          <div className="col-md-4 col-lg-4">
            <img src="./assets/img/icons/lineal/Experience & Expertise.svg" className="svg-inject icon-svg icon-svg-md text-orange mb-3" alt="" />
            <h4>Experience & Expertise</h4>
            <p className="mb-2">Our baby steps are growing into big leaps everyday with testimonials that are more than satisfactory from our clientele including the older and the newer ones. Our clients continue to benefit from our consistency of operational procedures that are inline with global best practices helping them in increasing their bottom lines.</p>
          </div>
          <!--/column -->
        </div>
        <div className="row gx-lg-8 gx-xl-12 gy-6 gy-md-0 text-center mt-10">
          <div className="col-md-4 col-lg-4">
            <img src="./assets/img/icons/lineal/cost.svg" className="svg-inject icon-svg icon-svg-md text-blue mb-3" alt="" />
            <h4>Cost</h4>
            <p className="mb-2">Being engaged in a Global Delivery Model; we offer highly cost- effective solutions. Our approach is on aim to reduce cost, maintenance and administration. Our teams offer superior cost advantage to our esteemed clients.</p>
          </div>
          <!--/column -->
          <div className="col-md-4 col-lg-4">
            <img src="./assets/img/icons/lineal/Latest Technology.svg" className="svg-inject icon-svg icon-svg-md text-green mb-3" alt="" />
            <h4>Latest Technology</h4>
            <p className="mb-2">Highly proficient team delivering tailored solutions as per the international standards and global requirements, effective use of technology coupled with a strong technical expertise.</p>
          </div>
          <!--/column -->
          <div className="col-md-4 col-lg-4">
            <img src="./assets/img/icons/lineal/Secure Infrastructure.svg" className="svg-inject icon-svg icon-svg-md text-yellow mb-3" alt="" />
            <h4>Secure Infrastructure</h4>
            <p className="mb-2">Our infrastructure is designed for 100+ full-time employees & 24x7 operations. Considering the security & sensitivity we ensure that NO unauthorized access to facilities and equipment, strategically installed CCTV cameras, biometric authentication ensures a superior and consistent security protocol.</p>
          </div>
          <!--/column -->
        </div>
        <!--/.row -->
      </div>
      <!-- /.container -->
    </section>
    <!-- /section -->
    <section className="wrapper bg-gray">
      <div className="container py-14 py-md-16">
        <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-16 align-items-center">
          <div className="col-lg-7">
            <figure><img className="w-auto" src="./assets/img/illustrations/i3.png" srcset="./assets/img/illustrations/i3@2x.png 2x" alt="" /></figure>
          </div>
          <div className="col-lg-5">
            <h2 className="fs-15 text-uppercase text-line text-primary mb-3">WHY CHOOSE US?</h2>
            <h3 className="display-5 mb-7 pe-xxl-5">A few reasons why our valued customers choose us.</h3>
            <div class="d-flex flex-row mb-4">
              <div>
                <img src="./assets/img/icons/lineal/loyalty.svg" class="svg-inject icon-svg icon-svg-sm text-blue me-4" alt="" />
              </div>
              <div>
                <h4 class="mb-1">Our Commitment</h4>
                <p class="mb-1">At Regal Outsource, our commitment to client satisfaction surpasses all standards of excellence and transparency. </p>
                <p> Our clients in the past have actively chosen us for the expertise and professionalism of our people and outsourcing experience. At Regal, we make all efforts to become reliable advisors to our clients.</p>
              </div>
            </div>
            <div class="d-flex flex-row mb-4">
              <div>
                <img src="./assets/img/icons/lineal/award-2.svg" class="svg-inject icon-svg icon-svg-sm text-green me-4" alt="" />
              </div>
              <div>
                <h4 class="mb-1">Top-Notch Support</h4>
                <p class="mb-1">Regal Outsource provides end-to-end solutions for any business by adopting the latest technology along with market trend by accepting rigorous challenging task in the Domain, Software design, Programming, Implementations and Post Installation Support</p>
              </div>
            </div>
          </div>
          <!--/column -->
        </div>
        <!--/.row -->
      </div>
      <!-- /.container -->
    </section>
    <!-- /section -->
   
                  
                    <!-- /.social -->
                  </div>
                  <!--/.swiper-slide -->
                </div>
                <!--/.swiper-wrapper -->
              </div>
              <!-- /.swiper -->
            </div>
            <!-- /.swiper-container -->
          </div>
          <!--/column -->
        </div>
        <!--/.row -->
      </div>
      <!-- /.container -->
    </section>
    <!-- /section -->
                  <!--/.swiper-slide -->
                </div>
                <!--/.swiper-wrapper -->
              </div>
              <!-- /.swiper -->
            </div>
            <!-- /.swiper-container -->
          </div>
          <!--/column -->
        </div>
        <!--/.row -->
    <!-- /section -->
    <section class="wrapper bg-light">
      <div class="container py-14 py-md-16">
        <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
          <div class="col-lg-7">
            <figure><img class="w-auto" src="./assets/img/illustrations/i5.png" srcset="./assets/img/illustrations/i5@2x.png 2x" alt="" /></figure>
          </div>
          <!--/column -->
          <div class="col-lg-5">
            <h2 class="fs-15 text-uppercase text-line text-primary text-center mb-3">Get In Touch</h2>
            <h3 class="display-5 mb-7">Got any questions? Don't hesitate to get in touch.</h3>
            <div class="d-flex flex-row">
              <div>
                <div class="icon text-primary fs-28 me-4 mt-n1"> <i class="uil uil-location-pin-alt"></i> </div>
              </div>
              <div>
                <h5 class="mb-1">Address</h5>
                <address>Regal Outsource (India) Private Limited F-39(B), I.T.Park, M.I.A. (Extn.),Madri Udaipur - 313003, Rajasthan, India</address>
              </div>
            </div>
            <div class="d-flex flex-row">
              <div>
                <div class="icon text-primary fs-28 me-4 mt-n1"> <i class="uil uil-phone-volume"></i> </div>
              </div>
              <div>
                <h5 class="mb-1">Phone</h5>
                <p>+91 882 991 8888, +91 294 298 0888</p>
              </div>
            </div>
            <div class="d-flex flex-row">
              <div>
                <div class="icon text-primary fs-28 me-4 mt-n1"> <i class="uil uil-envelope"></i> </div>
              </div>
              <div>
                <h5 class="mb-1">E-mail</h5>
                <p class="mb-0"><a href="mailto:admin@regaloutsourceindia.com" class="admin@regaloutsourceindia.com">admin@regaloutsourceindia.com</a></p>
              </div>
            </div>
          </div>
          <!--/column -->
        </div>
        <!--/.row -->
      </div>
      <!-- /.container -->
    </section>
    <!-- /section -->
  </div>
    </div>
  );
}
