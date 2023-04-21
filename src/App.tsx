import { useState, useEffect } from "react";
import BoardButtons from "./components/BoardButtons";

const App = () => {
  const [stickies, setStickies] = useState<number[]>([]);
  const [prevStickies, setPrevStickies] = useState<number[]>([]);

  useEffect(() => {
    console.clear();
    console.table(stickies);
    console.log(prevStickies);
  }, [stickies, prevStickies]);

  const handleNewSticky = () => {
    setPrevStickies([...stickies]);
    setStickies([...stickies, Math.random()]);
  };

  const handleUndo = () => {
    setPrevStickies([...stickies]);
    setStickies([...prevStickies]);
  };

  const handleReset = () => {
    setPrevStickies([]);
    setStickies([]);
  };

  return (
    <BoardButtons
      onNewSticky={handleNewSticky}
      onUndo={handleUndo}
      onReset={handleReset}
    />
  );
};

export default App;
