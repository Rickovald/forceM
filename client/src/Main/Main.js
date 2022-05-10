import s from "./main.module.sass";
import { wrapper } from "../presets/wrapper.module.sass";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import Banner from "./banners/Banner";

import concert from "../img/banners/kryaken.jpg";
import alb from "../img/banners/alb.png";

const Main = () => {
  const [slider, setSlider] = useState();
  const [slides, setSlides] = useState([]);

  const settingsSlider = {
    infinite: false,
    easing: "ease",
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    // beforeChange: (current, next)  => (setActiveIndicator(next))
  };

  const data = [
    {
      head: "играли концерт!",
      button: "смотреть!",
      img: `${concert}`,
      href: "",
    },
    {
      head: "наш альбом!",
      button: "слушать",
      img: `${alb}`,
      href: "",
    },
  ];
  useEffect(() => {
	data.map((item) => {
		slides.push(
		  <Banner
			header={item.head}
			button={item.button}
			img={item.img}
			href={item.href}
		  />
		);
	  });
  }, []);
  
  return (
    <div className={`${s.main} ${wrapper}`}>
      <div className={s.main__slider}>
        <Slider {...settingsSlider} ref={(slider) => setSlider(slider)}>
          {slides}
        </Slider>
      </div>
    </div>
  );
};

export default Main;
