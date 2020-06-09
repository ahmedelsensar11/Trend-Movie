import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../movies.service"; //import services which i'll use

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.scss"]
})

export class MoviesComponent implements OnInit {
  allMovies: any[]; //will receive data in this array
  term:any;
  constructor(
    _MoviesService: MoviesService //make instance of Service Class
  ) 
  
  {
    _MoviesService.getMovies().subscribe(data => {
      //to access data from moviesServies
      this.allMovies = data.results; //put data in allMoviesArray
    });
  }

  ngOnInit(): void {}
}
