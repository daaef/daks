"use client"
import Image from "next/image";

export default function Home() {
  return (
    <>

   {/* <!-- back to top start --> */}
   <div className="progress-wrap">
      <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
         <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
   </div>
   {/* <!-- back to top end --> */}

   {/* <!-- back to top end --> */}

   {/* <!-- header area start --> */}
   <header>
      <div className="bd-header__section bd-header__transparent">
         <div className="bd-header__main" id="header-sticky">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-2 col-md-6 col-6">
                     <div className="logo">
                        <a href="index.html">
                           <img src="png/logo.png" alt="logo" />
                        </a>
                     </div>
                  </div>
                  <div className="col-lg-10 col-md-6 col-6">
                     <div className="d-flex justify-content-end">
                        <div className="main-menu">
                           <nav id="mobile-menu">
                              <ul>
                                 <li className="has-dropdown">
                                    <a href="index-3.html">Home</a>
                                    <ul className="submenu">
                                       <li><a href="index.html">Home Style 1</a></li>
                                       <li><a href="index-2.html">Home Style 2</a></li>
                                       <li><a href="index-3.html">Home Style 3</a></li>
                                    </ul>
                                 </li>
                                 <li>
                                    <a href="about.html">About</a>
                                 </li>
                                 <li className="has-dropdown">
                                    <a href="portfolio.html">Projects</a>
                                    <ul className="submenu">
                                       <li><a href="portfolio.html">Projects V1</a></li>
                                       <li><a href="portfolio-2.html">Projects V2</a></li>
                                       <li><a href="portfolio-details.html">Projects Details V1</a></li>
                                       <li><a href="portfolio-details-2.html">Projects Details V2 </a></li>
                                       <li><a href="portfolio-details-3.html">Projects Details V3 </a></li>
                                       <li><a href="portfolio-details-4.html">Projects Details V4 </a></li>
                                       
                                    </ul>
                                 </li>
                                
                                 <li className="has-dropdown">
                                    <a href="services.html">Servics</a>
                                    <ul className="submenu">
                                       <li><a href="services.html">services</a></li>
                                       <li><a href="services-details.html">Services details</a></li>
                                    </ul>
                                 </li>
                                 <li className="has-dropdown">
                                    <a href="blog.html">Blog</a>
                                    <ul className="submenu">
                                       <li><a href="blog.html">Blog V1</a></li>
                                       <li><a href="blog-2.html">Blog V2</a></li>
                                       <li><a href="blog-3.html">Blog V3</a></li>
                                       <li><a href="blog-4.html">Blog V4</a></li>
                                       <li><a href="blog-details.html">Blog Details</a></li>
                                      
                                    </ul>
                                 </li>
                                 <li>
                                    <a href="contact.html">Contact</a>
                                 </li>
                              </ul>
                           </nav>
                        </div>
                        <div className="bd-header__main-right d-flex justify-content-end align-items-center pl-30">

                           <div className="bd-header__search d-none d-md-block p-relative">
                              <div className="bd-header__search-wrapper">
                                 <button className="bd-header__search-btn"><i className="fal fa-search"></i></button>
                                 <button className="bd-header__search-btn-close"><i className="fal fa-times"></i></button>
                              </div>
                              <div className="bd-header__search-form">
                                 <form>
                                    <input type="text" placeholder="Search Here" />
                                    <button><i className="fal fa-search"></i></button>
                                 </form>
                              </div>
                           </div>
                           <div className="bd-header__hamburger ml-50">
                              <button type="button" className="hamburger-btn offcanvas-open-btn">
                                 <span></span>
                                 <span></span>
                                 <span></span>
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </header>
   {/* <!-- header area end --> */}

   {/* <!-- offcanvas area start --> */}
   <div className="offcanvas__area">
      <div className="offcanvas__wrapper">
         <div className="offcanvas__content">
            <div className="offcanvas__top mb-40 d-flex justify-content-between align-items-center">
               <div className="offcanvas__logo logo">
                  <a href="index.html">
                     <img src="png/logo.png" alt="logo" />
                  </a>
               </div>
               <div className="offcanvas__close">
                  <button className="offcanvas__close-btn offcanvas-close-btn">
                     <i className="fal fa-times"></i>
                  </button>
               </div>
            </div>
            <div className="offcanvas__search mb-25">
               <form action="#">
                  <input type="text" placeholder="What are you searching for?" />
                  <button type="submit"><i className="far fa-search"></i></button>
               </form>
            </div>
            <div className="mobile-menu fix mb-40"></div>

            <div className="offcanvas__map d-none d-lg-block mb-15">
               <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29176.030811137334!2d90.3883827!3d23.924917699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1605272373598!5m2!1sen!2sbd"></iframe>
            </div>

            <div className="offcanvas__contact mt-30 mb-20">
               <h4>Contact Info</h4>
               <ul>
                  <li className="d-flex align-items-center">
                     <div className="offcanvas__contact-icon mr-15">
                        <i className="fal fa-map-marker-alt"></i>
                     </div>
                     <div className="offcanvas__contact-text">
                        <a target="_blank"
                           href="https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873">12/A,
                           Mirnada City Tower, NYC</a>
                     </div>
                  </li>
                  <li className="d-flex align-items-center">
                     <div className="offcanvas__contact-icon mr-15">
                        <i className="far fa-phone"></i>
                     </div>
                     <div className="offcanvas__contact-text">
                        <a href="mailto:support@gmail.com">088889797697</a>
                     </div>
                  </li>
                  <li className="d-flex align-items-center">
                     <div className="offcanvas__contact-icon mr-15">
                        <i className="fal fa-envelope"></i>
                     </div>
                     <div className="offcanvas__contact-text">
                        <a href="tel:+012-345-6789">support@mail.com</a>
                     </div>
                  </li>
               </ul>
            </div>
            <div className="offcanvas__social">
               <ul>
                  <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                  <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
               </ul>
            </div>
         </div>
      </div>
   </div>
   <div className="body-overlay"></div>
   {/* <!-- offcanvas area end --> */}

   <main>

      {/* <!-- slider area start --> */}
      <div className="bd-slider__section">
         <div className="bd-slider__active bd-slider__wrapper swiper-container">
            <div className="swiper-wrapper">
               <div className="swiper-slide bd-slider__item bd-slider__height include-bg d-flex align-items-center"
                  data-background="jpg/slider-6.jpg">
                  <div className="container">
                     <div className="row justify-content-center">
                        <div className="col-md-8 text-center">
                           <div className="bd-slider__content">
                              <span className="bd-slider__subtitle" data-animation="fadeInUp" data-delay=".3s">We are
                                 creative inc.</span>
                              <h3 className="bd-slider__title" data-animation="fadeInUp" data-delay=".5s">Great
                                 Creative Agency</h3>
                              <div className="bd-slider__btn" data-animation="fadeInUp" data-delay=".9s">
                                 <a href="about.html" className="bd-btn">Discover <span><i
                                          className="fa-regular fa-angle-right"></i></span></a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="swiper-slide bd-slider__item bd-slider__height include-bg d-flex align-items-center"
                  data-background="jpg/slider-7.jpg">
                  <div className="container">
                     <div className="row  justify-content-center">
                        <div className="col-md-8">
                           <div className="bd-slider__content text-center">
                              <span className="bd-slider__subtitle" data-animation="fadeInUp" data-delay=".3s">We are
                                 creative inc.</span>
                              <h3 className="bd-slider__title" data-animation="fadeInUp" data-delay=".5s">Clean Simple <br />
                                 &
                                 Minimal</h3>
                              <div className="bd-slider__btn" data-animation="fadeInUp" data-delay=".9s">
                                 <a href="about.html" className="bd-btn">Read More <span><i
                                          className="fa-regular fa-angle-right"></i></span></a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- slider area end --> */}

      {/* <!-- services area start --> */}
      <div className="bd-services__area  pt-120 pb-90">
         <div className="container">
            <div className="row">
               <div className="col-lg-4">
                  <div className="bd-services__item mb-30 wow fadeInUp">
                     <div className="bd-services__icon text-center">
                        <i className="fa-thin fa-anchor"></i>
                     </div>
                     <div className="bd-services__content ">
                        <h3 className="bd-services__title"><a href="services-details.html">Creative Concept </a></h3>
                        <p>Lorem ipsum dolor sit amet conse cotur adip isicing elit sed do eiusmod tempor incididunt
                           labore arale jane kannar rong</p>

                        <div className="bd-services__item-btn">
                           <a href="services-details.html" className="link-btn-2">
                              Read More
                              <i className="fas fa-angle-right"></i>
                              <i className="fas fa-angle-right"></i>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4">
                  <div className="bd-services__item mb-30  wow fadeInUp" data-wow-delay='.4s'>
                     <div className="bd-services__icon text-center">
                        <i className="fa-thin fa-image"></i>
                     </div>
                     <div className="bd-services__content">
                        <h3 className="bd-services__title"><a href="services-details.html">No Coding Required</a></h3>
                        <p>Lorem ipsum dolor sit amet conse cotur adip isicing elit sed do eiusmod tempor incididunt
                           labore arale jane kannar rong</p>

                        <div className="bd-services__item-btn">
                           <a href="services-details.html" className="link-btn-2">
                              Read More
                              <i className="fas fa-angle-right"></i>
                              <i className="fas fa-angle-right"></i>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4">
                  <div className="bd-services__item mb-30  wow fadeInUp" data-wow-delay='.5s'>
                     <div className="bd-services__icon text-center">
                        <i className="fa-thin fa-rocket-launch"></i>
                     </div>
                     <div className="bd-services__content">
                        <h3 className="bd-services__title"><a href="services-details.html">Right Solution</a></h3>
                        <p>Lorem ipsum dolor sit amet conse cotur adip isicing elit sed do eiusmod tempor incididunt
                           labore arale jane kannar rong</p>

                        <div className="bd-services__item-btn">
                           <a href="services-details.html" className="link-btn-2">
                              Read More
                              <i className="fas fa-angle-right"></i>
                              <i className="fas fa-angle-right"></i>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- services area end --> */}

      {/* <!-- about us section start  --> */}
      <div className="bd-about-2__section pt-120 pb-90 theme-bg ">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-6 wow fadeInUp">
                  <div className="row">
                     <div className="col-lg-6 col-md-6">
                        <div className="bd-about-2__img w-img mb-30">
                           <img src="jpg/about-2.jpg" alt="" />
                        </div>
                     </div>
                     <div className="col-lg-6 col-md-6">
                        <div className="bd-about-2__img w-img mb-30">
                           <img src="jpg/about-3.jpg" alt="" />
                        </div>
                        <div className="bd-about-2__img w-img mb-30">
                           <img src="jpg/about-4.jpg" alt="" />
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6 wow fadeInUp">
                  <div className="bd-about-2__text ml-70 mb-30">
                     <div className="bd-section__title-wrapper">
                        <span className="bd-section__subtitle bd-section__subtitle-lg mb-10">Creative in Mind</span>
                        <h3 className="bd-section__title bd-section__title-lg mb-25">Our Creativity has <br /> no limit</h3>
                        <p>Lorem ipsum dolor sit amet conse cotur adip isicing elit sed do eiu smod tempor incididunt
                           labore arale jane kannar </p>
                        <p className="mb-25">rong Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                           exercitation </p>
                        <div className="bd-section__btn-wrapper">
                           <a href="about.html" className="bd-btn">Read More <span><i
                                    className="fa-regular fa-angle-right"></i></span></a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- about us section end   --> */}


      {/* <!-- project start  --> */}
      <div className="bd-project-3__section pt-120 pb-90">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="bd-section__title-wrapper text-center mb-90 wow fadeInUp">
                     <h3 className="bd-section__title bd-title-border mb-25">Our Projects</h3>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius <br/> mod tempor incididunt
                        ut labore et dolore magna</p>
                  </div>
               </div>
            </div>
            <div className="row align-items-center">
               <div className="col-lg-6">
                  <div className="bd-project-3__content mr-60 wow fadeInUp">
                     <div className="bd-section__title-wrapper mb-60">
                        <h3 className="bd-section__title bd-section__title-lg mb-25">Branding for OmY Media Tech</h3>
                        <p className="mb-25">Lorem ipsum dolor sit amet conse cotur adip isicing elit sed do eiu smod tempor
                           incididunt labore arale jane kannar Lorem ipsum dolor sit amet, consectetur adipisicing elit
                           sed. </p>
                        <div className="bd-section__btn-wrapper">
                           <a href="about.html" className="link-btn-2">
                              Read More
                              <i className="fas fa-angle-right"></i>
                              <i className="fas fa-angle-right"></i>
                           </a>
                        </div>
                     </div>
                     <div className="bd-project-3__navigation d-flex wow fadeInUp">
                        <div className="project3-slider-prev"><span><i className="fa-thin fa-angle-left"></i></span></div>
                        <div className="project3-slider-next"><span><i className="fa-thin fa-angle-right"></i></span></div>
                     </div>

                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="swiper-container bd-project-3__active wow fadeInUp">
                     <div className="swiper-wrapper mb-25">
                        <div className="swiper-slide">
                           <div className="bd-porject-3__item w-img">
                              <img src="jpg/pt-slider-1.jpg" alt="" />
                           </div>
                        </div>
                        <div className="swiper-slide">
                           <div className="bd-porject-3__item w-img">
                              <img src="jpg/pt-slider-2.jpg" alt="" />
                           </div>
                        </div>
                        <div className="swiper-slide">
                           <div className="bd-porject-3__item w-img">
                              <img src="jpg/pt-slider-3.jpg" alt="" />
                           </div>
                        </div>
                        <div className="swiper-slide">
                           <div className="bd-porject-3__item w-img">
                              <img src="jpg/pt-slider-4.jpg" alt="" />
                           </div>
                        </div>
                        <div className="swiper-slide">
                           <div className="bd-porject-3__item w-img">
                              <img src="jpg/pt-slider-5.jpg" alt="" />
                           </div>
                        </div>
                     </div>
                     <div className="bd-project-3__pagination "></div>
                  </div>
               </div>
            </div>

         </div>
      </div>
      {/* <!-- project end  --> */}

      {/* <!-- cta area start  --> */}
      <div className="bd-cta__section primary-bg pt-60 pb-30 wow fadeInUp">
         <div className="container">
            <div className="row">
               <div className="col-lg-8">
                  <div className="bd-cta__info mb-30">
                     <h3 className="bd-cta__title text-white">Lets start a project</h3>
                     <span>It will be fun. Lets gather aweosme experience </span>
                  </div>
               </div>
               <div className="col-lg-4">
                  <div className="bd-section__btn-wrapper text-lg-end">
                     <a href="contact.html" className="bd-border-btn">
                        Contact us
                        <i className="fas fa-angle-right"></i>
                        <i className="fas fa-angle-right"></i>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- cta area end  --> */}

      {/* <!-- team area start  --> */}
      <div className="bd-team-3__section pt-120 pb-120">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="bd-section__title-wrapper text-center mb-90 wow fadeInUp">
                     <h3 className="bd-section__title bd-title-border mb-25">Team Members</h3>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius <br /> mod tempor incididunt
                        ut labore et dolore magna</p>
                  </div>
               </div>
            </div>
            <div className="swiper-container bd-team-3__active wow fadeInUp">
               <div className="swiper-wrapper">
                  <div className="swiper-slide">
                     <div className="bd-team-3__member text-center mb-30">
                        <div className="bd-team-3__img p-relative mb-30 fix w-img">
                           <img src="jpg/team-1.jpg" alt="" />
                           <div className="bd-team-3__social">
                              <span><a href="#"><i className="fab fa-facebook-f"></i></a></span>
                              <span><a href="#"><i className="fab fa-twitter"></i></a></span>
                              <span><a href="#"><i className="fab fa-linkedin"></i></a></span>
                              <span><a href="#"><i className="fab fa-youtube"></i></a></span>
                           </div>
                        </div>
                        <div className="bd-team_3__info">
                           <h3 className="bd-team-3__name mb-5"><a href="#">Mike Harnandez</a></h3>
                           <span>Founder & CEO</span>
                        </div>
                     </div>
                  </div>
                  <div className="swiper-slide">
                     <div className="bd-team-3__member text-center mb-30">
                        <div className="bd-team-3__img p-relative mb-30 fix w-img">
                           <img src="jpg/team-2.jpg" alt="" />
                           <div className="bd-team-3__social">
                              <span><a href="#"><i className="fab fa-facebook-f"></i></a></span>
                              <span><a href="#"><i className="fab fa-twitter"></i></a></span>
                              <span><a href="#"><i className="fab fa-linkedin"></i></a></span>
                              <span><a href="#"><i className="fab fa-youtube"></i></a></span>
                           </div>
                        </div>
                        <div className="bd-team_3__info">
                           <h3 className="bd-team-3__name mb-5"><a href="#">Mike Harnandez</a></h3>
                           <span>Founder & CEO</span>
                        </div>
                     </div>
                  </div>
                  <div className="swiper-slide">
                     <div className="bd-team-3__member text-center mb-30">
                        <div className="bd-team-3__img p-relative mb-30 fix w-img">
                           <img src="jpg/team-3.jpg" alt="" />
                           <div className="bd-team-3__social">
                              <span><a href="#"><i className="fab fa-facebook-f"></i></a></span>
                              <span><a href="#"><i className="fab fa-twitter"></i></a></span>
                              <span><a href="#"><i className="fab fa-linkedin"></i></a></span>
                              <span><a href="#"><i className="fab fa-youtube"></i></a></span>
                           </div>
                        </div>
                        <div className="bd-team_3__info">
                           <h3 className="bd-team-3__name mb-5"><a href="#">Mike Harnandez</a></h3>
                           <span>Founder & CEO</span>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="bd-team-3__pagination text-center "></div>
            </div>
         </div>
      </div>

      {/* <!-- team area end  --> */}




      {/* <!-- bd testimonial start  --> */}
      <div className="bd-testimonial-3__area theme-bg pt-120">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="bd-section__title-wrapper text-center mb-90 wow fadeInUp">
                     <h3 className="bd-section__title bd-title-border mb-25">Testimonials</h3>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius <br /> mod tempor incididunt
                        ut labore et dolore magna</p>
                  </div>
               </div>
            </div>
            <div className="row align-items-center">
               <div className="col-lg-6 ">
                  <div className="bd-testimonial-3__img w-img">
                     <img src="png/tesimonail-man.png" alt="" />
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="bd-testimonial-3__info ml-40 pt-80 pb-80">
                     <h3 className="bd-testimonial-3__title">They are awesome</h3>
                     <div className="swiper-container bd-testimonial-3__active">
                        <div className="swiper-wrapper">
                           <div className="swiper-slide">
                              <div className="bd-testimonial-3__review mb-30 wow fadeInUp">
                                 <p className="mb-25">Lorem ipsum dolorLorem ipsum dolor sit amet, consectetur adipisicing
                                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim</p>
                                 <h3 className="bd-testimonial-3__name">Juwel Khan</h3>
                                 <span>Web Designer</span>
                              </div>
                           </div>
                           <div className="swiper-slide">
                              <div className="bd-testimonial-3__review mb-30 wow fadeInUp">
                                 <p className="mb-25">Lorem ipsum dolorLorem ipsum dolor sit amet, consectetur adipisicing
                                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim</p>
                                 <h3 className="bd-testimonial-3__name">Samrat Islam</h3>
                                 <span>Web Developer</span>
                              </div>
                           </div>
                           <div className="swiper-slide">
                              <div className="bd-testimonial-3__review mb-30 wow fadeInUp">
                                 <p className="mb-25">Lorem ipsum dolorLorem ipsum dolor sit amet, consectetur adipisicing
                                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim</p>
                                 <h3 className="bd-testimonial-3__name">Farhana Khan</h3>
                                 <span>Web Designer</span>
                              </div>
                           </div>
                        </div>
                        <div className="tp-testimonial-3__navigation d-flex">
                           <div className="testimonial3-slider-prev"><span><i className="fa-thin fa-angle-left"></i></span>
                           </div>
                           <div className="testimonial3-slider-next"><span><i className="fa-thin fa-angle-right"></i></span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- bd testimonial end  --> */}


      {/* <!-- blog start --> */}
      <div className="bd-blog__section pt-120 pb-90">
         <div className="container">
            <div className="row">
               <div className="col-lg-4">
                  <div className="bd-blog-3__item mb-30 wow fadeInLeft">
                     <div className="bd-blog-3__thumb w-img ">
                        <img src="jpg/blog-1.jpg" alt="" />
                     </div>
                     <div className="bd-blog-3__content">
                        <h3 className="bd-blog-3__title mb-20"><a href="blog-details.html">When the music over the world</a></h3>
                        <p className="mb-25">Lorem ipsum dolorLorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consecte tur adipisicing elit, sed do eiusm</p>

                        <div className="bd-blog-3__meta d-flex justify-content-between">
                           <div className="read-more-btn-wrapper">
                              <a href="blog-details.html" className="link-btn-2">
                                 Read More
                                 <i className="fas fa-angle-right"></i>
                                 <i className="fas fa-angle-right"></i>
                              </a>
                           </div>
                           <div className="tp-blog-3__date">
                              <span>Aug 19, 2017</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4">
                  <div className="bd-blog-3__item mb-30 wow fadeInLeft">
                     <div className="bd-blog-3__thumb w-img">
                        <img src="jpg/blog-2.jpg" alt="" />
                     </div>
                     <div className="bd-blog-3__content">
                         <h3 className="bd-blog-3__title mb-20"><a href="blog-details.html">Latest Design Trend 2022</a></h3>
                        <p className="mb-25">Lorem ipsum dolorLorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consecte tur adipisicing elit, sed do eiusm</p>

                        <div className="bd-blog-3__meta d-flex justify-content-between">
                           <div className="read-more-btn-wrapper">
                              <a href="#" className="link-btn-2">
                                 Read More
                                 <i className="fas fa-angle-right"></i>
                                 <i className="fas fa-angle-right"></i>
                              </a>
                           </div>
                           <div className="tp-blog-3__date">
                              <span>Aug 14, 2017</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4">
                  <div className="bd-blog-3__item mb-30 wow fadeInRight">
                     <div className="bd-blog-3__thumb w-img">
                        <img src="jpg/blog-3.jpg" alt="" />
                     </div>
                     <div className="bd-blog-3__content">
                         <h3 className="bd-blog-3__title mb-20"><a href="blog-details.html">Ai will change the world</a></h3>
                        <p className="mb-25">Lorem ipsum dolorLorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consecte tur adipisicing elit, sed do eiusm</p>

                        <div className="bd-blog-3__meta d-flex justify-content-between">
                           <div className="read-more-btn-wrapper">
                              <a href="#" className="link-btn-2">
                                 Read More
                                 <i className="fas fa-angle-right"></i>
                                 <i className="fas fa-angle-right"></i>
                              </a>
                           </div>
                           <div className="tp-blog-3__date">
                              <span>Aug 29, 2017</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-12">
                  <div className="bd-section__btn-wrapper text-center mt-30 wow fadeInUp">
                     <a href="blog-3.html" className="link-btn-3">
                        View All
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- blog end  --> */}
   </main>

   {/* <!-- footer area start --> */}
   <footer>
      <div className="bd-footer__section theme-bg-2 pt-120">
         <div className="container">
            <div className="bd-footer__main pb-50">
               <div className="row">
                  <div className="col-lg-4">
                     <div className="bd-footer-widget footer-col-1">
                        <div className="bd-footer-widget__title">
                           <a href="index.html">
                              <img src="png/logo.png" alt="" />
                           </a>
                        </div>
                        <div className="bd-footer-widget__content">
                           <p>
                              Lorem ipsum dolor Lorem ipsum dolor sit tur adipisicing elit, sed do eiusmod tempor iut
                              labore et dolore magna aliqua.
                           </p>
                           <div className="bd-footer-widget__form">
                              <form>
                                 <input type="email" placeholder="Your email here" />
                                 <button>Subscribe</button>
                              </form>
                           </div>
                           <div className="bd-footer-widget__social">
                              <span><a href="#"><i className="fab fa-facebook-f"></i></a></span>
                              <span><a href="#"><i className="fab fa-twitter"></i></a></span>
                              <span><a href="#"><i className="fab fa-youtube"></i></a></span>
                              <span><a href="#"><i className="fab fa-linkedin"></i></a></span>
                           </div>

                        </div>

                     </div>

                  </div>
                  <div className="col-lg-4">
                     <div className="bd-footer-widget footer-col-2">
                        <h3 className="bd-footer-widget__title">
                           Quick Links
                        </h3>
                        <div className="bd-footer-widget__content">
                           <div className="bd-footer-widget__menu">
                              <ul>
                                 <li><a href="#">About us</a></li>
                                 <li><a href="#">Service</a></li>
                                 <li><a href="#">Customer Care</a></li>
                                 <li><a href="#">Pricing Plans</a></li>
                                 <li><a href="#">Team Members</a></li>
                                 <li><a href="#">Career</a></li>
                                 <li><a href="#">Advertisements</a></li>
                                 <li><a href="#">Return Policy</a></li>
                                 <li><a href="#">Affiliation</a></li>
                                 <li><a href="#">Terms of Use</a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4">
                     <div className="bd-footer-widget footer-col-3">
                        <h3 className="bd-footer-widget__title">
                           Recent Posts
                        </h3>
                        <div className="bd-footer-widget__content">
                           <div className="bd-footer-widget__blog d-flex align-items-center mb-30">
                              <div className="bd-footer-widget__blog-thum mr-30">
                                 <img src="jpg/footer-blog-1.jpg" alt="thub" />
                              </div>
                              <div className="bd-footer-widget__blog-content">
                                 <h3 className="bd-footer-widget__blog-title"><a href="blog-details.html"> Lorem ipsum dolor sit amet
                                       conse</a></h3>
                                 <span>Aug 28, 2017</span>
                              </div>
                           </div>
                           <div className="bd-footer-widget__blog d-flex align-items-center mb-30">
                              <div className="bd-footer-widget__blog-thum  mr-30">
                                 <img src="jpg/footer-blog-2.jpg" alt="thub" />
                              </div>
                              <div className="bd-footer-widget__blog-content">
                                 <h3 className="bd-footer-widget__blog-title"><a href="blog-details.html"> onod inova binai je tumi ama
                                       rsathe emon</a></h3>
                                 <span>Aug 28, 2017</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="bd-footer__copyright bd-border-top pt-40 pb-40">
               <span>All rights reserved © 2022 <a href="index.html">eThemeStudio</a> </span>
            </div>
         </div>
      </div>
   </footer>
   {/* <!-- footer area end --> */}
    </>
  );
}
