import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Ciclo de vida
export class AppComponent {
  private http : HttpClient
  // injetado
  constructor(http : HttpClient){
    this.http = http
    http
      .get('http://localhost:3000/v1/fotos')
      .subscribe((resultado : Object[]) => {
          this.fotos = resultado
      })
  }

  title = 'Caelumpic';
  fotos = []
  deleteError : string

  removerFotinha = (fotoARemover) => {
    this.http.delete('http://localhost:3000/v1/fotos/' + fotoARemover._id)
      .subscribe(
        () => {
          this.fotos = this.fotos.filter(foto => foto._id !== fotoARemover._id)
        }
        ,(error) => {
          this.deleteError = "Não foi possível apagar a foto " + fotoARemover.titulo
        }
      )
  }

}
