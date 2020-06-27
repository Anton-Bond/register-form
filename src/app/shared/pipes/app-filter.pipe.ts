import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appFilter'
})
export class AppFilterPipe implements PipeTransform {

  transform(list, term: string, key: string): any {
    // check if search term is undefined
    if (term === undefined) return list;
    // return updatedlist
    return list.filter(item =>
      item[key].toLowerCase().includes(term.toLowerCase()));
  }

}
