import { Pipe, PipeTransform } from '@angular/core';
import { FotoComponent } from '../../modules/bootstrap/components/foto/foto.component';

@Pipe({
  name: 'filtroPorTitulo'
})
export class FiltroPorTituloPipe implements PipeTransform {

  transform(fotos: FotoComponent[] = [], palavra: string = ''): any {
    return fotos.filter(foto => foto.titulo.toLowerCase().includes(
      palavra.toLowerCase()
    ))
  }

}
