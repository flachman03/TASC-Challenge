import { GroceryItem } from './card/card.interface';

export interface AppState {
  readonly groceryItems: GroceryItem[];
}