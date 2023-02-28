import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  /**
   * 
   * @param value 
   * @param args 
   * @returns 
   */
  transform(value: any[], args: any): any {

    if (!value) return null;
    if (!args) return value;

    args = args.toUpperCase();

    return value.filter((data: any) => {
      return JSON.stringify(data).toUpperCase().includes(args);
    })

  }

}
