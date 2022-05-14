-- CREATE DATABASE chat;

USE checkout;

/* Create other tables and define schemas for them here! */

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'messages'
--
-- ---


DROP TABLE IF EXISTS `sessions`;

CREATE TABLE `sessions` (
  `id` INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `checkout` INTEGER NOT NULL DEFAULT 0,
  `sessionid` VARCHAR(64) NOT NULL UNIQUE,
  `name` VARCHAR(64) NULL DEFAULT NULL,
  `email` VARCHAR(64) NULL DEFAULT NULL,
  `password` VARCHAR(64) NULL DEFAULT NULL,
  `addressLine1` VARCHAR(64) NULL DEFAULT NULL,
  `addressLine2` VARCHAR(64) NULL DEFAULT NULL,
  `city` VARCHAR(64) NULL DEFAULT NULL,
  `state` VARCHAR(10) NULL DEFAULT NULL,
  `zip` VARCHAR(10) NULL DEFAULT NULL,
  `cardnumber` VARCHAR(32) NULL DEFAULT NULL,
  `expdate` VARCHAR(32) NULL DEFAULT NULL,
  `cvv` VARCHAR(10) NULL DEFAULT NULL,
  `billingZip` VARCHAR(10) NULL DEFAULT NULL
);

-- ---
-- Table 'users'
--
-- ---

-- DROP TABLE IF EXISTS `users`;

-- CREATE TABLE `users` (
--   `id` INTEGER AUTO_INCREMENT,
--   `username` MEDIUMTEXT NULL DEFAULT NULL,
--   `password` MEDIUMTEXT NULL DEFAULT NULL,
--   PRIMARY KEY (`id`)
-- );


-- ---
-- Table 'rooms'
--
-- ---

-- DROP TABLE IF EXISTS `rooms`;

-- CREATE TABLE `rooms` (
--   `id` INTEGER AUTO_INCREMENT,
--   `roomname` MEDIUMTEXT NULL DEFAULT NULL,
--   PRIMARY KEY (`id`)
-- );

-- ---
-- Foreign Keys
-- ---

-- ALTER TABLE `messages` ADD FOREIGN KEY (user) REFERENCES `users` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `rooms` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `users` (`id`,`username`,`password`) VALUES
-- ('','','');
-- INSERT INTO `messages` (`id`,`content`,`user`,`room`) VALUES
-- ('','','','');
-- INSERT INTO `rooms` (`id`,`room name`) VALUES
-- ('','');