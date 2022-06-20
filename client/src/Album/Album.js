import s from "./album.module.sass";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router";
import AlbumsStore from "../stores/AlbumsStore";
import { useEffect, useState } from "react";
import SongsStore from "../stores/SongsStore";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Album = observer(() => {
  // const { id } = match.params;
  const [album, setAlbum] = useState("");
  const [songs, setSongs] = useState([]);
  const params = useParams();
  const data = AlbumsStore.getAlbums().data;
  const { width } = useWindowDimensions();
  const songsData = SongsStore.getSongs().data;
  useEffect(() => {
    if (data) {
      data.map((item) => {
        if (item.id.toString() === params.id) {
          setAlbum(item);
        }
        return "";
      });
    }
  }, [data, params.id]);

  useEffect(() => {
    const songs = [];
    if (songsData) {
      songsData.map((item) => {
        if (item.album_id.toString() === params.id) {
          songs.push(item);
        }
        return "";
      });
      setSongs(songs);
    }
  }, [songsData, params.id]);

  return (
    <div className={`${s.album}`}>
      <div className={s.album__content_wrapper}>
        <h1 className={s.album__header}>
          {album.name}, {album.year}
        </h1>
        <div className={s.album__content}>
          {width >= 768 && (
            <div>
              <img
                className={s.album__image}
                src={album.image}
                alt={"album cover"}
              />
            </div>
          )}
          <div className={s.album__right}>
            {songs.map((item, index) => {
              return (
                <div key={item.name}>
                  {item.id_in_album}. {item.name}
                </div>
              );
            })}
            <a
              className={s.album__button}
              href={album.href}
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
