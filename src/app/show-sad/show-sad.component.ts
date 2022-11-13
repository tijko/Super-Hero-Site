import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroesComponent } from '../heroes/heroes.component';


@Component({
  providers:[HeroesComponent], 
  selector: 'app-show-sad',
  templateUrl: './show-sad.component.html',
  styleUrls: ['./show-sad.component.css']
})

export class ShowSadComponent implements OnInit {

  public showSad:boolean = false;
  public isChecked:boolean = false;
  public heroes:Hero[];
  public hero:Hero;

  constructor(public s:HeroesComponent) { 
      this.heroes = this.s.heroes;
      this.hero = this.heroes[0];
  }

  ngOnInit(): void {
  }

}
