import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import IntermediatePiece from "./intermediatePiece";

export default class Queen extends IntermediatePiece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentSquare: Square = board.findPiece(this);
        let moves: Square[] = [];

        const directions = [
            [1, 1], // up-right
            [1, -1], // up-left
            [-1, 1], // down-right
            [-1, -1] // down-left
        ]

        moves = this.getDiagonalMoves(board, currentSquare);
        moves.concat(this.getStraightMoves(board, currentSquare));

        for (let coordinate = 0; coordinate < 8; coordinate++) {
            if (coordinate !== currentSquare.col) {
                moves.push(Square.at(currentSquare.row, coordinate));
            }

            if (coordinate !== currentSquare.row) {
                moves.push(Square.at(coordinate, currentSquare.col));
            }
        }
        return moves;
    }
}
