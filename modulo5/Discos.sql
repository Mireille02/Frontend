create database Discos;

use Discos;

create table discos (nombre VARCHAR(50), Artista VARCHAR(50), Anio_De_Publicacion INT, Discografia VARCHAR(50), Precio INT);

INSERT INTO discos (Nombre, Artista, Anio_de_Publicacion,Discografia, Precio)
VALUES
('1989', 'Taylor Swift', 2014, null,10),
('Abbey Road', 'The Beatles', 1969, null,15),
('Lemonade', 'Beyoncé', 2016, null,12),
('Rumours', 'Fleetwood Mac', 1977, null,13),
('Thriller', 'Michael Jackson', 1982, null,17),
('Jagged Little Pill', 'Alanis Morissette', 1995, null,11),
('Pet Sounds', 'The Beach Boys', 1966, null,14),
('The Wall', 'Pink Floyd', 1979, null,18),
('The Miseducation of Lauryn H.', 'Lauryn Hill', 1998,null, 13),
('Like a Prayer', 'Madonna', 1989, null,12),
('Sgt. Pepper''s Lonely Hearts', 'The Beatles', 1967, null,15),
('Back to Black', 'Amy Winehouse', 2006,null, 11),
('Bad', 'Michael Jackson', 1987, null,16),
('Born to Run', 'Bruce Springsteen', 1975, null,14),
('Nevermind', 'Nirvana', 1991, null,12),
('Purple Rain', 'Prince', 1984, null,15),
('The College Dropout', 'Kanye West', 2004,null, 11),
('The Joshua Tree', 'U2', 1987, null,14),
('The Chronic', 'Dr. Dre', 1992, null,13),
('A Night at the Opera', 'Queen', 1975, null,16),
('Hounds of Love', 'Kate Bush', 1985,null, 11),
('Sign o'' the Times', 'Prince', 1987, null,15),
('My Beautiful Dark T. F.', 'Kanye West', 2010, null,12),
('Blonde', 'Frank Ocean', 2016, null,14),
('American Idiot', 'Green', 2004,null, 13);

select * from discos;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '';

select nombre, anio_de_publicacion 
from discos;