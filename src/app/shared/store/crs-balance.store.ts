import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CrsEquipment } from '../model/interface/crs-equipment';
import { TypeCrsEquipment } from '../enum/type-crs-equipment.enum';
import { distinctUntilChanged } from 'rxjs/operators';
import { BalanceItems } from '../model/balance-items';

@Injectable({
  providedIn: 'root'
})
export class CrsBalanceStore {

  private balanceItems$: BehaviorSubject<BalanceItems> = new BehaviorSubject<BalanceItems>(new BalanceItems());

  constructor() { }

  getBalanceItems$(): Observable<BalanceItems> {
    return this.balanceItems$.asObservable();
  }

  pushValue(crs: CrsEquipment, type: TypeCrsEquipment): void {
    const currentValue = this.balanceItems$.value;
    currentValue.items = [...currentValue.items, crs];
    currentValue.type = type;
    this.balanceItems$.next(currentValue);
  }

  reset(): void {
    this.balanceItems$.next(new BalanceItems());
  }
}
