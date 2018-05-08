import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ArticleComponent } from './article/article.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';


@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    ArticleComponent,
    ColorPickerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
