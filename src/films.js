

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(function(dato){
    return dato["director"];
  });
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(function(dato){
    return dato.director == director;
  });
  return result;
  
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  arr = getMoviesFromDirector(array, director);
  puntuacion = arr.map(
    function(dato){
      return dato["score"];
    });
  let result = puntuacion.reduce(function(a,b){
    return a+b;
  });
  result = result / puntuacion.length;
  return Number(result.toFixed(2));
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  array = array.map(function(title){
    return title["title"];
  })
  return (array.sort()).slice(0,20);
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  arr = new Array();
  arr = array.sort((a, b) => (a.title > b.title) ? 1 : -1);
  arr = arr.sort((a,b) => a.year - b.year);
  return arr;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array,categoria) {
  punto = [];
  vacio = 0;
  array.filter(function(dato){
    dato.genre.filter(function(cat){
      if(cat == categoria){
        if(dato.score == '' || dato.score == null){
          punto.push(0);
          vacio +=1;
        }
        else{
          punto.push(dato.score);
        }
      }
    });
  });
  let result = punto.reduce((a,b) => a+b);
  result = result / (punto.length - vacio);
  if(result % 1 == 0){
  return parseFloat(result.toFixed(0));
  }
  else{
    return parseFloat(result.toFixed(2));
  }
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  movieDuriation = [];
  array.map(function(dato){
    if(dato.duration.toString().indexOf(" ") == 2){
      var t = dato.duration.split(" ");
        var t1 = parseInt(t[0].toString().replace('h','')) * 60;
        var t2 = parseInt(t[1].toString().replace('min',''));
        console.log(t2);
        dato.duration = t1 + t2;
    }
    else{
        dato.duration = parseInt(dato.duration.toString().replace('h','')) * 60;
    }
    movieDuriation.push(dato);
  })

  return movieDuriation;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array,year) {
  pelis  = array.filter(dato => dato.year == year);
  pelis = pelis.sort((a,b) => a.score + b.score)
  peli=[];
  peli.push(pelis[0]);
  return peli;
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
