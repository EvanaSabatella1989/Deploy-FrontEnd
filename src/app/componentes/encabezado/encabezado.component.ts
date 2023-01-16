import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  isLogged = false;
  //miPorfolio:any;
  // constructor(private datosPorfolio:PorfolioService) { }
  constructor(private router:Router, private tokenService: TokenService) { }

  // ngOnInit(): void {
  //   this.datosPorfolio.obtenerDatos().subscribe(data =>{
  //     console.log(data);
  //     this.miPorfolio=data;
  //   });
  // }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();

  }

  login(){
    this.router.navigate(['/iniciar-sesion'])
  }

}
