import s from './album.module.sass';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router';
import AlbumsStore from '../stores/AlbumsStore';
import { useEffect, useState } from 'react';
import SongsStore from '../stores/SongsStore';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { IAlbum, ISongs } from '../presets/interfaces';

const Album = observer(() => {
    const [album, setAlbum] = useState<IAlbum>();
    const [songs, setSongs] = useState<ISongs[]>([]);
    const params = useParams();
    const data = AlbumsStore.getAlbums();
    const { width } = useWindowDimensions();
    const songsData = SongsStore.getSongs();

    // const byField = (field: string) => {
    //     return (a, b) => (a[field] > b[field] ? 1 : -1);
    // };

    useEffect(() => {
        if (data) {
            data.map((item) => {
                if (item.id.toString() === params.id) {
                    setAlbum(item);
                }
                return '';
            });
        }
    }, [data, params.id]);

    useEffect(() => {
        const songs:ISongs[] = [];
        if (songsData) {
            songsData.map((item) => {
                if (item.album_id.toString() === params.id) {
                    songs.push(item);
                }
                return '';
            });
            // songs.sort(byField('id_in_album'));
            setSongs(songs);
        }
    }, [songsData, params.id]);

    return (
        <div className={`${s.album}`}>
            <div className={s.album__content_wrapper}>
                <h1 className={s.album__header}>
                    {album!.name}, {album!.year}
                </h1>
                <div className={s.album__content}>
                    {width >= 768 && (
                        <div>
                            <img
                                className={s.album__image}
                                src={album!.image}
                                alt={'album cover'}
                            />
                        </div>
                    )}
                    <div className={s.album__right}>
                        {songs.map(({name, id_in_album}, index) => {
                            return (
                                <div key={name}>
                                    {id_in_album}. {name}
                                </div>
                            );
                        })}
                        <a
                            className={s.album__button}
                            href={album!.href}
                            target="_blank"
                            rel="noreferrer"
                        >
              Слушать
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Album;