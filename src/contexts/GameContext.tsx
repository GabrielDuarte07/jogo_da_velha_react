import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type GameContextProps = {
  children: ReactNode;
};

export type GameContextType = {
  squares: Array<string | null>;
  setSquares: Dispatch<SetStateAction<Array<string | null>>>;
};

export const gameContext = createContext<GameContextType | null>(null);

const GameContext = ({ children }: GameContextProps) => {
  const [squares, setSquares] = useState<Array<string | null>>(
    Array(9).fill(null)
  );

  const state = {
    squares,
    setSquares,
  };
  return <gameContext.Provider value={state}>{children}</gameContext.Provider>;
};

export default GameContext;
