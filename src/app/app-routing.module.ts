import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlesComponent } from './controles/controles.component';
import { NextPageGuard } from './guards/next-page.guard';
import { ResultadoComponent } from './resultado/resultado.component';

const routes: Routes = [
  {path:'', component:ControlesComponent},
  //{path:'resultado', component:ResultadoComponent},
  {path:'resultado', component:ResultadoComponent,canActivate:[NextPageGuard]},
  {path:'**',redirectTo:'',pathMatch:'prefix'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
