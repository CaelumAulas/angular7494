import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FiltroPorTituloPipe } from './pipes/filtro-por-titulo.pipe';
import { FotoService } from './services/foto.service';

import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router'
import { BootstrapModule } from '../modules/bootstrap/bootstrap.module';
import { ListagemComponent } from './components/listagem/listagem.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';

const routes = RouterModule.forRoot([
  { path: '', component: ListagemComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'cadastro/:id', component: CadastroComponent },
  { path: '**', redirectTo: '' }
]);

@NgModule({
  declarations: [
    AppComponent,
    FiltroPorTituloPipe,
    ListagemComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BootstrapModule,
    routes
  ],
  providers: [
    FotoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
