import React from 'react';

const ServicesPage = () => {
  return (
    <div className="wrapper image-wrapper bg-image bg-overlay bg-overlay-300" data-image-src="./assets/img/photos/bg26.png">
      <div className="container pt-17 pb-19 pt-md-18 pb-md-17 text-center">
        <div className="row">
          <div className="col-lg-8 col-xl-7 col-xxl-6 mx-auto" data-cues="slideInDown" data-group="page-title">
            <h1 className="text-white text-6xl mb-4 px-5 lg:px-0">Our Services</h1>
            <p className="text-white text-xl leading-6 mb-7 mx-5 md:mx-13 lg:mx-10">
              We are a creative company that focuses on establishing{" "}
              <span className="underline">long-term relationships</span> with customers.
            </p>
          </div>
        </div>
      </div>

      <section className="wrapper bg-light angled upper-end">
        <div className="container pb-14 pb-md-16">
          <div className="row mb-8">
            <div className="col-12 mt-n20">
              <figure className="rounded mt-10">
                <img src="./assets/img/photos/about5.jpg" srcSet="./assets/img/photos/about5@2x.jpg 2x" alt="" />
              </figure>
              <div className="row">
                <div className="col-xl-10 mx-auto mt-25">
                  <div className="card image-wrapper text-white mt-n5 mt-lg-0 mt-lg-n50p mb-lg-n50p border-radius-lg-top">
                    <div className="card-body p-7 p-xl-10">
                      <h1>
                        <span className="underline">Services</span>
                      </h1>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {Array.from({ length: 12 }, (_, i) => (
                          <div key={i} className="col-6 md:col-4 lg:col-3">
                            <img
                              src={`./assets/img/${i + 2}.png`}
                              alt={`Service ${i + 2}`}
                              className="h-36 w-36 mx-auto"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container pb-14 pb-md-16">
        <div className="col-lg-6 mt-n20">
          <h1 className="text-3xl mb-3 mt-n25">What We Do?</h1>
          <p className="text-lg mb-8 pe-4 lg:pe-8">
            Regal Outsource delivers{" "}
            <span className="underline">personalized</span> services to facilitate
            start-up outsource vital data administration, content management, form
            processing, web designing and software development projects.
          </p>
        </div>
        <div className="col-lg-3 mt-n20 col-md-3 offset-md-8">
          <figure className="rounded">
            <img src="./assets/img/photos/g1.jpg" srcSet="./assets/img/photos/g1@2x.jpg 2x" alt="" />
          </figure>
        </div>
      </div>

      <div className="row add-top">
        <div className="col-span-12">
          <h2 className="text-3xl">Software Solutions</h2>
        </div>
        <div className="span12 WhatWeDo">
          <h5>Customized Software Development</h5>
          <p>
            Software development and programming are our core areas of expertise. We have an
            extensive cumulative experience of global exposure to various industries.
          </p>
          {/* Add more content here... */}
        </div>
      </div>

      <div id="wedo2" className="box">
        <div className="page-header topMargn">
          <h2 className="text-2xl">Website Solutions</h2>
          {/* Add website solutions content here... */}
        </div>
      </div>

      <div id="section3"></div>
      <div id="wedo3" className="box">
        <div className="page-header topMargn">
          <h2>Process Outsourcing</h2>
          {/* Add process outsourcing content here... */}
        </div>
      </div>

      <div className="row add-top" style={{ width: '96%', paddingLeft: '4%', paddingRight: '4%' }}>
        <div className="col-span-12">
          <h2 className="text-3xl mb-3">How We Do It?</h2>
          <p className="text-lg mb-8">
            At Regal Outsource, we use a workflow procedure for each project undertaken, to promote a transparent development process with the client. We also ensure that our processes are of the highest quality and available at a fair price.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 process-wrapper line">
            {Array.from({ length: 10 }, (_, i) => (
              <div key={i} className="col-span-2 md:col-span-1 lg:col-span-1">
                <span className="icon btn btn-circle btn-lg btn-soft-primary disabled mb-4">
                  <span className="number">{i + 1 < 10 ? `0${i + 1}` : i + 1}</span>
                </span>
                <h4 className="mb-1">Step {i + 1}</h4>
                <p>Step {i + 1} Description</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
