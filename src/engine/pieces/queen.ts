import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Queen extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentSquare: Square = board.findPiece(this);
        const moves: Square[] = [];

        const directions = [
            [1, 1], // up-right
            [1, -1], // up-left
            [-1, 1], // down-right
            [-1, -1] // down-left
        ]

        for (const [rowOffset, colOffset] of directions) {
            let i = 1;
            while (true) {
                const newRow = currentSquare.row + rowOffset * i;
                const newCol = currentSquare.col + colOffset * i;

                if (newRow < 0 || newRow > 7 || newCol > 7 || newCol < 0) {
                    break;
                }

                moves.push(Square.at(newRow, newCol));
                i++;
            }
        }

        for (let i = 0; i < 8; i++) {
            if (i !== currentSquare.col) {
                moves.push(Square.at(currentSquare.row, i));
            }

            if (i !== currentSquare.row) {
                moves.push(Square.at(i, currentSquare.col));
            }
        }

        return moves;
    }
}
