import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './navigation.module.sass';
import logo from '../img/diz/logo.png';
import UserStore from '../stores/UserStore';
import Contacts from '../Contacts/Contacts';

import { observer } from 'mobx-react-lite';
import Burger from './Burger';
const Navigation = observer(() => {
    const [contacts, setContacts] = useState(0);
    return (
        <div className={`${s.navigation}`}>
            <NavLink className={s.navigation__logo} to="/">
                <img src={logo} alt="logo" />
            </NavLink>
            <div className={s.navigation__right}>
                <NavLink
                    className={({ isActive }) =>
                        s.navigation__link + ' ' + (isActive ? s.activated : '')
                    }
                    to="/"
                >
                    <span className={s.navigation__link_item}>Главная</span>
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        s.navigation__link + ' ' + (isActive ? s.activated : '')
                    }
                    to="/albums"
                >
                    <span className={s.navigation__link_item}>Дискография</span>
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        s.navigation__link + ' ' + (isActive ? s.activated : '')
                    }
                    to="/concerts"
                >
                    <span className={s.navigation__link_item}>Концерты</span>
                </NavLink>
                <a
                    className={s.navigation__link}
                    href="https://www.instagram.com/craftdreams_/"
                >
                    <span className={s.navigation__link_item}>Магазин</span>
                </a>
                {UserStore.getAuth() && (
                    <NavLink
                        className={({ isActive }) =>
                            s.navigation__link + ' ' + (isActive ? s.activated : '')
                        }
                        to="/admin"
                    >
                        <span className={s.navigation__link_item}>Админ</span>
                    </NavLink>
                )}
                <div onClick={() => setContacts(true)} className={s.navigation__link}>
                    <span className={s.navigation__link_item}>Контакты</span>
                </div>
            </div>
            <Contacts active={contacts} setActive={setContacts} />

            <Burger/>
        </div>
    );
});

export default Navigation;