-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 03/12/2020 às 10:54
-- Versão do servidor: 8.0.22-0ubuntu0.20.04.2
-- Versão do PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `FSEletro`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `categoria`
--

CREATE TABLE `categoria` (
  `idCategoria` int NOT NULL,
  `categoria` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `categoria`
--

INSERT INTO `categoria` (`idCategoria`, `categoria`) VALUES
(1, 'geladeira'),
(2, 'fogao'),
(3, 'microondas'),
(4, 'lavadoraRoupas'),
(5, 'lavaLouca');

-- --------------------------------------------------------

--
-- Estrutura para tabela `cliente`
--

CREATE TABLE `cliente` (
  `idCliente` int NOT NULL,
  `nome` varchar(45) NOT NULL,
  `sobrenome` varchar(45) NOT NULL,
  `cpf` varchar(15) NOT NULL,
  `dataNascimento` date NOT NULL,
  `sexo` varchar(10) NOT NULL,
  `telefone` varchar(20) NOT NULL,
  `endereco` varchar(45) NOT NULL,
  `numero` varchar(5) DEFAULT NULL,
  `complemento` varchar(45) DEFAULT NULL,
  `cep` varchar(20) NOT NULL,
  `bairro` varchar(20) NOT NULL,
  `cidade` varchar(20) NOT NULL,
  `estado` varchar(20) NOT NULL,
  `email` varchar(45) NOT NULL,
  `senha` varchar(8) NOT NULL,
  `checkOfertas` varchar(5) DEFAULT NULL,
  `checkTermos` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `fale_conosco`
--

CREATE TABLE `fale_conosco` (
  `idfale_conosco` int NOT NULL,
  `nome` varchar(60) NOT NULL,
  `email` varchar(45) NOT NULL,
  `assunto` varchar(20) NOT NULL,
  `mensagem` varchar(300) NOT NULL,
  `data` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `itens_pedido`
--

CREATE TABLE `itens_pedido` (
  `idItem` int NOT NULL,
  `idPedido` int NOT NULL,
  `idProduto` int NOT NULL,
  `quantidade` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Gatilhos `itens_pedido`
--
DELIMITER $$
CREATE TRIGGER `tgr_itens_pedido_delete` AFTER DELETE ON `itens_pedido` FOR EACH ROW BEGIN
	UPDATE produto SET estoque = estoque + OLD.quantidade
WHERE idProd = OLD.idProduto;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `tgr_itens_pedido_insert` AFTER INSERT ON `itens_pedido` FOR EACH ROW BEGIN
	UPDATE produto SET estoque = estoque - NEW.quantidade
WHERE idProd = NEW.idProduto;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estrutura para tabela `pedido`
--

CREATE TABLE `pedido` (
  `idPed` int NOT NULL,
  `idCliente` int DEFAULT NULL,
  `dataPedido` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `cartaoCredito` varchar(20) NOT NULL,
  `numeroCartao` varchar(20) NOT NULL,
  `titularCartao` varchar(20) NOT NULL,
  `validadeCartao` date NOT NULL,
  `codigoSeguranca` varchar(3) NOT NULL,
  `valorFrete` float NOT NULL,
  `valorTotal` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `produto`
--

CREATE TABLE `produto` (
  `idProd` int NOT NULL,
  `categoria` int NOT NULL,
  `descricao` varchar(100) NOT NULL,
  `preco` float NOT NULL,
  `precoVenda` float NOT NULL,
  `imagem` varchar(100) NOT NULL,
  `estoque` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `produto`
--

INSERT INTO `produto` (`idProd`, `categoria`, `descricao`, `preco`, `precoVenda`, `imagem`, `estoque`) VALUES
(1, 1, 'Geladeira Frost Free Brastemp Inverse 540 L', 6389, 5019, 'Geladeira-1.jpg', 20),
(2, 1, 'Geladeira Frost Free Brastemp Branca 375 L', 2068, 1910.9, 'Geladeira-2.jpg', 20),
(3, 1, 'Geladeira Frost Free Consul Prata com 340 L', 2199.9, 2069, 'Geladeira-3.jpg', 20),
(4, 2, 'Fogão 4 Bocas Consul Inox  Mesa de Vidro', 1209, 1129, 'Fogao-1.jpg', 20),
(5, 2, 'Fogão de Piso 4 Bocas Atlas Monaco', 609.9, 519.7, 'Fogao-2.jpg', 20),
(6, 3, 'Micro-ondas Consul 32 L Inox Espelhado', 580.9, 409.88, 'Microondas-1.jpg', 20),
(7, 3, 'Micro-ondas Philco 25 L Espelhado', 508.7, 464.53, 'Microondas-2.jpg', 20),
(8, 3, 'Micro-ondas Electrolux 20 L Branco', 459.9, 436.05, 'Microondas-3.jpg', 20),
(9, 4, 'Lava-louças Electrolux Inox 10 Serv e 6 Prog', 3599, 2799.9, 'LavaLouca-1.jpg', 20),
(10, 4, 'Lava-louças Compacta Brastemp Branca 8 Serv ', 1970.9, 1730.6, 'LavaLouca-2.jpg', 20),
(11, 5, 'Lavadora de Roupas Brastemp 11 Kg Turbo ', 1699, 1214.1, 'Lavadora-1.jpg', 20),
(12, 5, 'Lavadora de Roupas Philco Inverter 12 Kg ', 2239.99, 2179.9, 'Lavadora-2.jpg', 20);

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`idCategoria`);

--
-- Índices de tabela `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`idCliente`),
  ADD UNIQUE KEY `cpf_UNIQUE` (`cpf`),
  ADD UNIQUE KEY `email_UNIQUE` (`email`);

--
-- Índices de tabela `fale_conosco`
--
ALTER TABLE `fale_conosco`
  ADD PRIMARY KEY (`idfale_conosco`);

--
-- Índices de tabela `itens_pedido`
--
ALTER TABLE `itens_pedido`
  ADD PRIMARY KEY (`idItem`),
  ADD KEY `idPedido` (`idPedido`),
  ADD KEY `idProduto` (`idProduto`);

--
-- Índices de tabela `pedido`
--
ALTER TABLE `pedido`
  ADD PRIMARY KEY (`idPed`),
  ADD KEY `idCliente` (`idCliente`);

--
-- Índices de tabela `produto`
--
ALTER TABLE `produto`
  ADD PRIMARY KEY (`idProd`),
  ADD KEY `fk_produto_1_idx` (`categoria`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `categoria`
--
ALTER TABLE `categoria`
  MODIFY `idCategoria` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `cliente`
--
ALTER TABLE `cliente`
  MODIFY `idCliente` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `fale_conosco`
--
ALTER TABLE `fale_conosco`
  MODIFY `idfale_conosco` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `itens_pedido`
--
ALTER TABLE `itens_pedido`
  MODIFY `idItem` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `pedido`
--
ALTER TABLE `pedido`
  MODIFY `idPed` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `produto`
--
ALTER TABLE `produto`
  MODIFY `idProd` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Restrições para dumps de tabelas
--

--
-- Restrições para tabelas `itens_pedido`
--
ALTER TABLE `itens_pedido`
  ADD CONSTRAINT `itens_pedido_ibfk_1` FOREIGN KEY (`idPedido`) REFERENCES `pedido` (`idPed`),
  ADD CONSTRAINT `itens_pedido_ibfk_2` FOREIGN KEY (`idProduto`) REFERENCES `produto` (`idProd`);

--
-- Restrições para tabelas `pedido`
--
ALTER TABLE `pedido`
  ADD CONSTRAINT `pedido_ibfk_1` FOREIGN KEY (`idCliente`) REFERENCES `cliente` (`idCliente`);

--
-- Restrições para tabelas `produto`
--
ALTER TABLE `produto`
  ADD CONSTRAINT `fk_produto_1` FOREIGN KEY (`categoria`) REFERENCES `categoria` (`idCategoria`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
