--CREATE TABLE item(
--item_id SERIAL PRIMARY KEY,
--item_name VARCHAR (50) NOT NULL,
-- item_quantity SMALLINT NOT NULL
--);
--INSERT INTO item(item_name, item_quantity)
--VALUES ('Small Desk', 100),
--       ('Large desk', 300),
--       ('Fan', 80);
--CREATE TABLE customers(
--customers_id SERIAL PRIMARY KEY,
--customers_first_name VARCHAR (50) NOT NULL,
--customers_last_name VARCHAR (50) NOT NULL
--);
--INSERT INTO customers(customers_first_name, customers_last_name)
--VALUES ('Greg', 'Jones'),
--       ('Sandra', 'Jones'),
--	   ('Scott', 'Scott'),
--	   ('Trevor', 'Green'),
--      ('Melanie', 'Johnson');

--SELECT * FROM item
--SELECT item_name FROM item WHERE item_quantity>80
--SELECT item_name FROM item WHERE item_quantity>=300
--SELECT * FROM customers WHERE customers_last_name='Smith'
--SELECT * FROM customers WHERE customers_last_name='Jones'
--SELECT * FROM customers WHERE customers_first_name !='Scott'


/* Exercise 1 : Items And Customers 25.07.2022
Instructions
We will work on the public database that we created yesterday.

Use SQL to get the following from the database:
1.All items, ordered by price (lowest to highest).
2.Items with a price above 80 (80 included), ordered by price (highest to lowest).
3.The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary 
key column from the results.
4.All last names (no other columns!), in reverse alphabetical order (Z-A)*/

SELECT * FROM item ORDER BY item_quantity ASC;
SELECT * FROM item WHERE item_quantity>80 ORDER BY item_quantity ASC;
SELECT customers_first_name, customers_last_name FROM customers 
ORDER BY customers_first_name ASC LIMIT 3;
SELECT customers_last_name FROM customers 
ORDER BY customers_last_name DESC;




