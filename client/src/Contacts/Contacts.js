// import { useEffect, useRef } from "react";
import s from "./contacts.module.sass";
// import {wrapper} from '../presets/wrapper.module.sass'

const Contacts = (props) => {
  return (
    <div
      className={`${s.contacts} ${props.active && s.active1}`}
      onClick={() => props.setActive(false)}
    >
      <div className={s.contacts__back} />
      <div
	  	onClick={e => e.stopPropagation()}
	  	className={`${s.contacts__content} ${props.active && s.active}`}>
        По всем вопросам обращаться по почте rikonvald@gmail.com
		или по телефону 8&nbsp;(901)&nbsp;185&nbsp;87&nbsp;91
      </div>
    </div>
  );
};

export default Contacts;
