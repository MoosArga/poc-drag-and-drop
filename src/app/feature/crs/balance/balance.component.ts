import { Component, OnInit } from '@angular/core';
import { CrsBalanceStore } from 'src/app/shared/store/crs-balance.store';
import { Observable } from 'rxjs';
import { BalanceItems } from 'src/app/shared/model/balance-items';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html'
})
export class BalanceComponent implements OnInit {

  balanceItems$: Observable<BalanceItems>;

  constructor(private crsBalanceStore: CrsBalanceStore) { }

  ngOnInit() {
    this.balanceItems$ = this.crsBalanceStore.getBalanceItems$();
  }

  clearComparator(): void {
    this.crsBalanceStore.reset();
  }

}
