-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Май 12 2022 г., 09:31
-- Версия сервера: 8.0.24
-- Версия PHP: 7.2.34

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
  `id` int NOT NULL,
  `img` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `head` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `button` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `href` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

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
  `id` int NOT NULL,
  `date` date NOT NULL,
  `country` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `tickets` varchar(400) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `city` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `place` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `group` varchar(400) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `concerts`
--

INSERT INTO `concerts` (`id`, `date`, `country`, `tickets`, `city`, `place`, `group`) VALUES
(1, '2022-02-25', 'Россия', 'free', 'Москва', 'Спроси Тортана', 'https://vk.com/force_minor');

-- --------------------------------------------------------

--
-- Структура таблицы `concert_program`
--

CREATE TABLE `concert_program` (
  `id` int NOT NULL,
  `name` varchar(30) NOT NULL,
  `cover` tinyint(1) NOT NULL,
  `difficulty` tinyint NOT NULL,
  `comments` varchar(100) NOT NULL,
  `place` int NOT NULL,
  `concert_name` varchar(30) NOT NULL,
  `tortan` tinyint(1) NOT NULL,
  `neru` tinyint(1) NOT NULL,
  `filar` tinyint(1) NOT NULL,
  `nikonn` tinyint(1) NOT NULL,
  `hira` tinyint(1) NOT NULL,
  `ricko` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `concert_program`
--

INSERT INTO `concert_program` (`id`, `name`, `cover`, `difficulty`, `comments`, `place`, `concert_name`, `tortan`, `neru`, `filar`, `nikonn`, `hira`, `ricko`) VALUES
(1, 'Force-Minor - Кривой Роцк', 0, 3, 'Трудно держать ритм на слабой доле. Насть, пропиши барабаны', 1, 'Тот куда Тортан позвал', 1, 0, 0, 0, 0, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `discography`
--

CREATE TABLE `discography` (
  `id` int NOT NULL,
  `name` varchar(50) NOT NULL,
  `year` smallint NOT NULL,
  `songlist` varchar(70) NOT NULL,
  `href` varchar(100) NOT NULL,
  `image` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `discography`
--

INSERT INTO `discography` (`id`, `name`, `year`, `songlist`, `href`, `image`) VALUES
(1, 'Debut', 2022, 'debutlist', 'https://vk.com/music/playlist/-184530709_1', 'debut.webp');

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
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `banners`
--
ALTER TABLE `banners`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `concerts`
--
ALTER TABLE `concerts`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `concert_program`
--
ALTER TABLE `concert_program`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `discography`
--
ALTER TABLE `discography`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
