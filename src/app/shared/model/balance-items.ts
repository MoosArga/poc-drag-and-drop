import { TypeEquipment } from '../enum/type-equipment.enum';
import { CrsEquipment } from './interface/crs-equipment';
import { TypeComparator } from '../enum/type-comparator.enum';

export class BalanceItems {

  type: TypeComparator;
  subType: TypeEquipment;
  items: CrsEquipment[];

  constructor() {
    this.items = [];
  }

}
