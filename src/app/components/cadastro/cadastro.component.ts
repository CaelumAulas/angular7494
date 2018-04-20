import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { FotoService } from '../../services/foto.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  foto: Object = {};
  fotoService: FotoService
  rota: ActivatedRoute

  constructor(rota: ActivatedRoute, fotoService : FotoService) {
    this.rota = rota
    this.fotoService = fotoService
  }

  ngOnInit() {
    this.rota.params.subscribe(parametros => {
      const idDaFoto = parametros.id
      this.fotoService.pegaUmaFotoPorId(idDaFoto)
        .subscribe(foto => {
          this.foto = foto
        })
    })
  }

}
