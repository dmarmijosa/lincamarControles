import { Injectable } from '@angular/core';
import { control } from '../controles/control.interface';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {

  horario:control={
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

  valores(horario:control) {
    this.horario=horario;
    localStorage.setItem('horario',JSON.stringify(horario))
    console.log(this.horario.mesesTrabajo[0]);

  }




  constructor() { }
}
