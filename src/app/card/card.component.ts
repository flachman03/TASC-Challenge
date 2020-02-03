import { GroceryItem } from './card.interface';
import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent  {
  @Input() item: GroceryItem;
  quantity = 1;

  changeQuantity(quantity) {
    const newQuantity = this.quantity + quantity
    if (newQuantity < 1) {
      this.quantity = 1
    } else {
      this.quantity = newQuantity
    }
  }
}
