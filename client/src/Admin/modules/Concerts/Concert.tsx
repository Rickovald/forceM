import { FC, useState } from 'react';
import ConcertsStore from '../../../stores/ConcertsStore';
import s from './concerts.module.sass';
import { IAlbum } from '../../../presets/interfaces';

export interface IConcerts {
    id: number;
    prop_date: Date;
    prop_concert_name: string;
    prop_country: string;
    prop_city: string;
    prop_tickets_price: string;
    prop_tickets: string;
    prop_group: string;
    prop_place: string;
    prop_main_album: string;
    prop_year: string;
    albums: IAlbum[];
}
const Concert: FC<IConcerts>= ({id, prop_date, prop_concert_name, prop_country, prop_city, prop_tickets_price, prop_tickets, prop_group, prop_place, prop_main_album, prop_year, albums}) => {
    const [active, setActive] = useState(false);

    const [concert_name, setName] = useState(prop_concert_name);

    const newdate = new Date(prop_date);
    const concertDate = `${newdate.getFullYear()}-${newdate.getMonth() + 1}-${newdate.getDate()}`;

    const [date, setDate] = useState(concertDate);
    const [group, setGroup] = useState(prop_group);

    const [tickets, setTickets] = useState(prop_tickets);
    const [tickets_price, setPrice] = useState(prop_tickets_price);

    const [city, setCity] = useState(prop_city);
    const [country, setCountry] = useState(prop_country);

    const [place, setPlace] = useState(prop_place);
    const [main_album, setAlbum] = useState(prop_main_album);

    const toggleActive = () => {
        setActive((active) => (active = !active));
    };
    const submit = async () => {
        await ConcertsStore.putConcert(
            id,
            concert_name,
            date,
            place,
            group,
            tickets,
            tickets_price,
            city,
            country,
            main_album
        );
    };

    return (
        <div className={`${s.concert}`}>
            <h2 onClick={() => toggleActive()} className={s.concert__name}>
                {concert_name}
                <div
                    className={`${s.concert__dropdown} ${
                        active ? s.concert__dropdown_active : s.concert__dropdown_inactive
                    }`}
                />
            </h2>

            <div
                className={
                    active
                        ? `${s.concert__form} ${s.concert__form_active}`
                        : `${s.concert__form}`
                }
            >
                <div className={s.concert__inputs}>
                    <div className={s.concert__inputWrapper}>
                        <p className={s.concert__inputLabel}>Название:</p>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            className={s.concert__input}
                            placeholder={concert_name}
                        />
                    </div>
                    <div className={s.concert__inputWrapper}>
                        <p className={s.concert__inputLabel}>Дата:</p>
                        <input
                            onChange={(e) => setDate(e.target.value)}
                            type="date"
                            className={s.concert__input}
                            placeholder={prop_year}
                        />
                    </div>
                    <div className={s.concert__inputWrapper}>
                        <p className={s.concert__inputLabel}>Группа мероприятия:</p>
                        <input
                            onChange={(e) => setGroup(e.target.value)}
                            type="text"
                            className={`${s.concert__input}`}
                            placeholder={group}
                        />
                    </div>
                    <div className={s.concert__inputWrapper}>
                        <p className={s.concert__inputLabel}>Место мероприятия:</p>
                        <input
                            onChange={(e) => setPlace(e.target.value)}
                            type="text"
                            className={`${s.concert__input}`}
                            placeholder={place}
                        />
                    </div>
                    <div className={s.concert__inputWrapper}>
                        <p className={s.concert__inputLabel}>Стоимость билетов:</p>
                        <input
                            onChange={(e) => setPrice(e.target.value)}
                            type="text"
                            className={`${s.concert__input}`}
                            placeholder={tickets_price}
                        />
                    </div>
                    <div className={s.concert__inputWrapper}>
                        <p className={s.concert__inputLabel}>Покупка билетов:</p>
                        <input
                            onChange={(e) => setTickets(e.target.value)}
                            type="text"
                            className={`${s.concert__input}`}
                            placeholder={tickets}
                        />
                    </div>

                    <div className={s.concert__inputWrapper}>
                        <p className={s.concert__inputLabel}>Город:</p>
                        <input
                            onChange={(e) => setCity(e.target.value)}
                            type="text"
                            className={`${s.concert__input}`}
                            placeholder={city}
                        />
                    </div>
                    <div className={s.concert__inputWrapper}>
                        <p className={s.concert__inputLabel}>Страна:</p>
                        <input
                            onChange={(e) => setCountry(e.target.value)}
                            type="text"
                            className={`${s.concert__input}`}
                            placeholder={country}
                        />
                    </div>
                </div>

                <div className={s.concert__inputWrapper}>
                    <p className={s.concert__inputLabel}>Альбом:</p>
                    <select
                        className={`${s.concert__input}`}
                        defaultValue={main_album}
                        onChange={(e) => setAlbum(e.target.value)}
                    >
                        {albums.map((item, index) => {
                            return <option key={`option_${index}`}>{item.id}</option>;
                        })}
                    </select>
                </div>
                <div className={s.concert__submit} onClick={submit}>
          Сохранить
                </div>
            </div>
        </div>
    );
};

export default Concert;