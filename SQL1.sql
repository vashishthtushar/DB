create database college ;
use college ;

create table student (
	rollno int,
    name varchar(30),
    age int
);

insert into student
values 
(101, "tushar", 22),
(102, "aditya", 19);

select * from student;

create database instagram;
use instagram;

CREATE TABLE user (
	id INT,
    age INT,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(50) UNIQUE,
    followers INT DEFAULT 0,
    following INT,
    CONSTRAINT CHECK (age >= 13),
    PRIMARY KEY (id)
);

INSERT INTO user 
(id, age, name, email, followers, following)
VALUES
(1, 14, "adam", "adam@yahoo.in", 123, 145),
(2, 15, "bob", "bob123@gmail.com", 200, 200),
(3, 16, "cassey", "casey@email.com", 300, 306);

SELECT id, name, age, email FROM user;

SELECT * FROM user;

SELECT name, followers FROM user
WHERE followers >= 200;

SELECT name, age, followers FROM user
WHERE age > 15 AND followers > 200;

SELECT name, age, followers FROM user
WHERE age > 14
LIMIT 2;  #only this much rows to be return

SELECT name, age, followers FROM user
ORDER BY followers DESC;

SELECT max(followers)
FROM user;

SELECT age, count(id)  #count = an aggregation function
FROM user
GROUP BY age;

SELECT age, max(followers)  
FROM user
GROUP BY age
HAVING max(followers) > 200;

UPDATE user
SET followers = 500
WHERE age = 16;

SELECT * FROM user;

SET SQL_SAFE_UPDATES = 0;

ALTER TABLE user
ADD COLUMN city VARCHAR(25) DEFAULT "delhi";

ALTER TABLE user
DROP COLUMN age;

ALTER TABLE instaUser
RENAME TO user;

ALTER TABLE user
CHANGE COLUMN followers subs INT DEFAULT 0;

SELECT * FROM instaUser;

CREATE TABLE post(
	id INT,
    content VARCHAR(100),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES user(id)
);

DROP TABLE post;
SELECT * FROM post;