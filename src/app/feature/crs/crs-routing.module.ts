import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrsComponent } from './crs.component';


const routes: Routes = [
  { path: '', component: CrsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrsRoutingModule { }
