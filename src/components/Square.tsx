import { ReactElement, useContext } from "react";
import { gameContext, GameContextType } from "../contexts/GameContext";

type SquareProps = {
  value: string;
  index: number;
};

const Square = ({ value, index }: SquareProps): ReactElement => {
  const { squares, setSquares, isXNext, setIsXNext } =
    useContext<GameContextType | null>(gameContext) as GameContextType;

  const handleClick = (): void => {
    const newSquares = [...squares];
    if (newSquares[index]) return;
    newSquares[index] = isXNext ? "X" : "O";
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  return (
    <button type="button" onClick={handleClick}>
      {value}
    </button>
  );
};

export default Square;
