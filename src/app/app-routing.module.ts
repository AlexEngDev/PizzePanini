import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NoAuthComponent } from './no-auth/no-auth.component';
import { PaniniComponent } from './panini/panini.component';
import { PizzeComponent } from './pizze/pizze.component';
import { PizzaEditComponent } from './pizze/pizza-edit/pizza-edit.component';
import { PizzaComponent } from './pizze/pizza/pizza.component';
import { PaninoComponent } from './panini/panino/panino.component';
import { PaninoEditComponent } from './panini/panino-edit/panino-edit.component';
import { AddPizzaComponent } from './pizze/add-pizza/add-pizza.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "pizze", component: PizzeComponent, canActivate: [authGuard], children:[
    {path: ':id', component: PizzaComponent},
    {path: ':id/edit', component: PizzaEditComponent},
    {path: 'pizze/newpizza', component: AddPizzaComponent}
  ]},
  {path: "panini", component: PaniniComponent, canActivate: [authGuard], children:[
    {path: ':id', component: PaninoComponent},
    {path: ':id/edit', component: PaninoEditComponent}
  ]},
  {path: "login", component: LoginComponent},
  {path: "no-auth", component: NoAuthComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
