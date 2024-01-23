/*
  Warnings:

  - You are about to drop the column `name` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the `StockInput` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StockOutput` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `category` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `color` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imgUrl` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maker` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mileage` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `model` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `package` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `StockInput` DROP FOREIGN KEY `StockInput_productId_fkey`;

-- DropForeignKey
ALTER TABLE `StockOutput` DROP FOREIGN KEY `StockOutput_productId_fkey`;

-- AlterTable
ALTER TABLE `Product` DROP COLUMN `name`,
    DROP COLUMN `quantity`,
    ADD COLUMN `category` VARCHAR(191) NOT NULL,
    ADD COLUMN `color` VARCHAR(191) NOT NULL,
    ADD COLUMN `imgUrl` VARCHAR(191) NOT NULL,
    ADD COLUMN `maker` VARCHAR(191) NOT NULL,
    ADD COLUMN `mileage` INTEGER NOT NULL,
    ADD COLUMN `model` VARCHAR(191) NOT NULL,
    ADD COLUMN `package` VARCHAR(191) NOT NULL,
    ADD COLUMN `year` VARCHAR(191) NOT NULL,
    MODIFY `price` INTEGER NOT NULL;

-- DropTable
DROP TABLE `StockInput`;

-- DropTable
DROP TABLE `StockOutput`;
