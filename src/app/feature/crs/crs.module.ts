import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrsRoutingModule } from './crs-routing.module';
import { CrsComponent } from '../crs/crs.component';
import { CrsAccesComponent } from './crs-acces/crs-acces.component';
import { CrsVplsComponent } from './crs-vpls/crs-vpls.component';
import { BalanceComponent } from './balance/balance.component';
import { VisualisationComponent } from './visualisation/visualisation.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [CrsComponent, CrsAccesComponent, CrsVplsComponent, BalanceComponent, VisualisationComponent],
  imports: [
    CommonModule,
    DragDropModule,
    CrsRoutingModule
  ]
})
export class CrsModule { }
