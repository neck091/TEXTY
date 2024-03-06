-- CreateTable
CREATE TABLE `tbl_quest` (
    `q_quest` VARCHAR(191) NOT NULL,
    `q_answer1` VARCHAR(191) NOT NULL,
    `q_answer2` VARCHAR(191) NOT NULL,
    `q_answer3` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`q_quest`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
