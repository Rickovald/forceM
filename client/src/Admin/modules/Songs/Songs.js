import { useEffect, useState } from "react";
import s from "./song.module.sass";
import del from "../../../img/icons/close.svg";
import SongsStore from "../../../stores/SongsStore";
import AlbumsStore from "../../../stores/AlbumsStore";
import { observer } from "mobx-react-lite";

const Songs = observer(() => {
  const [songs, setSongs] = useState([]);
  const [album, setAlbum] = useState(1);
  const [albums, setAlbums] = useState([]);
  const data = SongsStore.getSongs().data;
  const data2 = AlbumsStore.getAlbums().data;

  const byField = (field) => {
    return (a, b) => (a[field] > b[field] ? 1 : -1);
  };

  useEffect(() => {
    const songs = [];
    if (data) {
      data.map((item) => {
        if (item.album_id === album) {
          songs.push(item);
        }
        return "";
      });
      songs.sort(byField("id_in_album"));
      setSongs(songs);
    }
  }, [data, album]);
  useEffect(() => {
    if (data2) setAlbums(data2);
  }, [data2]);
  const deleteSong = async (id) => {
    await SongsStore.deleteSong(id);
    await SongsStore.updateSongs();
    const data = await SongsStore.getSongs().data;
    setSongs(data);
  };
  const putToSong = async (e, id, data) => {
    // event.target.attributes.getNamedItem('data-tag')
    if (e.target.innerText !== data) {
      SongsStore.putSong(
        id,
        e.target.innerText,
        e.target.attributes.name.value
      );
    }
    await SongsStore.updateSongs();
    const songs = await SongsStore.getSongs().data;
    setSongs(songs);
  };

  const addSong = async () => {
    await SongsStore.createSong(
      songs[songs.length - 1].id_in_album + 1,
      "Force-Minor - ",
      album
    );
    await SongsStore.updateSongs();
    const data = await SongsStore.getSongs().data;
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
                name="id_in_album"
                onBlur={(e) => putToSong(e, item.id, item.place)}
                style={{
                  width: "53px",
                }}
                className={s.songs__songItem}
              >
                {item.id_in_album}
              </div>
              <div
                contentEditable="true"
                suppressContentEditableWarning={true}
                name="name"
                onBlur={(e) => putToSong(e, item.id, item.name)}
                style={{
                  textAlign: "left",
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
