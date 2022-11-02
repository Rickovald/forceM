import { FC } from 'react';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import s from './banner.module.sass';

interface IBanner {
    img: string;
    href: string;
    button: string;
    header: string;
}

const Banner: FC<IBanner> = ({ img, href, button, header }) => {
    const { width } = useWindowDimensions();
    return (
        <div className={s.banner}>
            <img
                className={s.banner__background}
                src={width >= 900
                    ? img
                    : `${img.split('.')[0]}_mob.${img.split('.')[1]}`
                }
                alt="background"
            />
            <div className={s.banner__content}>
                <h2 className={s.banner__head}>{header}</h2>
                <a
                    className={s.banner__button}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                >
                    {button}
                </a>
            </div>
        </div>
    );
};

Banner.defaultProps = { header: '', button: 'смотреть', img: 'img', href: '#' };

export default Banner;