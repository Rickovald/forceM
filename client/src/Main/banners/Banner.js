import useWindowDimensions from "../../hooks/useWindowDimensions";
import s from "./banner.module.sass";

const Banner = (props) => {
  const { width } = useWindowDimensions();
  return (
    <div className={s.banner}>
      <img
        className={s.banner__background}
        src={width >= 900 ? props.img 
          : `${props.img.split(".")[0]}_mob.${props.img.split(".")[1]}`
        }
        alt="background"
      />
      <div className={s.banner__content}>
        <h2 className={s.banner__head}>{props.header}</h2>
        <a
          className={s.banner__button}
          href={props.href}
          target="_blank"
          rel="noreferrer"
        >
          {props.button}
        </a>
      </div>
    </div>
  );
};

Banner.defaultProps = { header: "", button: "смотреть", img: "img", href: "#" };

export default Banner;
