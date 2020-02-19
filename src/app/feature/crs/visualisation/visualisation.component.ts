import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CrsWrapper } from 'src/app/shared/model/crs-wrapper';
import { CrsService } from 'src/app/shared/service/crs.service';
import { TypeEquipment } from 'src/app/shared/enum/type-equipment.enum';
import { CrsEquipment } from 'src/app/shared/model/interface/crs-equipment';
import { BalanceItems } from 'src/app/shared/model/balance-items';
import { CrsBalanceStore } from 'src/app/shared/store/crs-balance.store';
import { TypeComparator } from 'src/app/shared/enum/type-comparator.enum';

@Component({
  selector: 'app-visualisation',
  templateUrl: './visualisation.component.html'
})
export class VisualisationComponent implements OnInit {

  crsWrapper$: Observable<CrsWrapper>;
  balanceItems$: Observable<BalanceItems>;
  isAccessVisible = true;
  isVplsVisible = true;
  typeEquipment: typeof TypeEquipment = TypeEquipment;

  constructor(private crsService: CrsService, private crsBalanceStore: CrsBalanceStore) { }

  ngOnInit() {
    this.crsWrapper$ = this.crsService.findAllCrs();
    this.balanceItems$ = this.crsBalanceStore.getBalanceItems$();
  }

  isDragAccessDisabled(currentType: TypeEquipment) {
    return !!currentType && currentType !== TypeEquipment.ACCES;
  }

  isDragDisabled(subType: TypeEquipment, balanceItems: BalanceItems) {
    return !!balanceItems.subType && balanceItems.subType !== subType;
  }

  isAlreadyDragged(balanceItems: BalanceItems, item: CrsEquipment): boolean {
    return !!balanceItems.items.filter(i => i.name === item.name).length;
  }

  toggleAccessVisibility() {
    this.isAccessVisible = !this.isAccessVisible;
  }

  toggleVplsVisibility() {
    this.isVplsVisible = !this.isVplsVisible;
  }

}
