/*Classe Resultat qui est utilisé dans notre composants results et qui permet de créer un tableau 
de résultat qui servira à simuler une requete getHTTP*/
export class Result {
 id: number;
  category: string;
  date: Date;
  title: string;
  description: string;
  url: string;

  constructor(id: number,
    category: string,
    date: Date,
    title: string,
    url: string) {
    this.id = id;
    this.category = category;
    this.date = date;
    this.title = title;
    this.description = this.createLorem(600);
    this.url = url;
  }

/*fonction qui permet de générer du lorem ipsum, utilisé juste au dessus*/
  createLorem(length?: number): string {
    let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing ';
    lorem += 'elit, sed do eiusmod tempor incididunt ut labore et ';
    lorem += 'dolore magna aliqua. Ut enim ad minim veniam, quis ';
    lorem += 'nostrud exercitation ullamco laboris nisi ut aliquip';
    lorem += 'ex ea commodo consequat. Duis aute irure dolor in reprehenderit in ';
    lorem += 'voluptate velit esse cillum dolore eu fugiat nulla pariatur. ';
    lorem += 'elit, sed do eiusmod tempor incididunt ut labore et ';
    lorem += 'dolore magna aliqua. Ut enim ad minim veniam, quis ';
    lorem += 'nostrud exercitation ullamco laboris nisi ut aliquip';
    lorem += 'ex ea commodo consequat. Duis aute irure dolor in reprehenderit in ';
    lorem += 'voluptate velit esse cillum dolore eu fugiat nulla pariatur. ';

    /*lorem.slice( 0,length) permet de découper la chaine lorem à la longueur voulue ,
    le length en parametre est l'endroit ou se terminera le découpage*/
    length = length || lorem.length;
    return  (lorem.slice(0, length) + '.');
  }
}
