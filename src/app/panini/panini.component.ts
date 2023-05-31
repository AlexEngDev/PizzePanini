import { Component, OnInit } from '@angular/core';
import { PaninoService } from '../shared/panino.service';
import { Panino } from '../models/panino.model';

@Component({
  selector: 'app-panini',
  templateUrl: './panini.component.html',
  styleUrls: ['./panini.component.css']
})
export class PaniniComponent implements OnInit{



  constructor(private paninoService: PaninoService) {
  }


  receivedPanino: Panino[];


  ngOnInit(): void {
  this.receivedPanino = this.paninoService.getListaPanini()
  }


  

}
