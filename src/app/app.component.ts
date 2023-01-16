import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //el selector es el nombre de la etiqueta a la que referenciamos en el html
  templateUrl: './app.component.html', //el template sera la vista
  styleUrls: ['./app.component.css']  //style son los estilos
})
export class AppComponent {
  title = 'ProyectoAngular';
}

//el component es una clase, solo que se encuentra decorada con el @component como indicativo
