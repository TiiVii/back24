-- Drop the database if it exists and then create it
DROP DATABASE IF EXISTS HealthDiary;
CREATE DATABASE HealthDiary;

USE HealthDiary;

CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    user_level VARCHAR(10) DEFAULT 'regular'
);

CREATE TABLE FeelingEntries (
    entry_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    entry_date DATE NOT NULL,
    mood VARCHAR(50),
    crying INT,
    breakdowns INT,
    notes TEXT,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);


-- Insert sample data

INSERT INTO Users (username, password, email, user_level) VALUES
('johndoe', 'hashedpassword', 'johndoe@example.com', 'regular'),
('janedoe', 'hashedpassword', 'janedoe@example.com', 'admin'),
('alice_jones', 'hashedpassword', 'alice@example.com', 'regular'),
('bob_brown', 'hashedpassword', 'bob@example.com', 'regular');

INSERT INTO FeelingEntries (user_id, entry_date, mood, crying, breakdowns, notes) VALUES
(1, '2024-01-10', 'Happy', '11', '11', 'Had a pretty good day'),
(2,'2024-01-11', 'Content', '21', '51', 'Met with friends, had a good time'),
(3, '2024-01-12', 'Tired', '11', '10', 'Work was demanding'),
(4,'2024-01-13', 'Energetic', '12', '13', 'Dad came back')

