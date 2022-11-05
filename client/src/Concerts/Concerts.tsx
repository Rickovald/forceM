import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import ConcertsStore from '../stores/ConcertsStore';
import useWindowDimensions from '../hooks/useWindowDimensions';
import s from './concerts.module.sass';
import ConcertCard from './ConcertCard/ConcertCard';
import ConcertCardPc from './ConcertCard/ConcertCardPc';
import { IConcerts } from '../presets/interfaces';

// interface IConcerts {
//     date: Date;
//     country: string;
//     city: string;
//     tickets_price: string;
//     tickets: string;
//     group: string;
//     place: string;
// }

const Concerts = observer(() => {
    const [concerts, setConcerts] = useState<IConcerts[]>([]);
    const data = ConcertsStore.getConcerts();
    useEffect(() => {
        const slides = [];
        if (data) {
            for (let i = 0; i < data.length; i++) {
                slides.push(data[i]);
            }
            setConcerts(slides);
        }
    }, [data]);

    const { width } = useWindowDimensions();
    return (
        <div className={`${s.concerts}`}>
            {width > 850
                ? (
                <div className={s.concerts__table_wrapper}>
                    <table className={s.concerts__table}>
                        <tbody>
                            <tr className={s.concerts__row_head}>
                                <th className={s.concerts__cell}>Дата</th>
                                <th className={s.concerts__cell}>Страна</th>
                                <th className={s.concerts__cell}>Город</th>
                                <th className={s.concerts__cell}>Цена на билет</th>
                                <th className={s.concerts__cell}>Билеты</th>
                                <th className={s.concerts__cell}>Организатор</th>
                            </tr>
                            {concerts.map(({country, date, city, tickets_price, tickets, group, place}, index) => {
                                return (
                                    <ConcertCardPc 
                                        country={country}
                                        date={date}
                                        city={city}
                                        tickets_price={tickets_price}
                                        tickets={tickets}
                                        group={group}
                                        place={place}
                                    />
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                )
                : (
                    concerts.map(({country, date, city, tickets_price, tickets, group, place}, index) => {
                        return <ConcertCard 
                            key={`concert_${index}`} 
                            country={country}
                            date={date}
                            city={city}
                            tickets_price={tickets_price}
                            tickets={tickets}
                            group={group}
                            place={place}
                        />;
                    })
                )}
        </div>
    );
});

export default Concerts;