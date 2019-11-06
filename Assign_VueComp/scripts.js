// Create a page that:

//     Utilizes an ajax call (either as a jQuery method, or as a XMLHttpRequest Object) to the movie database (Use Movies – Now Playing)
//     Load the movies into an array (or an object) outside of the Vue instance
//     Link your array to the Vue instance and then utilize the Vue instance in your html
//     Utilizes a VUE component. A good candidate for a component here is a Bootstrap Card component
//     Each component must show the Image, Title and brief description
//     Utilizing the Vue component you created, display three cards displaying the top three movies.

// Note: for this assignment you do not have to use child components as we did in class. But you must create at least one component which will be the template for your card displays

var httpRequest = new XMLHttpRequest();
        httpRequest.open("get", "https://api.themoviedb.org/3/movie/now_playing?api_key=20c38770f322031e9daaec50e14cfe4e&language=en-US&page=1");
        httpRequest.send(null);
        httpRequest.onreadystatechange = aFunction;

        function aFunction()
        {
            if (httpRequest.readyState == 4 && httpRequest.status == 200)
            {
                var moviesRequest = httpRequest.responseText;
                var jsObject = JSON.parse(moviesRequest);
                var topMovies = jsObject.results;
                console.log(jsObject.results)
                console.log(topMovies)

                Vue.component('movie-list',{
                    props:['themovies'],
                    template:  
                    `
                        <div class="row justify-content-center">
                            <div v-for="(movie, index) in themovies" v-if="index <=2">
                                <div class="col">
                                    <div class="card" style="width: 20rem; margin: 50px;">
                                        <img v-bind:src="imgsrc + movie.poster_path" class="card-img-top">
                                        <div class="card-body">
                                            <h5 class="card-title">{{movie.title}}</h5>
                                            <p class="card-text" style="height: 10rem; overflow: auto;">{{movie.overview}}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `,
                    data: function()
                    {
                        return{
                            imgsrc: "https://image.tmdb.org/t/p/w300"
                        }
                    }
                })


                var app = new Vue ({
                    el: "#app",
                    data: {
                        movies: topMovies,
                        title: "Now Playing"
                    }
                })
            }
        }