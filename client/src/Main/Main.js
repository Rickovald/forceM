import s from "./main.module.sass";
// import { wrapper } from "../presets/wrapper.module.sass";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import Banner from "./banners/Banner";
import BannersStore from "../stores/BannersStore";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
// import ss from "swiper/scss/navigation";
// import sss from "swiper/scss/pagination";
import "swiper/css";
import "./swiper.sass";

const Main = observer(() => {
  const [slides, setSlides] = useState([]);
  const data = BannersStore.getBanners().data;
  useEffect(() => {
    if (data) {
      const banners = [];
      data.map((item) =>
        banners.push(
          <SwiperSlide key={`banner_${item.id}`}>
            <Banner
              header={item.head}
              button={item.button}
              img={item.img}
              href={item.href}
            />
          </SwiperSlide>
        )
      );
      setSlides(banners);
    }
  }, [data]);

  return (
    <div className={`${s.main}`}>
      <Swiper
        spaceBetween={50}
        modules={[
          // Pagination,
          Navigation,
        ]}
        // pagination={{
        //   dynamicBullets: true,
        //   clickable: true,
        // }}
        navigation={true}
        className={s.main__slider}
      >
        {slides}
      </Swiper>
      {/* <Slider {...settingsSlider} >
          
        </Slider> */}
    </div>
  );
});

export default Main;
