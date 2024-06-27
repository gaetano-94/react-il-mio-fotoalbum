-- CreateTable
CREATE TABLE `Foto` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titolo` VARCHAR(191) NOT NULL,
    `descrizione` VARCHAR(191) NOT NULL,
    `immagine` VARCHAR(191) NOT NULL,
    `visibile` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Categoria` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_FotoCategoria` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_FotoCategoria_AB_unique`(`A`, `B`),
    INDEX `_FotoCategoria_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_FotoCategoria` ADD CONSTRAINT `_FotoCategoria_A_fkey` FOREIGN KEY (`A`) REFERENCES `Categoria`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_FotoCategoria` ADD CONSTRAINT `_FotoCategoria_B_fkey` FOREIGN KEY (`B`) REFERENCES `Foto`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
