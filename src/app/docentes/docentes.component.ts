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
      { name: "Agus", url1: "assets/img/docentes/agusB1.jpg", url2: "assets/img/docentes/agusB2.jpg" },
      { name: "Agus", url1: "assets/img/docentes/agusF1.jpg", url2: "assets/img/docentes/agusF2.jpg" },
      { name: "Berni", url1: "assets/img/docentes/berni1.jpg", url2: "assets/img/docentes/berni2.jpg" },
      // { name: "Dani", url1: "assets/img/docentes/dani1.jpg", url2: "assets/img/docentes/dani2.jpg" },
      { name: "Flor", url1: "assets/img/docentes/flor1.jpg", url2: "assets/img/docentes/flor2.jpg" },
      { name: "Gastón", url1: "assets/img/docentes/gaston1.jpg", url2: "assets/img/docentes/gaston2.jpg" },
      { name: "Mariano", url1: "assets/img/docentes/mariano1.jpeg", url2: "assets/img/docentes/mariano2.jpeg" },
      { name: "Matías", url1: "assets/img/docentes/matias1.jpeg", url2: "assets/img/docentes/matias2.jpeg" },
      { name: "Tomi", url1: "assets/img/docentes/tomi1.jpg", url2: "assets/img/docentes/tomi2.jpg" },
      { name: "Tute", url1: "assets/img/docentes/tute1.jpeg", url2: "assets/img/docentes/tute2.jpeg" },
      { name: "Valen", url1: "assets/img/docentes/valen1.jpeg", url2: "assets/img/docentes/valen2.jpeg" },
      { name: "Yoel", url1: "assets/img/docentes/yoel1.jpeg", url2: "assets/img/docentes/yoel2.jpeg" }
    ], 5);
  }

}
