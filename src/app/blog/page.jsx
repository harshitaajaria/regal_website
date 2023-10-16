import React from 'react';
import Link from "next/link";

const page = () => {
  return (
    <div className="content-wrapper">
    <header className="wrapper bg-soft-primary">
      <nav className="navbar navbar-expand-lg center-logo transparent position-absolute navbar-dark">
        <div className="container justify-content-between align-items-center">
          <div className="d-flex flex-row w-100 justify-content-between align-items-center d-lg-none">
            <div className="navbar-brand"><Link href="./index.html">
                <img className="logo-dark" src="./assets/img/logox.png" srcset="./assets/img/logox.png 2x" width="80" height="80" alt="" />
                <img className="logo-light" src="./assets/img/logox.png" srcset="./assets/img/logox.png 2x" width="80" height="80" alt="" />
              </Link></div>
            <div className="navbar-other ms-auto">
              <ul className="navbar-nav flex-row align-items-center">
                <li className="nav-item d-lg-none">
                  <button className="hamburger offcanvas-nav-btn"><span></span></button>
                </li>
              </ul>
             
            </div>
           
          </div>
         
          <div className="navbar-collapse-wrapper d-flex flex-row align-items-center w-100">
            <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
              <div className="offcanvas-header mx-lg-auto order-0 order-lg-1 d-lg-flex px-lg-8">
                <Link href="./index.html" className="transition-none d-none d-lg-flex"><img className="logo-dark" src="./assets/img/logox.png" srcset="./assets/img/logox.png 2x" width="80" height="80" alt="" />
                  <img className="logo-light" src="./assets/img/logox.png" srcset="./assets/img/logox.png 2x" width="80" height="80" alt="" /></Link>
                <h3 className="text-white fs-30 mb-0 d-lg-none">Regal Outsource</h3>
                <button type="button" className="btn-close btn-close-white d-lg-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="w-100 order-1 order-lg-0 d-lg-flex offcanvas-body">
                <ul className="navbar-nav ms-lg-auto">
                  <Link className="nav-link " href="./about2.html" >About</Link>
                  <Link className="nav-link " href="./services.html">Services</Link>
                   <Link className="nav-link " href="./projects.html">Portfolio</Link>
                   </ul>
              </div>
              <div className="w-100 order-3 order-lg-2 d-lg-flex offcanvas-body">
                <ul className="navbar-nav me-lg-auto">
                  <Link className="nav-link " href="./blog2.html" >Blog</Link>
                    <Link className="nav-link " href="./contact2.html">Contact</Link>
                    <Link className="nav-link " href="./career2.html">Careers</Link>
                    </ul>
              </div>
              <div className="offcanvas-body d-lg-none order-4 mt-auto">
                <div className="offcanvas-footer">
                  <div>
                    <Link href="mailto:admin@regaloutsourceindia.com" className="admin@regaloutsourceindia.com">admin@regaloutsourceindia.com</Link>
                    <br />+91 882 991 8888,<br />
                    <br />+91 294 298 0888<br />
                    <nav className="nav social social-white mt-4">
                      <Link href="https://m.facebook.com/RegalOutSource"><i className="uil uil-facebook-f"></i></Link>
                      <Link href="https://instagram.com/regaloutsource?igshid=YmMyMTA2M2Y="><i className="uil uil-instagram"></i></Link>
                      <Link href="https://plus.google.com/108033648564806572456"><i className="uli uil-google"></i></Link>
                      <Link href="https://www.linkedin.com/company/regal-outsource-india/mycompany/"><i className="uli uil-linkedin"></i></Link> 
                    </nav>
                  
                  </div>
                </div>
              </div>
            </div>
           
          </div>
          
        </div>
       
      </nav>
    
    </header>
   
    <section className="wrapper image-wrapper bg-image bg-overlay bg-overlay-300" data-image-src="./assets/img/photos/bg26.png">
      <div className="container pt-17 pb-19 pt-md-18 pb-md-17 text-center">
        <div className="row">
          <div className="col-lg-8 col-xl-7 col-xxl-6 mx-auto" data-cues="slideInDown" data-group="page-title">
            <h1 className="display-1 text-white fs-60 mb-4 px-md-15 px-lg-0">Business News</h1>
            <p className="lead fs-24 text-white lh-sm mb-7 mx-md-13 mx-lg-10">Welcome to our journal. Here you can find the latest company news and business articles.<span className="underline">long-term relationships</span> with customers.</p>
          </div>
         
        </div>
        
      </div>
      </section>
   
    <section className="wrapper bg-light">
      <div className="container py-14 py-md-16">
        <div className="row gx-lg-8 gx-xl-12">
          <div className="col-lg-8">
            <div className="blog classic-view">
              <article className="post">
                <div className="card">
                  <figure className="card-img-top overlay overlay-1 hover-scale"><Link href="./blog-post.html"><img src="./assets/img/photos/b1.jpg" alt="" /></Link>
                    <figcaption>
                      <h5 className="from-top mb-0">Read More</h5>
                    </figcaption>
                  </figure>
                  <div className="card-body">
                    <div className="post-header">
                      <div className="post-category text-line">
                        <Link href="#" className="hover" rel="category">Teamwork</Link>
                      </div>
                     
                      <h2 className="post-title mt-1 mb-0"><Link className="link-dark" href="./blog-post.html">Amet Dolor Bibendum Parturient Cursus</Link></h2>
                    </div>
                    
                    <div className="post-content">
                      <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel. Nulla vitae elit libero, Link pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh. Cras mattis consectetur purus.</p>
                    </div>
                   
                  </div>
                  
                  <div className="card-footer">
                    <ul className="post-meta d-flex mb-0">
                      <li className="post-date"><i className="uil uil-calendar-alt"></i><span>5 Jul 2022</span></li>
                      <li className="post-author"><Link href="#"><i className="uil uil-user"></i><span>By Regal Outsource</span></Link></li>
                      <li className="post-comments"><Link href="#"><i className="uil uil-comment"></i>3<span> Comments</span></Link></li>
                      <li className="post-likes ms-auto"><Link href="#"><i className="uil uil-heart-alt"></i>3</Link></li>
                    </ul>
                    
                  </div>
                  
                </div>
                
              </article>
              
              <article className="post">
                <div className="card">
                  <div className="post-slider card-img-top">
                    <div className="swiper-container dots-over" data-margin="5" data-nav="true" data-dots="true">
                      <div className="swiper">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide"><img src="./assets/img/photos/b2.jpg" alt="" /></div>
                          <div className="swiper-slide"><img src="./assets/img/photos/b3.jpg" alt="" /></div>
                        </div>
                        
                      </div>
                      
                    </div>
                    
                  </div>
                  
                  <div className="card-body">
                    <div className="post-header">
                      <div className="post-category text-line">
                        <Link href="#" className="hover" rel="category">Ideas</Link>
                      </div>
                     
                      <h2 className="post-title mt-1 mb-0"><Link className="link-dark" href="./blog-post.html">Fringilla Ligula Pharetra Amet</Link></h2>
                    </div>
                    
                    <div className="post-content">
                      <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel. Nulla vitae elit libero, Link pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh. Cras mattis consectetur purus.</p>
                    </div>
                    
                  </div>
                 
                  <div className="card-footer">
                    <ul className="post-meta d-flex mb-0">
                      <li className="post-date"><i className="uil uil-calendar-alt"></i><span>25 Jun 2022</span></li>
                      <li className="post-author"><Link href="#"><i className="uil uil-user"></i><span>By Regal Outsource</span></Link></li>
                      <li className="post-comments"><Link href="#"><i className="uil uil-comment"></i>5<span> Comments</span></Link></li>
                      <li className="post-likes ms-auto"><Link href="#"><i className="uil uil-heart-alt"></i>4</Link></li>
                    </ul>
                    
                  </div>
                 
                </div>
                
              </article>
             
              <article className="post">
                <div className="card">
                  <div className="card-img-top">
                    <div className="player" data-plyr-provider="youtube" data-plyr-embed-id="j_Y2Gwaj7Gs"></div>
                  </div>
                  <div className="card-body">
                    <div className="post-header">
                      <div className="post-category text-line">
                        <Link href="#" className="hover" rel="category">Workspace</Link>
                      </div>
                     
                      <h2 className="post-title mt-1 mb-0"><Link className="link-dark" href="./blog-post.html">Consectetur Bibendum Sollicitudin Vulputate</Link></h2>
                    </div>
                   
                    <div className="post-content">
                      <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel. Nulla vitae elit libero, Link pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh. Cras mattis consectetur purus.</p>
                    </div>
                    
                  </div>
                  
                  <div className="card-footer">
                    <ul className="post-meta d-flex mb-0">
                      <li className="post-date"><i className="uil uil-calendar-alt"></i><span>18 May 2022</span></li>
                      <li className="post-author"><Link href="#"><i className="uil uil-user"></i><span>By Regal Outsource</span></Link></li>
                      <li className="post-comments"><Link href="#"><i className="uil uil-comment"></i>8<span> Comments</span></Link></li>
                      <li className="post-likes ms-auto"><Link href="#"><i className="uil uil-heart-alt"></i>6</Link></li>
                    </ul>
                    
                  </div>
                  
                </div>
               
              </article>
             
            </div>
            
            <div className="blog grid grid-view">
              <div className="row isotope gx-md-8 gy-8 mb-8">
                <article className="item post col-md-6">
                  <div className="card">
                    <figure className="card-img-top overlay overlay-1 hover-scale"><Link href="#"> <img src="./assets/img/photos/b4.jpg" alt="" /></Link>
                      <figcaption>
                        <h5 className="from-top mb-0">Read More</h5>
                      </figcaption>
                    </figure>
                    <div className="card-body">
                      <div className="post-header">
                        <div className="post-category text-line">
                          <Link href="#" className="hover" rel="category">Coding</Link>
                        </div>
                       
                        <h2 className="post-title h3 mt-1 mb-3"><Link className="link-dark" href="./blog-post.html">Ligula tristique quis risus</Link></h2>
                      </div>
                     
                      <div className="post-content">
                        <p>Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor. Aenean lacinia bibendum nulla sed.</p>
                      </div>
                      
                    </div>
                    
                    <div className="card-footer">
                      <ul className="post-meta d-flex mb-0">
                        <li className="post-date"><i className="uil uil-calendar-alt"></i><span>14 Apr 2022</span></li>
                        <li className="post-comments"><Link href="#"><i className="uil uil-comment"></i>4</Link></li>
                        <li className="post-likes ms-auto"><Link href="#"><i className="uil uil-heart-alt"></i>5</Link></li>
                      </ul>
                      
                    </div>
                   
                  </div>
                  
                </article>
                
                <article className="item post col-md-6">
                  <div className="card">
                    <figure className="card-img-top overlay overlay-1 hover-scale"><Link href="#"> <img src="./assets/img/photos/b5.jpg" alt="" /></Link>
                      <figcaption>
                        <h5 className="from-top mb-0">Read More</h5>
                      </figcaption>
                    </figure>
                    <div className="card-body">
                      <div className="post-header">
                        <div className="post-category text-line">
                          <Link href="#" className="hover" rel="category">Workspace</Link>
                        </div>
                        
                        <h2 className="post-title h3 mt-1 mb-3"><Link className="link-dark" href="./blog-post.html">Nullam id dolor elit id nibh</Link></h2>
                      </div>
                     
                      <div className="post-content">
                        <p>Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor. Aenean lacinia bibendum nulla sed.</p>
                      </div>
                      
                    </div>
                    
                    <div className="card-footer">
                      <ul className="post-meta d-flex mb-0">
                        <li className="post-date"><i className="uil uil-calendar-alt"></i><span>29 Mar 2022</span></li>
                        <li className="post-comments"><Link href="#"><i className="uil uil-comment"></i>3</Link></li>
                        <li className="post-likes ms-auto"><Link href="#"><i className="uil uil-heart-alt"></i>3</Link></li>
                      </ul>
                     
                    </div>
                    
                  </div>
                 
                </article>
                
                <article className="item post col-md-6">
                  <div className="card">
                    <figure className="card-img-top overlay overlay-1 hover-scale"><Link href="#"> <img src="./assets/img/photos/b6.jpg" alt="" /></Link>
                      <figcaption>
                        <h5 className="from-top mb-0">Read More</h5>
                      </figcaption>
                    </figure>
                    <div className="card-body">
                      <div className="post-header">
                        <div className="post-category text-line">
                          <Link href="#" className="hover" rel="category">Meeting</Link>
                        </div>
                       
                        <h2 className="post-title h3 mt-1 mb-3"><Link className="link-dark" href="./blog-post.html">Ultricies fusce porta elit</Link></h2>
                      </div>
                      
                      <div className="post-content">
                        <p>Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor. Aenean lacinia bibendum nulla sed.</p>
                      </div>
                      
                    </div>
                   
                    
                      <ul className="post-meta d-flex mb-0">
                        <li className="post-date"><i className="uil uil-calendar-alt"></i><span>26 Feb 2022</span></li>
                        <li className="post-comments"><Link href="#"><i className="uil uil-comment"></i>6</Link></li>
                        <li className="post-likes ms-auto"><Link href="#"><i className="uil uil-heart-alt"></i>3</Link></li>
                      </ul>
                     
                    </div>
                    </article>
                   
                  </div>
                
                <article className="item post col-md-6">
                  <div className="card">
                    <figure className="card-img-top overlay overlay-1 hover-scale"><Link href="#"> <img src="./assets/img/photos/b7.jpg" alt="" /></Link>
                      <figcaption>
                        <h5 className="from-top mb-0">Read More</h5>
                      </figcaption>
                    </figure>
                    <div className="card-body">
                      <div className="post-header">
                        <div className="post-category text-line">
                          <Link href="#" className="hover" rel="category">Business Tips</Link>
                        </div>
                        
                        <h2 className="post-title h3 mt-1 mb-3"><Link className="link-dark" href="./blog-post.html">Morbi leo risus porta eget</Link></h2>
                      </div>
                      <div className="post-content">
                        <p>Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor. Aenean lacinia bibendum nulla sed.</p>
                      </div>
                      
                    </div>
                    
                    <div className="card-footer">
                      <ul className="post-meta d-flex mb-0">
                        <li className="post-date"><i className="uil uil-calendar-alt"></i><span>7 Jan 2022</span></li>
                        <li className="post-comments"><Link href="#"><i className="uil uil-comment"></i>2</Link></li>
                        <li className="post-likes ms-auto"><Link href="#"><i className="uil uil-heart-alt"></i>5</Link></li>
                      </ul>
                     
                    </div>
                    
                  </div>
                
                </article>
               
              </div>
             
            </div>
           
            <nav className="d-flex" aria-label="pagination">
              <ul className="pagination">
                <li className="page-item disabled">
                  <Link className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true"><i className="uil uil-arrow-left"></i></span>
                  </Link>
                </li>
                <li className="page-item active"><Link className="page-link" href="#">1</Link></li>
                <li className="page-item"><Link className="page-link" href="#">2</Link></li>
                <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                <li className="page-item">
                  <Link className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true"><i className="uil uil-arrow-right"></i></span>
                  </Link>
                </li>
              </ul>
             
            </nav>
           
          </div>
          
          <aside className="col-lg-4 sidebar mt-8 mt-lg-6">
            <div className="widget">
              <h4 className="widget-title mb-3">About Us</h4>
              <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum. Nulla vitae elit libero, Link pharetra augue. Donec id elit non mi porta gravida at eget metus.</p>
              <nav className="nav social">
                <Link href="https://m.facebook.com/RegalOutSource"><i className="uil uil-facebook-f"></i></Link>
                <Link href="https://instagram.com/regaloutsource?igshid=YmMyMTA2M2Y="><i className="uil uil-instagram"></i></Link>
                <Link href="https://plus.google.com/108033648564806572456"><i className="uli uil-google"></i></Link>
                <Link href="https://www.linkedin.com/company/regal-outsource-india/mycompany/"><i className="uli uil-linkedin"></i></Link> 
              </nav>
              
            </div>
           
            <div className="widget">
              <h4 className="widget-title mb-3">Popular Posts</h4>
              <ul className="image-list">
                <li>
                  <figure className="rounded"><Link href="./blog-post.html"><img src="./assets/img/photos/a1.jpg" alt="" /></Link></figure>
                  <div className="post-content">
                    <h6 className="mb-2"> <Link className="link-dark" href="./blog-post.html">Magna Mollis Ultricies</Link> </h6>
                    <ul className="post-meta">
                      <li className="post-date"><i className="uil uil-calendar-alt"></i><span>26 Mar 2022</span></li>
                      <li className="post-comments"><Link href="#"><i className="uil uil-comment"></i>3</Link></li>
                    </ul>
                   
                  </div>
                </li>
                <li>
                  <figure className="rounded"> <Link href="./blog-post.html"><img src="./assets/img/photos/a2.jpg" alt="" /></Link></figure>
                  <div className="post-content">
                    <h6 className="mb-2"> <Link className="link-dark" href="./blog-post.html">Ornare Nullam Risus</Link> </h6>
                    <ul className="post-meta">
                      <li className="post-date"><i className="uil uil-calendar-alt"></i><span>16 Feb 2022</span></li>
                      <li className="post-comments"><Link href="#"><i className="uil uil-comment"></i>6</Link></li>
                    </ul>
                   
                  </div>
                </li>
                <li>
                  <figure className="rounded"><Link href="./blog-post.html"><img src="./assets/img/photos/a3.jpg" alt="" /></Link></figure>
                  <div className="post-content">
                    <h6 className="mb-2"> <Link className="link-dark" href="./blog-post.html">Euismod Nullam Fusce</Link> </h6>
                    <ul className="post-meta">
                      <li className="post-date"><i className="uil uil-calendar-alt"></i><span>8 Jan 2022</span></li>
                      <li className="post-comments"><Link href="#"><i className="uil uil-comment"></i>5</Link></li>
                    </ul>
                    
                  </div>
                </li>
              </ul>
             
            </div>
           
            <div className="widget">
              <h4 className="widget-title mb-3">Categories</h4>
              <ul className="unordered-list bullet-primary text-reset">
                <li><Link href="#">Teamwork (21)</Link></li>
                <li><Link href="#">Ideas (19)</Link></li>
                <li><Link href="#">Workspace (16)</Link></li>
                <li><Link href="#">Coding (7)</Link></li>
                <li><Link href="#">Meeting (12)</Link></li>
                <li><Link href="#">Business Tips (14)</Link></li>
              </ul>
            </div>
            
            <div className="widget">
              <h4 className="widget-title mb-3">Tags</h4>
              <ul className="list-unstyled tag-list">
                <li><Link href="#" className="btn btn-soft-ash btn-sm rounded-pill">Still Life</Link></li>
                <li><Link href="#" className="btn btn-soft-ash btn-sm rounded-pill">Urban</Link></li>
                <li><Link href="#" className="btn btn-soft-ash btn-sm rounded-pill">Nature</Link></li>
                <li><Link href="#" className="btn btn-soft-ash btn-sm rounded-pill">Landscape</Link></li>
                <li><Link href="#" className="btn btn-soft-ash btn-sm rounded-pill">Macro</Link></li>
                <li><Link href="#" className="btn btn-soft-ash btn-sm rounded-pill">Fun</Link></li>
                <li><Link href="#" className="btn btn-soft-ash btn-sm rounded-pill">Workshop</Link></li>
                <li><Link href="#" className="btn btn-soft-ash btn-sm rounded-pill">Photography</Link></li>
              </ul>
            </div>
            
            <div className="widget">
              <h4 className="widget-title mb-3">Archive</h4>
              <ul className="unordered-list bullet-primary text-reset">
                <li><Link href="#">February 2019</Link></li>
                <li><Link href="#">January 2019</Link></li>
                <li><Link href="#">December 2018</Link></li>
                <li><Link href="#">November 2018</Link></li>
                <li><Link href="#">October 2018</Link></li>
              </ul>
            </div>
            
          </aside>
          
        </div>
        
      {/* </div> */}
     
    </section>
    </div>
  )
}


export default page;