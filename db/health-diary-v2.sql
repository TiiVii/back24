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
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);


-- Insert sample data

INSERT INTO Users (username, password, email, created_at, user_level) VALUES
('johndoe', 'hashed_password', 'johndoe@example.com', '2024-01-01 09:00:00', 'regular'),
('janedoe', 'hashed_password', 'janedoe@example.com', '2024-01-02 10:00:00', 'admin'),
('alice_jones', 'hashed_password', 'alice@example.com', '2024-01-04 08:30:00', 'regular'),
('bob_brown', 'hashed_password', 'bob@example.com', '2024-01-05 07:45:00', 'regular');

INSERT INTO Info (user_id, entry_date, mood_id, info, created_at) VALUES
(1, '2024-01-10', 'Happy', 'Had a pretty good day', '2024-01-10 20:00:00'),
(2, '2024-01-11', 'Content', 'Met with friends, had a good time', '2024-01-11 21:00:00'),
(3, '2024-01-12', 'Tired', 'Work was demanding', '2024-01-12 22:00:00'),
(4, '2024-01-13', 'Energetic', 'Dad came back', '2024-01-13 18:00:00'),
(4, '2024-01-14', 'Relaxed', 'The dark forces are becoming stronger', '2024-01-14 19:00:00');

INSERT INTO Crying (user_id, c_amount, start_date, end_date) VALUES
(1, 5, '2024-01-01', '2024-06-01'),
(2, 55, '2024-01-05', '2024-01-20'),
(2, 13, '2024-01-10', '2024-01-20'),
(4, 3, '2024-01-15', '2024-07-15'),
(2, 7, '2024-01-20', '2024-07-20');

INSERT INTO Breakdowns (user_id, b_amount, date) VALUES
(1, 30, '2024-01-10'),
(3, 45, '2024-01-11'),
(2, 55, '2024-01-12'),
(1, 30, '2024-01-16'),
(3, 60, '2024-01-18'),
(3, 50, '2024-01-18'),
(1, 40, '2024-01-19');
