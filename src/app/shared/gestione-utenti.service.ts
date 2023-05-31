import { Injectable } from '@angular/core';
import { Utente } from '../models/utente.model';

@Injectable({
  providedIn: 'root'
})
export class GestioneUtentiService {
  constructor() { }

  utenteLoggato: Utente = {
    id: 1,
    username: "Pippo",
    password: "12345",
    role: 'Admin'
  }


setUserNamePass(usName:string, usPass:string){
 this.utenteLoggato.username = usName
 this.utenteLoggato.password = usPass
 //console.log(usName);
 //console.log(usPass);
 //console.log( this.utenteLoggato.username);
 //console.log( this.utenteLoggato.password);

}


  login(){
    console.log( this.utenteLoggato.password);
    if(this.utenteLoggato.password === "12345"){
      localStorage.setItem("roleUtenteLoggato", this.utenteLoggato.role);
      localStorage.setItem("usernameUtentLoggato", this.utenteLoggato.username);
      localStorage.setItem("passwordUtentLoggato", this.utenteLoggato.password);
    }else{
      this.logout()
    }
  }

  logout(){
    localStorage.clear();
  }

}
