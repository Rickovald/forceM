import React from "react";
import { NavLink } from "react-router-dom"
import s from "./navigation.module.sass"
// import {wrapper} from '../presets/wrapper.module.sass'
import logo from "../img/diz/logo.png"
// import logo from "../img/diz/logo-trans.png"

const Navigation = () => {
	return (
		<div className={`${s.navigation}`}>
			<NavLink
					className={s.navigation__logo}
					to='/' 
				>
				<img src={logo} alt="logo"/>
			</NavLink>
			<div className={s.navigation__right}>
				<NavLink
					className={
						({ isActive }) => 
						s.navigation__link + " " + (isActive ? s.activated : "")
					}
					to='/' 
				>
					<span className={s.navigation__link_item}>Главная</span>
				</NavLink>
				<NavLink
					className={
						({ isActive }) => 
						s.navigation__link + " " + (isActive ? s.activated : "")
					}
					to='/albums' 
				>
					<span className={s.navigation__link_item}>Дискография</span>
				</NavLink>
				<NavLink
					className={
						({ isActive }) => 
						s.navigation__link + " " + (isActive ? s.activated : "")
					}
					to='/concerts' 
				>
					<span className={s.navigation__link_item}>Концерты</span>
				</NavLink>
				<a
					className={
						s.navigation__link
					}
					href='https://www.instagram.com/craftdreams_/' 
				>
					<span className={s.navigation__link_item}>Магазин</span>
				</a>
				<NavLink
					className={
						({ isActive }) => 
						s.navigation__link + " " + (isActive ? s.activated : "")
					}
					to='/contact' 
				>
					<span className={s.navigation__link_item}>Контакты</span>
				</NavLink>
			</div>
		</div>
	)
}

export default Navigation