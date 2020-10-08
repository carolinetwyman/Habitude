DROP DATABASE IF EXISTS Habitude_db;
CREATE DATABASE Habitude_db;
USE Habitude_db;
CREATE TABLE users (
    user_id INTEGER NOT NULL AUTO_INCREMENT,
    user_name VARCHAR(45) NOT NULL,
    user_email VARCHAR(45) NOT NULL,
    password VARCHAR(45) NOT NULL,
    PRIMARY KEY (user_id)
),
CREATE TABLE goals (
    user_goals INT NOT NULL AUTO_INCREMENT,
    sleep_time BOOLEAN DEFAULT false,
    mindful_minutes BOOLEAN DEFAULT false,
    exercise_time BOOLEAN DEFAULT false,
    user_id int,
    PRIMARY KEY (user_goals),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
),
CREATE TABLE daily_log (
    log_id INTEGER NOT NULL AUTO_INCREMENT,
    sleep_time INT,
    mindful_minutes INT,
    exercise_time INT,
    user_id int,
    PRIMARY KEY (log_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
),
CREATE TABLE habits_formed (
    habit_id INTEGER NOT NULL AUTO_INCREMENT,
    sleep_time BOOLEAN DEFAULT false,
    mindful_minutes BOOLEAN DEFAULT false,
    exercise_time BOOLEAN DEFAULT false,
    user_id INT,
    PRIMARY KEY (habit_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
)