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

        moves = this.getDiagonalMoves(board, currentSquare);
        moves = moves.concat(this.getStraightMoves(board, currentSquare));

        return moves;
    }
}
