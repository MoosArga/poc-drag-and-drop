import { Component, OnInit } from '@angular/core';
import { CrsBalanceStore } from 'src/app/shared/store/crs-balance.store';
import { Observable } from 'rxjs';
import { CrsEquipment } from 'src/app/shared/model/interface/crs-equipment';
import { TypeEquipment } from 'src/app/shared/enum/type-equipment.enum';
import { BalanceItems } from 'src/app/shared/model/balance-items';

@Component({
  selector: 'app-crs',
  templateUrl: './crs.component.html'
})
export class CrsComponent implements OnInit {

  menuItem = 1;
  balanceItems$: Observable<BalanceItems>;

  constructor(private crsBalanceStore: CrsBalanceStore) { }

  ngOnInit() {
    this.balanceItems$ = this.crsBalanceStore.getBalanceItems$();
  }

  selectMenuItem(id: number): void {
    this.menuItem = id;
  }

  isMenuActive(id: number): boolean {
    return this.menuItem === id;
  }

  drop(event: any): void {
    this.crsBalanceStore.pushValue(event.previousContainer.data[event.previousIndex], this.getTypeFromId(event.previousContainer.id));
  }

  private getTypeFromId(id: string): TypeEquipment {
    let result = null;
    if (id === 'vplsList') {
      result = TypeEquipment.VPLS;
    } else if (id === 'accesList') {
      result = TypeEquipment.ACCES;
    }
    return result;
  }

}
