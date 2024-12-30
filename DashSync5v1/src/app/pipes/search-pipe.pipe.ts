import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe',
  pure: false
})
export class SearchPipePipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(item =>
      item.ename.toLowerCase().includes(searchText)
    );
  }
}
