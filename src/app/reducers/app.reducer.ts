import { GroceryItem } from '../card/card.interface';
import { Action } from '@ngrx/store';
import * as AppActions from '../actions/app.actions';

const initialState = {
  name: '16lb bag of Skittles',
  price: 16.00,
  imported: false,
  salesTax: 0,
  imgUrl: '../../assets/skittles.png'
}

export function GroceryItemsReducer(state: GroceryItem[] = [initialState], action: AppActions.Actions) {
  switch(action.type) {
    case AppActions.ADD_CARD:
      return [...state, action.payload]
    default:
      return state;
  }
}