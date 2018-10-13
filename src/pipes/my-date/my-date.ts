import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the MyDatePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'myDate',
})
export class MyDatePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: number) {
    let date = new Date(value);
    return (date.getDate() + 1) + "/" + date.getMonth() + "/" + date.getFullYear();
  }
}
