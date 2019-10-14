import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = 'ChessGame';
  playerBlack = false;
  testCode = '';
  moveHistoryArray = [];



  
  gameControl = {
    gameResult: {
      blackCheckmated: false,
      whiteCheckmated: false,
      draw: false,
      stalemate: false
    },
    clickCount: 0,
    playerTurn: 'white',
    otherPlayer: 'black',
    blackLeftCastleBlocked: false,
    blackRightCastleBlocked: false,
    whiteLeftCastleBlocked: false,
    whiteRightCastleBlocked: false,
    check: false,
    stalemate: false,
    draw: false,
    checkmate: false,
    wouldPutSelfInCheck: false,
    newPiecePosition: '',

    pieceInPlay: {
      position: '',
      piece: '',
      pieceColor: ''
    },
    lastPieceInPlay: {
      position: '',
      piece: '',
      pieceColor: ''
    },
    squares: {
      a1: {
        position: 'a1',
        clickable: true,
        piece: 'rook',
        pieceColor: 'white',
        pieceMoves: {
          rook: {
            verticalUp: ['a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8'],
            verticalDown: [],
            horizontalLeft: [],
            horizontalRight: ['b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1']
          },
          knight: ['c2', 'b3'],
          bishop: {
            upLeft: [],
            upRight: ['b2', 'c3', 'd4', 'e5', 'f6', 'g7', 'h8'],
            downRight: [],
            downLeft: []
          },
          queen: {
            verticalUp: ['a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8'],
            verticalDown: [],
            horizontalLeft: [],
            horizontalRight: ['b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1'],
            upLeft: [],
            upRight: ['b2', 'c3', 'd4', 'e5', 'f6', 'g7', 'h8'],
            downRight: [],
            downLeft: []
          },
          king: ['a2', 'b1', 'b2'],
          pawn: {
            white: {
              vertical: ['a2'],
              diagonal: ['b2'],
            },
            black: {
              vertical: [],
              diagonal: [],
            }
          }
        }
      },
      b1: {
        position: 'b1',
        clickable: true,
        piece: 'knight',
        pieceColor: 'white',
        pieceMoves: {
          rook: {
            verticalUp: ['b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8'],
            verticalDown: [],
            horizontalLeft: ['a1'],
            horizontalRight: ['c1', 'd1', 'e1', 'f1', 'g1', 'h1']
          },
          knight: ['a3', 'c3', 'd2'],
          bishop: {
            upLeft: ['a2'],
            upRight: ['c2', 'd3', 'e4', 'f5', 'g6', 'h7'],
            downRight: [],
            downLeft: []
          },
          queen: {
            verticalUp: ['b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8'],
            verticalDown: [],
            horizontalLeft: ['a1'],
            horizontalRight: ['c1', 'd1', 'e1', 'f1', 'g1', 'h1'],
            upLeft: ['a2'],
            upRight: ['c2', 'd3', 'e4', 'f5', 'g6', 'h7'],
            downRight: [],
            downLeft: []
          },
          king: ['b2', 'a1', 'c1', 'a2', 'c2'],
          pawn: {
            white: {
              vertical: ['b2'],
              diagonal: ['a2', 'c2'],
            },
            black: {
              vertical: [],
              diagonal: [],
            }
          }
        }
      },
      c1: {
        position: 'c1',
        clickable: true,
        piece: 'bishop',
        pieceColor: 'white',
        pieceMoves: {
          rook: {
            verticalUp: ['c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8'],
            verticalDown: [],
            horizontalLeft: ['b1', 'a1'],
            horizontalRight: ['d1', 'e1', 'f1', 'g1', 'h1']
          },
          knight: ['a2', 'b3', 'd3', 'e2'],
          bishop: {
            upLeft: ['b2', 'a3'],
            upRight: ['d2', 'e3', 'f4', 'g5', 'h6'],
            downRight: [],
            downLeft: []
          },
          queen: {
            verticalUp: ['c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8'],
            verticalDown: [],
            horizontalLeft: ['b1', 'a1'],
            horizontalRight: ['d1', 'e1', 'f1', 'g1', 'h1'],
            upLeft: ['b2', 'a3'],
            upRight: ['d2', 'e3', 'f4', 'g5', 'h6'],
            downRight: [],
            downLeft: []
          },
          king: ['c2', 'b1', 'd1', 'b2', 'd2'],
          pawn: {
            white: {
              vertical: ['c2'],
              diagonal: ['b2', 'd2'],
            },
            black: {
              vertical: [],
              diagonal: [],
            }
          }
        }
      },
      d1: {
        position: 'd1',
        clickable: true,
        piece: 'queen',
        pieceColor: 'white',
        pieceMoves: {
          rook: {
            verticalUp: ['d2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8'],
            verticalDown: [],
            horizontalLeft: ['c1', 'b1', 'a1'],
            horizontalRight: ['e1', 'f1', 'g1', 'h1']
          },
          knight: ['b2', 'c3', 'e3', 'f2'],
          bishop: {
            upLeft: ['c2', 'b3', 'a4'],
            upRight: ['e2', 'f3', 'g4', 'h5'],
            downRight: [],
            downLeft: []
          },
          queen: {
            verticalUp: ['d2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8'],
            verticalDown: [],
            horizontalLeft: ['c1', 'b1', 'a1'],
            horizontalRight: ['e1', 'f1', 'g1', 'h1'],
            upLeft: ['c2', 'b3', 'a4'],
            upRight: ['e2', 'f3', 'g4', 'h5'],
            downRight: [],
            downLeft: []
          },
          king: ['c1', 'c2', 'd2', 'e2', 'e1'],
          pawn: {
            white: {
              vertical: ['d2'],
              diagonal: ['c2', 'e2'],
            },
            black: {
              vertical: [],
              diagonal: [],
            }
          }
        }
      },
      e1: {
        position: 'e1',
        clickable: true,
        piece: 'king',
        pieceColor: 'white',
        pieceMoves: {
          rook: {
            verticalUp: ['e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8'],
            verticalDown: [],
            horizontalLeft: ['d1', 'c1', 'b1', 'a1'],
            horizontalRight: ['f1', 'g1', 'h1']
          },
          knight: ['c2', 'd3', 'f3', 'g2'],
          bishop: {
            upLeft: ['d2', 'c3', 'b4', 'a5'],
            upRight: ['f2', 'g3', 'h4'],
            downRight: [],
            downLeft: []
          },
          queen: {
            verticalUp: ['e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8'],
            verticalDown: [],
            horizontalLeft: ['d1', 'c1', 'b1', 'a1'],
            horizontalRight: ['f1', 'g1', 'h1'],
            upLeft: ['d2', 'c3', 'b4', 'a5'],
            upRight: ['f2', 'g3', 'h4'],
            downRight: [],
            downLeft: []
          },
          king: ['e2', 'd1', 'f1', 'd2', 'f2'],
          pawn: {
            white: {
              vertical: ['e2'],
              diagonal: ['d2', 'f2'],
            },
            black: {
              vertical: [],
              diagonal: [],
            }
          }
        }
      },
      f1: {
        position: 'f1',
        clickable: true,
        piece: 'bishop',
        pieceColor: 'white',
        pieceMoves: {
          rook: {
            verticalUp: ['f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8'],
            verticalDown: [],
            horizontalLeft: ['e1', 'd1', 'c1', 'b1', 'a1'],
            horizontalRight: ['g1', 'h1']
          },
          knight: ['d2', 'e3', 'g3', 'h2'],
          bishop: {
            upLeft: ['e2', 'd3', 'c4', 'b5', 'a6'],
            upRight: ['g2', 'h3'],
            downRight: [],
            downLeft: []
          },
          queen: {
            verticalUp: ['f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8'],
            verticalDown: [],
            horizontalLeft: ['e1', 'd1', 'c1', 'b1', 'a1'],
            horizontalRight: ['g1', 'h1'],
            upLeft: ['e2', 'd3', 'c4', 'b5', 'a6'],
            upRight: ['g2', 'h3'],
            downRight: [],
            downLeft: []
          },
          king: ['f2', 'e1', 'g1', 'e2', 'g2'],
          pawn: {
            white: {
              vertical: ['f2'],
              diagonal: ['e2', 'g2'],
            },
            black: {
              vertical: [],
              diagonal: [],
            }
          }
        }
      },
      g1: {
        position: 'g1',
        clickable: true,
        piece: 'knight',
        pieceColor: 'white',
        pieceMoves: {
          rook: {
            verticalUp: ['g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8'],
            verticalDown: [],
            horizontalLeft: ['f1', 'e1', 'd1', 'c1', 'b1', 'a1'],
            horizontalRight: ['h1']
          },
          knight: ['e2','f3', 'h3'],
          bishop: {
            upLeft: ['f2', 'e3', 'd4', 'c5', 'b6', 'a7'],
            upRight: ['h2'],
            downRight: [],
            downLeft: []
          },
          queen: {
            verticalUp: ['g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8'],
            verticalDown: [],
            horizontalLeft: ['f1', 'e1', 'd1', 'c1', 'b1', 'a1'],
            horizontalRight: ['h1'],
            upLeft: ['f2', 'e3', 'd4', 'c5', 'b6', 'a7'],
            upRight: ['h2'],
            downRight: [],
            downLeft: []
          },
          king: ['g2', 'f1', 'h1', 'f2', 'h2'],
          pawn: {
            white: {
              vertical: ['g2'],
              diagonal: ['f2', 'h2'],
            },
            black: {
              vertical: [],
              diagonal: [],
            }
          }
        }
      },
      h1: {
        position: 'h1',
        clickable: true,
        piece: 'rook',
        pieceColor: 'white',
        pieceMoves: {
          rook: {
            verticalUp: ['h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8'],
            verticalDown: [],
            horizontalLeft: ['g1', 'f1', 'e1', 'd1', 'c1', 'b1', 'a1'],
            horizontalRight: []
          },
          knight: ['e2', 'f3'],
          bishop: {
            upLeft: ['g2', 'f3', 'e4', 'd5', 'c6', 'b7', 'a8'],
            upRight: [],
            downRight: [],
            downLeft: []
          },
          queen: {
            verticalUp: ['h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8'],
            verticalDown: [],
            horizontalLeft: ['g1', 'f1', 'e1', 'd1', 'c1', 'b1', 'a1'],
            horizontalRight: [],
            upLeft: ['g2', 'f3', 'e4', 'd5', 'c6', 'b7', 'a8'],
            upRight: [],
            downRight: [],
            downLeft: []
          },
          king: ['h2', 'g1', 'g2'],
          pawn: {
            white: {
              vertical: ['h2'],
              diagonal: ['g2'],
            },
            black: {
              vertical: [],
              diagonal: [],
            }
          }
        }
      },
      /////////////////////////
      a2: {
        position: 'a2',
        clickable: true,
        piece: 'pawn',
        pieceColor: 'white',
        pieceMoves: {
          rook: {
            verticalUp: ['a3', 'a4', 'a5', 'a6', 'a7', 'a8'],
            verticalDown: ['a1'],
            horizontalLeft: [],
            horizontalRight: ['b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2']
          },
          knight: ['b4', 'c3', 'c1'],
          bishop: {
            upLeft: [],
            upRight: ['b3', 'c4', 'd5', 'e6', 'f7', 'g8'],
            downRight: ['b1'],
            downLeft: []
          },
          queen: {
            verticalUp: ['a3', 'a4', 'a5', 'a6', 'a7', 'a8'],
            verticalDown: ['a1'],
            horizontalLeft: [],
            horizontalRight: ['b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'],
            upLeft: [],
            upRight: ['b3', 'c4', 'd5', 'e6', 'f7', 'g8'],
            downRight: ['b1'],
            downLeft: []
          },
          king: ['a3', 'a1', 'b2', 'b3', 'b1'],
          pawn: {
            white: {
              vertical: ['a3', 'a4'],
              diagonal: ['b3'],
            },
            black: {
              vertical: ['a1'],
              diagonal: ['b1'],
            }
          }
        }
      },
      b2: {
        position: 'b2',
        clickable: true,
        piece: 'pawn',
        pieceColor: 'white',
        pieceMoves: {
          rook: {
            verticalUp: ['b3', 'b4', 'b5', 'b6', 'b7', 'b8'],
            verticalDown: ['b1'],
            horizontalLeft: ['a2'],
            horizontalRight: ['c2', 'd2', 'e2', 'f2', 'g2', 'h2']
          },
          knight: ['a4', 'c4', 'd3', 'd1'],
          bishop: {
            upLeft: ['a3'],
            upRight: ['c3', 'd4', 'e5', 'f6', 'g7', 'h8'],
            downRight: ['c1'],
            downLeft: ['a1']
          },
          queen: {
            verticalUp: ['b3', 'b4', 'b5', 'b6', 'b7', 'b8'],
            verticalDown: ['b1'],
            horizontalLeft: ['a2'],
            horizontalRight: ['c2', 'd2', 'e2', 'f2', 'g2', 'h2'],
            upLeft: ['a3'],
            upRight: ['c3', 'd4', 'e5', 'f6', 'g7', 'h8'],
            downRight: ['c1'],
            downLeft: ['a1']
          },
          king: ['b3', 'b1', 'a2', 'c2', 'a3', 'c3', 'c1', 'a1'],
          pawn: {
            white: {
              vertical: ['b3', 'b4'],
              diagonal: ['a3', 'c3'],
            },
            black: {
              vertical: ['b1'],
              diagonal: ['a1', 'c1'],
            }
          }
        }
      },
      c2: {
        position: 'c2',
        clickable: true,
        piece: 'pawn',
        pieceColor: 'white',
        pieceMoves: {
          rook: {
            verticalUp: ['c3', 'c4', 'c5', 'c6', 'c7', 'c8'],
            verticalDown: ['c1'],
            horizontalLeft: ['b2', 'a2'],
            horizontalRight: ['d2', 'e2', 'f2', 'g2', 'h2']
          },
          knight: ['a1', 'a3', 'b4', 'd4', 'e3', 'e1'],
          bishop: {
            upLeft: ['b3','a4'],
            upRight: ['d3', 'e4', 'f5', 'g6', 'h7'],
            downRight: ['d1'],
            downLeft: ['b1']
          },
          queen: {
            verticalUp: ['c3', 'c4', 'c5', 'c6', 'c7', 'c8'],
            verticalDown: ['c1'],
            horizontalLeft: ['b2', 'a2'],
            horizontalRight: ['d2', 'e2', 'f2', 'g2', 'h2'],
            upLeft: ['b3','a4'],
            upRight: ['d3', 'e4', 'f5', 'g6', 'h7'],
            downRight: ['d1'],
            downLeft: ['b1']
          },
          king: ['c3', 'c1', 'b2', 'd2', 'b3', 'd3', 'd1', 'b1'],
          pawn: {
            white: {
              vertical: ['c3', 'c4'],
              diagonal: ['b3', 'd3'],
            },
            black: {
              vertical: ['c1'],
              diagonal: ['b1', 'd1'],
            }
          }
        }
      },
      d2: {
        position: 'd2',
        clickable: true,
        piece: 'pawn',
        pieceColor: 'white',
        pieceMoves: {
          rook: {
            verticalUp: ['d3', 'd4', 'd5', 'd6', 'd7', 'd8'],
            verticalDown: ['d1'],
            horizontalLeft: ['c2', 'b2', 'a2'],
            horizontalRight: ['e2', 'f2', 'g2', 'h2']
          },
          knight: ['b1', 'b3', 'c4', 'e4', 'f3', 'f1'],
          bishop: {
            upLeft: ['c3', 'b4', 'a5'],
            upRight: ['e3', 'f4', 'g5', 'h6'],
            downRight: ['e1'],
            downLeft: ['c1']
          },
          queen: {
            verticalUp: ['d3', 'd4', 'd5', 'd6', 'd7', 'd8'],
            verticalDown: ['d1'],
            horizontalLeft: ['c2', 'b2', 'a2'],
            horizontalRight: ['e2', 'f2', 'g2', 'h2'],
            upLeft: ['c3', 'b4', 'a5'],
            upRight: ['e3', 'f4', 'g5', 'h6'],
            downRight: ['e1'],
            downLeft: ['c1']
          },
          king: ['d3', 'd1', 'c2', 'e2', 'c3', 'e3', 'e1', 'c1'],
          pawn: {
            white: {
              vertical: ['d3', 'd4'],
              diagonal: ['c3', 'e3'],
            },
            black: {
              vertical: ['d1'],
              diagonal: ['c1', 'e1'],
            }
          }
        }
      },
      e2: {
        position: 'e2',
        clickable: true,
        piece: 'pawn',
        pieceColor: 'white',
        pieceMoves: {
          rook: {
            verticalUp: ['e3', 'e4', 'e5', 'e6', 'e7', 'e8'],
            verticalDown: ['e1'],
            horizontalLeft: ['d2', 'c2', 'b2', 'a2'],
            horizontalRight: ['f2', 'g2', 'h2']
          },
          knight: ['c1', 'c3', 'd4', 'f4', 'g3', 'g1'],
          bishop: {
            upLeft: ['d3', 'c4', 'b5', 'a6'],
            upRight: ['f3', 'g4', 'h5'],
            downRight: ['f1'],
            downLeft: ['d1']
          },
          queen: {
            verticalUp: ['e3', 'e4', 'e5', 'e6', 'e7', 'e8'],
            verticalDown: ['e1'],
            horizontalLeft: ['d2', 'c2', 'b2', 'a2'],
            horizontalRight: ['f2', 'g2', 'h2'],
            upLeft: ['d3', 'c4', 'b5', 'a6'],
            upRight: ['f3', 'g4', 'h5'],
            downRight: ['f1'],
            downLeft: ['d1']
          },
          king: ['e3', 'e1', 'd2', 'f2', 'd3', 'f3', 'f1', 'd1'],
          pawn: {
            white: {
              vertical: ['e3', 'e4'],
              diagonal: ['d3', 'f3'],
            },
            black: {
              vertical: ['e1'],
              diagonal: ['d1', 'f1'],
            }
          }
        }
      },
      f2: {
        position: 'f2',
        clickable: true,
        piece: 'pawn',
        pieceColor: 'white',
        pieceMoves: {
          rook: {
            verticalUp: ['f3', 'f4', 'f5', 'f6', 'f7', 'f8'],
            verticalDown: ['f1'],
            horizontalLeft: ['e2', 'd2', 'c2', 'b2', 'a2'],
            horizontalRight: ['g2', 'h2']
          },
          knight: ['d1', 'd3', 'e4', 'g4', 'h3', 'h1'],
          bishop: {
            upLeft: ['e3', 'd4', 'c5', 'b6', 'a7'],
            upRight: ['g3', 'h4'],
            downRight: ['g1'],
            downLeft: ['e1']
          },
          queen: {
            verticalUp: ['f3', 'f4', 'f5', 'f6', 'f7', 'f8'],
            verticalDown: ['f1'],
            horizontalLeft: ['e2', 'd2', 'c2', 'b2', 'a2'],
            horizontalRight: ['g2', 'h2'],
            upLeft: ['e3', 'd4', 'c5', 'b6', 'a7'],
            upRight: ['g3', 'h4'],
            downRight: ['g1'],
            downLeft: ['e1']
          },
          king: ['f3', 'f1', 'e2', 'g2', 'e3', 'g3', 'g1', 'e1'],
          pawn: {
            white: {
              vertical: ['f3', 'f4'],
              diagonal: ['e3', 'g3'],
            },
            black: {
              vertical: ['f1'],
              diagonal: ['e1', 'g1'],
            }
          }
        }
      },
      g2: {
        position: 'g2',
        clickable: true,
        piece: 'pawn',
        pieceColor: 'white',
        pieceMoves: {
          rook: {
            verticalUp: ['g3', 'g4', 'g5', 'g6', 'g7', 'g8'],
            verticalDown: ['g1'],
            horizontalLeft: ['f2', 'e2', 'd2', 'c2', 'b2', 'a2'],
            horizontalRight: ['h2']
          },
          knight: ['e1', 'e3', 'f4', 'h4'],
          bishop: {
            upLeft: ['f3', 'e4', 'd5', 'c6', 'b7', 'a8'],
            upRight: ['h3'],
            downRight: ['h1'],
            downLeft: ['f1']
          },
          queen: {
            verticalUp: ['g3', 'g4', 'g5', 'g6', 'g7', 'g8'],
            verticalDown: ['g1'],
            horizontalLeft: ['f2', 'e2', 'd2', 'c2', 'b2', 'a2'],
            horizontalRight: ['h2'],
            upLeft: ['f3', 'e4', 'd5', 'c6', 'b7', 'a8'],
            upRight: ['h3'],
            downRight: ['h1'],
            downLeft: ['f1']
          },
          king: ['g3', 'g1', 'f2', 'h2', 'f3', 'h3', 'h1', 'f1'],
          pawn: {
            white: {
              vertical: ['g3', 'g4'],
              diagonal: ['f3', 'h3'],
            },
            black: {
              vertical: ['g1'],
              diagonal: ['f1', 'h1'],
            }
          }
        }
      },
      h2: {
        position: 'h2',
        clickable: true,
        piece: 'pawn',
        pieceColor: 'white',
        pieceMoves: {
          rook: {
            verticalUp: ['h3', 'h4', 'h5', 'h6', 'h7', 'h8'],
            verticalDown: ['h1'],
            horizontalLeft: ['g2', 'f2', 'e2', 'd2', 'c2', 'b2', 'a2'],
            horizontalRight: []
          },
          knight: ['f1', 'f3', 'g4'],
          bishop: {
            upLeft: ['g3', 'f4', 'e5', 'd6', 'c7', 'b8'],
            upRight: [],
            downRight: [],
            downLeft: ['g1']
          },
          queen: {
            verticalUp: ['h3', 'h4', 'h5', 'h6', 'h7', 'h8'],
            verticalDown: ['h1'],
            horizontalLeft: ['g2', 'f2', 'e2', 'd2', 'c2', 'b2', 'a2'],
            horizontalRight: [],
            upLeft: ['g3', 'f4', 'e5', 'd6', 'c7', 'b8'],
            upRight: [],
            downRight: [],
            downLeft: ['g1']
          },
          king: ['h3', 'h1', 'g2', 'g3', 'g1'],
          pawn: {
            white: {
              vertical: ['h3', 'h4'],
              diagonal: ['g3'],
            },
            black: {
              vertical: ['h1'],
              diagonal: ['g1'],
            }
          }
        }
      },
      /////////////////////////
      a3: {
        position: 'a3',
        clickable: false,
        piece: '',
        pieceColor: '',
        pieceMoves: {
          rook: {
            verticalUp: ['a4', 'a5', 'a6', 'a7', 'a8'],
            verticalDown: ['a2', 'a1'],
            horizontalLeft: [],
            horizontalRight: ['b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3']
          },
          knight: ['b5', 'c4', 'c2', 'b1'],
          bishop: {
            upLeft: [],
            upRight: ['b4', 'c5', 'd6', 'e7', 'f8'],
            downRight: ['b2', 'c1'],
            downLeft: []
          },
          queen: {
            verticalUp: ['a4', 'a5', 'a6', 'a7', 'a8'],
            verticalDown: ['a2', 'a1'],
            horizontalLeft: [],
            horizontalRight: ['b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3'],
            upLeft: [],
            upRight: ['b4', 'c5', 'd6', 'e7', 'f8'],
            downRight: ['b2', 'c1'],
            downLeft: []
          },
          king: ['a4', 'a2', 'b3', 'b4', 'b2'],
          pawn: {
            white: {
              vertical: ['a4'],
              diagonal: ['b4'],
            },
            black: {
              vertical: ['a2'],
              diagonal: ['b2'],
            }
          }
        }
      },
      b3: {
        position: 'b3',
        clickable: false,
        piece: '',
        pieceColor: '',
        pieceMoves: {
          rook: {
            verticalUp: ['b4', 'b5', 'b6', 'b7', 'b8'],
            verticalDown: ['b2', 'b1'],
            horizontalLeft: ['a3'],
            horizontalRight: ['c3', 'd3', 'e3', 'f3', 'g3', 'h3']
          },
          knight: ['a1', 'a5', 'c5', 'd4', 'd2', 'c1'],
          bishop: {
            upLeft: ['a4'],
            upRight: ['c4', 'd5', 'e6', 'f7', 'g8'],
            downRight: ['c2', 'd1'],
            downLeft: ['a2']
          },
          queen: {
            verticalUp: ['b4', 'b5', 'b6', 'b7', 'b8'],
            verticalDown: ['b2', 'b1'],
            horizontalLeft: ['a3'],
            horizontalRight: ['c3', 'd3', 'e3', 'f3', 'g3', 'h3'],
            upLeft: ['a4'],
            upRight: ['c4', 'd5', 'e6', 'f7', 'g8'],
            downRight: ['c2', 'd1'],
            downLeft: ['a2']
          },
          king: ['b4', 'b2', 'a3', 'c3', 'a4', 'c4', 'c2', 'a2'],
          pawn: {
            white: {
              vertical: ['b4'],
              diagonal: ['a4', 'c4'],
            },
            black: {
              vertical: ['b2'],
              diagonal: ['a2', 'c2'],
            }
          }
        }
      },
      c3: {
        position: 'c3',
        clickable: false,
        piece: '',
        pieceColor: '',
        pieceMoves: {
          rook: {
            verticalUp: ['c4', 'c5', 'c6', 'c7', 'c8'],
            verticalDown: ['c2', 'c1'],
            horizontalLeft: ['b3', 'a3'],
            horizontalRight: ['d3', 'e3', 'f3', 'g3', 'h3']
          },
          knight: ['a2', 'a4', 'b5', 'd5', 'e4', 'e2', 'd1', 'b1'],
          bishop: {
            upLeft: ['b4', 'a6'],
            upRight: ['d4', 'e5', 'f6', 'g7', 'h8'],
            downRight: ['d2', 'e1'],
            downLeft: ['b2', 'a1']
          },
          queen: {
            verticalUp: ['c4', 'c5', 'c6', 'c7', 'c8'],
            verticalDown: ['c2', 'c1'],
            horizontalLeft: ['b3', 'a3'],
            horizontalRight: ['d3', 'e3', 'f3', 'g3', 'h3'],
            upLeft: ['b4', 'a6'],
            upRight: ['d4', 'e5', 'f6', 'g7', 'h8'],
            downRight: ['d2', 'e1'],
            downLeft: ['b2', 'a1']
          },
          king: ['c4', 'c2', 'b3', 'd3', 'b4', 'd4', 'd2', 'b2'],
          pawn: {
            white: {
              vertical: ['c4'],
              diagonal: ['b4', 'd4'],
            },
            black: {
              vertical: ['c2'],
              diagonal: ['b2', 'd2'],
            }
          }
        }
      },
      d3: {
        position: 'd3',
        clickable: false,
        piece: '',
        pieceColor: '',
        pieceMoves: {
          rook: {
            verticalUp: ['d4', 'd5', 'd6', 'd7', 'd8'],
            verticalDown: ['d2', 'd1'],
            horizontalLeft: ['c3', 'b3', 'a3'],
            horizontalRight: ['e3', 'f3', 'g3', 'h3']
          },
          knight: ['b2', 'b4', 'c5', 'e5', 'f4', 'f2', 'e1', 'c1'],
          bishop: {
            upLeft: ['c4', 'b5', 'a6'],
            upRight: ['e4', 'f5', 'g6', 'h7'],
            downRight: ['e2', 'f1'],
            downLeft: ['c2', 'b1']
          },
          queen: {
            verticalUp: ['d4', 'd5', 'd6', 'd7', 'd8'],
            verticalDown: ['d2', 'd1'],
            horizontalLeft: ['c3', 'b3', 'a3'],
            horizontalRight: ['e3', 'f3', 'g3', 'h3'],
            upLeft: ['c4', 'b5', 'a6'],
            upRight: ['e4', 'f5', 'g6', 'h7'],
            downRight: ['e2', 'f1'],
            downLeft: ['c2', 'b1']
          },
          king: ['d4', 'd2', 'c3', 'e3', 'c4', 'e4', 'e2', 'c2'],
          pawn: {
            white: {
              vertical: ['d4'],
              diagonal: ['c4', 'e4'],
            },
            black: {
              vertical: ['d2'],
              diagonal: ['c2', 'e2'],
            }
          }
        }
      },
      e3: {
        position: 'e3',
        clickable: false,
        piece: '',
        pieceColor: '',
        pieceMoves: {
          rook: {
            verticalUp: ['e4', 'e5', 'e6', 'e7', 'e8'],
            verticalDown: ['e2', 'e1'],
            horizontalLeft: ['d3', 'c3', 'b3', 'a3'],
            horizontalRight: ['f3', 'g3', 'h3']
          },
          knight: ['c2', 'c4', 'd5', 'f5', 'g4', 'g2', 'f1', 'd1'],
          bishop: {
            upLeft: ['d4', 'c5', 'b6', 'a7'],
            upRight: ['f4', 'g5', 'h6'],
            downRight: ['f2', 'g1'],
            downLeft: ['d2', 'c1']
          },
          queen: {
            verticalUp: ['e4', 'e5', 'e6', 'e7', 'e8'],
            verticalDown: ['e2', 'e1'],
            horizontalLeft: ['d3', 'c3', 'b3', 'a3'],
            horizontalRight: ['f3', 'g3', 'h3'],
            upLeft: ['d4', 'c5', 'b6', 'a7'],
            upRight: ['f4', 'g5', 'h6'],
            downRight: ['f2', 'g1'],
            downLeft: ['d2', 'c1']
          },
          king: ['e4', 'e2', 'd3', 'f3', 'd4', 'f4', 'f2', 'd2'],
          pawn: {
            white: {
              vertical: ['e4'],
              diagonal: ['d4', 'f4'],
            },
            black: {
              vertical: ['e2'],
              diagonal: ['d2', 'f2'],
            }
          }
        }
      },
      f3: {
        position: 'f3',
        clickable: false,
        piece: '',
        pieceColor: '',
        pieceMoves: {
          rook: {
            verticalUp: ['f4', 'f5', 'f6', 'f7', 'f8'],
            verticalDown: ['f2', 'f1'],
            horizontalLeft: ['e3', 'd3', 'c3', 'b3', 'a3'],
            horizontalRight: ['g3', 'h3']
          },
          knight: ['d2', 'd4', 'e5', 'g5', 'h4', 'h2', 'g1', 'e1'],
          bishop: {
            upLeft: ['e4', 'd5', 'c6', 'b7', 'a8'],
            upRight: ['g4', 'h5'],
            downRight: ['g2', 'h1'],
            downLeft: ['e2', 'd1']
          },
          queen: {
            verticalUp: ['f4', 'f5', 'f6', 'f7', 'f8'],
            verticalDown: ['f2', 'f1'],
            horizontalLeft: ['e3', 'd3', 'c3', 'b3', 'a3'],
            horizontalRight: ['g3', 'h3'],
            upLeft: ['e4', 'd5', 'c6', 'b7', 'a8'],
            upRight: ['g4', 'h5'],
            downRight: ['g2', 'h1'],
            downLeft: ['e2', 'd1']
          },
          king: ['f4', 'f2', 'e3', 'g3', 'e4', 'g4', 'g2', 'e2'],
          pawn: {
            white: {
              vertical: ['f4'],
              diagonal: ['e4', 'g4'],
            },
            black: {
              vertical: ['f2'],
              diagonal: ['e2', 'g2'],
            }
          }
        }
      },
      g3: {
        position: 'g3',
        clickable: false,
        piece: '',
        pieceColor: '',
        pieceMoves: {
          rook: {
            verticalUp: ['g4', 'g5', 'g6', 'g7', 'g8'],
            verticalDown: ['g2', 'g1'],
            horizontalLeft: ['f3', 'e3', 'd3', 'c3', 'b3', 'a3'],
            horizontalRight: ['h3']
          },
          knight: ['e2', 'e4', 'f5', 'h5', 'h1', 'f1'],
          bishop: {
            upLeft: ['f4', 'e5', 'd6', 'c7', 'b8'],
            upRight: ['h4'],
            downRight: ['h2'],
            downLeft: ['f2', 'e1']
          },
          queen: {
            verticalUp: ['g4', 'g5', 'g6', 'g7', 'g8'],
            verticalDown: ['g2', 'g1'],
            horizontalLeft: ['f3', 'e3', 'd3', 'c3', 'b3', 'a3'],
            horizontalRight: ['h3'],
            upLeft: ['f4', 'e5', 'd6', 'c7', 'b8'],
            upRight: ['h4'],
            downRight: ['h2'],
            downLeft: ['f2', 'e1']
          },
          king: ['g4', 'g2', 'f3', 'h3', 'f4', 'h4', 'h2', 'f2'],
          pawn: {
            white: {
              vertical: ['g4'],
              diagonal: ['f4', 'h4'],
            },
            black: {
              vertical: ['g2'],
              diagonal: ['f2', 'h2'],
            }
          }
        }
      },
      h3: {
        position: 'h3',
        clickable: false,
        piece: '',
        pieceColor: '',
        pieceMoves: {
          rook: {
            verticalUp: ['h4', 'h5', 'h6', 'h7', 'h8'],
            verticalDown: ['h2', 'h1'],
            horizontalLeft: ['g3', 'f3', 'e3', 'd3', 'c3', 'b3', 'a3'],
            horizontalRight: []
          },
          knight: ['f2', 'f4', 'g5', 'g1'],
          bishop: {
            upLeft: ['g4', 'f5', 'e6', 'd7', 'c8'],
            upRight: [],
            downRight: [],
            downLeft: ['g2', 'f1']
          },
          queen: {
            verticalUp: ['h4', 'h5', 'h6', 'h7', 'h8'],
            verticalDown: ['h2', 'h1'],
            horizontalLeft: ['g3', 'f3', 'e3', 'd3', 'c3', 'b3', 'a3'],
            horizontalRight: [],
            upLeft: ['g4', 'f5', 'e6', 'd7', 'c8'],
            upRight: [],
            downRight: [],
            downLeft: ['g2', 'f1']
          },
          king: ['h4', 'h2', 'g3', 'g4', 'g2'],
          pawn: {
            white: {
              vertical: ['h4'],
              diagonal: ['g4'],
            },
            black: {
              vertical: ['h2'],
              diagonal: ['g2'],
            }
          }
        }
      },
      /////////////////////////
      a4: {
        position: 'a4',
        clickable: false,
        piece: '',
        pieceColor: '',
        pieceMoves: {
          rook: {
            verticalUp: ['a5', 'a6', 'a7', 'a8'],
            verticalDown: ['a3', 'a2', 'a1'],
            horizontalLeft: [],
            horizontalRight: ['b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4']
          },
          knight: ['b6', 'c5', 'c3', 'b2'],
          bishop: {
            upLeft: [],
            upRight: ['b5', 'c6', 'd7', 'e8'],
            downRight: ['b3', 'c2', 'd1'],
            downLeft: []
          },
          queen: {
            verticalUp: ['a5', 'a6', 'a7', 'a8'],
            verticalDown: ['a3', 'a2', 'a1'],
            horizontalLeft: [],
            horizontalRight: ['b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4'],
            upLeft: [],
            upRight: ['b5', 'c6', 'd7', 'e8'],
            downRight: ['b3', 'c2', 'd1'],
            downLeft: []
          },
          king: ['a5', 'a3', 'b4', 'b5', 'b3'],
          pawn: {
            white: {
              vertical: ['a5'],
              diagonal: ['b5'],
            },
            black: {
              vertical: ['a3'],
              diagonal: ['b3'],
            }
          }
        }
      },
      b4: {
        position: 'b4',
        clickable: false,
        piece: '',
        pieceColor: '',
        pieceMoves: {
          rook: {
            verticalUp: ['b5', 'b6', 'b7', 'b8'],
            verticalDown: ['b3', 'b2', 'b1'],
            horizontalLeft: ['a4'],
            horizontalRight: ['c4', 'd4', 'e4', 'f4', 'g4', 'h4']
          },
          knight: ['a2', 'a6', 'c6', 'd5', 'd3', 'c2'],
          bishop: {
            upLeft: ['a5'],
            upRight: ['c5', 'd6', 'e7', 'f8'],
            downRight: ['c3', 'd2', 'e1'],
            downLeft: ['a3']
          },
          queen: {
            verticalUp: ['b5', 'b6', 'b7', 'b8'],
            verticalDown: ['b3', 'b2', 'b1'],
            horizontalLeft: ['a4'],
            horizontalRight: ['c4', 'd4', 'e4', 'f4', 'g4', 'h4'],
            upLeft: ['a5'],
            upRight: ['c5', 'd6', 'e7', 'f8'],
            downRight: ['c3', 'd2', 'e1'],
            downLeft: ['a3']
          },
          king: ['b5', 'b3', 'a4', 'c4', 'a5', 'c5', 'c3', 'a3'],
          pawn: {
            white: {
              vertical: ['b5'],
              diagonal: ['a5', 'c5'],
            },
            black: {
              vertical: ['b3'],
              diagonal: ['a3', 'c3'],
            }
          }
        }
      },
      c4: {
        position: 'c4',
        clickable: false,
        piece: '',
        pieceColor: '',
        pieceMoves: {
          rook: {
            verticalUp: ['c5', 'c6', 'c7', 'c8'],
            verticalDown: ['c3', 'c2', 'c1'],
            horizontalLeft: ['b4', 'a4'],
            horizontalRight: ['d4', 'e4', 'f4', 'g4', 'h4']
          },
          knight: ['a3', 'a5', 'b6', 'd6', 'e5', 'e3', 'd2', 'b2'],
          bishop: {
            upLeft: ['b5', 'a6'],
            upRight: ['d5', 'e6', 'f7', 'g8'],
            downRight: ['d3', 'e2', 'f1'],
            downLeft: ['b3', 'a2']
          },
          queen: {
            verticalUp: ['c5', 'c6', 'c7', 'c8'],
            verticalDown: ['c3', 'c2', 'c1'],
            horizontalLeft: ['b4', 'a4'],
            horizontalRight: ['d4', 'e4', 'f4', 'g4', 'h4'],
            upLeft: ['b5', 'a6'],
            upRight: ['d5', 'e6', 'f7', 'g8'],
            downRight: ['d3', 'e2', 'f1'],
            downLeft: ['b3', 'a2']
          },
          king: ['c5', 'c3', 'b4', 'd4', 'b5', 'd5', 'd3', 'b3'],
          pawn: {
            white: {
              vertical: ['c5'],
              diagonal: ['b5', 'd5'],
            },
            black: {
              vertical: ['c3'],
              diagonal: ['b3', 'd3'],
            }
          }
        }
      },
      d4: {
        position: 'd4',
        clickable: false,
        piece: '',
        pieceColor: '',
        pieceMoves: {
          rook: {
            verticalUp: ['d5', 'd6', 'd7', 'd8'],
            verticalDown: ['d3', 'd2', 'd1'],
            horizontalLeft: ['c4', 'b4', 'a4'],
            horizontalRight: ['e4', 'f4', 'g4', 'h4']
          },
          knight: ['b3', 'b5', 'c6', 'e6', 'f5', 'f3', 'e2', 'c2'],
          bishop: {
            upLeft: ['c5', 'b6', 'a7'],
            upRight: ['e5', 'f6', 'g7', 'h8'],
            downRight: ['e3', 'f2', 'g1'],
            downLeft: ['c3', 'b2', 'a1']
          },
          queen: {
            verticalUp: ['d5', 'd6', 'd7', 'd8'],
            verticalDown: ['d3', 'd2', 'd1'],
            horizontalLeft: ['c4', 'b4', 'a4'],
            horizontalRight: ['e4', 'f4', 'g4', 'h4'],
            upLeft: ['c5', 'b6', 'a7'],
            upRight: ['e5', 'f6', 'g7', 'h8'],
            downRight: ['e3', 'f2', 'g1'],
            downLeft: ['c3', 'b2', 'a1']
          },
          king: ['d5', 'd3', 'c4', 'e4', 'c5', 'e5', 'e3', 'c3'],
          pawn: {
            white: {
              vertical: ['d5'],
              diagonal: ['c5', 'e5'],
            },
            black: {
              vertical: ['d3'],
              diagonal: ['c3', 'e3'],
            }
          }
        }
      },
      e4: {
        position: 'e4',
        clickable: false,
        piece: '',
        pieceColor: '',
        pieceMoves: {
          rook: {
            verticalUp: ['e5', 'e6', 'e7', 'e8'],
            verticalDown: ['e3', 'e2', 'e1'],
            horizontalLeft: ['d4', 'c4', 'b4', 'a4'],
            horizontalRight: ['f4', 'g4', 'h4']
          },
          knight: ['c3', 'c5', 'd6', 'f6', 'g5', 'g3', 'f2', 'd2'],
          bishop: {
            upLeft: ['d5', 'c6', 'b7', 'a8'],
            upRight: ['f5', 'g6', 'h7'],
            downRight: ['f3', 'e2', 'g1'],
            downLeft: ['d3', 'c2', 'b1']
          },
          queen: {
            verticalUp: ['e5', 'e6', 'e7', 'e8'],
            verticalDown: ['e3', 'e2', 'e1'],
            horizontalLeft: ['d4', 'c4', 'b4', 'a4'],
            horizontalRight: ['f4', 'g4', 'h4'],
            upLeft: ['d5', 'c6', 'b7', 'a8'],
            upRight: ['f5', 'g6', 'h7'],
            downRight: ['f3', 'e2', 'g1'],
            downLeft: ['d3', 'c2', 'b1']
          },
          king: ['e5', 'e3', 'd4', 'f4', 'd5', 'f5', 'f3', 'd3'],
          pawn: {
            white: {
              vertical: ['e5'],
              diagonal: ['d5', 'f5'],
            },
            black: {
              vertical: ['e3'],
              diagonal: ['d3', 'f3'],
            }
          }
        }
      },
      f4: {
        position: 'f4',
        clickable: false,
        piece: '',
        pieceColor: '',
        pieceMoves: {
          rook: {
            verticalUp: ['f5', 'f6', 'f7', 'f8'],
            verticalDown: ['f3', 'f2', 'f1'],
            horizontalLeft: ['e4', 'd4', 'c4', 'b4', 'a4'],
            horizontalRight: ['g4', 'h4']
          },
          knight: ['d3', 'd5', 'e6', 'g6', 'h5', 'h3', 'g2', 'e2'],
          bishop: {
            upLeft: ['e5', 'd6', 'c7', 'b8'],
            upRight: ['g5', 'h6'],
            downRight: ['g3', 'h2'],
            downLeft: ['e3', 'd2', 'c1']
          },
          queen: {
            verticalUp: ['f5', 'f6', 'f7', 'f8'],
            verticalDown: ['f3', 'f2', 'f1'],
            horizontalLeft: ['e4', 'd4', 'c4', 'b4', 'a4'],
            horizontalRight: ['g4', 'h4'],
            upLeft: ['e5', 'd6', 'c7', 'b8'],
            upRight: ['g5', 'h6'],
            downRight: ['g3', 'h2'],
            downLeft: ['e3', 'd2', 'c1']
          },
          king: ['f5', 'f3', 'e4', 'g4', 'e5', 'g5', 'g3', 'e3'],
          pawn: {
            white: {
              vertical: ['f5'],
              diagonal: ['e5', 'g5'],
            },
            black: {
              vertical: ['f3'],
              diagonal: ['e3', 'g3'],
            }
          }
        }
      },
      g4: {
        position: 'g4',
        clickable: false,
        piece: '',
        pieceColor: '',
        pieceMoves: {
          rook: {
            verticalUp: ['g5', 'g6', 'g7', 'g8'],
            verticalDown: ['g3', 'g2', 'g1'],
            horizontalLeft: ['f4', 'e4', 'd4', 'c4', 'b4', 'a4'],
            horizontalRight: ['h4']
          },
          knight: ['e3', 'e5', 'f6', 'h6', 'h2', 'f2'],
          bishop: {
            upLeft: ['f5', 'e6', 'd7', 'c8'],
            upRight: ['h5'],
            downRight: ['h3'],
            downLeft: ['f3', 'e2', 'd1']
          },
          queen: {
            verticalUp: ['g5', 'g6', 'g7', 'g8'],
            verticalDown: ['g3', 'g2', 'g1'],
            horizontalLeft: ['f4', 'e4', 'd4', 'c4', 'b4', 'a4'],
            horizontalRight: ['h4'],
            upLeft: ['f5', 'e6', 'd7', 'c8'],
            upRight: ['h5'],
            downRight: ['h3'],
            downLeft: ['f3', 'e2', 'd1']
          },
          king: ['g5', 'g3', 'f4', 'h4', 'f5', 'h5', 'h3', 'f3'],
          pawn: {
            white: {
              vertical: ['g5'],
              diagonal: ['f5', 'h5'],
            },
            black: {
              vertical: ['g3'],
              diagonal: ['f3', 'h3'],
            }
          }
        }
      },
      h4: {
        position: 'h4',
        clickable: false,
        piece: '',
        pieceColor: '',
        pieceMoves: {
          rook: {
            verticalUp: ['h5', 'h6', 'h7', 'h8'],
            verticalDown: ['h3', 'h2', 'h1'],
            horizontalLeft: ['g4', 'f4', 'e4', 'd4', 'c4', 'b4', 'a4'],
            horizontalRight: []
          },
          knight: ['f3', 'f5', 'g6', 'g2'],
          bishop: {
            upLeft: ['g5', 'f6', 'e7', 'd8'],
            upRight: [],
            downRight: [],
            downLeft: ['g3', 'f2', 'e1']
          },
          queen: {
            verticalUp: ['h5', 'h6', 'h7', 'h8'],
            verticalDown: ['h3', 'h2', 'h1'],
            horizontalLeft: ['g4', 'f4', 'e4', 'd4', 'c4', 'b4', 'a4'],
            horizontalRight: [],
            upLeft: ['g5', 'f6', 'e7', 'd8'],
            upRight: [],
            downRight: [],
            downLeft: ['g3', 'f2', 'e1']
          },
          king: ['h5', 'h3', 'g4', 'g5', 'g3'],
          pawn: {
            white: {
              vertical: ['h5'],
              diagonal: ['g5'],
            },
            black: {
              vertical: ['h3'],
              diagonal: ['g3'],
            }
          }
        }
      },
      /////////////////////////
      a5: {
        position: 'a5',
        clickable: false,
        piece: '',
        pieceColor: '',
        pieceMoves: {
          rook: {
            verticalUp: ['a6', 'a7', 'a8'],
            verticalDown: ['a4', 'a3', 'a2', 'a1'],
            horizontalLeft: [],
            horizontalRight: ['b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5']
          },
          knight: ['b7', 'c6', 'c4', 'b3'],
          bishop: {
            upLeft: [],
            upRight: ['b6', 'c7', 'd8'],
            downRight: ['b4', 'c3', 'd2', 'e1',],
            downLeft: []
          },
          queen: {
            verticalUp: ['a6', 'a7', 'a8'],
            verticalDown: ['a4', 'a3', 'a2', 'a1'],
            horizontalLeft: [],
            horizontalRight: ['b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5'],
            upLeft: [],
            upRight: ['b6', 'c7', 'd8'],
            downRight: ['b4', 'c3', 'd2', 'e1',],
            downLeft: []
          },
          king: ['a6', 'a4', 'b5', 'b6', 'b4'],
          pawn: {
            white: {
              vertical: ['a6'],
              diagonal: ['b6'],
            },
            black: {
              vertical: ['a4'],
              diagonal: ['b4'],
            }
          }
        }
      },
      b5: {
        position: 'b5',
        clickable: false,
        piece: '',
        pieceColor: '',
        pieceMoves: {
          rook: {
            verticalUp: ['b6', 'b7', 'b8'],
            verticalDown: ['b4', 'b3', 'b2', 'b1'],
            horizontalLeft: ['a5'],
            horizontalRight: ['c5', 'd5', 'e5', 'f5', 'g5', 'h5']
          },
          knight: ['a3', 'a7', 'c7', 'd6', 'd4', 'c3'],
          bishop: {
            upLeft: ['a6'],
            upRight: ['c6', 'd7', 'e8'],
            downRight: ['c4', 'd3', 'e2', 'f1'],
            downLeft: ['a4']
          },
          queen: {
            verticalUp: ['b6', 'b7', 'b8'],
            verticalDown: ['b4', 'b3', 'b2', 'b1'],
            horizontalLeft: ['a5'],
            horizontalRight: ['c5', 'd5', 'e5', 'f5', 'g5', 'h5'],
            upLeft: ['a6'],
            upRight: ['c6', 'd7', 'e8'],
            downRight: ['c4', 'd3', 'e2', 'f1'],
            downLeft: ['a4']
          },
          king: ['b6', 'b4', 'a5', 'c5', 'a6', 'c6', 'c4', 'a4'],
          pawn: {
            white: {
              vertical: ['b6'],
              diagonal: ['a6', 'c6'],
            },
            black: {
              vertical: ['b4'],
              diagonal: ['a4', 'c4'],
            }
          }
        }
      },
      c5: {
        position: 'c5',
        clickable: false,
        piece: '',
        pieceColor: '',
        pieceMoves: {
          rook: {
            verticalUp: ['c6', 'c7', 'c8'],
            verticalDown: ['c4', 'c3', 'c2', 'c1'],
            horizontalLeft: ['b5', 'a5'],
            horizontalRight: ['d5', 'e5', 'f5', 'g5', 'h5']
          },
          knight: ['a4', 'a6', 'b7', 'd7', 'e6', 'e4', 'd3', 'b3'],
          bishop: {
            upLeft: ['b6', 'a7'],
            upRight: ['d6', 'e7', 'f8'],
            downRight: ['d4', 'e3', 'f2', 'g1'],
            downLeft: ['b4', 'a3']
          },
          queen: {
            verticalUp: ['c6', 'c7', 'c8'],
            verticalDown: ['c4', 'c3', 'c2', 'c1'],
            horizontalLeft: ['b5', 'a5'],
            horizontalRight: ['d5', 'e5', 'f5', 'g5', 'h5'],
            upLeft: ['b6', 'a7'],
            upRight: ['d6', 'e7', 'f8'],
            downRight: ['d4', 'e3', 'f2', 'g1'],
            downLeft: ['b4', 'a3']
          },
          king: ['c6', 'c4', 'b5', 'd5', 'b6', 'd6', 'd4', 'b4'],
          pawn: {
            white: {
              vertical: ['c6'],
              diagonal: ['b6', 'd6'],
            },
            black: {
              vertical: ['c4'],
              diagonal: ['b4', 'd4'],
            }
          }
        }
      },
      d5: {
        position: 'd5',
        clickable: false,
        piece: '',
        pieceColor: '',
        pieceMoves: {
          rook: {
            verticalUp: ['d6', 'd7', 'd8'],
            verticalDown: ['d4', 'd3', 'd2', 'd1'],
            horizontalLeft: ['c5', 'b5', 'a5'],
            horizontalRight: ['e5', 'f5', 'g5', 'h5']
          },
          knight: ['b4', 'b6', 'c7', 'e7', 'f6', 'f4', 'e3', 'c3'],
          bishop: {
            upLeft: ['c6', 'b7', 'a8'],
            upRight: ['e6', 'f7', 'g8'],
            downRight: ['e4', 'f3', 'g2', 'h1'],
            downLeft: ['c4', 'b3', 'a2']
          },
          queen: {
            verticalUp: ['d6', 'd7', 'd8'],
            verticalDown: ['d4', 'd3', 'd2', 'd1'],
            horizontalLeft: ['c5', 'b5', 'a5'],
            horizontalRight: ['e5', 'f5', 'g5', 'h5'],
            upLeft: ['c6', 'b7', 'a8'],
            upRight: ['e6', 'f7', 'g8'],
            downRight: ['e4', 'f3', 'g2', 'h1'],
            downLeft: ['c4', 'b3', 'a2']
          },
          king: ['d6', 'd4', 'c5', 'e5', 'c6', 'e6', 'e4', 'c4'],
          pawn: {
            white: {
              vertical: ['d6'],
              diagonal: ['c6', 'e6'],
            },
            black: {
              vertical: ['d4'],
              diagonal: ['c4', 'e4'],
            }
          }
        }
      },
      e5: {
        position: 'e5',
        clickable: false,
        piece: '',
        pieceColor: '',
        pieceMoves: {
          rook: {
            verticalUp: ['e6', 'e7', 'e8'],
            verticalDown: ['e4', 'e3', 'e2', 'e1'],
            horizontalLeft: ['d5', 'c5', 'b5', 'a5'],
            horizontalRight: ['f5', 'g5', 'h5']
          },
          knight: ['c4', 'c6', 'd7', 'f7', 'g6', 'g4', 'f3', 'd3'],
          bishop: {
            upLeft: ['d6' ,'c7', 'b8'],
            upRight: ['f6', 'g7', 'h8'],
            downRight: ['f4', 'g3', 'h2'],
            downLeft: ['d4', 'c3', 'b2', 'a1']
          },
          queen: {
            verticalUp: ['e6', 'e7', 'e8'],
            verticalDown: ['e4', 'e3', 'e2', 'e1'],
            horizontalLeft: ['d5', 'c5', 'b5', 'a5'],
            horizontalRight: ['f5', 'g5', 'h5'],
            upLeft: ['d6' ,'c7', 'b8'],
            upRight: ['f6', 'g7', 'h8'],
            downRight: ['f4', 'g3', 'h2'],
            downLeft: ['d4', 'c3', 'b2', 'a1']
          },
          king: ['e6', 'e4', 'd5', 'f5', 'd6', 'f6', 'f4', 'd4'],
          pawn: {
            white: {
              vertical: ['e6'],
              diagonal: ['d6', 'f6'],
            },
            black: {
              vertical: ['e4'],
              diagonal: ['d4', 'f4'],
            }
          }
        }
      },
      f5: {
        position: 'f5',
        clickable: false,
        piece: '',
        pieceColor: '',
        pieceMoves: {
          rook: {
            verticalUp: ['f6', 'f7', 'f8'],
            verticalDown: ['f4', 'f3', 'f2', 'f1'],
            horizontalLeft: ['e5', 'd5', 'c5', 'b5', 'a5'],
            horizontalRight: ['g5', 'h5']
          },
          knight: ['d4', 'd6', 'e7', 'g7', 'h6', 'h4', 'g3', 'e3'],
          bishop: {
            upLeft: ['e6', 'd7', 'c8'],
            upRight: ['g6', 'h7'],
            downRight: ['g4', 'h3'],
            downLeft: ['e4', 'd3', 'c2', 'b1']
          },
          queen: {
            verticalUp: ['f6', 'f7', 'f8'],
            verticalDown: ['f4', 'f3', 'f2', 'f1'],
            horizontalLeft: ['e5', 'd5', 'c5', 'b5', 'a5'],
            horizontalRight: ['g5', 'h5'],
            upLeft: ['e6', 'd7', 'c8'],
            upRight: ['g6', 'h7'],
            downRight: ['g4', 'h3'],
            downLeft: ['e4', 'd3', 'c2', 'b1']
          },
          king: ['f6', 'f4', 'e5', 'g5', 'e6', 'g6', 'g4', 'e4'],
          pawn: {
            white: {
              vertical: ['f6'],
              diagonal: ['e6', 'g6'],
            },
            black: {
              vertical: ['f4'],
              diagonal: ['e4', 'g4'],
            }
          }
        }
      },
      g5: {
        position: 'g5',
        clickable: false,
        piece: '',
        pieceColor: '',
        pieceMoves: {
          rook: {
            verticalUp: ['g6', 'g7', 'g8'],
            verticalDown: ['g4', 'g3', 'g2', 'g1'],
            horizontalLeft: ['f5', 'e5', 'd5', 'c5', 'b5', 'a5'],
            horizontalRight: ['h5']
          },
          knight: ['e4', 'e6', 'f7', 'h7', 'h3', 'f3'],
          bishop: {
            upLeft: ['f6', 'e7', 'd8'],
            upRight: ['h6'],
            downRight: ['h4'],
            downLeft: ['f4', 'e3', 'd2', 'c1']
          },
          queen: {
            verticalUp: ['g6', 'g7', 'g8'],
            verticalDown: ['g4', 'g3', 'g2', 'g1'],
            horizontalLeft: ['f5', 'e5', 'd5', 'c5', 'b5', 'a5'],
            horizontalRight: ['h5'],
            upLeft: ['f6', 'e7', 'd8'],
            upRight: ['h6'],
            downRight: ['h4'],
            downLeft: ['f4', 'e3', 'd2', 'c1']
          },
          king: ['g6', 'g4', 'f5', 'h5', 'f6', 'h6', 'h4', 'f4'],
          pawn: {
            white: {
              vertical: ['g6'],
              diagonal: ['f6', 'h6'],
            },
            black: {
              vertical: ['g4'],
              diagonal: ['f4', 'h4'],
            }
          }
        }
      },
      h5: {
        position: 'h5',
        clickable: false,
        piece: '',
        pieceColor: '',
        pieceMoves: {
          rook: {
            verticalUp: ['h6', 'h7', 'h8'],
            verticalDown: ['h4', 'h3', 'h2', 'h1'],
            horizontalLeft: ['g5', 'f5', 'e5', 'd5', 'c5', 'b5', 'a5'],
            horizontalRight: []
          },
          knight: ['f4', 'f6', 'g7', 'g3'],
          bishop: {
            upLeft: ['g6', 'f7', 'e8'],
            upRight: [],
            downRight: [],
            downLeft: ['g4', 'f3', 'e2', 'd1']
          },
          queen: {
            verticalUp: ['h6', 'h7', 'h8'],
            verticalDown: ['h4', 'h3', 'h2', 'h1'],
            horizontalLeft: ['g5', 'f5', 'e5', 'd5', 'c5', 'b5', 'a5'],
            horizontalRight: [],
            upLeft: ['g6', 'f7', 'e8'],
            upRight: [],
            downRight: [],
            downLeft: ['g4', 'f3', 'e2', 'd1']
          },
          king: ['h6', 'h4', 'g5', 'g6', 'g4'],
          pawn: {
            white: {
              vertical: ['h6'],
              diagonal: ['g6'],
            },
            black: {
              vertical: ['h4'],
              diagonal: ['g4'],
            }
          }
        }
      },
      /////////////////////////
      a6: {
        position: 'a6',
        clickable: false,
        piece: '',
        pieceColor: '',
        pieceMoves: {
          rook: {
            verticalUp: ['a7', 'a8'],
            verticalDown: ['a5', 'a4', 'a3', 'a2', 'a1'],
            horizontalLeft: [],
            horizontalRight: ['b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6']
          },
          knight: ['b8', 'c7', 'c5', 'b4'],
          bishop: {
            upLeft: [],
            upRight: ['b7', 'c8'],
            downRight: ['b5', 'c4', 'd3', 'e2', 'f1'],
            downLeft: []
          },
          queen: {
            verticalUp: ['a7', 'a8'],
            verticalDown: ['a5', 'a4', 'a3', 'a2', 'a1'],
            horizontalLeft: [],
            horizontalRight: ['b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6'],
            upLeft: [],
            upRight: ['b7', 'c8'],
            downRight: ['b5', 'c4', 'd3', 'e2', 'f1'],
            downLeft: []
          },
          king: ['a7', 'a5', 'b6', 'b7', 'b5'],
          pawn: {
            white: {
              vertical: ['a7'],
              diagonal: ['b7'],
            },
            black: {
              vertical: ['a5'],
              diagonal: ['b5'],
            }
          }
        }
      },
      b6: {
        position: 'b6',
        clickable: false,
        piece: '',
        pieceColor: '',
        pieceMoves: {
          rook: {
            verticalUp: ['b7', 'b8'],
            verticalDown: ['b5', 'b4', 'b3', 'b2', 'b1'],
            horizontalLeft: ['a6'],
            horizontalRight: ['c6', 'd6', 'e6', 'f6', 'g6', 'h6']
          },
          knight: ['a4', 'a8', 'c8', 'd7', 'd5', 'c4'],
          bishop: {
            upLeft: ['a7'],
            upRight: ['c7', 'd8'],
            downRight: ['c5', 'd4', 'e3', 'f2',],
            downLeft: ['a5']
          },
          queen: {
            verticalUp: ['b7', 'b8'],
            verticalDown: ['b5', 'b4', 'b3', 'b2', 'b1'],
            horizontalLeft: ['a6'],
            horizontalRight: ['c6', 'd6', 'e6', 'f6', 'g6', 'h6'],
            upLeft: ['a7'],
            upRight: ['c7', 'd8'],
            downRight: ['c5', 'd4', 'e3', 'f2',],
            downLeft: ['a5']
          },
          king: ['b7', 'b5', 'a6', 'c6', 'a7', 'c7', 'c5', 'a5'],
          pawn: {
            white: {
              vertical: ['b7'],
              diagonal: ['a7', 'c7'],
            },
            black: {
              vertical: ['b5'],
              diagonal: ['a5', 'c5'],
            }
          }
        }
      },
      c6: {
        position: 'c6',
        clickable: false,
        piece: '',
        pieceColor: '',
        pieceMoves: {
          rook: {
            verticalUp: ['c7', 'c8'],
            verticalDown: ['c5', 'c4', 'c3', 'c2', 'c1'],
            horizontalLeft: ['b6', 'a6'],
            horizontalRight: ['d6', 'e6', 'f6', 'g6', 'h6']
          },
          knight: ['a5', 'a7', 'b8', 'd8', 'e7', 'e5', 'd4', 'b4'],
          bishop: {
            upLeft: ['b7', 'a8'],
            upRight: ['d7', 'e8'],
            downRight: ['d5', 'e4', 'f3', 'g2', 'h1'],
            downLeft: ['b5', 'a4']
          },
          queen: {
            verticalUp: ['c7', 'c8'],
            verticalDown: ['c5', 'c4', 'c3', 'c2', 'c1'],
            horizontalLeft: ['b6', 'a6'],
            horizontalRight: ['d6', 'e6', 'f6', 'g6', 'h6'],
            upLeft: ['b7', 'a8'],
            upRight: ['d7', 'e8'],
            downRight: ['d5', 'e4', 'f3', 'g2', 'h1'],
            downLeft: ['b5', 'a4']
          },
          king: ['c7', 'c5', 'b6', 'd6', 'b7', 'd7', 'd5', 'b5'],
          pawn: {
            white: {
              vertical: ['c7'],
              diagonal: ['b7', 'd7'],
            },
            black: {
              vertical: ['c5'],
              diagonal: ['b5', 'd5'],
            }
          }
        }
      },
      d6: {
        position: 'd6',
        clickable: false,
        piece: '',
        pieceColor: '',
        pieceMoves: {
          rook: {
            verticalUp: ['d7', 'd8'],
            verticalDown: ['d5', 'd4', 'd3', 'd2', 'd1'],
            horizontalLeft: ['c6', 'b6', 'a6'],
            horizontalRight: ['e6', 'f6', 'g6', 'h6']
          },
          knight: ['b5', 'b7', 'c8', 'e8', 'f7', 'f5', 'e4', 'c4'],
          bishop: {
            upLeft: ['c7', 'b8'],
            upRight: ['e7', 'f8'],
            downRight: ['e5', 'f4', 'g3', 'h2'],
            downLeft: ['c5', 'b4', 'a3']
          },
          queen: {
            verticalUp: ['d7', 'd8'],
            verticalDown: ['d5', 'd4', 'd3', 'd2', 'd1'],
            horizontalLeft: ['c6', 'b6', 'a6'],
            horizontalRight: ['e6', 'f6', 'g6', 'h6'],
            upLeft: ['c7', 'b8'],
            upRight: ['e7', 'f8'],
            downRight: ['e5', 'f4', 'g3', 'h2'],
            downLeft: ['c5', 'b4', 'a3']
          },
          king: ['d7', 'd5', 'c6', 'e6', 'c7', 'e7', 'e5', 'c5'],
          pawn: {
            white: {
              vertical: ['d7'],
              diagonal: ['c7', 'e7'],
            },
            black: {
              vertical: ['d5'],
              diagonal: ['c5', 'e5'],
            }
          }
        }
      },
      e6: {
        position: 'e6',
        clickable: false,
        piece: '',
        pieceColor: '',
        pieceMoves: {
          rook: {
            verticalUp: ['e7', 'e8'],
            verticalDown: ['e5', 'e4', 'e3', 'e2', 'e1'],
            horizontalLeft: ['d6', 'c6', 'b6', 'a6'],
            horizontalRight: ['f6', 'g6', 'h6']
          },
          knight: ['c5', 'c7', 'd8', 'f8', 'g7', 'g5', 'f4', 'd4'],
          bishop: {
            upLeft: ['d7', 'c8'],
            upRight: ['f7', 'g8'],
            downRight: ['f5', 'g4', 'h3'],
            downLeft: ['d5', 'c4', 'b3', 'a2']
          },
          queen: {
            verticalUp: ['e7', 'e8'],
            verticalDown: ['e5', 'e4', 'e3', 'e2', 'e1'],
            horizontalLeft: ['d6', 'c6', 'b6', 'a6'],
            horizontalRight: ['f6', 'g6', 'h6'],
            upLeft: ['d7', 'c8'],
            upRight: ['f7', 'g8'],
            downRight: ['f5', 'g4', 'h3'],
            downLeft: ['d5', 'c4', 'b3', 'a2']
          },
          king: ['e7', 'e5', 'd6', 'f6', 'd7', 'f7', 'f5', 'd5'],
          pawn: {
            white: {
              vertical: ['e7'],
              diagonal: ['d7', 'f7'],
            },
            black: {
              vertical: ['e5'],
              diagonal: ['d5', 'f5'],
            }
          }
        }
      },
      f6: {
        position: 'f6',
        clickable: false,
        piece: '',
        pieceColor: '',
        pieceMoves: {
          rook: {
            verticalUp: ['f7', 'f8'],
            verticalDown: ['f5', 'f4', 'f3', 'f2', 'f1'],
            horizontalLeft: ['e6', 'd6', 'c6', 'b6', 'a6'],
            horizontalRight: ['g6', 'h6']
          },
          knight: ['d5', 'd7', 'e8', 'g8', 'h7', 'h5', 'g4', 'e4'],
          bishop: {
            upLeft: ['e7', 'd8'],
            upRight: ['g7', 'h8'],
            downRight: ['g5', 'h4'],
            downLeft: ['e5', 'd4', 'c3', 'b2', 'a1']
          },
          queen: {
            verticalUp: ['f7', 'f8'],
            verticalDown: ['f5', 'f4', 'f3', 'f2', 'f1'],
            horizontalLeft: ['e6', 'd6', 'c6', 'b6', 'a6'],
            horizontalRight: ['g6', 'h6'],
            upLeft: ['e7', 'd8'],
            upRight: ['g7', 'h8'],
            downRight: ['g5', 'h4'],
            downLeft: ['e5', 'd4', 'c3', 'b2', 'a1']
          },
          king: ['f7', 'f5', 'e6', 'g6', 'e7', 'g7', 'g5', 'e5'],
          pawn: {
            white: {
              vertical: ['f7'],
              diagonal: ['e7', 'g7'],
            },
            black: {
              vertical: ['f5'],
              diagonal: ['e5', 'g5'],
            }
          }
        }
      },
      g6: {
        position: 'g6',
        clickable: false,
        piece: '',
        pieceColor: '',
        pieceMoves: {
          rook: {
            verticalUp: ['g7', 'g8'],
            verticalDown: ['g5', 'g4', 'g3', 'g2', 'g1'],
            horizontalLeft: ['f6', 'e6', 'd6', 'c6', 'b6', 'a6'],
            horizontalRight: ['h6']
          },
          knight: ['e5', 'e7', 'f8', 'h8', 'h4', 'f4'],
          bishop: {
            upLeft: ['f7', 'e8'],
            upRight: ['h7'],
            downRight: ['h5'],
            downLeft: ['f5', 'e4', 'd3', 'c2', 'b1']
          },
          queen: {
            verticalUp: ['g7', 'g8'],
            verticalDown: ['g5', 'g4', 'g3', 'g2', 'g1'],
            horizontalLeft: ['f6', 'e6', 'd6', 'c6', 'b6', 'a6'],
            horizontalRight: ['h6'],
            upLeft: ['f7', 'e8'],
            upRight: ['h7'],
            downRight: ['h5'],
            downLeft: ['f5', 'e4', 'd3', 'c2', 'b1']
          },
          king: ['g7', 'g5', 'f6', 'h6', 'f7', 'h7', 'h5', 'f5'],
          pawn: {
            white: {
              vertical: ['g7'],
              diagonal: ['f7', 'h7'],
            },
            black: {
              vertical: ['g5'],
              diagonal: ['f5', 'h5'],
            }
          }
        }
      },
      h6: {
        position: 'h6',
        clickable: false,
        piece: '',
        pieceColor: '',
        pieceMoves: {
          rook: {
            verticalUp: ['h7', 'h8'],
            verticalDown: ['h5', 'h4', 'h3', 'h2', 'h1'],
            horizontalLeft: ['g6', 'f6', 'e6', 'd6', 'c6', 'b6', 'a6'],
            horizontalRight: []
          },
          knight: ['f5', 'f7', 'g8', 'g4'],
          bishop: {
            upLeft: ['g7', 'f8'],
            upRight: [],
            downRight: [],
            downLeft: ['g5', 'f4', 'e3', 'd2', 'c1']
          },
          queen: {
            verticalUp: ['h7', 'h8'],
            verticalDown: ['h5', 'h4', 'h3', 'h2', 'h1'],
            horizontalLeft: ['g6', 'f6', 'e6', 'd6', 'c6', 'b6', 'a6'],
            horizontalRight: [],
            upLeft: ['g7', 'f8'],
            upRight: [],
            downRight: [],
            downLeft: ['g5', 'f4', 'e3', 'd2', 'c1']
          },
          king: ['h7', 'h5', 'g6', 'g7', 'g5'],
          pawn: {
            white: {
              vertical: ['h7'],
              diagonal: ['g7'],
            },
            black: {
              vertical: ['h5'],
              diagonal: ['g5'],
            }
          }
        }
      },
      /////////////////////////
      a7: {
        position: 'a7',
        clickable: false,
        piece: 'pawn',
        pieceColor: 'black',
        pieceMoves: {
          rook: {
            verticalUp: ['a8'],
            verticalDown: ['a6', 'a5', 'a4', 'a3', 'a2', 'a1'],
            horizontalLeft: [],
            horizontalRight: ['b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7']
          },
          knight: ['c8', 'c6', 'b5'],
          bishop: {
            upLeft: [],
            upRight: ['b8'],
            downRight: ['b6', 'c5', 'd5', 'e4', 'f3', 'g2', 'h1'],
            downLeft: []
          },
          queen: {
            verticalUp: ['a8'],
            verticalDown: ['a6', 'a5', 'a4', 'a3', 'a2', 'a1'],
            horizontalLeft: [],
            horizontalRight: ['b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'],
            upLeft: [],
            upRight: ['b8'],
            downRight: ['b6', 'c5', 'd5', 'e4', 'f3', 'g2', 'h1'],
            downLeft: []
          },
          king: ['a8', 'a6', 'b7', 'b8', 'b6'],
          pawn: {
            white: {
              vertical: ['a8'],
              diagonal: ['b8'],
            },
            black: {
              vertical: ['a6', 'a5'],
              diagonal: ['b6'],
            }
          }
        }
      },
      b7: {
        position: 'b7',
        clickable: false,
        piece: 'pawn',
        pieceColor: 'black',
        pieceMoves: {
          rook: {
            verticalUp: ['b8'],
            verticalDown: ['b6', 'b5', 'b4', 'b3', 'b2', 'b1'],
            horizontalLeft: ['a7'],
            horizontalRight: ['c7', 'd7', 'e7', 'f7', 'g7', 'h7']
          },
          knight: ['a5', 'd8', 'd6', 'c5'],
          bishop: {
            upLeft: [],
            upRight: ['c8'],
            downRight: ['c6', 'd5', 'e4', 'f3', 'g2', 'h1'],
            downLeft: ['a6']
          },
          queen: {
            verticalUp: ['b8'],
            verticalDown: ['b6', 'b5', 'b4', 'b3', 'b2', 'b1'],
            horizontalLeft: ['a7'],
            horizontalRight: ['c7', 'd7', 'e7', 'f7', 'g7', 'h7'],
            upLeft: [],
            upRight: ['c8'],
            downRight: ['c6', 'd5', 'e4', 'f3', 'g2', 'h1'],
            downLeft: ['a6']
          },
          king: ['b8', 'b6', 'a7', 'c7', 'c8', 'c6', 'a6'],
          pawn: {
            white: {
              vertical: ['b8'],
              diagonal: ['a8', 'c8'],
            },
            black: {
              vertical: ['b6', 'b5'],
              diagonal: ['a6', 'c6'],
            }
          }
        }
      },
      c7: {
        position: 'c7',
        clickable: false,
        piece: 'pawn',
        pieceColor: 'black',
        pieceMoves: {
          rook: {
            verticalUp: ['c8'],
            verticalDown: ['c6', 'c5', 'c4', 'c3', 'c2', 'c1'],
            horizontalLeft: ['b7', 'a7'],
            horizontalRight: ['d7', 'e7', 'f7', 'g7', 'h7']
          },
          knight: ['a6', 'a8', 'e8', 'e6', 'd5', 'b5'],
          bishop: {
            upLeft: ['b8'],
            upRight: ['d8'],
            downRight: ['d6', 'e5', 'f4', 'g3', 'h2'],
            downLeft: ['b6', 'a5']
          },
          queen: {
            verticalUp: ['c8'],
            verticalDown: ['c6', 'c5', 'c4', 'c3', 'c2', 'c1'],
            horizontalLeft: ['b7', 'a7'],
            horizontalRight: ['d7', 'e7', 'f7', 'g7', 'h7'],
            upLeft: ['b8'],
            upRight: ['d8'],
            downRight: ['d6', 'e5', 'f4', 'g3', 'h2'],
            downLeft: ['b6', 'a5']
          },
          king: ['c8', 'c6', 'b7', 'd7', 'b8', 'd8', 'd6', 'b6'],
          pawn: {
            white: {
              vertical: ['c8'],
              diagonal: ['b8', 'd8'],
            },
            black: {
              vertical: ['c6', 'c5'],
              diagonal: ['b6', 'd6'],
            }
          }
        }
      },
      d7: {
        position: 'd7',
        clickable: false,
        piece: 'pawn',
        pieceColor: 'black',
        pieceMoves: {
          rook: {
            verticalUp: ['d8'],
            verticalDown: ['d6', 'd5', 'd4', 'd3', 'd2', 'd1'],
            horizontalLeft: ['c7', 'b7', 'a7'],
            horizontalRight: ['e7', 'f7', 'g7', 'h7']
          },
          knight: ['b6', 'b8', 'f8', 'f6', 'e5', 'c5'],
          bishop: {
            upLeft: ['c8'],
            upRight: ['e8'],
            downRight: ['e6', 'f5', 'g4', 'h3'],
            downLeft: ['c6', 'b5', 'a4']
          },
          queen: {
            verticalUp: ['d8'],
            verticalDown: ['d6', 'd5', 'd4', 'd3', 'd2', 'd1'],
            horizontalLeft: ['c7', 'b7', 'a7'],
            horizontalRight: ['e7', 'f7', 'g7', 'h7'],
            upLeft: ['c8'],
            upRight: ['e8'],
            downRight: ['e6', 'f5', 'g4', 'h3'],
            downLeft: ['c6', 'b5', 'a4']
          },
          king: ['d8', 'd6', 'c7', 'e7', 'c8', 'e8', 'e6', 'c6'],
          pawn: {
            white: {
              vertical: ['d8'],
              diagonal: ['c8', 'e8'],
            },
            black: {
              vertical: ['d6', 'd5'],
              diagonal: ['c6', 'e6'],
            }
          }
        }
      },
      e7: {
        position: 'e7',
        clickable: false,
        piece: 'pawn',
        pieceColor: 'black',
        pieceMoves: {
          rook: {
            verticalUp: ['e8'],
            verticalDown: ['e6', 'e5', 'e4', 'e3', 'e2', 'e1'],
            horizontalLeft: ['d7', 'c7', 'b7', 'a7'],
            horizontalRight: ['f7', 'g7', 'h7']
          },
          knight: ['c6', 'c8', 'g8', 'g6', 'f5', 'd5'],
          bishop: {
            upLeft: ['d8'],
            upRight: ['f8'],
            downRight: ['f6', 'g5', 'h4'],
            downLeft: ['d6', 'c5', 'b4', 'a3']
          },
          queen: {
            verticalUp: ['e8'],
            verticalDown: ['e6', 'e5', 'e4', 'e3', 'e2', 'e1'],
            horizontalLeft: ['d7', 'c7', 'b7', 'a7'],
            horizontalRight: ['f7', 'g7', 'h7'],
            upLeft: ['d8'],
            upRight: ['f8'],
            downRight: ['f6', 'g5', 'h4'],
            downLeft: ['d6', 'c5', 'b4', 'a3']
          },
          king: ['e8', 'e6', 'd7', 'f7', 'd8', 'f8', 'f6', 'd6'],
          pawn: {
            white: {
              vertical: ['e8'],
              diagonal: ['d8', 'f8'],
            },
            black: {
              vertical: ['e6', 'e5'],
              diagonal: ['d6', 'f6'],
            }
          }
        }
      },
      f7: {
        position: 'f7',
        clickable: false,
        piece: 'pawn',
        pieceColor: 'black',
        pieceMoves: {
          rook: {
            verticalUp: ['f8'],
            verticalDown: ['f6', 'f5', 'f4', 'f3', 'f2', 'f1'],
            horizontalLeft: ['e7', 'd7', 'c7', 'b7', 'a7'],
            horizontalRight: ['g7', 'h7']
          },
          knight: ['d6', 'd8', 'h8', 'h6', 'g5', 'e5'],
          bishop: {
            upLeft: ['e8'],
            upRight: ['g8'],
            downRight: ['g6', 'h5'],
            downLeft: ['e6', 'd5', 'c4', 'b3', 'a2']
          },
          queen: {
            verticalUp: ['f8'],
            verticalDown: ['f6', 'f5', 'f4', 'f3', 'f2', 'f1'],
            horizontalLeft: ['e7', 'd7', 'c7', 'b7', 'a7'],
            horizontalRight: ['g7', 'h7'],
            upLeft: ['e8'],
            upRight: ['g8'],
            downRight: ['g6', 'h5'],
            downLeft: ['e6', 'd5', 'c4', 'b3', 'a2']
          },
          king: ['f8', 'f6', 'e7', 'g7', 'e8', 'g8', 'g6', 'e6'],
          pawn: {
            white: {
              vertical: ['f8'],
              diagonal: ['e8', 'g8'],
            },
            black: {
              vertical: ['f6', 'f5'],
              diagonal: ['e6', 'g6'],
            }
          }
        }
      },
      g7: {
        position: 'g7',
        clickable: false,
        piece: 'pawn',
        pieceColor: 'black',
        pieceMoves: {
          rook: {
            verticalUp: ['g8'],
            verticalDown: ['g6', 'g5', 'g4', 'g3', 'g2', 'g1'],
            horizontalLeft: ['f7', 'e7', 'd7', 'c7', 'b7', 'a7'],
            horizontalRight: ['h7']
          },
          knight: ['e6', 'e8', 'h5', 'f5'],
          bishop: {
            upLeft: ['d8'],
            upRight: ['f8'],
            downRight: ['h6'],
            downLeft: ['f6', 'e5', 'd4', 'c3', 'b2', 'a1']
          },
          queen: {
            verticalUp: ['g8'],
            verticalDown: ['g6', 'g5', 'g4', 'g3', 'g2', 'g1'],
            horizontalLeft: ['f7', 'e7', 'd7', 'c7', 'b7', 'a7'],
            horizontalRight: ['h7'],
            upLeft: ['d8'],
            upRight: ['f8'],
            downRight: ['h6'],
            downLeft: ['f6', 'e5', 'd4', 'c3', 'b2', 'a1']
          },
          king: ['g8', 'g6', 'f7', 'h7', 'f8', 'h8', 'h6', 'f6'],
          pawn: {
            white: {
              vertical: ['g8'],
              diagonal: ['f8', 'h8'],
            },
            black: {
              vertical: ['g6', 'g5'],
              diagonal: ['f6', 'h6'],
            }
          }
        }
      },
      h7: {
        position: 'h7',
        clickable: false,
        piece: 'pawn',
        pieceColor: 'black',
        pieceMoves: {
          rook: {
            verticalUp: ['h8'],
            verticalDown: ['h6', 'h5', 'h4', 'h3', 'h2', 'h1'],
            horizontalLeft: ['g7', 'f7', 'e7', 'd7', 'c7', 'b7', 'a7'],
            horizontalRight: []
          },
          knight: ['f6', 'f8', 'g5'],
          bishop: {
            upLeft: ['g8'],
            upRight: [],
            downRight: [],
            downLeft: ['g6', 'f5', 'e4', 'd3', 'c2', 'b1']
          },
          queen: {
            verticalUp: ['h8'],
            verticalDown: ['h6', 'h5', 'h4', 'h3', 'h2', 'h1'],
            horizontalLeft: ['g7', 'f7', 'e7', 'd7', 'c7', 'b7', 'a7'],
            horizontalRight: [],
            upLeft: ['g8'],
            upRight: [],
            downRight: [],
            downLeft: ['g6', 'f5', 'e4', 'd3', 'c2', 'b1']
          },
          king: ['h8', 'h6', 'g7', 'g8', 'g6'],
          pawn: {
            white: {
              vertical: ['h8'],
              diagonal: ['g8'],
            },
            black: {
              vertical: ['h6', 'h5'],
              diagonal: ['g6'],
            }
          }
        }
      },
      /////////////////////////
      a8: {
        position: 'a8',
        clickable: false,
        piece: 'rook',
        pieceColor: 'black',
        pieceMoves: {
          rook: {
            verticalUp: [],
            verticalDown: ['a7', 'a6', 'a5', 'a4', 'a3', 'a2', 'a1'],
            horizontalLeft: [],
            horizontalRight: ['b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8']
          },
          knight: ['c7', 'b6'],
          bishop: {
            upLeft: [],
            upRight: [],
            downRight: ['b7', 'c6', 'd5', 'e4', 'f3', 'g2', 'h1'],
            downLeft: []
          },
          queen: {
            verticalUp: [],
            verticalDown: ['a7', 'a6', 'a5', 'a4', 'a3', 'a2', 'a1'],
            horizontalLeft: [],
            horizontalRight: ['b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8'],
            upLeft: [],
            upRight: [],
            downRight: ['b7', 'c6', 'd5', 'e4', 'f3', 'g2', 'h1'],
            downLeft: []
          },
          king: ['a7', 'b8', 'b7'],
          pawn: {
            white: {
              vertical: [],
              diagonal: [],
            },
            black: {
              vertical: ['a7'],
              diagonal: ['b7'],
            }
          }
        }
      },
      b8: {
        position: 'b8',
        clickable: false,
        piece: 'knight',
        pieceColor: 'black',
        pieceMoves: {
          rook: {
            verticalUp: [],
            verticalDown: ['b7', 'b6', 'b5', 'b4', 'b3', 'b2', 'b1'],
            horizontalLeft: ['a8'],
            horizontalRight: ['c8', 'd8', 'e8', 'f8', 'g8', 'h8'],
          },
          knight: ['a6', 'c6', 'd7'],
          bishop: {
            upLeft: [],
            upRight: [],
            downRight: ['c7', 'd6', 'e5', 'f4', 'g3', 'h2'],
            downLeft: []
          },
          queen: {
            verticalUp: [],
            verticalDown: ['b7', 'b6', 'b5', 'b4', 'b3', 'b2', 'b1'],
            horizontalLeft: ['a8'],
            horizontalRight: ['c8', 'd8', 'e8', 'f8', 'g8', 'h8'],
            upLeft: [],
            upRight: [],
            downRight: ['c7', 'd6', 'e5', 'f4', 'g3', 'h2'],
            downLeft: []
          },
          king: ['b7', 'a8', 'c8', 'c7'],
          pawn: {
            white: {
              vertical: [],
              diagonal: [],
            },
            black: {
              vertical: ['b7'],
              diagonal: ['a7', 'c7'],
            }
          }
        }
      },
      c8: {
        position: 'c8',
        clickable: false,
        piece: 'bishop',
        pieceColor: 'black',
        pieceMoves: {
          rook: {
            verticalUp: [],
            verticalDown: ['c7', 'c6', 'c5', 'c4', 'c3', 'c2', 'c1'],
            horizontalLeft: ['b8', 'a8'],
            horizontalRight: ['d8', 'e8', 'f8', 'g8', 'h8']
          },
          knight: ['a7', 'e7', 'd6', 'b6'],
          bishop: {
            upLeft: [],
            upRight: [],
            downRight: ['d7', 'e6', 'f5', 'g4', 'h3'],
            downLeft: ['b7', 'a6']
          },
          queen: {
            verticalUp: [],
            verticalDown: ['c7', 'c6', 'c5', 'c4', 'c3', 'c2', 'c1'],
            horizontalLeft: ['b8', 'a8'],
            horizontalRight: ['d8', 'e8', 'f8', 'g8', 'h8'],
            upLeft: [],
            upRight: [],
            downRight: ['d7', 'e6', 'f5', 'g4', 'h3'],
            downLeft: ['b7', 'a6']
          },
          king: ['c7', 'b8', 'd8', 'd7', 'b7'],
          pawn: {
            white: {
              vertical: [],
              diagonal: [],
            },
            black: {
              vertical: ['c7'],
              diagonal: ['b7', 'd7'],
            }
          }
        }
      },
      d8: {
        position: 'd8',
        clickable: false,
        piece: 'queen',
        pieceColor: 'black',
        pieceMoves: {
          rook: {
            verticalUp: [],
            verticalDown: ['d7', 'd6', 'd5', 'd4', 'd3', 'd2', 'd1'],
            horizontalLeft: ['c8', 'b8', 'a8'],
            horizontalRight: ['e8', 'f8', 'g8', 'h8']
          },
          knight: ['b7', 'f7', 'e6', 'c6'],
          bishop: {
            upLeft: [],
            upRight: [],
            downRight: ['e7', 'f6', 'g5', 'h4'],
            downLeft: ['c7', 'b6', 'a5']
          },
          queen: {
            verticalUp: [],
            verticalDown: ['d7', 'd6', 'd5', 'd4', 'd3', 'd2', 'd1'],
            horizontalLeft: ['c8', 'b8', 'a8'],
            horizontalRight: ['e8', 'f8', 'g8', 'h8'],
            upLeft: [],
            upRight: [],
            downRight: ['e7', 'f6', 'g5', 'h4'],
            downLeft: ['c7', 'b6', 'a5']
          },
          king: ['d7', 'c8', 'e8', 'e7', 'c7'],
          pawn: {
            white: {
              vertical: [],
              diagonal: [],
            },
            black: {
              vertical: ['d7'],
              diagonal: ['c7', 'e7'],
            }
          }
        }
      },
      e8: {
        position: 'e8',
        clickable: false,
        piece: 'king',
        pieceColor: 'black',
        pieceMoves: {
          rook: {
            verticalUp: [],
            verticalDown: ['e7', 'e6', 'e5', 'e4', 'e3', 'e2', 'e1'],
            horizontalLeft: ['d8', 'c8', 'b8', 'a8'],
            horizontalRight: ['f8', 'g8', 'h8']
          },
          knight: ['c7', 'g7', 'f6', 'd6'],
          bishop: {
            upLeft: [],
            upRight: [],
            downRight: ['f7', 'g6', 'h5'],
            downLeft: ['d7', 'c6', 'b5', 'a4']
          },
          queen: {
            verticalUp: [],
            verticalDown: ['e7', 'e6', 'e5', 'e4', 'e3', 'e2', 'e1'],
            horizontalLeft: ['d8', 'c8', 'b8', 'a8'],
            horizontalRight: ['f8', 'g8', 'h8'],
            upLeft: [],
            upRight: [],
            downRight: ['f7', 'g6', 'h5'],
            downLeft: ['d7', 'c6', 'b5', 'a4']
          },
          king: ['e7', 'd8', 'f8', 'f7', 'd7'],
          pawn: {
            white: {
              vertical: [],
              diagonal: [],
            },
            black: {
              vertical: ['e7'],
              diagonal: ['d7', 'f7'],
            }
          }
        }
      },
      f8: {
        position: 'f8',
        clickable: false,
        piece: 'bishop',
        pieceColor: 'black',
        pieceMoves: {
          rook: {
            verticalUp: [],
            verticalDown: ['f7', 'f6', 'f5', 'f4', 'f3', 'f2', 'f1'],
            horizontalLeft: ['e8', 'd8', 'c8', 'b8', 'a8'],
            horizontalRight: ['g8', 'h8']
          },
          knight: ['d7', 'h7', 'g6', 'e6'],
          bishop: {
            upLeft: [],
            upRight: [],
            downRight: ['g7', 'h6'],
            downLeft: ['e7', 'd6', 'c5', 'b4', 'a3']
          },
          queen: {
            verticalUp: [],
            verticalDown: ['f7', 'f6', 'f5', 'f4', 'f3', 'f2', 'f1'],
            horizontalLeft: ['e8', 'd8', 'c8', 'b8', 'a8'],
            horizontalRight: ['g8', 'h8'],
            upLeft: [],
            upRight: [],
            downRight: ['g7', 'h6'],
            downLeft: ['e7', 'd6', 'c5', 'b4', 'a3']
          },
          king: ['f7', 'e8', 'g8', 'g7', 'e7'],
          pawn: {
            white: {
              vertical: [],
              diagonal: [],
            },
            black: {
              vertical: ['f7'],
              diagonal: ['e7', 'g7'],
            }
          }
        }
      },
      g8: {
        position: 'g8',
        clickable: false,
        piece: 'knight',
        pieceColor: 'black',
        pieceMoves: {
          rook: {
            verticalUp: [],
            verticalDown: ['g7', 'g6', 'g5', 'g4', 'g3', 'g2', 'g1'],
            horizontalLeft: ['f8', 'e8', 'd8', 'c8', 'b8', 'a8'],
            horizontalRight: ['h8']
          },
          knight: ['e7', 'f6', 'h6'],
          bishop: {
            upLeft: [],
            upRight: [],
            downRight: ['h7'],
            downLeft: ['f7', 'e6', 'd5', 'c4', 'b3', 'a2']
          },
          queen: {
            verticalUp: [],
            verticalDown: ['g7', 'g6', 'g5', 'g4', 'g3', 'g2', 'g1'],
            horizontalLeft: ['f8', 'e8', 'd8', 'c8', 'b8', 'a8'],
            horizontalRight: ['h8'],
            upLeft: [],
            upRight: [],
            downRight: ['h7'],
            downLeft: ['f7', 'e6', 'd5', 'c4', 'b3', 'a2']
          },
          king: ['g7', 'f8', 'h8', 'h7', 'f7'],
          pawn: {
            white: {
              vertical: [],
              diagonal: [],
            },
            black: {
              vertical: ['g7'],
              diagonal: ['f7', 'h7'],
            }
          }
        }
      },
      h8: {
        position: 'h8',
        clickable: false,
        piece: 'rook',
        pieceColor: 'black',
        pieceMoves: {
          rook: {
            verticalUp: [],
            verticalDown: ['h7', 'h6', 'h5', 'h4', 'h3', 'h2', 'h1'],
            horizontalLeft: ['g8', 'f8', 'e8', 'd8', 'c8', 'b8', 'a8'],
            horizontalRight: []
          },
          knight: ['f7', 'g6'],
          bishop: {
            upLeft: [],
            upRight: [],
            downRight: [],
            downLeft: ['g7','f6', 'e5', 'd4', 'c3', 'b2', 'a1']
          },
          queen: {
            verticalUp: [],
            verticalDown: ['h7', 'h6', 'h5', 'h4', 'h3', 'h2', 'h1'],
            horizontalLeft: ['g8', 'f8', 'e8', 'd8', 'c8', 'b8', 'a8'],
            horizontalRight: [],
            upLeft: [],
            upRight: [],
            downRight: [],
            downLeft: ['g7','f6', 'e5', 'd4', 'c3', 'b2', 'a1']
          },
          king: ['h7', 'g8', 'g7'],
          pawn: {
            white: {
              vertical: [],
              diagonal: [],
            },
            black: {
              vertical: ['h7'],
              diagonal: ['g7'],
            }
          }
        }
      },
    }
  };

  checkForStalemate(array) {
    if (array.length >= 12) {
      for (let i = 0; i <= array.length - 10; i++) {
        if (((array[i].piece === array[i + 4].piece) && (array[i].piece === array[i + 8].piece)) && ((array[i].startPosition === array[i + 4].startPosition) && (array[i].startPosition === array[i + 8].startPosition)) && ((array[i].endPosition === array[i + 4].endPosition) && (array[i].endPosition === array[i + 8].endPosition))) {
          if (((array[i + 1].piece === array[i + 5].piece) && (array[i + 1].piece === array[i + 9].piece)) && ((array[i + 1].startPosition === array[i + 5].startPosition) && (array[i + 1].startPosition === array[i + 9].startPosition)) && ((array[i + 1].endPosition === array[i + 5].endPosition) && (array[i + 1].endPosition === array[i + 9].endPosition))) {
            this.gameControl.gameResult.stalemate = true;
          }
        }
      }
    }
  }


  movePiece(square1, square2, piece1, piece2, pieceColor1, pieceColor2, array1, array2) {
    array1.push(piece1); 
    array1.push(piece2);
    square1.piece = '';
    square2.piece = piece1;
    array2.push(pieceColor1);
    array2.push(pieceColor2);
    square1.pieceColor = '';
    square2.pieceColor = pieceColor1
  };

  movePieceBack(square1, square2, array1, array2) {
    square1.piece = array1[0];
    square2.piece = array1[1];
    array1.pop();
    array1.pop();
    square1.pieceColor = array2[0];
    square2.pieceColor = array2[1];
    array2.pop();
    array2.pop();
    this.gameControl.wouldPutSelfInCheck = false;
  }
  
  checkForSelfCheck(player) {
    let otherPlayer;
    if (player === this.gameControl.playerTurn) {
      otherPlayer = this.gameControl.otherPlayer;
    } else if (player === this.gameControl.otherPlayer) {
      otherPlayer = this.gameControl.playerTurn
    }
    for (let square in this.gameControl.squares) {
      //identifies all squares that are occupied by pieces of the other player
      if (this.gameControl.squares[square].pieceColor === otherPlayer) {
        //identifies the piece on each square occupied by the other player and runs through all of its potential moves
        switch (this.gameControl.squares[square].piece) {
          case 'rook':
              let a = 0;
              let rookStop = false;
              
              while (a < this.gameControl.squares[square].pieceMoves.rook.verticalUp.length && rookStop == false) {
                switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalUp[a]].pieceColor) {
                  case player:
                    if (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalUp[a]].piece === 'king') {
                      this.gameControl.wouldPutSelfInCheck = true;
                    }
                    rookStop = true;  
                    break;
                  case '':
                    a++;
                    break;
                  case otherPlayer:
                    rookStop = true;  
                    break;
                } 
              };
              a = 0;
              rookStop = false;

              while (a < this.gameControl.squares[square].pieceMoves.rook.verticalDown.length && rookStop == false) {
                switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalDown[a]].pieceColor) {
                  case player:
                    if (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalDown[a]].piece === 'king') {
                      this.gameControl.wouldPutSelfInCheck = true;
                    }
                    rookStop = true;  
                    break;
                  case '':
                    a++;
                    break;
                  case otherPlayer:
                    rookStop = true;  
                    break;
                }
              };
              a = 0;
              rookStop = false;

              while (a < this.gameControl.squares[square].pieceMoves.rook.horizontalLeft.length && rookStop == false) {
                switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalLeft[a]].pieceColor) {
                  case player:
                    if (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalLeft[a]].piece === 'king') {
                      this.gameControl.wouldPutSelfInCheck = true;
                    }
                    rookStop = true;  
                    break;
                  case '':
                    a++;
                    break;
                  case otherPlayer:
                    rookStop = true;  
                    break;   
                }
              };
              a = 0;
              rookStop = false;

              while (a < this.gameControl.squares[square].pieceMoves.rook.horizontalRight.length && rookStop == false) {
                switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalRight[a]].pieceColor) {
                  case player:
                    if (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalRight[a]].piece === 'king') {
                      this.gameControl.wouldPutSelfInCheck = true;
                    }
                    rookStop = true;  
                    break;
                  case '':
                    a++;
                  case otherPlayer:
                    rookStop = true;  
                    break;
                }
              };

            break;
          case 'knight':
            for (let i = 0; i < this.gameControl.squares[square].pieceMoves.knight.length; i++) {
              if (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.knight[i]].piece === 'king' && this.gameControl.squares[this.gameControl.squares[square].pieceMoves.knight[i]].pieceColor === player) {
                this.gameControl.wouldPutSelfInCheck = true;
              }
            }
            break;
          case 'bishop':
              let b = 0;
              let bishopStop = false;
              
              while (b < this.gameControl.squares[square].pieceMoves.bishop.upLeft.length && bishopStop == false) {
                switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upLeft[b]].pieceColor) {
                  case player:
                    if (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upLeft[b]].piece === 'king') {
                      this.gameControl.wouldPutSelfInCheck = true;
                    }
                    bishopStop = true;  
                    break;
                  case '':
                    b++;
                    break; 
                  case otherPlayer:
                    bishopStop = true;  
                    break; 
                }
              };
              b = 0;
              bishopStop = false;

              while (b < this.gameControl.squares[square].pieceMoves.bishop.upRight.length && bishopStop == false) {
                switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upRight[b]].pieceColor) {
                  case player:
                    if (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upRight[b]].piece === 'king') {
                      this.gameControl.wouldPutSelfInCheck = true;
                    }
                    bishopStop = true;  
                    break;
                  case '':
                    b++;
                    break;
                  case otherPlayer:
                    bishopStop = true;  
                    break;
                }
              };
              b = 0;
              bishopStop = false;

              while (b < this.gameControl.squares[square].pieceMoves.bishop.downRight.length && bishopStop == false) {
                switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downRight[b]].pieceColor) {
                  case player:
                    if (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downRight[b]].piece === 'king') {
                      this.gameControl.wouldPutSelfInCheck = true;
                    }
                    bishopStop = true;  
                    break;
                  case '':
                    b++;
                    break;  
                  case otherPlayer:
                    bishopStop = true;  
                    break;
                }
              };
              b = 0;
              bishopStop = false;

              while (b < this.gameControl.squares[square].pieceMoves.bishop.downLeft.length && bishopStop == false) {
                switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downLeft[b]].pieceColor) {
                  case player:
                    if (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downLeft[b]].piece === 'king') {
                      this.gameControl.wouldPutSelfInCheck = true;
                    }
                    bishopStop = true;  
                    break;
                  case '':
                    b++;
                    break;
                  case otherPlayer:
                    bishopStop = true;  
                    break;
                }
              };  
            break;
          case 'queen':
              this.testCode = 'queen checkForSelfCheck reached'
              let c = 0;
              let queenStop = false;
              while (c < this.gameControl.squares[square].pieceMoves.queen.verticalUp.length && queenStop == false) {
                switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalUp[c]].pieceColor) {
                  case player:
                    if (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalUp[c]].piece === 'king') {
                      this.gameControl.wouldPutSelfInCheck = true;
                    }
                    queenStop = true;  
                    break;
                  case '':
                    c++;
                    break;
                  case otherPlayer:
                    queenStop = true;  
                    break;
                }
              };
              c = 0;
              queenStop = false;

              while (c < this.gameControl.squares[square].pieceMoves.queen.verticalDown.length && queenStop == false) {
                switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalDown[c]].pieceColor) {
                  case player:
                    if (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalDown[c]].piece === 'king') {
                      this.gameControl.wouldPutSelfInCheck = true;
                    }
                    queenStop = true;  
                    break;
                  case '':
                    c++;
                    break;
                  case otherPlayer:
                    queenStop = true;  
                    break;
                }
              };
              c = 0;
              queenStop = false;

              while (c < this.gameControl.squares[square].pieceMoves.queen.horizontalLeft.length && queenStop == false) {
                switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalLeft[c]].pieceColor) {
                  case player:
                    if (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalLeft[c]].piece === 'king') {
                      this.gameControl.wouldPutSelfInCheck = true;
                    }
                    queenStop = true;  
                    break;
                  case '':
                    c++;
                    break;
                  case otherPlayer:
                    queenStop = true;  
                    break;
                }
              };
              c = 0;
              queenStop = false;

              while (c < this.gameControl.squares[square].pieceMoves.queen.horizontalRight.length && queenStop == false) {
                switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalRight[c]].pieceColor) {
                  case player:
                    if (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalRight[c]].piece === 'king') {
                      this.gameControl.wouldPutSelfInCheck = true;
                    }
                    queenStop = true;  
                    break;
                  case '':
                    c++;
                    break;
                  case otherPlayer:
                    queenStop = true;  
                    break;
                }
              };
              c = 0;
              queenStop = false;
              
              while (c < this.gameControl.squares[square].pieceMoves.queen.upLeft.length && queenStop == false) {
                this.testCode = 'queen upleft check for self check reached'
                switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upLeft[c]].pieceColor) {
                  case player:
                    this.testCode = 'case player reached in upleft queen in check for self check'
                    if (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upLeft[c]].piece === 'king') {
                      this.gameControl.wouldPutSelfInCheck = true;
                    }
                    queenStop = true;  
                    break;
                  case '':
                    c++;
                    break;
                  case otherPlayer:
                    queenStop = true;  
                    break;
                }
              };
              c = 0;
              queenStop = false;

              while (c < this.gameControl.squares[square].pieceMoves.queen.upRight.length && queenStop == false) {
                switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upRight[c]].pieceColor) {
                  case player:
                    if (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upRight[c]].piece === 'king') {
                      this.gameControl.wouldPutSelfInCheck = true;
                    }
                    queenStop = true;  
                    break;
                  case '':
                    c++;
                    break;
                  case otherPlayer:
                    queenStop = true;  
                    break;
                }
              };
              c = 0;
              queenStop = false;

              while (c < this.gameControl.squares[square].pieceMoves.queen.downRight.length && queenStop == false) {
                switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downRight[c]].pieceColor) {
                  case player:
                    if (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downRight[c]].piece === 'king') {
                      this.gameControl.wouldPutSelfInCheck = true;
                    }
                    queenStop = true;  
                    break;
                  case '':
                    c++;
                    break;
                  case otherPlayer:
                    queenStop = true;  
                    break;
                }
              };
              c = 0;
              queenStop = false;

              while (c < this.gameControl.squares[square].pieceMoves.queen.downLeft.length && queenStop == false) {
                switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downLeft[c]].pieceColor) {
                  case player:
                    if (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downLeft[c]].piece === 'king') {
                      this.gameControl.wouldPutSelfInCheck = true;
                    }
                    queenStop = true;  
                    break;
                  case '':
                    c++;
                    break;
                  case otherPlayer:
                    queenStop = true;  
                    break;
                }
              };  
            break;  
          case 'pawn':
            if (player === 'white') {
              for (let g = 0; g < this.gameControl.squares[square].pieceMoves.pawn.white.diagonal.length; g++) {
                switch(this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.white.diagonal[g]].pieceColor) {
                  case player:
                    if (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.white.diagonal[g]].piece === 'king') {
                      this.gameControl.wouldPutSelfInCheck = true;
                    }
                    break;
                  case '': 
                    break;
                  case otherPlayer:
                    break;
                }
              }
            } else if (player === 'black') {
              for (let g = 0; g < this.gameControl.squares[square].pieceMoves.pawn.black.diagonal.length; g++) {
                switch(this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.black.diagonal[g]].pieceColor) {
                  case player:
                    if (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.black.diagonal[g]].piece === 'king') {
                      this.gameControl.wouldPutSelfInCheck = true;
                    }
                    break;
                  case '': 
                    break;
                  case otherPlayer:
                    break;
                }
              }
            }
            break;   
        }
      }
    }
  }

  checkForDraw() {
    this.gameControl.draw = true;
    this.checkForSelfCheck(this.gameControl.otherPlayer);
    if (this.gameControl.wouldPutSelfInCheck === true) {
      this.gameControl.checkmate = true;
    }
    this.gameControl.wouldPutSelfInCheck = false;
    for (let square in this.gameControl.squares) {
      if (this.gameControl.squares[square].pieceColor === this.gameControl.otherPlayer) {
        let pieceStore = [];
        let pieceColorStore = [];
        switch (this.gameControl.squares[square].piece) {
          case 'rook':
            this.testCode = 'made it inside rook'
            let a = 0;
            let rookStop = false;

            while (a < this.gameControl.squares[square].pieceMoves.rook.verticalUp.length && rookStop == false) {
              this.testCode = 'vertical up rook reached in checkForDraw'
              switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalUp[a]].pieceColor) {
                case this.gameControl.otherPlayer:
                  rookStop = true;  
                  break;
                case '':
                  this.movePiece(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalUp[a]], this.gameControl.squares[square].piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalUp[a]].piece, this.gameControl.squares[square].pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalUp[a]].pieceColor, pieceStore, pieceColorStore);
                  this.checkForSelfCheck(this.gameControl.otherPlayer);
                  if(this.gameControl.wouldPutSelfInCheck === false) {
                    this.gameControl.draw = false;
                    this.gameControl.checkmate = false;
                  }
                  this.movePieceBack(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalUp[a]], pieceStore, pieceColorStore);
                  a++;
                  break;
                case this.gameControl.playerTurn:
                  this.movePiece(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalUp[a]], this.gameControl.squares[square].piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalUp[a]].piece, this.gameControl.squares[square].pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalUp[a]].pieceColor, pieceStore, pieceColorStore);
                  this.checkForSelfCheck(this.gameControl.otherPlayer);
                  if(this.gameControl.wouldPutSelfInCheck === false) {
                    this.gameControl.draw = false;
                    this.gameControl.checkmate = false;
                  }
                  this.movePieceBack(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalUp[a]], pieceStore, pieceColorStore);
                  rookStop = true;  
                  break;
              } 
            };
            a = 0;
            rookStop = false;

            while (a < this.gameControl.squares[square].pieceMoves.rook.verticalDown.length && rookStop == false) {
              this.testCode = 'vertical down rook reached in checkForDraw'
              switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalDown[a]].pieceColor) {
                case this.gameControl.otherPlayer:
                  rookStop = true;  
                  break;
                case '':
                  this.movePiece(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalDown[a]], this.gameControl.squares[square].piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalDown[a]].piece, this.gameControl.squares[square].pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalDown[a]].pieceColor, pieceStore, pieceColorStore);
                  this.checkForSelfCheck(this.gameControl.otherPlayer);
                  if(this.gameControl.wouldPutSelfInCheck === false) {
                    this.gameControl.draw = false;
                    this.gameControl.checkmate = false;
                    
                  }
                  this.movePieceBack(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalDown[a]], pieceStore, pieceColorStore);
                  a++;
                  break;
                case this.gameControl.playerTurn:
                  this.movePiece(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalDown[a]], this.gameControl.squares[square].piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalDown[a]].piece, this.gameControl.squares[square].pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalDown[a]].pieceColor, pieceStore, pieceColorStore);
                  this.checkForSelfCheck(this.gameControl.otherPlayer);
                  if(this.gameControl.wouldPutSelfInCheck === false) {
                    this.gameControl.draw = false;
                    this.gameControl.checkmate = false;
                  }
                  this.movePieceBack(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalDown[a]], pieceStore, pieceColorStore);
                  rookStop = true;  
                  break;
              } 
            };
            a = 0;
            rookStop = false;

            while (a < this.gameControl.squares[square].pieceMoves.rook.horizontalLeft.length && rookStop == false) {
              this.testCode = 'horizontal left rook reached in checkForDraw'
              switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalLeft[a]].pieceColor) {
                case this.gameControl.otherPlayer:
                  this.testCode = 'player Turn horizontal left rook reached in checkForDraw'
                  rookStop = true;  
                  break;
                case '':
                  this.testCode = 'empty horizontal left rook reached in checkForDraw'
                  this.movePiece(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalLeft[a]], this.gameControl.squares[square].piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalLeft[a]].piece, this.gameControl.squares[square].pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalLeft[a]].pieceColor, pieceStore, pieceColorStore);
                  this.checkForSelfCheck(this.gameControl.otherPlayer);
                  if(this.gameControl.wouldPutSelfInCheck === false) {
                    this.gameControl.draw = false;
                    this.gameControl.checkmate = false;
                  }
                  this.movePieceBack(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalLeft[a]], pieceStore, pieceColorStore);
                  a++;
                  break;
                case this.gameControl.playerTurn:
                  this.testCode = 'other player horizontal left rook reached in checkForDraw'
                  this.movePiece(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalLeft[a]], this.gameControl.squares[square].piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalLeft[a]].piece, this.gameControl.squares[square].pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalLeft[a]].pieceColor, pieceStore, pieceColorStore);
                  this.testCode = 'move piece of other player horizontal left rook reached in checkForDraw'
                  this.checkForSelfCheck(this.gameControl.otherPlayer);
                  this.testCode = 'checkForSelfCheck of other player horizontal left rook reached in checkForDraw'
                  if(this.gameControl.wouldPutSelfInCheck === false) {
                    this.gameControl.draw = false;
                    this.gameControl.checkmate = false;
                  }
                  this.movePieceBack(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalLeft[a]], pieceStore, pieceColorStore);
                  this.testCode = 'move piece back of other player horizontal left rook reached in checkForDraw'
                  rookStop = true;  
                  break;
              } 
            };
            a = 0;
            rookStop = false;
            this.testCode = 'about to enter horizontal right rook in checkForDraw'
            while (a < this.gameControl.squares[square].pieceMoves.rook.horizontalRight.length && rookStop == false) {
              this.testCode = 'horizontal right rook reached in checkForDraw'
              switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalRight[a]].pieceColor) {
                case this.gameControl.otherPlayer:
                  rookStop = true;  
                  break;
                case '':
                  this.movePiece(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalRight[a]], this.gameControl.squares[square].piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalRight[a]].piece, this.gameControl.squares[square].pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalRight[a]].pieceColor, pieceStore, pieceColorStore);
                  this.checkForSelfCheck(this.gameControl.otherPlayer);
                  if(this.gameControl.wouldPutSelfInCheck === false) {
                    this.gameControl.draw = false;
                    this.gameControl.checkmate = false;
                  }
                  this.movePieceBack(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalRight[a]], pieceStore, pieceColorStore);
                  a++;
                  break;
                case this.gameControl.playerTurn:
                  this.movePiece(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalRight[a]], this.gameControl.squares[square].piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalRight[a]].piece, this.gameControl.squares[square].pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalRight[a]].pieceColor, pieceStore, pieceColorStore);
                  this.checkForSelfCheck(this.gameControl.otherPlayer);
                  if(this.gameControl.wouldPutSelfInCheck === false) {
                    this.gameControl.draw = false;
                    this.gameControl.checkmate = false;
                  }
                  this.movePieceBack(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalRight[a]], pieceStore, pieceColorStore);
                  rookStop = true;  
                  break;
              } 
            };
            break;
          
          case 'knight':
            this.testCode = 'made it inside knight'
            for (let i = 0; i < this.gameControl.squares[square].pieceMoves.knight.length; i++) {
              switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.knight[i]].pieceColor) {
                case this.gameControl.otherPlayer:
                  break;
                case '':
                  this.movePiece(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.knight[i]], this.gameControl.squares[square].piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.knight[i]].piece, this.gameControl.squares[square].pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.knight[i]].pieceColor, pieceStore, pieceColorStore);
                  this.checkForSelfCheck(this.gameControl.otherPlayer);
                  if(this.gameControl.wouldPutSelfInCheck === false) {
                    this.gameControl.draw = false;
                    this.gameControl.checkmate = false;
                  }
                  this.movePieceBack(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.knight[i]], pieceStore, pieceColorStore);
                  i++;
                  break;
                case this.gameControl.playerTurn:
                  this.movePiece(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.knight[i]], this.gameControl.squares[square].piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.knight[i]].piece, this.gameControl.squares[square].pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.knight[i]].pieceColor, pieceStore, pieceColorStore);
                  this.checkForSelfCheck(this.gameControl.otherPlayer);
                  if(this.gameControl.wouldPutSelfInCheck === false) {
                    this.gameControl.draw = false;
                    this.gameControl.checkmate = false;
                  }
                  this.movePieceBack(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.knight[i]], pieceStore, pieceColorStore);
                  break;
              } 
            }
            break;
          
          case 'bishop':
            this.testCode = 'made it inside bishop'
            let b = 0;
            let bishopStop = false;

            while (b < this.gameControl.squares[square].pieceMoves.bishop.upLeft.length && bishopStop == false) {
              switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upLeft[b]].pieceColor) {
                case this.gameControl.otherPlayer:
                  bishopStop = true;  
                  break;
                case '':
                  this.movePiece(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upLeft[b]], this.gameControl.squares[square].piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upLeft[b]].piece, this.gameControl.squares[square].pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upLeft[b]].pieceColor, pieceStore, pieceColorStore);
                  this.checkForSelfCheck(this.gameControl.otherPlayer);
                  if(this.gameControl.wouldPutSelfInCheck === false) {
                    this.gameControl.draw = false;
                    this.gameControl.checkmate = false;
                  }
                  this.movePieceBack(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upLeft[b]], pieceStore, pieceColorStore);
                  b++;
                  break;
                case this.gameControl.playerTurn:
                  this.movePiece(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upLeft[b]], this.gameControl.squares[square].piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upLeft[b]].piece, this.gameControl.squares[square].pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upLeft[b]].pieceColor, pieceStore, pieceColorStore);
                  this.checkForSelfCheck(this.gameControl.otherPlayer);
                  if(this.gameControl.wouldPutSelfInCheck === false) {
                    this.gameControl.draw = false;
                    this.gameControl.checkmate = false;
                  }
                  this.movePieceBack(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upLeft[b]], pieceStore, pieceColorStore);
                  bishopStop = true;  
                  break;
              } 
            };
            b = 0;
            bishopStop = false;

            while (b < this.gameControl.squares[square].pieceMoves.bishop.upRight.length && bishopStop == false) {
              switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upRight[b]].pieceColor) {
                case this.gameControl.otherPlayer:
                  bishopStop = true;  
                  break;
                case '':
                  this.movePiece(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upRight[b]], this.gameControl.squares[square].piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upRight[b]].piece, this.gameControl.squares[square].pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upRight[b]].pieceColor, pieceStore, pieceColorStore);
                  this.checkForSelfCheck(this.gameControl.otherPlayer);
                  if(this.gameControl.wouldPutSelfInCheck === false) {
                    this.gameControl.draw = false;
                    this.gameControl.checkmate = false;
                  }
                  this.movePieceBack(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upRight[b]], pieceStore, pieceColorStore);
                  b++;
                  break;
                case this.gameControl.playerTurn:
                  this.movePiece(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upRight[b]], this.gameControl.squares[square].piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upRight[b]].piece, this.gameControl.squares[square].pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upRight[b]].pieceColor, pieceStore, pieceColorStore);
                  this.checkForSelfCheck(this.gameControl.otherPlayer);
                  if(this.gameControl.wouldPutSelfInCheck === false) {
                    this.gameControl.draw = false;
                    this.gameControl.checkmate = false;
                  }
                  this.movePieceBack(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upRight[b]], pieceStore, pieceColorStore);
                  bishopStop = true;  
                  break;
              } 
            };
            b = 0;
            bishopStop = false;

            while (b < this.gameControl.squares[square].pieceMoves.bishop.downRight.length && bishopStop == false) {
              switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downRight[b]].pieceColor) {
                case this.gameControl.otherPlayer:
                  bishopStop = true;  
                  break;
                case '':
                  this.movePiece(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downRight[b]], this.gameControl.squares[square].piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downRight[b]].piece, this.gameControl.squares[square].pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downRight[b]].pieceColor, pieceStore, pieceColorStore);
                  this.checkForSelfCheck(this.gameControl.otherPlayer);
                  if(this.gameControl.wouldPutSelfInCheck === false) {
                    this.gameControl.draw = false;
                    this.gameControl.checkmate = false;
                  }
                  this.movePieceBack(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downRight[b]], pieceStore, pieceColorStore);
                  b++;
                  break;
                case this.gameControl.playerTurn:
                  this.movePiece(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downRight[b]], this.gameControl.squares[square].piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downRight[b]].piece, this.gameControl.squares[square].pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downRight[b]].pieceColor, pieceStore, pieceColorStore);
                  this.checkForSelfCheck(this.gameControl.otherPlayer);
                  if(this.gameControl.wouldPutSelfInCheck === false) {
                    this.gameControl.draw = false;
                    this.gameControl.checkmate = false;
                  }
                  this.movePieceBack(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downRight[b]], pieceStore, pieceColorStore);
                  bishopStop = true;  
                  break;
              } 
            };
            b = 0;
            bishopStop = false;

            while (b < this.gameControl.squares[square].pieceMoves.bishop.downLeft.length && bishopStop == false) {
              switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downLeft[b]].pieceColor) {
                case this.gameControl.otherPlayer:
                  bishopStop = true;  
                  break;
                case '':
                  this.movePiece(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downLeft[b]], this.gameControl.squares[square].piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downLeft[b]].piece, this.gameControl.squares[square].pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downLeft[b]].pieceColor, pieceStore, pieceColorStore);
                  this.checkForSelfCheck(this.gameControl.otherPlayer);
                  if(this.gameControl.wouldPutSelfInCheck === false) {
                    this.gameControl.draw = false;
                    this.gameControl.checkmate = false;
                  }
                  this.movePieceBack(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downLeft[b]], pieceStore, pieceColorStore);
                  b++;
                  break;
                case this.gameControl.playerTurn:
                  this.movePiece(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downLeft[b]], this.gameControl.squares[square].piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downLeft[b]].piece, this.gameControl.squares[square].pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downLeft[b]].pieceColor, pieceStore, pieceColorStore);
                  this.checkForSelfCheck(this.gameControl.otherPlayer);
                  if(this.gameControl.wouldPutSelfInCheck === false) {
                    this.gameControl.draw = false;
                    this.gameControl.checkmate = false;
                  }
                  this.movePieceBack(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downLeft[b]], pieceStore, pieceColorStore);
                  bishopStop = true;  
                  break;
              } 
            };
            break;
          case 'queen':
            this.testCode = 'made it inside queen'
            let c = 0;
            let queenStop = false;

            while (c < this.gameControl.squares[square].pieceMoves.queen.verticalUp.length && queenStop == false) {
              switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalUp[c]].pieceColor) {
                case this.gameControl.otherPlayer:
                  queenStop = true;  
                  break;
                case '':
                  this.movePiece(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalUp[c]], this.gameControl.squares[square].piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalUp[c]].piece, this.gameControl.squares[square].pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalUp[c]].pieceColor, pieceStore, pieceColorStore);
                  this.checkForSelfCheck(this.gameControl.otherPlayer);
                  if(this.gameControl.wouldPutSelfInCheck === false) {
                    this.gameControl.draw = false;
                    this.gameControl.checkmate = false;
                  }
                  this.movePieceBack(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalUp[c]], pieceStore, pieceColorStore);
                  c++;
                  break;
                case this.gameControl.playerTurn:
                  this.movePiece(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalUp[c]], this.gameControl.squares[square].piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalUp[c]].piece, this.gameControl.squares[square].pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalUp[c]].pieceColor, pieceStore, pieceColorStore);
                  this.checkForSelfCheck(this.gameControl.otherPlayer);
                  if(this.gameControl.wouldPutSelfInCheck === false) {
                    this.gameControl.draw = false;
                    this.gameControl.checkmate = false;
                  }
                  this.movePieceBack(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalUp[c]], pieceStore, pieceColorStore);
                  queenStop = true;  
                  break;
              } 
            };
            c = 0;
            queenStop = false;

            while (c < this.gameControl.squares[square].pieceMoves.queen.verticalDown.length && queenStop == false) {
              switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalDown[c]].pieceColor) {
                case this.gameControl.otherPlayer:
                  queenStop = true;  
                  break;
                case '':
                  this.movePiece(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalDown[c]], this.gameControl.squares[square].piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalDown[c]].piece, this.gameControl.squares[square].pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalDown[c]].pieceColor, pieceStore, pieceColorStore);
                  this.checkForSelfCheck(this.gameControl.otherPlayer);
                  if(this.gameControl.wouldPutSelfInCheck === false) {
                    this.gameControl.draw = false;
                    this.gameControl.checkmate = false;
                  }
                  this.movePieceBack(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalDown[c]], pieceStore, pieceColorStore);
                  c++;
                  break;
                case this.gameControl.playerTurn:
                  this.movePiece(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalDown[c]], this.gameControl.squares[square].piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalDown[c]].piece, this.gameControl.squares[square].pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalDown[c]].pieceColor, pieceStore, pieceColorStore);
                  this.checkForSelfCheck(this.gameControl.otherPlayer);
                  if(this.gameControl.wouldPutSelfInCheck === false) {
                    this.gameControl.draw = false;
                    this.gameControl.checkmate = false;
                  }
                  this.movePieceBack(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalDown[c]], pieceStore, pieceColorStore);
                  queenStop = true;  
                  break;
              } 
            };
            c = 0;
            queenStop = false;

            while (c < this.gameControl.squares[square].pieceMoves.queen.horizontalLeft.length && queenStop == false) {
              switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalLeft[c]].pieceColor) {
                case this.gameControl.otherPlayer:
                  queenStop = true;  
                  break;
                case '':
                  this.movePiece(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalLeft[c]], this.gameControl.squares[square].piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalLeft[c]].piece, this.gameControl.squares[square].pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalLeft[c]].pieceColor, pieceStore, pieceColorStore);
                  this.checkForSelfCheck(this.gameControl.otherPlayer);
                  if(this.gameControl.wouldPutSelfInCheck === false) {
                    this.gameControl.draw = false;
                    this.gameControl.checkmate = false;
                  }
                  this.movePieceBack(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalLeft[c]], pieceStore, pieceColorStore);
                  c++;
                  break;
                case this.gameControl.playerTurn:
                  this.movePiece(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalLeft[c]], this.gameControl.squares[square].piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalLeft[c]].piece, this.gameControl.squares[square].pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalLeft[c]].pieceColor, pieceStore, pieceColorStore);
                  this.checkForSelfCheck(this.gameControl.otherPlayer);
                  if(this.gameControl.wouldPutSelfInCheck === false) {
                    this.gameControl.draw = false;
                    this.gameControl.checkmate = false;
                  }
                  this.movePieceBack(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalLeft[c]], pieceStore, pieceColorStore);
                  queenStop = true;  
                  break;
              } 
            };
            c = 0;
            queenStop = false;

            while (c < this.gameControl.squares[square].pieceMoves.queen.horizontalRight.length && queenStop == false) {
              switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalRight[c]].pieceColor) {
                case this.gameControl.otherPlayer:
                  queenStop = true;  
                  break;
                case '':
                  this.movePiece(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalRight[c]], this.gameControl.squares[square].piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalRight[c]].piece, this.gameControl.squares[square].pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalRight[c]].pieceColor, pieceStore, pieceColorStore);
                  this.checkForSelfCheck(this.gameControl.otherPlayer);
                  if(this.gameControl.wouldPutSelfInCheck === false) {
                    this.gameControl.draw = false;
                    this.gameControl.checkmate = false;
                  }
                  this.movePieceBack(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalRight[c]], pieceStore, pieceColorStore);
                  c++;
                  break;
                case this.gameControl.playerTurn:
                  this.movePiece(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalRight[c]], this.gameControl.squares[square].piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalRight[c]].piece, this.gameControl.squares[square].pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalRight[c]].pieceColor, pieceStore, pieceColorStore);
                  this.checkForSelfCheck(this.gameControl.otherPlayer);
                  if(this.gameControl.wouldPutSelfInCheck === false) {
                    this.gameControl.draw = false;
                    this.gameControl.checkmate = false;
                  }
                  this.movePieceBack(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalRight[c]], pieceStore, pieceColorStore);
                  queenStop = true;  
                  break;
              } 
            };
            c = 0;
            queenStop = false;

            while (c < this.gameControl.squares[square].pieceMoves.queen.upLeft.length && queenStop == false) {
              switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upLeft[c]].pieceColor) {
                case this.gameControl.otherPlayer:
                  queenStop = true;  
                  break;
                case '':
                  this.movePiece(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upLeft[c]], this.gameControl.squares[square].piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upLeft[c]].piece, this.gameControl.squares[square].pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upLeft[c]].pieceColor, pieceStore, pieceColorStore);
                  this.checkForSelfCheck(this.gameControl.otherPlayer);
                  if(this.gameControl.wouldPutSelfInCheck === false) {
                    this.gameControl.draw = false;
                    this.gameControl.checkmate = false;
                  }
                  this.movePieceBack(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upLeft[c]], pieceStore, pieceColorStore);
                  c++;
                  break;
                case this.gameControl.playerTurn:
                  this.movePiece(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upLeft[c]], this.gameControl.squares[square].piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upLeft[c]].piece, this.gameControl.squares[square].pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upLeft[c]].pieceColor, pieceStore, pieceColorStore);
                  this.checkForSelfCheck(this.gameControl.otherPlayer);
                  if(this.gameControl.wouldPutSelfInCheck === false) {
                    this.gameControl.draw = false;
                    this.gameControl.checkmate = false;
                  }
                  this.movePieceBack(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upLeft[c]], pieceStore, pieceColorStore);
                  queenStop = true;  
                  break;
              } 
            };
            c = 0;
            queenStop = false;

            while (c < this.gameControl.squares[square].pieceMoves.queen.upRight.length && queenStop == false) {
              switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upRight[c]].pieceColor) {
                case this.gameControl.otherPlayer:
                  queenStop = true;  
                  break;
                case '':
                  this.movePiece(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upRight[c]], this.gameControl.squares[square].piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upRight[c]].piece, this.gameControl.squares[square].pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upRight[c]].pieceColor, pieceStore, pieceColorStore);
                  this.checkForSelfCheck(this.gameControl.otherPlayer);
                  if(this.gameControl.wouldPutSelfInCheck === false) {
                    this.gameControl.draw = false;
                    this.gameControl.checkmate = false;
                  }
                  this.movePieceBack(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upRight[c]], pieceStore, pieceColorStore);
                  c++;
                  break;
                case this.gameControl.playerTurn:
                  this.movePiece(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upRight[c]], this.gameControl.squares[square].piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upRight[c]].piece, this.gameControl.squares[square].pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upRight[c]].pieceColor, pieceStore, pieceColorStore);
                  this.checkForSelfCheck(this.gameControl.otherPlayer);
                  if(this.gameControl.wouldPutSelfInCheck === false) {
                    this.gameControl.draw = false;
                    this.gameControl.checkmate = false;
                  }
                  this.movePieceBack(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upRight[c]], pieceStore, pieceColorStore);
                  queenStop = true;  
                  break;
              } 
            };
            c = 0;
            queenStop = false;

            while (c < this.gameControl.squares[square].pieceMoves.queen.downRight.length && queenStop == false) {
              switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downRight[c]].pieceColor) {
                case this.gameControl.otherPlayer:
                  queenStop = true;  
                  break;
                case '':
                  this.movePiece(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downRight[c]], this.gameControl.squares[square].piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downRight[c]].piece, this.gameControl.squares[square].pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downRight[c]].pieceColor, pieceStore, pieceColorStore);
                  this.checkForSelfCheck(this.gameControl.otherPlayer);
                  if(this.gameControl.wouldPutSelfInCheck === false) {
                    this.gameControl.draw = false;
                    this.gameControl.checkmate = false;
                  }
                  this.movePieceBack(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downRight[c]], pieceStore, pieceColorStore);
                  c++;
                  break;
                case this.gameControl.playerTurn:
                  this.movePiece(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downRight[c]], this.gameControl.squares[square].piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downRight[c]].piece, this.gameControl.squares[square].pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downRight[c]].pieceColor, pieceStore, pieceColorStore);
                  this.checkForSelfCheck(this.gameControl.otherPlayer);
                  if(this.gameControl.wouldPutSelfInCheck === false) {
                    this.gameControl.draw = false;
                    this.gameControl.checkmate = false;
                  }
                  this.movePieceBack(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downRight[c]], pieceStore, pieceColorStore);
                  queenStop = true;  
                  break;
              } 
            };

            while (c < this.gameControl.squares[square].pieceMoves.queen.downLeft.length && queenStop == false) {
              switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downLeft[c]].pieceColor) {
                case this.gameControl.otherPlayer:
                  queenStop = true;  
                  break;
                case '':
                  this.movePiece(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downLeft[c]], this.gameControl.squares[square].piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downLeft[c]].piece, this.gameControl.squares[square].pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downLeft[c]].pieceColor, pieceStore, pieceColorStore);
                  this.checkForSelfCheck(this.gameControl.otherPlayer);
                  if(this.gameControl.wouldPutSelfInCheck === false) {
                    this.gameControl.draw = false;
                    this.gameControl.checkmate = false;
                  }
                  this.movePieceBack(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downLeft[c]], pieceStore, pieceColorStore);
                  c++;
                  break;
                case this.gameControl.playerTurn:
                  this.movePiece(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downLeft[c]], this.gameControl.squares[square].piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downLeft[c]].piece, this.gameControl.squares[square].pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downLeft[c]].pieceColor, pieceStore, pieceColorStore);
                  this.checkForSelfCheck(this.gameControl.otherPlayer);
                  if(this.gameControl.wouldPutSelfInCheck === false) {
                    this.gameControl.draw = false;
                    this.gameControl.checkmate = false;
                  }
                  this.movePieceBack(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downLeft[c]], pieceStore, pieceColorStore);
                  queenStop = true;  
                  break;
              } 
            };
            break;

          case 'king':
            this.testCode = 'made it inside king'
            for (let i = 0; i < this.gameControl.squares[square].pieceMoves.king.length; i++) {
              switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.king[i]].pieceColor) {
                case this.gameControl.otherPlayer:
                  break;
                case '':
                  this.testCode = 'king empty case reached';
                  this.movePiece(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.king[i]], this.gameControl.squares[square].piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.king[i]].piece, this.gameControl.squares[square].pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.king[i]].pieceColor, pieceStore, pieceColorStore);
                  this.checkForSelfCheck(this.gameControl.otherPlayer);
                  if(this.gameControl.wouldPutSelfInCheck === false) {
                    this.gameControl.draw = false;
                    this.gameControl.checkmate = false;
                  }
                  this.movePieceBack(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.king[i]], pieceStore, pieceColorStore);
                  i++;
                  break;
                case this.gameControl.playerTurn:
                  this.movePiece(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.king[i]], this.gameControl.squares[square].piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.king[i]].piece, this.gameControl.squares[square].pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.king[i]].pieceColor, pieceStore, pieceColorStore);
                  this.checkForSelfCheck(this.gameControl.otherPlayer);
                  if(this.gameControl.wouldPutSelfInCheck === false) {
                    this.gameControl.draw = false;
                    this.gameControl.checkmate = false;
                  }
                  this.movePieceBack(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.king[i]], pieceStore, pieceColorStore);
                  break;
              } 
            };
            break;

          case 'pawn':
            this.testCode = 'made it inside pawn'
            let f = 0;
            let pawnStop = false;

            if (this.gameControl.playerTurn === 'white') {
              while (f < this.gameControl.squares[square].pieceMoves.pawn.white.vertical.length && pawnStop === false) {
                switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.white.vertical[f]].pieceColor) {
                  case this.gameControl.otherPlayer:
                    pawnStop = true;
                    break;
                  case '':
                    this.movePiece(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.white.vertical[f]], this.gameControl.squares[square].piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.white.vertical[f]].piece, this.gameControl.squares[square].pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.white.vertical[f]].pieceColor, pieceStore, pieceColorStore);
                    this.checkForSelfCheck(this.gameControl.otherPlayer);
                    if(this.gameControl.wouldPutSelfInCheck === false) {
                      this.gameControl.draw = false;
                      // this.gameControl.checkmate = false;
                    }
                    this.movePieceBack(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.white.vertical[f]], pieceStore, pieceColorStore);
                    f++;
                    break;
                  case this.gameControl.playerTurn:
                    pawnStop = true;
                    break;
                }
              };
              for (let g = 0; g < this.gameControl.squares[square].pieceMoves.pawn.white.diagonal.length; g++) {
                switch(this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.white.diagonal[g]].pieceColor) {
                  case this.gameControl.otherPlayer:
                    break;
                  case '':
                    break;
                  case this.gameControl.playerTurn:
                    this.movePiece(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.white.diagonal[g]], this.gameControl.squares[square].piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.white.diagonal[g]].piece, this.gameControl.squares[square].pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.white.diagonal[g]].pieceColor, pieceStore, pieceColorStore);
                    this.checkForSelfCheck(this.gameControl.otherPlayer);
                    if(this.gameControl.wouldPutSelfInCheck === false) {
                      this.gameControl.draw = false;
                      // this.gameControl.checkmate = false;
                    }
                    this.movePieceBack(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.white.diagonal[g]], pieceStore, pieceColorStore);
                    break;
                }
              }
            } else if (this.gameControl.playerTurn === 'black') {
              while (f < this.gameControl.squares[square].pieceMoves.pawn.black.vertical.length && pawnStop === false) {
                switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.black.vertical[f]].pieceColor) {
                  case this.gameControl.otherPlayer:
                    pawnStop = true;
                    break;
                  case '':
                    this.movePiece(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.black.vertical[f]], this.gameControl.squares[square].piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.black.vertical[f]].piece, this.gameControl.squares[square].pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.black.vertical[f]].pieceColor, pieceStore, pieceColorStore);
                    this.checkForSelfCheck(this.gameControl.otherPlayer);
                    if(this.gameControl.wouldPutSelfInCheck === false) {
                      this.gameControl.draw = false;
                      // this.gameControl.checkmate = false;
                    }
                    this.movePieceBack(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.black.vertical[f]], pieceStore, pieceColorStore);
                    f++;
                    break;
                  case this.gameControl.playerTurn:
                    pawnStop = true;
                    break;
                }
              };
              for (let g = 0; g < this.gameControl.squares[square].pieceMoves.pawn.black.diagonal.length; g++) {
                switch(this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.black.diagonal[g]].pieceColor) {
                  case this.gameControl.otherPlayer:
                    break;
                  case '':
                    break;
                  case this.gameControl.playerTurn:
                    this.movePiece(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.black.diagonal[g]], this.gameControl.squares[square].piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.black.diagonal[g]].piece, this.gameControl.squares[square].pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.black.diagonal[g]].pieceColor, pieceStore, pieceColorStore);
                    this.checkForSelfCheck(this.gameControl.otherPlayer);
                    if(this.gameControl.wouldPutSelfInCheck === false) {
                      this.gameControl.draw = false;
                      // this.gameControl.checkmate = false;
                    }
                    this.movePieceBack(this.gameControl.squares[square], this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.black.diagonal[g]], pieceStore, pieceColorStore);
                    break;
                }
              }
            }
            break;
        }
        this.testCode = 'checkForDraw exited'
      }
    }
  }

  

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  processSquareClicked(clickedSquare) {
    let pieceStore = [];
    let pieceColorStore = [];
    switch (this.gameControl.clickCount) {
      case 0: 
        this.testCode = 'processSquareClicked case 0 entered'
        this.gameControl.pieceInPlay.position = clickedSquare.position;
        this.gameControl.pieceInPlay.piece = clickedSquare.piece;
        this.gameControl.pieceInPlay.pieceColor = clickedSquare.pieceColor;
        
        for (let square in this.gameControl.squares) {
          if (this.gameControl.squares[square].position === clickedSquare.position) {
            this.gameControl.squares[square].clickable = false;
            switch (this.gameControl.squares[square].piece) {
              case 'rook':
                  let a = 0;
                  let rookStop = false;
                  
                  while (a < this.gameControl.squares[square].pieceMoves.rook.verticalUp.length && rookStop == false) {
                    switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalUp[a]].pieceColor) {
                      case this.gameControl.playerTurn:
                        this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalUp[a]].clickable = true;
                        rookStop = true;  
                        break;
                      case '':
                        this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalUp[a]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalUp[a]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalUp[a]].pieceColor, pieceStore, pieceColorStore);
                        this.checkForSelfCheck(this.gameControl.playerTurn);
                        if(this.gameControl.wouldPutSelfInCheck === false) {
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalUp[a]].clickable = true;
                        }
                        this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalUp[a]], pieceStore, pieceColorStore);
                        a++;
                        break;
                      case this.gameControl.otherPlayer:
                        this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalUp[a]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalUp[a]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalUp[a]].pieceColor, pieceStore, pieceColorStore);
                        this.checkForSelfCheck(this.gameControl.playerTurn);
                        if(this.gameControl.wouldPutSelfInCheck === false) {
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalUp[a]].clickable = true;
                        }
                        this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalUp[a]], pieceStore, pieceColorStore);
                        rookStop = true;  
                        break;
                    } 
                  };
                  a = 0;
                  rookStop = false;

                  while (a < this.gameControl.squares[square].pieceMoves.rook.verticalDown.length && rookStop == false) {
                    switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalDown[a]].pieceColor) {
                      case this.gameControl.playerTurn:
                        this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalDown[a]].clickable = true;
                        rookStop = true;  
                        break;
                      case '':
                        this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalDown[a]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalDown[a]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalDown[a]].pieceColor, pieceStore, pieceColorStore);
                        this.checkForSelfCheck(this.gameControl.playerTurn);
                        if(this.gameControl.wouldPutSelfInCheck === false) {
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalDown[a]].clickable = true;
                        }
                        this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalDown[a]], pieceStore, pieceColorStore);
                        a++;
                        break;
                      case this.gameControl.otherPlayer:
                        this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalDown[a]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalDown[a]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalDown[a]].pieceColor, pieceStore, pieceColorStore);
                        this.checkForSelfCheck(this.gameControl.playerTurn);
                        if(this.gameControl.wouldPutSelfInCheck === false) {
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalDown[a]].clickable = true;
                        }
                        this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalDown[a]], pieceStore, pieceColorStore);
                        rookStop = true;  
                        break;
                    }
                  };
                  a = 0;
                  rookStop = false;

                  while (a < this.gameControl.squares[square].pieceMoves.rook.horizontalLeft.length && rookStop == false) {
                    switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalLeft[a]].pieceColor) {
                      case this.gameControl.playerTurn:
                        this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalLeft[a]].clickable = true;
                        rookStop = true;  
                        break;
                      case '':
                        this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalLeft[a]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalLeft[a]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalLeft[a]].pieceColor, pieceStore, pieceColorStore);
                        this.checkForSelfCheck(this.gameControl.playerTurn);
                        if(this.gameControl.wouldPutSelfInCheck === false) {
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalLeft[a]].clickable = true;
                        }
                        this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalLeft[a]], pieceStore, pieceColorStore);
                        a++;
                        break;
                      case this.gameControl.otherPlayer:
                        this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalLeft[a]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalLeft[a]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalLeft[a]].pieceColor, pieceStore, pieceColorStore);
                        this.checkForSelfCheck(this.gameControl.playerTurn);
                        if(this.gameControl.wouldPutSelfInCheck === false) {
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalLeft[a]].clickable = true;
                        }
                        this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalLeft[a]], pieceStore, pieceColorStore);
                        rookStop = true;  
                        break;
                      
                    }
                  };
                  a = 0;
                  rookStop = false;

                  while (a < this.gameControl.squares[square].pieceMoves.rook.horizontalRight.length && rookStop == false) {
                    switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalRight[a]].pieceColor) {
                      case this.gameControl.playerTurn:
                        this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalRight[a]].clickable = true;
                        rookStop = true;  
                        break;
                      case '':
                        this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalRight[a]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalRight[a]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalRight[a]].pieceColor, pieceStore, pieceColorStore);
                        this.checkForSelfCheck(this.gameControl.playerTurn);
                        if(this.gameControl.wouldPutSelfInCheck === false) {
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalRight[a]].clickable = true;
                        }
                        this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalRight[a]], pieceStore, pieceColorStore);
                        a++;
                        break;
                      case this.gameControl.otherPlayer:
                        this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalRight[a]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalRight[a]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalRight[a]].pieceColor, pieceStore, pieceColorStore);
                        this.checkForSelfCheck(this.gameControl.playerTurn);
                        if(this.gameControl.wouldPutSelfInCheck === false) {
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalRight[a]].clickable = true;
                        }
                        this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalRight[a]], pieceStore, pieceColorStore);
                        rookStop = true;  
                        break;
                    }
                  };
                  this.testCode = 'rook exited'

                break;
              case 'knight':
                  for (let i = 0; i < this.gameControl.squares[square].pieceMoves.knight.length; i++) {
                    switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.knight[i]].pieceColor) {
                      case this.gameControl.playerTurn:
                        this.testCode = 'knight accessed'
                        this.gameControl.squares[this.gameControl.squares[square].pieceMoves.knight[i]].clickable = true;
                        break;
                      case '':
                        this.testCode = 'empty accessed'
                        this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.knight[i]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.knight[i]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.knight[i]].pieceColor, pieceStore, pieceColorStore);
                        this.checkForSelfCheck(this.gameControl.playerTurn);
                        if(this.gameControl.wouldPutSelfInCheck === false) {
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.knight[i]].clickable = true;
                        }
                        this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.knight[i]], pieceStore, pieceColorStore);
                        break;
                      case this.gameControl.otherPlayer:
                        this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.knight[i]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.knight[i]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.knight[i]].pieceColor, pieceStore, pieceColorStore);
                        this.checkForSelfCheck(this.gameControl.playerTurn);
                        if(this.gameControl.wouldPutSelfInCheck === false) {
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.knight[i]].clickable = true;
                        }
                        this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.knight[i]], pieceStore, pieceColorStore);
                        break;
                    }
                  }
                break;
              case 'bishop':
                  let b = 0;
                  let bishopStop = false;
                  
                  while (b < this.gameControl.squares[square].pieceMoves.bishop.upLeft.length && bishopStop == false) {
                    switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upLeft[b]].pieceColor) {
                      case this.gameControl.playerTurn:
                        this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upLeft[b]].clickable = true;
                        bishopStop = true;  
                        break;
                      case '':
                        this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upLeft[b]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upLeft[b]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upLeft[b]].pieceColor, pieceStore, pieceColorStore);
                        this.checkForSelfCheck(this.gameControl.playerTurn);
                        if(this.gameControl.wouldPutSelfInCheck === false) {
                            this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upLeft[b]].clickable = true;
                        }
                        this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upLeft[b]], pieceStore, pieceColorStore);
                        b++;
                        break; 
                      case this.gameControl.otherPlayer:
                        this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upLeft[b]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upLeft[b]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upLeft[b]].pieceColor, pieceStore, pieceColorStore);
                        this.checkForSelfCheck(this.gameControl.playerTurn);
                        if(this.gameControl.wouldPutSelfInCheck === false) {
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upLeft[b]].clickable = true;
                        }
                        this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upLeft[b]], pieceStore, pieceColorStore);
                        bishopStop = true;  
                        break; 
                    }
                  };
                  b = 0;
                  bishopStop = false;

                  while (b < this.gameControl.squares[square].pieceMoves.bishop.upRight.length && bishopStop == false) {
                    switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upRight[b]].pieceColor) {
                      case this.gameControl.playerTurn:
                        this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upRight[b]].clickable = true;
                        bishopStop = true;  
                        break;
                      case '':
                        this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upRight[b]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upRight[b]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upRight[b]].pieceColor, pieceStore, pieceColorStore);
                        this.checkForSelfCheck(this.gameControl.playerTurn);
                        if(this.gameControl.wouldPutSelfInCheck === false) {
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upRight[b]].clickable = true;
                        }
                        this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upRight[b]], pieceStore, pieceColorStore);
                        b++;
                        break;
                      case this.gameControl.otherPlayer:
                        this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upRight[b]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upRight[b]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upRight[b]].pieceColor, pieceStore, pieceColorStore);
                        this.checkForSelfCheck(this.gameControl.playerTurn);
                        if(this.gameControl.wouldPutSelfInCheck === false) {
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upRight[b]].clickable = true;
                        }
                        this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upRight[b]], pieceStore, pieceColorStore);
                        bishopStop = true;  
                        break;
                    }
                  };
                  b = 0;
                  bishopStop = false;

                  while (b < this.gameControl.squares[square].pieceMoves.bishop.downRight.length && bishopStop == false) {
                    switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downRight[b]].pieceColor) {
                      case this.gameControl.playerTurn:
                        this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downRight[b]].clickable = true;
                        bishopStop = true;  
                        break;
                      case '':
                        this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downRight[b]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downRight[b]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downRight[b]].pieceColor, pieceStore, pieceColorStore);
                        this.checkForSelfCheck(this.gameControl.playerTurn);
                        if(this.gameControl.wouldPutSelfInCheck === false) {
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downRight[b]].clickable = true;
                        }
                        this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downRight[b]], pieceStore, pieceColorStore);
                        b++;
                        break;  
                      case this.gameControl.otherPlayer:
                        this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downRight[b]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downRight[b]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downRight[b]].pieceColor, pieceStore, pieceColorStore);
                        this.checkForSelfCheck(this.gameControl.playerTurn);
                        if(this.gameControl.wouldPutSelfInCheck === false) {
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downRight[b]].clickable = true;
                        }
                        this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downRight[b]], pieceStore, pieceColorStore);
                        bishopStop = true;  
                        break;
                    }
                  };
                  b = 0;
                  bishopStop = false;

                  while (b < this.gameControl.squares[square].pieceMoves.bishop.downLeft.length && bishopStop == false) {
                    switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downLeft[b]].pieceColor) {
                      case this.gameControl.playerTurn:
                        this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downLeft[b]].clickable = true;
                        bishopStop = true;  
                        break;
                      case '':
                        this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downLeft[b]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downLeft[b]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downLeft[b]].pieceColor, pieceStore, pieceColorStore);
                        this.checkForSelfCheck(this.gameControl.playerTurn);
                        if(this.gameControl.wouldPutSelfInCheck === false) {
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downLeft[b]].clickable = true;
                        }
                        this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downLeft[b]], pieceStore, pieceColorStore);
                        b++;
                        break;
                      case this.gameControl.otherPlayer:
                        this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downLeft[b]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downLeft[b]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downLeft[b]].pieceColor, pieceStore, pieceColorStore);
                        this.checkForSelfCheck(this.gameControl.playerTurn);
                        if(this.gameControl.wouldPutSelfInCheck === false) {
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downLeft[b]].clickable = true;
                        }
                        this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downLeft[b]], pieceStore, pieceColorStore);
                        bishopStop = true;  
                        break;
                    }
                  };  
                break;
              case 'queen':
                  let c = 0;
                  let queenStop = false;
                  while (c < this.gameControl.squares[square].pieceMoves.queen.verticalUp.length && queenStop == false) {
                    switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalUp[c]].pieceColor) {
                      case this.gameControl.playerTurn:
                        this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalUp[c]].clickable = true;
                        queenStop = true;  
                        break;
                      case '':
                          this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalUp[c]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalUp[c]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalUp[c]].pieceColor, pieceStore, pieceColorStore);
                          this.checkForSelfCheck(this.gameControl.playerTurn);
                          if(this.gameControl.wouldPutSelfInCheck === false) {
                            this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalUp[c]].clickable = true;
                          }
                          this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalUp[c]], pieceStore, pieceColorStore);
                        c++;
                        break;
                      case this.gameControl.otherPlayer:
                        this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalUp[c]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalUp[c]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalUp[c]].pieceColor, pieceStore, pieceColorStore);
                        this.checkForSelfCheck(this.gameControl.playerTurn);
                        if(this.gameControl.wouldPutSelfInCheck === false) {
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalUp[c]].clickable = true;
                        }
                        this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalUp[c]], pieceStore, pieceColorStore);
                        queenStop = true;  
                        break;
                    }
                  };
                  c = 0;
                  queenStop = false;

                  while (c < this.gameControl.squares[square].pieceMoves.queen.verticalDown.length && queenStop == false) {
                    switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalDown[c]].pieceColor) {
                      case this.gameControl.playerTurn:
                        this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalDown[c]].clickable = true;
                        queenStop = true;  
                        break;
                      case '':
                        this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalDown[c]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalDown[c]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalDown[c]].pieceColor, pieceStore, pieceColorStore);
                        this.checkForSelfCheck(this.gameControl.playerTurn);
                        if(this.gameControl.wouldPutSelfInCheck === false) {
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalDown[c]].clickable = true;
                        }
                        this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalDown[c]], pieceStore, pieceColorStore);
                        c++;
                        break;
                      case this.gameControl.otherPlayer:
                        this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalDown[c]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalDown[c]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalDown[c]].pieceColor, pieceStore, pieceColorStore);
                        this.checkForSelfCheck(this.gameControl.playerTurn);
                        if(this.gameControl.wouldPutSelfInCheck === false) {
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalDown[c]].clickable = true;
                        }
                        this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalDown[c]], pieceStore, pieceColorStore);
                        queenStop = true;  
                        break;
                    }
                  };
                  c = 0;
                  queenStop = false;

                  while (c < this.gameControl.squares[square].pieceMoves.queen.horizontalLeft.length && queenStop == false) {
                    switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalLeft[c]].pieceColor) {
                      case this.gameControl.playerTurn:
                        this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalLeft[c]].clickable = true;
                        queenStop = true;  
                        break;
                      case '':
                        this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalLeft[c]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalLeft[c]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalLeft[c]].pieceColor, pieceStore, pieceColorStore);
                        this.checkForSelfCheck(this.gameControl.playerTurn);
                        if(this.gameControl.wouldPutSelfInCheck === false) {
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalLeft[c]].clickable = true;
                        }
                        this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalLeft[c]], pieceStore, pieceColorStore);
                        c++;
                        break;
                      case this.gameControl.otherPlayer:
                        this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalLeft[c]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalLeft[c]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalLeft[c]].pieceColor, pieceStore, pieceColorStore);
                        this.checkForSelfCheck(this.gameControl.playerTurn);
                        if(this.gameControl.wouldPutSelfInCheck === false) {
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalLeft[c]].clickable = true;
                        }
                        this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalLeft[c]], pieceStore, pieceColorStore);
                        queenStop = true;  
                        break;
                    }
                  };
                  c = 0;
                  queenStop = false;

                  while (c < this.gameControl.squares[square].pieceMoves.queen.horizontalRight.length && queenStop == false) {
                    switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalRight[c]].pieceColor) {
                      case this.gameControl.playerTurn:
                        this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalRight[c]].clickable = true;
                        queenStop = true;  
                        break;
                      case '':
                        this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalRight[c]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalRight[c]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalRight[c]].pieceColor, pieceStore, pieceColorStore);
                        this.checkForSelfCheck(this.gameControl.playerTurn);
                        if(this.gameControl.wouldPutSelfInCheck === false) {
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalRight[c]].clickable = true;
                        }
                        this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalRight[c]], pieceStore, pieceColorStore);
                        c++;
                        break;
                      case this.gameControl.otherPlayer:
                        this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalRight[c]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalRight[c]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalRight[c]].pieceColor, pieceStore, pieceColorStore);
                        this.checkForSelfCheck(this.gameControl.playerTurn);
                        if(this.gameControl.wouldPutSelfInCheck === false) {
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalRight[c]].clickable = true;
                        }
                        this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalRight[c]], pieceStore, pieceColorStore);
                        queenStop = true;  
                        break;
                    }
                  };
                  c = 0;
                  queenStop = false;
                  
                  while (c < this.gameControl.squares[square].pieceMoves.queen.upLeft.length && queenStop == false) {
                    switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upLeft[c]].pieceColor) {
                      case this.gameControl.playerTurn:
                        this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upLeft[c]].clickable = true;
                        queenStop = true;  
                        break;
                      case '':
                        this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upLeft[c]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upLeft[c]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upLeft[c]].pieceColor, pieceStore, pieceColorStore);
                        this.checkForSelfCheck(this.gameControl.playerTurn);
                        if(this.gameControl.wouldPutSelfInCheck === false) {
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upLeft[c]].clickable = true;
                        }
                        this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upLeft[c]], pieceStore, pieceColorStore);
                        c++;
                        break;
                      case this.gameControl.otherPlayer:
                        this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upLeft[c]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upLeft[c]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upLeft[c]].pieceColor, pieceStore, pieceColorStore);
                        this.checkForSelfCheck(this.gameControl.playerTurn);
                        if(this.gameControl.wouldPutSelfInCheck === false) {
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upLeft[c]].clickable = true;
                        }
                        this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upLeft[c]], pieceStore, pieceColorStore);
                        queenStop = true;  
                        break;
                    }
                  };
                  c = 0;
                  queenStop = false;

                  while (c < this.gameControl.squares[square].pieceMoves.queen.upRight.length && queenStop == false) {
                    switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upRight[c]].pieceColor) {
                      case this.gameControl.playerTurn:
                        this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upRight[c]].clickable = true;
                        queenStop = true;  
                        break;
                      case '':
                        this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upRight[c]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upRight[c]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upRight[c]].pieceColor, pieceStore, pieceColorStore);
                        this.checkForSelfCheck(this.gameControl.playerTurn);
                        if(this.gameControl.wouldPutSelfInCheck === false) {
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upRight[c]].clickable = true;
                        }
                        this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upRight[c]], pieceStore, pieceColorStore);
                        c++;
                        break;
                      case this.gameControl.otherPlayer:
                        this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upRight[c]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upRight[c]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upRight[c]].pieceColor, pieceStore, pieceColorStore);
                        this.checkForSelfCheck(this.gameControl.playerTurn);
                        if(this.gameControl.wouldPutSelfInCheck === false) {
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upRight[c]].clickable = true;
                        }
                        this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upRight[c]], pieceStore, pieceColorStore);
                        queenStop = true;  
                        break;
                    }
                  };
                  c = 0;
                  queenStop = false;

                  while (c < this.gameControl.squares[square].pieceMoves.queen.downRight.length && queenStop == false) {
                    switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downRight[c]].pieceColor) {
                      case this.gameControl.playerTurn:
                        this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downRight[c]].clickable = true;
                        queenStop = true;  
                        break;
                      case '':
                        this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downRight[c]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downRight[c]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downRight[c]].pieceColor, pieceStore, pieceColorStore);
                        this.checkForSelfCheck(this.gameControl.playerTurn);
                        if(this.gameControl.wouldPutSelfInCheck === false) {
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downRight[c]].clickable = true;
                        }
                        this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downRight[c]], pieceStore, pieceColorStore);
                        c++;
                        break;
                      case this.gameControl.otherPlayer:
                        this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downRight[c]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downRight[c]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downRight[c]].pieceColor, pieceStore, pieceColorStore);
                        this.checkForSelfCheck(this.gameControl.playerTurn);
                        if(this.gameControl.wouldPutSelfInCheck === false) {
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downRight[c]].clickable = true;
                        }
                        this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downRight[c]], pieceStore, pieceColorStore);
                        queenStop = true;  
                        break;
                    }
                  };
                  c = 0;
                  queenStop = false;

                  while (c < this.gameControl.squares[square].pieceMoves.queen.downLeft.length && queenStop == false) {
                    switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downLeft[c]].pieceColor) {
                      case this.gameControl.playerTurn:
                        this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downLeft[c]].clickable = true;
                        queenStop = true;  
                        break;
                      case '':
                        this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downLeft[c]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downLeft[c]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downLeft[c]].pieceColor, pieceStore, pieceColorStore);
                        this.checkForSelfCheck(this.gameControl.playerTurn);
                        if(this.gameControl.wouldPutSelfInCheck === false) {
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downLeft[c]].clickable = true;
                        }
                        this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downLeft[c]], pieceStore, pieceColorStore);
                        c++;
                        break;
                      case this.gameControl.otherPlayer:
                        this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downLeft[c]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downLeft[c]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downLeft[c]].pieceColor, pieceStore, pieceColorStore);
                        this.checkForSelfCheck(this.gameControl.playerTurn);
                        if(this.gameControl.wouldPutSelfInCheck === false) {
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downLeft[c]].clickable = true;
                        }
                        this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downLeft[c]], pieceStore, pieceColorStore);
                        queenStop = true;  
                        break;
                    }
                  };  
                break;  
              case 'king':
                  for (let i = 0; i < this.gameControl.squares[square].pieceMoves.king.length; i++) {
                    switch(this.gameControl.squares[this.gameControl.squares[square].pieceMoves.king[i]].pieceColor) {
                      case this.gameControl.playerTurn:
                        this.gameControl.squares[this.gameControl.squares[square].pieceMoves.king[i]].clickable = true;
                        break;
                      case '':
                        this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.king[i]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.king[i]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.king[i]].pieceColor, pieceStore, pieceColorStore);
                        this.checkForSelfCheck(this.gameControl.playerTurn);
                        if(this.gameControl.wouldPutSelfInCheck === false) {
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.king[i]].clickable = true;
                        }
                        this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.king[i]], pieceStore, pieceColorStore);
                        break;
                      case this.gameControl.otherPlayer:
                        this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.king[i]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.king[i]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.king[i]].pieceColor, pieceStore, pieceColorStore);
                        this.checkForSelfCheck(this.gameControl.playerTurn);
                        if(this.gameControl.wouldPutSelfInCheck === false) {
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.king[i]].clickable = true;
                        }
                        this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.king[i]], pieceStore, pieceColorStore);
                        break;
                    }
                  };
                  //castle logic
                  if (clickedSquare.position === 'e1') {
                    if (this.gameControl.squares.d1.piece === '' && this.gameControl.squares.c1.piece === '' && this.gameControl.squares.b1.piece === '' && this.gameControl.squares.a1.piece === 'rook' && this.gameControl.whiteLeftCastleBlocked === false) {
                      let castleCheck = false;

                      this.checkForSelfCheck('white');
                      if(this.gameControl.wouldPutSelfInCheck === true) {
                        castleCheck = true;
                      }

                      this.movePiece(this.gameControl.squares.e1, this.gameControl.squares.d1, 'king', '', 'white', '', pieceStore, pieceColorStore);
                      this.checkForSelfCheck('white');
                      if(this.gameControl.wouldPutSelfInCheck === true) {
                        castleCheck = true;
                      }
                      this.movePieceBack(this.gameControl.squares.e1, this.gameControl.squares.d1, pieceStore, pieceColorStore);
                      
                      this.movePiece(this.gameControl.squares.e1, this.gameControl.squares.c1, 'king', '', 'white', '', pieceStore, pieceColorStore);
                      this.checkForSelfCheck('white');
                      if(this.gameControl.wouldPutSelfInCheck === true) {
                        castleCheck = true;
                      }
                      this.movePieceBack(this.gameControl.squares.e1, this.gameControl.squares.c1, pieceStore, pieceColorStore);

                      this.movePiece(this.gameControl.squares.e1, this.gameControl.squares.b1, 'king', '', 'white', '', pieceStore, pieceColorStore);
                      this.checkForSelfCheck('white');
                      if(this.gameControl.wouldPutSelfInCheck === true) {
                        castleCheck = true;
                      }
                      this.movePieceBack(this.gameControl.squares.e1, this.gameControl.squares.b1, pieceStore, pieceColorStore);

                      if(castleCheck === false) {
                        this.gameControl.squares.b1.clickable = true;
                      }
                    };
                    if (this.gameControl.squares.f1.piece === '' && this.gameControl.squares.g1.piece === '' && this.gameControl.squares.h1.piece === 'rook' && this.gameControl.whiteRightCastleBlocked === false) {
                      let castleCheck = false;

                      this.checkForSelfCheck('white');
                      if(this.gameControl.wouldPutSelfInCheck === true) {
                        castleCheck = true;
                      }

                      this.movePiece(this.gameControl.squares.e1, this.gameControl.squares.f1, 'king', '', 'white', '', pieceStore, pieceColorStore);
                      this.checkForSelfCheck('white');
                      if(this.gameControl.wouldPutSelfInCheck === true) {
                        castleCheck = true;
                      }
                      this.movePieceBack(this.gameControl.squares.e1, this.gameControl.squares.f1, pieceStore, pieceColorStore);   
                      
                      this.movePiece(this.gameControl.squares.e1, this.gameControl.squares.g1, 'king', '', 'white', '', pieceStore, pieceColorStore);
                      this.checkForSelfCheck('white');
                      if(this.gameControl.wouldPutSelfInCheck === true) {
                        castleCheck = true;
                      }
                      this.movePieceBack(this.gameControl.squares.e1, this.gameControl.squares.g1, pieceStore, pieceColorStore);

                      if(castleCheck === false) {
                        this.gameControl.squares.g1.clickable = true;
                      }
                    }
                  } else if (clickedSquare.position === 'e8') {
                    if (this.gameControl.squares.d8.piece === '' && this.gameControl.squares.c8.piece === '' && this.gameControl.squares.b8.piece === '' && this.gameControl.squares.a8.piece === 'rook' && this.gameControl.blackRightCastleBlocked === false) {
                      let castleCheck = false;
                      this.checkForSelfCheck('black');
                      if(this.gameControl.wouldPutSelfInCheck === true) {
                        castleCheck = true;
                      }
                      this.movePiece(this.gameControl.squares.e8, this.gameControl.squares.d8, 'king', '', 'black', '', pieceStore, pieceColorStore);
                      this.checkForSelfCheck('black');
                      if(this.gameControl.wouldPutSelfInCheck === true) {
                        castleCheck = true;
                      }
                      this.movePieceBack(this.gameControl.squares.e8, this.gameControl.squares.d8, pieceStore, pieceColorStore);
                      
                      this.movePiece(this.gameControl.squares.e8, this.gameControl.squares.c8, 'king', '', 'black', '', pieceStore, pieceColorStore);
                      this.checkForSelfCheck('black');
                      if(this.gameControl.wouldPutSelfInCheck === true) {
                        castleCheck = true;
                      }
                      this.movePieceBack(this.gameControl.squares.e8, this.gameControl.squares.c8, pieceStore, pieceColorStore);

                      this.movePiece(this.gameControl.squares.e8, this.gameControl.squares.b8, 'king', '', 'black', '', pieceStore, pieceColorStore);
                      this.checkForSelfCheck('black');
                      if(this.gameControl.wouldPutSelfInCheck === true) {
                        castleCheck = true;
                      }
                      this.movePieceBack(this.gameControl.squares.e8, this.gameControl.squares.b8, pieceStore, pieceColorStore);

                      if(castleCheck === false) {
                        this.gameControl.squares.b8.clickable = true;
                      }
                    };
                    if (this.gameControl.squares.f8.piece === '' && this.gameControl.squares.g8.piece === '' && this.gameControl.squares.h8.piece === 'rook' && this.gameControl.blackLeftCastleBlocked === false) {
                      let castleCheck = false;

                      this.checkForSelfCheck('black');
                      if(this.gameControl.wouldPutSelfInCheck === true) {
                        castleCheck = true;
                      }

                      this.movePiece(this.gameControl.squares.e8, this.gameControl.squares.f8, 'king', '', 'black', '', pieceStore, pieceColorStore);
                      this.checkForSelfCheck('black');
                      if(this.gameControl.wouldPutSelfInCheck === true) {
                        castleCheck = true;
                      }
                      this.movePieceBack(this.gameControl.squares.e8, this.gameControl.squares.f8, pieceStore, pieceColorStore);   
                      
                      this.movePiece(this.gameControl.squares.e8, this.gameControl.squares.g8, 'king', '', 'black', '', pieceStore, pieceColorStore);
                      this.checkForSelfCheck('black');
                      if(this.gameControl.wouldPutSelfInCheck === true) {
                        castleCheck = true;
                      }
                      this.movePieceBack(this.gameControl.squares.e8, this.gameControl.squares.g8, pieceStore, pieceColorStore);

                      if(castleCheck === false) {
                        this.gameControl.squares.g8.clickable = true;
                      }
                    }
                  }

                break;
              case 'pawn':
                let f = 0;
                let pawnStop = false;

                if (this.gameControl.playerTurn === 'white') {
                  while (f < this.gameControl.squares[square].pieceMoves.pawn.white.vertical.length && pawnStop === false) {
                    switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.white.vertical[f]].pieceColor) {
                      case this.gameControl.playerTurn:
                        this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.white.vertical[f]].clickable = true;
                        pawnStop = true;  
                        break;
                      case '':
                        this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.white.vertical[f]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.white.vertical[f]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.white.vertical[f]].pieceColor, pieceStore, pieceColorStore);
                        this.checkForSelfCheck(this.gameControl.playerTurn);
                        if(this.gameControl.wouldPutSelfInCheck === false) {
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.white.vertical[f]].clickable = true;
                        }
                        this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.white.vertical[f]], pieceStore, pieceColorStore);
                        f++;
                        break;
                      case this.gameControl.otherPlayer:
                        pawnStop = true;
                        break;
                    }
                  };
                  for (let g = 0; g < this.gameControl.squares[square].pieceMoves.pawn.white.diagonal.length; g++) {
                    switch(this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.white.diagonal[g]].pieceColor) {
                      case this.gameControl.playerTurn:
                        this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.white.diagonal[g]].clickable = true;
                        break;
                      case '': 
                        break;
                      case this.gameControl.otherPlayer:
                        this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.white.diagonal[g]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.white.diagonal[g]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.white.diagonal[g]].pieceColor, pieceStore, pieceColorStore);
                        this.checkForSelfCheck(this.gameControl.playerTurn);
                        if(this.gameControl.wouldPutSelfInCheck === false) {
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.white.diagonal[g]].clickable = true;
                        }
                        this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.white.diagonal[g]], pieceStore, pieceColorStore);
                        break;
                    }
                  }
                } else if (this.gameControl.playerTurn === 'black') {
                  while (f < this.gameControl.squares[square].pieceMoves.pawn.black.vertical.length && pawnStop === false) {
                    switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.black.vertical[f]].pieceColor) {
                      case this.gameControl.playerTurn:
                        this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.black.vertical[f]].clickable = true;
                        pawnStop = true;  
                        break;
                      case '':
                        this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.black.vertical[f]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.black.vertical[f]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.black.vertical[f]].pieceColor, pieceStore, pieceColorStore);
                        this.checkForSelfCheck(this.gameControl.playerTurn);
                        if(this.gameControl.wouldPutSelfInCheck === false) {
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.black.vertical[f]].clickable = true;
                        }
                        this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.black.vertical[f]], pieceStore, pieceColorStore);
                        f++;
                        break;
                      case this.gameControl.otherPlayer:
                        pawnStop = true;
                        break;
                    }
                  };
                  for (let g = 0; g < this.gameControl.squares[square].pieceMoves.pawn.black.diagonal.length; g++) {
                    switch(this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.black.diagonal[g]].pieceColor) {
                      case this.gameControl.playerTurn:
                        this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.black.diagonal[g]].clickable = true;
                        break;
                      case '': 
                        break;
                      case this.gameControl.otherPlayer:
                        this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.black.diagonal[g]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.black.diagonal[g]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.black.diagonal[g]].pieceColor, pieceStore, pieceColorStore);
                        this.checkForSelfCheck(this.gameControl.playerTurn);
                        if(this.gameControl.wouldPutSelfInCheck === false) {
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.black.diagonal[g]].clickable = true;
                        }
                        this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.black.diagonal[g]], pieceStore, pieceColorStore)
                        break;
                    }
                  }
                }
                break;   
            }
          }
        }
        this.testCode = 'processSquareClicked finished except for increasing clickCount'
        this.gameControl.clickCount = 1;
        this.testCode = 'clickCount increased'
        break;
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      case 1:
        this.testCode = 'processSquareClicked case 1 entered';
        if (this.gameControl.pieceInPlay.pieceColor === clickedSquare.pieceColor) {
          this.gameControl.pieceInPlay.position = clickedSquare.position;
          this.gameControl.pieceInPlay.piece = clickedSquare.piece;
          this.gameControl.pieceInPlay.pieceColor = clickedSquare.pieceColor;

          for (let square in this.gameControl.squares) {
            if (this.gameControl.squares[square].pieceColor !== this.gameControl.playerTurn) {
              this.gameControl.squares[square].clickable = false
            } else if (this.gameControl.squares[square].pieceColor === this.gameControl.playerTurn) {
              this.gameControl.squares[square].clickable = true
            }
          }
          
          for (let square in this.gameControl.squares) {
            if (this.gameControl.squares[square].position === clickedSquare.position) {
              this.gameControl.squares[square].clickable = false;
              switch (this.gameControl.squares[square].piece) {
                case 'rook':
                    let a = 0;
                    let rookStop = false;
                    
                    while (a < this.gameControl.squares[square].pieceMoves.rook.verticalUp.length && rookStop == false) {
                      switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalUp[a]].pieceColor) {
                        case this.gameControl.playerTurn:
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalUp[a]].clickable = true;
                          rookStop = true;  
                          break;
                        case '':
                          this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalUp[a]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalUp[a]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalUp[a]].pieceColor, pieceStore, pieceColorStore);
                          this.checkForSelfCheck(this.gameControl.playerTurn);
                          if(this.gameControl.wouldPutSelfInCheck === false) {
                            this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalUp[a]].clickable = true;
                          }
                          this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalUp[a]], pieceStore, pieceColorStore);
                          a++;
                          break;
                        case this.gameControl.otherPlayer:
                          this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalUp[a]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalUp[a]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalUp[a]].pieceColor, pieceStore, pieceColorStore);
                          this.checkForSelfCheck(this.gameControl.playerTurn);
                          if(this.gameControl.wouldPutSelfInCheck === false) {
                            this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalUp[a]].clickable = true;
                          }
                          this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalUp[a]], pieceStore, pieceColorStore);
                          rookStop = true;  
                          break;
                      } 
                    };
                    a = 0;
                    rookStop = false;

                    while (a < this.gameControl.squares[square].pieceMoves.rook.verticalDown.length && rookStop == false) {
                      switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalDown[a]].pieceColor) {
                        case this.gameControl.playerTurn:
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalDown[a]].clickable = true;
                          rookStop = true;  
                          break;
                        case '':
                          this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalDown[a]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalDown[a]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalDown[a]].pieceColor, pieceStore, pieceColorStore);
                          this.checkForSelfCheck(this.gameControl.playerTurn);
                          if(this.gameControl.wouldPutSelfInCheck === false) {
                            this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalDown[a]].clickable = true;
                          }
                          this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalDown[a]], pieceStore, pieceColorStore);
                          a++;
                          break;
                        case this.gameControl.otherPlayer:
                          this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalDown[a]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalDown[a]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalDown[a]].pieceColor, pieceStore, pieceColorStore);
                          this.checkForSelfCheck(this.gameControl.playerTurn);
                          if(this.gameControl.wouldPutSelfInCheck === false) {
                            this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalDown[a]].clickable = true;
                          }
                          this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalDown[a]], pieceStore, pieceColorStore);
                          rookStop = true;  
                          break;
                      }
                    };
                    a = 0;
                    rookStop = false;

                    while (a < this.gameControl.squares[square].pieceMoves.rook.horizontalLeft.length && rookStop == false) {
                      switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalLeft[a]].pieceColor) {
                        case this.gameControl.playerTurn:
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalLeft[a]].clickable = true;
                          rookStop = true;  
                          break;
                        case '':
                          this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalLeft[a]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalLeft[a]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalLeft[a]].pieceColor, pieceStore, pieceColorStore);
                          this.checkForSelfCheck(this.gameControl.playerTurn);
                          if(this.gameControl.wouldPutSelfInCheck === false) {
                            this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalLeft[a]].clickable = true;
                          }
                          this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalLeft[a]], pieceStore, pieceColorStore);
                          a++;
                          break;
                        case this.gameControl.otherPlayer:
                          this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalLeft[a]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalLeft[a]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalLeft[a]].pieceColor, pieceStore, pieceColorStore);
                          this.checkForSelfCheck(this.gameControl.playerTurn);
                          if(this.gameControl.wouldPutSelfInCheck === false) {
                            this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalLeft[a]].clickable = true;
                          }
                          this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalLeft[a]], pieceStore, pieceColorStore);
                          rookStop = true;  
                          break;
                      }
                    };
                    a = 0;
                    rookStop = false;

                    while (a < this.gameControl.squares[square].pieceMoves.rook.horizontalRight.length && rookStop == false) {
                      switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalRight[a]].pieceColor) {
                        case this.gameControl.playerTurn:
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalRight[a]].clickable = true;
                          rookStop = true;  
                          break;
                        case '':
                          this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalRight[a]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalRight[a]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalRight[a]].pieceColor, pieceStore, pieceColorStore);
                          this.checkForSelfCheck(this.gameControl.playerTurn);
                          if(this.gameControl.wouldPutSelfInCheck === false) {
                            this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalRight[a]].clickable = true;
                          }
                          this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalRight[a]], pieceStore, pieceColorStore);
                          a++;
                        case this.gameControl.otherPlayer:
                          this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalRight[a]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalRight[a]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalRight[a]].pieceColor, pieceStore, pieceColorStore);
                          this.checkForSelfCheck(this.gameControl.playerTurn);
                          if(this.gameControl.wouldPutSelfInCheck === false) {
                            this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalRight[a]].clickable = true;
                          }
                          this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.horizontalRight[a]], pieceStore, pieceColorStore);
                          rookStop = true;  
                          break;
                      }
                    };

                  break;
                case 'knight':
                  for (let i = 0; i < this.gameControl.squares[square].pieceMoves.knight.length; i++) {
                    switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.knight[i]].pieceColor) {
                      case this.gameControl.playerTurn:
                        this.gameControl.squares[this.gameControl.squares[square].pieceMoves.knight[i]].clickable = true;
                        break;
                      case '':
                        this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.knight[i]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.knight[i]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.knight[i]].pieceColor, pieceStore, pieceColorStore);
                        this.checkForSelfCheck(this.gameControl.playerTurn);
                        if(this.gameControl.wouldPutSelfInCheck === false) {
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.knight[i]].clickable = true;
                        }
                        this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.knight[i]], pieceStore, pieceColorStore);
                        break;
                      case this.gameControl.otherPlayer:
                        this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.knight[i]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.knight[i]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.knight[i]].pieceColor, pieceStore, pieceColorStore);
                        this.checkForSelfCheck(this.gameControl.playerTurn);
                        if(this.gameControl.wouldPutSelfInCheck === false) {
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.knight[i]].clickable = true;
                        }
                        this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.knight[i]], pieceStore, pieceColorStore);
                        break;
                    }
                  }
                  break;
                case 'bishop':
                    let b = 0;
                    let bishopStop = false;
                    
                    while (b < this.gameControl.squares[square].pieceMoves.bishop.upLeft.length && bishopStop == false) {
                      switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upLeft[b]].pieceColor) {
                        case this.gameControl.playerTurn:
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upLeft[b]].clickable = true;
                          bishopStop = true;  
                          break;
                        case '':
                          this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upLeft[b]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upLeft[b]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upLeft[b]].pieceColor, pieceStore, pieceColorStore);
                          this.checkForSelfCheck(this.gameControl.playerTurn);
                          if(this.gameControl.wouldPutSelfInCheck === false) {
                            this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upLeft[b]].clickable = true;
                          }
                          this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upLeft[b]], pieceStore, pieceColorStore);
                          b++;
                          break;
                        case this.gameControl.otherPlayer:
                          this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upLeft[b]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upLeft[b]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upLeft[b]].pieceColor, pieceStore, pieceColorStore);
                          this.checkForSelfCheck(this.gameControl.playerTurn);
                          if(this.gameControl.wouldPutSelfInCheck === false) {
                            this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upLeft[b]].clickable = true;
                          }
                          this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upLeft[b]], pieceStore, pieceColorStore);
                          bishopStop = true;  
                          break;
                      }
                    };
                    b = 0;
                    bishopStop = false;

                    while (b < this.gameControl.squares[square].pieceMoves.bishop.upRight.length && bishopStop == false) {
                      switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upRight[b]].pieceColor) {
                        case this.gameControl.playerTurn:
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upRight[b]].clickable = true;
                          bishopStop = true;  
                          break;
                        case '':
                          this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upRight[b]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upRight[b]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upRight[b]].pieceColor, pieceStore, pieceColorStore);
                          this.checkForSelfCheck(this.gameControl.playerTurn);
                          if(this.gameControl.wouldPutSelfInCheck === false) {
                            this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upRight[b]].clickable = true;
                          }
                          this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upRight[b]], pieceStore, pieceColorStore);
                          b++;
                          break;
                        case this.gameControl.otherPlayer:
                          this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upRight[b]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upRight[b]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upRight[b]].pieceColor, pieceStore, pieceColorStore);
                          this.checkForSelfCheck(this.gameControl.playerTurn);
                          if(this.gameControl.wouldPutSelfInCheck === false) {
                            this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upRight[b]].clickable = true;
                          }
                          this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.upRight[b]], pieceStore, pieceColorStore);
                          bishopStop = true;  
                          break;
                      }
                    };
                    b = 0;
                    bishopStop = false;

                    while (b < this.gameControl.squares[square].pieceMoves.bishop.downRight.length && bishopStop == false) {
                      switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downRight[b]].pieceColor) {
                        case this.gameControl.playerTurn:
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downRight[b]].clickable = true;
                          bishopStop = true;  
                          break;
                        case '':
                          this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downRight[b]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downRight[b]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downRight[b]].pieceColor, pieceStore, pieceColorStore);
                          this.checkForSelfCheck(this.gameControl.playerTurn);
                          if(this.gameControl.wouldPutSelfInCheck === false) {
                            this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downRight[b]].clickable = true;
                          }
                          this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downRight[b]], pieceStore, pieceColorStore);
                          b++;
                          break;
                        case this.gameControl.otherPlayer:
                          this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downRight[b]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downRight[b]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downRight[b]].pieceColor, pieceStore, pieceColorStore);
                          this.checkForSelfCheck(this.gameControl.playerTurn);
                          if(this.gameControl.wouldPutSelfInCheck === false) {
                            this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downRight[b]].clickable = true;
                          }
                          this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downRight[b]], pieceStore, pieceColorStore);
                          bishopStop = true;  
                          break;
                      }
                    };
                    b = 0;
                    bishopStop = false;

                    while (b < this.gameControl.squares[square].pieceMoves.bishop.downLeft.length && bishopStop == false) {
                      switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downLeft[b]].pieceColor) {
                        case this.gameControl.playerTurn:
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downLeft[b]].clickable = true;
                          bishopStop = true;  
                          break;
                        case '':
                          this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downLeft[b]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downLeft[b]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downLeft[b]].pieceColor, pieceStore, pieceColorStore);
                          this.checkForSelfCheck(this.gameControl.playerTurn);
                          if(this.gameControl.wouldPutSelfInCheck === false) {
                            this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downLeft[b]].clickable = true;
                          }
                          this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downLeft[b]], pieceStore, pieceColorStore);
                          b++;
                          break;
                        case this.gameControl.otherPlayer:
                          this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downLeft[b]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downLeft[b]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downLeft[b]].pieceColor, pieceStore, pieceColorStore);
                          this.checkForSelfCheck(this.gameControl.playerTurn);
                          if(this.gameControl.wouldPutSelfInCheck === false) {
                            this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downLeft[b]].clickable = true;
                          }
                          this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.bishop.downLeft[b]], pieceStore, pieceColorStore);
                          bishopStop = true;  
                          break;
                      }
                    };  
                  break;
                case 'queen':
                    let c = 0;
                    let queenStop = false;
                    while (c < this.gameControl.squares[square].pieceMoves.queen.verticalUp.length && queenStop == false) {
                      this.testCode = 'vertical up queen reached'
                      switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalUp[c]].pieceColor) {
                        case this.gameControl.playerTurn:
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalUp[c]].clickable = true;
                          queenStop = true;  
                          break;
                        case '':
                          this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalUp[c]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalUp[c]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalUp[c]].pieceColor, pieceStore, pieceColorStore);
                          this.checkForSelfCheck(this.gameControl.playerTurn);
                          if(this.gameControl.wouldPutSelfInCheck === false) {
                            this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalUp[c]].clickable = true;
                          }
                          this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalUp[c]], pieceStore, pieceColorStore);
                          c++;
                          break;
                        case this.gameControl.otherPlayer:
                          this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalUp[c]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalUp[c]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalUp[c]].pieceColor, pieceStore, pieceColorStore);
                          this.checkForSelfCheck(this.gameControl.playerTurn);
                          if(this.gameControl.wouldPutSelfInCheck === false) {
                            this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalUp[c]].clickable = true;
                          }
                          this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalUp[c]], pieceStore, pieceColorStore);
                          queenStop = true;  
                          break;
                      }
                    };
                    c = 0;
                    queenStop = false;

                    while (c < this.gameControl.squares[square].pieceMoves.queen.verticalDown.length && queenStop == false) {
                      this.testCode = 'vertical down queen reached'
                      switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.rook.verticalDown[c]].pieceColor) {
                        case this.gameControl.playerTurn:
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalDown[c]].clickable = true;
                          queenStop = true;  
                          break;
                        case '':
                          this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalDown[c]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalDown[c]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalDown[c]].pieceColor, pieceStore, pieceColorStore);
                          this.checkForSelfCheck(this.gameControl.playerTurn);
                          if(this.gameControl.wouldPutSelfInCheck === false) {
                            this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalDown[c]].clickable = true;
                          }
                          this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalDown[c]], pieceStore, pieceColorStore);
                          c++;
                          break;
                        case this.gameControl.otherPlayer:
                          this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalDown[c]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalDown[c]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalDown[c]].pieceColor, pieceStore, pieceColorStore);
                          this.checkForSelfCheck(this.gameControl.playerTurn);
                          if(this.gameControl.wouldPutSelfInCheck === false) {
                            this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalDown[c]].clickable = true;
                          }
                          this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.verticalDown[c]], pieceStore, pieceColorStore);
                          queenStop = true;  
                          break;
                      }
                    };
                    c = 0;
                    queenStop = false;

                    while (c < this.gameControl.squares[square].pieceMoves.queen.horizontalLeft.length && queenStop == false) {
                      this.testCode = 'horizontal left queen reached'
                      switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalLeft[c]].pieceColor) {
                        case this.gameControl.playerTurn:
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalLeft[c]].clickable = true;
                          queenStop = true;  
                          break;
                        case '':
                            this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalLeft[c]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalLeft[c]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalLeft[c]].pieceColor, pieceStore, pieceColorStore);
                            this.checkForSelfCheck(this.gameControl.playerTurn);
                            if(this.gameControl.wouldPutSelfInCheck === false) {
                              this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalLeft[c]].clickable = true;
                            }
                            this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalLeft[c]], pieceStore, pieceColorStore);
                          c++;
                          break;
                        case this.gameControl.otherPlayer:
                            this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalLeft[c]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalLeft[c]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalLeft[c]].pieceColor, pieceStore, pieceColorStore);
                            this.checkForSelfCheck(this.gameControl.playerTurn);
                            if(this.gameControl.wouldPutSelfInCheck === false) {
                              this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalLeft[c]].clickable = true;
                            }
                            this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalLeft[c]], pieceStore, pieceColorStore);
                          queenStop = true;  
                          break;
                      }
                    };
                    c = 0;
                    queenStop = false;

                    while (c < this.gameControl.squares[square].pieceMoves.queen.horizontalRight.length && queenStop == false) {
                      this.testCode = 'horizontal right queen reached'
                      switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalRight[c]].pieceColor) {
                        case this.gameControl.playerTurn:
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalRight[c]].clickable = true;
                          queenStop = true;  
                          break;
                        case '':
                          this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalRight[c]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalRight[c]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalRight[c]].pieceColor, pieceStore, pieceColorStore);
                          this.checkForSelfCheck(this.gameControl.playerTurn);
                          if(this.gameControl.wouldPutSelfInCheck === false) {
                            this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalRight[c]].clickable = true;
                          }
                          this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalRight[c]], pieceStore, pieceColorStore);
                          c++;
                          break;
                        case this.gameControl.otherPlayer:
                          this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalRight[c]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalRight[c]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalRight[c]].pieceColor, pieceStore, pieceColorStore);
                          this.checkForSelfCheck(this.gameControl.playerTurn);
                          if(this.gameControl.wouldPutSelfInCheck === false) {
                            this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalRight[c]].clickable = true;
                          }
                          this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.horizontalRight[c]], pieceStore, pieceColorStore);
                          queenStop = true;  
                          break;
                      }
                    };
                    c = 0;
                    queenStop = false;
                    
                    while (c < this.gameControl.squares[square].pieceMoves.queen.upLeft.length && queenStop == false) {
                      this.testCode = 'upleft queen reached'
                      switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upLeft[c]].pieceColor) {
                        case this.gameControl.playerTurn:
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upLeft[c]].clickable = true;
                          queenStop = true;  
                          break;
                        case '':
                          this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upLeft[c]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upLeft[c]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upLeft[c]].pieceColor, pieceStore, pieceColorStore);
                          this.checkForSelfCheck(this.gameControl.playerTurn);
                          if(this.gameControl.wouldPutSelfInCheck === false) {
                            this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upLeft[c]].clickable = true;
                          }
                          this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upLeft[c]], pieceStore, pieceColorStore);
                          c++;
                          break;
                        case this.gameControl.otherPlayer:
                          this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upLeft[c]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upLeft[c]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upLeft[c]].pieceColor, pieceStore, pieceColorStore);
                          this.checkForSelfCheck(this.gameControl.playerTurn);
                          if(this.gameControl.wouldPutSelfInCheck === false) {
                            this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upLeft[c]].clickable = true;
                          }
                          this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upLeft[c]], pieceStore, pieceColorStore);
                          queenStop = true;  
                          break;
                      }
                    };
                    c = 0;
                    queenStop = false;

                    while (c < this.gameControl.squares[square].pieceMoves.queen.upRight.length && queenStop == false) {
                      this.testCode = 'upRight queen reached'
                      switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upRight[c]].pieceColor) {
                        case this.gameControl.playerTurn:
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upRight[c]].clickable = true;
                          queenStop = true;  
                          break;
                        case '':
                          this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upRight[c]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upRight[c]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upRight[c]].pieceColor, pieceStore, pieceColorStore);
                          this.checkForSelfCheck(this.gameControl.playerTurn);
                          if(this.gameControl.wouldPutSelfInCheck === false) {
                            this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upRight[c]].clickable = true;
                          }
                          this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upRight[c]], pieceStore, pieceColorStore);
                          c++;
                          break;
                        case this.gameControl.otherPlayer:
                          this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upRight[c]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upRight[c]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upRight[c]].pieceColor, pieceStore, pieceColorStore);
                          this.checkForSelfCheck(this.gameControl.playerTurn);
                          if(this.gameControl.wouldPutSelfInCheck === false) {
                            this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upRight[c]].clickable = true;
                          }
                          this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.upRight[c]], pieceStore, pieceColorStore);
                          queenStop = true;  
                          break;
                      }
                    };
                    c = 0;
                    queenStop = false;

                    while (c < this.gameControl.squares[square].pieceMoves.queen.downRight.length && queenStop == false) {
                      this.testCode = 'downright queen reached'
                      switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downRight[c]].pieceColor) {
                        case this.gameControl.playerTurn:
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downRight[c]].clickable = true;
                          queenStop = true;  
                          break;
                        case '':
                          this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downRight[c]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downRight[c]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downRight[c]].pieceColor, pieceStore, pieceColorStore);
                          this.checkForSelfCheck(this.gameControl.playerTurn);
                          if(this.gameControl.wouldPutSelfInCheck === false) {
                            this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downRight[c]].clickable = true;
                          }
                          this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downRight[c]], pieceStore, pieceColorStore);
                          c++;
                          break;
                        case this.gameControl.otherPlayer:
                          this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downRight[c]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downRight[c]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downRight[c]].pieceColor, pieceStore, pieceColorStore);
                          this.checkForSelfCheck(this.gameControl.playerTurn);
                          if(this.gameControl.wouldPutSelfInCheck === false) {
                            this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downRight[c]].clickable = true;
                          }
                          this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downRight[c]], pieceStore, pieceColorStore);
                          queenStop = true;  
                          break;
                      }
                    };
                    c = 0;
                    queenStop = false;

                    while (c < this.gameControl.squares[square].pieceMoves.queen.downLeft.length && queenStop == false) {
                      this.testCode = 'downleft queen reached'
                      switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downLeft[c]].pieceColor) {
                        case this.gameControl.playerTurn:
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downLeft[c]].clickable = true;
                          queenStop = true;  
                          break;
                        case '':
                          this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downLeft[c]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downLeft[c]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downLeft[c]].pieceColor, pieceStore, pieceColorStore);
                          this.checkForSelfCheck(this.gameControl.playerTurn);
                          if(this.gameControl.wouldPutSelfInCheck === false) {
                            this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downLeft[c]].clickable = true;
                          }
                          this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downLeft[c]], pieceStore, pieceColorStore);
                          c++;
                          break;
                        case this.gameControl.otherPlayer:
                          this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downLeft[c]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downLeft[c]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downLeft[c]].pieceColor, pieceStore, pieceColorStore);
                          this.checkForSelfCheck(this.gameControl.playerTurn);
                          if(this.gameControl.wouldPutSelfInCheck === false) {
                            this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downLeft[c]].clickable = true;
                          }
                          this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.queen.downLeft[c]], pieceStore, pieceColorStore);
                          queenStop = true;  
                          break;
                      }
                    };  
                  break;  
                case 'king':
                    this.testCode = 'king reached'
                    for (let i = 0; i < this.gameControl.squares[square].pieceMoves.king.length; i++) {
                      switch(this.gameControl.squares[this.gameControl.squares[square].pieceMoves.king[i]].pieceColor) {
                        case this.gameControl.playerTurn:
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.king[i]].clickable = true;
                          break;
                        case '':
                          this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.king[i]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.king[i]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.king[i]].pieceColor, pieceStore, pieceColorStore);
                          this.checkForSelfCheck(this.gameControl.playerTurn);
                          if(this.gameControl.wouldPutSelfInCheck === false) {
                            this.gameControl.squares[this.gameControl.squares[square].pieceMoves.king[i]].clickable = true;
                          }
                          this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.king[i]], pieceStore, pieceColorStore);
                          break;
                        case this.gameControl.otherPlayer:
                          this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.king[i]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.king[i]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.king[i]].pieceColor, pieceStore, pieceColorStore);
                          this.checkForSelfCheck(this.gameControl.playerTurn);
                          if(this.gameControl.wouldPutSelfInCheck === false) {
                            this.gameControl.squares[this.gameControl.squares[square].pieceMoves.king[i]].clickable = true;
                          }
                          this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.king[i]], pieceStore, pieceColorStore);
                          break;
                      }
                    };
                    //castle logic
                    if (clickedSquare.position === 'e1') {
                      if (this.gameControl.squares.d1.piece === '' && this.gameControl.squares.c1.piece === '' && this.gameControl.squares.b1.piece === '' && this.gameControl.squares.a1.piece === 'rook' && this.gameControl.whiteLeftCastleBlocked === false) {
                        let castleCheck = false;
                        
                        this.checkForSelfCheck('white');
                        if(this.gameControl.wouldPutSelfInCheck === true) {
                          castleCheck = true;
                        }

                        this.movePiece(this.gameControl.squares.e1, this.gameControl.squares.d1, 'king', '', 'white', '', pieceStore, pieceColorStore);
                        this.checkForSelfCheck('white');
                        if(this.gameControl.wouldPutSelfInCheck === true) {
                          castleCheck = true;
                        }
                        this.movePieceBack(this.gameControl.squares.e1, this.gameControl.squares.d1, pieceStore, pieceColorStore);
                        
                        this.movePiece(this.gameControl.squares.e1, this.gameControl.squares.c1, 'king', '', 'white', '', pieceStore, pieceColorStore);
                        this.checkForSelfCheck('white');
                        if(this.gameControl.wouldPutSelfInCheck === true) {
                          castleCheck = true;
                        }
                        this.movePieceBack(this.gameControl.squares.e1, this.gameControl.squares.c1, pieceStore, pieceColorStore);

                        this.movePiece(this.gameControl.squares.e1, this.gameControl.squares.b1, 'king', '', 'white', '', pieceStore, pieceColorStore);
                        this.checkForSelfCheck('white');
                        if(this.gameControl.wouldPutSelfInCheck === true) {
                          castleCheck = true;
                        }
                        this.movePieceBack(this.gameControl.squares.e1, this.gameControl.squares.b1, pieceStore, pieceColorStore);

                        if(castleCheck === false) {
                          this.gameControl.squares.b1.clickable = true;
                        }
                      };
                      if (this.gameControl.squares.f1.piece === '' && this.gameControl.squares.g1.piece === '' && this.gameControl.squares.h1.piece === 'rook' && this.gameControl.whiteRightCastleBlocked === false) {
                        let castleCheck = false;

                        this.checkForSelfCheck('white');
                        if(this.gameControl.wouldPutSelfInCheck === true) {
                          castleCheck = true;
                        }

                        this.movePiece(this.gameControl.squares.e1, this.gameControl.squares.f1, 'king', '', 'white', '', pieceStore, pieceColorStore);
                        this.checkForSelfCheck('white');
                        if(this.gameControl.wouldPutSelfInCheck === true) {
                          castleCheck = true;
                        }
                        this.movePieceBack(this.gameControl.squares.e1, this.gameControl.squares.f1, pieceStore, pieceColorStore);   
                        
                        this.movePiece(this.gameControl.squares.e1, this.gameControl.squares.g1, 'king', '', 'white', '', pieceStore, pieceColorStore);
                        this.checkForSelfCheck('white');
                        if(this.gameControl.wouldPutSelfInCheck === true) {
                          castleCheck = true;
                        }
                        this.movePieceBack(this.gameControl.squares.e1, this.gameControl.squares.g1, pieceStore, pieceColorStore);

                        if(castleCheck === false) {
                          this.gameControl.squares.g1.clickable = true;
                        }
                      }
                    } else if (clickedSquare.position === 'e8') {
                      if (this.gameControl.squares.d8.piece === '' && this.gameControl.squares.c8.piece === '' && this.gameControl.squares.b8.piece === '' && this.gameControl.squares.a8.piece === 'rook' && this.gameControl.blackRightCastleBlocked === false) {
                        let castleCheck = false;

                        this.checkForSelfCheck('black');
                        if(this.gameControl.wouldPutSelfInCheck === true) {
                          castleCheck = true;
                        }

                        this.movePiece(this.gameControl.squares.e8, this.gameControl.squares.d8, 'king', '', 'black', '', pieceStore, pieceColorStore);
                        this.checkForSelfCheck('black');
                        if(this.gameControl.wouldPutSelfInCheck === true) {
                          castleCheck = true;
                        }
                        this.movePieceBack(this.gameControl.squares.e8, this.gameControl.squares.d8, pieceStore, pieceColorStore);
                        
                        this.movePiece(this.gameControl.squares.e8, this.gameControl.squares.c8, 'king', '', 'black', '', pieceStore, pieceColorStore);
                        this.checkForSelfCheck('black');
                        if(this.gameControl.wouldPutSelfInCheck === true) {
                          castleCheck = true;
                        }
                        this.movePieceBack(this.gameControl.squares.e8, this.gameControl.squares.c8, pieceStore, pieceColorStore);

                        this.movePiece(this.gameControl.squares.e8, this.gameControl.squares.b8, 'king', '', 'black', '', pieceStore, pieceColorStore);
                        this.checkForSelfCheck('black');
                        if(this.gameControl.wouldPutSelfInCheck === true) {
                          castleCheck = true;
                        }
                        this.movePieceBack(this.gameControl.squares.e8, this.gameControl.squares.b8, pieceStore, pieceColorStore);

                        if(castleCheck === false) {
                          this.gameControl.squares.b8.clickable = true;
                        }
                      };
                      if (this.gameControl.squares.f8.piece === '' && this.gameControl.squares.g8.piece === '' && this.gameControl.squares.h8.piece === 'rook' && this.gameControl.blackLeftCastleBlocked === false) {
                        let castleCheck = false;
                        
                        this.checkForSelfCheck('black');
                        if(this.gameControl.wouldPutSelfInCheck === true) {
                          castleCheck = true;
                        }

                        this.movePiece(this.gameControl.squares.e8, this.gameControl.squares.f8, 'king', '', 'black', '', pieceStore, pieceColorStore);
                        this.checkForSelfCheck('black');
                        if(this.gameControl.wouldPutSelfInCheck === true) {
                          castleCheck = true;
                        }
                        this.movePieceBack(this.gameControl.squares.e8, this.gameControl.squares.f8, pieceStore, pieceColorStore);   
                        
                        this.movePiece(this.gameControl.squares.e8, this.gameControl.squares.g8, 'king', '', 'black', '', pieceStore, pieceColorStore);
                        this.checkForSelfCheck('black');
                        if(this.gameControl.wouldPutSelfInCheck === true) {
                          castleCheck = true;
                        }
                        this.movePieceBack(this.gameControl.squares.e8, this.gameControl.squares.g8, pieceStore, pieceColorStore);

                        if(castleCheck === false) {
                          this.gameControl.squares.g8.clickable = true;
                        }
                      }
                    }

                  break;
                case 'pawn':
                  let f = 0;
                  let pawnStop = false;

                  if (this.gameControl.playerTurn === 'white') {
                    while (f < this.gameControl.squares[square].pieceMoves.pawn.white.vertical.length && pawnStop === false) {
                      switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.white.vertical[f]].pieceColor) {
                        case this.gameControl.playerTurn:
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.white.vertical[f]].clickable = true;
                          pawnStop = true;  
                          break;
                        case '':
                          this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.white.vertical[f]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.white.vertical[f]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.white.vertical[f]].pieceColor, pieceStore, pieceColorStore);
                          this.checkForSelfCheck(this.gameControl.playerTurn);
                          if(this.gameControl.wouldPutSelfInCheck === false) {
                            this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.white.vertical[f]].clickable = true;
                          }
                          this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.white.vertical[f]], pieceStore, pieceColorStore);
                          f++;
                          break;
                        case this.gameControl.otherPlayer:
                          pawnStop = true;
                          break;
                      }
                    };
                    for (let g = 0; g < this.gameControl.squares[square].pieceMoves.pawn.white.diagonal.length; g++) {
                      switch(this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.white.diagonal[g]].pieceColor) {
                        case this.gameControl.playerTurn:
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.white.diagonal[g]].clickable = true;
                          break;
                        case '': 
                          break;
                        case this.gameControl.otherPlayer:
                          this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.white.diagonal[g]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.white.diagonal[g]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.white.diagonal[g]].pieceColor, pieceStore, pieceColorStore);
                          this.checkForSelfCheck(this.gameControl.playerTurn);
                          if(this.gameControl.wouldPutSelfInCheck === false) {
                            this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.white.diagonal[g]].clickable = true;
                          }
                          this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.white.diagonal[g]], pieceStore, pieceColorStore);
                          break;
                      }
                    }
                  } else if (this.gameControl.playerTurn === 'black') {
                    while (f < this.gameControl.squares[square].pieceMoves.pawn.black.vertical.length && pawnStop === false) {
                      switch (this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.black.vertical[f]].pieceColor) {
                        case this.gameControl.playerTurn:
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.black.vertical[f]].clickable = true;
                          pawnStop = true;  
                          break;
                        case '':
                          this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.black.vertical[f]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.black.vertical[f]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.black.vertical[f]].pieceColor, pieceStore, pieceColorStore);
                          this.checkForSelfCheck(this.gameControl.playerTurn);
                          if(this.gameControl.wouldPutSelfInCheck === false) {
                            this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.black.vertical[f]].clickable = true;
                          }
                          this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.black.vertical[f]], pieceStore, pieceColorStore);
                          f++;
                          break;
                        case this.gameControl.otherPlayer:
                          pawnStop = true;
                          break;
                      }
                    };
                    for (let g = 0; g < this.gameControl.squares[square].pieceMoves.pawn.black.diagonal.length; g++) {
                      switch(this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.black.diagonal[g]].pieceColor) {
                        case this.gameControl.playerTurn:
                          this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.black.diagonal[g]].clickable = true;
                          break;
                        case '': 
                          break;
                        case this.gameControl.otherPlayer:
                          this.movePiece(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.black.diagonal[g]], clickedSquare.piece, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.black.diagonal[g]].piece, clickedSquare.pieceColor, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.black.diagonal[g]].pieceColor, pieceStore, pieceColorStore);
                          this.checkForSelfCheck(this.gameControl.playerTurn);
                          if(this.gameControl.wouldPutSelfInCheck === false) {
                            this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.black.diagonal[g]].clickable = true;
                          }
                          this.movePieceBack(clickedSquare, this.gameControl.squares[this.gameControl.squares[square].pieceMoves.pawn.black.diagonal[g]], pieceStore, pieceColorStore)
                          break;
                      }
                    }
                  }
                  break;   
              }
            }
          }
          this.gameControl.clickCount = 1;
          break;
        } else {
          //moves pieceInPlay to new square, removes from old square, changes playerTurn, makes only new player's pieces clickable, resets clickCounter and pieceInPlay
          //moves pieceinPlay to new square
          if (this.gameControl.pieceInPlay.piece === 'king' && this.gameControl.pieceInPlay.pieceColor === 'white') {
            if (this.gameControl.pieceInPlay.position === 'e1' && clickedSquare.position === 'b1') {
              this.gameControl.squares.a1.piece = '';
              this.gameControl.squares.a1.pieceColor = '';
              this.gameControl.squares.c1.piece = 'rook';
              this.gameControl.squares.c1.pieceColor = 'white';
            } else if (this.gameControl.pieceInPlay.position === 'e1' && clickedSquare.position === 'g1') {
              this.gameControl.squares.h1.piece = '';
              this.gameControl.squares.h1.pieceColor = '';
              this.gameControl.squares.f1.piece = 'rook';
              this.gameControl.squares.f1.pieceColor = 'white';
            }
            this.gameControl.whiteLeftCastleBlocked = true;
            this.gameControl.whiteRightCastleBlocked = true;
          } else if (this.gameControl.pieceInPlay.piece === 'king' && this.gameControl.pieceInPlay.pieceColor === 'black') {
            if (this.gameControl.pieceInPlay.position === 'e8' && clickedSquare.position === 'b8') {
              this.gameControl.squares.a8.piece = '';
              this.gameControl.squares.a8.pieceColor = '';
              this.gameControl.squares.c8.piece = 'rook';
              this.gameControl.squares.c8.pieceColor = 'black';
            } else if (this.gameControl.pieceInPlay.position === 'e8' && clickedSquare.position === 'g8') {
              this.gameControl.squares.h8.piece = '';
              this.gameControl.squares.h8.pieceColor = '';
              this.gameControl.squares.f8.piece = 'rook';
              this.gameControl.squares.f8.pieceColor = 'black';
            }
            this.gameControl.blackLeftCastleBlocked = true;
            this.gameControl.blackRightCastleBlocked = true;
          }

          if (this.gameControl.pieceInPlay.piece === 'rook' && this.gameControl.pieceInPlay.pieceColor === 'white') {
            if (this.gameControl.pieceInPlay.position === 'a1') {
              this.gameControl.whiteLeftCastleBlocked = true;
            } else if (this.gameControl.pieceInPlay.position === 'h1') {
              this.gameControl.whiteRightCastleBlocked = true;
            }
          } else if (this.gameControl.pieceInPlay.piece === 'rook' && this.gameControl.pieceInPlay.pieceColor === 'black') {
            if (this.gameControl.pieceInPlay.position === 'h8') {
              this.gameControl.blackLeftCastleBlocked = true;
            } else if (this.gameControl.pieceInPlay.position === 'a8') {
              this.gameControl.blackRightCastleBlocked = true;
            }
          }

          this.gameControl.newPiecePosition = clickedSquare.position;
          for (let square in this.gameControl.squares) {
            if (this.gameControl.squares[square].position === clickedSquare.position) {
              this.gameControl.squares[square].piece = this.gameControl.pieceInPlay.piece;
              this.gameControl.squares[square].pieceColor = this.gameControl.pieceInPlay.pieceColor;
            }
          };
          //removes pieceInPlay from it's starting point
          for (let square in this.gameControl.squares) {
            if (this.gameControl.squares[square].position === this.gameControl.pieceInPlay.position) {
              this.gameControl.squares[square].piece = '';
              this.gameControl.squares[square].pieceColor = '';
            }
          }

          // this.moveHistoryArray.push(this.gameControl.pieceInPlay.pieceColor, this.gameControl.pieceInPlay.piece, this.gameControl.pieceInPlay.position, this.gameControl.newPiecePosition)
          this.testCode = 'moveHistoryArray push reached'
          this.moveHistoryArray.push({
            pieceColor: this.gameControl.pieceInPlay.pieceColor,
            piece: this.gameControl.pieceInPlay.piece,
            startPosition: this.gameControl.pieceInPlay.position,
            endPosition: this.gameControl.newPiecePosition
          });

          //resets pieceInPlay and clickCount
          this.checkForDraw();
          if (this.gameControl.checkmate === true) {
            if (this.gameControl.playerTurn === 'white') {
              this.gameControl.gameResult.blackCheckmated = true;
            } else if (this.gameControl.playerTurn === 'black') {
              this.gameControl.gameResult.whiteCheckmated = true;
            }
          }
          this.gameControl.pieceInPlay.position = '';
          this.gameControl.pieceInPlay.piece = '';
          this.gameControl.pieceInPlay.pieceColor = '';
          this.gameControl.newPiecePosition = '';
          this.gameControl.clickCount = 0;
          this.checkForStalemate(this.moveHistoryArray);
          

          
          //switches control to other player
          if (this.gameControl.draw !== true && this.gameControl.checkmate !== true) {
            switch (this.gameControl.playerTurn) {
              case 'white':
                this.gameControl.playerTurn = 'black';
                this.gameControl.otherPlayer = 'white';
                for (let box in this.gameControl.squares) {
                  if (this.gameControl.squares[box].pieceColor === 'black') {
                    this.gameControl.squares[box].clickable = true
                  } else if (this.gameControl.squares[box].pieceColor === 'white' || this.gameControl.squares[box].pieceColor === '') {
                    this.gameControl.squares[box].clickable = false
                  }
                }
                break;
              case 'black':
                this.gameControl.playerTurn = 'white';
                this.gameControl.otherPlayer = 'black';
                for (let box in this.gameControl.squares) {
                  if (this.gameControl.squares[box].pieceColor === 'white') {
                    this.gameControl.squares[box].clickable = true
                  } else if (this.gameControl.squares[box].pieceColor === 'black' || this.gameControl.squares[box].pieceColor === '') {
                    this.gameControl.squares[box].clickable = false
                  }
                }
            }
          }
        }
    }
  }


  
}