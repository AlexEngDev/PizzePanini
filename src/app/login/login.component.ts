import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestioneUtentiService } from '../shared/gestione-utenti.service';
import { AuthorizationService } from '../shared/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, DoCheck{


  buttonChange: Boolean;
  userUsername: string = "Pippo";
  userPassword: string = "12345";


  constructor(private userServ: GestioneUtentiService, private router: Router, private authServ:AuthorizationService){
  }


  loggedIn: boolean;


  ngDoCheck(): void {
  }

  ngOnInit(): void {
    this.onClick()
  }


  onLogin(){
    this.loggedIn = true;

    this.userServ.setUserNamePass(this.userUsername, this.userPassword)

    this.userServ.login();

    
    this.router.navigate(['/']);
  }

/*
  onLogin(){
    this.loggedIn = true;
    this.userServ.login();
    this.router.navigate(['/']);
  }
*/


  onLogout(){
    this.loggedIn = false;
    this.userServ.logout();
    this.buttonChange = false
  }






  onClick(){
    this.buttonChange = this.authServ.controllaRuolo()
    console.log(this.buttonChange);


}


}
