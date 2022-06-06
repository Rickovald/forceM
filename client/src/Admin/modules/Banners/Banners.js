import s from "./banners.module.sass"

const Banners = () => {
	return (
		<div className={`${s.banners}`}>
			<div className={s.banners__list}>
				<h2 className={s.banners__header}>Banners</h2>
			</div>
		</div>
	)
}

export default Banners