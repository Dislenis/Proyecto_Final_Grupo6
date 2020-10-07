import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  /*transform(value: any, arg: any): any {
    const resultmiSugerencia = [];
    for(const sugerencias of value ){
      if (sugerencias.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultmiSugerencia.push(sugerencias);
      };
    };
    return resultmiSugerencia;
  }*/

  transform(value: any, arg: any): any {
    const resultmiMascota = [];
    for(const mascotas of value ){
      if (mascotas.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultmiMascota.push(mascotas);
      };
    };
    return resultmiMascota;
  }

 

  
}

