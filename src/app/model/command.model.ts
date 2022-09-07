import {Article} from './Article.model';

export class Commande {
  id: number;
  dateCmd: any ;
  numCmd: any ;
  typeCmd: any ;
  nomClient: any ;
  articles: Article[];
  accepted: any ;
}
