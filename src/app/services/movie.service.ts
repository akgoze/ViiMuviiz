import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';  
 
@Injectable() 
export class MovieService { 
  
  apikey: string = '9e0b89ad';

  constructor(private http:HttpClient) { } 
  
 
  GetMoviesFromApi(title:string) { 
     return this.http.get(`http://www.omdbapi.com/?s=${title}&apikey=${this.apikey}`); 
  } 
  
  GetMovieDetailFromApi(imdbID:string) {
    return this.http.get(`http://www.omdbapi.com/?i=${imdbID}&apikey=${this.apikey}`)
  }

} 