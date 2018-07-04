import { Component, OnInit } from '@angular/core';
// import { HeroesService } from '../../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private router:Router ) { }

  ngOnInit() {
  }

  buscarHeroe( termino:string ) {
    console.log(termino);
    // this._heroesService.buscarHeroes(termino);

    this.router.navigate(['/heroes-search', termino]);
  }


}
