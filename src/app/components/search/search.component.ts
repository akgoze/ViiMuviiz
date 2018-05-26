import { AngularFireAuthModule } from 'angularfire2/auth';
import { Title } from '@angular/platform-browser';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';

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

 

  constructor(private movieService:MovieService, private afs:AngularFirestore) { }
  
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
        this.movieDetails.actors = this.movieDetail.Actors; 
        this.movieDetails.awards = this.movieDetail.Awards;
        this.movieDetails.director = this.movieDetail.Director;
        this.movieDetails.genre = this.movieDetail.Genre;
        this.movieDetails.rated = this.movieDetail.Rated;
      });
  }


  AddMovie(movieId:HTMLInputElement, movieTitle: HTMLInputElement, moviePoster: HTMLInputElement) {
    this.movieService.GetMovieDetailFromApi(movieId.value)
    .subscribe(response => {
      
      const createdAt:Date = new Date();
      const id = this.afs.createId();

        this.movieDetail = response;

        console.log(this.movieDetail.Ratings[0].Value);
        

        const newMovie = {
          name: movieTitle.value,
          id: movieId.value,
          poster: moviePoster.value,
          plot: this.movieDetail.Plot,
          actor: this.movieDetail.Actors,
          ratings: this.movieDetail.Ratings,
          createdAt: createdAt
        }
        this.afs.firestore.doc('movies/'+id).set(newMovie).then(function () {
          console.log("ADDED NEW MOVIE");
        }).catch(function () {
          console.log("ERROR");
        });
      
    });
  }
}
