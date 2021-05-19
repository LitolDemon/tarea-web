import { Component, OnInit } from '@angular/core';
import { AbstractControl,FormBuilder,FormGroup,Validators,NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Nota } from '../shared/nota.model';
import { NotasService } from '../shared/notas.service';
import { ServicioInfoService } from "../servicio-info.service";

interface estado {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {


  titulo:AbstractControl;
  estado:AbstractControl;
  texto:AbstractControl;

  idNota: number=-1;
  nuevo:boolean= false;

  form:FormGroup;
  constructor(public fb: FormBuilder, private notasService:ServicioInfoService,private router:Router,private route:ActivatedRoute) {
    this.form= this.fb.group({
      titulo:["",[Validators.required]],
      estado:["",[Validators.required]],
      texto:["",[Validators.required]]
    });

    this.titulo = this.form.controls["titulo"];
    this.estado = this.form.controls["estado"];
    this.texto = this.form.controls["descripcion"];
   }

  ngOnInit() {
    /*
    this.route.params.subscribe((params: Params)=>{
      this.nota=new Nota();
      if(params.id){
        this.nota=this.notasService.getNotaAbierta(params.id);
        this.idNota=params.id;
        this.nuevo=false;
      } else{
        this.nuevo=true;
      }
    })
    */
  }

  crear(){
    let lista:Array<Nota>=[{
      titulo:this.form.get("titulo")?.value,
      estado:this.form.get("estado")?.value,
      descripcion:this.form.get("texto")?.value
      }
    ];
    console.log(this.form.get("titulo")?.value);
    
    console.log(lista);
    this.notasService.guardarDatos(lista).subscribe(datos=>{
      
    });
    this.router.navigateByUrl('/lista');
  }
  
  selectedValue: string | undefined;


  onSubmit(form:NgForm){
    
    if(form.value.titulo && form.value.estado &&  form.value.descripcion){
      if(this.nuevo){
        this.notasService.adicionar(form.value);
      } else{
        this.notasService.actualizar(this.idNota, form.value.titulo , form.value.estado, form.value.descripcion);
      }
        this.router.navigateByUrl('/lista');
    }
  }

}

