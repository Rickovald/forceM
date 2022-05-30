// import {wrapper} from '../presets/wrapper.module.sass'
// import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import ConcertsStore from "../stores/ConcertsStore";
import s from "./concerts.module.sass";

const Concerts = observer(() => {
  const [concerts, setConcerts] = useState([]);
  const data = ConcertsStore.getConcerts().data;
  useEffect(() => {
    const slides = []
    if (data) {
      for (let i = 0; i <= 6; i++) {
        slides.push(data[0])
      }
      setConcerts(slides)
    }

    // if (data) {
    //   setConcerts(data,data);
    //   console.log(concerts);
    // }
  }, [data]);
  return (
    <div className={`${s.concerts}`}>
      {/* Concerts */}
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
                    {date.getDay()}-{date.getMonth() + 1}-{date.getFullYear()}
                  </th>
                  <th className={s.concerts__cell}>{item.country}</th>
                  <th className={s.concerts__cell}>{item.city}</th>
                  <th className={s.concerts__cell}>{item.tickets_price}</th>
                  <th className={s.concerts__cell}>
                    <a className={s.concerts__href} href={item.tickets}>Купить</a>
                  </th>
                  <th className={s.concerts__cell}>
                    <a className={s.concerts__href} href={item.group}>{item.place}</a>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
});

export default Concerts;
