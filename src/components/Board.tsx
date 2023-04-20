import { Context, ReactElement, useContext } from "react";
import { gameContext, GameContextType } from "../contexts/GameContext";

const Board = (): ReactElement => {
  const { squares, setSquares } = useContext<GameContextType | null>(
    gameContext
  ) as GameContextType;
  return <h1>Board</h1>;
};

export default Board;
