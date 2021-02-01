--
-- Banco de dados: `FSEletro`
--

CREATE SCHEMA FSEletro;

USE FSEletro;
-- --------------------------------------------------------

--
-- Estrutura para tabela `cliente`
--

CREATE TABLE `cliente` (
  `idCliente` int NOT NULL,
  `nome` varchar(45) NOT NULL,
  `sobrenome` varchar(45) NOT NULL,
  `cpf` varchar(11) NOT NULL,
  `dataNascimento` date NOT NULL,
  `sexo` varchar(10) NOT NULL,
  `telefone1` varchar(9) NOT NULL,
  `telefone2` varchar(9) DEFAULT NULL,
  `endereco` varchar(45) NOT NULL,
  `numero` varchar(5) DEFAULT NULL,
  `complemento` varchar(45) DEFAULT NULL,
  `cep` varchar(20) NOT NULL,
  `bairro` varchar(20) NOT NULL,
  `cidade` varchar(20) NOT NULL,
  `estado` varchar(20) NOT NULL,
  `email` varchar(45) NOT NULL,
  `senha` varchar(8) NOT NULL
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
  `dataPedido` date NOT NULL,
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
  `categoria` varchar(45) NOT NULL,
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
(1, 'geladeira', 'Geladeira Frost Free Brastemp Inverse 540 L', 6389, 5019, '../imgs/Geladeira-1.jpg', 20),
(2, 'geladeira', 'Geladeira Frost Free Brastemp Branca 375 L', 2068.6, 1910.9, '../imgs/Geladeira-2.jpg', 20),
(3, 'geladeira', 'Geladeira Frost Free Consul Prata 340 L', 2199.9, 2069, '../imgs/Geladeira-3.jpg', 20),
(4, 'fogao', 'Fogão 4 Bocas Consul Inox com Mesa de Vidro', 1209, 1129, '../imgs/Fogao-1.jpg', 20),
(5, 'fogao', 'Fogão de Piso 4 Bocas Atlas Monaco', 609.9, 519.7, '../imgs/Fogao-2.jpg', 20),
(6, 'micro-ondas', 'Micro-ondas Consul 32 L Inox', 580.9, 409.88, '../imgs/Microondas-1.jpg', 20),
(7, 'micro-ondas', 'Micro-ondas Philco 25 L Espelhado', 508.7, 464.53, '../imgs/Microondas-2.jpg', 20),
(8, 'micro-ondas', 'Micro-ondas Electrolux 20 L Branco', 459.9, 436.05, '../imgs/Microondas-3.jpg', 20),
(9, 'lavaLoucas', 'Lava-louças Electrolux Inox com 10 serviços e 6 Programas', 3599, 2799.9, '../imgs/LavaLouca-1.jpg', 20),
(10, 'lavaLoucas', 'Lava-louças Compacta Brastemp 8 serviços Branca', 1970.9, 1730.6, '../imgs/LavaLouca-2.jpg', 20),
(11, 'lavadoraRoupas', 'Lavadora de Roupas Brastemp 11 Kg com Turbo Performance', 1699, 1214.1, '../imgs/Lavadora-1.jpg', 20),
(12, 'lavadoraRoupas', 'Lavadora de Roupas Philco Inverter 12 Kg com Display Digital', 2239.99, 2179.9, '../imgs/Lavadora-2.jpg', 20);

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`idCliente`);

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
  ADD PRIMARY KEY (`idProd`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `cliente`
--
ALTER TABLE `cliente`
  MODIFY `idCliente` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
