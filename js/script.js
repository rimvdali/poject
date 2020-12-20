"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt("Назовите один из последних фильмов", ""),
      b = prompt("На сколько вы его оцените?", ""),
      c = prompt("Назовите один из последних фильмов", ""),
      d = prompt("На сколько вы его оцените?", "");


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);