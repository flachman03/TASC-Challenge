import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { CardComponent } from './card/card.component';

import { StoreModule } from '@ngrx/store'
import { GroceryItemsReducer} from './reducers/app.reducer';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    MyCartComponent,
    CardComponent,
    ReadComponent,
    CreateComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      groceryItems: GroceryItemsReducer
    }),
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'login', component: LoginComponent},
      { path: 'mycart', component: MyCartComponent}
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
