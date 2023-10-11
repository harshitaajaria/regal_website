import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
       <section class="wrapper image-wrapper bg-image bg-overlay bg-overlay-300" data-image-src="./assets/img/photos/bg26.png">
      <div class="container pt-17 pb-19 pt-md-18 pb-md-17 text-center">
        <div class="row">
          <div class="col-lg-8 col-xl-7 col-xxl-6 mx-auto" data-cues="slideInDown" data-group="page-title">
            <h1 class="display-1 text-white fs-60 mb-4 px-md-15 px-lg-0">Regal Outsource</h1>
            <p class="lead fs-24 text-white lh-sm mb-7 mx-md-13 mx-lg-10">We are a creative company that focuses on long term relationships with customers.</p>
          </div>
          <!-- /column -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
      <div class="overflow-hidden">
        <div class="divider text-light mx-n2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60">
            <path fill="currentColor" d="M0,0V60H1440V0A5771,5771,0,0,1,0,0Z" />
          </svg>
        </div>
      </div>
    </section>
    <!-- /section -->
    <section class="wrapper bg-light">
      <div class="container pb-15 pb-md-17">
        <div class="row gx-md-5 gy-5 mt-n19 mb-14 mb-md-17 justify-content-center">
          <div class="col-md-6 col-xl-3">
            <div class="card shadow-lg">
              <div class="card-body">
                <img src="./assets/img/icons/solid/edit.svg" class="svg-inject icon-svg icon-svg-sm solid-mono text-fuchsia mb-3" alt="" />
                <h4>Coding Aptitude</h4>
                <p class="mb-2">Regal Outsource is India-based software development centre with a panel of highly skilled, professional and expert software developers, which stresses upon an efficient, time-bound, cost-effective and advance integration software development that entails our clients to stay ahead of their competition.</p>
              </div>
              <!--/.card-body -->
            </div>
            <!--/.card -->
          </div>
          <!--/column -->
          
          <div class="col-md-6 col-xl-3">
            <div class="card shadow-lg">
              <div class="card-body">
                <img src="./assets/img/icons/solid/lamp.svg" class="svg-inject icon-svg icon-svg-sm solid-mono text-orange mb-3" alt="" />
                <h4>Design Skills</h4>
                <p class="mb-2">We are one of the leading web design and development companies, designing customized static and dynamic websites using latest technologies e.g. AJAX, ASP.NET, PHP etc. Our websites are compatible on Desktops, Tablets and Mobiles. We also offer expertise in Search Engine Optimisation (SEO) tools.</p>
              </div>
              <!--/.card-body -->
            </div>
            <!--/.card -->
          </div>
          <!--/column -->
          <div class="col-md-6 col-xl-3">
            <div class="card shadow-lg">
              <div class="card-body">
                <img src="./assets/img/icons/solid/delivery-box.svg" class="svg-inject icon-svg icon-svg-sm solid-mono text-green mb-3" alt="" />
                <h4>Process Outsource Expertise</h4>
                <p class="mb-2">At Regal Outsource, we have experienced and skilled resources, efficient systems and benchmarked delivery frameworks. We are amongst the leading BPO and KPO brands handling complete gamut of healthcare services and back office support that ensures our clients of quality, reliability and accuracy.</p>
              </div>
              <!--/.card-body -->
            </div>
            <!--/.card -->
          </div>
          <!--/column -->
        </div>
        <!--/.row -->
        <div class="row">
          <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mx-auto text-center">
            <h2 class="fs-16 text-uppercase text-muted mb-3">Why Choose Regal Outsource?</h2>
            <h3 class="display-3 mb-10 px-xl-10 px-xxl-15">Here are a few <span class="underline-3 style-2 yellow">reasons</span> why our customers choose us</h3>
          </div>
          <!-- /column -->
        </div>
        <!-- /.row -->
        <ul class="nav nav-tabs nav-tabs-bg nav-tabs-shadow-lg d-flex justify-content-between nav-justified flex-lg-row flex-column">
          <li class="nav-item"> <a class="nav-link d-flex flex-row active" data-bs-toggle="tab" href="#tab2-1">
              <div><img src="./assets/img/icons/lineal/loyalty.svg" class="svg-inject icon-svg icon-svg-sm solid-mono text-fuchsia me-4" alt="" /></div>
              <div>
                <h4>Our Commitment</h4>
                <p></p>
              </div>
            </a> </li>
          <li class="nav-item"> <a class="nav-link d-flex flex-row" data-bs-toggle="tab" href="#tab2-2">
              <div><img src="./assets/img/icons/lineal/award-2.svg" class="svg-inject icon-svg icon-svg-sm solid-mono text-violet me-4" alt="" /></div>
              <div>
                <h4>Top-Notch Support</h4>
                <p></p>
              </div>
            </a> </li>
        </ul>
        <!-- /.nav-tabs -->
        <div class="tab-content mt-6 mt-lg-8">
          <div class="tab-pane fade show active" id="tab2-1">
            <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
              <div class="col-lg-6">
                <figure class="rounded shadow-lg"><img src="./assets/img/photos/se5.jpg" srcset="./assets/img/photos/se5@2x.jpg 2x" alt=""></figure>
              </div>
              <!--/column -->
              <div class="col-lg-6">
                <h2 class="mb-3">Our Commitment</h2>
               <p>At Regal Outsource, our commitment to client satisfaction surpasses all standards of excellence and transparency.</p>
               <p>Our clients in the past have actively chosen us for the expertise and professionalism of our people and outsourcing experience. At Regal, we make all efforts to become reliable advisors to our clients.</p>
              </div>
              <!--/column -->
            </div>
            <!--/.row -->
          </div>
          <!--/.tab-pane -->
          <div class="tab-pane fade" id="tab2-2">
            <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
              <div class="col-lg-6 order-lg-2">
                <figure class="rounded shadow-lg"><img src="./assets/img/photos/se6.jpg" srcset="./assets/img/photos/se6@2x.jpg 2x" alt=""></figure>
              </div>
              <!--/column -->
              <div class="col-lg-6">
                <h2 class="mb-3">Top-Notch Support</h2>
                <p>Regal Outsource provides end-to-end solutions for any business by adopting the latest technology along with market trend by accepting rigorous challenging task in the Domain, Software design, Programming, Implementations and Post Installation Support</p>
              </div>
              <!--/column -->
            </div>
            <!--/.row -->
          </div>
          <!--/.tab-pane -->
          <div class="tab-pane fade" id="tab2-3">
            <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
              <div class="col-lg-6">
                <figure class="rounded shadow-lg"><img src="./assets/img/photos/se7.jpg" srcset="./assets/img/photos/se7@2x.jpg 2x" alt=""></figure>
              </div>
              <!--/column -->
              <div class="col-lg-6">
                <h2 class="mb-3">Finalize Product</h2>
                <p>Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam quis risus eget urna.</p>
                <ul class="icon-list bullet-bg bullet-soft-green">
                  <li><i class="uil uil-check"></i>Aenean eu leo quam. Pellentesque ornare.</li>
                  <li><i class="uil uil-check"></i>Nullam quis risus eget urna mollis ornare.</li>
                  <li><i class="uil uil-check"></i>Donec id elit non mi porta gravida at eget.</li>
                </ul>
                <a href="#" class="btn btn-green mt-2">Learn More</a>
              </div>
              <!--/column -->
            </div>
            <!--/.row -->
          </div>
          <!--/.tab-pane -->
        </div>
        <!-- /.tab-content -->
      </div>
      <!-- /.container -->
    </section>
    <!-- /section -->
    <section class="wrapper bg-gray">
      <div class="container py-15 py-md-17 pb-md-19">
        <div class="row align-items-center gy-8 mb-13">
          <div class="col-lg-7 text-center text-lg-start">
            <h2 class="fs-16 text-uppercase text-muted mb-3">Save Time and Money</h2>
            <h3 class="display-3 mb-0 pe-xl-10 pe-xxl-15">Save your time and money by choosing our <span class="underline-3 style-2 yellow">professional</span> team.</h3>
          </div>
          <!-- /column -->
          <div class="col-lg-5">
            <div class="row gy-6 text-center">
              <div class="col-md-6">
                <div class="progressbar semi-circle fuchsia" data-value="95"></div>
                <h4 class="mb-0">Customer Satisfaction</h4>
              </div>
              <!-- /column -->
              <div class="col-md-6">
                <div class="progressbar semi-circle orange" data-value="80"></div>
                <h4 class="mb-0">Increased Revenue</h4>
              </div>
              <!-- /column -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /column -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
    </section>
    <!-- /section -->
    <section class="wrapper bg-light">
      <div class="container py-16 py-md-18">
        <div class="card shadow-lg mt-n21 mt-md-n23">
          <div class="row gx-0">
            <div class="col-lg-6 image-wrapper bg-image bg-cover rounded-top rounded-lg-start" data-image-src="./assets/img/photos/tm2.jpg">
            </div>
            <!--/column -->
            <div class="col-lg-6">
              <div class="p-10 p-md-11 px-lg-13 py-lg-14">
                <div class="swiper-container dots-closer mb-6" data-margin="30" data-dots="true">
                  <div class="swiper">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide text-center">
                       <h3>Director's Message</h3>
                        <blockquote class="border-0 fs-lg text-center">
                          <p>" We believe in quality outputs, meeting deadlines, and high customer satisfaction by implementing our policies and unmatched management style in a harmonious work environment. "</p>
                          <div class="blockquote-details justify-content-center text-center">
                            <div class="info ps-0">
                              <h5 class="mb-1">Sanjay Nagda</h5>
                              <p class="mb-0">Managing Director & CEO</p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                      <!--/.swiper-slide -->
                    </div>
                    <!--/.swiper-wrapper -->
                  </div>
                  <!-- /.swiper -->
                </div>
                <!-- /.swiper-container -->
              </div>
              <!--/div -->
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
        </div>
        <!-- /.card -->
        <div class="row mt-17">
          <div class="col-lg-10 col-xl-9 col-xxl-8 mx-auto text-center">
            <h2 class="fs-16 text-uppercase text-muted mb-3">Latest Projects</h2>
            <h3 class="display-3 mb-10">Check out some of our awesome projects with <span class="underline-3 style-2 yellow">creative</span> ideas and great design.</h3>
          </div>
          <!-- /column -->
        </div>
        <!-- /.row -->
        <div class="swiper-container grid-view" data-margin="30" data-dots="true" data-items-xl="3" data-items-md="2" data-items-xs="1">
          <div class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <figure class="rounded mb-6"><img src="./assets/img/Artico World.jpg" srcset="./assets/img/Artico World.jpg 2x"/><a class="item-link" href="http://www.articoworld.com/" data-glightbox data-gallery="projects-group"><i class="uil uil-focus-add"></i></a></figure>
                <div class="project-details d-flex justify-content-center flex-column">
                  <div class="post-header">
                    <h2 class="post-title h3"><a class="link-dark">Artico World</a></h2>
                    <div class="post-category text-ash">ARTICO WORLD is online handicraft website.</div>
                  </div>
                  <!-- /.post-header -->
                </div>
                <!-- /.project-details -->
              </div>
              <!--/.swiper-slide -->
              <div class="swiper-slide">
                <figure class="rounded mb-6"><img src="assets/img/Elite Healthcare Alliance.jpg" srcset="./assets/img/Elite Healthcare Alliance.jpg 2x"/><a class="item-link" href="http://eliteha.com/" data-glightbox data-gallery="projects-group"><i class="uil uil-focus-add"></i></a></figure>
                <div class="project-details d-flex justify-content-center flex-column">
                  <div class="post-header">
                    <h2 class="post-title h3"><a class="link-dark">Elite Healthcare Alliance</a></h2>
                    <div class="post-category text-ash">ELITE HEALTHCARE ALLIANCE is an innovative healthcare recruiting and consulting
                      firm that is bridging the gap between Job Seekers and health care facilities.</div>
                  </div>
                  <!-- /.post-header -->
                </div>
                <!-- /.project-details -->
              </div>
              <!--/.swiper-slide -->
              <div class="swiper-slide">
                <figure class="rounded mb-6"><img src="assets/img/Mewar Sahodaya School Complex.jpg" srcset="./assets/img/Mewar Sahodaya School Complex.jpg 2x"/><a class="item-link" href="http://www.mewarsahodaya.org/" data-glightbox data-gallery="projects-group"><i class="uil uil-focus-add"></i></a></figure>
                <div class="project-details d-flex justify-content-center flex-column">
                  <div class="post-header">
                    <h2 class="post-title h3"><a class="link-dark"> Mewar Sahodaya School Complex</a></h2> 
                    <div class="post-category text-ash">MEWAR SAHODAYA SCHOOL COMPLEX, is the name of the voluntary group of
                      Schools affiliated to the CBSE.</div>
                  </div>
                  <!-- /.post-header -->
                </div>
                <!-- /.project-details -->
              </div>
              <!--/.swiper-slide -->
              <div class="swiper-slide">
                <figure class="rounded mb-6"><img src="./assets/img/Medical Healthcare Services.jpg" srcset="./assets/img/Medical Healthcare Services.jpg 2x"/><a class="item-link" href="http://mdhlth.com/" data-glightbox data-gallery="projects-group"><i class="uil uil-focus-add"></i></a></figure>
                <div class="project-details d-flex justify-content-center flex-column">
                  <div class="post-header">
                    <h2 class="post-title h3"><a class="link-dark">Medical Healthcare Services</a></h2>
                    <div class="post-category text-ash">allows healthcare
                      providers to save precious time and money</div>
                  </div>
                  <!-- /.post-header -->
                </div>
                <!-- /.project-details -->
              </div>
              <!--/.swiper-slide -->
                  <!-- /.post-header -->
                </div>
                <!-- /.project-details -->
              </div>
              <!--/.swiper-slide -->
            </div>
            <!--/.swiper-wrapper -->
          </div>
          <!-- /.swiper -->
        </div>
              <!--/column -->
            </div>
            <!--/.row -->
          </div>
          <!--/column -->
    </main>
  )
}
