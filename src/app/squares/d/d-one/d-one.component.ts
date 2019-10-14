import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-d-one',
  templateUrl: './d-one.component.html',
  styleUrls: ['./d-one.component.css']
})
export class DOneComponent implements OnInit {
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
