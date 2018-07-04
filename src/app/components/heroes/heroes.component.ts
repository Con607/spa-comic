import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor( private _heroesService:HeroesService,
                private router:Router ) {
    // console.log('Constructor');
  }

  ngOnInit() {
    // console.log('ngOnInit');

    this.heroes = this._heroesService.getHeroes();

    console.log(this.heroes);
  }

  verHeroe(index:number){
    this.router.navigate(['heroe', index]);
  }

}
