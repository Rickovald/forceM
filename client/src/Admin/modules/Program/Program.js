import { useEffect, useState } from 'react';
import ProgramStore from '../../../stores/ProgramStore';
import s from './program.module.sass';
import del from '../../../img/icons/close.svg';
import Dropdown from './Dropdown';
import { observer } from 'mobx-react-lite';

const Program = observer(() => {
    const [program, setProgram] = useState([]);
    const data = ProgramStore.getProgram();

    const byField = (field) => {
        return (a, b) => (a[field] > b[field] ? 1 : -1);
    };

    useEffect(() => {
        if (data) {
            data.sort(byField('place'));
            setProgram(data);
        }
    }, [data]);
    const deleteSong = async (id) => {
        await ProgramStore.deleteSong(id);

        await ProgramStore.updateProgram();
        const data = await ProgramStore.getProgram().data;
        setProgram(data);
    };
    const putToSong = async (e, id, data) => {
        if (e.target.innerText !== data) {
            ProgramStore.putSong(
                id,
                e.target.innerText,
                e.target.attributes.name.value
            );
        }

        await ProgramStore.updateProgram();
        const newdata = await ProgramStore.getProgram().data;
        setProgram(newdata);
    };

    const addSong = async () => {
        await ProgramStore.createSong(
            'Force-Minor - Название',
            'Сложность',
            'Комментарий',
            program[program.length - 1].place + 1,
            2
        );
        await ProgramStore.updateProgram();
        const data = await ProgramStore.getProgram().data;
        setProgram(data);
    };
    return (
        <div className={`${s.program}`}>
            {program.map((item, index) => {
                return (
                    <div key={`song_${index}`} className={s.program__song}>
                        <div className={s.program__itemWrapper}>
                            <div
                                contentEditable="true"
                                suppressContentEditableWarning={true}
                                onBlur={(e) => putToSong(e, item.id, item.place)}
                                style={{
                                    width: '53px'
                                }}
                                className={s.program__songItem}
                            >
                                {item.place}
                            </div>
                        </div>
                        <div className={s.program__itemWrapper}>
                            <div
                                contentEditable="true"
                                suppressContentEditableWarning={true}
                                onBlur={(e) => putToSong(e, item.id, item.difficulty)}
                                style={{
                                    width: '135px',
                                    textAlign: 'center',
                                    justifyContent: 'center'
                                }}
                                className={s.program__songItem}
                            >
                                {item.difficulty}
                            </div>
                        </div>
                        <div className={s.program__itemWrapper}>
                            <div
                                contentEditable="true"
                                suppressContentEditableWarning={true}
                                onBlur={(e) => putToSong(e, item.id, item.name)}
                                style={{
                                    width: '280px'
                                }}
                                className={s.program__songItem}
                            >
                                {item.name}
                            </div>
                        </div>
                        <Dropdown item={item} putToSong={putToSong} />
                        <div
                            className={s.program__delete}
                            onClick={() => deleteSong(item.id)}
                        >
                            <img src={del} alt="delete" />
                        </div>
                    </div>
                );
            })}
            <div className={s.program__add} onClick={() => addSong()}>
                <img src={del} alt="delete" />
            </div>
        </div>
    );
});

export default Program;