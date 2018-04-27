import { Component, OnInit } from '@angular/core';

import { FotoService } from '../../../services/fotos.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent {

  fotosService: FotoService;

  // injetado
  constructor(fotosService : FotoService){
    this.fotosService = fotosService
    fotosService
      .lista()
      .subscribe((resultado : Object[]) => {
        this.fotos = resultado
      })
  }

  termoBusca: string = ''
  title = 'Caelumpic'
  fotos = []

  erroDelete = false
  removerFoto = function(idFoto){
    this.fotosService
        .deletar(idFoto)
        // callback
        .subscribe(
          () => {
            // deu certo
            this.fotos = this.fotos.filter(foto => foto._id !== idFoto)
            this.erroDelete = false
          }
          ,() => {
            // deu errado
            this.erroDelete = true
          }
        )
  }

}
