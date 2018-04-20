import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FotoService } from '../../services/foto.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent {

  private fotoService: FotoService;

  // injetado
  constructor(fotoService : FotoService){
    this.fotoService = fotoService
    fotoService.lista()
      .subscribe((resultado : Object[]) => {
          this.fotos = resultado
      })
  }

  fotos = []
  deleteError : boolean

  removerFotinha = (idDaFoto) => {
    this.fotoService.deletar(idDaFoto)
      .subscribe(
        () => {
          this.fotos = this.fotos.filter(foto => foto._id !== idDaFoto)
          this.deleteError = false
        }
        ,(error) => {
          this.deleteError = true
        }
      )
  }

}
