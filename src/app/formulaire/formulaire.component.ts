import { Component, OnInit } from '@angular/core';
import { Article } from '../article/article.model';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  articles: Article[];

  constructor() { }


  ngOnInit() {
  }

}
