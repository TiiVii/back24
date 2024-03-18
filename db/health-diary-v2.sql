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

CREATE TABLE Mood (
    mood_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    entry_date DATE NOT NULL,
    mood VARCHAR(50),
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

CREATE TABLE Crying (
    crying_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    c_amount INT,
    start_date DATE,
    end_date DATE,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

CREATE TABLE Breakdowns (
    breakdowns_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    type VARCHAR(100) NOT NULL,
    b_amount INT NOT NULL,
    date DATE,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

CREATE TABLE Entry (
    mood_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    entry_date DATE NOT NULL,
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

INSERT INTO DiaryEntries (user_id, entry_date, mood, c_amount, b_amount, info, created_at) VALUES
(1, '2024-01-10', 'Happy', 5, 8, 'Had a pretty good day', '2024-01-10 20:00:00'),
(2, '2024-01-11', 'Content', 1, 7, 'Met with friends, had a good time', '2024-01-11 21:00:00'),
(3, '2024-01-12', 'Tired', 68, 6, 'Work was demanding', '2024-01-12 22:00:00'),
(4, '2024-01-13', 'Energetic', 55, 9, 'Dad came back', '2024-01-13 18:00:00'),
(4, '2024-01-14', 'Relaxed', 7, 8, 'The dark forces are becoming stronger', '2024-01-14 19:00:00');

INSERT INTO Crying (user_id, name, amount, start_date, end_date) VALUES
(1, '1000 IU', 'Daily', '2024-01-01', '2024-06-01'),
(2, 'Ibuprofen', '200 mg', 'As needed', '2024-01-05', '2024-01-20'),
(2, 'Amoxicillin', '500 mg', 'Every 8 hours', '2024-01-10', '2024-01-20'),
(4, 'Metformin', '500 mg', 'Twice a day', '2024-01-15', '2024-07-15'),
(2, 'Lisinopril', '10 mg', 'Daily', '2024-01-20', '2024-07-20');

INSERT INTO Breakdowns (user_id, b_amount, date) VALUES
(1, 30, '2024-01-10'),
(3, 45, '2024-01-11'),
(2, 55, '2024-01-12'),
(1, 30, '2024-01-16'),
(3, 60, '2024-01-18'),
(3, 50, '2024-01-18'),
(1, 40, '2024-01-19');
