import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TypeEquipment } from '../enum/type-equipment.enum';
import { BalanceItems } from '../model/balance-items';
import { CrsEquipment } from '../model/interface/crs-equipment';

@Injectable({
  providedIn: 'root'
})
export class CrsBalanceStore {

  private balanceItems$: BehaviorSubject<BalanceItems> = new BehaviorSubject<BalanceItems>(new BalanceItems());

  constructor() { }

  getBalanceItems$(): Observable<BalanceItems> {
    return this.balanceItems$.asObservable();
  }

  pushValue(crs: CrsEquipment, type: TypeEquipment): void {
    const currentValue = this.balanceItems$.value;
    currentValue.items = [...currentValue.items, crs];
    currentValue.subType = type;
    this.balanceItems$.next(currentValue);
  }

  reset(): void {
    this.balanceItems$.next(new BalanceItems());
  }
}
