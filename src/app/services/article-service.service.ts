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

  ajoutArticle(article: any) {
    return this.http.post(this.url + 'article/addArticle' , article);
  }
  getArticleById(id: any) {
    return this.http.get(this.url + 'article/getArticleById/' + id);
  }

  getListArticleClient(id: any) {
    return this.http.get(this.url + 'article/getArticle/' + id);
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
  delete(id: any) {
    return this.http.delete<any>(this.url + 'article/deleteArticle/' + id);

  }

}
