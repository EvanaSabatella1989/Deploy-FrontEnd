import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercaDeComponent } from './componentes/acerca-de/edit-acerca-de.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion.component';
import { EditExperienciaComponent } from './componentes/experiencia-laboral/edit-experiencia.component';
import { NewExperienciaComponent } from './componentes/experiencia-laboral/new-experiencia.component';
import { EditSkillComponent } from './componentes/habilidades/edit-skill.component';
import { NewSkillComponent } from './componentes/habilidades/new-skill.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { EditProyectoComponent } from './componentes/proyectos/edit-proyecto.component';
import { NewProyectoComponent } from './componentes/proyectos/new-proyecto.component';

// const routes: Routes = [
//     {path:'portfolio', component:PortfolioComponent},
//     {path:'iniciar-sesion', component:IniciarSesionComponent},
//     {path:'',redirectTo:'iniciar-sesion',pathMatch:'full'}
// ]

const routes: Routes = [
  {path:'', component:PortfolioComponent},
  {path:'iniciar-sesion', component:IniciarSesionComponent},
  {path:'nuevaexp', component: NewExperienciaComponent},
  {path:'editexp/:id', component: EditExperienciaComponent},
  {path:'nuevaedu', component: NewEducacionComponent},
  {path:'editedu/:id', component: EditEducacionComponent},
  {path:'nuevaskill', component: NewSkillComponent},
  {path:'editskill/:id', component: EditSkillComponent},
  {path:'editacercade/:id', component: EditAcercaDeComponent},
  {path:'nuevoproyecto', component: NewProyectoComponent},
  {path:'editproyecto/:id', component: EditProyectoComponent}
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }