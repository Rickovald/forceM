import s from './albums.module.sass'
import { FC, useState } from 'react'
import upload from '../../../img/admin/download.png'
import React from 'react'

interface IConcerts {
  propName: string
  propYear: string
  propDesc: string
  propimg: string
}

const Album: FC<IConcerts> = ({ propName, propYear, propDesc, propimg }) => {
  const [active, setActive] = useState(false)
  const [drag, setDrag] = useState(false)

  const [name, setName] = useState(propName)
  const [year, setYear] = useState(propYear)
  const [desc, setDesc] = useState(propDesc)
  const [image, setImage] = useState(propimg)
  const [imgPublic, setImgPublic] = useState({})
  const [imgPreview, setImgPreview] = useState('')

  const toggleActive = (): void => {
    setActive((active) => (active = !active))
  }

  const dragInHandler = (event: any): void => {
    event.preventDefault()
    setDrag(true)
  }

  const dragLeaveHandler = (event: any): void => {
    event.preventDefault()
    setDrag(false)
  }
  const dropHandler = (event: any): void => {
    event.preventDefault()
    // const file = event.dataTransfer.files[0];

    // const data = new FormData();
    // const reader = new FileReader(file);

    // reader.onloadend = () => {
    //     setImgPreview(reader.result);
    // };

    // reader.readAsDataURL(file);

    // data.append('newimg', file);
    // setImage(`/images/${file.name}`);
    // setImgPublic(data);
    // setDrag(false);
    setImgPreview('---')
    setImage('---')
    setImgPublic('---')
    setDrag(false)
  }

  const submit = (): void => {
    console.log(name, year, desc, image, imgPublic)
  }

  return (
        <div
            className={
                active
                  ? `${s.albums__card} ${s.albums__card_active}`
                  : `${s.albums__card}`
            }
        >
            <h2 onClick={() => toggleActive()} className={s.albums__name}>
                {propName}
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
                            onChange={(event: any) => setName(event.target.value)}
                            type="text"
                            className={s.albums__input}
                            placeholder={propName}
                        />
                    </div>
                    <div className={s.albums__inputWrapper}>
                        <p className={s.albums__inputLabel}>Год выпуска:</p>
                        <input
                            onChange={(event: any) => setYear(event.target.value)}
                            type="text"
                            className={s.albums__input}
                            placeholder={propYear}
                        />
                    </div>
                    <div className={s.albums__inputWrapper}>
                        <p className={s.albums__inputLabel}>Описание:</p>
                        <textarea
                            onChange={(event: any) => setDesc(event.target.value)}
                            className={`${s.albums__input} ${s.albums__input_big}`}
                            placeholder={propDesc}
                        />
                    </div>
                </div>
                <div className={s.albums__imgSetter}>
                    <p style={{ marginBottom: '20px' }}>Изображение:</p>
                    {!drag
                      ? (
                            <p
                                onDragStart={(event) => dragInHandler(event)}
                                onDragLeave={(event) => dragLeaveHandler(event)}
                                onDragOver={(event) => dragInHandler(event)}
                                className={s.albums__drag_out}
                            >
                                <img
                                    className={s.albums__old_img}
                                    alt="album_old"
                                    src={imgPreview || propimg}
                                    style={{ marginBottom: '10px' }}
                                />
                            </p>
                        )
                      : (
                            <div
                                onDragStart={(event) => dragInHandler(event)}
                                onDragLeave={(event) => dragLeaveHandler(event)}
                                onDragOver={(event) => dragInHandler(event)}
                                onDrop={(event) => dropHandler(event)}
                                className={s.albums__drag_on}
                            >
                                <img alt="upload" src={upload} style={{ marginBottom: '10px' }} />
                                    Отпустите файл чтобы загрузить его
                            </div>
                        )}
                </div>

                <div className={s.albums__submit} onClick={submit}>
                    Сохранить
                </div>
            </div>
        </div>
  )
}

export default Album