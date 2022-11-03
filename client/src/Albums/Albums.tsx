import s from './albums.module.sass';
import AlbumsStore from '../stores/AlbumsStore';
import Banner from './banners/Banner';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { IAlbum } from '../presets/interfaces';

const Albums = observer(() => {
    const [slides, setSlides] = useState<IAlbum[]>([]);
    const data = AlbumsStore.getAlbums();
    useEffect(() => {
        if (data) setSlides(data);
    }, [data]);
    return (
        <div className={`${s.albums}`}>
            {slides.map(({name, image, year, desc, id}, index) => {
                return (
                    <Banner
                        key={`banner_${index}`}
                        header={name}
                        img={image}
                        year={year}
                        side={index % 2}
                        desc={desc}
                        id={id}
                    />
                );
            })}
        </div>
    );
});

export default Albums;