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
    http
      .get('http://localhost:3000/v1/fotos')
      .subscribe((resultado : Object[]) => {
          this.fotos = resultado
      })
  }

  title = 'Caelumpic';
  fotos = []
}
