import { Injectable, Input } from '@angular/core';
import { Article } from './article/article.model';


@Injectable()
export class ArticleService {
article: Article[];
  constructor() {
    this.article = [
      new Article('Angular 2', 'http', 3),
      new Article('Angular 4', 'http', 4),
      new Article('Angular 5', 'http', 4)
    ];
   }

getArticles(){
  console.log(`ici le service !`);
  return this.article;
}
}

