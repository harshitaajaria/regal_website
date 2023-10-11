import React from 'react'

const page = () => {
  return (
    <div><div class="content-wrapper">
    <header class="wrapper bg-soft-primary">
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
              <!-- /.navbar-nav -->
            </div>
            <!-- /.navbar-other -->
          </div>
          <!-- /.d-flex -->
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
    <section class="wrapper image-wrapper bg-image bg-overlay bg-overlay-300" data-image-src="./assets/img/photos/bg26.png">
      <div class="container pt-17 pb-19 pt-md-18 pb-md-17 text-center">
        <div class="row">
          <div class="col-lg-8 col-xl-7 col-xxl-6 mx-auto" data-cues="slideInDown" data-group="page-title">
            <h1 class="display-1 text-white fs-60 mb-4 px-md-15 px-lg-0">Get in Touch</h1>
            <p class="lead fs-24 text-white lh-sm mb-7 mx-md-13 mx-lg-10"></p>
            <ol class="breadcrumb">
          </div>
          <!-- /column -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
    </section>
    <!-- /section -->
    <section class="wrapper bg-light angled upper-end">
      <div class="container py-14 py-md-16">
        <div class="row gy-10 gx-lg-8 gx-xl-12 mb-16 align-items-center">
          <div class="col-lg-7 position-relative">
            <div class="shape bg-dot primary rellax w-18 h-18" data-rellax-speed="1" style="top: 0; left: -1.4rem; z-index: 0;"></div>
            <div class="row gx-md-5 gy-5">
              <div class="col-md-6">
                <figure class="rounded mt-md-10 position-relative"><img src="./assets/img/photos/g5.jpg" srcset="./assets/img/photos/g5@2x.jpg 2x" alt=""></figure>
              </div>
              <!--/column -->
              <div class="col-md-6">
                <div class="row gx-md-5 gy-5">
                  <div class="col-md-12 order-md-2">
                    <figure class="rounded"><img src="./assets/img/photos/g6.jpg" srcset="./assets/img/photos/g6@2x.jpg 2x" alt=""></figure>
                  </div>
                  <!--/column -->
                  <div class="col-md-10">
                    <div class="card bg-pale-primary text-center counter-wrapper">
                      <div class="card-body py-11">
                        <h3 class="mb-0">Satisfied Customers all around the world</h3>
                      </div>
                      <!--/.card-body -->
                    </div>
                    <!--/.card -->
                  </div>
                  <!--/column -->
                </div>
                <!--/.row -->
              </div>
              <!--/column -->
            </div>
            <!--/.row -->
          </div>
          <!--/column -->
          <div class="col-lg-5">
            <h2 class="display-4 mb-8">Keep In Touch.</h2>
            <div class="d-flex flex-row">
              <div>
                <div class="icon text-primary fs-28 me-6 mt-n1"> <i class="uil uil-location-pin-alt"></i> </div>
              </div>
              <div>
                <h5 class="mb-1">Corporate office address</h5>
                <address>Regal Outsource (India) Private Limited F-39(B), I.T.Park, M.I.A. (Extn.),Madri <br class="d-none d-md-block" />Udaipur - 313003, Rajasthan, India</address>
              </div>
            </div>
            <div class="d-flex flex-row">
              <div>
                <div class="icon text-primary fs-28 me-6 mt-n1"> <i class="uil uil-phone-volume"></i> </div>
              </div>
              <div>
                <h5 class="mb-1">Phone</h5>
                <p>+91 882 991 8888, +91 294 298 0888</p>
              </div>
            </div>
            <div class="d-flex flex-row">
              <div>
                <div class="icon text-primary fs-28 me-6 mt-n1"> <i class="uil uil-envelope"></i> </div>
              </div>
              <div>
                <h5 class="mb-1">E-mail</h5>
                <p class="mb-0"><a href="admin@regaloutsourceindia.com" class="link-body">admin@regaloutsourceindia.com</a></p>
              </div>
            </div>
            <div class="d-flex flex-row">
              <div>
                <div class="icon text-primary fs-28 me-6 mt-2"> <i class="uil uil-location-pin-alt"></i> </div>
              </div>
              <div>
                <h5 class="mb-1 mt-3">Registered office address</h5>
                <address>Regal Outsource (India) Private Limited 17, Sharda Nagar, Near Bohra Ganesh ji,<br class="d-none d-md-block" />Udaipur - 313003, Rajasthan, India</address>
              </div>
            </div>
          </div>
          <!--/column -->
        </div>
        <!--/.row -->
        <div class="row">
          <div class="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
            <h2 class="display-4 mb-3 text-center">Drop Us a Line</h2>
            <p class="lead text-center mb-10">Reach out to us from our contact form and we will get back to you shortly.</p>
            <form class="contact-form needs-validation" method="post" action="./assets/php/contact.php" novalidate>
              <div class="messages"></div>
              <div class="row gx-4">
                <div class="col-md-6">
                  <div class="form-floating mb-4">
                    <input id="form_name" type="text" name="name" class="form-control" placeholder="Jane" required>
                    <label for="form_name">First Name *</label>
                    <div class="valid-feedback"> Looks good! </div>
                    <div class="invalid-feedback"> Please enter your first name. </div>
                  </div>
                </div>
                <!-- /column -->
                <div class="col-md-6">
                  <div class="form-floating mb-4">
                    <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="Doe" required>
                    <label for="form_lastname">Last Name *</label>
                    <div class="valid-feedback"> Looks good! </div>
                    <div class="invalid-feedback"> Please enter your last name. </div>
                  </div>
                </div>
                <!-- /column -->
                <div class="col-md-6">
                  <div class="form-floating mb-4">
                    <input id="form_email" type="email" name="email" class="form-control" placeholder="jane.doe@example.com" required>
                    <label for="form_email">Email *</label>
                    <div class="valid-feedback"> Looks good! </div>
                    <div class="invalid-feedback"> Please provide a valid email address. </div>
                  </div>
                </div>
                <!-- /column -->
                <div class="col-md-6">
                  <div class="form-select-wrapper mb-4">
                    <select class="form-select" id="form-select" name="department" required>
                      <option selected disabled value="">Select a department</option>
                      <option value="Sales">Sales</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Customer Support">Customer Support</option>
                    </select>
                    <div class="valid-feedback"> Looks good! </div>
                    <div class="invalid-feedback"> Please select a department. </div>
                  </div>
                </div>
                <!-- /column -->
                <div class="col-12">
                  <div class="form-floating mb-4">
                    <textarea id="form_message" name="message" class="form-control" placeholder="Your message" style="height: 150px" required></textarea>
                    <label for="form_message">Message *</label>
                    <div class="valid-feedback"> Looks good! </div>
                    <div class="invalid-feedback"> Please enter your messsage. </div>
                  </div>
                </div>
                <!-- /column -->
                <div class="col-12 text-center">
                  <input type="submit" class="btn btn-primary rounded-pill btn-send mb-3" value="Send message">
                  <p class="text-muted"><strong>*</strong> These fields are required.</p>
                </div>
                <!-- /column -->
              </div>
              <!-- /.row -->
            </form>
            <!-- /form -->
          </div>
          <!-- /column -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
    </section>
    <!-- /section -->
  </div></div>
  )
}

export default page