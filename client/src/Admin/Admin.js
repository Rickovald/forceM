import { observer } from "mobx-react-lite";
import { useState } from "react";
import UserStore from "../stores/UserStore";
import s from "./admin.module.sass";
import Albums from "./modules/Albums/Albums";
import AuthPopup from "./modules/AuthPopup/AuthPopup";
import Banners from "./modules/Banners/Banners";
import Concerts from "./modules/Concerts/Concerts";
import Program from "./modules/Program/Program";

const Admin = observer(() => {
  const [activeTab, setActiveTab] = useState(0);
  if (!UserStore.getAuth()) {
    return <AuthPopup />;
  }
  return (
    <div className={`${s.admin}`}>
      {/* <div>
        <button
          onClick={() => {
            localStorage.setItem("role", "admin");
          }}
        >
          хуй
        </button>
        <button
          onClick={() => {
            localStorage.removeItem("role");
          }}
        >
          пизда
        </button>
      </div> */}
      <div className={s.admin__aside}>
        <div
          onClick={() => {
            setActiveTab(0);
          }}
          className={`${s.admin__select}
						 ${0 === activeTab && s.admin__select_active}`}
        >
          Программа на концерт
        </div>
        <div
          onClick={() => {
            setActiveTab(1);
          }}
          className={`${s.admin__select}
						 ${1 === activeTab && s.admin__select_active}`}
        >
          Баннеры
        </div>
        <div
          onClick={() => {
            setActiveTab(2);
          }}
          className={`${s.admin__select}
						 ${2 === activeTab && s.admin__select_active}`}
        >
          Альбомы
        </div>
        <div
          onClick={() => {
            setActiveTab(3);
          }}
          className={`${s.admin__select}
						 ${3 === activeTab && s.admin__select_active}`}
        >
          Концерты
        </div>
      </div>

      {activeTab === 0 && <Program />}
      {activeTab === 1 && <Banners />}
      {activeTab === 2 && <Albums />}
      {activeTab === 3 && <Concerts />}
    </div>
  );
});

export default Admin;
