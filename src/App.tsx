import { useState } from "react";
import BoardButtons from "./components/BoardButtons";
import Stickies from "./components/Stickies";
import { Sticky } from "./components/types";
import "./components/styles.css";

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
    position: {
      top: `${getRandom(15, 75)}%`,
      left: `${getRandom(7.5, 87.5)}%`,
    },
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

  const handleUpdatePosition = (id: number, top: string, left: string) => {
    if (
      currentSticky(id).position.top === top &&
      currentSticky(id).position.left === left
    )
      return;

    setPrevStickies([...stickies]);
    setStickies([
      ...stickies.filter((sticky) => sticky.id !== id),
      { ...currentSticky(id), position: { top: top, left: left } },
    ]);
  };

  const handleTextChange = (id: number, text: string) => {
    setPrevStickies([...stickies]);
    setStickies([
      ...stickies.filter((sticky) => sticky.id !== id),
      { ...currentSticky(id), text: text },
    ]);
  };

  const handleLiChange = (id: number, itemId: number, text: string) => {
    setPrevStickies([...stickies]);

    let list = [...currentSticky(id).list];
    let listItemArray = list.map((item) => item.itemId);

    list = [
      ...list.slice(0, listItemArray.indexOf(itemId)),
      { itemId, text },
      ...list.slice(listItemArray.indexOf(itemId) + 1),
    ];

    itemId === listItemArray[listItemArray.length - 1]
      ? (list = [...list, { itemId: Math.random(), text: "" }])
      : null;

    setStickies([
      ...stickies.filter((sticky) => sticky.id !== id),
      { ...currentSticky(id), list: list },
    ]);
  };

  const handleLiDelete = (id: number, itemId: number) => {
    setPrevStickies([...stickies]);

    let list = currentSticky(id).list.filter(
      (listItem) => listItem.itemId !== itemId
    );

    setStickies([
      ...stickies.filter((sticky) => sticky.id !== id),
      { ...currentSticky(id), list: list },
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
      ? (currentSticky(id).list.pop(),
        setStickies([
          ...stickies.filter((sticky) => sticky.id !== id),
          {
            ...currentSticky(id),
            isList: false,
            text: currentSticky(id)
              .list.map((item) => item.text)
              .join("<br>"),
            list: [],
          },
        ]))
      : setStickies([
          ...stickies.filter((sticky) => sticky.id !== id),
          {
            ...currentSticky(id),
            isList: true,
            text: "",
            list: [
              ...currentSticky(id)
                .text.split("<br>")
                .filter((line) => line !== "")
                .map((text) => ({ itemId: Math.random(), text })),
              { itemId: Math.random(), text: "" },
            ],
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
        onUpdatePosition={handleUpdatePosition}
        onTextChange={handleTextChange}
        onLiChange={handleLiChange}
        onLiDelete={handleLiDelete}
        onChangeColor={handleChangeColor}
        onToggleList={handleToggleList}
        onDelete={handleDelete}
      />
    </>
  );
};

export default App;
