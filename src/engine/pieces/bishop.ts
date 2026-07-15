import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import IntermediatePiece from "./intermediatePiece";

export default class Bishop extends IntermediatePiece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentSquare = board.findPiece(this);

        return this.getDiagonalMoves(board, currentSquare);
    }
}
