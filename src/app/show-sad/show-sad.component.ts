import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroesComponent } from '../heroes/heroes.component';

@Component({
  selector: 'app-show-sad',
  templateUrl: './show-sad.component.html',
  styleUrls: ['./show-sad.component.css']
})
export class ShowSadComponent implements OnInit {

  public showSad:boolean = 'false';
  public isChecked:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
