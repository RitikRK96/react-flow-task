import React, { useCallback, useRef, useState } from 'react';
import ReactFlow, {
    addEdge,
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    useReactFlow
} from 'reactflow';
import 'reactflow/dist/style.css';
import { isValidConnection } from '../utils/connectionRules';
import ContextMenu from './ContextMenu';

let id = 0;
const getId = () => `dndnode_${id++}`;

const FlowCanvas = () => {
    const reactFlowWrapper = useRef(null);
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [contextMenu, setContextMenu] = useState({ visible: false, x: 0, y: 0 });
    const { project } = useReactFlow();

    const onConnect = useCallback((params) => {
        const sourceNode = nodes.find(n => n.id === params.source);
        const targetNode = nodes.find(n => n.id === params.target);

        if (isValidConnection(sourceNode, targetNode)) {
            setEdges((eds) => addEdge({ ...params, animated: true, style: { stroke: '#4f46e5' } }, eds));
        } else {
            alert('Invalid connection: Only Block A to Block B allowed.');
        }
    }, [nodes]);

    const onDrop = useCallback((event) => {
        event.preventDefault();
        const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
        const data = JSON.parse(event.dataTransfer.getData('application/reactflow'));
        const position = project({
            x: event.clientX - reactFlowBounds.left,
            y: event.clientY - reactFlowBounds.top,
        });

        const newNode = {
            id: getId(),
            type: 'default',
            position,
            data: { label: data.label },
            customType: data.type,
        };

        setNodes((nds) => nds.concat(newNode));
    }, [project]);

    const onRightClick = (event, node) => {
        event.preventDefault();
        setContextMenu({ visible: true, x: event.clientX, y: event.clientY });
    };

    const handleClick = () => setContextMenu({ ...contextMenu, visible: false });

    const onDragOver = (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    };



    return (
        <div className="w-3/4 h-screen relative bg-gray-50" ref={reactFlowWrapper} onClick={handleClick}>
            <ReactFlow
                nodes={nodes.map(node => ({
                    ...node,
                    data: {
                        ...node.data,
                        label: (
                            <div
                                onContextMenu={(e) => onRightClick(e, node)}
                                className={`p-2 px-4 rounded text-white font-semibold shadow ${node.customType === 'blockA' ? 'bg-blue-600' : 'bg-green-600'
                                    }`}
                            >
                                {node.data.label}
                            </div>
                        )
                    }
                }))}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onDrop={onDrop}
                onDragOver={onDragOver}
                fitView
            >
                <MiniMap nodeColor={n => n.customType === 'blockA' ? '#3b82f6' : '#10b981'} />
                <Controls />
                <Background gap={12} size={1} color="#ccc" />
            </ReactFlow>
            <ContextMenu {...contextMenu} />
        </div>
    );
};

export default FlowCanvas;
