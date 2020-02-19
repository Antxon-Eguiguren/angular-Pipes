import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    const arrPalabras = value.split(' ');
    const arrPalabrasMayus = arrPalabras.map(palabra => {
      return palabra.charAt(0).toUpperCase() + palabra.slice(1);
    });
    return arrPalabrasMayus.join(' ');
  }
}
