import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GastosComponent } from './components/gastos/gastos.component';
import { IngresarPresupuestoComponent } from './components/ingresar-presupuesto/ingresar-presupuesto.component';

const routes: Routes = [
  {path: '' , redirectTo: '/ingresarPresupuesto', pathMatch: 'full'},
  {path: 'ingresarPresupuesto' , component: IngresarPresupuestoComponent},
  {path: 'gastos', component: GastosComponent},
  { path: '**', component: IngresarPresupuestoComponent },
];

 @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
