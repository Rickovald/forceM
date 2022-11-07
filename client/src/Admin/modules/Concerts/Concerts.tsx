import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import AlbumsStore from '../../../stores/AlbumsStore';
import ConcertsStore from '../../../stores/ConcertsStore';
import Concert from './Concert';
import s from './concerts.module.sass';
import { IConcerts, IAlbum } from '../../../presets/interfaces';
const Concerts = observer(() => {
    const [concerts, setConcerts] = useState<IConcerts[]>([]);
    const [albums, setAlbums] = useState<IAlbum[]>([]);
    const data = ConcertsStore.getConcerts();
    const data2 = AlbumsStore.getAlbums();

    useEffect(() => {
        if (data) setConcerts(data);
    }, [data]);

    useEffect(() => {
        if (data2) setAlbums(data2);
    }, [data2]);

    console.log(concerts)
    return (
        <div className={`${s.concerts}`}>
            {concerts.map(({id, date, concert_name, country, city, tickets_price, tickets, group, place, main_album, year}, index) => {
                return <Concert key={`banner_card_${index}`} 
                id={id!} prop_date={date}
                prop_concert_name={concert_name!} prop_country={country}
                prop_city={city} prop_tickets_price={tickets_price}
                prop_tickets={tickets} prop_group={group}
                prop_place={place} prop_main_album={main_album!}
                prop_year={year!}
                albums={albums} 
                />;
            })}
        </div>
    );
});

export default Concerts;