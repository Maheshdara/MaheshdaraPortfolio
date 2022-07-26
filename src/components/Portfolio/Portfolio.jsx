import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.PNG";
import Ecommerce from "../../img/ecommerce.PNG";
import HOC from "../../img/hoc.PNG";
import MusicApp from "../../img/musicapp.PNG";
import G2B from "../../img/g2b.PNG"
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://shikshaeducationalblog.netlify.app/">
          <img src={Sidebar} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://uiresponsivedesign.netlify.app/">
          <img src={MusicApp} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://foodingredientss.netlify.app/">
          <img src={HOC} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://hotel-g2b.netlify.app/">
          <img src={G2B} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
