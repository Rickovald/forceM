import { FC } from 'react';
import s from './banner.module.sass';
import { NavLink } from 'react-router-dom';
import useWindowDimensions from '../../hooks/useWindowDimensions';

interface IAlbumBanner {
    side: number;
    header: string;
    year: string;
    desc: string;
    img: string;
    id: number;
}

const Banner: FC<IAlbumBanner> = ({side, header, year, desc, img, id}) => {
    const { width } = useWindowDimensions();
    return (
        <div className={`${s['banner_' + side]} ${s.banner}`}>
            {width >= 768 && (
                <div className={s.banner__cover}>
                    <div className={s.banner__background}>
                        <img
                            className={s.banner__background_img}
                            src={img}
                            alt="background"
                        />
                    </div>
                </div>
            )}

            <div className={s.banner__content}

            >
                <h2 className={s.banner__head}>{`${header}, ${year}`}</h2>

                <p className={s.banner__desc}>{desc}</p>
                <NavLink
                    to={`/album/${id}`}
                    className={`${s['banner__button_' + side]} ${s.banner__button}`}
                >
                    Подробнее
                </NavLink>
            </div>
        </div>
    );
};

Banner.defaultProps = { header: '', img: 'img', year: '2022', desc: "", id: 0, side: 1 };

export default Banner;