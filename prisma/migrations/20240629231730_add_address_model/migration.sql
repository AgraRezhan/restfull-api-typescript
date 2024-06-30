-- CreateTable
CREATE TABLE `Address` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Street` VARCHAR(255) NULL,
    `City` VARCHAR(100) NULL,
    `Province` VARCHAR(100) NULL,
    `Country` VARCHAR(100) NOT NULL,
    `Postal_Code` VARCHAR(10) NOT NULL,
    `Contact_Id` INTEGER NOT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Address` ADD CONSTRAINT `Address_Contact_Id_fkey` FOREIGN KEY (`Contact_Id`) REFERENCES `contacts`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;
