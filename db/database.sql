DROP DATABASE IF EXISTS HealthDiary;
CREATE DATABASE HealthDiary;
USE HealthDiary;

-- Create a table for users
CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    user_level VARCHAR(10) NOT NULL DEFAULT 'regular'
);

-- Create a table for diary entries
CREATE TABLE DiaryEntries (
    entry_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    entry_date DATE NOT NULL,
    mood VARCHAR(50),
    weight DECIMAL(5,2),
    sleep_hours INT,
    notes TEXT,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

CREATE TABLE DoctorNotes (
    entry_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    entry_date DATE NOT NULL,
    notes TEXT,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

CREATE TABLE Doctors (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    user_level VARCHAR(10) NOT NULL DEFAULT 'moderator'
);

-- INSERT User sample data
-- Inserting multiple user rows at once
INSERT INTO Users (username, password, email, user_level) VALUES
  ('johndoe', 'temp-pw-1', 'johndoe@example.com', 'regular'),
  ('janedoe', 'temp-pw-2', 'janedoe@example.com', 'admin'),
  ('mike_smith', 'temp-pw-3', 'mike@example.com', 'moderator');


-- Inserting multiple diary entries
INSERT INTO DiaryEntries (user_id, entry_date, mood, weight, sleep_hours, notes, created_at) VALUES
  (1, '2024-01-10', 'Happy', 70.5, 8, 'Had a great day, felt energetic', '2024-01-10 20:00:00'),
  (1, '2024-01-11', 'Tired', 70.2, 6, 'Long day at work, need rest', '2024-01-11 20:00:00'),
  (2, '2024-01-10', 'Stressed', 65.0, 7, 'Busy day, a bit stressed out', '2023-12-10 21:00:00');

-- Doctors notes
  INSERT INTO DoctorNotes (user_id, entry_date, notes, created_at) VALUES
  (1, '2024-01-10', 'Patient seems aggrivated today', '2024-01-10 12:01:00'),
  (1, '2024-01-11', 'The green horns on the patients head seem to be growing', '2024-01-11 22:55:00'),
  (2, '2024-01-10', 'I have never met this person in my whole life', '2023-12-10 23:03:00');

-- Doctors
  INSERT INTO Doctors (username, password, email, user_level) VALUES
  ('magicmike', 'pw1', 'magic.j.mike@example.com', 'moderator'),
  ('j.j.esus', 'pw1nother2', 'esus.j.j@example.com', 'moderator'),
  ('moldman', 'pw-3', 'moldmanmike@example.com', 'moderator');

-- Example queries
SELECT Users.username, DiaryEntries.entry_date, DiaryEntries.mood, DiaryEntries.notes
  FROM Users, DiaryEntries
  WHERE DiaryEntries.user_id = Users.user_id;

-- Same with JOIN
SELECT Users.username, DiaryEntries.entry_date, DiaryEntries.mood, DiaryEntries.notes
  FROM Users JOIN DiaryEntries ON DiaryEntries.user_id = Users.user_id;

-- Entries for specific username
SELECT entry_date, mood, sleep_hours FROM DiaryEntries
  JOIN Users ON DiaryEntries.user_id = Users.user_id
  WHERE username = 'johndoe';

  -- getting doctors notes
SELECT Doctors.username, DoctorNotes.notes
  FROM Doctors, DoctorNotes
  WHERE DoctorNotes.user_id = Doctors.user_id;

  -- getting doctors info
  SELECT Doctors.username, Doctors.password, Doctors.email, Doctors.user_level
  FROM Doctors;


-- adding doctors id to user
ALTER TABLE Users ADD COLUMN doctors_id INT NOT NULL;

-- UPDATE doctors id
UPDATE Users SET doctors_id = 1 WHERE user_id = 1;
UPDATE Users SET doctors_id = 2 WHERE user_id = 2 OR 3;

-- delete users
delete FROM DiaryEntries where user_id = 1;