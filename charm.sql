SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

CREATE DATABASE IF NOT EXISTS charm DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE charm;

CREATE TABLE bookings_js (
  booking_id int(11) NOT NULL,
  user_id int(11) NOT NULL,
  username varchar(128) NOT NULL,
  email varchar(128) NOT NULL,
  address varchar(128) NOT NULL,
  phone int(20) NOT NULL,
  album varchar(128) NOT NULL,
  booked_date date NOT NULL,
  booked_time time NOT NULL,
  installation_price int(128) NOT NULL,
  title varchar(128) DEFAULT NULL,
  source varchar(128) DEFAULT NULL,
  time_stamp timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO bookings_js (booking_id, user_id, username, email, address, phone, album, booked_date, booked_time, installation_price, title, `source`, time_stamp) VALUES
(238, 50, 'Better okey', 'okey@gmail.com', '#5 Mr Mensah, Dansoman Estate, Accra', 2147483647, 'Hair Care', '2018-12-19', '03:33:00', 10, 'Corn-row 2', 'assets/images/hair_images/cornrow_2.jpg', '2019-01-21 14:37:19'),
(239, 50, 'Better okey', 'okey@gmail.com', '#5 Mr Mensah, Dansoman Estate, Accra', 2147483647, 'Lagos', '2019-02-16', '11:11:00', 100000, 'Shared 2 Bedroom Apartment in Lagos', 'assets/images/homes/lagos/yellow-couch-by-black-and-white-mural_925x.jpg', '2019-02-15 09:51:29'),
(240, 50, 'Better okey', 'okey@gmail.com', '#5 Mr Mensah, Dansoman Estate, Accra', 2147483647, 'London', '2019-02-23', '11:11:00', 160000, 'Cozy Shared Apartment in Maitama, Abuja', 'assets/images/homes/abuja/gas-cooking-range-in-a-large-home-kitchen_925x.jpg', '2019-02-15 10:18:19');

CREATE TABLE users (
  user_id int(11) NOT NULL,
  fname varchar(128) NOT NULL,
  lname varchar(128) NOT NULL,
  username varchar(128) NOT NULL,
  email varchar(128) NOT NULL,
  address varchar(128) NOT NULL,
  phone varchar(20) NOT NULL,
  password varchar(128) NOT NULL,
  date_reg timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO users (user_id, fname, lname, username, email, address, phone, `password`, date_reg) VALUES
(50, 'Better', 'okey', 'Better okey', 'okey@gmail.com', '#5 Mr Mensah, Dansoman Estate, Accra', '2147483647', '5f4dcc3b5aa765d61d8327deb882cf99', '2018-05-05 23:00:00'),
(51, 'john', 'mail', 'John Mail', 'mail@gmail.com', '20 Mr Mensah, Dansoman Estate, Accra.', '+2348093059833', '5f4dcc3b5aa765d61d8327deb882cf99', '2018-05-11 17:48:17'),
(52, 'mark ', 'damon', 'Mark Damon', 'dam@gmail.com', 'Banana Island, Lagos', '9287473892', '5f4dcc3b5aa765d61d8327deb882cf99', '2018-05-11 17:47:47'),
(53, 'mark ', 'zuck', 'Mark  Zuck', 'zuck@gmail.com', 'Lekki Island, Lagos', '92874738922', '5f4dcc3b5aa765d61d8327deb882cf99', '2018-05-11 17:48:01'),
(54, 'Ken ', 'Nnamdi', 'Ken  Nnamdi', 'nadi@gmail.com', 'Victoria Island, Lagos', '3937838392', '5f4dcc3b5aa765d61d8327deb882cf99', '2018-05-11 17:48:41'),
(55, 'Bright ', 'Chimezie', 'Bright  Chimezie', 'mezie@gmail.com', 'Atlantic Island, Lagos', '08093059833', '5f4dcc3b5aa765d61d8327deb882cf99', '2018-05-11 17:48:48'),
(56, 'veronica ', 'uke', 'Veronica  Uke', 'veni@gmail.com', 'Dansoman Estate, Accra', '+2338093059833', '5f4dcc3b5aa765d61d8327deb882cf99', '2018-05-10 23:00:00');


ALTER TABLE bookings_js
  ADD PRIMARY KEY (booking_id),
  ADD KEY email (email),
  ADD KEY user_id (user_id);

ALTER TABLE users
  ADD PRIMARY KEY (user_id),
  ADD KEY email (email),
  ADD KEY username (username),
  ADD KEY address (address) USING BTREE,
  ADD KEY phone (phone);


ALTER TABLE bookings_js
  MODIFY booking_id int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=241;
ALTER TABLE users
  MODIFY user_id int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

ALTER TABLE bookings_js
  ADD CONSTRAINT user_id FOREIGN KEY (user_id) REFERENCES `users` (user_id) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
