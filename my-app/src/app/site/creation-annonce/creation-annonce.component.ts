import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl, NgForm } from '@angular/forms';
import { CreationAnnonceService } from './_services/creation-annonce.service';
import { Result } from 'app/site/shared/_models/result';

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
  image: FormControl;
  email: string;
  errors: string;
  id: FormControl;
  results: Array<Result>;




  constructor(private creationAnnonceService: CreationAnnonceService, fb: FormBuilder) {
    // ici on constitue le formulaire dont la valeur sera envoyé en requête après contrôle
    const titlePattern = '[A-Za-z ]{2,100}';
    const descriptionPattern = '[a-zA-Z0-9_\' ]{2,1000}';
    this.title = fb.control('', [Validators.required, Validators.maxLength(100), Validators.pattern(titlePattern)]),
      this.category_id = fb.control(''),
      this.description = fb.control('', [Validators.required, Validators.maxLength(62000), Validators.pattern(descriptionPattern)]),
      this.url = fb.control(''),
      this.email = localStorage.getItem('email'),
      this.articleForm = fb.group({
        image: this.image,
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

    console.log(title + description);
    // si tous les champs sont remplis, l'objet utilisateur que constitue la valeur du formulaire est envoyé
    // l'id et la date de création seront ajoutés côté serveur ou au nv de la BDD
    if (title + description) {
      console.log(this.articleForm.value);
      this.creationAnnonceService.sendData(localStorage.getItem('token'), this.articleForm.value);
      that.errors = null;
      this.articleDisplay();
    } else {
      that.errors += 'tous les champs sont nécessaires'
    }

  }

  deleteArticle(result) {
    let reponse: boolean;
    reponse = confirm('êtes vous sur de vouloir supprimer cet article?');
    if (reponse === true) {
      this.creationAnnonceService.deleteArticle(localStorage.getItem('token'), result.id);
      this.articleDisplay();
    } else {
      return;
    }


  }

  updateArticle(updateForm: NgForm) {
    console.log(updateForm.value);
    this.creationAnnonceService.updateArticle(localStorage.getItem('token'), JSON.stringify(updateForm.value));
    this.articleDisplay()
  }

  articleDisplay() {
    const that = this;
    const callback2 = (data) => {
      const resultListJson = ((data)._body);
      that.results = JSON.parse(resultListJson);
    }
    this.creationAnnonceService.getListResults(localStorage.getItem('token'), localStorage.getItem('email')
      , callback2)
  }

  onFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.articleForm.get('image').setValue({
          name: file.name,
          type: file.type,
          image: reader.result.split(',')[1]
        })
      };
    }
  }

  ngOnInit() {
  }
}
