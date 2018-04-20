import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Ciclo de vida
export class AppComponent {

  // injetado
  constructor(http : HttpClient){
    this.http = http
    http
      .get('http://localhost:3000/v1/fotos')
      .subscribe((resultado : Object[]) => {
        this.fotos = resultado
      })
  }

  http: HttpClient
  termoBusca: string = ''
  title = 'Caelumpic'
  fotos = []

  erroDelete = false
  removerFoto = function(idFoto){
    this.http
      .delete("http://localhost:3000/v1/fotos/" + idFoto)
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
