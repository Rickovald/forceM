import { useState } from "react";
import ConcertsStore from "../../../stores/ConcertsStore";
import s from "./concerts.module.sass";
const Concert = (props) => {
  const [active, setActive] = useState(false);

  const [concert_name, setName] = useState(props.item.name);

  const newdate = new Date(props.item.date);
  let concertDate = `${newdate.getFullYear()}-${newdate.getMonth() + 1}-${newdate.getDate()}`;

  const [date, setDate] = useState(concertDate);
  const [group, setGroup] = useState(props.item.group);

  const [tickets, setTickets] = useState(props.item.tickets);
  const [tickets_price, setPrice] = useState(props.item.tickets_price);

  const [city, setCity] = useState(props.item.city);
  const [country, setCountry] = useState(props.item.country);

  const [place, setPlace] = useState(props.item.place);
  const [main_album, setAlbum] = useState(props.item.main_album);

  const toggleActive = () => {
    setActive((active) => (active = !active));
  };
  const submit = async () => {
    await ConcertsStore.putConcert(
      props.item.id,
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
        {props.item.concert_name}
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
              placeholder={props.item.concert_name}
            />
          </div>
          <div className={s.concert__inputWrapper}>
            <p className={s.concert__inputLabel}>Дата:</p>
            <input
              onChange={(e) => setDate(e.target.value)}
              type="date"
              className={s.concert__input}
              placeholder={props.item.year}
            />
          </div>
          <div className={s.concert__inputWrapper}>
            <p className={s.concert__inputLabel}>Группа мероприятия:</p>
            <input
              onChange={(e) => setGroup(e.target.value)}
              type="text"
              className={`${s.concert__input}`}
              placeholder={props.item.group}
            />
          </div>
          <div className={s.concert__inputWrapper}>
            <p className={s.concert__inputLabel}>Место мероприятия:</p>
            <input
              onChange={(e) => setPlace(e.target.value)}
              type="text"
              className={`${s.concert__input}`}
              placeholder={props.item.place}
            />
          </div>
          <div className={s.concert__inputWrapper}>
            <p className={s.concert__inputLabel}>Стоимость билетов:</p>
            <input
              onChange={(e) => setPrice(e.target.value)}
              type="text"
              className={`${s.concert__input}`}
              placeholder={props.item.tickets_price}
            />
          </div>
          <div className={s.concert__inputWrapper}>
            <p className={s.concert__inputLabel}>Покупка билетов:</p>
            <input
              onChange={(e) => setTickets(e.target.value)}
              type="text"
              className={`${s.concert__input}`}
              placeholder={props.item.tickets}
            />
          </div>

          <div className={s.concert__inputWrapper}>
            <p className={s.concert__inputLabel}>Город:</p>
            <input
              onChange={(e) => setCity(e.target.value)}
              type="text"
              className={`${s.concert__input}`}
              placeholder={props.item.city}
            />
          </div>
          <div className={s.concert__inputWrapper}>
            <p className={s.concert__inputLabel}>Страна:</p>
            <input
              onChange={(e) => setCountry(e.target.value)}
              type="text"
              className={`${s.concert__input}`}
              placeholder={props.item.country}
            />
          </div>
        </div>

        <div className={s.concert__inputWrapper}>
          <p className={s.concert__inputLabel}>Альбом:</p>
          <select
            className={`${s.concert__input}`}
            defaultValue={props.item.main_album}
            onChange={(e) => setAlbum(e.target.value)}
          >
            {props.albums.map((item, index) => {
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
