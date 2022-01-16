import {wrapper} from '../presets/wrapper.module.sass'
import s from "./concerts.module.sass"

const Concerts = () => {
	return (
		<div className={`${s.concerts} ${wrapper}`}>
			Concerts
		</div>
	)
}

export default Concerts