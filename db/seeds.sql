USE Habitude_db;

INSERT INTO users (user_name, user_email, password)
VALUES ('Jrue Holiday', 'jholiday@gmail.com','Hoops4Life!'),
('Amy Poehler','tinddafeyfriend@gmail.com','SNL4EVR'),
('Jeff Bezos','muchosebezos@gmail.com','BarnesIgnoble');

USE Habitude_db;

INSERT INTO daily_log (sleep_time, mindful_minutes, exercise_time, user_id)
VALUES (8, 30, 60, 1), (7, 40, 30, 2), (6, 60, 40, 3);

USE Habitude_db;

INSERT INTO goals (sleep_time, mindful_minutes, exercise_time, user_id)
VALUES (8, 60, 60, 1), (8, 30, 60, 2), (8, 60, 60, 3)