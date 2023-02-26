import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Router } from '@angular/router';

import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  // persona:persona = new persona("", "", "", "");
  persona:persona = null;
  isLogged = false;
  //acercaDe:any;
  //constructor(private datosPorfolio:PorfolioService) { }
  constructor(public personaService: PersonaService, private router:Router, private tokenService: TokenService){}

  // ngOnInit(): void {
  //   this.datosPorfolio.obtenerDatos().subscribe(data=>{
  //     this.acercaDe=data.data;
  //   })
   
  // }

  // ngOnInit(): void {
  //   this.personaService.getPersona().subscribe(data => {this.persona = data})
  //   if(this.tokenService.getToken()){
  //     this.isLogged = true;
  //   }else{
  //     this.isLogged = false;
  //   }
  // }

  ngOnInit(): void {
    this.cargarPersona();
    if(this.tokenService.getToken()){
          this.isLogged = true;
        }else{
          this.isLogged = false;
        }
  }

  cargarPersona(){
    this.personaService.detail(1).subscribe(data => {this.persona = data})
  }

}
