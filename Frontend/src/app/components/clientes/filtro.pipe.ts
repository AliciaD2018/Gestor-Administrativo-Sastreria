import { Pipe, PipeTransform } from '@angular/core';
import { Articulo } from './clientes.component';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(Articulo: any, arg: any): any {
    const resultPosts = [];
    for(const post of Articulo){
      if(post.nombre.indexOf(arg) > -1){
         resultPosts.push(post);
      };
    };
    return resultPosts;
  }

}
