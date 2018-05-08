import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  @Input()
  color: string;

  @Output("color")
  colorOutput = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  choose(color: string) {
    this.color = color;
    this.colorOutput.emit(color);
  }

  reset() {
    this.color ='black';
  }
}
