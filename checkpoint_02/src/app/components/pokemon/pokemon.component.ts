import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../../interfaces/pokemon';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {

  lista:Pokemon[] = [];

  constructor(private pokemonService:PokemonService) {}

  listar():void {
    this.pokemonService.listarPokemon().subscribe((pokemon) => (this.lista = pokemon));
  }

  ngOnInit():void {
    this.listar();
  }

}
