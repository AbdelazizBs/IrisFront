import { Component, OnInit } from '@angular/core';
import {PersonnelServiceService} from '../../services/personnel-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  listArticle: any ;
  id: any;
  constructor(private  personnelService: PersonnelServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getListArticle();

  }
  updateArticle(myObj: any) {
    this.router.navigate(['/update-article' + '/' + myObj['id']]);
  }

  getListArticle() {
    this.personnelService.getListArticles().subscribe((data: any) => {
      this.listArticle = data;
      console.warn('*---**', this.listArticle);
    });
  }

}
