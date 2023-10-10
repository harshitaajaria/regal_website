
import Image from 'next/image';

const Page = () => {
  return (
    <div>
      <section className="wrapper image-wrapper bg-image bg-overlay bg-overlay-300">
        <div className="container pt-17 pb-19 pt-md-18 pb-md-17 text-center">
          <div className="row">
            <div className="col-lg-8 col-xl-7 col-xxl-6 mx-auto" data-cues="slideInDown" data-group="page-title">
              <h1 className="display-1 text-white fs-60 mb-4 px-md-15 px-lg-0">Portfolio</h1>
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

      <section className="section-frame overflow-hidden">
        <div className="wrapper bg-gray">
          <div className="container py-13 py-md-17 text-center">
            <div className="row">
              <div className="col-lg-10 col-xxl-8 mx-auto">
                <h1 className="display-1 mb-1">Check out some of our awesome projects with creative ideas.</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="intro-image portfolio_banner"></div>

      <div className="container">
        <div className="row-fluid add-top">
          <div className="span12">
            <div className="row add-top">
              <div className="span12">
                <div className="row add-top-large">
                  <div className="row-fluid">
                    <div className="span7 add-top-large" style={{ paddingLeft: '2%' }}>
                      <div className="span5 align-right">
                        <Image
                          src="/assets/img/Artico World.jpg"
                          alt="Artico World"
                          title="Artico World"
                          width={300}
                          height={200}
                        />
                      </div>
                      <h1>Artico World</h1>
                      <p>
                        ARTICO WORLD is an online handicraft website. It makes available very precious and
                        prestigious ornamental art pieces for your home and family members. Designed for cross-platform devices and cross-browser, responsive layout.
                        <br />
                        <a target="_blank" href="http://www.articoworld.com/">Visit Website</a>
                      </p>
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div className="row add-top-large">
                    <div className="row-fluid">
                      <div className="span5 align-center">
                        <Image
                          src="/assets/img/Elite Healthcare Alliance.jpg"
                          alt="Elite Healthcare Alliance"
                          title="Elite Healthcare Alliance"
                          width={300}
                          height={200}
                        />
                      </div>
                      <div className="span7 add-top-large">
                        <h1>Elite Healthcare Alliance</h1>
                        <p>
                          ELITE HEALTHCARE ALLIANCE is an innovative healthcare recruiting and consulting
                          firm that is bridging the gap between Job Seekers and health care facilities. This
                          job portal is developed using .Net technology. Its logo and reskinning
                          are done using XHTML and CSS2.
                          <br />
                          <a target="_blank" href="http://eliteha.com/">Visit Website</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div className="row add-top-large">
                    <div className="row-fluid">
                      <div className="span7 add-top-large" style={{ paddingLeft: '2%' }}>
                        <div className="span5 align-center">
                          <Image
                            src="/assets/img/Mewar Sahodaya School Complex.jpg"
                            alt="Mewar Sahodaya School Complex"
                            title="Mewar Sahodaya School Complex"
                            width={300}
                            height={200}
                          />
                        </div>
                        <h1>Mewar Sahodaya School Complex</h1>
                        <p>
                          MEWAR SAHODAYA SCHOOL COMPLEX is the name of the voluntary group of
                          schools affiliated with the CBSE. We have designed the website for cross-platform devices and cross-browser. CSS3 and
                          HTML5 are used to make it more beautiful and compatible with all modern browsers.
                          <br />
                          <a target="_blank" href="http://www.mewarsahodaya.org/">Visit Website</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div className="row add-top-large">
                    <div className="row-fluid">
                      <div className="span5 align-center">
                        <Image
                          src="/assets/img/Medical Healthcare Services.jpg"
                          alt="Medical Healthcare Services"
                          title="Medical Healthcare Services"
                          width={300}
                          height={200}
                        />
                      </div>
                      <div className="span7 add-top-large">
                        <h1>Medical Healthcare Services</h1>
                        <p>
                          <span id="Span1" className="adtext">MEDICAL SOFTWARE system</span> allows healthcare
                          providers to save precious time and money, enabling them to improve all the
                          processes related to information technology and data saving and retrieval.
                          <br />
                          <a target="_blank" href="http://mdhlth.com/">Visit Website</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
