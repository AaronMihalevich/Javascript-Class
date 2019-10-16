var obj = {
    movie: "Hawaii 5-0",
    budget: 63000000,
    genres: {
        id: 18,
        name: "Drama"

    }
}

// console.log(obj.movie)
// console.log(obj.genres.name)

//convert object to jason
var jsonString = JSON.stringify(obj);
console.log(jsonString)

//convert that json back to an object
var backToObject = JSON.parse(jsonString);
console.log(backToObject)

window.addEventListener('load', initialPage);

function initialPage()
{
    document.getElementById('movieTitle').innerHTML = backToObject.movie;
    document.getElementById('desc').innerHTML = backToObject.budget;
}