import s from './banners.module.sass';
import BannersStore from '../../../stores/BannersStore';
import { useEffect, useState } from 'react';
import del from '../../../img/icons/close.svg';
import Banner from './Banner';
import { IMainBanner } from '../../../presets/interfaces';

const Banners = () => {
    const [banners, setBanners] = useState<IMainBanner[]>([]);
    const data = BannersStore.getBanners();
    useEffect(() => {
        if (data) setBanners(data);
    }, [data]);

    const addSong = async () => {
        await BannersStore.createBanner(
            '/images/concert4.jpg',
            'Выступление...',
            'Слушать',
            'https://vk.com/video/@domnepomer?z=video-205245784_456239041%2Fclub205245784%2Fpl_-205245784_-2',
            'outer'
        );
        await BannersStore.updateBanners();
        const data = await BannersStore.getBanners();
        setBanners(data);
    };

    return (
        <div className={`${s.banners}`}>
            {banners.map(({head, button, href, img, id}, index) => {
                return (
                    <Banner 
                    key={`banner_card_${index}`}
                    id={id}
                    propHead={head} propButton={button}
                    propHref={href} propImg={img} 
                    setBanners={() => setBanners}/>
                );
            })}
            <div className={s.banners__add} onClick={() => addSong()}>
                <img src={del} alt="delete" />
            </div>
        </div>
    );
};

export default Banners;