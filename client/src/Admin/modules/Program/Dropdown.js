import { useState } from "react";
import s from "./program.module.sass";

const Dropdown = (props) => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive((active) => (active = !active));
		
  };
	console.log(props.item.id, active);
  return (
    <div className={s.program__commentWrapper}>
      <div
        contentEditable="true"
        suppressContentEditableWarning={true}
        name="comments"
				onBlur ={(e) => props.putToSong(e, props.item.id, props.item.comments)}
        className={`${s.program__songItem} ${s.program__comment} ${
          active ? s.program__comment_active : s.program__comment_inactive
        }`}
      >
        <p>{props.item.comments}</p>
      </div>
      <div className={`${s.program__dropdown} ${active? s.program__dropdown_active : s.program__dropdown_inactive}`} onClick={toggleActive}></div>
    </div>
  );
};

export default Dropdown;
