import { NgModule } from "@angular/core";
import { FotoComponent } from "./components/foto/foto.component";
import { CardComponent } from "./components/card/card.component";

@NgModule({
  declarations: [FotoComponent, CardComponent]
  ,exports: [FotoComponent, CardComponent]
})
export class BootstrapModule {

}
