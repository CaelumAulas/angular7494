import { Injectable } from '@angular/core';
import { FotoComponent } from '../../modules/bootstrap/components/foto/foto.component';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FotoService {
  private http: HttpClient
  private url: string = 'http://localhost:3000/v1/fotos'

  constructor(http : HttpClient){
    this.http = http
  }

  lista(): any {
    return this.http.get(this.url)
  }
  delete(fotoARemover: FotoComponent): any {
    return this.http.delete(this.url + '/' + fotoARemover._id)
  }

}
