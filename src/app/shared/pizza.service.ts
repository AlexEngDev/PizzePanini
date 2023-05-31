import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza.model';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  constructor() { }


 private listaPizze:Pizza[]=[
    {
      id: 0,
      nome:"Napoletana",
      prezzo: 10,
      immagine: "https://images.pexels.com/photos/11230267/pexels-photo-11230267.jpeg"
    },
    {
      id: 1,
      nome:"Veronese",
      prezzo: 15,
      immagine: "https://images.pexels.com/photos/2471171/pexels-photo-2471171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      nome:"Bolognese",
      prezzo: 20,
      immagine: "https://images.pexels.com/photos/13814644/pexels-photo-13814644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ]


addPizza(pizza:Pizza){
  this.listaPizze.push(pizza)
    //console.log(this.listaPizze);
}

delPizza(indice:number){
  this.listaPizze.splice(indice, 1)
}


getListaPizza(){
  return this.listaPizze
}


getPizzaById(id: number): Pizza{
  const pizza = this.listaPizze.find(
    (p) => {
      return p.id === id
    }
  )
  return pizza;
}


updatePizza(id: number, nuoveInfo:{nome: string, prezzo: number, immagine: string}){
  // questo metodo deve modificare il singolo  nell'array
  const pizzaModificata = this.listaPizze.find(
    (pzz) => {
      return pzz.id === id;
    }
  )
  if(pizzaModificata){
    pizzaModificata.nome = nuoveInfo.nome;
    pizzaModificata.prezzo = nuoveInfo.prezzo;
    pizzaModificata.immagine = nuoveInfo.immagine;
  }else{
    //gestiremo quando l'id  non esiste
    alert('questa pizza non esiste')
  }
}


}
