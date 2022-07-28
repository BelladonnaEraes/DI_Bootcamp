CREATE TABLE customer (
    customer_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50) NOT NULL
);

CREATE TABLE profile (
    profile_id SERIAL PRIMARY KEY,
    isLoggedIn BOOLEAN DEFAULT FALSE,
    customer_id_ref INTEGER UNIQUE REFERENCES customer (customer_id)
);


INSERT INTO customer (first_name, last_name)
VALUES ('John','Doe'),('Jerome','Lalu'),('Lea', 'Rive');

-- use the DEFAULT contraint for FALSE
INSERT INTO profile (isLoggedIn, customer_id_ref)
VALUES (TRUE, (SELECT customer_id FROM customer WHERE first_name='John')),
       (DEFAULT, (SELECT customer_id FROM customer WHERE first_name='Jerome'));


-- Use the relevant types of Joins to display:

-- The first_name of the LoggedIn customers

-- DON'T NEED TO CHECK IF isLoggedIn TRUE BECAUSE THE WHERE CLAUSE CHECKS
-- AUTOMATICALLY IF THE VALUE OF THE COLUMN IF TRUE
SELECT first_name
FROM customer
INNER JOIN profile
ON customer_id=customer_id_ref
WHERE isLoggedIn;

-- All the customers first_name and isLoggedIn columns - 
-- even the customers those who don’t have a profile.

SELECT first_name, isLoggedIn
FROM customer
LEFT JOIN profile
ON customer_id=customer_id_ref;

-- SYNTAX
-- SELECT columnnames
-- FROM table1
-- INNER JOIN table2

-- only the false
SELECT COUNT(*) FROM profile
WHERE isLoggedIn=FALSE;


-- false and null
SELECT COUNT(*)
FROM customer
LEFT JOIN profile
ON customer_id=customer_id_ref
WHERE isLoggedIn=FALSE or isLoggedIn IS NULL;

SELECT COUNT(*)
FROM customer
LEFT JOIN profile
ON customer_id=customer_id_ref
WHERE isLoggedIn<>TRUE OR isLoggedIn IS NULL;

SELECT COUNT(*)
FROM customer
LEFT JOIN profile
ON customer_id=customer_id_ref
WHERE isLoggedIn!=TRUE OR isLoggedIn IS NULL;

-- NULL IS CONSIDERED UNKNOWN
-- THE CONTRARY OF TRUE IS FALSE
SELECT COUNT(*)
FROM customer
LEFT JOIN profile
ON customer_id=customer_id_ref
WHERE isLoggedIn!=TRUE;

-- only one
SELECT COUNT(*)
FROM customer
LEFT JOIN profile
ON customer_id=customer_id_ref
WHERE isLoggedIn IN (FALSE,NULL);

-- in means 
-- isLoggedIn=False or isLoggedIn=Null
-- You can't use null values in a where clause using IN
-- because IN applies the standard = operator. This one, of course, fails when comparing NULLs.

READ THIS ABOUT NULL AND NOT IN
https://web.archive.org/web/20141229070855/http://www.oraclebin.com/2013/01/beware-of-nulls.html

