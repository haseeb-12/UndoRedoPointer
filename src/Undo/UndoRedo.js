import { useState } from "react";

function UndoRedo() {
  const [data, setData] = useState([]);
  const [popped, setPopped] = useState([]);

  const points = {
    x: 0,
    y: 0
  };

  const handleClick = (e) => {
    setData([
      ...data,
      {
        x: e.clientX,
        y: e.clientY
      }
    ]);
  };


  const handleUndo = () => {
    const newPoints = [...data];
    const poppedPoint = newPoints.pop();
    if(data.length==0)return
    setPopped([...popped, poppedPoint]);
    setData(newPoints);
  };

  const handleRedo = () => {
    const newPopped = [...popped];
    const newPoints = [...data];
    const redoData = newPopped.pop();
  
    newPoints.push(redoData);

   
    setData(newPoints);
    if (newPopped.length === 0) return;
    setPopped(newPopped);

  };

  return (
    <>
      <button onClick={handleUndo}>Undo</button>
      <button onClick={handleRedo}>Redo</button>
      <div className="dots" onClick={handleClick}>
        {data.map((dots, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              background: "purple",
              height: 20,
              width: 20,
              borderRadius: "50%",
              transform: `translate(${dots.x - 10}px, ${dots.y - 50}px)`
            }}
          />
        ))}
      </div>
    </>
  );
}

export default UndoRedo;
