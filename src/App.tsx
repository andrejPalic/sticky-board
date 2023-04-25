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

  const currentSticky = (id: number) =>
    stickies.filter((sticky) => sticky.id === id)[0];

  const handleNewSticky = () => {
    setPrevStickies([...stickies]);
    setStickies([...stickies, newSticky]);
  };

  const handleUndo = () => {
    setPrevStickies([...stickies]);
    setStickies([...prevStickies]);
  };

  const handleReset = () => {
    setPrevStickies([]);
    setStickies([]);
  };

  const handleTextChange = (text: any, id: number) => {
    setPrevStickies([...stickies]);
    setStickies([
      ...stickies.filter((sticky) => sticky.id !== id),
      { ...currentSticky(id), text: text },
    ]);
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
    setPrevStickies([...stickies]);

    currentSticky(id).isList
      ? setStickies([
          ...stickies.filter((sticky) => sticky.id !== id),
          {
            ...currentSticky(id),
            isList: false,
            text: currentSticky(id).list[0],
            list: [],
          },
        ])
      : setStickies([
          ...stickies.filter((sticky) => sticky.id !== id),
          {
            ...currentSticky(id),
            isList: true,
            text: "",
            list: [currentSticky(id).text, "more list items"],
          },
        ]);
    console.log(currentSticky(id).list);
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
        onTextChange={handleTextChange}
        onChangeColor={handleChangeColor}
        onToggleList={handleToggleList}
        onDelete={handleDelete}
      />
    </>
  );
};

export default App;
