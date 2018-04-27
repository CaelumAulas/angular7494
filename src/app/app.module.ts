import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Baixar a pasta modules em https://bit.ly/2qM0nm9 e importar no AppModule
import { BootstrapModule } from '../modules/bootstrap/bootstrap.module';
import { FiltroPorTituloPipe } from './pipes/filtro-por-titulo.pipe';

// Service pronto em https://bit.ly/2HOaYUT
import { FotoService } from './services/fotos.service';
import { ListagemComponent } from './components/pages/listagem/listagem.component';
import { CadastroComponent } from './components/pages/cadastro/cadastro.component';

import {RouterModule} from '@angular/router'
const ROUTES = RouterModule.forRoot([
  {path: "", component: ListagemComponent },
  {path: "cadastro", component: CadastroComponent },
  {path: "editar/:id", component: CadastroComponent },
  {path: "**", redirectTo: ''}
]);

@NgModule({
  declarations: [
    AppComponent,
    FiltroPorTituloPipe,
    ListagemComponent,
    CadastroComponent
  ],
  imports: [
    ROUTES,
    BootstrapModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    FotoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
