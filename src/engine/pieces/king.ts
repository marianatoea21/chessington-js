import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class King extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentSquare = board.findPiece(this);
        const moves: Square[] = [];

        const directions = [
            [1, 1], // up-right
            [1, -1], // up-left
            [-1, 1], // down-right
            [-1, -1], // down-left
            [1, 0], // up
            [-1, 0], // down
            [0, 1], // right
            [0, -1]  // left
        ]

        for (const [rowOffset, colOffset] of directions) {
            const newRow = currentSquare.row + rowOffset;
            const newCol = currentSquare.col + colOffset;

            if (newRow >= 0 && newRow <= 7 && newCol >= 0 && newCol <=7) {
                moves.push(Square.at(newRow, newCol));
            }
        }
        return moves;
    }
}
