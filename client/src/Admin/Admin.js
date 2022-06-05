import s from "./admin.module.sass"
import list from "./song_list.json"

const Admin = () => {
	const sorted_list = list.slice(0).sort(function(a,b) {
		return b.priority - a.priority;
	});
	
	return (
		<div className={`${s.admin}`}>
			<input />
			<div className={s.admin__list}>
				<h2 className={s.admin__header}>Список песен на концерт</h2>
				{sorted_list.map ((item, index) => {
					return (
						<div key={`song_${index}`} className={s[`song_${item.priority}`]+ " " + s.song}>
							<p>{index}. {item.name}</p>
							<p>{item.priority}</p>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Admin