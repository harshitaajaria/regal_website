import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div> <div className="content-wrapper">
  
    
    <section className="wrapper image-wrapper bg-image bg-overlay bg-overlay-300" data-image-src="./assets/img/photos/bg26.png">
      <div className="container pt-17 pb-19 pt-md-18 pb-md-17 text-center">
        <div className="row">
          <div className="col-lg-8 col-xl-7 col-xxl-6 mx-auto" data-cues="slideInDown" data-group="page-title">
            <h1 className="display-1 text-white fs-60 mb-4 px-md-15 px-lg-0">Terms and Conditions</h1>
          </div>
          
        </div>
       
      </div>
      
    </section>
   
    <div className="container">
      <div className="row gx-0">
        <aside className="col-xl-3 sidebar sticky-sidebar mt-md-0 py-16 d-none d-xl-block">
          <div className="widget">
            <nav id="sidebar-nav">
              <ul className="list-unstyled text-reset">
                <li><Link className="nav-link scroll" href="#terms-conditions">1. Terms & Conditions</Link></li>
                <li><Link className="nav-link scroll" href="#Third-partys-website-links">2. Third party's website links:</Link></li>
                <li><Link className="nav-link scroll" href="#Accountability-exclution">3. Accountability exclution</Link></li>
                <li><Link className="nav-link scroll" href="#copyrights">4. Copyrights</Link></li>
                <li><Link className="nav-link scroll" href="#Monitoring-posted-contents">5. Monitoring posted contents</Link></li>
              </ul>
            </nav>
           
          </div>
        
        </aside>
        
        <div className="col-xl-8">
          <section id="terms-conditions" className="wrapper pt-16">
            <div className="card">
              <div className="card-body p-10">
                <h2 className="mb-3">1. Terms and Conditions</h2>
                <p>Please carefully read below terms before using this Website. Use, browse, access of this Website will be consider as your consent to all the terms of this agreement and this agreement constitutes the mutual agreement of you and Regal Outsource with respect to the use of this Website. If you do not agree, please do not use this Website. Or, please contact our administration department and we have professional persons to answer you.</p>
              </div>
             
            </div>
          
          </section>
          <section id="Third-partys-website-links" className="wrapper pt-16">
            <div className="card">
              <div className="card-body p-10">
                <h2 className="mb-3">2. Third party's website links</h2>
                <p>Please note that as Link convenience to visitors of our website, we sometimes provide links to various client websites, some of these linked sites are developed by Regal Outsource, furthermore these sites are under the control of client or third party and we are not at all responsible for their content. While access and use such website, you should first read and decide whether you agree with the website's instructions on its use. Since we do not check and is unable for us to inspect all neither the relevant third party websites nor we control or assume any liability for those websites or their content. Consequently, Regal Outsource (India) Private Limited does not acknowledge or make any representation on any information, software and other product service or material of those websites or any possible result of using those websites. Risks relating to your connection to such third party website shall be understood by yourself. If you suppose that any other website does not meet your requirement or you do not rely on the contents of any other website, please leave such website. In case of any argument with connection to your activity at any website, claims shall be made against the other party of the behavior or the service provider.</p>
             </div>
            </div>
           
          </section>
          <section id="Accountability-exclution" className="wrapper pt-16">
            <div className="card">
              <div className="card-body p-10">
                <h2 className="mb-3">3. Accountability exclution</h2>
                <p>Regal Outsource website and its contents thereof are only for the ease of your use and understanding of this Company. This Company does not assume any liability for any interruption or error in the operation of this Website or the contents of the web pages, irrespective of the reasons for such event or the Company's faults in such event. This Company reserves the right to modify any web page content at any time and may terminate or stop your right to use this Website without giving any notice and based on its own consideration. Regal Outsource makes no express or implicit warranty on this Website, including but not limited to the correctness, reliability or suitability of the contents, This Company will not assume any liability for any direct, indirect, incidental, special or material damage, profit loss or business interruption resulting from use or impossibility of using services of this Website, no matter this Company is notified of the possibility of such event or not.</p>
              </div>
             
            </div>
           
          </section>
          <section id="copyrights" className="wrapper pt-16">
            <div className="card">
              <div className="card-body p-10">
                <h2 className="mb-3">4. Copyrights</h2>
                <p>The names of other products or companies mentioned in our website may be any other's trademark or enterprise symbol. You are not entitled to use any trademark appearing on this Website unless you obtain the prior written consent of this Company or the holders of such rights. Copyrights are owned by Regal Outsource (India) Private Limited (copyright ©). We reserve all its rights.</p>
                <p>All the copyrights of content of this Website, including text, instructions, patterns, archives, page design, drawings, images and other arrangement shall be owned by Regal Outsource (India) Private Limited, Regal Outsource permits you to view and download the contents of this Website provided that they are used for your personal purpose only (Not for commercial use) with the written authorization. You shall not conduct any of the following actions on all or any content of this Website, including copy, storage, download, change, alter, connection, broadcast, public viewing, re-engineering, de-compilation or disassembly, except prior written consent from our Company.</p>
            </div>
           </div>
          </section>
          <section id="Monitoring-posted-contents" className="wrapper pt-16">
            <div className="card">
              <div className="card-body p-10">
                <h2 className="mb-3">5. Monitoring posted contents</h2>
                <p>Regal Outsource does not supervise, nor is it able to oversee the contents posted by the users of this Website. Nor will this Company be liable for such contents. This Company reserves the right to remove at its discretion any content posted by the Website users.</p>
              </div>
            
            </div>
            </section>
              
            </div>
        </div>
        
      </div>
     
    </div>
    
  </div>
  )
}

export default page