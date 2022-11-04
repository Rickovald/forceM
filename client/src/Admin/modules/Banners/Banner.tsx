import s from './banners.module.sass';
import { FC, useState } from 'react';
import upload from '../../../img/admin/download.png';
import BannersStore from '../../../stores/BannersStore';
import del from '../../../img/icons/close.svg';
import { IMainBanner } from "../../../presets/interfaces"

interface IBanner {
    id: number;
    propHead: string;
    propButton: string;
    propHref: string;
    propImg: string;
    setBanners: (data: IMainBanner[]) => void
}

const Banner: FC<IBanner> = ({id, propHead, propButton, propHref, propImg, setBanners}) => {
    const [active, setActive] = useState(false);
    const [check, setCheck] = useState('outer');
    const [drag, setDrag] = useState(false);

    const [banner, setBanner] = useState(propHead);
    const [button, setButton] = useState(propButton);
    const [href, setHref] = useState(propHref);
    const [image, setImage] = useState(propImg);
    const [imgPublic, setImgPublic] = useState({});
    const [imgPreview, setImgPreview] = useState('');

    const toggleActive = () => {
        setActive((active) => (active = !active));
    };

    const dragInHandler = (event: any) => {
        event.preventDefault();
        setDrag(true);
    };

    const dragLeaveHandler = (event: any) => {
        event.preventDefault();
        setDrag(false);
    };
    const dropHandler = (event: any) => {
        // e.preventDefault();
        // const file = e.dataTransfer.files[0];

        // const data = new FormData();
        // const reader = new FileReader(file);

        // reader.onloadend = () => {
        //     setImgPreview(reader.result);
        // };

        // reader.readAsDataURL(file);

        // data.append('newimg', file);

        // console.log(typeof file);
        // console.log('Объект form-data', data);
        // console.log('Переменная с файлом', data.get('newimg'));
        // setImage(`/images/${file.name}`);
        // setImgPublic(data);
        // setDrag(false);
    };

    const deleteSong = async (id: number) => {
        console.log(id);
        await BannersStore.deleteBanner(id);

        await BannersStore.updateBanners();
        const data = await BannersStore.getBanners();
        setBanners(data);
    };

    const submit = () => {
        BannersStore.putBanner(id, image, banner, button, href, check);
        // BannersStore.putImg(imgPublic);
    };

    return (
        <div
            className={
                active
                    ? `${s.banners__card} ${s.banners__card_active}`
                    : `${s.banners__card}`
            }
        >
            <h2 onClick={() => toggleActive()} className={s.banners__name}>
                {propHead}
                <div
                    className={`${s.banners__dropdown} ${
                        active ? s.banners__dropdown_active : s.banners__dropdown_inactive
                    }`}
                />
            </h2>

            <div
                className={
                    active
                        ? `${s.banners__form} ${s.banners__form_active}`
                        : `${s.banners__form}`
                }
            >
                <div className={s.banners__inputs}>
                    <div className={s.banners__inputWrapper}>
                        <p className={s.banners__inputLabel}>Текст баннера:</p>
                        <input
                            onChange={(e) => setBanner(e.target.value)}
                            type="text"
                            className={s.banners__input}
                            placeholder={propHead}
                        />
                    </div>
                    <div className={s.banners__inputWrapper}>
                        <p className={s.banners__inputLabel}>Текст кнопки:</p>
                        <input
                            onChange={(e) => setButton(e.target.value)}
                            type="text"
                            className={s.banners__input}
                            placeholder={propButton}
                        />
                    </div>
                    <div className={s.banners__inputWrapper}>
                        <p className={s.banners__inputLabel}>Ссылка:</p>
                        <input
                            onChange={(e) => setHref(e.target.value)}
                            type="text"
                            className={s.banners__input}
                            placeholder={propHref}
                        />
                    </div>
                    <div className={s.banners__inputWrapper}>
                        <p className={s.banners__inputLabel}>Тип ссылки</p>
                        <div>
                            <div>
                                <input
                                    name={'hreftype'}
                                    onChange={() => setCheck('outer')}
                                    type={'radio'}
                                />{' '}
                                    внешнняя
                            </div>
                            <div>
                                <input
                                    name={'hreftype'}
                                    onChange={() => setCheck('inner')}
                                    type={'radio'}
                                />{' '}
                                    внутренняя
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.banners__imgSetter}>
                    <p style={{ marginBottom: '20px' }}>Изображение:</p>
                    {!drag
                        ? (
                            <p
                                onDragStart={(e) => dragInHandler(e)}
                                onDragLeave={(e) => dragLeaveHandler(e)}
                                onDragOver={(e) => dragInHandler(e)}
                                className={s.banners__drag_out}
                            >
                                <img
                                    className={s.banners__old_img}
                                    alt="banner_old"
                                    src={imgPreview || propImg}
                                    style={{ marginBottom: '10px' }}
                                />
                            </p>
                        )
                        : (
                            <div
                                onDragStart={(e) => dragInHandler(e)}
                                onDragLeave={(e) => dragLeaveHandler(e)}
                                onDragOver={(e) => dragInHandler(e)}
                                onDrop={(e) => dropHandler(e)}
                                className={s.banners__drag_on}
                            >
                                <img alt="upload" src={upload} style={{ marginBottom: '10px' }} />
                                Отпустите файл чтобы загрузить его
                            </div>
                        )}
                </div>

                <div className={s.banners__submit} onClick={submit}>
                    Сохранить
                </div>
            </div>

            <div
                className={s.banners__delete}
                onClick={() => deleteSong(id)}
            >
                <img src={del} alt="delete" />
            </div>
        </div>
    );
};

export default Banner;