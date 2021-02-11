import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroComponent} from './hero/hero.component'
import { DetailComponent } from "./detail/detail.component";

const routes: Routes = [
  {path:'', redirectTo: '/index', pathMatch: 'full'},
  {path:'index', component:HeroComponent},
  { path: 'detail/:id', component: DetailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
