import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import s from '../concerts.module.sass';
import { IConcerts } from "../../presets/interfaces"

const ConcertCardPc: FC<IConcerts> = observer(({ country, date, city, tickets_price, tickets, group, place }) => {
    const concertDate = new Date(date);
    return (
        <tr className={s.concerts__row}>
            <th className={s.concerts__cell}>
                {concertDate.getDate()}-{concertDate.getMonth() + 1}-
                {concertDate.getFullYear()}
            </th>
            <th className={s.concerts__cell}>{country}</th>
            <th className={s.concerts__cell}>{city}</th>
            <th className={s.concerts__cell}>{tickets_price}</th>
            <th className={s.concerts__cell}>
                <a className={s.concerts__href} href={tickets}>
                    Купить
                </a>
            </th>
            <th className={s.concerts__cell}>
                <a className={s.concerts__href} href={group}>
                    {place}
                </a>
            </th>
        </tr>
    );
});

export default ConcertCardPc;