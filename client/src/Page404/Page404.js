import s from "./page404.module.sass";

const Page404 = () => {
  return (
    <div
      className={`${s.page404}`}
    >
      <p>Ошибка 404</p>
      <p>Такой страницы не существует</p>

    </div>
  );
};

export default Page404;
