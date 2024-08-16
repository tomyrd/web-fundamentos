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
      { name: "Agus B.", url1: "assets/img/docentes/agusB1.jpg", url2: "assets/img/docentes/agusB2.jpg" },
      { name: "Agus F.", url1: "assets/img/docentes/agusF1.jpg", url2: "assets/img/docentes/agusF2.jpg" },
      { name: "Bauti", url1: "assets/img/docentes/bauti1.jpg", url2: "assets/img/docentes/bauti2.jpg" },
      { name: "Berni", url1: "assets/img/docentes/berni1.jpg", url2: "assets/img/docentes/berni2.jpg" },
      { name: "Dani V.", url1: "assets/img/docentes/dani1.jpeg", url2: "assets/img/docentes/dani2.jpeg" },
      { name: "Danny D.", url1: "assets/img/docentes/danny1.jpeg", url2: "assets/img/docentes/danny2.jpeg" },
      { name: "Flor", url1: "assets/img/docentes/flor1.jpg", url2: "assets/img/docentes/flor2.jpg" },
      { name: "Juampi", url1: "assets/img/docentes/juampi1.jpg", url2: "assets/img/docentes/juampi2.jpg" },
      { name: "Mariano", url1: "assets/img/docentes/mariano1.jpeg", url2: "assets/img/docentes/mariano2.jpeg" },
      { name: "Martu", url1: "assets/img/docentes/martu1.jpeg", url2: "assets/img/docentes/martu2.jpeg" },
      { name: "Matías", url1: "assets/img/docentes/matias1.jpeg", url2: "assets/img/docentes/matias2.jpeg" },
      { name: "Solci", url1: "assets/img/docentes/sol1.jpg", url2: "assets/img/docentes/sol2.jpg" },
      { name: "Tomi", url1: "assets/img/docentes/tomi1.jpg", url2: "assets/img/docentes/tomi2.jpg" },
      { name: "Tute", url1: "assets/img/docentes/tute1.jpeg", url2: "assets/img/docentes/tute2.jpeg" },
      { name: "Valen", url1: "assets/img/docentes/valen1.jpeg", url2: "assets/img/docentes/valen2.jpeg" },
      { name: "Yoel", url1: "assets/img/docentes/yoel1.jpeg", url2: "assets/img/docentes/yoel2.jpeg" }
    ], 5);
  }

}
