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
      { name: "Danny", url1: "assets/img/docentes/danny1.jpg", url2: "assets/img/docentes/danny2.jpg" },
      { name: "Enzo", url1: "assets/img/docentes/enzo1.jpeg", url2: "assets/img/docentes/enzo2.jpeg" },
      { name: "Gilbert", url1: "assets/img/docentes/gilbert1.jpeg", url2: "assets/img/docentes/gilbert2.jpeg" },
      { name: "Juampi", url1: "assets/img/docentes/juampi1.jpg", url2: "assets/img/docentes/juampi2.jpg" },
      { name: "Mariano", url1: "assets/img/docentes/mariano1.jpeg", url2: "assets/img/docentes/mariano2.jpeg" },
      { name: "Mar", url1: "assets/img/docentes/mar1.jpeg", url2: "assets/img/docentes/mar2.jpeg" },
      { name: "Martu", url1: "assets/img/docentes/martu1.jpg", url2: "assets/img/docentes/martu2.jpg" },
      { name: "May", url1: "assets/img/docentes/may1.jpeg", url2: "assets/img/docentes/may2.jpeg" },
      { name: "Pipe", url1: "assets/img/docentes/pipe1.jpeg", url2: "assets/img/docentes/pipe2.jpeg" },
      { name: "Solci", url1: "assets/img/docentes/sol1.jpg", url2: "assets/img/docentes/sol2.jpg" },
      { name: "Tomi", url1: "assets/img/docentes/tomi1.jpg", url2: "assets/img/docentes/tomi2.jpg" },
      { name: "Tute", url1: "assets/img/docentes/tute1.jpeg", url2: "assets/img/docentes/tute2.jpeg" },
      { name: "Yoel", url1: "assets/img/docentes/yoel1.jpeg", url2: "assets/img/docentes/yoel2.jpeg" }
    ], 5);
  }

}
