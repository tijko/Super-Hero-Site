import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroesComponent } from '../heroes/heroes.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-show-sad',
  templateUrl: './show-sad.component.html',
  styleUrls: ['./show-sad.component.css']
})

export class ShowSadComponent implements OnInit {

  public showSad:boolean = false;
  public isChecked:boolean = false;
  public heroes:Hero[];
  public var1:string[] = [];

  constructor(public s:HeroesComponent) { 
      this.heroes = this.s.heroes;
  }

  ngOnInit(): void {
  }

}
