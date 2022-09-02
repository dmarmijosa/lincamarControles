import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HorarioService } from '../services/horario.service';
import {Calendario} from './calendario';
import { control } from './control.interface';
@Component({
  selector: 'app-controles',
  templateUrl: './controles.component.html',
  styles: [
  ]
})
export class ControlesComponent implements OnInit {

  meses:string[]=['Enero','Febrero','Marzo','Abril','Mayo', 'Junio', 'Julio', 'Agosto','Septiembre', 'Octubre','Noviembre','Diciembre'];
  dias:string[]=['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']


  miFormulario:FormGroup = this.fb.group({
    nombre:['',[Validators.required, Validators.minLength(3)]],
    centroDeTrabajo:['',[Validators.required, Validators.minLength(3)]],
    mesesTrabajo:this.fb.array(
      [
        [null,],
        [null,],
        [null,]
      ],Validators.required
    ),

    lunes:this.fb.array([
        ['',], ['']
      ],),
    martes:this.fb.array([
        [''], ['']
      ]),
    miercoles:this.fb.array([
        [''], ['']
      ]),
    jueves:this.fb.array([
        [''], ['']
      ]),
    viernes:this.fb.array([
        [''], ['']
      ]),
    sabado:this.fb.array([
        [''], ['']
      ]),
    domingo:this.fb.array([
        [''], ['']
      ])


  })
  controlStorage:control={
    nombre:'',
    centroDeTrabajo:'',
    mesesTrabajo:[],
    lunes:[],
    martes:[],
    miercoles:[],
    jueves:[],
    viernes:[],
    sabado:[],
    domingo:[]
  }

  campoValido(campo:string){

    return (this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched)
  }


  constructor(private fb:FormBuilder, private router:Router, private horarioService:HorarioService) { }


  ngOnInit(): void {

    if(localStorage.getItem('horario')){

      this.controlStorage = JSON.parse(localStorage.getItem('horario') || "");
      this.miFormulario.setValue({
        nombre:this.controlStorage.nombre,
        centroDeTrabajo:this.controlStorage.centroDeTrabajo,
        mesesTrabajo:this.controlStorage.mesesTrabajo,
        lunes:this.controlStorage.lunes,
        martes:this.controlStorage.martes,
        miercoles:this.controlStorage.miercoles,
        jueves:this.controlStorage.jueves,
        viernes:this.controlStorage.viernes,
        sabado:this.controlStorage.sabado,
        domingo:this.controlStorage.domingo,
      })
    }


  }

  get lunesARR(){
    return this.miFormulario.controls['lunes'] as FormArray;
  }
  get martesARR(){
    return this.miFormulario.controls['martes'] as FormArray;
  }
  get miercolesARR(){
    return this.miFormulario.controls['miercoles'] as FormArray;
  }
  get juevesARR(){
    return this.miFormulario.controls['jueves'] as FormArray;
  }
  get viernesARR(){
    return this.miFormulario.controls['viernes'] as FormArray;
  }
  get sabadoARR(){
    return this.miFormulario.controls['sabado'] as FormArray;
  }
  get domingoARR(){
    return this.miFormulario.controls['domingo'] as FormArray;
  }

  get mesesARR(){
    return this.miFormulario.controls['mesesTrabajo'] as FormArray;
  }

  nuevoControl:control={...this.miFormulario.value};
  guardar(){
    this.horarioService.valores(this.miFormulario.value)
    localStorage.setItem('horario',JSON.stringify(this.miFormulario.value))

    this.router.navigate(['/resultado']);


  }







}
