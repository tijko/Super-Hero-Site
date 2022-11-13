import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroesComponent } from '../heroes/heroes.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

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
