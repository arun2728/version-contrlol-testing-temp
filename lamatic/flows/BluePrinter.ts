const flowConfig = {
  "id": "c2d335e3-0be0-4931-8063-8ef8a6e83338",
  "name": "Blue Printer",
  "nodes": [
    {
      "id": "triggerNode_1",
      "data": {},
      "type": "triggerNode",
      "position": {
        "x": 0,
        "y": 0
      }
    }
  ],
  "edges": [],
  "status": "active",
  "created_at": "2026-05-06T17:50:50.661404+00:00"
};

export async function getNodesAndEdges(): Promise<{
    nodes: Record<string, any>[],
    edges: Record<string, any>[],
}> {
    return {
        nodes: flowConfig.nodes,
        edges: flowConfig.edges,
    }
}

export async function getFlowConfig(): Promise<Record<string, any>> {
    return flowConfig;
}