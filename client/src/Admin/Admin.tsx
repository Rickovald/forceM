import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import UserStore from '../stores/UserStore';
import s from './admin.module.sass';
import Albums from './modules/Albums/Albums';
import AuthPopup from './modules/AuthPopup/AuthPopup';
import Banners from './modules/Banners/Banners';
import Concerts from './modules/Concerts/Concerts';
import Program from './modules/Program/Program';
import Songs from './modules/Songs/Songs';

const Admin = observer(() => {
    const [activeTab, setActiveTab] = useState("0");
    const [user, setUser] = useState(localStorage.getItem('user'));

    const storage_tab = localStorage.getItem('admin_tab');

    useEffect(() => {
        if (storage_tab) {
            setActiveTab(storage_tab);
        }
    }, [storage_tab]);

    const tabSetter = (tab: string) => {
        setActiveTab(tab);
        localStorage.setItem('admin_tab', tab);
    };

    const toLogOut = async () => {
        await UserStore.logout();
        setUser(null);
    };

    if (user) {
        return (
            <div className={`${s.admin}`}>
                <div className={s.admin__aside}>
                    <div
                        onClick={() => {
                            tabSetter("0");
                        }}
                        className={`${s.admin__select}
						 ${activeTab === "0" && s.admin__select_active}`}
                    >
                        Программа на концерт
                    </div>
                    <div
                        onClick={() => {
                            tabSetter("1");
                        }}
                        className={`${s.admin__select}
						 ${activeTab === "1" && s.admin__select_active}`}
                    >
                        Баннеры
                    </div>
                    <div
                        onClick={() => {
                            tabSetter("2");
                        }}
                        className={`${s.admin__select}
						 ${activeTab === "2" && s.admin__select_active}`}
                    >
                        Альбомы
                    </div>
                    <div
                        onClick={() => {
                            tabSetter("3");
                        }}
                        className={`${s.admin__select}
						 ${activeTab === "3" && s.admin__select_active}`}
                    >
                        Концерты
                    </div>
                    <div
                        onClick={() => {
                            tabSetter("4");
                        }}
                        className={`${s.admin__select}
						 ${activeTab === "4" && s.admin__select_active}`}
                    >
                        Песни
                    </div>

                    <div className={`${s.admin__logout}`} onClick={() => toLogOut()}>
                        выход
                    </div>
                </div>

                {activeTab === "0" && <Program />}
                {activeTab === "1" && <Banners />}
                {activeTab === "2" && <Albums />}
                {activeTab === "3" && <Concerts />}
                {activeTab === "4" && <Songs />}
            </div>
        );
    } else {
        return <AuthPopup setUser={setUser} />;
    }
});

export default Admin;