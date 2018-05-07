import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

interface Movie {
  movie_id: string;
  movie_name: string;
  movie_type: string;
  movie_poster: string;
  movie_rank: number;
  id?: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    
  moviesCollection : AngularFirestoreCollection<Movie>;
  movies: Observable<Movie[]>;

  constructor(private afs: AngularFirestore) { }
  
  ngOnInit() {

    this.moviesCollection = this.afs.collection('movies')
    this.movies = this.moviesCollection.valueChanges()
    
  }
}
