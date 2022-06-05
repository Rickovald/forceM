-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июн 05 2022 г., 17:40
-- Версия сервера: 10.3.22-MariaDB
-- Версия PHP: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `fm`
--

-- --------------------------------------------------------

--
-- Структура таблицы `banners`
--

CREATE TABLE `banners` (
  `id` int(11) NOT NULL,
  `img` varchar(50) NOT NULL,
  `head` varchar(100) NOT NULL,
  `button` varchar(20) NOT NULL,
  `href` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `banners`
--

INSERT INTO `banners` (`id`, `img`, `head`, `button`, `href`) VALUES
(1, '/images/concert4.jpg', 'Квартирник от МосквоМеняльника (Live)', 'Смотреть', 'https://vk.com/video/@domnepomer?z=video-205245784_456239041%2Fclub205245784%2Fpl_-205245784_-2'),
(2, '/images/alb.jpg', 'Дебютный альбом', 'Слушать', 'https://vk.com/audios-184530709');

-- --------------------------------------------------------

--
-- Структура таблицы `concerts`
--

CREATE TABLE `concerts` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `country` varchar(50) NOT NULL,
  `tickets_price` varchar(40) NOT NULL,
  `tickets` varchar(400) NOT NULL,
  `city` varchar(50) NOT NULL,
  `place` varchar(20) NOT NULL,
  `group` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `concerts`
--

INSERT INTO `concerts` (`id`, `date`, `country`, `tickets_price`, `tickets`, `city`, `place`, `group`) VALUES
(1, '2022-02-25', 'Россия', '200 ₽', 'https://vk.com/domnepomer?w=wall-205245784_439', 'Москва', 'МосквоМеняльник', 'https://vk.com/force_minor');

-- --------------------------------------------------------

--
-- Структура таблицы `concert_program`
--

CREATE TABLE `concert_program` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `cover` tinyint(1) NOT NULL,
  `difficulty` tinyint(4) NOT NULL,
  `comments` varchar(100) NOT NULL,
  `place` int(11) NOT NULL,
  `concert_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `concert_program`
--

INSERT INTO `concert_program` (`id`, `name`, `cover`, `difficulty`, `comments`, `place`, `concert_name`) VALUES
(1, 'Force-Minor - Кривой Роцк', 0, 3, 'Трудно держать ритм на слабой доле. Насть, пропиши барабаны', 1, 'Москвоменяльник');

-- --------------------------------------------------------

--
-- Структура таблицы `discography`
--

CREATE TABLE `discography` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `year` smallint(6) NOT NULL,
  `href` varchar(100) NOT NULL,
  `image` varchar(70) NOT NULL,
  `desc` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `discography`
--

INSERT INTO `discography` (`id`, `name`, `year`, `href`, `image`, `desc`) VALUES
(1, 'Debut', 2022, 'https://vk.com/music/playlist/-184530709_1', '/images/debut.webp', 'Дебютный альбом нашей группы состоящий из совершенно разношерстных песен, ибо каждый вложился в него по своему, но это не делает общую картину хуже:)');

-- --------------------------------------------------------

--
-- Структура таблицы `songs`
--

CREATE TABLE `songs` (
  `id` int(11) NOT NULL,
  `id_in_album` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `album_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `songs`
--

INSERT INTO `songs` (`id`, `id_in_album`, `name`, `album_id`) VALUES
(1, 1, 'Мечты', 1),
(2, 2, 'Тени', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `role` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `password` varchar(256) NOT NULL,
  `hint` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `role`, `name`, `password`, `hint`) VALUES
(1, 'admin', 'ricko', '$2b$10$UfKtj8CTxfQsQiG.sAvz3.UEQWWj2B.K9aai9GhadYusxdt2ylNKm', 'проверь хеши!');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `banners`
--
ALTER TABLE `banners`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `concerts`
--
ALTER TABLE `concerts`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `concert_program`
--
ALTER TABLE `concert_program`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `discography`
--
ALTER TABLE `discography`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `songs`
--
ALTER TABLE `songs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_in_album` (`id_in_album`),
  ADD KEY `album_id` (`album_id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `banners`
--
ALTER TABLE `banners`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `concerts`
--
ALTER TABLE `concerts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `concert_program`
--
ALTER TABLE `concert_program`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `discography`
--
ALTER TABLE `discography`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `songs`
--
ALTER TABLE `songs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `songs`
--
ALTER TABLE `songs`
  ADD CONSTRAINT `songs_ibfk_1` FOREIGN KEY (`album_id`) REFERENCES `discography` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
