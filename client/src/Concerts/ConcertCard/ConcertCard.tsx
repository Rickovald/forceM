import { observer } from 'mobx-react-lite';
import s from '../concerts.module.sass';
import { IConcerts } from "../../presets/interfaces"
import { FC } from 'react';

const ConcertCard: FC<IConcerts> = observer(({ country, date, city, tickets_price, tickets, group, place }) => {
    const concertDate = new Date(date);
    return (
        <div className={`${s.concert}`}>
            
            {/* <h2 className={s.concert__head}>{concert_name}</h2> */}
            <div className={s.concert__columns}>
                <div className={s.concert__column}>
                    <div className={s.concert__row}>
                        <p className={s.concert__name}>Дата:</p>
                        <p>
                            {concertDate.getDate()}-{concertDate.getMonth() + 1}-{concertDate.getFullYear()}
                        </p>
                    </div>
                    <div className={s.concert__row}>
                        <p className={s.concert__name}>Страна:</p>
                        <p>{country}</p>
                    </div>
                    <div className={s.concert__row}>
                        <p className={s.concert__name}>Город:</p>
                        <p>{city}</p>
                    </div>
                    <div className={s.concert__row}>
                        <p className={s.concert__name}>Цена на билет:</p>
                        <p>{tickets_price}</p>
                    </div>
                    <div className={s.concert__row}>
                        <p className={s.concert__name}>Билеты:</p>
                        <p><a className={s.concerts__href} href={tickets}>Купить</a></p>
                    </div>
                    <div className={s.concert__row}>
                        <p className={s.concert__name}>Организатор:</p>
                        <p><a className={s.concerts__href} href={group}>{place}</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default ConcertCard;