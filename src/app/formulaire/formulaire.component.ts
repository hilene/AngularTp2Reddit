import { Component, OnInit } from '@angular/core';
import { Article } from '../article/article.model';
import { ArticleService } from '../article.service';


@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css'],
  providers: [ArticleService]
})
export class FormulaireComponent implements OnInit {
  articles: Article[];

  constructor(service: ArticleService) { 
    this.articles = service.getArticles();
  }
  ngOnInit() {
  }

}
