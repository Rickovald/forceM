import { observer } from "mobx-react-lite";
import s from "./concerts.module.sass";

const ConcertCard = observer((props) => {
  const date = new Date(props.item.date);
  return (
    <div className={`${s.concert}`}>
      <h2 className={s.concert__head}>{props.item.concert_name}</h2>
      <div className={s.concert__columns}>
        <div className={s.concert__column}>
          <div className={s.concert__row}>
            <p className={s.concert__name}>Дата:</p>
            <p>
              {date.getDate()}-{date.getMonth() + 1}-{date.getFullYear()}
            </p>
          </div>
          <div className={s.concert__row}>
            <p className={s.concert__name}>Страна:</p>
            <p>{props.item.country}</p>
          </div>
          <div className={s.concert__row}>
            <p className={s.concert__name}>Город:</p>
            <p>{props.item.city}</p>
          </div>
          <div className={s.concert__row}>
            <p className={s.concert__name}>Цена на билет:</p>
            <p>{props.item.tickets_price}</p>
          </div>
          <div className={s.concert__row}>
            <p className={s.concert__name}>Билеты:</p>
            <p><a className={s.concerts__href} href={props.item.tickets}>Купить</a></p>
          </div>
          <div className={s.concert__row}>
            <p className={s.concert__name}>Организатор:</p>
            <p><a className={s.concerts__href} href={props.item.group}>{props.item.place}</a></p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ConcertCard;
