import { useEffect, useState } from 'react';
import s from './song.module.sass';
import del from '../../../img/icons/close.svg';
import SongsStore from '../../../stores/SongsStore';
import AlbumsStore from '../../../stores/AlbumsStore';
import { observer } from 'mobx-react-lite';
import { IAlbum, ISongs } from '../../../presets/interfaces';

const Songs = observer(() => {
    const [songs, setSongs] = useState<ISongs[]>([]);
    const [album, setAlbum] = useState(1);
    const [albums, setAlbums] = useState<IAlbum[]>([]);
    const data = SongsStore.getSongs();
    const data2 = AlbumsStore.getAlbums();

    // const byField = (field: string) => {
    //     return (
    //         a: { [field: string]: number; }, 
    //         b: { [field: string]: number; }
    //         ) => (a[field] > b[field] ? 1 : -1);
    // }; (a: ISongs, b: ISongs) => number
    const byField = (field: string) => {
        return ((a: ISongs, b: ISongs) => (a[field] < b[field] ? -1 : 1));
    };

    useEffect(() => {
        const songs: ISongs[] = [];
        if (data) {
            data.map((item) => {
                if (item.album_id === album) {
                    songs.push(item);
                }
                return '';
            });
            // songs.sort(byField('id_in_album'));
            songs.sort(byField('id_in_album'));
            setSongs(songs);
        }
    }, [data, album])

    useEffect(() => {
        if (data2) setAlbums(data2);
    }, [data2]);

    const deleteSong = async (id: number) => {
        await SongsStore.deleteSong(id);
        await SongsStore.updateSongs();
        const data = await SongsStore.getSongs();
        setSongs(data);
    };

    const putToSong = async (event: any, id: number, data: string) => {
        if (event.target.innerText !== data) {
            SongsStore.putSong(
                id,
                event.target.innerText,
                event.target.attributes.name.value
            );
        }
        await SongsStore.updateSongs();
        const songs = await SongsStore.getSongs();
        setSongs(songs);
    };

    const addSong = async () => {
        await SongsStore.createSong(
            songs[songs.length - 1].id_in_album + 1,
            'Force-Minor - ', album
        );
        await SongsStore.updateSongs();
        const data = await SongsStore.getSongs();
        setSongs(data);
    };

    return (
        <div className={`${s.songs}`}>
            <div>
                {albums.map((item, index) => {
                    return (
                        <div
                            key={`album_${index}`}
                            onClick={() => {
                                setAlbum(item.id);
                            }}
                            className={`${s.songs__select}
            ${item.id === album && s.songs__select_active}`}
                        >
                            {item.name}
                        </div>
                    );
                })}
            </div>
            <div>
                {songs.map((item, index) => {
                    return (
                        <div key={`song_${index}`} className={s.songs__song}>
                            <div
                                contentEditable="true"
                                suppressContentEditableWarning={true}
                                // name="id_in_album"
                                onBlur={(e) => putToSong(e, item.id, item.place)}
                                style={{
                                    width: '53px'
                                }}
                                className={s.songs__songItem}
                            >
                                {item.id_in_album}
                            </div>
                            <div
                                contentEditable="true"
                                suppressContentEditableWarning={true}
                                // name="name"
                                onBlur={(e) => putToSong(e, item.id, item.name)}
                                style={{
                                    textAlign: 'left'
                                }}
                                className={s.songs__songItem}
                            >
                                {item.name}
                            </div>
                            <div
                                className={s.songs__delete}
                                onClick={() => deleteSong(item.id)}
                            >
                                <img src={del} alt="delete" />
                            </div>
                        </div>
                    );
                })}

                <div className={s.songs__add} onClick={() => addSong()}>
                    <img src={del} alt="delete" />
                </div>
            </div>
        </div>
    );
});

export default Songs;