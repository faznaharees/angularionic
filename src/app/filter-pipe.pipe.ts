import { Pipe, PipeTransform } from '@angular/core';
import 'rxjs'
@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(names: any,term:string, ...args: unknown[]): unknown {
    if(term === undefined)
     { return names;  
      console.log(names);} 
   return names.filter(main => {
     return main.title.toLowerCase().includes(term.toLowerCase());
   })  
 }
  

}
