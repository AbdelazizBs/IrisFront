import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {
  url = 'http://127.0.0.1:8080/';

  constructor(private http: HttpClient) { }


  getArticleById(id: any) {
    return this.http.get(this.url + 'article/getArticleById/' + id);
  }

  updateArticle(id: any, article: any): Observable<any> {
    return this.http.put<any>(this.url + 'article/updateArticle/' + id, article);
  }

}
