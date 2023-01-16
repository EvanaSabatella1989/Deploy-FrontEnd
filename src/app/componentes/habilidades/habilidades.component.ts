import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  habilidades:any;
  habilidadesDuras:any;
  habilidadesBlandas:any;
  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data=>{
      this.habilidades=data.skills;
      this.habilidadesDuras=data.skills.hardskills;
      this.habilidadesBlandas=data.skills.softskills;
    })
  }
}
