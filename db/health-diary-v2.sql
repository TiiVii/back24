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
    c_amount INT,
    b_amount INT NOT NULL,
    info TEXT,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);


-- Insert sample data

INSERT INTO Users (username, password, email, created_at, user_level) VALUES
('johndoe', 'hashed_password', 'johndoe@example.com', '2024-01-01 09:00:00', 'regular'),
('janedoe', 'hashed_password', 'janedoe@example.com', '2024-01-02 10:00:00', 'admin'),
('alice_jones', 'hashed_password', 'alice@example.com', '2024-01-04 08:30:00', 'regular'),
('bob_brown', 'hashed_password', 'bob@example.com', '2024-01-05 07:45:00', 'regular');

INSERT INTO FeelingEntries (entry_id, user_id, entry_date, mood, c_amount, b_amount, info) VALUES
(1, 1, '2024-01-10', 'Happy', '1', '1', 'Had a pretty good day'),
(2, '2024-01-11', 'Content', '2', '5', 'Met with friends, had a good time'),
(3, '2024-01-12', 'Tired', '1', '0', 'Work was demanding'),
(4, '2024-01-13', 'Energetic', '2', '3', 'Dad came back'),
(4, '2024-01-14', 'Relaxed', '90', '5', 'The dark forces are becoming stronger');

