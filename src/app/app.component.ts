import { Component } from '@angular/core';
import { Article } from './article/article.model';
import { ArticleService } from './article.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   providers: [ArticleService]
})
export class AppComponent {
  title = 'app';
  article: Article[];

  constructor(service: ArticleService){
    this.article = service.getArticles();
     /*this.article = [
      new Article('Angular 2', 'http', 3),
      new Article('Angular 4', 'http', 4),
      new Article('Angular 5', 'http', 4)
    ];*/
  }
  addArticle(title: HTMLInputElement, link: HTMLInputElement){
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.article.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles(): Article[] {
    return this.article.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
