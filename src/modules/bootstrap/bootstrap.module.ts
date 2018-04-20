import { NgModule } from "@angular/core";
import { FotoComponent } from "./components/foto/foto.component";
import { CardComponent } from "./components/card/card.component";

import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [FotoComponent, CardComponent]
  ,exports: [FotoComponent, CardComponent]
  ,imports: [BrowserModule]
})
export class BootstrapModule {

}
