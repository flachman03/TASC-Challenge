import { GroceryItem } from './../card/card.interface';
import { CardComponent } from './../card/card.component';
import { mockData } from './../mock-data';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  currentCart: Observable<GroceryItem[]>;

  constructor(private store: Store<AppState>) { 
    this.currentCart = store.select('groceryItems')
  }
  groceryItems = mockData;

  calculateTotalPrice() {
    let totalPrice = 0;
    this.currentCart.forEach( item => {
      item.forEach( groceryItem => {
        totalPrice += (groceryItem.price * groceryItem.quantity)
      })
    })
    return totalPrice;
  }
}
