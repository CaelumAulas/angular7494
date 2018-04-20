import { Component, Input } from "@angular/core";

@Component({
  selector: 'foto'
  ,templateUrl: './foto.component.html'
})
export class FotoComponent {
  @Input() url
  @Input() titulo : string
}
