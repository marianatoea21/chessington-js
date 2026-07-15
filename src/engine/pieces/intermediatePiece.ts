import Piece from "./piece";
import Board from '../board';
import Square from '../square';

export default class IntermediatePiece extends Piece{
    getDiagonalMoves(board: Board, currentSquare: Square): Square[] {
        const moves: Square[] = [];

        const directions = [
            [1, 1], // up-right
            [1, -1], // up-left
            [-1, 1], // down-right
            [-1, -1] // down-left
        ]

        for (const [rowOffset, colOffset] of directions) {
            for (let step = 1; step < 8; step++) {
                const newRow = currentSquare.row + rowOffset * step;
                const newCol = currentSquare.col + colOffset * step;

                if (newRow < 0 || newRow > 7 || newCol > 7 || newCol < 0) {
                    break;
                }

                moves.push(Square.at(newRow, newCol));
            }
        }
        return moves;
    }

    getStraightMoves(board: Board, currentSquare: Square): Square[] {
        const moves: Square[] = [];
        const directions = [
            [1, 0], // up
            [-1, 0], // down
            [0, 1], // right
            [0, -1] // left
        ];

        for (const [rowOffset, colOffset] of directions) {
            for (let step = 1; step < 8; step++) {
                const newRow = currentSquare.row + rowOffset * step;
                const newCol = currentSquare.col + colOffset * step;

                if (newRow < 0 || newRow > 7 || newCol > 7 || newCol < 0) {
                    break;
                }
                moves.push(Square.at(newRow, newCol));
            }
        }
        return moves;
    }
}