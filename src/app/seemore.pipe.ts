import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seemore'
})
export class SeemorePipe implements PipeTransform {

  transform(desc:string , limit:number ): string {

    return desc.substr(0 , limit);
    
  }

}
