import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FiltroPorTituloPipe } from './pipes/filtro-por-titulo.pipe';

import { HttpClientModule } from '@angular/common/http';
import { BootstrapModule } from '../modules/bootstrap/bootstrap.module';

@NgModule({
  declarations: [
    AppComponent,
    FiltroPorTituloPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
