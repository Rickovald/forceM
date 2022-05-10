import s from "./albums.module.sass"
import {wrapper} from '../presets/wrapper.module.sass'

const Albums = () => {
	return (
		<div className={`${s.albums} ${wrapper}`}>
			Discography
		</div>
	)
}

export default Albums