import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import AlbumsStore from "../../../stores/AlbumsStore";
import ConcertsStore from "../../../stores/ConcertsStore";
import Concert from "./Concert";
import s from "./concerts.module.sass";

const Concerts = observer(() => {
  const [concerts, setConcerts] = useState([]);
  const [albums, setAlbums] = useState([]);
  const data = ConcertsStore.getConcerts().data;
  const data2 = AlbumsStore.getAlbums().data;
  useEffect(() => {
    if (data) setConcerts(data);
  }, [data]);

  useEffect(() => {
    if (data2) setAlbums(data2);
  }, [data2]);


  return (
    <div className={`${s.concerts}`}>
      {concerts.map((item, index) => {
        return <Concert key={`banner_card_${index}`} item={item} albums={albums} />;
      })}
    </div>
  );
});

export default Concerts;
