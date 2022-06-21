import s from "./banners.module.sass";
import { useState } from "react";
import upload from "../../../img/admin/download.png";
import BannersStore from "../../../stores/BannersStore";

const Banner = (props) => {
  const [active, setActive] = useState(false);
  const [check, setCheck] = useState("outer");
  const [drag, setDrag] = useState(false);

  const [banner, setBanner] = useState(props.item.head);
  const [button, setButton] = useState(props.item.button);
  const [href, setHref] = useState(props.item.href);
  const [image, setImage] = useState(props.item.img);
  const [imgPublic, setImgPublic] = useState({});
  const [imgPreview, setImgPreview] = useState("");

  const toggleActive = () => {
    setActive((active) => (active = !active));
  };

  const dragInHandler = (e) => {
    e.preventDefault();
    setDrag(true);
  };

  const dragLeaveHandler = (e) => {
    e.preventDefault();
    setDrag(false);
  };
  const dropHandler = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];

    const data = new FormData();
    let reader = new FileReader(file);
    // reader.readAsText(file);

    reader.onloadend = () => {
      setImgPreview(reader.result);
    };

    reader.readAsDataURL(file);

    data.append("newimg", file);

    console.log(typeof file);
    console.log("Объект form-data", data);
    console.log("Переменная с файлом", data.get("newimg"));
    setImage(`/images/${file.name}`);
    // setImgPublic(data);
    setDrag(false);
  };

  const submit = () => {
    BannersStore.putBanner(props.item.id, image, banner, button, href, check);
    BannersStore.putImg(imgPublic);
  };



  return (
    <div
      className={
        // `${s.banners__card}`
        active
          ? `${s.banners__card} ${s.banners__card_active}`
          : `${s.banners__card}`
      }
    >
      <h2 onClick={() => toggleActive(true)} className={s.banners__name}>
        {props.item.head}
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
              placeholder={props.item.head}
            />
          </div>
          <div className={s.banners__inputWrapper}>
            <p className={s.banners__inputLabel}>Текст кнопки:</p>
            <input
              onChange={(e) => setButton(e.target.value)}
              type="text"
              className={s.banners__input}
              placeholder={props.item.button}
            />
          </div>
          <div className={s.banners__inputWrapper}>
            <p className={s.banners__inputLabel}>Ссылка:</p>
            <input
              onChange={(e) => setHref(e.target.value)}
              type="text"
              className={s.banners__input}
              placeholder={props.item.href}
            />
          </div>
          <div className={s.banners__inputWrapper}>
            <p className={s.banners__inputLabel}>Тип ссылки</p>
            <div>
              <div>
                <input
                  name={"hreftype"}
                  onChange={() => setCheck("outer")}
                  type={"radio"}
                  // checked={check === "outer" && true}
                />{" "}
                внешнняя
              </div>
              <div>
                <input
                  name={"hreftype"}
                  onChange={() => setCheck("inner")}
                  type={"radio"}
                  // checked={check === "inner" && true}
                />{" "}
                внутренняя
              </div>
            </div>
          </div>
        </div>
        <div className={s.banners__imgSetter}>
          <p style={{ marginBottom: "20px" }}>Изображение:</p>
          {!drag ? (
            <p
              onDragStart={(e) => dragInHandler(e)}
              onDragLeave={(e) => dragLeaveHandler(e)}
              onDragOver={(e) => dragInHandler(e)}
              className={s.banners__drag_out}
            >
              <img
                className={s.banners__old_img}
                alt="banner_old"
                src={imgPreview ? imgPreview : props.item.img}
                style={{ marginBottom: "10px" }}
              />
            </p>
          ) : (
            <div
              onDragStart={(e) => dragInHandler(e)}
              onDragLeave={(e) => dragLeaveHandler(e)}
              onDragOver={(e) => dragInHandler(e)}
              onDrop={(e) => dropHandler(e)}
              className={s.banners__drag_on}
            >
              <img alt="upload" src={upload} style={{ marginBottom: "10px" }} />
              Отпустите файл чтобы загрузить его
            </div>
          )}
        </div>

        <div className={s.banners__submit} onClick={submit}>
          Сохранить
        </div>
      </div>
    </div>
  );
};

export default Banner;
