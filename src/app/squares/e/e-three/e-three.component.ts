import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-e-three',
  templateUrl: './e-three.component.html',
  styleUrls: ['./e-three.component.css']
})
export class EThreeComponent implements OnInit {
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
