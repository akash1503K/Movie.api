const searchMovie =() => {
    const movieName =
    document.getElementById("movieinput").value.trim();
    const url = `http://www.omdbapi.com/?i=tt3896198&apikey=c08f74b5`;

  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const detailsDiv =
         document.getElementById("movieDetails");

        if (data.Response === "True") {
          detailsDiv.innerHTML = 
          ` <h2>${data.Title} (${data.Year})</h2>
            <img src="${data.Poster}" alt="Poster" style="width:200px;">
            <p>${data.Plot}</p>`
          ;
        } else {
          detailsDiv.innerHTML = `<p>Movie could not be found. Please enter a valid name.</p>`;
        }
      })
      .catch(error => console.error("Error:", error));
  }

  window.searchMovie = searchMovie;