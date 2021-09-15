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
      {name: "Ampi", url1: "assets/img/docentes/ampi1.jpg", url2: "assets/img/docentes/ampi2.jpg"},
      {name: "Berni", url1: "assets/img/docentes/berni1.jpg", url2: "assets/img/docentes/berni2.jpg"},
      {name: "Cande", url1: "assets/img/docentes/cande1.jpg", url2: "assets/img/docentes/cande2.jpg"},
      {name: "Caro", url1: "assets/img/docentes/caro1.jpg", url2: "assets/img/docentes/caro2.jpg"},
      {name: "Ceci", url1: "assets/img/docentes/ceci1.jpg", url2: "assets/img/docentes/ceci2.jpg"},
      {name: "Cele", url1: "assets/img/docentes/cele1.jpg", url2: "assets/img/docentes/cele2.jpg"},
      {name: "Delfi", url1: "assets/img/docentes/delfi1.jpg", url2: "assets/img/docentes/delfi2.jpg"},
      {name: "Eze", url1: "assets/img/docentes/eze1.jpg", url2: "assets/img/docentes/eze2.jpg"},
      {name: "Fran", url1: "assets/img/docentes/franco1.jpg", url2: "assets/img/docentes/franco2.jpg"},
      {name: "Fran", url1: "assets/img/docentes/franm1.jpg", url2: "assets/img/docentes/franm2.jpg"},
      {name: "Juli", url1: "assets/img/docentes/juli1.jpg", url2: "assets/img/docentes/juli2.jpg"},
      {name: "Manu", url1: "assets/img/docentes/manub1.jpg", url2: "assets/img/docentes/manub2.jpg"},
      {name: "Manu", url1: "assets/img/docentes/manuc1.jpg", url2: "assets/img/docentes/manuc2.jpg"},
      {name: "Mati", url1: "assets/img/docentes/mati1.jpg", url2: "assets/img/docentes/mati2.jpg"},
      {name: "Meli", url1: "assets/img/docentes/meli1.jpg", url2: "assets/img/docentes/meli2.jpg"},
      {name: "Miros", url1: "assets/img/docentes/miro1.jpg", url2: "assets/img/docentes/miro2.jpg"},
      {name: "Nahu", url1: "assets/img/docentes/nahu1.jpg", url2: "assets/img/docentes/nahu2.jpg"},
      {name: "Nico", url1: "assets/img/docentes/nico1.jpg", url2: "assets/img/docentes/nico2.jpg"},
      {name: "Pablin", url1: "assets/img/docentes/pablin1.jpg", url2: "assets/img/docentes/pablin2.jpg"},
      {name: "Rena", url1: "assets/img/docentes/renata1.jpg", url2: "assets/img/docentes/renata2.jpg"},
      {name: "Rosi", url1: "assets/img/docentes/rosi1.jpg", url2: "assets/img/docentes/rosi2.jpg"},
      {name: "Santi", url1: "assets/img/docentes/santi1.jpg", url2: "assets/img/docentes/santi2.jpg"},
      {name: "Sofi", url1: "assets/img/docentes/sofi1.jpg", url2: "assets/img/docentes/sofi2.jpg"},
      {name: "Sol", url1: "assets/img/docentes/sol1.jpg", url2: "assets/img/docentes/sol2.jpg"},
      {name: "Stephy", url1: "assets/img/docentes/stephy1.jpg", url2: "assets/img/docentes/stephy2.jpg"},
      {name: "Valen", url1: "assets/img/docentes/valen1.jpg", url2: "assets/img/docentes/valen2.jpg"},
    ], 5);
  }

}
