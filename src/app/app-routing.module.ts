import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path: '',
    loadChildren: () => import('./main/main-routing.module').then(m => m.MainRoutingModule)
  },
  {path: '', pathMatch: 'full', redirectTo: 'projects'},
  {path: '', pathMatch: 'full', redirectTo: 'skills'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
