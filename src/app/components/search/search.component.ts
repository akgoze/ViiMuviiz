import { Title } from '@angular/platform-browser';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  movies;
  movieDetail;
  movieItem=[];
  movieDetails = {
    title: "",
    plot: "",
    poster: "",
    actors: "",
    awards: "",
    country: "",
    director: "",
    genre: "",
    language: "",
    rated: ""
  };

  constructor(private movieService:MovieService) { }
  
  ngOnInit() {
  }
  GetMovies(title:string) {
    this.movieService.GetMoviesFromApi(title)
      .subscribe(response => {
        this.movies = response.Search;
        console.log(response);
      }
    );
      
  }

  
  viewDetail(imdbID:string) {
    this.movieService.GetMovieDetailFromApi(imdbID)
      .subscribe(response => {
        this.movieDetail = response;
        console.log(response);
        this.movieDetails.title = this.movieDetail.Title;
        this.movieDetails.plot = this.movieDetail.Plot;
        this.movieDetails.poster = this.movieDetail.Poster;
        this.movieDetails.actors = this.movieDetail.Actors; 
        this.movieDetails.awards = this.movieDetail.Awards;
        this.movieDetails.country = this.movieDetail.Country;
        this.movieDetails.director = this.movieDetail.Director;
        this.movieDetails.genre = this.movieDetail.Genre;
        this.movieDetails.language = this.movieDetail.Language;
        this.movieDetails.rated = this.movieDetail.Rated;
      });
  }
}
