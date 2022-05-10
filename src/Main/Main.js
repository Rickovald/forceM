import s from "./main.module.sass";
import { wrapper } from "../presets/wrapper.module.sass";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

const Main = () => {
  const [slider, setSlider] = useState();

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
  const slides = [
	<div className={s.main__slide}>хуй</div>,
	<div className={s.main__slide}>пизда</div>
  ]

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
