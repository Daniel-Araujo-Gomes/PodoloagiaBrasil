import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'Aberto'
})
export class AbertoPipe implements PipeTransform {
  transform(value: boolean, ...args: any[]): any {
      return (value == true) ? 'Aberto' : 'Fechado';
  }
}
