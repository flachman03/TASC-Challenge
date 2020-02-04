import { GroceryItem } from './../card/card.interface';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import * as AppActions from './../actions/app.actions';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

      addGroceryItem(groceryItem) {
        this.store.dispatch( new AppActions.AddCard(groceryItem))
      }

  ngOnInit() {
  }

}
