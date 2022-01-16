import s from "./admin.module.sass"
import {wrapper} from '../presets/wrapper.module.sass'

const Admin = () => {
	return (
		<div className={`${s.admin} ${wrapper}`}>
			Admin
		</div>
	)
}

export default Admin