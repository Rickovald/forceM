import { useState } from "react";
import UserStore from "../../../stores/UserStore";
import s from "./auth.module.sass";

const AuthPopup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={`${s.popup}`}>
      <div>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="text"
          placeholder="Email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Пароль"
        />

        <button onClick={() => UserStore.registration(email, password)}>
          Регистрация
        </button>
      </div>
    </div>
  );
};

export default AuthPopup;
