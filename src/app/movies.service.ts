import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //"HttpClient":contain xmlhttprequest object
import {Observable} from 'rxjs';  //obsrvable is a class contain fun which make api observable  


@Injectable({
  providedIn: 'root'
})



export class MoviesService {
  
  moviesUrl:string ="https://api.themoviedb.org/3/trending/all/day?api_key=6967323d80d456d1a1a851a20d15e57a"

  constructor(private _HttpClient:HttpClient){}

  getMovies():Observable<any>{
    return this._HttpClient.get(this.moviesUrl)
  }

}
