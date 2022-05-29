import s from "./banner.module.sass";
import { NavLink } from "react-router-dom";

const Banner = (props) => {
  return (
    <div className={`${s["banner_" + props.side]} ${s.banner}`}>
      <div className={s.banner__cover}>
        <div className={s.banner__background}>
          <img
            className={s.banner__background_img}
            src={props.img}
            alt="background"
          />
        </div>
      </div>
      <div className={s.banner__content}>
        <h2 className={s.banner__head}>{`${props.header}, ${props.year}`}</h2>

        {props.desc}
        <NavLink
          to={`/album/${props.id}`}
          className={`${s["banner__button_" + props.side]} ${s.banner__button}`}
        >
          Подробнее
        </NavLink>
      </div>
    </div>
  );
};

Banner.defaultProps = { header: "", img: "img", href: "#", year: "2022" };

export default Banner;
