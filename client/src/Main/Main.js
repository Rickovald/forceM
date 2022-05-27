import s from "./main.module.sass";
// import { wrapper } from "../presets/wrapper.module.sass";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import Banner from "./banners/Banner";
import BannersStore from "../stores/BannersStore";
import { toJS } from "mobx";

const Main = observer(() => {
  // const [slider, setSlider] = useState();
  const [slides, setSlides] = useState([]);
  const data = BannersStore.getBanners().data

  // const settingsSlider = {
  //   infinite: false,
  //   easing: "ease",
  //   speed: 700,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   swipeToSlide: true,
  //   // beforeChange: (current, next)  => (setActiveIndicator(next))
  // };

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
      <div className={s.main__slider}>
      {slides}
      жопа
      {console.log(toJS(data), slides)}
        {/* <Slider {...settingsSlider} >
          
        </Slider> */}
      </div>
    </div>
  );
});

export default Main;
