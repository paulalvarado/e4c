-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-06-2023 a las 17:08:22
-- Versión del servidor: 8.0.32
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `e4c`
--
CREATE DATABASE IF NOT EXISTS `e4c` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `e4c`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pagos`
--

CREATE TABLE `pagos` (
  `id_pago` int NOT NULL,
  `id_usuario` int NOT NULL,
  `tipo_pago` int DEFAULT NULL,
  `monto` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cantidad` int DEFAULT NULL,
  `total` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `comentarios` text COLLATE utf8mb4_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `pagos`
--

INSERT INTO `pagos` (`id_pago`, `id_usuario`, `tipo_pago`, `monto`, `cantidad`, `total`, `fecha`, `comentarios`) VALUES
(1, 5, 1, '5', 6, '35', '2023-06-26', 'lorem ipsum'),
(2, 2, 1, '2', 1, NULL, '1970-01-01', NULL),
(3, 2, 1, '1', 1, NULL, '2023-06-26', NULL),
(4, 5, 1, '10', 3, NULL, '2023-06-29', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int NOT NULL,
  `username` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nombre` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `apellido` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contrasena` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tipo_usuario` int NOT NULL DEFAULT '2',
  `estado` int NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `username`, `nombre`, `apellido`, `email`, `contrasena`, `tipo_usuario`, `estado`) VALUES
(1, 'admin', 'Paúl', 'Pérez', 'paulperezsv@gmail.com', '21232f297a57a5a743894a0e4a801fc3', 1, 1),
(2, 'juan.gonzalez', 'Juana', 'González', 'juan.gonzalez@example.com', 'ee11cbb19052e40b07aac0ca060c23ee', 2, 1),
(3, 'maria.perez', 'María', 'Pérez', 'maria.perez@example.com', 'ee11cbb19052e40b07aac0ca060c23ee', 2, 1),
(4, 'pedro.rodriguez', 'Pedro', 'Rodríguez', 'pedro.rodriguez@example.com', 'ee11cbb19052e40b07aac0ca060c23ee', 2, 1),
(5, 'luisa.martinez', 'Luisa', 'Martínez', 'luisa.martinez@example.com', 'ee11cbb19052e40b07aac0ca060c23ee', 2, 1),
(6, 'ana.lopezaa', 'Anaa', 'Lópezaa', 'ana.lopez@example.coma', 'ee11cbb19052e40b07aac0ca060c23ee', 2, 1),
(7, 'carlos.fernandez', 'Carlos', 'Fernández', 'carlos.fernandez@example.com', 'ee11cbb19052e40b07aac0ca060c23ee', 2, 1),
(8, 'laura.ramirezz', 'Laura', 'Ramírez', 'laura.ramirez@example.com', 'ee11cbb19052e40b07aac0ca060c23ee', 2, 1),
(9, 'jose.torres', 'José', 'Torres', 'jose.torres@example.com', 'ee11cbb19052e40b07aac0ca060c23ee', 2, 1),
(10, 'sofia.vargas', 'Sofía', 'Vargas', 'sofia.vargas@example.com', 'ee11cbb19052e40b07aac0ca060c23ee', 2, 1),
(11, 'andres.lopez', 'Andrés', 'López', 'andres.lopez@example.com', 'ee11cbb19052e40b07aac0ca060c23ee', 2, 1),
(12, 'paola.rodriguez', 'Paola', 'Rodríguez', 'paola.rodriguez@example.com', 'ee11cbb19052e40b07aac0ca060c23ee', 2, 1),
(13, 'fernando.martinez', 'Fernando', 'Martínez', 'fernando.martinez@example.com', 'ee11cbb19052e40b07aac0ca060c23ee', 2, 1),
(14, 'carolina.gomez', 'Carolina', 'Gómez', 'carolina.gomez@example.com', 'ee11cbb19052e40b07aac0ca060c23ee', 2, 1),
(15, 'oscar.fernandez', 'Óscar', 'Fernández', 'oscar.fernandez@example.com', 'ee11cbb19052e40b07aac0ca060c23ee', 2, 1),
(16, 'valentina.sanchez', 'Valentina', 'Sánchez', 'valentina.sanchez@example.com', 'ee11cbb19052e40b07aac0ca060c23ee', 2, 1),
(17, 'emilio.navarro', 'Emilio', 'Navarro', 'emilio.navarro@example.com', 'ee11cbb19052e40b07aac0ca060c23ee', 2, 1),
(18, 'natalia.hernandez', 'Natalia', 'Hernández', 'natalia.hernandez@example.com', 'ee11cbb19052e40b07aac0ca060c23ee', 2, 1),
(19, 'adrian.gonzalez', 'Adrián', 'González', 'adrian.gonzalez@example.com', 'ee11cbb19052e40b07aac0ca060c23ee', 2, 1),
(20, 'soledad.jimenez', 'Soledad', 'Jiménez', 'soledad.jimenez@example.com', 'ee11cbb19052e40b07aac0ca060c23ee', 2, 1),
(21, 'pablo.gomez', 'Pablo', 'Gómez', 'pablo.gomez@example.com', 'ee11cbb19052e40b07aac0ca060c23ee', 2, 1),
(22, 'alejandra.vargas', 'Alejandra', 'Vargas', 'alejandra.vargas@example.com', 'ee11cbb19052e40b07aac0ca060c23ee', 2, 1),
(24, 'lucia.rojas', 'Lucía', 'Rojas', 'lucia.rojas@example.com', 'ee11cbb19052e40b07aac0ca060c23ee', 2, 1),
(25, 'juan.perez', 'Juan', 'Pérez', 'juan.perez@example.com', 'ee11cbb19052e40b07aac0ca060c23ee', 2, 1),
(30, 'sebastian.yatra@example.com', 'Sebastian', 'Yatra', 'sebastian.yatra', 'ee11cbb19052e40b07aac0ca060c23ee', 2, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `pagos`
--
ALTER TABLE `pagos`
  ADD PRIMARY KEY (`id_pago`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `pagos`
--
ALTER TABLE `pagos`
  MODIFY `id_pago` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
