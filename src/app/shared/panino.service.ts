import { Injectable } from '@angular/core';
import { Panino } from '../models/panino.model';

@Injectable({
  providedIn: 'root'
})
export class PaninoService {

  constructor() { }


  private listaPanini:Panino[]=[
    {
      id: 0,
      nome:"Veneziano",
      prezzo: 10,
      immagine: "https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 1,
      nome:"Mantovano",
      prezzo: 15,
      immagine: "https://images.pexels.com/photos/1556698/pexels-photo-1556698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      nome:"Booleano",
      prezzo: 20,
      immagine: "https://images.pexels.com/photos/2983098/pexels-photo-2983098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ]

  getListaPanini(){
    return this.listaPanini
  }


  getPaninoById(id: number): Panino{
    const panino = this.listaPanini.find(
      (pn) => {
        return pn.id === id
      }
    )
    return panino;

  }



}
