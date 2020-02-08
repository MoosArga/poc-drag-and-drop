import { Component, OnInit, Input } from '@angular/core';
import { CrsVpls } from 'src/app/shared/model/crs-vpls';

@Component({
  selector: 'app-crs-vpls',
  templateUrl: './crs-vpls.component.html'
})
export class CrsVplsComponent implements OnInit {

  @Input() vpls: CrsVpls;

  constructor() { }

  ngOnInit() {
  }

  getVplsLivraisons(): string {
    return this.vpls.livraisons.join(', ');
  }

}
