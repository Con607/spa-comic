import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe:any = {};

  constructor( private activatedRoute:ActivatedRoute,
                private _heroesService:HeroesService,
                private router:Router ) {
    this.activatedRoute.params.subscribe( params=>{
        // console.log(params['id']);
        this.heroe = this._heroesService.getHeroe(params['id']);
        console.log(this.heroe);
    })
  }

  ngOnInit() {
  }

  goToHeroes() {
    this.router.navigate(['heroes']);
  }

}
