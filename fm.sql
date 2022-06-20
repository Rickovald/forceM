-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июн 20 2022 г., 19:54
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
-- Структура таблицы `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `password` varchar(256) NOT NULL,
  `refreshToken` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `admins`
--

INSERT INTO `admins` (`id`, `name`, `password`, `refreshToken`) VALUES
(0, 'ricko', '$2b$10$UfKtj8CTxfQsQiG.sAvz3.UEQWWj2B.K9aai9GhadYusxdt2ylNKm', ''),
(5, 'Torvunheart', '$2b$10$vQUwsEulmag07e/VFBxT0OBwv5em4MBDeIpoGvWL404yYyAKT4U36', ''),
(6, 'Tortan', '$2b$10$V81C2ydYZe38DVoc0Xw/OezQL3eXVN/a3/.JB3YHt2sbNjGxHRXEK', '');

-- --------------------------------------------------------

--
-- Структура таблицы `banners`
--

CREATE TABLE `banners` (
  `id` int(11) NOT NULL,
  `img` varchar(50) NOT NULL,
  `head` varchar(100) NOT NULL,
  `button` varchar(20) NOT NULL,
  `href` varchar(100) NOT NULL,
  `href_type` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `banners`
--

INSERT INTO `banners` (`id`, `img`, `head`, `button`, `href`, `href_type`) VALUES
(1, '/images/concert4.jpg', 'Квартирник от МосквоМеняльника (Live)', 'Смотреть', 'https://vk.com/video/@domnepomer?z=video-205245784_456239041%2Fclub205245784%2Fpl_-205245784_-2', 'outer'),
(2, '/images/alb.jpg', 'Дебютный альбом', 'Слушать', 'https://vk.com/audios-184530709', 'outer');

-- --------------------------------------------------------

--
-- Структура таблицы `concerts`
--

CREATE TABLE `concerts` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `concert_name` varchar(50) NOT NULL,
  `tickets_price` varchar(40) NOT NULL,
  `tickets` varchar(400) NOT NULL,
  `city` varchar(50) NOT NULL,
  `place` varchar(20) NOT NULL,
  `group` varchar(400) NOT NULL,
  `country` varchar(50) NOT NULL,
  `main_album` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `concerts`
--

INSERT INTO `concerts` (`id`, `date`, `concert_name`, `tickets_price`, `tickets`, `city`, `place`, `group`, `country`, `main_album`) VALUES
(1, '2022-02-25', 'Да будет форс минор', '200 ₽', 'https://vk.com/domnepomer?w=wall-205245784_439', 'Москва', 'МосквоМеняльник', 'https://vk.com/force_minor', 'Россия', 1),
(2, '2022-06-26', 'Дебюты и проводы', '300 ₽', 'https://vk.com/force_minor', 'Москва', 'Спотыкач', 'https://vk.com/spotycach', 'Россия', 1),
(4, '2022-07-27', 'Новые музыканты!', '300 ₽', 'https://vk.com/force_minor', 'москва', 'Еще не определено', 'https://vk.com/force_minor', 'Россия', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `concert_program`
--

CREATE TABLE `concert_program` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `difficulty` varchar(30) NOT NULL,
  `comments` varchar(100) NOT NULL,
  `place` int(11) NOT NULL,
  `concert_name` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `concert_program`
--

INSERT INTO `concert_program` (`id`, `name`, `difficulty`, `comments`, `place`, `concert_name`) VALUES
(1, 'Force-Minor - Кривой Роцк', 'Средняя', 'Трудно держать ритм на слабой доле. Дил, пропиши барабаны', 1, 2),
(3, 'Force-Minor - Не летов', 'Простая', 'Надо подумать над соло и дописать предприпев', 2, 2),
(13, 'Force-Minor - Ееуеуеуе', 'Сложная', 'Больше металла, новая мелодическая линия, текст писать на квенья', 3, 2),
(15, 'Force-Minor - Perdelka', 'Простая', 'Стоит ли вообще ее оставлять...', 4, 2),
(17, 'Force-Minor - новая песня', 'Сложность', 'Комментарий', 5, 2),
(18, 'Force-Minor - Тусклый свет', 'Простая', 'Лид партию сделать, легкая ударка', 6, 2);

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

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `banners`
--
ALTER TABLE `banners`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `concerts`
--
ALTER TABLE `concerts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `concert_name` (`concert_name`),
  ADD KEY `main_album` (`main_album`);

--
-- Индексы таблицы `concert_program`
--
ALTER TABLE `concert_program`
  ADD PRIMARY KEY (`id`),
  ADD KEY `concert_name` (`concert_name`);

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
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `banners`
--
ALTER TABLE `banners`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `concerts`
--
ALTER TABLE `concerts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `concert_program`
--
ALTER TABLE `concert_program`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

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
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `concerts`
--
ALTER TABLE `concerts`
  ADD CONSTRAINT `concerts_ibfk_1` FOREIGN KEY (`main_album`) REFERENCES `discography` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `concert_program`
--
ALTER TABLE `concert_program`
  ADD CONSTRAINT `concert_program_ibfk_1` FOREIGN KEY (`concert_name`) REFERENCES `concerts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `songs`
--
ALTER TABLE `songs`
  ADD CONSTRAINT `songs_ibfk_1` FOREIGN KEY (`album_id`) REFERENCES `discography` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
