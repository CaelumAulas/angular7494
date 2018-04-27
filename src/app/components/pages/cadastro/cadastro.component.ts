import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FotoService } from '../../../services/fotos.service';
import { FotoComponent } from '../../../../modules/bootstrap/components/foto/foto.component';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  id: any;
  fotosService: FotoService;
  foto: FotoComponent = new FotoComponent();

  constructor(rota: ActivatedRoute, fotosService : FotoService) {

    this.fotosService = fotosService

    rota.params.subscribe(parametros => {

      const id = parametros.id
      this.id = id

      if(id){
        fotosService.pegaUmaFotoPorId(id)
          .subscribe((fotoDoServidor : FotoComponent) => {
            this.foto = fotoDoServidor
          })
      }
    })
   }

   submete($event){
      $event.preventDefault()
      if(this.id){
        this.fotosService
          .alterar(this.id, this.foto)
          .subscribe(() => {
            console.log("Editada com sucesso")
          })
        } else {
          this.fotosService
          .cadastrar(this.foto)
          .subscribe(() => {
            console.log("Cadastrada com sucesso")
          })
      }
   }
}
