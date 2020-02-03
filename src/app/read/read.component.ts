import { GroceryItem } from './../card/card.interface';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { Store } from '@ngrx/store'
import {AppState} from './../app.state'

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  groceryItems: Observable<GroceryItem[]>

  constructor(private store: Store<AppState>) { 
    this.groceryItems = store.select('groceryItems')
  }

  ngOnInit() {
  }

}
