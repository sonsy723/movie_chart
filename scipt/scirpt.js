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
    let movielist = response['results'];
    movielist.forEach(element => {
      
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
    

      // card 추가하여 html안에 삽입
      document.getElementById('card-list').innerHTML += card; 

      // card 클릭하면 alert창으로 id 띄우기
      // const aa = document.querySelector('.movie-card');
      // aa.addEventListener('click', function () {
      //   alert(movieId)
      // })
      const clickAlert = document.querySelectorAll('.movie-card');
      clickAlert.forEach(element => {

        element.addEventListener('click', function(){
          // alert(`영화 id : ${movieId}`);
          const movieIdd = this.getAttribute('id')
          alert(movieIdd)
        });
      });

      });
       

  })
  .catch(err => console.error(err));


  let searchInput = document.querySelector('.search-input');
  let searchBtn = document.querySelector('.search-btn');
  searchBtn.addEventListener('click', function(e){
    e.preventDefault();
    let val = searchInput.value;
    console.log(val);
    searchData(val)
  })
  

  function searchData (val) {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${val}&api_key=${apiKey}`, options)
  .then(response => response.json())
  .then(response => {
    const cardListContainer = document.querySelector('#card-list');
    cardListContainer.innerHTML = "";

    let movielist = response['results'];
    movielist.forEach(element => {
      
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
  .catch(err => console.error(err));
  }




//   피드백
// const apiKey = '4c329d16b4a318497a30199297839bb6'; // API key
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzMyOWQxNmI0YTMxODQ5N2EzMDE5OTI5NzgzOWJiNiIsInN1YiI6IjY2MjY5MDI5YjlhMGJkMDE2MWQ1YmQzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DVGQRZTSfphqw6UNo4rQYzhsF-C3GzH4apmBXzDPC0g'
//   }
// };
// fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
//   .then(response => response.json())
//   .then(response => {
//     let movielist = response['results'];
//     movielist.forEach(element => {
//       let movieTitle = element['title'];
//       let movieImg = element['poster_path'];
//       let movieId = element['id'];
//       let movieRate = element['vote_average'];
//       let movieOverview = element['overview'];
//       // console.log(element);

//       let newCard = document.createElement('div'); // <div></div>
//       newCard.className = "movie-card";
//       newCard.id = movieId; // <div class="movie-card" id="${movieId}"></div>
//       newCard.innerHTML =   `<img src="${movieImg}" alt="${movieTitle}"/>
//       <h3 class="movie-title">${movieTitle}</h3>
//       <p>${movieOverview}</p>
//       <p>Ration: ${movieRate}</p>`
//       newCard.addEventListener('click', ()=> {
//         console.log(movieTitle)
//       })

//       console.log(card);
//       document.getElementById('card-list').appendChild(newCard);
//       });
//   })
//   .catch(err => console.error(err));