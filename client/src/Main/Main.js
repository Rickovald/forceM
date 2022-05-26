import s from "./main.module.sass";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";

import Banner from "./banners/Banner";
import BannersStore from "../stores/BannersStore";

import right from "../img/icons/right.svg";
import left from "../img/icons/left.svg";

const Main = observer(() => {
  const [slider, setSlider] = useState();
  const [slides, setSlides] = useState([]);
  const [activeIndicator, setActiveIndicator] = useState(0);

  const data = BannersStore.getBanners().data;

  const settingsSlider = {
    infinite: false,
    easing: "ease",
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    beforeChange: (current, next) => setActiveIndicator(next),
    // beforeChange: (current, next)  => (setActiveIndicator(next))
  };

  useEffect(() => {
    if (data) {
      const banners = [];
      data.map((item) =>
        banners.push(
          <Banner
            key={`banner_${item.id}`}
            header={item.head}
            button={item.button}
            img={item.img}
            href={item.href}
          />
        )
      );
      setSlides(banners);
    }
  }, [data]);

  return (
    <div className={`${s.main}`}>
      <div
        // src={left}
        alt={"arrow_left"}
        className={
          activeIndicator === 0
            ? `${s.main__prev} ${s.none_button}`
            : s.main__prev
        }
        onClick={() => slider.slickPrev()}
      div/>
      <div
        // src={right}
        alt={"arrow_right"}
        className={
          activeIndicator + 1 === slides.length
            ? `${s.main__next} ${s.none_button}`
            : s.main__next
        }
        onClick={() => slider.slickNext()}
      div/>
      <div className={s.main__slider}>
        <Slider ref={(slider) => setSlider(slider)} {...settingsSlider}>
          {slides}
        </Slider>
      </div>
    </div>
  );
});

export default Main;
