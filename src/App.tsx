import { useState } from "react";
import BoardButtons from "./components/BoardButtons";
import Stickies from "./components/Stickies";

const App = () => {
  const [stickies, setStickies] = useState<
    { id: number; text: string; color: string }[]
  >([]);
  const [prevStickies, setPrevStickies] = useState<
    { id: number; text: string; color: string }[]
  >([]);

  const getRandom = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const colorsArr = [
    "sticky-pink",
    "sticky-peach",
    "sticky-yellow",
    "sticky-lime",
    "sticky-cyan",
  ];

  const newSticky = () => {
    const id = new Date().getTime();
    return {
      id: id,
      text: id.toString(),
      color: colorsArr[getRandom(0, 4)],
    };
  };

  const handleNewSticky = () => {
    setPrevStickies([...stickies]);
    setStickies([...stickies, newSticky()]);
  };

  const handleUndo = () => {
    setPrevStickies([...stickies]);
    setStickies([...prevStickies]);
  };

  const handleReset = () => {
    setPrevStickies([]);
    setStickies([]);
  };

  const handleChangeColor = (id: number) => {
    const sticky = stickies.filter((sticky) => sticky.id === id)[0];
    const colorIndex = colorsArr.indexOf(sticky.color);

    setPrevStickies([...stickies]);
    setStickies([
      ...stickies.filter((sticky) => sticky.id !== id),
      { ...sticky, color: colorsArr[colorIndex < 4 ? colorIndex + 1 : 0] },
    ]);
  };

  const handleToggleList = (id: number) => {
    console.log("handleToggleList: " + id);
  };
  const handleDelete = (id: number) => {
    console.log("handleDelete: " + id);
  };

  return (
    <>
      <BoardButtons
        onNewSticky={handleNewSticky}
        onUndo={handleUndo}
        onReset={handleReset}
      />
      <Stickies
        stickies={stickies}
        onChangeColor={(id) => handleChangeColor(id)}
        onToggleList={(id) => handleToggleList(id)}
        onDelete={(id) => handleDelete(id)}
      />
    </>
  );
};

export default App;
