import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Bishop extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentSquare = board.findPiece(this);
        const moves: Square[] = [];

        const directions = [
            [1, 1],
            [1, -1],
            [-1, 1],
            [-1, -1]
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
        return moves;
    }
}
