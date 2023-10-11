import React from 'react'

const Footer = () => {
  return (
    <div> <footer class="bg-light">
    <div class="container pb-13 pb-md-15">
      <div class="card image-wrapper bg-full bg-image bg-overlay bg-overlay-300 mb-14" data-image-src="./assets/img/photos/bg26.png">
        <div class="card-body p-10 p-xl-12">
          <div class="row text-center">
            <div class="col-xl-11 col-xxl-9 mx-auto">
              <h2 class="fs-16 text-uppercase text-white mb-3">Join Our Community</h2>
              <h3 class="display-3 mb-8 px-lg-8 text-white">We are <span class="underline-3 style-2 yellow">trusted</span> by our clients all around the globe. Join them now and grow your business.</h3>
            </div>
            <!-- /column -->
          </div>
          <!-- /.row -->
        </div>
        <!--/.card-body -->
      </div>
      <!--/.card -->
      <div class="row gy-6 gy-lg-0">
        <div class="col-md-4 col-lg-3">
          <div class="widget">
            <img class="mb-4" src="./assets/img/logox.png" srcset="./assets/img/logox.png 2x" width="80" height="80" alt="" />
            <p class="mb-4">© 2022 Regal Outsource. <br class="d-none d-lg-block" />All rights reserved.</p>
            <nav class="nav social ">
              <a href="https://m.facebook.com/RegalOutSource"><i class="uil uil-facebook-f"></i></a>
              <a href="https://instagram.com/regaloutsource?igshid=YmMyMTA2M2Y="><i class="uil uil-instagram"></i></a>
              <a href="https://plus.google.com/108033648564806572456"><i class="uli uil-google"></i></a>
              <a href="https://www.linkedin.com/company/regal-outsource-india/mycompany/"><i class="uli uil-linkedin"></i></a>
            </nav>
            <!-- /.social -->
          </div>
          <!-- /.widget -->
        </div>
        <!-- /column -->
        <div class="col-md-4 col-lg-3">
          <div class="widget">
            <h4 class="widget-title  mb-3">Get in Touch</h4>
            <address class="pe-xl-15 pe-xxl-17">Regal Outsource (India) Private Limited F-39(B), I.T.Park, M.I.A. (Extn.),Madri Udaipur - 313003, Rajasthan, India</address>
            <a href="mailto:admin@regaloutsourceindia.com" class="admin@regaloutsourceindia.com">admin@regaloutsourceindia.com</a><br /> +91 882 991 8888, +91 294 298 0888
          </div>
          <!-- /.widget -->
        </div>
        <!-- /column -->
        <div class="col-md-4 col-lg-3">
          <div class="widget">
            <h4 class="widget-title  mb-3">Learn More</h4>
            <ul class="list-unstyled text-reset mb-0">
              <li><a href="./about2.html">About Us</a></li>
              <li><a href="./blog2.html">Blogs</a></li>
              <li><a href="./projects.html">Portfolio</a></li>
              <li><a href="./terms.html">Terms & Conditions</a></li>
            </ul>
          </div>
          <!-- /.widget -->
        </div>
        <!-- /column -->
        <div class="col-md-12 col-lg-3">
          <div class="widget">
            <h4 class="widget-title  mb-3">Our Newsletter</h4>
            <p class="mb-5">Subscribe to our newsletter to get our news & deals delivered to you.</p>
            <div class="newsletter-wrapper">
              <!-- Begin Mailchimp Signup Form -->
              <div id="mc_embed_signup2">
                <form action="https://elemisfreebies.us20.list-manage.com/subscribe/post?u=aa4947f70a475ce162057838d&amp;id=b49ef47a9a" method="post" id="mc-embedded-subscribe-form2" name="mc-embedded-subscribe-form" class="validate " target="_blank" novalidate>
                  <div id="mc_embed_signup_scroll2">
                    <div class="mc-field-group input-group form-floating">
                      <input type="email" value="" name="EMAIL" class="required email form-control" placeholder="Email Address" id="mce-EMAIL2">
                      <label for="mce-EMAIL2">Email Address</label>
                      <input type="submit" value="Join" name="subscribe" id="mc-embedded-subscribe2" class="btn btn-primary ">
                    </div>
                    <div id="mce-responses2" class="clear">
                      <div class="response" id="mce-error-response2" style="display:none"></div>
                      <div class="response" id="mce-success-response2" style="display:none"></div>
                    </div> <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_ddc180777a163e0f9f66ee014_4b1bcfa0bc" tabindex="-1" value=""></div>
                    <div class="clear"></div>
                  </div>
                </form>
              </div>
              <!--End mc_embed_signup-->
            </div>
            <!-- /.newsletter-wrapper -->
          </div>
          <!-- /.widget -->
        </div>
        <!-- /column -->
      </div>
      <!--/.row -->
    </div>
    <!-- /.container -->
  </footer></div>
  )
}

export default Footer