import { Component, OnDestroy, OnInit } from '@angular/core';
import icShoppingBasket from '@iconify/icons-ic/twotone-shopping-basket';

@Component({
  selector: 'vex-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {

  icShoppingBasket = icShoppingBasket;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {}
}
