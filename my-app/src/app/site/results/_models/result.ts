/*Classe Resultat qui est utilisé dans notre composants results et qui permet de créer un tableau 
de résultat qui servira à simuler une requete getHTTP*/
import {Category} from './category';
import {User} from './user';
export class Result {
 id: number;
  category: Category;
  date: string;
  title: string;
  description: string;
  url: string;
  user: User;
}
