import { Component, OnInit } from '@angular/core';

import { Calendario } from '../controles/calendario';
import { HorarioService } from '../services/horario.service';
import { control } from '../controles/control.interface';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls:['./resultado.component.css'] ,
})
export class ResultadoComponent implements OnInit {

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

  fechaFormato:string[]=[];
  nombreDelDia:string[]=[];
  horarioentrada:string[]=[];
  horariosalida:string[]=[];
  horarioCompleto:string[][]=[];
  horarioCompleto1:string[][]=[];
  horarioCompleto2:string[][]=[];

  constructor(private horarioService:HorarioService) {
    this.horario=this.horarioService.horario;
   // console.log(this.horario);
   }

  ngOnInit(): void {

    //console.log(this.horario.mesesTrabajo[0]);
    if(this.horario.mesesTrabajo[0]){
      const calendario= new Calendario();
      this.fechaFormato = (calendario.obtenerDias(parseInt(this.horario.mesesTrabajo[0])));
      this.nombreDelDia=calendario.obtenerDiasNombre(parseInt(this.horario.mesesTrabajo[0]));
    }else{
      this.fechaFormato=[""];
      this.nombreDelDia=[""]
    }
    for (const [i,v] of this.nombreDelDia.entries()) {
      switch(v){
        case "lunes":
          this.horarioentrada[i]=this.horario.lunes[0];
          break;
        case "martes":
          this.horarioentrada[i]=this.horario.martes[0];
          break;
        case "miercoles":
          this.horarioentrada[i]=this.horario.miercoles[0];
          break;
        case "jueves":
          this.horarioentrada[i]=this.horario.jueves[0];
          break;
        case "viernes":
          this.horarioentrada[i]=this.horario.viernes[0];
          break;
        case "sabado":
          this.horarioentrada[i]=this.horario.sabado[0];
          break;
        case "domingo":
          this.horarioentrada[i]=this.horario.domingo[0];
          break;
      }
    }
    for (const [i,v] of this.nombreDelDia.entries()) {
      switch(v){
        case "lunes":
          this.horariosalida[i]=this.horario.lunes[1];
          break;
        case "martes":
          this.horariosalida[i]=this.horario.martes[1];
          break;
        case "miercoles":
          this.horariosalida[i]=this.horario.miercoles[1];
          break;
        case "jueves":
          this.horariosalida[i]=this.horario.jueves[1];
          break;
        case "viernes":
          this.horariosalida[i]=this.horario.viernes[1];
          break;
        case "sabado":
          this.horariosalida[i]=this.horario.sabado[1];
          break;
        case "domingo":
          this.horariosalida[i]=this.horario.domingo[1];
          break;
      }
    }

    for (const [i,v] of this.nombreDelDia.entries()) {
      this.horarioCompleto.push([this.fechaFormato[i],this.horarioentrada[i],this.horariosalida[i]])

    }


    this.horarioentrada=[""]
    this.fechaFormato=[""];
    this.horariosalida=[""]
    console.log(this.horarioCompleto);

    if(this.horario.mesesTrabajo[1]){
      const calendario= new Calendario();
      this.fechaFormato = (calendario.obtenerDias(parseInt(this.horario.mesesTrabajo[1])));
      this.nombreDelDia=calendario.obtenerDiasNombre(parseInt(this.horario.mesesTrabajo[1]));
    }else{
      this.fechaFormato=[""];
      this.nombreDelDia=[""]
    }
    for (const [i,v] of this.nombreDelDia.entries()) {
      switch(v){
        case "lunes":
          this.horarioentrada[i]=this.horario.lunes[0];
          break;
        case "martes":
          this.horarioentrada[i]=this.horario.martes[0];
          break;
        case "miercoles":
          this.horarioentrada[i]=this.horario.miercoles[0];
          break;
        case "jueves":
          this.horarioentrada[i]=this.horario.jueves[0];
          break;
        case "viernes":
          this.horarioentrada[i]=this.horario.viernes[0];
          break;
        case "sabado":
          this.horarioentrada[i]=this.horario.sabado[0];
          break;
        case "domingo":
          this.horarioentrada[i]=this.horario.domingo[0];
          break;
      }
    }
    for (const [i,v] of this.nombreDelDia.entries()) {
      switch(v){
        case "lunes":
          this.horariosalida[i]=this.horario.lunes[1];
          break;
        case "martes":
          this.horariosalida[i]=this.horario.martes[1];
          break;
        case "miercoles":
          this.horariosalida[i]=this.horario.miercoles[1];
          break;
        case "jueves":
          this.horariosalida[i]=this.horario.jueves[1];
          break;
        case "viernes":
          this.horariosalida[i]=this.horario.viernes[1];
          break;
        case "sabado":
          this.horariosalida[i]=this.horario.sabado[1];
          break;
        case "domingo":
          this.horariosalida[i]=this.horario.domingo[1];
          break;
      }
    }

    for (const [i,v] of this.nombreDelDia.entries()) {
      this.horarioCompleto1.push([this.fechaFormato[i],this.horarioentrada[i],this.horariosalida[i]])

    }
    console.log(this.horarioCompleto);
    this.horarioentrada=[""]
    this.fechaFormato=[""];
    this.horariosalida=[""]

    if(this.horario.mesesTrabajo[2]){
      const calendario= new Calendario();
      this.fechaFormato = (calendario.obtenerDias(parseInt(this.horario.mesesTrabajo[2])));
      this.nombreDelDia=calendario.obtenerDiasNombre(parseInt(this.horario.mesesTrabajo[2]));
    }else{
      this.fechaFormato=[""];
      this.nombreDelDia=[""]
    }
    for (const [i,v] of this.nombreDelDia.entries()) {
      switch(v){
        case "lunes":
          this.horarioentrada[i]=this.horario.lunes[0];
          break;
        case "martes":
          this.horarioentrada[i]=this.horario.martes[0];
          break;
        case "miercoles":
          this.horarioentrada[i]=this.horario.miercoles[0];
          break;
        case "jueves":
          this.horarioentrada[i]=this.horario.jueves[0];
          break;
        case "viernes":
          this.horarioentrada[i]=this.horario.viernes[0];
          break;
        case "sabado":
          this.horarioentrada[i]=this.horario.sabado[0];
          break;
        case "domingo":
          this.horarioentrada[i]=this.horario.domingo[0];
          break;
      }
    }
    for (const [i,v] of this.nombreDelDia.entries()) {
      switch(v){
        case "lunes":
          this.horariosalida[i]=this.horario.lunes[1];
          break;
        case "martes":
          this.horariosalida[i]=this.horario.martes[1];
          break;
        case "miercoles":
          this.horariosalida[i]=this.horario.miercoles[1];
          break;
        case "jueves":
          this.horariosalida[i]=this.horario.jueves[1];
          break;
        case "viernes":
          this.horariosalida[i]=this.horario.viernes[1];
          break;
        case "sabado":
          this.horariosalida[i]=this.horario.sabado[1];
          break;
        case "domingo":
          this.horariosalida[i]=this.horario.domingo[1];
          break;
      }
    }

    for (const [i,v] of this.nombreDelDia.entries()) {
      this.horarioCompleto2.push([this.fechaFormato[i],this.horarioentrada[i],this.horariosalida[i]])

    }
    console.log(this.horarioCompleto);

    htmlToImage.toJpeg(document.getElementById('fondo')!, { quality: 0.95 })
    .then(function (dataUrl) {
      var link = document.createElement('a');
      link.download = 'reporte.jpeg';
      link.href = dataUrl;
      link.click();
    });

  }
  generarImg(){

  }




}
