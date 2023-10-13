
import Image from 'next/image';

import edit from "/public/images/edit.svg";
import bg26 from "/public/images/bg26.png";
export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between">
    //   <section className="wrapper image-wrapper bg-image bg-overlay bg-overlay-300" style={{ backgroundImage: `url('public/images/bg26.png')` }}>
      
    //     <div className="container pt-17 pb-19 pt-md-18 pb-md-17 text-center">
    //       <div className="row">
    //         <div className="col-lg-8 col-xl-7 col-xxl-6 mx-auto" data-cues="slideInDown" data-group="page-title">
    //           <h1 className="display-1 text-white fs-60 mb-4 px-md-15 px-lg-0">Regal Outsource</h1>
    //           <p className="lead fs-24 text-white lh-sm mb-7 mx-md-13 mx-lg-10">We are a creative company that focuses on long-term relationships with customers.</p>
    //         </div>
    //       </div>
    //     </div>




    //     <div className="overflow-hidden">
    //       <div className="divider text-light mx-n2">
    //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60">
    //           <path fill="currentColor" d="M0,0V60H1440V0A5771,5771,0,0,1,0,0Z" />
    //         </svg>
    //       </div>
    //     </div>
    //   </section>
    //   <section className="wrapper bg-light">
    //     <div className="container pb-15 pb-md-17">
    //       <div className="row gx-md-5 gy-5 mt-n19 mb-14 mb-md-17 justify-content-center">
    //         <div className="col-md-6 col-xl-3">
    //           <div className="card shadow-lg">
    //             <div className="card-body">
    //               <Image src="/public/images/edit.svg" alt="Coding Aptitude" width={100} height={100} />
    //               <h4>Coding Aptitude</h4>
    //               <p>Regal Outsource is India-based software development center with a panel of highly skilled, professional and expert software developers, which stresses upon an efficient, time-bound, cost-effective and advanced integration software development that entails our clients to stay ahead of their competition.</p>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col-md-6 col-xl-3">
    //           <div className="card shadow-lg">
    //             <div className="card-body">
    //               <Image src="/public/images/lamp.svg" alt="Design Skills" width={100} height={100} />
    //               <h4>Design Skills</h4>
    //               <p>We are one of the leading web design and development companies, designing customized static and dynamic websites using the latest technologies e.g. AJAX, ASP.NET, PHP etc. Our websites are compatible on Desktops, Tablets, and Mobiles. We also offer expertise in Search Engine Optimization (SEO) tools.</p>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col-md-6 col-xl-3">
    //           <div className="card shadow-lg">
    //             <div className="card-body">
    //               <Image src="/public/images/delivery-box.svg" alt="Process Outsource Expertise" width={100} height={100} />
    //               <h4>Process Outsource Expertise</h4>
    //               <p>At Regal Outsource, we have experienced and skilled resources, efficient systems, and benchmarked delivery frameworks. We are amongst the leading BPO and KPO brands handling the complete gamut of healthcare services and back-office support that ensures our clients of quality, reliability, and accuracy.</p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="row">
    //         <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mx-auto text-center">
    //           <h2 className="fs-16 text-uppercase text-muted mb-3">Why Choose Regal Outsource?</h2>
    //           <h3 className="display-3 mb-10 px-xl-10 px-xxl-15">Here are a few <span className="underline-3 style-2 yellow">reasons</span> why our customers choose us</h3>
    //         </div>
    //       </div>
    //       <ul className="nav nav-tabs nav-tabs-bg nav-tabs-shadow-lg d-flex justify-content-between nav-justified flex-lg-row flex-column">
    //         <li className="nav-item">
    //           <a className="nav-link d-flex flex-row active" data-bs-toggle="tab" href="#tab2-1">
    //             <div><Image src="/publicimages/loyalty.svg" alt="Our Commitment" width={50} height={50} /></div>
    //             <div>
    //               <h4>Our Commitment</h4>
    //               <p>Tab 1 content goes here.</p>
    //             </div>
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link d-flex flex-row" data-bs-toggle="tab" href="#tab2-2">
    //             <div><Image src="/public/images/award-2.svg" alt="Top-Notch Support" width={50} height={50} /></div>
    //             <div>
    //               <h4>Top-Notch Support</h4>
    //               <p>Tab 2 content goes here.</p>
    //             </div>
    //           </a>
    //         </li>
    //       </ul>
    //       <div className="tab-content mt-6 mt-lg-8">
    //         <div className="tab-pane fade show active" id="tab2-1">
    //           <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
    //             <div className="col-lg-6">
    //               <figure className="rounded shadow-lg">
    //                 <Image src="/public/images/se5.jpg" alt="Our Commitment" width={600} height={400} />
    //               </figure>
    //             </div>
    //             <div className="col-lg-6">
    //               <h2 className="mb-3">Our Commitment</h2>
    //               <p>At Regal Outsource, our commitment to client satisfaction surpasses all standards of excellence and transparency.</p>
    //               <p>Our clients in the past have actively chosen us for the expertise and professionalism of our people and outsourcing experience. At Regal, we make all efforts to become reliable advisors to our clients.</p>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="tab-pane fade" id="tab2-2">
    //           <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
    //             <div className="col-lg-6 order-lg-2">
    //               <figure className="rounded shadow-lg">
    //                 <Image src="/public/images/se6.jpg" alt="Top-Notch Support" width={600} height={400} />
    //               </figure>
    //             </div>
    //             <div className="col-lg-6">
    //               <h2 className="mb-3">Top-Notch Support</h2>
    //               <p>Regal Outsource provides end-to-end solutions for any business by adopting the latest technology along with market trend by accepting rigorous challenging task in the Domain, Software design, Programming, Implementations and Post Installation Support.</p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    //   <section className="wrapper bg-gray">
    //     <div className="container py-15 py-md-17 pb-md-19">
    //       <div className="row align-items-center gy-8 mb-13">
    //         <div className="col-lg-7 text-center text-lg-start">
    //           <h2 className="fs-16 text-uppercase text-muted mb-3">Save Time and Money</h2>
    //           <h3 className="display-3 mb-0 pe-xl-10 pe-xxl-15">Save your time and money by choosing our <span className="underline-3 style-2 yellow">professional</span> team.</h3>
    //         </div>
    //         <div className="col-lg-5">
    //           <div className="row gy-6 text-center">
    //             <div className="col-md-6">
    //               <div className="progressbar semi-circle fuchsia" data-value="95"></div>
    //               <h4 className="mb-0">Customer Satisfaction</h4>
    //             </div>
    //             <div className="col-md-6">
    //               <div className="progressbar semi-circle orange" data-value="80"></div>
    //               <h4 className="mb-0">Increased Revenue</h4>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    //   <section className="wrapper bg-light">
    //     <div className="container py-16 py-md-18">
    //       <div className="card shadow-lg mt-n21 mt-md-n23">
    //         <div className="row gx-0">
    //           <div className="col-lg-6 image-wrapper bg-image bg-cover rounded-top rounded-lg-start">
    //             <Image src="/public/images/tm2.jpg" alt="Director's Message" layout="fill" objectFit="cover" />
    //           </div>
    //           <div className="col-lg-6">
    //             <div className="p-10 p-md-11 px-lg-13 py-lg-14">
    //               <div className="swiper-container dots-closer mb-6" data-margin="30" data-dots="true">
    //                 <div className="swiper">
    //                   <div className="swiper-wrapper">
    //                     <div className="swiper-slide text-center">
    //                       <h3>Director's Message</h3>
    //                       <blockquote className="border-0 fs-lg text-center">
    //                         <p>" We believe in quality outputs, meeting deadlines, and high customer satisfaction by implementing our policies and unmatched management style in a harmonious work environment. "</p>
    //                         <div className="blockquote-details justify-content-center text-center">
    //                           <div className="info ps-0">
    //                             <h5 className="mb-1">Sanjay Nagda</h5>
    //                             <p className="mb-0">Managing Director & CEO</p>
    //                           </div>
    //                         </div>
    //                       </blockquote>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="row mt-17">
    //         <div className="col-lg-10 col-xl-9 col-xxl-8 mx-auto text-center">
    //           <h2 className="fs-16 text-uppercase text-muted mb-3">Latest Projects</h2>
    //           <h3 className="display-3 mb-10">Check out some of our awesome projects with <span className="underline-3 style-2 yellow">creative</span> ideas and great design.</h3>
    //         </div>
    //       </div>
    //       <div className="swiper-container grid-view" data-margin="30" data-dots="true" data-items-xl="3" data-items-md="2" data-items-xs="1">
    //         <div className="swiper">
    //           <div className="swiper-wrapper">
    //             <div className="swiper-slide">
    //               <figure className="rounded mb-6">
    //                 <Image src="/public/images/Artico World.jpg" alt="Artico World" width={600} height={400} />
    //                 <a className="item-link" href="http://www.articoworld.com/" data-glightbox data-gallery="projects-group">
    //                   <i className="uil uil-focus-add"></i>
    //                 </a>
    //               </figure>
    //               <div className="project-details d-flex justify-content-center flex-column">
    //                 <div className="post-header">
    //                   <h2 className="post-title h3">
    //                     <a className="link-dark">Artico World</a>
    //                   </h2>
    //                   <div className="post-category text-ash">ARTICO WORLD is an online handicraft website.</div>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="swiper-slide">
    //               <figure className="rounded mb-6">
    //                 <Image src="/public/images/Elite Healthcare Alliance.jpg" alt="Elite Healthcare Alliance" width={600} height={400} />
    //                 <a className="item-link" href="http://eliteha.com/" data-glightbox data-gallery="projects-group">
    //                   <i className="uil uil-focus-add"></i>
    //                 </a>
    //               </figure>
    //               <div className="project-details d-flex justify-content-center flex-column">
    //                 <div className="post-header">
    //                   <h2 className="post-title h3">
    //                     <a className="link-dark">Elite Healthcare Alliance</a>
    //                   </h2>
    //                   <div className="post-category text-ash">ELITE HEALTHCARE ALLIANCE is an innovative healthcare recruiting and consulting firm that is bridging the gap between Job Seekers and health care facilities.</div>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="swiper-slide">
    //               <figure className="rounded mb-6">
    //                 <Image src="/public/images/Mewar Sahodaya School Complex.jpg" alt="Mewar Sahodaya School Complex" width={600} height={400} />
    //                 <a className="item-link" href="http://www.mewarsahodaya.org/" data-glightbox data-gallery="projects-group">
    //                   <i className="uil uil-focus-add"></i>
    //                 </a>
    //               </figure>
    //               <div className="project-details d-flex justify-content-center flex-column">
    //                 <div className="post-header">
    //                   <h2 className="post-title h3">
    //                     <a className="link-dark">Mewar Sahodaya School Complex</a>
    //                   </h2>
    //                   <div className="post-category text-ash">MEWAR SAHODAYA SCHOOL COMPLEX is the name of the voluntary group of Schools affiliated to the CBSE.</div>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="swiper-slide">
    //               <figure className="rounded mb-6">
    //                 <Image src="/public/images/Medical Healthcare Services.jpg" alt="Medical Healthcare Services" width={600} height={400} />
    //                 <a className="item-link" href="http://mdhlth.com/" data-glightbox data-gallery="projects-group">
    //                   <i className="uil uil-focus-add"></i>
    //                 </a>
    //               </figure>
    //               <div className="project-details d-flex justify-content-center flex-column">
    //                 <div className="post-header">
    //                   <h2 className="post-title h3">
    //                     <a className="link-dark">Medical Healthcare Services</a>
    //                   </h2>
    //                   <div className="post-category text-ash">Allows healthcare providers to save precious time and money.</div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </main>
    <h2>Hello Folk!</h2>
  );
}
