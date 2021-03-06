import { Component, OnInit } from '@angular/core';

/*on importe la classe Result pour l'utiliser dans le tableau*/
import { ResultService } from './_services/results.service';
import { Result } from 'app/site/shared/_models/result';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
  providers: [ResultService]
})
export class ResultsComponent implements OnInit {
  /*la classe possede deux attributs, le tableau qui servira à alimenter la page results
  la cat qui permettra de créer un filtrage dynamique des résultats via un ngIf de la template 
  et qui sera modifiable par la fonction setCategory */
  results: Array<Result>;
  nb: number;
  cat = 'all';
  constructor(private resultService: ResultService) {
  }

  ngOnInit() {
    const that = this;
    const json = that.resultService.getListResults().subscribe((data) => {
      this.results = JSON.parse(data['_body']);
      this.nb = this.results.length;
    });
  }
  /*cette fonction est utilisé dans le ngIf qui permet un affchage conditionnelle
  Si l'affichage est true l'article sera affiché, sinon il sera supprimé du DOM*/i
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
