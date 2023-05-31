import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzeComponent } from './pizze/pizze.component';
import { PaniniComponent } from './panini/panini.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NoAuthComponent } from './no-auth/no-auth.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { PizzaComponent } from './pizze/pizza/pizza.component';
import { PizzaEditComponent } from './pizze/pizza-edit/pizza-edit.component';
import { PaninoComponent } from './panini/panino/panino.component';
import { PaninoEditComponent } from './panini/panino-edit/panino-edit.component';
import { AddPizzaComponent } from './pizze/add-pizza/add-pizza.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzeComponent,
    PaniniComponent,
    HomeComponent,
    NavbarComponent,
    NoAuthComponent,
    LoginComponent,
    PizzaComponent,
    PizzaEditComponent,
    PaninoComponent,
    PaninoEditComponent,
    AddPizzaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
