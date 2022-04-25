// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page


// http://www.omdbapi.com/?t=raaz&plot=full

function searchMovies(){
    let movies = document.getElementById('search').value;

   const url = "https://www.omdbapi.com/?i=tt3896198&apikey=5274bad3";


   fetch(url)
   .then(function(res) {

    return res.json();

   })

   .then(function(res){
       append(res)
       console.log(res);

   }).catch(function(err){
       console.log(err);
   });
}


function append(moviesData){
    let movies=document.getElementById("movies");

    let Title=document.createElement('p');
    Title.innerText=moviesData.Title;

    let Poster=document.createElement('Poster');
    Poster.innerHTML=moviesData.Poster;

     

   var btn=document.createElement("button");
   btn.innerText="book_now";

   btn.addEventListener("click", function(){
       btn('p');
       
   });
  


    movies.append(Title, btn);
}


// const searchMovies=async() => {
//     try{

//         const a= document.getElementById("search").value;

//         const res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=5274bad3";
//         `)
//     }
// }