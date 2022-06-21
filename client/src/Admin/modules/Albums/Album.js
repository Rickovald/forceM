import s from "./albums.module.sass";
import { useState } from "react";
import upload from "../../../img/admin/download.png";
// import AlbumsStore from "../../../stores/AlbumsStore";

const Album = (props) => {
  const [active, setActive] = useState(false);
  const [drag, setDrag] = useState(false);

  const [name, setName] = useState(props.item.name);
  const [year, setYear] = useState(props.item.year);
  const [desc, setDesc] = useState(props.item.desc);
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
    //console.log("Объект form-data", data);
    //console.log("Переменная с файлом", data.get("newimg"));
    setImage(`/images/${file.name}`);
    setImgPublic(data);
    setDrag(false);
  };

  const submit = () => {
    console.log(name, year, desc, image, imgPublic);
    // AlbumsStore.putAlbum(props.item.id, image, album, year, desc, check);
    // AlbumsStore.putImg(imgPublic);
  };

  return (
    <div
      className={
        // `${s.albums__card}`
        active
          ? `${s.albums__card} ${s.albums__card_active}`
          : `${s.albums__card}`
      }
    >
      <h2 onClick={() => toggleActive()} className={s.albums__name}>
        {props.item.name}
        <div
          className={`${s.albums__dropdown} ${
            active ? s.albums__dropdown_active : s.albums__dropdown_inactive
          }`}
        />
      </h2>

      <div
        className={
          active
            ? `${s.albums__form} ${s.albums__form_active}`
            : `${s.albums__form}`
        }
      >
        <div className={s.albums__inputs}>
          <div className={s.albums__inputWrapper}>
            <p className={s.albums__inputLabel}>Название:</p>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              className={s.albums__input}
              placeholder={props.item.name}
            />
          </div>
          <div className={s.albums__inputWrapper}>
            <p className={s.albums__inputLabel}>Год выпуска:</p>
            <input
              onChange={(e) => setYear(e.target.value)}
              type="text"
              className={s.albums__input}
              placeholder={props.item.year}
            />
          </div>
          <div className={s.albums__inputWrapper}>
            <p className={s.albums__inputLabel}>Описание:</p>
            <textarea
              onChange={(e) => setDesc(e.target.value)}
              type="text"
              className={`${s.albums__input} ${s.albums__input_big}`}
              placeholder={props.item.desc}
            />
          </div>
        </div>
        <div className={s.albums__imgSetter}>
          <p style={{ marginBottom: "20px" }}>Изображение:</p>
          {!drag ? (
            <p
              onDragStart={(e) => dragInHandler(e)}
              onDragLeave={(e) => dragLeaveHandler(e)}
              onDragOver={(e) => dragInHandler(e)}
              className={s.albums__drag_out}
            >
              <img
                className={s.albums__old_img}
                alt="album_old"
                src={imgPreview ? imgPreview : props.item.image}
                style={{ marginBottom: "10px" }}
              />
            </p>
          ) : (
            <div
              onDragStart={(e) => dragInHandler(e)}
              onDragLeave={(e) => dragLeaveHandler(e)}
              onDragOver={(e) => dragInHandler(e)}
              onDrop={(e) => dropHandler(e)}
              className={s.albums__drag_on}
            >
              <img alt="upload" src={upload} style={{ marginBottom: "10px" }} />
              Отпустите файл чтобы загрузить его
            </div>
          )}
        </div>

        <div className={s.albums__submit} onClick={submit}>
          Сохранить
        </div>
      </div>
    </div>
  );
};

export default Album;
