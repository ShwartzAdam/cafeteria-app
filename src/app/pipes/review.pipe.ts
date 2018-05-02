import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reviewPipe'
})
export class ReviewPipe implements PipeTransform {
  transform(value: string, args: any[]): string {
    if (value.toString() === '0') {
      return 'False';
    } else {
      return 'True';
    }

  }
}
