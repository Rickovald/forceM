import s from "./album.module.sass";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router";
import AlbumsStore from "../stores/AlbumsStore";
import { useEffect, useState } from "react";

const Album = observer(() => {
  // const { id } = match.params;
  const [name, setName] = useState("");
  const params = useParams();
  const data = AlbumsStore.getAlbums().data;
  useEffect(() => {
    if (data) {
      data.map((item) => {
        if (item.id.toString() === params.id) {
          setName(item.name);
        }
        return "";
      });
    }
  }, [data, params.id]);

  return (
    <div className={`${s.albums}`}>
      <h1>
        Альбом {params.id}, {name}
      </h1>
      {/* {albums.map((item, index) => {
        return (
          <div key={item.name}>
            {item.name}
            <br />
            {item.href}
            <img src={item.image} alt={`image_${index}`} />
          </div>
        );
      })} */}
    </div>
  );
});

export default Album;
