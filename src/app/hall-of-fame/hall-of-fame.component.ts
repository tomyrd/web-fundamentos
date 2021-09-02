import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'algo1-hall-of-fame',
  templateUrl: './hall-of-fame.component.html',
  styleUrls: ['./hall-of-fame.component.scss']
})
export class HallOfFameComponent implements OnInit {

  docentes: any;

  constructor() { }

  ngOnInit(): void {
    this.docentes = _.chunk([
      {name: "Mariano Mendez", url1: "assets/img/docentes/marian1.jpg", url2: "assets/img/docentes/marian2.jpg"},
      {name: "Charly Talavera", url1: "assets/img/docentes/charly1.jpg", url2: "assets/img/docentes/charly2.jpg"},
      {name: "Aníbal Lovaglio", url1: "assets/img/docentes/anibal1.jpg", url2: "assets/img/docentes/anibal2.jpg"},
      {name: "Gabriel Pucci", url1: "assets/img/docentes/puchi1.jpg", url2: "assets/img/docentes/puchi2.jpg"},
      {name: "Fernando Cáceres", url1: "assets/img/docentes/fer1.jpg", url2: "assets/img/docentes/fer2.jpg"},
    ], 5);
  }

}
