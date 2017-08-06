import { Component, OnInit } from '@angular/core';
/*on importe la classe Result pour l'utiliser dans le tableau*/
import { Result } from '../../_models/result';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  /*la classe possede deux attributs, le tableau qui servira à alimenter la page results
  la cat qui permettra de créer un filtrage dynamique des résultats via un ngIf de la template 
  et qui sera modifiable par la fonction setCategory */
  results: Array<Result>;
  cat = 'all';
  /*on initier un tableau de résultats pour simuler une requete gethttp*/
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
  /*cette fonction est utilisé dans le ngIf qui permet un affichage conditionnelle
  Si l'affichage est true l'article sera affiché, sinon il sera supprimé du DOM*/
  setCategory(myString: string): void {
    console.log(myString);
    if (myString === 'objets' || myString === 'evenements' || myString === 'services') {
      this.cat = myString;
    }
    if (myString === 'all') {
      this.cat = 'all';
    }

  }
}
