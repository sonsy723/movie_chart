// API 영화 순위 불러오기 
const apiKey = '4c329d16b4a318497a30199297839bb6'; // API key

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzMyOWQxNmI0YTMxODQ5N2EzMDE5OTI5NzgzOWJiNiIsInN1YiI6IjY2MjY5MDI5YjlhMGJkMDE2MWQ1YmQzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DVGQRZTSfphqw6UNo4rQYzhsF-C3GzH4apmBXzDPC0g'
  }
};
  
fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => {
    let movieList = response['results'];
    movieList.forEach(element => {
      
      let movieTitle = element['title'];
      let movieImg = element['poster_path'];
      let movieId = element['id'];
      let movieRate = element['vote_average'];
      let movieOverview = element['overview'];
      let card = `
        <div class="movie-card" id="${movieId}">
        <img class="movie-img" src="https://image.tmdb.org/t/p/w500${movieImg}" alt="${movieTitle}"/>
        <h3 class="movie-title">${movieTitle}</h3>
        <p>${movieOverview}</p>
        <p>Rating: ${movieRate}</p>
        </div>
      `;
    
      document.getElementById('card-list').innerHTML += card; 

      const clickAlert = document.querySelectorAll('.movie-card');
      clickAlert.forEach(element => {

        element.addEventListener('click', function(){
          const movieIdd = this.getAttribute('id')
          alert(movieIdd)
        });
      });

      });
       

  })
  .catch(err => console.error(err));


  const searchInput = document.querySelector('.search-input');
  const searchBtn = document.querySelector('.search-btn');
  searchBtn.addEventListener('click', function(e){
    e.preventDefault();
    const val = searchInput.value;
    searchData(val)
  })
  

  function searchData (val) {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${val}&api_key=${apiKey}`, options)
  .then(response => response.json())
  .then(response => {
    const cardListContainer = document.querySelector('#card-list');
    cardListContainer.innerHTML = "";

    let movieList = response['results'];
    movieList.forEach(element => {
      
      let movieTitle = element['title'];
      let movieImg = element['poster_path'];
      let movieId = element['id'];
      let movieRate = element['vote_average'];
      let movieOverview = element['overview'];
      let card = `
        <div class="movie-card" id="${movieId}">
        <img class="movie-img" src="https://image.tmdb.org/t/p/w500${movieImg}" alt="${movieTitle}"/>
        <h3 class="movie-title">${movieTitle}</h3>
        <p>${movieOverview}</p>
        <p>Rating: ${movieRate}</p>
        </div>
      `;
      document.getElementById('card-list').innerHTML += card; 

      });
       

  })
  .catch(err => alert(err));
  }