import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

// Baixar a pasta modules em https://bit.ly/2qM0nm9 e importar no AppModule
import { BootstrapModule } from '../modules/bootstrap/bootstrap.module';
import { FiltroPorTituloPipe } from './pipes/filtro-por-titulo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FiltroPorTituloPipe
  ],
  imports: [
    BootstrapModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
