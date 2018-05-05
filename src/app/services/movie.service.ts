import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable()
export class MovieService {

  constructor(private http:HttpClient) { }


  GetMoviesFromApi(title:string) {
     return this.http.get(`http://www.omdbapi.com/?s=${title}&apikey=9e0b89ad`);
  }

}
