import { Component, DoCheck, OnInit } from '@angular/core';
import { AuthorizationService } from '../shared/authorization.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, DoCheck{


bools: boolean;

  constructor(private authServ: AuthorizationService){

  }
  ngDoCheck(): void {
    if (this.authServ.controllaRuolo() !== this.bools) {
     // console.log('Valore boolean cambiato');
      this.bools = this.authServ.controllaRuolo();
    }
  }


  ngOnInit(): void {
  }

 fun(){
  this.authServ.controllaRuolo();
  this.bools === this.authServ.controllaRuolo();
 }



}
