import { TypeCrsEquipment } from '../enum/type-crs-equipment.enum';
import { CrsEquipment } from './interface/crs-equipment';

export class BalanceItems {

  type: TypeCrsEquipment;
  items: CrsEquipment[];

  constructor() {
    this.items = [];
  }

}
