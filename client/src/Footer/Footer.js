import s from "./footer.module.sass";
import tt from "../img/social/TikTok_white.svg";
import vk from "../img/social/VK_white.svg";

const Footer = () => {
  return (
    <div className={s.footer}>
      <div>© 2022 Все права защищены. Официальный сайт группы Force Minor.</div>
      <div className={s.footer__social}>
        <a
          className={s.footer__href}
          href="https://www.tiktok.com/@forceminor_"
          target="_blank"
          rel="noreferrer"
        >
          <img src={tt} alt="tiktok" className={s.footer__icon} />
        </a>
        <a
          className={s.footer__href}
          href="https://vk.com/force_minor"
          target="_blank"
          rel="noreferrer"
        >
          <img src={vk} alt="vk" className={s.footer__icon} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
