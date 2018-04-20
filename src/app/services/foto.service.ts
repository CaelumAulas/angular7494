import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { FotoComponent } from '../../modules/bootstrap/components/foto/foto.component';

@Injectable()
export class FotoService {
  cabecalho: HttpHeaders
  URL: string = 'http://localhost:3000/v1/fotos'

  constructor(private httpClient: HttpClient) {
    this.cabecalho = new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  lista(): Observable<Object> {
    return this.httpClient.get(this.URL)
  }

  deletar(idDaFoto: string): Observable<Object> {
    return this.httpClient.delete(`${this.URL}/${idDaFoto}`)
  }

  alterar(id: string, foto: FotoComponent) {
    return this.httpClient.put(
      `${this.URL}/${id}`,
      JSON.stringify(foto),
      {
        headers: this.cabecalho
      }
    )
  }

  cadastrar(foto: FotoComponent): Observable<Object> {
    return this.httpClient.post(
      this.URL,
      JSON.stringify(foto),
      {
        headers: this.cabecalho
      }
    )
  }

  pegaUmaFotoPorId(id: string): Observable<Object> {
    return this.httpClient.get(`${this.URL}/${id}`)
  }
}

