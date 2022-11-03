import s from './albums.module.sass';
import AlbumsStore from '../../../stores/AlbumsStore';
import { useEffect, useState } from 'react';
import Album from './Album';
import { observer } from 'mobx-react-lite';

const Albums = observer(() => {
    const [albums, setAlbums] = useState([]);
    const data = AlbumsStore.getAlbums().data;
    useEffect(() => {
        if (data) setAlbums(data);
    }, [data]);

    return (
        <div className={`${s.albums}`}>
            {albums.map((item, index) => {
                return <Album key={`banner_card_${index}`} item={item} />;
            })}
        </div>
    );
});

export default Albums;