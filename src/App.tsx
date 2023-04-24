import { useState } from "react";
import BoardButtons from "./components/BoardButtons";
import Stickies from "./components/Stickies";
import { Sticky } from "./components/types";

const App = () => {
  const [stickies, setStickies] = useState<Sticky[]>([]);
  const [prevStickies, setPrevStickies] = useState<Sticky[]>([]);

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

  const newSticky: Sticky = {
    id: new Date().getTime(),
    color: colorsArr[getRandom(0, 4)],
    isList: false,
    text: "",
    list: [],
  };

  const handleNewSticky = () => {
    setPrevStickies([...stickies]);
    setStickies([...stickies, { ...newSticky, text: newSticky.id.toString() }]);
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
    const sticky = stickies.filter((sticky) => sticky.id === id)[0];

    setPrevStickies([...stickies]);

    sticky.isList
      ? setStickies([
          ...stickies.filter((sticky) => sticky.id !== id),
          { ...sticky, isList: false, text: sticky.list[0], list: [] },
        ])
      : setStickies([
          ...stickies.filter((sticky) => sticky.id !== id),
          {
            ...sticky,
            isList: true,
            text: "",
            list: [sticky.text, "more list items"],
          },
        ]);
  };

  const handleDelete = (id: number) => {
    setPrevStickies([...stickies]);
    setStickies([...stickies.filter((sticky) => sticky.id !== id)]);
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
