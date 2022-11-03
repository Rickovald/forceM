import s from './main.module.sass';

import { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import Banner from './banners/Banner';
import BannersStore from '../stores/BannersStore';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import 'swiper/css';
import './swiper.sass';

const Main = observer(() => {
    const [slides, setSlides] = useState<JSX.Element[]>([]);
    const data = BannersStore.getBanners();
    useEffect(() => {
        if (data) {
            const banners:JSX.Element[] = [];
            data.map(({id, head, button, img, href}) =>
                banners.push(
                    <SwiperSlide key={`banner_${id}`}>
                        <Banner
                            head={head}
                            button={button}
                            img={img}
                            href={href}
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
                modules={[Navigation]}
                navigation={true}
                className={s.main__slider}
            >
                {slides}
            </Swiper>
        </div>
    );
});

export default Main;