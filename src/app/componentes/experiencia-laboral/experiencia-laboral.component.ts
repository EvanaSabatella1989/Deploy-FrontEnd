import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
// export class ExperienciaLaboralComponent implements OnInit {
//   experienciaList:any;
//   constructor(private datosPorfolio:PorfolioService) { }

//   ngOnInit(): void {
//     this.datosPorfolio.obtenerDatos().subscribe(data=>{
//       this.experienciaList=data.experience;
//     })
//   }

// }
export class ExperienciaLaboralComponent implements OnInit {
  expe: Experiencia[] = [];

  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) { }

  isLogged = false;
  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
    
  }

  cargarExperiencia(): void{
    this.sExperiencia.lista().subscribe(
      data => {this.expe = data}
    );
  }

  delete(id?: number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }

}


