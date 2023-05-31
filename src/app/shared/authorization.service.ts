import { Injectable } from '@angular/core';
import { Utente } from '../models/utente.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {



  constructor() { }

  controllaRuolo(): boolean{

    let roleUtenteLoggato = localStorage.getItem('roleUtenteLoggato');
    let usernameUtentLoggato = localStorage.getItem('usernameUtentLoggato');
    let passwordUtentLoggato = localStorage.getItem('passwordUtentLoggato');



   // if(roleUtenteLoggato === "Admin" && usernameUtentLoggato === "Pippo" && passwordUtentLoggato === "12345"){
      if(passwordUtentLoggato === "12345"){
      return true;
    }else{
      return false;
    }
  }

}
