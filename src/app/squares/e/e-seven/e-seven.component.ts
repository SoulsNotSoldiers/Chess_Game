import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-e-seven',
  templateUrl: './e-seven.component.html',
  styleUrls: ['./e-seven.component.css']
})
export class ESevenComponent implements OnInit {
  @Output() squareClicked = new EventEmitter<object>();

  @Input() isClickable;
  @Input() clickCount;
  @Input() playerTurn;
  @Input() pieceInPlay;
  @Input() square;

  constructor() { }

  ngOnInit() {
  }

  passClickInfo() {
    if(this.square.clickable === true) {
      this.squareClicked.emit(this.square);
    }
  }
}
