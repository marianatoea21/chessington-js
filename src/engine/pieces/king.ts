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
            [1, 1], [1, -1], [-1, 1], [-1, -1],
            [1, 0], [0, 1], [-1, 0], [0, -1]
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
