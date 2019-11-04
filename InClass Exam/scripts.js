// Aaron Mihalevich
// CIS-131 InClass Exam

// title
// img
//date
// desc
//EXTRA review

// https://api.themoviedb.org/3/review/{review_id}?api_key=<<api_key>>


var httpRequest = new XMLHttpRequest();
        httpRequest.open("get", "https://api.themoviedb.org/3/tv/popular?api_key=20c38770f322031e9daaec50e14cfe4e&language=en-US&page=1");
        httpRequest.send(null);
        httpRequest.onreadystatechange = aFunction;

        function aFunction()
        {
            if (httpRequest.readyState == 4 && httpRequest.status == 200)
            {
                var shows = httpRequest.responseText;
                var jsObject = JSON.parse(shows);
                console.log(jsObject.results)
                
                var app = new Vue({
                    el: "#app",
                    data:{
                        shows: jsObject.results,
                        click: 0,
                        img: "https://image.tmdb.org/t/p/w300",

                    },
                   
                })
                
            }
        }