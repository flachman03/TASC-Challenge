import { GroceryItem } from './card.interface';
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import * as AppActions from './../actions/app.actions';


@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent  {
  constructor(private store: Store<AppState>) { }

  @Input() item: GroceryItem;


  changeQuantity(quantity) {
    const newQuantity = this.item.quantity + quantity
    if (newQuantity < 1) {
      this.item.quantity = 1
    } else {
      this.item.quantity = newQuantity
    }
  }

  addGroceryItem(groceryItem) {
    this.store.dispatch( new AppActions.AddCard(groceryItem));
  }
}
