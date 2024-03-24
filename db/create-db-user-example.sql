CREATE USER 'TeeVee'@'localhost' IDENTIFIED BY 'vaahtokarkki';
GRANT ALL PRIVILEGES ON `HealthDiary`.* TO 'TeeVee'@'localhost';
FLUSH PRIVILEGES;
