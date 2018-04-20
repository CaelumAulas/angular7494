import { Component, Input } from "@angular/core";

@Component({
  selector: 'foto'
  ,templateUrl: './foto.component.html'
})
export class FotoComponent {
  _id: string;
  @Input() url : string
  @Input() titulo : string
}
