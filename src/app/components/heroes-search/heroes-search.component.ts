import { Component, OnInit, Input } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-heroes-search',
  templateUrl: './heroes-search.component.html',
  styleUrls: ['./heroes-search.component.css']
})
export class HeroesSearchComponent implements OnInit {

  heroes:Heroe[] = [];
  numResults:number = 0;
  @Input() heroe:Heroe;
  @Input() index:number;

  constructor( private _heroesService:HeroesService,
                private activatedRoute:ActivatedRoute,
                private router:Router ) { }

  ngOnInit() {
    console.log('We are in the heroes search page!!!');

    this.activatedRoute.params.subscribe( params=>{
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      this.numResults = this.heroes.length;
    })
  }

  verHeroe() {
     this.router.navigate(['heroe', this.index])
  }

}
