import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board): Square[] {
        const currentSquare = board.findPiece(this);
        const moves: Square[] = [];
        let positivity: number;

        if (this.player == Player.WHITE) {
            positivity = 1;
        } else {
            positivity = -1;
        }

        moves.push(Square.at(currentSquare.row + 1 * positivity, currentSquare.col));

        if (currentSquare.row === 1 || currentSquare.row === 6) {
            moves.push(Square.at(currentSquare.row + 2 * positivity, currentSquare.col))
        }

        return moves;
    }
}
