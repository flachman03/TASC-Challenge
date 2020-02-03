import { GroceryItem } from '../card/card.interface';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

export const ADD_CARD = '[AppModule] Add'

export class AddCard implements Action {
  readonly type = ADD_CARD;

  constructor( public payload: GroceryItem) {}
}

export type Actions = AddCard;