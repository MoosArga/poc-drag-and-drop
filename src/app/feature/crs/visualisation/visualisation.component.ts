import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CrsWrapper } from 'src/app/shared/model/crs-wrapper';
import { CrsService } from 'src/app/shared/service/crs.service';
import { TypeCrsEquipment } from 'src/app/shared/enum/type-crs-equipment.enum';
import { CrsEquipment } from 'src/app/shared/model/interface/crs-equipment';
import { BalanceItems } from 'src/app/shared/model/balance-items';
import { CrsBalanceStore } from 'src/app/shared/store/crs-balance.store';

@Component({
  selector: 'app-visualisation',
  templateUrl: './visualisation.component.html'
})
export class VisualisationComponent implements OnInit {

  crsWrapper$: Observable<CrsWrapper>;
  balanceItems$: Observable<BalanceItems>;

  constructor(private crsService: CrsService, private crsBalanceStore: CrsBalanceStore) { }

  ngOnInit() {
    this.crsWrapper$ = this.crsService.findAllCrs();
    this.balanceItems$ = this.crsBalanceStore.getBalanceItems$();
  }

  isDragAccessDisabled(currentType: TypeCrsEquipment) {
    return !!currentType && currentType !== TypeCrsEquipment.ACCES;
  }

  isDragVplsDisabled(currentType: TypeCrsEquipment) {
    return !!currentType && currentType !== TypeCrsEquipment.VPLS;
  }

  isAlreadyDragged(balanceItems: BalanceItems, item: CrsEquipment): boolean {
    return !!balanceItems.items.filter(i => i.name === item.name).length;
  }

}
