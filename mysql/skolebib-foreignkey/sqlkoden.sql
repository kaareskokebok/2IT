CREATE DATABASE skolebib;

USE skolebib;  # den aktive databasen

CREATE TABLE IF NOT EXISTS forfattere (
  id INT AUTO_INCREMENT PRIMARY KEY,
  fornavn VARCHAR(100),
  etternavn VARCHAR(100),
  fødselsår INT
);


CREATE TABLE IF NOT EXISTS bok (
  id INT AUTO_INCREMENT PRIMARY KEY,
  boktittel VARCHAR(200),
  utgivelsesår INT,
  forlag VARCHAR(100),
  antall_sider INT,
  forfatter_id INT,
  FOREIGN KEY (forfatter_id) REFERENCES forfattere(id)
);

SELECT bok.boktittel, bok.utgivelsesår, forfattere.fornavn, forfattere.etternavn 
FROM bok
JOIN forfattere ON bok.forfatter_id = forfattere.id;

INSERT INTO forfattere (fornavn, etternavn, fødselsår)
VALUES
('John', 'Steinbeck', 1902),
('Jane', 'Austen', 1775),
('Mark', 'Twain', 1835),
('Agatha', 'Christie', 1890),
('Roald', 'Dahl', 1916);

INSERT INTO bok (boktittel, utgivelsesår, forlag, antall_sider, forfatter_id)
VALUES
  ('The Grapes of Wrath', 1939, 'Viking Press', 464, 1),
  ('Of Mice and Men', 1937, 'Covici Friede', 187, 1),
  ('East of Eden', 1952, 'Viking Press', 601, 1),
  ('Pride and Prejudice', 1813, 'T. Egerton', 432, 2),
  ('Sense and Sensibility', 1811, 'T. Egerton', 416, 2),
  ('The Adventures of Tom Sawyer', 1876, 'American Publishing Company', 274, 3),
  ('Adventures of Huckleberry Finn', 1884, 'Chatto & Windus', 366, 3),
  ('The Prince and the Pauper', 1881, 'James R. Osgood & Co.', 275, 3),
  ('Life on the Mississippi', 1883, 'Osgood, James R. & Co.', 624, 3),
  ('Murder on the Orient Express', 1934, 'Collins Crime Club', 256, 4),
  ('The Murder of Roger Ackroyd', 1926, 'Collins Crime Club', 312, 4),
  ('And Then There Were None', 1939, 'Collins Crime Club', 272, 4),
  ('Death on the Nile', 1937, 'Collins Crime Club', 288, 4),
  ('Charlie and the Chocolate Factory', 1964, 'Alfred A. Knopf', 162, 5),
  ('Matilda', 1988, 'Jonathan Cape', 240, 5),
  ('The BFG', 1982, 'Jonathan Cape', 208, 5);


