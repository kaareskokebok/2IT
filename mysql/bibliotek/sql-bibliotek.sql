-- DROP DATABASE bibliotek;
CREATE DATABASE bibliotek;

USE bibliotek;  # den aktive databasen

CREATE TABLE boker (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tittel VARCHAR(100) NOT NULL,  -- kan ikke lagre en bok uten tittel
    forfatter VARCHAR(100) NOT NULL,
    aar INT,
    laanestatus ENUM("tilgjengelig", "utlånt") DEFAULT "tilgjengelig"
);

INSERT INTO boker (tittel, forfatter, aar, laanestatus)
VALUES
("Sult", "Knut Hamsun", 1890, "tilgjengelig"),
("Albertine", "Christian Krohg", 1886, "utlånt"),
("Kristin Lavransdatter", "Sigrid Undset", 1920, "tilgjengelig"),
("Markens Grøde", "Knut Hamsun", 1917, "utlånt"),
("Haugtussa", "Arne Garborg", 1895, "tilgjengelig"),
("Slåttekar i himmelen", "Edvard Hoem", 2014, "tilgjengelig"),
("Genanse og verdighet", "Dag Solstad", 1994, "tilgjengelig"),
("Ut og stjæle hester", "Per Petterson", 2003, "utlånt"),
("Nokon kjem til å komme", "Jon Fosse", 1992, "tilgjengelig"),
("Et dukkehjem", "Henrik Ibsen", 1879, "utlånt"),
("Peer Gynt", "Henrik Ibsen", 1867, "tilgjengelig"),
("Gift", "Alexander Kielland", 1883, "tilgjengelig"),
("Amtmandens Døtre", "Camilla Collett", 1854, "tilgjengelig"),
("Den fjerde nattevakt", "Johan Falkberget", 1923, "utlånt"),
("Fuglane", "Tarjei Vesaas", 1957, "tilgjengelig"),
("Hellemyrsfolket", "Amalie Skram", 1887, "tilgjengelig"),
("Pan", "Knut Hamsun", 1894, "utlånt"),
("Mysterier", "Knut Hamsun", 1892, "tilgjengelig"),
("Synnøve Solbakken", "Bjørnstjerne Bjørnson", 1857, "tilgjengelig"),
("Orions belte", "Jon Michelet", 1977, "utlånt");

SELECT * FROM boker;