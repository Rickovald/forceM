import s from "./banner.module.sass";
import { NavLink } from "react-router-dom"

const Banner = (props) => {
  return (
    <div className={s.banner}>
      <img className={s.banner__background} src={props.img} alt="background" />
      <div className={s.banner__content}>
        <h2 className={s.banner__head}>{props.header}</h2>
        <NavLink
          to={`/album/${props.id}`}
          className={s.banner__button}

        >
          Слушать
        </NavLink>
      </div>
    </div>
  );
};

Banner.defaultProps = { header: "",  img: "img", href: "#" };

export default Banner;
