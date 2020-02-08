import { Component, OnInit, Input } from '@angular/core';
import { CrsAcces } from 'src/app/shared/model/crs-acces';

@Component({
  selector: 'app-crs-acces',
  templateUrl: './crs-acces.component.html'
})
export class CrsAccesComponent implements OnInit {

  @Input() acces: CrsAcces;

  constructor() { }

  ngOnInit() {
  }

}
