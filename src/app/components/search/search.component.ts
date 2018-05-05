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
  
  constructor(private movieService:MovieService) { }
  
  ngOnInit() {
  }
  GetMovies(title:string) {
    this.movieService.GetMoviesFromApi(title)
      .subscribe(response => {
        this.movies = response.Search;
      }
    );
      
  }


}
