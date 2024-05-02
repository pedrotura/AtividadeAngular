import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Estado } from '../../interfaces/estado';
import { EstadoService } from '../../services/estado.service';

@Component({
  selector: 'app-estado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estado.component.html',
  styleUrl: './estado.component.css'
})
export class EstadoComponent {

  lista: Estado[] = [];

  constructor(private estadoService: EstadoService) {}

  listar():void {
    this.estadoService.listarEstados().subscribe((estado) => (this.lista = estado));
  }

  ngOnInit():void {
    this.listar();
  }

}
