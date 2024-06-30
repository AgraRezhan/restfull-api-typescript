-- CreateTable
CREATE TABLE `contacts` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `First_Name` VARCHAR(100) NOT NULL,
    `Last_Name` VARCHAR(100) NULL,
    `Email` VARCHAR(100) NULL,
    `Phone` VARCHAR(20) NULL,
    `Username` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `contacts` ADD CONSTRAINT `contacts_Username_fkey` FOREIGN KEY (`Username`) REFERENCES `Users`(`Username`) ON DELETE RESTRICT ON UPDATE CASCADE;
