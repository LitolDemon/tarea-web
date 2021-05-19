import { Component, OnInit } from '@angular/core';
import { Nota } from '../shared/nota.model';
import { NotasService } from '../shared/notas.service';
import { ServicioInfoService} from '../servicio-info.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  notas:Nota[] = new Array<Nota>();
  abiertas:Nota[]= new Array<Nota>();
  enProceso:Nota[]= new Array<Nota>();
  cerradas:Nota[]= new Array<Nota>();

  constructor(private notasService: ServicioInfoService) { }

  ngOnInit(): void {
    this.notas=this.notasService.consultarNotas();
    for (let index = 0; index < this.notas.length; index++) {
      let nota:Nota = this.notas[index];
      if(nota.estado = "abierta"){
        this.abiertas.push(nota);
      }else
      if(nota.estado = "proceso"){
        this.enProceso.push(nota);
      }
      else{
        this.cerradas.push(nota);
      }
      
    }
  }
  deleteAbierta(id:number){
    this.notasService.eliminarAbiertas(id);
  }
  deleteEnProceso(id:number){
    this.notasService.eliminarEnProceso(id);
  }
  deleteCerrada(id:number){
    this.notasService.eliminarCerradas(id);
  }

}
