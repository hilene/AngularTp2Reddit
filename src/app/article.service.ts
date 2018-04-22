import { Injectable } from '@angular/core';
import { Article } from './article/article.model';


@Injectable()
export class ArticleService {
article: Article[];
  constructor() { }

getArticles(){
  console.log(`ici le service !`);
  return this.article;
}
}
