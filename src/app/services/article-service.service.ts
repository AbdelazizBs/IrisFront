import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {
  url = 'http://127.0.0.1:8080/';

  constructor(private http: HttpClient) { }

  refIris() {
    return this.http.get(this.url + 'article/getRefIris');
  }

  addToClient( idArticle: any, nomClient: any) {
    return this.http.put(this.url + 'article/addToClient/' + nomClient + '/' + idArticle, {});
  }

  ajouterAcmd(idArticle: any, idCmd: any) {
    return this.http.put(this.url + 'commande/ajouterAcmd/' + idArticle + '/' + idCmd, {});
  }
  ajoutArticle(article: any) {
    return this.http.post(this.url + 'article/addArticle' , article);
  }
  getArticleById(id: any) {
    return this.http.get(this.url + 'article/getArticleById/' + id);
  }

  getArticleByIdClient(id: any) {
    return this.http.get(this.url + 'article/getArticleByIdClient/' + id);
  }
  getArticlesByIdCommande(idcmd: any) {
    return this.http.get(this.url + 'article/' + idcmd  );  }

  getLignCmdByIdArticleAndIdCmd(idArticle, idcmd) {
    return this.http.get(this.url + 'ligneCommand/getLignCmdByIdArticleAndIdCmd/' + idArticle + '/' +  idcmd );  }



  getListArticleClientByNomClient(nomClient: any) {
    return this.http.get(this.url + 'article/getListArticleClientByNomClient/' + nomClient);
  }

  getArticleByCodeArticles(codeArticle: any) {
    return this.http.get(this.url + 'article/getArticleByCodeArticle/' + codeArticle);
  }

  updateArticle(id: any, article: any): Observable<any> {
    return this.http.put<any>(this.url + 'article/updateArticle/' + id, article);
  }

  getListArticles() {
    return this.http.get(this.url + 'article/articles');
  }

  getListArticlesNonLiee() {
    return this.http.get(this.url + 'article/getListArticlesNonLiee');
  }
  delete(id: any) {
    return this.http.delete<any>(this.url + 'article/deleteArticle/' + id);

  }

}
