import { Injectable } from '@angular/core';
import { Nota } from './nota.model';


@Injectable({
  providedIn: 'root'
})
export class NotasService {
  /*
  abiertas:Nota[]= new Array<Nota>();
  enProceso:Nota[]= new Array<Nota>();
  cerradas:Nota[]= new Array<Nota>();

  constructor() { }

  getAbiertas(){
    return this.abiertas;
  }

  getEnProceso(){
    return this.enProceso;
  }

  getCerradas(){
    return this.cerradas;
  }

  getNotaAbierta(id:number){
    return this.abiertas[id];
  }

  getNotaEnProceso(id:number){
    return this.enProceso[id];
  }

  getNotaCerrada(id:number){
    return this.cerradas[id];
  }

  getId(nota:Nota){
    let estado:string = nota.estado;
    switch (estado) {
      case "abierta":
        return this.abiertas.indexOf(nota);
      case "proceso":
        return this.enProceso.indexOf(nota);
      case "cerrada":
          return this.cerradas.indexOf(nota);
      default:
        return;
        break;
    }
  }

  adicionar(nota:Nota){
    if(nota.estado == 'abierto'){
      this.abiertas.push(nota)
    }else 
    if(nota.estado == 'proceso'){
      this.enProceso.push(nota)
    }else 
    if(nota.estado == 'cerrado'){
      this.cerradas.push(nota)
    }
  }

  actualizar(id:number, titulo:string ,estado:string ,descripcion:string ){
    if(estado == 'abierto'){
      let nota=this.abiertas[id];
      this.abiertas[id].titulo=titulo;
      nota.titulo=titulo;
      this.abiertas[id].estado
      nota.estado=estado;
      nota.descripcion=descripcion;
    }else 
    if(estado == 'proceso'){
      let nota=this.enProceso[id];
      nota.titulo=titulo;
      nota.estado=estado;
      nota.descripcion=descripcion;
    }
  }

  eliminarAbiertas(id:number){
    this.abiertas.splice(id,1);
  }
  eliminarEnProceso(id:number){
    this.enProceso.splice(id,1);
  }
  eliminarCerradas(id:number){
    this.cerradas.splice(id,1);
  }
  */
}
