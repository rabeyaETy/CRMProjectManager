-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 22, 2020 at 05:05 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crmproject`
--

-- --------------------------------------------------------

--
-- Table structure for table `commentinfo`
--

CREATE TABLE `commentinfo` (
  `commentid` int(11) NOT NULL,
  `creatorid` varchar(20) NOT NULL,
  `commentdescription` varchar(300) NOT NULL,
  `postid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `commentinfo`
--

INSERT INTO `commentinfo` (`commentid`, `creatorid`, `commentdescription`, `postid`) VALUES
(1, '18-36963-1', 'Hello sir!', 1);

-- --------------------------------------------------------

--
-- Table structure for table `eventinfo`
--

CREATE TABLE `eventinfo` (
  `eventid` int(11) NOT NULL,
  `eventname` varchar(100) NOT NULL,
  `eventdate` varchar(20) NOT NULL,
  `expiredate` varchar(20) NOT NULL,
  `eventdescription` varchar(300) NOT NULL,
  `eventstatus` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `eventinfo`
--

INSERT INTO `eventinfo` (`eventid`, `eventname`, `eventdate`, `expiredate`, `eventdescription`, `eventstatus`) VALUES
(2, '20% Discount going on!', '22/11/2020', '15/12/2020', 'Discount going on in table ', 1),
(3, 'New year offers!', '28/12/2020', '31/01/2021', '50% cashback in this new in any product!', 2);

-- --------------------------------------------------------

--
-- Table structure for table `noticeinfo`
--

CREATE TABLE `noticeinfo` (
  `noticeid` int(11) NOT NULL,
  `creatorid` varchar(20) NOT NULL,
  `title` text NOT NULL,
  `description` text NOT NULL,
  `noticedate` varchar(20) NOT NULL,
  `expiredate` varchar(20) NOT NULL,
  `noticestatus` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `noticeinfo`
--

INSERT INTO `noticeinfo` (`noticeid`, `creatorid`, `title`, `description`, `noticedate`, `expiredate`, `noticestatus`) VALUES
(1, '18-36963-1', 'New  Meeting!', 'Meeting will held on Monday  9pm', '20/11/2020', '23/11/2020', 1),
(2, '18-36963-1', 'Files Submission', 'Everyone please submit your files Sunday at 8pm ', '22/11/2020', '31/11/2021', 2);

-- --------------------------------------------------------

--
-- Table structure for table `postinfo`
--

CREATE TABLE `postinfo` (
  `postid` int(11) NOT NULL,
  `creatorid` varchar(20) NOT NULL,
  `postdescription` varchar(300) NOT NULL,
  `postdate` varchar(20) NOT NULL,
  `postaprovalstatus` int(11) DEFAULT NULL,
  `filepath` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `postinfo`
--

INSERT INTO `postinfo` (`postid`, `creatorid`, `postdescription`, `postdate`, `postaprovalstatus`, `filepath`) VALUES
(7, '18-36963-1', 'Photo', '2020-11-22', 0, 'IMG-20201114-WA0000.jpg'),
(8, '18-36963-1', 'helllo', '2020-11-22', 0, 'IMG-20201114-WA0000.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `userinfo`
--

CREATE TABLE `userinfo` (
  `userid` varchar(20) NOT NULL,
  `name` varchar(100) NOT NULL,
  `usertype` varchar(50) NOT NULL,
  `designation` varchar(50) NOT NULL,
  `contactnumber` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `salary` int(20) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `userinfo`
--

INSERT INTO `userinfo` (`userid`, `name`, `usertype`, `designation`, `contactnumber`, `email`, `salary`, `password`) VALUES
('18-36938-1', 'Akash Ahmed', 'user', 'Executive', '01235648976', 'akash@gmail.com', 24356, '1234'),
('18-36963-1', 'Rabeya Aktar Ety', 'admin', 'manager', '01908655044', 'etyrabeya02@gmail.com', 0, '1234'),
('18-36962-1', 'Riya ', 'user', 'Executive', '01908655001', 'riya@gmail.com', 20000, '1234'),
('18-31975-1', 'rayhan', 'admin', 'Executive', '01235648975', 'rayhan@gmail.com', 53126, '1234');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `commentinfo`
--
ALTER TABLE `commentinfo`
  ADD PRIMARY KEY (`commentid`);

--
-- Indexes for table `eventinfo`
--
ALTER TABLE `eventinfo`
  ADD PRIMARY KEY (`eventid`);

--
-- Indexes for table `noticeinfo`
--
ALTER TABLE `noticeinfo`
  ADD PRIMARY KEY (`noticeid`);

--
-- Indexes for table `postinfo`
--
ALTER TABLE `postinfo`
  ADD PRIMARY KEY (`postid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `commentinfo`
--
ALTER TABLE `commentinfo`
  MODIFY `commentid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `eventinfo`
--
ALTER TABLE `eventinfo`
  MODIFY `eventid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `noticeinfo`
--
ALTER TABLE `noticeinfo`
  MODIFY `noticeid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `postinfo`
--
ALTER TABLE `postinfo`
  MODIFY `postid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
