import React from 'react';
import FlowCanvas from './components/FlowCanvas';
import BlockPanel from './components/BlockPanel';
import { ReactFlowProvider } from 'reactflow';

const App = () => {
  return (
    <ReactFlowProvider>
      <div className="flex h-screen">
        <FlowCanvas />
        <BlockPanel />
      </div>
    </ReactFlowProvider>
  );
};

export default App;