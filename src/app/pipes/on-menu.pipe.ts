import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onMenuPipe'
})
export class MenuPipe implements PipeTransform {
  transform(value: string, args: any[]): string {
    if (value.toString() === '0') {
      return 'No';
    } else {
      return 'Yes';
    }

  }
}
