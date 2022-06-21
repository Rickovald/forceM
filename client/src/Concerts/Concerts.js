import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import ConcertsStore from "../stores/ConcertsStore";
import useWindowDimensions from "../hooks/useWindowDimensions";
import s from "./concerts.module.sass";
import ConcertCard from "./ConcertCard";

const Concerts = observer(() => {
  const [concerts, setConcerts] = useState([]);
  const data = ConcertsStore.getConcerts().data;
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
      {/* Concerts */}
      {width > 850 ? (
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
              {concerts.map((item, index) => {
                const date = new Date(item.date);
                return (
                  <tr key={`concert_${index}`} className={s.concerts__row}>
                    <th className={s.concerts__cell}>
                      {date.getDate()}-{date.getMonth() + 1}-
                      {date.getFullYear()}
                    </th>
                    <th className={s.concerts__cell}>{item.country}</th>
                    <th className={s.concerts__cell}>{item.city}</th>
                    <th className={s.concerts__cell}>{item.tickets_price}</th>
                    <th className={s.concerts__cell}>
                      <a className={s.concerts__href} href={item.tickets}>
                        Купить
                      </a>
                    </th>
                    <th className={s.concerts__cell}>
                      <a className={s.concerts__href} href={item.group}>
                        {item.place}
                      </a>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        concerts.map((item, index) => {
          return <ConcertCard key={`concert_${index}`} item={item} />;
        })
      )}
    </div>
  );
});

export default Concerts;
