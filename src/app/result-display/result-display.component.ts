import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result-display',
  templateUrl: './result-display.component.html',
  styleUrls: ['./result-display.component.css']
})
export class ResultDisplayComponent implements OnInit {

  @Input() gameResult;
  gameOverMessage: string = 'test';

  constructor() { }

  ngOnInit() {
    if (this.gameResult.blackCheckmated === true) {
      this.gameOverMessage = 'White wins!'
    } else if (this.gameResult.whiteCheckmated === true) {
      this.gameOverMessage = 'Black wins!'
    } else if (this.gameResult.draw === true) {
      this.gameOverMessage = 'Draw';
    } else if (this.gameResult.stalemate === true) {
      this.gameOverMessage = 'Stalemate'
    }
  }


}
