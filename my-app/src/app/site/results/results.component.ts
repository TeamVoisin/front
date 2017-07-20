import { Component, OnInit } from '@angular/core';
import { Result } from './result';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  results: Array<Result>;
  constructor() {
    this.results = [
      new Result(1, 'objets', new Date('01 / 02 / 2017'), 'Seche - Cheveu',
        'http://lorempixel.com/250/140/food'),
      new Result(2, 'objets', new Date('01 / 05 / 2017'), 'Bijoux',
        'http://lorempixel.com/250/140/food'),
      new Result(3, 'evenements', new Date('01 / 06 / 2017'), 'Match de Foot',
        'http://lorempixel.com/250/140/sports'),
      new Result(4, 'services', new Date('01 / 09 / 2017'), 'Jardinage',
        'http://lorempixel.com/250/140/people')
    ]
  }
  ngOnInit() {
  }

}
