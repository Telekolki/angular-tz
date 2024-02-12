import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullName',
  standalone: true
})
export class FullNamePipe implements PipeTransform {
  transform(nameArray: string[], ...args: any): string {
    return nameArray[0] + ' ' + nameArray[1];
  }
}
