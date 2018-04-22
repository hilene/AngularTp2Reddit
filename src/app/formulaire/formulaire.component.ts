import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  constructor() { }
  addArticle(title: HTMLInputElement, link: HTMLInputElement){
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    return false;
  }
  ngOnInit() {
  }

}
