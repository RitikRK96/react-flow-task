import React from 'react';

const ContextMenu = ({ x, y, visible }) => {
  if (!visible) return null;
  return (
    <div
      className="absolute bg-yellow-500 text-black border shadow p-5 m-5 text-xl rounded-xl z-50"
      style={{ top: y, left: x }}
    >
      Hello World
    </div>
  );
};

export default ContextMenu;