
// import {wrapper} from '../presets/wrapper.module.sass'
// import ConcertsStore from '../stores/ConcertsStore';
import s from "./concerts.module.sass"

const Concerts = () => {
	// const [concerts, setConcerts] = useState()
	// // const concerts = ConcertsStore.getConcertsCorrectWayAsync()
	// console.log(toJS(concerts));
	return (
		<div className={`${s.concerts}`}>
			Concerts
		</div>
	)
}

export default Concerts