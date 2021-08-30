import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'algo1-docentes',
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.scss']
})
export class DocentesComponent implements OnInit {

  docentes: any;

  constructor() { }

  ngOnInit(): void {
    this.docentes = _.chunk([
      {name: "Agus", url1: "assets/img/docentes/agus1.jpg", url2: "assets/img/docentes/agus2.jpg"},
      {name: "Berni", url1: "assets/img/docentes/berni1.jpg", url2: "assets/img/docentes/berni2.jpg"},
      {name: "Cande", url1: "assets/img/docentes/cande1.jpg", url2: "assets/img/docentes/cande2.jpg"},
      {name: "Caro", url1: "assets/img/docentes/caro1.jpg", url2: "assets/img/docentes/caro2.jpg"},
      {name: "Delfi", url1: "assets/img/docentes/delfi1.jpg", url2: "assets/img/docentes/delfi2.jpg"},
      {name: "Franco", url1: "assets/img/docentes/franco1.jpg", url2: "assets/img/docentes/franco2.jpg"},
      {name: "Rena", url1: "assets/img/docentes/renata1.jpg", url2: "assets/img/docentes/renata2.jpg"},
      {name: "Rosi", url1: "assets/img/docentes/rosi1.jpg", url2: "assets/img/docentes/rosi2.jpg"},
      {name: "Sofi", url1: "assets/img/docentes/sofi1.jpg", url2: "assets/img/docentes/sofi2.jpg"},
      {name: "Sol", url1: "assets/img/docentes/sol1.jpg", url2: "assets/img/docentes/sol2.jpg"},
    ], 5);
  }

}
