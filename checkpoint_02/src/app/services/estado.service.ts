import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estado } from '../interfaces/estado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  private url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
  constructor(private http: HttpClient) {}

  lista:Estado[] = [];

  listarEstados():Observable<Estado[]> {
    return this.http.get<Estado[]>(this.url) as Observable<Estado[]>;
  }

}
