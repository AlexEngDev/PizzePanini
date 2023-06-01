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
  user:string
  checkPassword:boolean = false

  ngDoCheck(): void {
    //if(this.user && this.user != localStorage.getItem('usernameUtentLoggato')){
     // this.user = localStorage.getItem('passwordUtentLoggato')
   // }

  }

  ngOnInit(): void {
    this.onClick()
    this.user = localStorage.getItem('usernameUtentLoggato');
  }


  onLogin(){
    this.loggedIn = true;

    this.userServ.setUserNamePass(this.userUsername, this.userPassword)

    this.userServ.login();

    this.refresh()
   // this.router.navigate(['/']);
  }

  refresh(): void {
    window.location.reload();
}


  onLogout(){
    this.loggedIn = false;
    this.userServ.logout();
    this.buttonChange = false
    this.refresh()
  }






  onClick(){
    this.buttonChange = this.authServ.controllaRuolo()
  }


}
