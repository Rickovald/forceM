import { useState } from "react";
import UserStore from "../../../stores/UserStore";
import s from "./auth.module.sass";

const AuthPopup = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={`${s.popup}`}>
      <div className={s.popup__form}>
        <input
          className={s.popup__input}
          onChange={(e) => setLogin(e.target.value)}
          value={login}
          type="text"
          placeholder="Логин"
          required
        />
        <input
          className={s.popup__input}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Пароль"
          required
        />

        <button 
          className={s.popup__button} onClick={() => UserStore.registration(login, password)}>
          Вход
        </button>
      </div>
    </div>
  );
};

export default AuthPopup;
