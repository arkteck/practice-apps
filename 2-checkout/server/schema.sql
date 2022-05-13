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
  `sessionid` INTEGER NOT NULL UNIQUE,
  `name` MEDIUMTEXT NULL DEFAULT NULL,
  `email` MEDIUMTEXT NULL DEFAULT NULL,
  `password` MEDIUMTEXT NULL DEFAULT NULL,
  `addressLine1` MEDIUMTEXT NULL DEFAULT NULL,
  `addressLine2` MEDIUMTEXT NULL DEFAULT NULL,
  `city` MEDIUMTEXT NULL DEFAULT NULL,
  `state` MEDIUMTEXT NULL DEFAULT NULL,
  `zip` MEDIUMTEXT NULL DEFAULT NULL,
  `cvv` MEDIUMTEXT NULL DEFAULT NULL,
  `billingZip` MEDIUMTEXT NULL DEFAULT NULL
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