import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'firstUpperLetter'})
export class FirstUpperLetterPipe implements PipeTransform {
  transform(value: string): string {
    return value.charAt(0).toUpperCase() + value.substring(1);;
    //return Math.pow(value, isNaN(exponent) ? 1 : exponent);
  }
}
