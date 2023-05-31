import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Panino } from 'src/app/models/panino.model';
import { PaninoService } from 'src/app/shared/panino.service';

@Component({
  selector: 'app-panino',
  templateUrl: './panino.component.html',
  styleUrls: ['./panino.component.css']
})
export class PaninoComponent implements OnInit{
  constructor(private route: ActivatedRoute, private router: Router, private paniniServ: PaninoService) { }

  panino: Panino;


  ngOnInit(): void {

    const id = +this.route.snapshot.params['id'];

    this.route.params
    .subscribe(
      (params: Params) => {
        this.panino = this.paniniServ.getPaninoById(+params['id']);
      }
    )

  }

}
