CREATE TABLE Book(
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    author VARCHAR(100) NOT NULL
);

INSERT INTO Book (TITLE, author)
VALUES ('Alice In Wonderland', 'Lewis Carroll'),
       ('Harry Potter', 'J.K Rowling'),
       ('To kill a mockingbird', 'Harper Lee');



CREATE TABLE student (
    student_id SERIAL PRIMARY KEY, 
    student_name VARCHAR(100) NOT NULL UNIQUE, 
    age SMALLINT CHECK(age <= 15)
);

INSERT INTO student (student_name, age)
VALUES ('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14);


CREATE TABLE Library (
    book_id_ref INTEGER REFERENCES book (book_id) ON DELETE CASCADE ON UPDATE CASCADE,
    student_id_ref INTEGER REFERENCES student (student_id)ON DELETE CASCADE ON UPDATE CASCADE,
    borrowed_date DATE,
    PRIMARY KEY(book_id_ref,student_id_ref)
);


INSERT INTO Library (book_id_ref,student_id_ref,borrowed_date)
VALUES ((SELECT book_id FROM Book WHERE title='Alice In Wonderland'),
        (SELECT student_id FROM student WHERE student_name='John'),
        '2022-02-15'),
        ((SELECT book_id FROM Book WHERE title='To kill a mockingbird'),
        (SELECT student_id FROM student WHERE student_name='Bob'),
        '2021-03-03'),
        ((SELECT book_id FROM Book WHERE title='Alice In Wonderland'),
        (SELECT student_id FROM student WHERE student_name='Lera'),
        '2021-05-21'),
        ((SELECT book_id FROM Book WHERE title='Harry Potter'),
        (SELECT student_id FROM student WHERE student_name='Bob'),
        '2021-08-12');



SELECT * from library


-- Display the data
-- Select all the columns from the junction table

SELECT * FROM library


-- Select the name of the student and the title of the borrowed books


SELECT title, student_name
FROM library
INNER JOIN book ON book_id=book_id_ref
INNER JOIN student ON student_id=student_id_ref;

-- Select the average age of the children, that borrowed the book Alice in Wonderland

SELECT ROUND(AVG(age),1)
FROM library
INNER JOIN book ON book_id=book_id_ref
INNER JOIN student ON student_id=student_id_ref
WHERE title='Alice In Wonderland';

-- Select the average age of the children and title per book borrowed

SELECT title, ROUND(AVG(age),1) as avg_age
FROM library
INNER JOIN book ON book_id=book_id_ref
INNER JOIN student ON student_id=student_id_ref
GROUP BY title
ORDER BY avg_age ASC;

-- Delete a student from the Student table, what happened in the junction table ?

DELETE FROM student WHERE student_name='Bob';
-- (SEE THE RESULT IN EXCEL)
















