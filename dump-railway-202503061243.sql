-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: trolley.proxy.rlwy.net    Database: railway
-- ------------------------------------------------------
-- Server version	9.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `administrative`
--

DROP TABLE IF EXISTS `administrative`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `administrative` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `first_name` varchar(20) NOT NULL,
  `second_name` varchar(20) DEFAULT '',
  `first_last_name` varchar(20) NOT NULL,
  `second_last_name` varchar(20) NOT NULL,
  `identification` varchar(10) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role` varchar(255) NOT NULL,
  `appointment` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administrative`
--

LOCK TABLES `administrative` WRITE;
/*!40000 ALTER TABLE `administrative` DISABLE KEYS */;
INSERT INTO `administrative` VALUES ('49993529-0913-4086-9682-35b8edfc4ae8','Molly','','Vergel','Verjel','1234567890','molly@gmail.com','$2b$10$N89/XmIytAEo8VWQAkz99.uwIb3tBZLOWiY5UDGmay5gs8TQatrPm','administrative','owner','2025-03-04 08:10:36','2025-03-04 08:10:36'),('dda4e754-50bd-4510-a674-f74d0f916a77','Valentina','','V','V','123456789','vale@gmail.com','$2b$10$jQMVG84pPIyYou9uPcTxw.Y49NYxvJJspbG7bwaQwnOy1c.TdX2RG','administrative','programmer','2025-03-04 04:31:09','2025-03-04 04:31:09');
/*!40000 ALTER TABLE `administrative` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category_product`
--

DROP TABLE IF EXISTS `category_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category_product` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category_product`
--

LOCK TABLES `category_product` WRITE;
/*!40000 ALTER TABLE `category_product` DISABLE KEYS */;
INSERT INTO `category_product` VALUES ('60e5402f-c071-4645-b157-e6d8040beb37','salty food','2025-03-04 07:32:38','2025-03-04 07:32:38'),('8951a9f9-ef2f-40d1-8e0f-d16da8dc0d01','cold drinks','2025-03-04 04:38:01','2025-03-04 04:38:01'),('9551221c-78c2-4eaf-9eaf-4dfe9e098ac8','desserts','2025-03-04 07:33:05','2025-03-04 07:33:05'),('ebab77db-fabc-4101-a2d0-cb8e0642a005','sweet food','2025-03-04 07:32:48','2025-03-04 07:32:48'),('fd05133e-670f-4b0f-b50f-62edd620ca8b','hot drinks','2025-03-04 07:26:36','2025-03-04 07:26:36');
/*!40000 ALTER TABLE `category_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `first_name` varchar(20) NOT NULL,
  `second_name` varchar(20) DEFAULT '',
  `first_last_name` varchar(20) NOT NULL,
  `second_last_name` varchar(20) NOT NULL,
  `identification` varchar(10) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role` varchar(255) NOT NULL,
  `payment_method` varchar(255) NOT NULL,
  `address` varchar(100) NOT NULL,
  `cell_phone_number` varchar(10) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES ('4abeb346-4997-47ba-a169-9cf1c13c190a','André','','Campuzano','Cervantes','109845741','andre@gmail.com','$2b$10$77a4MpqiYr4..PBgHFT2XeqPol3x.M6T8hQW8HP4vVv17q3udzmqC','customer','cash_payment','cra 12','3187459042','2025-03-04 20:32:08','2025-03-04 20:32:08'),('e2b22879-d7d8-41fe-91fa-4775b77afc45','Valentina',NULL,'Vergel','Verjel','1097780452','valopap@hotmail.com','$2a$10$Sf6nr42iJGEBcppt7PcUruqMHJNocM4gTMc1E0WOD1TqEVHi2I5O.','customer','cash_payment','cra 12','3152799157','2025-03-04 00:47:17','2025-03-04 00:47:17');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `total_price` float DEFAULT NULL,
  `status` varchar(255) NOT NULL,
  `date` datetime NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `customerId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `receiptVoucherId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `sellerId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `customerId` (`customerId`),
  KEY `receiptVoucherId` (`receiptVoucherId`),
  KEY `sellerId` (`sellerId`),
  CONSTRAINT `order_ibfk_1` FOREIGN KEY (`customerId`) REFERENCES `customer` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `order_ibfk_2` FOREIGN KEY (`receiptVoucherId`) REFERENCES `receipt_voucher` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `order_ibfk_3` FOREIGN KEY (`sellerId`) REFERENCES `seller` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
INSERT INTO `order` VALUES ('c680d3ba-1a7c-4228-9234-56829a042e67',19000,'pending','2025-03-05 18:13:23','2025-03-05 18:13:23','2025-03-05 18:13:23','4abeb346-4997-47ba-a169-9cf1c13c190a',NULL,NULL);
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_details`
--

DROP TABLE IF EXISTS `order_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_details` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `quantity` int DEFAULT NULL,
  `unit_price` float DEFAULT NULL,
  `subtotal` float DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `orderId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `productId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `orderId` (`orderId`),
  KEY `productId` (`productId`),
  CONSTRAINT `order_details_ibfk_1` FOREIGN KEY (`orderId`) REFERENCES `order` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `order_details_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_details`
--

LOCK TABLES `order_details` WRITE;
/*!40000 ALTER TABLE `order_details` DISABLE KEYS */;
INSERT INTO `order_details` VALUES ('09c44a51-abc3-4b19-9dc6-c012c941f620',1,2000,2000,'2025-03-05 18:13:23','2025-03-05 18:13:23','c680d3ba-1a7c-4228-9234-56829a042e67','11903afa-0c66-4772-ac77-bbf9f60217af'),('0f71aa08-8199-43f9-83df-60a0d85bbc60',1,7000,7000,'2025-03-05 18:13:23','2025-03-05 18:13:23','c680d3ba-1a7c-4228-9234-56829a042e67','2d2e3463-4493-4ab1-a22b-bba224e93a1e'),('76bfdb2d-5c7e-4c07-bacd-9c6cd60a4e39',1,10000,10000,'2025-03-05 18:13:23','2025-03-05 18:13:23','c680d3ba-1a7c-4228-9234-56829a042e67','2b2cc560-8f74-4066-83aa-1ee58ef7fa6d');
/*!40000 ALTER TABLE `order_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(4000) NOT NULL,
  `price` float DEFAULT NULL,
  `stock` int DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `categoryProductId` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `categoryProductId` (`categoryProductId`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`categoryProductId`) REFERENCES `category_product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES ('11903afa-0c66-4772-ac77-bbf9f60217af','Croissant','Un croissant dorado y crujiente por fuera, con una textura ligera y aireada en su interior. Su sabor mantequilloso y suave combina perfectamente con la intensidad del café, creando una experiencia deliciosa en cada bocado',2000,1,'https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_1200/hellofresh_s3/image/645af756cd93ab51c00178bc-15c2ff16.jpg','2025-03-05 18:04:54','2025-03-05 18:04:54','60e5402f-c071-4645-b157-e6d8040beb37'),('2b2cc560-8f74-4066-83aa-1ee58ef7fa6d','Helado de chocolate','Un helado de chocolate intenso y cremoso, con un color marrón profundo y un aroma irresistible a cacao. Su textura es suave y aterciopelada, derritiéndose lentamente en la boca mientras libera un equilibrio perfecto entre dulzura y un sutil amargor',10000,1,'https://images.cookforyourlife.org/wp-content/uploads/2020/06/Chocolate-Whipped-Ice-Cream-shutterstock_1010248351.jpg','2025-03-04 08:09:49','2025-03-05 17:55:53','9551221c-78c2-4eaf-9eaf-4dfe9e098ac8'),('2d2e3463-4493-4ab1-a22b-bba224e93a1e','Té Chai','Un té chai aromático y especiado, con una mezcla perfecta de canela, cardamomo, jengibre y clavo que envuelve los sentidos en un abrazo cálido.',7000,1,'https://blog.renaware.com/wp-content/uploads/2023/09/Te-chai-1.jpg','2025-03-05 17:58:30','2025-03-05 17:58:30','8951a9f9-ef2f-40d1-8e0f-d16da8dc0d01'),('2f76ac11-0fb2-4589-89b0-fdb3bebf0a2e','Helado de vainilla','Un helado de chocolate intenso y cremoso, con un color marrón profundo y un aroma irresistible a cacao. Su textura es suave y aterciopelada, derritiéndose lentamente en la boca mientras libera un equilibrio perfecto entre dulzura y un sutil amargor',10000,1,'https://www.gourmet.cl/wp-content/uploads/2016/09/Helado_Vainilla-web-553x458.jpg','2025-03-05 17:56:41','2025-03-05 17:56:41','9551221c-78c2-4eaf-9eaf-4dfe9e098ac8'),('4b05ede9-63e4-4120-8135-6603b75de634','Waffle con helado','Un waffle dorado y crujiente por fuera, pero suave y esponjoso por dentro, servido caliente y acompañado de una bola de helado que se derrite lentamente sobre su superficie.',20000,1,'https://yayaya.com.ec/wp-content/uploads/2021/07/waffle-con-helado-y-salsa-de-chocolate-1.jpg','2025-03-05 17:57:41','2025-03-05 17:57:41','ebab77db-fabc-4101-a2d0-cb8e0642a005'),('8a135787-f9e0-4be4-9cf2-71f8a976581e','Galletas de mantequilla','Pequeñas, crujientes y con un toque de dulzura, las galletas de mantequilla son el complemento ideal para un café negro o con leche. Se deshacen suavemente en la boca, dejando un sabor delicado y reconfortante',2000,1,'https://mojo.generalmills.com/api/public/content/3Wt-TSe6c0a57iCvwOTXtQ_gmi_hi_res_jpeg.jpeg','2025-03-05 18:05:53','2025-03-05 18:05:53','ebab77db-fabc-4101-a2d0-cb8e0642a005'),('8be5a6dd-a4a0-4589-a294-671f1bbd0d51','Torta de zanahoria','Una torta de zanahoria húmeda y esponjosa, con un equilibrio perfecto entre dulzura y un toque especiado de canela y nuez moscada',10000,1,'https://images.aws.nestle.recipes/original/5023d519fb13188620f27cba33c70a3a_1.jpg','2025-03-05 18:07:01','2025-03-05 18:07:01','ebab77db-fabc-4101-a2d0-cb8e0642a005'),('9d910b10-1597-407c-9557-5ccf0d2e3d44','Café','n café negro intenso y aromático, con un sabor profundo que despierta los sentidos desde el primer sorbo. Su cuerpo robusto y su amargor equilibrado resaltan las notas naturales del grano, con matices que pueden ir desde el chocolate amargo hasta un sutil toque afrutado',5000,1,'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG','2025-03-05 17:59:21','2025-03-05 17:59:21','fd05133e-670f-4b0f-b50f-62edd620ca8b'),('c37a293a-8b43-4fec-8bfd-f23873932e5a','Helado de fresa','Un helado de fresa cremoso y refrescante, con un color rosado vibrante y un aroma dulce que recuerda a fresas recién cosechadas. Su textura suave se derrite en la boca, dejando un equilibrio perfecto entre dulzura y un ligero toque ácido.',10000,1,'https://comedera.com/wp-content/uploads/sites/9/2022/04/Helado-de-fresas-casero-shutterstock_1477385882.jpg','2025-03-05 17:54:52','2025-03-05 17:54:52','9551221c-78c2-4eaf-9eaf-4dfe9e098ac8'),('c6abcced-1a75-4642-9341-e99591ad6b36','Café con leche','Un café frío refrescante y lleno de sabor, con el equilibrio perfecto entre intensidad y suavidad. Su aroma profundo y sus notas ligeramente dulces se realzan con el hielo, ofreciendo una experiencia energizante y deliciosa.',7000,1,'https://www.tododisca.com/wp-content/uploads/2023/11/cafe-frio-1.jpg','2025-03-05 18:00:54','2025-03-05 18:00:54','8951a9f9-ef2f-40d1-8e0f-d16da8dc0d01'),('e6daca28-e157-4fd1-91de-79280aedb0b8','Pancakes','Unos pancakes esponjosos y dorados, servidos calientes y bañados con una generosa capa de miel que se desliza lentamente por cada capa.',15000,1,'https://www.marthastewart.com/thmb/Vgb9cQSlegZz5fcoSbkkqyHPmHY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/338185-basic-pancakes-09-00b18f8418fd4e52bb2050173d083d04.jpg','2025-03-05 18:02:00','2025-03-05 18:02:12','ebab77db-fabc-4101-a2d0-cb8e0642a005');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `receipt_voucher`
--

DROP TABLE IF EXISTS `receipt_voucher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `receipt_voucher` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `status` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `receipt_voucher`
--

LOCK TABLES `receipt_voucher` WRITE;
/*!40000 ALTER TABLE `receipt_voucher` DISABLE KEYS */;
/*!40000 ALTER TABLE `receipt_voucher` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seller`
--

DROP TABLE IF EXISTS `seller`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seller` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `first_name` varchar(20) NOT NULL,
  `second_name` varchar(20) DEFAULT '',
  `first_last_name` varchar(20) NOT NULL,
  `second_last_name` varchar(20) NOT NULL,
  `identification` varchar(10) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role` varchar(255) NOT NULL,
  `appointment` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seller`
--

LOCK TABLES `seller` WRITE;
/*!40000 ALTER TABLE `seller` DISABLE KEYS */;
INSERT INTO `seller` VALUES ('2758b60f-3761-4ea5-b420-d73c1b223edf','Molly','','Vergel','gdfgdfgfd','1234567890','damarizt@ufpso.edu.co','$2b$10$4c5ZWpKTDThnFrxuqLQpK.umQ2UrqQ0KfkJ4Cu9JIspWw8660JA6q','seller','cashier','2025-03-04 05:45:08','2025-03-04 05:45:08'),('959ee173-9b06-40cb-a96f-e0562cf1507a','Molly',NULL,'Vergel','Verjel','1051561567','molly@gmail.com','$2a$10$Sf6nr42iJGEBcppt7PcUruqMHJNocM4gTMc1E0WOD1TqEVHi2I5O.','seller','cashier','2025-03-04 03:12:05','2025-03-04 03:12:05');
/*!40000 ALTER TABLE `seller` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `first_name` varchar(20) NOT NULL,
  `second_name` varchar(20) DEFAULT '',
  `first_last_name` varchar(20) NOT NULL,
  `second_last_name` varchar(20) NOT NULL,
  `identification` varchar(10) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'railway'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-06 12:44:08
