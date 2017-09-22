import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators , AbstractControl, NgForm  } from '@angular/forms';
import { CreationAnnonceService } from './_services/creation-annonce.service';
import { Result } from './_models/result';
@Component({
  selector: 'app-creation-annonce',
  templateUrl: './creation-annonce.component.html',
  styleUrls: ['./creation-annonce.component.css'],
  providers: [CreationAnnonceService]
})
export class CreationAnnonceComponent implements OnInit {
  // paramètre du formulaire et erreur à afficher au cas ou le formulaire est mal rempli
  articleForm: FormGroup;
  category_id: FormControl;
  title: FormControl;
  description: FormControl;
  url: FormControl;
  email: string;
  errors: string;
  id: FormControl;
  results: Array<Result>;




  constructor(private creationAnnonceService: CreationAnnonceService, fb: FormBuilder) {
    // ici on constitue le formulaire dont la valeur sera envoyé en requête après contrôle
    const titlePattern = '[A-Za-z ]{2,100}';
    const descriptionPattern = '[a-zA-Z0-9_ ]{2,1000}';
    this.title = fb.control('', [Validators.required, Validators.maxLength(100), Validators.pattern(titlePattern)]),
      this.category_id = fb.control(''),
      this.description = fb.control('', [Validators.required, Validators.maxLength(62000), Validators.pattern(descriptionPattern)]),
      this.url = fb.control(''),
      this.email = sessionStorage.getItem('email'),
      this.articleForm = fb.group({
       title: this.title,
        category_id: this.category_id,
        description: this.description,
        url: this.url,
        email: this.email
      });


  }

  // il faudra ajouter des conditions ternaires
  createArticle() {
    // ici on  envoie les données de formulaires au constructeur
    const title = this.title.valid ? this.title.value : null;
    const description = this.description.valid ? this.description.value : null;
    const errors = this.errors = '';
    const that = this;
    if (title == null) {
      that.errors += 'votre titre contient des caractères non autorisés \n ';
    }
    if (description == null) {
      that.errors += 'votre description contient des caractères non autorisés \n ';
    }

    console.log(title + description );
    // si tous les champs sont remplis, l'objet utilisateur que constitue la valeur du formulaire est envoyé
    // l'id et la date de création seront ajoutés côté serveur ou au nv de la BDD
    if (title + description) {
      console.log(this.articleForm.value);
      this.creationAnnonceService.sendData(sessionStorage.getItem('token'), this.articleForm.value);
      that.errors = null;
    } else {
      that.errors += 'tous les champs sont nécessaires'
    }

  }

  deleteArticle(deleteForm: NgForm) {
    console.log(deleteForm.value);
    this.creationAnnonceService.deleteArticle(sessionStorage.getItem('token'), JSON.stringify(deleteForm.value));

  }

  articleDisplay() {
    const that = this;
    const callback2 = (data) => {
      const resultListJson = ((data)._body);
      console.log(resultListJson) ;
      that.results = JSON.parse(resultListJson);
      console.log(that.results);
    }
      this.creationAnnonceService.getListResults(sessionStorage.getItem('token'), sessionStorage.getItem('email')
      , callback2)
  }
  ngOnInit() {
  }
}
