Exercise 1: DVD Rental
Instructions
-----------------------------
--Get a list of all film languages.

SELECT * FROM language;
-----------------------------------
--Get a list of all films joined with their languages – select the following details : film title, description, and language name. Try your query with different joins:
--Get all films, even if they don’t have languages.
--Get all languages, even if there are no films in those languages.

SELECT film.title, film.description, language.*
FROM film
INNER JOIN language 
ON language.language_id=film.language_id;
---------------------------------
--Create a new table called new_film with the following columns : 
--id, name. Add some new films to the table.
CREATE TABLE new_film (
  id SERIAL PRIMARY KEY ,
  name VARCHAR(30)
);

INSERT INTO new_film (name)
VALUES ('Three comrads'),
       ('Croiassant patol'),
	   ('Crumpet');

--Create a new table called customer_review, which will contain film reviews that customers will make.
--Think about the DELETE constraint: if a film is deleted, it’s review should be automatically deleted.
--It should have the following columns:
--review_id – a primary key, non null, auto-increment.
--film_id – references the new_film table. The film that is being reviewed.
--language_id – references the language table. What language the review is in.
--title – the title of the review.
--score – the rating of the review (1-10).
--review_text – the text of the review. No limit on the length.
--last_update – when the review was last updated.
CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY NOT NULL ,
	film_id INTEGER REFERENCES new_film(id) ON DELETE CASCADE,
    language_id INTEGER REFERENCES language(language_id),
	title VARCHAR(30),
	score SMALLINT,
	review_text TEXT,
    last_update DATE 
);

--Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update)
VALUES ((SELECT id FROM new_film WHERE name='Crumpet'), (SELECT language_id FROM language WHERE name='English'), 'Perfect', '10', 'Blablablablabla', NOW())
SELECT * FROM customer_review

--Delete a film that has a review from the new_film table, what happens to the customer_review table?*/
DELETE from customer_review WHERE review_id =1;




