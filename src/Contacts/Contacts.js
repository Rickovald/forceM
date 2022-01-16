import s from "./contacts.module.sass"
import {wrapper} from '../presets/wrapper.module.sass'

const Contacts = () => {
	return (
		<div className={`${s.contacts} ${wrapper}`}>
			Contacts
		</div>
	)
}

export default Contacts