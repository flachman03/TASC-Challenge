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
  currentCart: Observable<GroceryItem[]> = this.store.select('groceryItems')

  constructor(private store: Store<AppState>) { }
  groceryItems = mockData;

  calculateTaxTotal() {
    let totalTax = 0;
    this.currentCart.forEach( item => {
      item.forEach( groceryItem => {
        if(groceryItem.salesTax != 0) {
          totalTax += (groceryItem.price * groceryItem.salesTax)
        }
        if(groceryItem.imported) {
          totalTax += (groceryItem.price * .05)
        }
      })
    })
    return totalTax;
  }

  calculateTotalPrice() {
    let totalPrice = 0;
    this.currentCart.forEach( item => {
      item.forEach( groceryItem => {
        totalPrice += (groceryItem.price * groceryItem.quantity)
      })
    })
    let totalTax = this.calculateTaxTotal()
    totalPrice += totalTax;
    return totalPrice;
  }

  countCart() {
    let cartLength = 0
      this.currentCart.forEach( cart => cartLength = cart.length)
      return cartLength > 0 ? true : false;
    }
}
