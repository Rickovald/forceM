import s from "./program.module.sass"
import list from "./song_list.json"

const Program = () => {
	const sorted_list = list.slice(0).sort(function(a,b) {
		return b.priority - a.priority;
	});
	
	return (
		<div className={`${s.program}`}>
			<div className={s.program__list}>
				<h2 className={s.program__header}>Список песен на концерт</h2>
				{sorted_list.map ((item, index) => {
					return (
						<div key={`song_${index}`} className={s[`program__song_${item.priority}`]+ " " + s.program__song}>
							<p>{index}. {item.name}</p>
							<p>{item.priority}</p>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Program