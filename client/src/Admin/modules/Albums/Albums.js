import s from "./albums.module.sass";
import AlbumsStore from "../../../stores/AlbumsStore";
import { useEffect, useState } from "react";
import Album from "./Album";
const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const data = AlbumsStore.getAlbums().data;
  useEffect(() => {
    setAlbums(data);
  }, [data]);

  // const deleteAlbum = async (id) => {
  //   await AlbumsStore.deleteAlbum(id);

  //   await AlbumsStore.updateAlbums();
  //   const data = await AlbumsStore.getAlbums().data;
  //   setAlbums(data);
  // };

  return (
    <div className={`${s.albums}`}>
      {albums.map((item, index) => {
        return <Album key={`banner_card_${index}`} item={item} />;
      })}
    </div>
  );
};

export default Albums;
