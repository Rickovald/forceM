import React, { useState } from "react";
import { NavLink } from "react-router-dom"
import s from "./navigation.module.sass"

const Navigation = () => {
	const [activeStyle] = useState({color: '#202020'})
	return (
		<div className={s.navigation}>
			{/* <NavLink activeStyle={activeStyle} to='/' > */}
				<span className={s.navigation__link}>домой</span>
			{/* </NavLink> */}
			{/* <NavLink activeStyle={activeStyle} to='/albums' > */}
				<span className={s.navigation__link}>альбомы</span>
			{/* </NavLink> */}
			{/* <NavLink activeStyle={activeStyle} to='/concerts' > */}
				<span className={s.navigation__link}>концерты</span>
			{/* </NavLink> */}
		</div>
	)
}

export default Navigation