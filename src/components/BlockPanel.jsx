import React from 'react';
import { blocks } from '../constants/blocks';

const BlockPanel = () => {
  const handleDragStart = (event, block) => {
    event.dataTransfer.setData('application/reactflow', JSON.stringify(block));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className="w-1/4 p-4 bg-gray-100 border-l border-gray-300 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Blocks</h2>
      {blocks.map(block => (
        <div
          key={block.id}
          draggable
          onDragStart={e => handleDragStart(e, block)}
          className="cursor-move mb-2 p-3 bg-white rounded shadow hover:bg-gray-200 border-l-4 border-blue-500"
        >
          {block.label}
        </div>
      ))}
    </div>
  );
};

export default BlockPanel;