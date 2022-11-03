import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './navigation.module.sass';
import UserStore from '../stores/UserStore';

import { observer } from 'mobx-react-lite';
const Burger = observer(() => {
    const [active, setActive] = useState(false);

    return (
        <div className={`${s.burger}`}>
            <div className={s.burger__button} onClick={() => setActive(!active)}>
                <span
                    className={
                        active
                            ? `${s.burger__filling} ${s.burger__filling_active}`
                            : s.burger__filling
                    }
                ></span>
                <span
                    className={
                        active
                            ? `${s.burger__filling2} ${s.burger__filling2_active}`
                            : s.burger__filling2
                    }
                ></span>
                <span
                    className={
                        active
                            ? `${s.burger__filling3} ${s.burger__filling3_active}`
                            : s.burger__filling3
                    }
                ></span>
            </div>
            <div
                className={
                    active
                        ? `${s.burger__wrapper} ${s.burger__wrapper_active}`
                        : s.burger__wrapper
                }
                onClick={() => setActive(false)}
            >
                <div
                    className={
                        active
                            ? `${s.burger__content} ${s.burger__content_active}`
                            : s.burger__content
                    }
                    onClick={(e) => e.stopPropagation()}
                >
                    <NavLink
                        className={({ isActive }) =>
                            s.burger__link + ' ' + (isActive ? s.activated : '')
                        }
                        to="/"
                    >
                        <span className={s.burger__link_item}>Главная</span>
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            s.burger__link + ' ' + (isActive ? s.activated : '')
                        }
                        to="/albums"
                    >
                        <span className={s.burger__link_item}>Дискография</span>
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            s.burger__link + ' ' + (isActive ? s.activated : '')
                        }
                        to="/concerts"
                    >
                        <span className={s.burger__link_item}>Концерты</span>
                    </NavLink>
                    <a
                        className={s.burger__link}
                        href="https://www.instagram.com/craftdreams_/"
                    >
                        <span className={s.burger__link_item}>Магазин</span>
                    </a>
                    {UserStore.getAuth() && (
                        <NavLink
                            className={({ isActive }) =>
                                s.burger__link + ' ' + (isActive ? s.activated : '')
                            }
                            to="/admin"
                        >
                            <span className={s.burger__link_item}>Админ</span>
                        </NavLink>
                    )}
                </div>
            </div>
        </div>
    );
});

export default Burger;