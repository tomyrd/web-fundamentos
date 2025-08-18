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
      { name: "Agus S.", url1: "assets/img/docentes/agusS1.jpg", url2: "assets/img/docentes/agusS2.jpg" },
      { name: "Ani", url1: "assets/img/docentes/ani1.jpeg", url2: "assets/img/docentes/ani2.jpg" },
      { name: "Bauti", url1: "assets/img/docentes/bauti1.jpg", url2: "assets/img/docentes/bauti2.jpg" },
      { name: "Berni", url1: "assets/img/docentes/berni1.jpg", url2: "assets/img/docentes/berni2.jpg" },
      { name: "Brisa", url1: "assets/img/docentes/brisa1.jpg", url2: "assets/img/docentes/brisa2.jpg" },
      { name: "Danny", url1: "assets/img/docentes/danny1.jpg", url2: "assets/img/docentes/danny2.jpg" },
      { name: "Juampi", url1: "assets/img/docentes/juampi1.jpg", url2: "assets/img/docentes/juampi2.jpg" },
      { name: "Mariano", url1: "assets/img/docentes/mariano1.jpeg", url2: "assets/img/docentes/mariano2.jpeg" },
      { name: "Mar", url1: "assets/img/docentes/mar1.jpeg", url2: "assets/img/docentes/mar2.jpeg" },
      { name: "Martu", url1: "assets/img/docentes/martu1.jpg", url2: "assets/img/docentes/martu2.jpg" },
      { name: "May", url1: "assets/img/docentes/may1.jpeg", url2: "assets/img/docentes/may2.jpg" },
      { name: "Mica", url1: "assets/img/docentes/mica1.jpg", url2: "assets/img/docentes/mica2.jpg" },
      { name: "Paula", url1: "assets/img/docentes/paula1.jpg", url2: "assets/img/docentes/paula2.jpg" },
      { name: "Solci", url1: "assets/img/docentes/sol1.jpg", url2: "assets/img/docentes/sol2.jpg" },
      { name: "Tomi", url1: "assets/img/docentes/tomi1.jpg", url2: "assets/img/docentes/tomi2.jpg" },
      { name: "Tute", url1: "assets/img/docentes/tute1.jpeg", url2: "assets/img/docentes/tute2.jpeg" },
      { name: "Yoel", url1: "assets/img/docentes/yoel1.jpeg", url2: "assets/img/docentes/yoel2.jpeg" }
    ], 5);
  }

}
