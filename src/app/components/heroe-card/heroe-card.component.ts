import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css']
})
export class HeroeCardComponent implements OnInit {

  @Input() heroe:any = {};
  @Input() index:number;


  constructor( private _heroesService:HeroesService,
                private router:Router ) {}

  ngOnInit() {
  }

  verHeroe() {
    this.router.navigate(['heroe', this.index]);
  }

}
