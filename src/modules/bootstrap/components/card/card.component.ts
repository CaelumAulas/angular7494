import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "card",
  templateUrl: "./card.component.html"
})
export class CardComponent implements OnInit{
  constructor(){
    console.log("Titulo no construtor " + this.titulo)
  }

  // init é fase do ciclo de vida
  ngOnInit(): void {
    this.titulo = this.titulo.length > 7
      ? this.titulo.substr(0, 7) + "..."
      : this.titulo
  }

  @Input() titulo : string
}
