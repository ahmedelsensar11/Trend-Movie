import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "search"
})

export class SearchPipe implements PipeTransform {

  transform(movies:any, term:any):any {

    if (term == undefined) {
      return movies;
    }
    else{

      return movies.filter(function(movies) {
        return movies.name.toLowerCase().includes(term.toLowerCase())
      })

    }
    
  }
}
