import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Pizza } from 'src/app/models/pizza.model';
import { PizzaService } from 'src/app/shared/pizza.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit{
  constructor(private route: ActivatedRoute, private router: Router, private pizzaServ: PizzaService) { }

  pizza:Pizza;


  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.route.params
    .subscribe(
      (params: Params) => {
        this.pizza = this.pizzaServ.getPizzaById(+params['id']);
      }
    )
  }


  onEdit(){
    this.router.navigate(['edit'], {relativeTo: this.route})
  }


  onDelete(){
    
  }

}
