import { ReactElement, useContext } from "react";
import { gameContext, GameContextType } from "../contexts/GameContext";
import Player from "./Player";
import Square from "./Square";
import Reset from "./Reset";

const Board = (): ReactElement => {
  const { squares } = useContext<GameContextType | null>(
    gameContext
  ) as GameContextType;
  return (
    <div className="boardContainer">
      <Player />
      <Reset />
      <div className="board">
        {squares.map((value, index) => (
          <Square value={value as string} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Board;
