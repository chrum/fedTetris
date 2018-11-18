import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(values: any, field: string, str: string): any {
    if (!values) {
      return null;
    }

    return values.filter((item) => {
      const value = item[field];
      return value.toLowerCase().indexOf(str.toLowerCase()) > -1;
    });
  }

}
