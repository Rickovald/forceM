import s from './albums.module.sass';
import AlbumsStore from '../stores/AlbumsStore';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';

import Banner from './banners/Banner';

const Albums = observer(() => {
    const [slides, setSlides] = useState([]);
    const data = AlbumsStore.getAlbums();
    useEffect(() => {
        if (data) setSlides(data);
    }, [data]);
    return (
        <div className={`${s.albums}`}>
            {slides.map((item, index) => {
                return (
                    <Banner
                        key={`banner_${index}`}
                        header={item.name}
                        img={item.image}
                        year={item.year}
                        side={index % 2}
                        desc={item.desc}
                        id={item.id}
                    />
                );
            })}
        </div>
    );
});

export default Albums;