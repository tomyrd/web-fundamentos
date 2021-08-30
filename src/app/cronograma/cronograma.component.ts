import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'algo1-cronograma',
  templateUrl: './cronograma.component.html',
  styleUrls: ['./cronograma.component.scss']
})
export class CronogramaComponent implements OnInit {

  cronograma: any;
  fecha: string

  constructor(public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.fecha = this.datepipe.transform(new Date(), 'yyyyMMdd');
    this.cronograma = [
      {numero: "1", fechaInicio: "20210706", fechaFin: "20211111", temas: [""], hitos: [""]},
      {numero: "2", fechaInicio: "20210913", fechaFin: "20211111", temas: [""], hitos: [""]},
      {numero: "3", fechaInicio: "20210920", fechaFin: "20211111", temas: [""], hitos: [""]},
      {numero: "4", fechaInicio: "20210927", fechaFin: "20211111", temas: [""], hitos: [""]},
      {numero: "5", fechaInicio: "20211001", fechaFin: "20211111", temas: [""], hitos: [""]},
      {numero: "6", fechaInicio: "20211001", fechaFin: "20211111", temas: [""], hitos: [""]},
      {numero: "7", fechaInicio: "20211001", fechaFin: "20211111", temas: [""], hitos: [""]},
      {numero: "8", fechaInicio: "20211001", fechaFin: "20211111", temas: [""], hitos: [""]},
      {numero: "9", fechaInicio: "20211001", fechaFin: "20211111", temas: [""], hitos: [""]},
      {numero: "10", fechaInicio: "20211001", fechaFin: "20211111", temas: [""], hitos: [""]},
      {numero: "11", fechaInicio: "20211001", fechaFin: "20211111", temas: [""], hitos: [""]},
      {numero: "12", fechaInicio: "20211001", fechaFin: "20211111", temas: [""], hitos: [""]},
      {numero: "13", fechaInicio: "20211001", fechaFin: "20211111", temas: [""], hitos: [""]},
      {numero: "14", fechaInicio: "20211001", fechaFin: "20211111", temas: [""], hitos: [""]},
      {numero: "15", fechaInicio: "20211001", fechaFin: "20211111", temas: [""], hitos: [""]},
      {numero: "16", fechaInicio: "20211001", fechaFin: "20211111", temas: [""], hitos: [""]},
    ];
  }

}
