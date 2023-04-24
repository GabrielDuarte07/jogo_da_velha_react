import { useContext } from "react";
import { gameContext, GameContextType } from "../contexts/GameContext";

const Reset = () => {
  const { setSquares, setIsXNext } = useContext<GameContextType | null>(
    gameContext
  ) as GameContextType;

  const handleClick = (): void => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <p className="reset">
      <button type="button" onClick={handleClick}>
        Reset
      </button>
    </p>
  );
};

export default Reset;
