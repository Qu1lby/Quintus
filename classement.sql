-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Client: localhost
-- Généré le: Dim 16 Mars 2014 à 20:27
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
(1, 'Inconnu', 0),
(2, 'Inconnu', 0),
(3, 'Inconnu', 0),
(4, 'Inconnu', 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
