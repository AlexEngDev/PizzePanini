import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pizza } from 'src/app/models/pizza.model';
import { PizzaService } from 'src/app/shared/pizza.service';

@Component({
  selector: 'app-add-pizza',
  templateUrl: './add-pizza.component.html',
  styleUrls: ['./add-pizza.component.css']
})
export class AddPizzaComponent {
  constructor(private route: ActivatedRoute, private router: Router, private pizzaServ: PizzaService) { }




  idPizza:number = 4
  nomePizza:string = "Canadese"
  prezzoPizza:number = 20
  immaginePizza:string = "https://images.pexels.com/photos/6072095/pexels-photo-6072095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"





  onAddPizza(){
  let newPizza = new Pizza(this.idPizza, this.nomePizza, this.prezzoPizza, this.immaginePizza)
   this.pizzaServ.addPizza(newPizza)
  }



}
