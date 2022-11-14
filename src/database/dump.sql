CREATE DATABASE poc

CREATE TABLE movies (
    id integer NOT NULL,
    name text NOT NULL,
    platform text NOT NULL,
    genre text NOT NULL,
    status boolean NOT NULL,
    sinopse text
);

INSERT INTO movies(name, platform, genre, status) VALUES("velozes e furiosos","netflix","ação",false)
INSERT INTO movies(name, platform, genre, status) VALUES("tropa de elite","netflix","ação",false)
INSERT INTO movies(name, platform, genre, status) VALUES("rambo","prime","ação",false)
INSERT INTO movies(name, platform, genre, status) VALUES("Thor","netflix","herois",false)
