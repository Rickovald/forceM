import s from "./concerts.module.sass"

const Concerts = () => {
	return (
		<div className={`${s.concerts}`}>
			<div className={s.concerts__list}>
				<h2 className={s.concerts__header}>concerts</h2>
			</div>
		</div>
	)
}

export default Concerts