import s from "./albums.module.sass"

const Albums = () => {
	return (
		<div className={`${s.albums}`}>
			<div className={s.albums__list}>
				<h2 className={s.albums__header}>albums</h2>
			</div>
		</div>
	)
}

export default Albums