-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Client: localhost
-- Généré le: Lun 17 Mars 2014 à 17:44
-- Version du serveur: 5.6.12-log
-- Version de PHP: 5.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `traps`
--

-- --------------------------------------------------------

--
-- Structure de la table `classement`
--

CREATE TABLE IF NOT EXISTS `classement` (
  `Place` int(2) NOT NULL,
  `Pseudo` varchar(50) CHARACTER SET utf8 NOT NULL,
  `Score` int(4) NOT NULL,
  PRIMARY KEY (`Place`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `classement`
--

INSERT INTO `classement` (`Place`, `Pseudo`, `Score`) VALUES
(1, 'Inconnu', 5000),
(2, 'Inconnu', 4500),
(3, 'Inconnu', 4000),
(4, 'Inconnu', 3500),
(5, 'Inconnu', 3000),
(6, 'Inconnu', 2000),
(7, 'Inconnu', 1000),
(8, 'Inconnu', 700),
(9, 'Inconnu', 699),
(10, 'Inconnu', 250);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
