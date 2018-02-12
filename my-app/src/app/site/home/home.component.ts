import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
/*on importe la classe Result pour l'utiliser dans le tableau*/
import { HomeService } from './_services/home.service';
import { Result } from 'app/site/shared/_models/result';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {
  /*la classe possede deux attributs, le tableau qui servira à alimenter la page results
  la cat qui permettra de créer un filtrage dynamique des résultats via un ngIf de la template 
  et qui sera modifiable par la fonction setCategory */
  searchForm: FormGroup;
  keyword: FormControl;
  results: Array<Result>;
  nb: number;
  errors: string;
  cat = 'all';
  constructor(private homeService: HomeService, fb: FormBuilder) {
    const keywordPattern = '[a-zA-Z0-9_ ]{1,100}';
    this.keyword = fb.control('', [Validators.required, Validators.maxLength(62000), Validators.pattern(keywordPattern)]),
      this.searchForm = fb.group({
        keyword: this.keyword
      })

  }


  search() {
    const keyword = this.keyword.valid ? this.keyword.value : null;
    const errors = this.errors = '';
    const that = this;
    console.log(that.searchForm.value);
    if (keyword == null) {
      that.errors += 'votre recherche contient des caractères non autorisés \n ';
    }

    const json = that.homeService.getListResults(that.searchForm.value).subscribe((data) => {
      this.results = JSON.parse(data['_body']);
      this.nb = this.results.length;
    });
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
  ngOnInit() {
  }

}
