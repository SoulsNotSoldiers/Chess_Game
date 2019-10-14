import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-c-four',
  templateUrl: './c-four.component.html',
  styleUrls: ['./c-four.component.css']
})
export class CFourComponent implements OnInit {
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
