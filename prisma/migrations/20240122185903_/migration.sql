/*
  Warnings:

  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Product`;

-- CreateTable
CREATE TABLE `Car` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `maker` VARCHAR(191) NOT NULL,
    `model` VARCHAR(191) NOT NULL,
    `package` VARCHAR(191) NOT NULL,
    `color` VARCHAR(191) NOT NULL,
    `year` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `mileage` INTEGER NOT NULL,
    `price` INTEGER NOT NULL,
    `imgUrl` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
