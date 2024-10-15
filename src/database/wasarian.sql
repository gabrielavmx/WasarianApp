-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 15/10/2024 às 17:28
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `wasarian`
--
CREATE DATABASE IF NOT EXISTS `wasarian` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `wasarian`;

-- --------------------------------------------------------

--
-- Estrutura para tabela `agua_consumida`
--

CREATE TABLE `agua_consumida` (
  `id_meta` int(11) DEFAULT NULL,
  `agua_consumida` float NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `agua_consumida`
--

INSERT INTO `agua_consumida` (`id_meta`, `agua_consumida`, `createdAt`, `updatedAt`) VALUES
(13, 1.5, '2024-10-15 14:37:34', '2024-10-15 14:37:34');

-- --------------------------------------------------------

--
-- Estrutura para tabela `caloria_consumida`
--

CREATE TABLE `caloria_consumida` (
  `id_meta` int(11) NOT NULL,
  `caloria_consumida` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `metas`
--

CREATE TABLE `metas` (
  `id_meta` int(11) NOT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `agua_meta` float DEFAULT NULL,
  `caloria_meta` float DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `metas`
--

INSERT INTO `metas` (`id_meta`, `id_usuario`, `agua_meta`, `caloria_meta`, `createdAt`, `updatedAt`) VALUES
(13, 3, 3, 1000, '2024-10-15 10:30:41', '2024-10-15 10:30:41');

-- --------------------------------------------------------

--
-- Estrutura para tabela `registro_atividade`
--

CREATE TABLE `registro_atividade` (
  `id_usuario` int(11) DEFAULT NULL,
  `tempo_atv` time DEFAULT NULL,
  `data` date DEFAULT NULL,
  `duracao` time DEFAULT NULL,
  `descricao` text DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `registro_refeicoes`
--

CREATE TABLE `registro_refeicoes` (
  `id_meta` int(11) DEFAULT NULL,
  `tipo_refeicao` varchar(255) DEFAULT NULL,
  `caloria` decimal(5,2) DEFAULT NULL,
  `data` date DEFAULT NULL,
  `descricao` text DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `registro_refeicoes`
--

INSERT INTO `registro_refeicoes` (`id_meta`, `tipo_refeicao`, `caloria`, `data`, `descricao`, `createdAt`, `updatedAt`) VALUES
(13, 'Janta', 500.00, '2024-10-15', 'Vegetais, Carboidratos, Proteínas', '2024-10-15 15:24:49', '2024-10-15 15:24:49'),
(13, 'Janta', 500.00, '2024-10-15', 'Vegetais, Carboidratos, Proteínas', '2024-10-15 15:26:43', '2024-10-15 15:26:43');

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `senha` varchar(255) NOT NULL,
  `dt_nasc` date DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `sexo` varchar(15) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `nome`, `senha`, `dt_nasc`, `email`, `sexo`, `createdAt`, `updatedAt`) VALUES
(3, 'Jolu', '$2b$10$50PTGatb/olfC56EpSI3wuJqbePMRX6QmbLna0s6ZXubW1DgjUo8e', '2014-09-04', 'joaomonsinhatti@gmail.com', 'masculino', '2024-09-18 20:46:12', '2024-10-15 14:07:30');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `agua_consumida`
--
ALTER TABLE `agua_consumida`
  ADD KEY `id_meta` (`id_meta`);

--
-- Índices de tabela `caloria_consumida`
--
ALTER TABLE `caloria_consumida`
  ADD KEY `fk_meta` (`id_meta`);

--
-- Índices de tabela `metas`
--
ALTER TABLE `metas`
  ADD PRIMARY KEY (`id_meta`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Índices de tabela `registro_atividade`
--
ALTER TABLE `registro_atividade`
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Índices de tabela `registro_refeicoes`
--
ALTER TABLE `registro_refeicoes`
  ADD KEY `id_meta` (`id_meta`);

--
-- Índices de tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `metas`
--
ALTER TABLE `metas`
  MODIFY `id_meta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `agua_consumida`
--
ALTER TABLE `agua_consumida`
  ADD CONSTRAINT `id_meta` FOREIGN KEY (`id_meta`) REFERENCES `metas` (`id_meta`);

--
-- Restrições para tabelas `caloria_consumida`
--
ALTER TABLE `caloria_consumida`
  ADD CONSTRAINT `fk_meta` FOREIGN KEY (`id_meta`) REFERENCES `metas` (`id_meta`);

--
-- Restrições para tabelas `metas`
--
ALTER TABLE `metas`
  ADD CONSTRAINT `metas_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`);

--
-- Restrições para tabelas `registro_atividade`
--
ALTER TABLE `registro_atividade`
  ADD CONSTRAINT `registro_atividade_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`);

--
-- Restrições para tabelas `registro_refeicoes`
--
ALTER TABLE `registro_refeicoes`
  ADD CONSTRAINT `registro_refeicoes_ibfk_1` FOREIGN KEY (`id_meta`) REFERENCES `metas` (`id_meta`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
