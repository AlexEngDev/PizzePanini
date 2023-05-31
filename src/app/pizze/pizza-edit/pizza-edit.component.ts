import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Pizza } from 'src/app/models/pizza.model';
import { PizzaService } from 'src/app/shared/pizza.service';

@Component({
  selector: 'app-pizza-edit',
  templateUrl: './pizza-edit.component.html',
  styleUrls: ['./pizza-edit.component.css']
})
export class PizzaEditComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router, private pizzaServ: PizzaService){

  }

  pizza:Pizza

  idPizza:number
  nomePizza:string
  prezzoPizza:number
  immaginePizza:string



  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    //this.pizza = this.pizzaServ.getPizzaById(id);

    this.route.params
    .subscribe(
      (params: Params) =>{
        this.pizza = this.pizzaServ.getPizzaById(+params['id']);
      }
    )


    this.idPizza = this.pizza.id;
    this.nomePizza = this.pizza.nome;
    this.prezzoPizza = this.pizza.prezzo;
    this.immaginePizza = this.pizza.immagine;
  }




  onEditPizza(){
    this.pizzaServ.updatePizza(this.pizza.id, {nome:this.nomePizza, prezzo: this.prezzoPizza, immagine: this.immaginePizza} );


  }

}
