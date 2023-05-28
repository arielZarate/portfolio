import React from "react";

function Testimonials() {
  return (
    <>
      {/* ======= Testimonials Section ======= */}
      <section id="testimonials" class="testimonials section-bg">
        <div class="container">
          <div class="section-title">
            <h2>Testimonials</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div
            class="testimonials-slider swiper"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="testimonial-item" data-aos="fade-up">
                  <p>
                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                    Proin iaculis purus consequat sem cure digni ssim donec
                    porttitora entum suscipit rhoncus. Accusantium quam,
                    ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                    risus at semper.
                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img
                    src="assets/img/testimonials/testimonials-1.jpg"
                    class="testimonial-img"
                    alt=""
                  />
                  <h3>Saul Goodman</h3>
                  <h4>Ceo &amp; Founder</h4>
                </div>
              </div>

              <div class="swiper-slide">
                <div
                  class="testimonial-item"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <p>
                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                    Export tempor illum tamen malis malis eram quae irure esse
                    labore quem cillum quid cillum eram malis quorum velit fore
                    eram velit sunt aliqua noster fugiat irure amet legam anim
                    culpa.
                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img
                    src="assets/img/testimonials/testimonials-2.jpg"
                    class="testimonial-img"
                    alt=""
                  />
                  <h3>Sara Wilsson</h3>
                  <h4>Designer</h4>
                </div>
              </div>

              <div class="swiper-slide">
                <div
                  class="testimonial-item"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <p>
                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                    Enim nisi quem export duis labore cillum quae magna enim
                    sint quorum nulla quem veniam duis minim tempor labore quem
                    eram duis noster aute amet eram fore quis sint minim.
                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img
                    src="assets/img/testimonials/testimonials-3.jpg"
                    class="testimonial-img"
                    alt=""
                  />
                  <h3>Jena Karlis</h3>
                  <h4>Store Owner</h4>
                </div>
              </div>

              <div class="swiper-slide">
                <div
                  class="testimonial-item"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <p>
                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                    multos export minim fugiat minim velit minim dolor enim duis
                    veniam ipsum anim magna sunt elit fore quem dolore labore
                    illum veniam.
                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img
                    src="assets/img/testimonials/testimonials-4.jpg"
                    class="testimonial-img"
                    alt=""
                  />
                  <h3>Matt Brandon</h3>
                  <h4>Freelancer</h4>
                </div>
              </div>

              <div class="swiper-slide">
                <div
                  class="testimonial-item"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <p>
                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                    Quis quorum aliqua sint quem legam fore sunt eram irure
                    aliqua veniam tempor noster veniam enim culpa labore duis
                    sunt culpa nulla illum cillum fugiat legam esse veniam culpa
                    fore nisi cillum quid.
                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img
                    src="assets/img/testimonials/testimonials-5.jpg"
                    class="testimonial-img"
                    alt=""
                  />
                  <h3>John Larson</h3>
                  <h4>Entrepreneur</h4>
                </div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </section>
      {/*  End Testimonials Section */}
    </>
  );
}

export default Testimonials;

/* 


.testimonials .testimonials-carousel, .testimonials .testimonials-slider {
  overflow: hidden;
}
.testimonials .testimonial-item {
  box-sizing: content-box;
  text-align: center;
  min-height: 320px;
}
.testimonials .testimonial-item .testimonial-img {
  width: 90px;
  border-radius: 50%;
  margin: 0 auto;
}
.testimonials .testimonial-item h3 {
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0 5px 0;
  color: #111;
}
.testimonials .testimonial-item h4 {
  font-size: 14px;
  color: #999;
  margin: 0;
}
.testimonials .testimonial-item .quote-icon-left, .testimonials .testimonial-item .quote-icon-right {
  color: #c3e8fa;
  font-size: 26px;
}
.testimonials .testimonial-item .quote-icon-left {
  display: inline-block;
  left: -5px;
  position: relative;
}
.testimonials .testimonial-item .quote-icon-right {
  display: inline-block;
  right: -5px;
  position: relative;
  top: 10px;
}
.testimonials .testimonial-item p {
  font-style: italic;
  margin: 0 15px 15px 15px;
  padding: 20px;
  background: #fff;
  position: relative;
  margin-bottom: 35px;
  border-radius: 6px;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
}
.testimonials .testimonial-item p::after {
  content: "";
  width: 0;
  height: 0;
  border-top: 20px solid #fff;
  border-right: 20px solid transparent;
  border-left: 20px solid transparent;
  position: absolute;
  bottom: -20px;
  left: calc(50% - 20px);
}
.testimonials .swiper-pagination {
  margin-top: 20px;
  position: relative;
}
.testimonials .swiper-pagination .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  background-color: #fff;
  opacity: 1;
  border: 1px solid #149ddd;
}
.testimonials .swiper-pagination .swiper-pagination-bullet-active {
  background-color: #149ddd;
}







*/
