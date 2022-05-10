import s from "./banner.module.sass";

const Banner = (props) => {
	const host = `${window.location.protocol}://${window.location.host}`;
	console.log(props.img);
	console.log(host + props.img);

	return (
		<div className={s.banner}>
			<img
				className={s.banner__background}
				src={props.img}
				alt="background"
			/>
			<div className={s.banner__content}>
				<h2 className={s.banner__head}>{props.header}</h2>
				<button className={s.banner__button}>{props.button}</button>
			</div>
		</div>
	);
};

Banner.defaultProps = { header: "", button: "смотреть", img: "img", href: "" };

export default Banner;
