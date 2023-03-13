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
      { name: "Mariano", url1: "assets/img/docentes/marian1.jpg", url2: "assets/img/docentes/marian2.jpg" },
      { name: "Berni", url1: "assets/img/docentes/berni1.jpg", url2: "assets/img/docentes/berni2.jpg" },
      { name: "Santi", url1: "assets/img/docentes/santi1.jpg", url2: "assets/img/docentes/santi2.jpg" },
      { name: "Delfi", url1: "assets/img/docentes/delfi1.jpg", url2: "assets/img/docentes/delfi2.jpg" },
      { name: "Gonza", url1: "assets/img/docentes/gonza1.jpg", url2: "assets/img/docentes/gonza2.jpg" },
      { name: "Aníbal", url1: "assets/img/docentes/anibal1.jpg", url2: "assets/img/docentes/anibal2.jpg" },
      { name: "Pucci", url1: "assets/img/docentes/puchi1.jpg", url2: "assets/img/docentes/puchi2.jpg" },
      { name: "Fer", url1: "assets/img/docentes/fer1.jpg", url2: "assets/img/docentes/fer2.jpg" },
    ], 5);
  }

}
