-- CreateTable
CREATE TABLE `Users` (
    `Username` VARCHAR(100) NOT NULL,
    `Password` VARCHAR(100) NOT NULL,
    `Name` VARCHAR(100) NOT NULL,
    `Token` VARCHAR(100) NULL,

    PRIMARY KEY (`Username`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
