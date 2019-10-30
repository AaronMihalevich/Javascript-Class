var aryMovies = ['Matrix', 'Mulan', 'Joker']

Vue.component('section-list',{
    props:['themovs'],
    template:  
    `
        <section>
            <h5><slot></slot></h5>
            <img v-bind:src="imgsrc">
            <list-item v-for="movie in themovs">{{movie}}</list-item>
        </section>
    `,
    data: function()
    {
        return{
            imgsrc : "HotFuzz.jpg"
        }
    }
})

Vue.component('list-item', {
    template: 
    `<p><slot></slot></p>`
})



var newvue = new Vue({
    el: "#app",
    data:
    {
        mess: "Alo Lume",
        movies: aryMovies, 
        tvshows: ['New Show', 'Another Show', 'A Third Show']
    }
})