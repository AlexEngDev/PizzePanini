export class Panino {

  id: number;
  nome: string;
  prezzo: number;
  immagine: string;


  constructor(id: number, nome: string, prezzo: number, immagine: string ){
    this.id = id;
    this.nome = nome;
    this.prezzo = prezzo;
    this.immagine = immagine;
  }

}
