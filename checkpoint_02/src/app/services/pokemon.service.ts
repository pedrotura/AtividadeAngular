import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url = 'http://demo9991187.mockable.io/';
  constructor(private http: HttpClient) {}

  lista:Pokemon[] = [];

  listarPokemon():Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.url) as Observable<Pokemon[]>;
  }
}
